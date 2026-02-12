/**
 * Layout liviano para las herramientas internas (link, pago, alta, grupal).
 * Agrega encabezado y footer con branding Global Dream sin tocar los sistemas.
 */
import { Outlet } from 'react-router-dom';

const ToolLayout = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f7f8fb' }}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <img src="/assets/logo-global-dream.png" alt="Global Dream Travel" style={{ height: 40 }} />
          </a>
          <div style={styles.headerRight}>
            <img src="/assets/logo-iata.jpg" alt="IATA" style={{ height: 22, borderRadius: 3 }} />
            <span style={styles.iataText}>IATA<br />Acreditada</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerBrand}>
            <img src="/assets/logo-global-dream.png" alt="Global Dream Travel" style={{ height: 32, objectFit: 'contain' }} />
            <span style={styles.footerText}>Hub tecnológico de viajes familiares con acreditación IATA y certificación Disney & Universal.</span>
          </div>
          <div style={styles.footerLogos}>
            <img src="/assets/logo-disney.png" alt="Disney" style={styles.partnerLogo} />
            <img src="/assets/logo-universal.png" alt="Universal" style={styles.partnerLogo} />
            <img src="/assets/logo-iata.jpg" alt="IATA" style={styles.partnerLogo} />
          </div>
          <div style={styles.footerCopy}>
            Global Dream Travel® — Marca Registrada. Agencia Acreditada IATA. &copy; {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  header: {
    background: '#fff',
    borderBottom: '1px solid #e5e7eb',
    padding: '12px 0',
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
  },
  headerInner: {
    maxWidth: 1000,
    margin: '0 auto',
    padding: '0 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  iataText: {
    fontSize: 8,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    lineHeight: 1.3,
    color: '#64748b',
  },
  footer: {
    background: '#0f172a',
    color: '#94a3b8',
    padding: '32px 0 20px',
    marginTop: 40,
  },
  footerInner: {
    maxWidth: 1000,
    margin: '0 auto',
    padding: '0 16px',
    textAlign: 'center',
  },
  footerBrand: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  footerText: {
    fontSize: 13,
    color: '#94a3b8',
    maxWidth: 480,
    lineHeight: 1.5,
  },
  footerLogos: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    marginBottom: 20,
  },
  partnerLogo: {
    height: 36,
    padding: '6px 10px',
    background: '#fff',
    borderRadius: 10,
    objectFit: 'contain',
  },
  footerCopy: {
    fontSize: 10,
    color: '#475569',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    paddingTop: 16,
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
};

export default ToolLayout;
