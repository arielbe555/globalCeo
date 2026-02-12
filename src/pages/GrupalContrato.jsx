import { useState, useRef, useEffect, useCallback } from 'react';

const WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbw0PYYHnkA7L3jn2O0f1ti8t0AkdXXdpdMjD8w6fuvDjTPqzJ-ivWAvL8apzxFPkRFvqQ/exec';

const TPL = `CONTRATO DE SERVICIOS TURÍSTICOS
VIAJE GRUPAL ORLANDO 2026

Entre:
Global Dream Travel, compañía registrada en los Estados Unidos de América, con domicilio en Orlando, Florida, EE.UU., en adelante "LA AGENCIA";
y por otro lado [[PASAJERO_NOMBRE]], DNI/Pasaporte N.º [[PASAJERO_DOC]], en adelante "EL PASAJERO";
conjuntamente, "LAS PARTES", acuerdan celebrar el presente contrato bajo las siguientes condiciones.

DATOS DEL TITULAR
Titular: [[PASAJERO_NOMBRE]]
Documento: [[PASAJERO_DOC]]
Email: [[EMAIL]]
Teléfono: [[TELEFONO]]
Residencia: [[RESIDENCIA]]
Fecha de nacimiento: [[DOB]]
Cantidad de pasajeros: [[CANT_PASAJEROS]]

Listado de pasajeros (Anexo I):
[[LISTA_PASAJEROS]]

1. OBJETO
LA AGENCIA organizará y brindará los servicios turísticos del viaje grupal a Orlando, Florida, EE.UU., del 8 al 20 de septiembre de 2026, para los pasajeros detallados en el Anexo I.

2. PRECIO Y FORMA DE PAGO
Tarifas de referencia:
Base doble: USD 5350.00 por persona
Base triple : USD 4975.00 por persona
Base cuádruple: USD 4590.00 por persona
Menor (3–9 años): USD 4238.00  por persona
Suite Family (5-6 pax) 


Forma de pago:
• Reserva / Seña: USD 500 por pasajero, a la firma del presente y con el envío del formulario de datos.
• Saldo: El saldo restante se abona en cuotas mensuales o según los plazos indicados por LA AGENCIA, y deberá estar totalmente cancelado hasta 90 días antes del inicio del viaje.
• Pago en efectivo: 7% de descuento sobre el monto total (no aplicable a la seña).

Datos informados por EL PASAJERO:
• Monto informado para reservar (USD): [[MONTO_RESERVA_USD]]
• Forma de pago seleccionada: [[FORMA_PAGO]]
• Fecha límite de pago (48h si corresponde): [[DEADLINE_PAGO]]

La reserva mínima exigida es de USD 500 por pasajero. En caso de que [[MONTO_RESERVA_USD]] sea superior, prevalecerá lo informado aquí.

3. POLÍTICA DE CANCELACIÓN Y ARREPENTIMIENTO
• Cancelación dentro de 10 días corridos de la reserva: reembolso del 100% de la seña.
• Vencido ese plazo, la seña/anticipo será NO REEMBOLSABLE salvo fuerza mayor justificada y aceptada por LA AGENCIA.
• Cancelaciones posteriores: no habrá reembolsos, salvo montos recuperables de proveedores (sujetos a penalidades).
• Reembolsos se procesarán hasta en 30 días hábiles, descontando gastos administrativos.

4. SERVICIOS INCLUIDOS
• Itinerario oficial (alojamiento, entradas, comidas, actividades).
• Coordinador permanente.
• Hoteles dentro de Disney y Universal.
• Traslados internos.
• Assist Card incluida (40% off para todo el viaje).
• Habitación compartida (salvo contratación individual).

5. SERVICIOS NO INCLUIDOS
• Vuelos.
• Traslados aeropuerto-hotel / hotel-aeropuerto.
• Gastos personales, bebidas alcohólicas, y servicios no especificados.

6. ITINERARIO Y DOCUMENTACIÓN
• Itinerario final se entrega 2 meses antes del viaje.
• EL PASAJERO es responsable de contar con documentación migratoria y sanitaria.
• La falta de documentación no genera derecho a reembolso.

7. FUERZA MAYOR, SALUD Y COVID-19
En caso de pandemia, cierre de fronteras, disposiciones oficiales, desastres naturales u otros eventos extraordinarios, LA AGENCIA podrá reprogramar, modificar, ofrecer créditos/vouchers o gestionar reembolsos según lo permitan los proveedores. Los gastos administrativos y montos no recuperables serán descontados.

8. NORMAS DE CONVIVENCIA
EL PASAJERO acepta las normas de convivencia y seguridad. LA AGENCIA podrá excluir sin reembolso a quien afecte la seguridad o disfrute del grupo.

9. COMUNICACIONES
EL PASAJERO autoriza a LA AGENCIA a enviar comunicaciones electrónicas (email, WhatsApp, SMS).

10. JURISDICCIÓN
Se someten a los tribunales de Orlando, Florida, EE.UU.`;

