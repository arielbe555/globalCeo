import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = resolve(__dirname, '..', 'public', 'GlobalDreamTravel-MediaKit.pdf');
const PORT = 4177;

async function startDevServer() {
  return new Promise((res, rej) => {
    const proc = spawn('npx', ['vite', '--port', String(PORT)], {
      cwd: resolve(__dirname, '..'),
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: true,
    });

    let started = false;
    const timeout = setTimeout(() => {
      if (!started) rej(new Error('Dev server did not start in 60s'));
    }, 60000);

    proc.stdout.on('data', (d) => {
      const text = d.toString();
      if (!started && text.includes('Local:')) {
        started = true;
        clearTimeout(timeout);
        res(proc);
      }
    });

    proc.stderr.on('data', (d) => {
      const text = d.toString();
      if (!started && text.includes('Local:')) {
        started = true;
        clearTimeout(timeout);
        res(proc);
      }
    });
  });
}

async function generatePDF() {
  console.log('Starting dev server...');
  const server = await startDevServer();
  console.log(`Dev server running on port ${PORT}`);

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'shell',
      timeout: 60000,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-gpu',
        '--disable-dev-shm-usage',
      ],
    });

    const page = await browser.newPage();

    await page.setViewport({ width: 1280, height: 900 });

    console.log('Navigating to /mediakit...');
    await page.goto(`http://localhost:${PORT}/mediakit`, {
      waitUntil: 'networkidle0',
      timeout: 60000,
    });

    console.log('Waiting for content to fully render...');
    await page.waitForSelector('.pdf-section', { timeout: 15000 });

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await new Promise((r) => setTimeout(r, 3000));
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise((r) => setTimeout(r, 1000));

    await page.evaluate(() => {
      document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
        img.setAttribute('loading', 'eager');
      });
    });
    await new Promise((r) => setTimeout(r, 2000));

    await page.evaluate(() => {
      const btn = document.querySelector('button.fixed');
      if (btn) btn.style.display = 'none';
    });

    console.log('Generating PDF...');
    await page.pdf({
      path: OUTPUT,
      format: 'A4',
      landscape: true,
      printBackground: true,
      margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' },
      preferCSSPageSize: false,
    });

    console.log(`PDF saved to: ${OUTPUT}`);
  } finally {
    if (browser) await browser.close();
    server.kill();
    console.log('Done!');
  }
}

generatePDF().catch((err) => {
  console.error('Failed:', err);
  process.exit(1);
});
