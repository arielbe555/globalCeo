import { useState, useEffect } from 'react';
import { EXEC_BRIEF_PASSWORD } from '../config/execBriefPassword';

const STORAGE_KEY = 'gdt_exec_brief_granted';

const PasswordGate = ({ children }) => {
  const [granted, setGranted] = useState(false);
  const [pw, setPw] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === 'true') {
      setGranted(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pw === EXEC_BRIEF_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setGranted(true);
      setError(false);
    } else {
      setError(true);
      setPw('');
    }
  };

  if (granted) return children;

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fff',
      fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    }}>
      <div style={{ width: '100%', maxWidth: 380, padding: '0 24px', textAlign: 'center' }}>
        <p style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#999',
          marginBottom: 32,
        }}>
          Restricted Document
        </p>
        <p style={{ fontSize: 14, color: '#444', marginBottom: 28, lineHeight: 1.6 }}>
          This document requires authorization.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter access code"
            value={pw}
            onChange={(e) => { setPw(e.target.value); setError(false); }}
            autoFocus
            style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: 14,
              border: `1px solid ${error ? '#c00' : '#ddd'}`,
              borderRadius: 4,
              outline: 'none',
              fontFamily: 'inherit',
              boxSizing: 'border-box',
              color: '#333',
            }}
          />
          {error && (
            <p style={{ fontSize: 12, color: '#c00', marginTop: 8 }}>
              Incorrect code. Please try again.
            </p>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              marginTop: 16,
              padding: '12px 0',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              background: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Continue
          </button>
        </form>
        <p style={{ fontSize: 10, color: '#bbb', marginTop: 40 }}>
          For Internal Strategic Review Only
        </p>
      </div>
    </div>
  );
};

export default PasswordGate;