function fmt(dt) {
  const p = (n) => String(n).padStart(2, '0');
  return `${dt.getFullYear()}-${p(dt.getMonth() + 1)}-${p(dt.getDate())} ${p(dt.getHours())}:${p(dt.getMinutes())}`;
}

function fileToB64(file) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result);
    r.onerror = () => rej(new Error('No se pudo leer ' + file.name));
    r.readAsDataURL(file);
  });
}

const GrupalContrato = () => {
  const [form, setForm] = useState({
    email: '', fullname: '', doc_id: '', phone: '', residence: '', dob: '',
    paxCount: '1', payMode: '', paxList: '', customAmount: '', notes: '',
  });
  const [contractText, setContractText] = useState('Cargando vista previa…');
  const [statusMsg, setStatusMsg] = useState(null);
  const [statusOk, setStatusOk] = useState(false);
  const [terms, setTerms] = useState(false);
  const [sending, setSending] = useState(false);

  const canvasRef = useRef(null);
  const drawingRef = useRef(false);
  const lastRef = useRef(null);
  const docFrontRef = useRef(null);
  const docBackRef = useRef(null);

  const val = (name) => form[name] || '';
  const updateField = (name, value) => setForm((prev) => ({ ...prev, [name]: value }));

  const toast = (msg, ok = false) => { setStatusMsg(msg); setStatusOk(ok); };

  const buildPreview = useCallback(() => {
    const fullname = val('fullname') || '________________';
    const docid = val('doc_id') || '________________';
    const email = val('email') || '________________';
    const phone = val('phone') || '________________';
    const res = val('residence') || '________________';
    const dob = val('dob') || '____-__-__';
    const pax = Number(val('paxCount') || 0);
    const list = (val('paxList') || '—').trim();
    const custom = Number(val('customAmount') || 0);
    const monto = Math.max(custom || (pax * 500), pax * 500);
    const payMode = val('payMode') || '';
    const forma = payMode === 'TRANSFER' ? 'Transferencia / Efectivo (48h)' :
      payMode === 'LINK' ? 'Link de pago (tarjeta/online)' : '—';
    let deadline = '—';
    if (payMode === 'TRANSFER') { const dt = new Date(); dt.setHours(dt.getHours() + 48); deadline = fmt(dt); }

    return TPL
      .replaceAll('[[PASAJERO_NOMBRE]]', fullname)
      .replaceAll('[[PASAJERO_DOC]]', docid)
      .replaceAll('[[EMAIL]]', email)
      .replaceAll('[[TELEFONO]]', phone)
      .replaceAll('[[RESIDENCIA]]', res)
      .replaceAll('[[DOB]]', dob)
      .replaceAll('[[CANT_PASAJEROS]]', pax ? String(pax) : '0')
      .replaceAll('[[LISTA_PASAJEROS]]', list)
      .replaceAll('[[MONTO_RESERVA_USD]]', String(monto))
      .replaceAll('[[FORMA_PAGO]]', forma)
      .replaceAll('[[DEADLINE_PAGO]]', deadline);
  }, [form]);

  useEffect(() => { setContractText(buildPreview()); }, [buildPreview]);

  // Canvas signature
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = canvas.clientWidth;
    canvas.height = 180;
    const ctx = canvas.getContext('2d');

    const pos = (e) => {
      const r = canvas.getBoundingClientRect();
      const t = e.touches ? e.touches[0] : e;
      return { x: t.clientX - r.left, y: t.clientY - r.top };
    };

    const mouseDown = (e) => { drawingRef.current = true; lastRef.current = pos(e); };
    const mouseMove = (e) => {
      if (!drawingRef.current) return;
      const q = pos(e);
      ctx.lineWidth = 2; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(lastRef.current.x, lastRef.current.y); ctx.lineTo(q.x, q.y); ctx.stroke();
      lastRef.current = q;
    };
    const stop = () => { drawingRef.current = false; };
    const touchStart = (e) => { e.preventDefault(); drawingRef.current = true; lastRef.current = pos(e); };
    const touchMove = (e) => { e.preventDefault(); if (!drawingRef.current) return; const q = pos(e); ctx.lineWidth = 2; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(lastRef.current.x, lastRef.current.y); ctx.lineTo(q.x, q.y); ctx.stroke(); lastRef.current = q; };

    canvas.addEventListener('mousedown', mouseDown);
    canvas.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseup', stop);
    canvas.addEventListener('touchstart', touchStart, { passive: false });
    canvas.addEventListener('touchmove', touchMove, { passive: false });
    canvas.addEventListener('touchend', stop);

    const handleResize = () => { canvas.width = canvas.clientWidth; canvas.height = 180; };
    window.addEventListener('resize', handleResize);

    return () => {
      canvas.removeEventListener('mousedown', mouseDown);
      canvas.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseup', stop);
      canvas.removeEventListener('touchstart', touchStart);
      canvas.removeEventListener('touchmove', touchMove);
      canvas.removeEventListener('touchend', stop);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const clearSig = () => {
    const canvas = canvasRef.current;
    if (canvas) canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSubmit = async () => {
    try {
      if (!terms) throw new Error('Debés aceptar el contrato.');
      const need = ['email', 'fullname', 'doc_id', 'phone', 'residence', 'dob', 'paxList', 'paxCount', 'payMode'];
      for (const n of need) { if (!val(n)) throw new Error('Falta: ' + n); }
      if (!(Number(val('paxCount') || 0) > 0)) throw new Error('Cantidad de pasajeros inválida.');

      const f1 = docFrontRef.current?.files[0];
      const f2 = docBackRef.current?.files[0];
      if (!f1 || !f2) throw new Error('Adjuntá documento frente y dorso (o PDF).');
      if (f1.size > 8 * 1024 * 1024 || f2.size > 8 * 1024 * 1024) throw new Error('Cada archivo debe pesar ≤ 8 MB.');

      setSending(true);
      toast('Enviando…', true);
      const [b64f1, b64f2] = await Promise.all([fileToB64(f1), fileToB64(f2)]);

      const fd = new FormData();
      ['email', 'fullname', 'doc_id', 'phone', 'residence', 'dob', 'paxCount', 'paxList', 'payMode', 'customAmount', 'notes'].forEach((k) => fd.append(k, val(k)));
      fd.append('preview', contractText);
      fd.append('signatureDataURL', canvasRef.current.toDataURL('image/png'));
      fd.append('doc_front_name', f1.name); fd.append('doc_front_mime', f1.type || 'application/octet-stream'); fd.append('doc_front_bytes', f1.size); fd.append('doc_front_b64', b64f1);
      fd.append('doc_back_name', f2.name); fd.append('doc_back_mime', f2.type || 'application/octet-stream'); fd.append('doc_back_bytes', f2.size); fd.append('doc_back_b64', b64f2);

      const r = await fetch(WEBAPP_URL, { method: 'POST', body: fd });
      const ct = r.headers.get('content-type') || '';
      if (!ct.includes('application/json')) {
        const txt = await r.text().catch(() => '(sin cuerpo)');
        throw new Error('Servidor sin JSON. Respuesta: ' + txt);
      }
      const j = await r.json();
      if (!j.ok) throw new Error(j.error || 'Error del servidor');
      toast('✅ Listo. Enviamos el PDF firmado a tu email.', true);

      setForm({ email: '', fullname: '', doc_id: '', phone: '', residence: '', dob: '', paxCount: '1', payMode: '', paxList: '', customAmount: '', notes: '' });
      if (docFrontRef.current) docFrontRef.current.value = '';
      if (docBackRef.current) docBackRef.current.value = '';
      clearSig();
    } catch (err) {
      console.error(err);
      toast(err.message || String(err));
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={S.wrap}>
      <h1 style={S.h1}>Global Dream Travel — Contrato Grupal Orlando 2026</h1>
      <p style={S.lead}>Completá tus datos, adjuntá documentación, revisá el contrato, firmá y enviá. Recibirás el PDF firmado por email.</p>

      <div style={S.card}>
        <div style={S.grid}>
          <div><label style={S.label}>Email *</label><input style={S.input} value={form.email} onChange={(e) => updateField('email', e.target.value)} required /></div>
          <div><label style={S.label}>Nombre y Apellido (Titular) *</label><input style={S.input} value={form.fullname} onChange={(e) => updateField('fullname', e.target.value)} required /></div>
          <div><label style={S.label}>DNI / Pasaporte Nº *</label><input style={S.input} value={form.doc_id} onChange={(e) => updateField('doc_id', e.target.value)} required /></div>
          <div><label style={S.label}>Teléfono *</label><input style={S.input} value={form.phone} onChange={(e) => updateField('phone', e.target.value)} required /></div>
          <div><label style={S.label}>Residencia *</label><input style={S.input} value={form.residence} onChange={(e) => updateField('residence', e.target.value)} required /></div>
          <div><label style={S.label}>Fecha de Nacimiento *</label><input style={S.input} type="date" value={form.dob} onChange={(e) => updateField('dob', e.target.value)} required /></div>
        </div>

        <div style={S.grid}>
          <div>
            <label style={S.label}>Cantidad de Pasajeros *</label>
            <input style={S.input} type="number" min="1" step="1" value={form.paxCount} onChange={(e) => updateField('paxCount', e.target.value)} required />
            <div style={S.muted}>Seña mínima: <b>USD 500 por pasajero</b>.</div>
          </div>
          <div>
            <label style={S.label}>Forma de pago *</label>
            <select style={S.input} value={form.payMode} onChange={(e) => updateField('payMode', e.target.value)} required>
              <option value="">Seleccioná…</option>
              <option value="LINK">Link de pago (tarjeta/online)</option>
              <option value="TRANSFER">Transferencia / Efectivo (48h)</option>
            </select>
          </div>
        </div>

        <label style={S.label}>Listado de Pasajeros (uno por línea) *</label>
        <textarea style={{ ...S.input, minHeight: 120 }} value={form.paxList} onChange={(e) => updateField('paxList', e.target.value)} placeholder={'Nombre Apellido 1\nNombre Apellido 2'} required />

        <div style={S.grid}>
          <div>
            <label style={S.label}>Monto total a reservar (USD) — opcional</label>
            <input style={S.input} type="number" min="0" step="1" value={form.customAmount} onChange={(e) => updateField('customAmount', e.target.value)} placeholder="Si lo dejás vacío, se calcula 500 x pasajeros" />
          </div>
          <div>
            <label style={S.label}>Observaciones (opcional)</label>
            <input style={S.input} value={form.notes} onChange={(e) => updateField('notes', e.target.value)} />
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div style={S.card}>
        <h3 style={{ margin: '0 0 8px' }}>Documentación</h3>
        <div style={S.grid}>
          <div>
            <label style={S.label}>Documento — frente (JPG/PNG/PDF) *</label>
            <input ref={docFrontRef} type="file" accept=".jpg,.jpeg,.png,.pdf" required />
            <div style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>Hasta 8 MB</div>
          </div>
          <div>
            <label style={S.label}>Documento — dorso (JPG/PNG/PDF) *</label>
            <input ref={docBackRef} type="file" accept=".jpg,.jpeg,.png,.pdf" required />
            <div style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>Hasta 8 MB</div>
          </div>
        </div>
      </div>

      {/* Contract Preview */}
      <div style={S.card}>
        <h3 style={{ margin: '0 0 8px' }}>Vista previa del contrato</h3>
        <div style={{ whiteSpace: 'pre-wrap', background: '#fff', border: '1px dashed #e2e8f0', padding: 14, borderRadius: 12, lineHeight: 1.55 }}>
          {contractText}
        </div>
      </div>

      {/* Signature */}
      <div style={S.card}>
        <h3 style={{ margin: '0 0 8px' }}>Firma digital del pasajero titular</h3>
        <canvas ref={canvasRef} style={{ width: '100%', height: 180, border: '1px dashed #cbd5e1', borderRadius: 10, background: '#fff', touchAction: 'none' }} />
        <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
          <button style={S.btnGhost} onClick={clearSig}>Borrar firma</button>
        </div>
      </div>

      {/* Submit */}
      <div style={S.card}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: 10 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} />
            Declaro haber leído y acepto el contrato.
          </label>
          <button style={S.btnPrimary} disabled={sending} onClick={handleSubmit}>
            {sending ? 'Enviando…' : 'Enviar y recibir PDF'}
          </button>
        </div>
        {statusMsg && (
          <div style={{ marginTop: 8, padding: 10, border: '1px solid #e2e8f0', borderRadius: 10, background: statusOk ? '#ecfdf5' : '#fff7ed', color: statusOk ? '#065f46' : '#92400e' }}>
            {statusMsg}
          </div>
        )}
      </div>
    </div>
  );
};

const S = {
  wrap: { maxWidth: 1000, margin: '20px auto', padding: '0 14px', fontFamily: 'system-ui,Arial', color: '#0f172a', fontSize: 14, lineHeight: 1.55 },
  h1: { margin: '0 0 6px' },
  lead: { color: '#64748b', margin: '0 0 14px' },
  card: { background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: 16, margin: '12px 0' },
  label: { display: 'block', fontWeight: 700, margin: '10px 0 6px' },
  input: { width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 10, boxSizing: 'border-box', fontSize: 14, outline: 'none' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 },
  muted: { color: '#64748b', fontSize: 13 },
  btnPrimary: { border: 0, padding: '12px 16px', borderRadius: 10, fontWeight: 800, cursor: 'pointer', background: '#0b132b', color: '#fff' },
  btnGhost: { border: 0, padding: '12px 16px', borderRadius: 10, fontWeight: 800, cursor: 'pointer', background: '#eef2ff' },
};

export default GrupalContrato;
