import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = resolve(__dirname, '..', 'public', 'latam-exec-brief-2025.pdf');
const PORT = 4178;

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
    await page.setViewport({ width: 800, height: 1100 });

    console.log('Navigating to /latam-disney-executive-brief-2025...');
    await page.goto(`http://localhost:${PORT}/latam-disney-executive-brief-2025`, {
      waitUntil: 'networkidle0',
      timeout: 60000,
    });

    /* Bypass password gate by injecting sessionStorage */
    await page.evaluate(() => {
      sessionStorage.setItem('gdt_exec_brief_granted', 'true');
    });
    await page.reload({ waitUntil: 'networkidle0', timeout: 60000 });

    console.log('Waiting for content to render...');
    await new Promise((r) => setTimeout(r, 3000));

    /* Hide download button for PDF */
    await page.evaluate(() => {
      document.querySelectorAll('.no-print').forEach((el) => {
        el.style.display = 'none';
      });
    });

    console.log('Generating PDF...');
    await page.pdf({
      path: OUTPUT,
      format: 'A4',
      landscape: false,
      printBackground: true,
      margin: { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' },
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
