import { useState } from 'react';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzKWc_nHZjjYJqGHBzvUCHfnfKAoX0cBHi_Rwhi4bfoHUDQc8zPfHttojA6F6PAOT-j/exec';
const RECHAZO_URL = 'https://script.google.com/macros/s/AKfycbwN68uCXsdZr_TXhwwRDLCquRRe3wRVHkUQn0Okv0JEA-SK8x8s2hU8ztNhC2WOG9Wq/exec';

function generarID() {
  const charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < 10; i++) id += charset.charAt(Math.floor(Math.random() * charset.length));
  return id;
}

const LinkGenerator = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [enix, setEnix] = useState('');
  const [pasajero, setPasajero] = useState('');
  const [mailPasajero, setMailPasajero] = useState('');
  const [monto, setMonto] = useState('');
  const [linkGenerado, setLinkGenerado] = useState('');
  const [showLink, setShowLink] = useState(false);

  // Rechazo
  const [emailCliente, setEmailCliente] = useState('');
  const [mensajeEstado, setMensajeEstado] = useState('');
  const [mensajeColor, setMensajeColor] = useState('#555');

  const handleSubmit = (e) => {
    e.preventDefault();
    const montoClean = monto.trim().replace(',', '.');
    if (!/^\d+(\.\d{1,2})?$/.test(montoClean)) {
      alert('❌ El monto debe ser un número válido con hasta 2 decimales.');
      return;
    }

    const id = generarID();
    const formData = new FormData();
    formData.append('id', id);
    formData.append('nombre_agente', nombre.trim());
    formData.append('email_agente', email.trim());
    formData.append('monto', montoClean);
    formData.append('enix', enix.trim());
    formData.append('pasajero', pasajero.trim());
    formData.append('mail_pasajero', mailPasajero.trim());

    fetch(SCRIPT_URL, { method: 'POST', body: formData })
      .then((response) => {
        if (response.ok) {
          const link = `https://www.globaldream.travel/pago1?id=${id}&monto=${montoClean}`;
          setLinkGenerado(link);
          setShowLink(true);
        } else {
          alert('❌ Error al registrar el link. Intente nuevamente.');
        }
      })
      .catch(() => alert('❌ Error de conexión al servidor. Verifique si el script está publicado correctamente.'));
  };

  const copyLink = () => {
    navigator.clipboard.writeText(linkGenerado).then(() => {
      alert('✅ Link copiado al portapapeles.');
    }).catch(() => {
      // Fallback
      const input = document.createElement('input');
      input.value = linkGenerado;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      alert('✅ Link copiado al portapapeles.');
    });
  };

  const enviarRechazo = () => {
    if (!emailCliente || !emailCliente.includes('@')) {
      setMensajeEstado('❌ Ingresá un correo válido.');
      setMensajeColor('red');
      return;
    }
    setMensajeEstado('⏳ Enviando notificación...');
    setMensajeColor('#555');

    fetch(`${RECHAZO_URL}?func=declinedManual&email=${encodeURIComponent(emailCliente)}`)
      .then((response) => response.text())
      .then((result) => {
        if (result === 'OK') {
          setMensajeEstado('✅ Correo de rechazo enviado correctamente.');
          setMensajeColor('green');
        } else {
          setMensajeEstado('❌ No se pudo enviar el correo. Revisá el servidor.');
          setMensajeColor('red');
        }
      })
      .catch(() => {
        setMensajeEstado('❌ Error de conexión con el servidor.');
        setMensajeColor('red');
      });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f4f4f4', margin: 0, padding: '40px 20px', minHeight: '100vh' }}>
      {/* Generar Link de Pago */}
      <div style={{ background: 'white', padding: 30, maxWidth: 420, width: '100%', borderRadius: 12, boxShadow: '0px 4px 20px rgba(0,0,0,0.1)', textAlign: 'center', margin: '0 auto 30px' }}>
        <h2 style={{ color: '#007bff', marginBottom: 20 }}>Generar Link de Pago</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre del Agente" required value={nombre} onChange={(e) => setNombre(e.target.value)}
            style={inputStyle} />
          <input type="email" placeholder="Email del Agente" required value={email} onChange={(e) => setEmail(e.target.value)}
            style={inputStyle} />
          <input type="text" placeholder="Código ENIX" required value={enix} onChange={(e) => setEnix(e.target.value)}
            style={inputStyle} />
          <input type="text" placeholder="Pasajero Principal" required value={pasajero} onChange={(e) => setPasajero(e.target.value)}
            style={inputStyle} />
          <input type="email" placeholder="Mail del Pasajero" required value={mailPasajero} onChange={(e) => setMailPasajero(e.target.value)}
            style={inputStyle} />
          <input type="text" placeholder="Monto a Solicitar (ej: 412.20)" required value={monto} onChange={(e) => setMonto(e.target.value)}
            style={inputStyle} />
          <button type="submit" style={{ ...btnStyle, backgroundColor: '#007bff', color: 'white' }}>
            Generar Link
          </button>
        </form>

        {showLink && (
          <div style={{ marginTop: 15, textAlign: 'left' }}>
            <p><strong>Link generado:</strong></p>
            <input type="text" readOnly value={linkGenerado}
              style={{ ...inputStyle, backgroundColor: '#f9f9f9', color: '#333' }} />
            <button onClick={copyLink} style={{ ...btnStyle, backgroundColor: '#28a745', color: 'white', marginTop: 10 }}>
              Copiar Link
            </button>
          </div>
        )}
      </div>

      {/* Notificar Tarjeta Rechazada */}
      <div style={{ maxWidth: 500, margin: '0 auto', padding: 30, backgroundColor: '#ffffff', borderRadius: 10, fontFamily: 'Arial, sans-serif', boxShadow: '0 0 10px rgba(0,0,0,0.15)' }}>
        <h2 style={{ color: '#dc3545', textAlign: 'center' }}>❌ Notificar Tarjeta Rechazada</h2>
        <label htmlFor="emailCliente"><strong>Ingresar el mail del cliente</strong></label>
        <input type="email" placeholder="cliente@correo.com" value={emailCliente} onChange={(e) => setEmailCliente(e.target.value)}
          style={{ width: '100%', padding: 10, marginTop: 8, marginBottom: 20, border: '1px solid #ccc', borderRadius: 5, fontSize: 15, boxSizing: 'border-box' }} />
        <button onClick={enviarRechazo}
          style={{ width: '100%', padding: 12, backgroundColor: '#dc3545', color: 'white', fontWeight: 'bold', border: 'none', borderRadius: 5, cursor: 'pointer' }}>
          🚨 Enviar aviso de rechazo
        </button>
        {mensajeEstado && (
          <p style={{ marginTop: 20, fontSize: 14, textAlign: 'center', color: mensajeColor }}>{mensajeEstado}</p>
        )}
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: 12,
  margin: '10px 0',
  fontSize: 16,
  borderRadius: 6,
  border: '1px solid #ccc',
  boxSizing: 'border-box',
};

const btnStyle = {
  width: '100%',
  padding: 12,
  fontSize: 16,
  borderRadius: 6,
  border: 'none',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default LinkGenerator;
