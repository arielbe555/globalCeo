import { useState, useEffect } from 'react';
import { ACCESS_CODE } from '../config/accessCode';

const STORAGE_KEY = 'gdt_access_granted';

const PinGate = ({ children }) => {
  const [granted, setGranted] = useState(false);
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    // Check if already authenticated in this session
    if (sessionStorage.getItem(STORAGE_KEY) === 'true') {
      setGranted(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin === ACCESS_CODE) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setGranted(true);
      setError(false);
    } else {
      setError(true);
      setPin('');
    }
  };

  if (granted) return children;

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <img src="/assets/logo-global-dream.png" alt="Global Dream Travel" style={{ height: 48, marginBottom: 20 }} />
        <h2 style={styles.title}>Acceso Restringido</h2>
        <p style={styles.subtitle}>Ingresá el código de acceso para continuar.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            inputMode="numeric"
            maxLength={10}
            placeholder="Código de acceso"
            value={pin}
            onChange={(e) => { setPin(e.target.value); setError(false); }}
            style={{ ...styles.input, borderColor: error ? '#ef4444' : '#d1d5db' }}
            autoFocus
          />
          {error && <p style={styles.error}>Código incorrecto. Intentá de nuevo.</p>}
          <button type="submit" style={styles.button}>Ingresar</button>
        </form>
        <p style={styles.footer}>Global Dream Travel® — Uso interno</p>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    padding: 20,
    fontFamily: 'system-ui, Arial, sans-serif',
  },
  card: {
    background: '#fff',
    borderRadius: 20,
    padding: '40px 36px',
    maxWidth: 380,
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: '#0f172a',
    margin: '0 0 6px',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    margin: '0 0 24px',
  },
  input: {
    width: '100%',
    padding: 14,
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: '0.3em',
    border: '2px solid #d1d5db',
    borderRadius: 12,
    outline: 'none',
    boxSizing: 'border-box',
    marginBottom: 12,
  },
  error: {
    color: '#ef4444',
    fontSize: 13,
    margin: '0 0 10px',
    fontWeight: 600,
  },
  button: {
    width: '100%',
    padding: 14,
    fontSize: 15,
    fontWeight: 700,
    background: '#0072bc',
    color: '#fff',
    border: 'none',
    borderRadius: 12,
    cursor: 'pointer',
  },
  footer: {
    fontSize: 10,
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    marginTop: 20,
    marginBottom: 0,
  },
};

export default PinGate;
