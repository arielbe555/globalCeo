import { useState, useRef, useEffect, useCallback } from 'react';

const WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbyfLTenM8QNzKibxVYBfUWnRyrJfyFHME9YVhRhPMctNMDqK2J7dWJbywfI1yjud-6eyA/exec';
const MAX = 5 * 1024 * 1024;
const TIMEOUT_MS = 30000;
const REQUIRED = ['email', 'fullname', 'fecha_nac', 'dni', 'telefono', 'residencia'];

const CONTRACT_TPL = `GLOBAL DREAM TRAVEL
Marca registrada en Florida – Operada por A.J.O LLC

CONTRATO DE AGENCIA INDEPENDIENTE
PREÁMBULO – BIENVENIDA
Bienvenido a Global Dream Travel. Aquí no solo se venden viajes, se cumplen sueños. Acompañamos el crecimiento, creemos en la pasión, la independencia y la responsabilidad de cada agente. Este contrato establece las bases legales de nuestra relación, pero también representa una alianza de crecimiento mutuo.

1. PARTES DEL CONTRATO
Global Dream Travel, con domicilio legal en 3275 S John Young Pkwy, Suite 1120, Kissimmee, Florida, EE.UU., en adelante "la Agencia".

Y: [Nombre completo del Agente], identificado con [DNI/Pasaporte Nº], con domicilio en [dirección declarada], correo electrónico [email], y teléfono [teléfono], en adelante "el Agente".

2. OBJETO
El presente contrato tiene por objeto autorizar al Agente a actuar como agente independiente, utilizando la marca, los sistemas y los productos de Global Dream Travel.

3. VIGENCIA Y RESCISIÓN
- Vigencia inicial: 12 meses, con renovación automática.
- Cualquiera de las partes podrá rescindir en cualquier momento sin penalidad, con preaviso de 15 días.

4. COMISIONES
- El Agente percibirá una comisión equivalente al 50% de la comisión total efectivamente recibida por la Agencia por cada venta propia.
- La Agencia podrá implementar planes de bonificación progresiva o incentivos en función del desempeño del Agente. Dichos planes serán comunicados oportunamente y podrán formalizarse por escrito.
- Si al momento de la baja existieran comisiones pendientes ya devengadas, la Agencia se compromete a abonarlas en los plazos acordados.

5. COSTOS
- El presente ítem se encuentra bonificado a favor del agente, en virtud de que la agencia asume, de forma voluntaria y unilateral, el pago de las obligaciones mensuales derivadas del mismo. No obstante, la agencia se reserva expresamente el derecho de revisar, modificar, suspender o revocar dicha bonificación 30 días antes , atendiendo al grado de compromiso, cumplimiento contractual y desempeño profesional demostrado por el agente, sin que ello genere derecho a reclamo o indemnización alguna por parte de éste.
6. RESPONSABILIDADES DEL AGENTE
- El Agente es responsable por cualquier error en emisión de pasajes, reservas o servicios que genere costos adicionales.
- El Agente se compromete a cargar todas sus ventas en los sistemas oficiales de la Agencia.
- El Agente deberá utilizar los formularios oficiales de autorización de pago, verificación de identidad del pasajero y confirmación de servicios provistos por la Agencia, considerándolos como respaldo.

7. USO DE MARCA Y SISTEMAS
- El Agente podrá usar la marca "Global Dream Travel" únicamente mientras dure el presente contrato.
- Queda prohibido su uso, junto con sistemas, procesos, accesos, motores de reserva, leads, capacitaciones, manuales y know-how de la Agencia, durante la vigencia del contrato y por un plazo de 12 meses posteriores a su terminación.
- En caso de incumplimiento, el Agente abonará una penalidad fija de USD 1.000, sin perjuicio de los daños adicionales que pudieran corresponder.

8. CONFIDENCIALIDAD
El Agente se obliga a mantener reserva absoluta sobre toda la información, clientes, procesos y sistemas de la Agencia, aun después de finalizado el contrato.

9. COMPROMISO DE LA AGENCIA
- La Agencia se compromete a brindar al Agente asistencia en la apertura de cuentas en EE.UU. o provisión de medios alternativos de pago de comisiones.
- Capacitación y soporte comercial permanente.
- Pago de comisiones en tiempo y forma.

10. DOCUMENTACIÓN DEL AGENTE
El Agente deberá presentar: copia de DNI o Pasaporte vigente; comprobante de domicilio actualizado; y datos de contacto válidos (email y teléfono). La validación de identidad y documentación es condición esencial para la entrada en vigor del presente contrato.

11. SISTEMAS, PLATAFORMAS Y PROCEDIMIENTOS
1) Uso exclusivo: El Agente se compromete a operar únicamente a través de los sistemas y plataformas oficiales proporcionados por Global Dream Travel. Queda prohibido el uso de sistemas externos para emitir, cotizar o gestionar servicios turísticos vinculados a la Agencia. Asimismo, en caso de que el Agente posea su propia agencia, represente a otra, o trabaje con un proveedor distinto a los designados por Global Dream Travel, no podrá presentarlos, promocionarlos ni atribuirlos como parte de Global Dream Travel, evitando inducir a error a los clientes o terceros.
2) Accesos personales: Cada Agente recibirá credenciales únicas e intransferibles para ingresar a los sistemas de la Agencia. El Agente es responsable de su custodia y de todo acto realizado con ellas, incluso en caso de negligencia.
3) Integridad de la información: Toda operación, cotización o reserva cargada en los sistemas deberá ser veraz, completa y actualizada. La Agencia podrá auditar en cualquier momento dicha información.
4) Prohibición de duplicación: El Agente no podrá copiar, clonar, exportar ni reproducir bases de datos, plantillas, artes, manuales, accesos o cualquier otro recurso digital o material de la Agencia.
5) Canales oficiales de cobro y pago: Todos los pagos deberán canalizarse únicamente a través de los medios autorizados por Global Dream Travel.
6) Propiedad intelectual: Todo contenido generado o adaptado bajo la marca GLOBAL DREAM TRAVEL (cotizaciones, presentaciones, flyers, artes digitales, materiales de capacitación) será propiedad exclusiva de la Agencia.
7) Cumplimiento de precios y políticas: El Agente se obliga a respetar las tarifas, promociones y políticas de venta establecidas por la Agencia, quedando prohibido aplicar descuentos o condiciones distintas sin autorización escrita.
8) Comunicación institucional: El Agente podrá usar sus redes sociales para promocionar, siempre que el uso de la marca Global Dream Travel sea respetuoso, no engañoso y no afecte la reputación de la Agencia.
9) Sanciones y suspensión: El incumplimiento de cualquiera de estas obligaciones habilitará a la Agencia a suspender de forma inmediata el acceso del Agente a los sistemas, sin perjuicio de reclamar los daños ocasionados.
10. Exclusividad en la comercialización
 El Agente reconoce y acepta que los servicios comercializados por GLOBAL DREAM TRAVEL, a través de su plataforma global, revisten carácter exclusivo, y que el acceso conferido mediante credenciales personales y/o usuario individual tiene como única finalidad la intermediación y comercialización de los referidos servicios dentro del marco previamente autorizado por la Agencia.
En tal sentido, queda expresamente prohibido al Agente ofrecer, promover, distribuir o comercializar, en forma directa o indirecta, por cuenta propia o de terceros, dichos servicios —o aquellos de naturaleza similar— a través de canales no autorizados, incluyendo, de manera enunciativa pero no limitativa, redes sociales, plataformas digitales, sitios web u otros medios ajenos a los formalmente habilitados por la Agencia (incluyendo, a título ejemplificativo, servicios como Assist Card).
El incumplimiento de esta obligación constituirá una infracción grave a los términos y condiciones que rigen la presente relación contractual, facultando a GLOBAL DREAM TRAVEL a adoptar, sin necesidad de interpelación previa, las medidas que estime pertinentes, tales como la suspensión inmediata del acceso a la plataforma, la resolución unilateral del vínculo comercial, y/o el inicio de las acciones legales correspondientes, incluyendo aquellas tendientes a la reparación de los daños y perjuicios ocasionados.
Se deja constancia, no obstante, que aquellos Agentes que cuenten con agencia propia podrán quedar exceptuados de la restricción mencionada, siempre que dicha condición haya sido expresamente declarada, documentada y aceptada por escrito ante la Founder de GLOBAL DREAM TRAVEL, con carácter previo y en tiempo oportuno. En caso de no cumplirse con esta exigencia formal, la presente cláusula será igualmente aplicable en todos sus términos, sin excepción alguna.

12. FACTURACIÓN DE COMISIONES EN MONEDA LOCAL
En los casos en que el Agente perciba comisiones en pesos argentinos u otra moneda local, correspondientes a la comercialización de seguros de viaje (ej. Assist Card) u otros productos específicos autorizados por la Agencia, el Agente tendrá la obligación de emitir las facturas o comprobantes fiscales correspondientes, conforme a la normativa vigente en su país de residencia.
La Agencia no será responsable por incumplimientos fiscales o tributarios del Agente frente a organismos de recaudación locales. El Agente asume la plena responsabilidad de su correcta facturación, declaración y pago de impuestos en relación a dichas comisiones.

13. JURISDICCIÓN
Este contrato se regirá por las leyes de los Estados Unidos, Estado de Florida, Condado de Orange.

14. CONDUCTA Y COMUNICACIÓN PROFESIONAL
El Agente se compromete a mantener en todo momento un trato y comunicación profesional con clientes, proveedores, otros agentes y con la propia Agencia, tanto en interacciones directas como en entornos digitales y redes sociales. Queda prohibida cualquier conducta que pueda afectar la reputación o imagen de Global Dream Travel.

15. NO CAPTACIÓN Y RECLUTAMIENTO
Durante la vigencia del presente contrato y por un período de 12 meses posteriores a su finalización, el Agente no podrá reclutar empleados, agentes o colaboradores de Global Dream Travel, directa o indirectamente.
16. DESAFECTACIÓN DE BENEFICIOS DE ESCALAMIENTO Se establece que los planes de bonificación progresiva, incentivos por volumen o escalas de comisiones superiores a la base, son beneficios exclusivos para Agentes activos y en cumplimiento contractual. En caso de terminación del presente contrato, ya sea por decisión unilateral de cualquiera de las partes o por rescisión con causa, dichos beneficios quedan automáticamente desafectados. Las comisiones pendientes de cobro que se hayan devengado antes de la fecha de baja se liquidarán respetando estrictamente el porcentaje base estipulado en la Cláusula 4 (50%), perdiendo vigencia cualquier porcentaje extra o "bonus" que el Agente hubiese alcanzado previamente.

17. EVALUACIÓN SEMESTRAL DE PRODUCTIVIDAD Con el fin de garantizar la eficiencia operativa, se establece un esquema de revisión de desempeño con una periodicidad de seis (6) meses. En dicha revisión se evaluará el volumen de ventas y la actividad del Agente. En caso de que el Agente no registre productividad o no alcance los objetivos mínimos durante el semestre evaluado, Global Dream Travel se reserva la facultad de:

Revocar la bonificación del costo de usuario: El Agente perderá la gratuidad de los sistemas y deberá comenzar a abonar el costo mensual de mantenimiento para mantener su cuenta activa.

Rescindir el contrato: Proceder a la baja del Agente por inactividad, conforme a los términos de rescisión vigentes.

18. REVOCACIÓN DE BONIFICACIÓN Y PAGOS POST-BAJA La bonificación del costo mensual de mantenimiento de sistemas y usuario (referida en la Cláusula 5 del contrato original) está sujeta estrictamente a la actividad productiva y a la vigencia del contrato. Dicha bonificación quedará revocada automáticamente, pasando el costo a ser exigible de pago inmediato, en los siguientes supuestos:

Baja por decisión unilateral de Global Dream Travel por falta de productividad o incomunicación.

Rescisión unilateral por parte del Agente.

Incumplimiento de las métricas semestrales establecidas en la cláusula 17.

19. ACCESO A PLATAFORMAS PARA COBROS PENDIENTES Si al momento de la baja el Agente tuviera comisiones pendientes de cobro y requiriese mantener el acceso activo a las plataformas, sistemas o correos corporativos de Global Dream Travel para su gestión o seguimiento, deberá abonar el costo mensual de usuario ("Fee de Mantenimiento"). Este pago es condición obligatoria para mantener las credenciales habilitadas. El no pago de este concepto habilitará a la Agencia a bloquear inmediatamente todos los accesos, independientemente de la existencia de saldos pendientes de liquidación.

20. ACLARATORIA SOBRE PENALIDADES Y COSTOS OPERATIVOS Se deja expresa constancia que el concepto de "sin penalidad" mencionado en la Cláusula 3 del contrato original refiere a la inexistencia de multas punitorias por rescisión anticipada. No obstante, los costos de usuario y mantenimiento de sistemas aquí descritos corresponden a costos operativos por uso de servicio. Por tanto, el cobro de dicho mantenimiento tras la baja o por falta de productividad no constituye una penalidad, sino la asunción de un costo que la Agencia deja de bonificar debido al cese de la relación productiva


FIRMAS DIGITALES
Por el Agente:
Nombre completo: [Nombre completo del Agente]
Firma digital: (la firma se inserta en el documento final)
`;

function todayISO() {
  const d = new Date(), p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function toB64(file) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result);
    r.onerror = () => rej(new Error('No se pudo leer ' + file.name));
    r.readAsDataURL(file);
  });
}

function withTimeout(promise, ms = TIMEOUT_MS) {
  let t;
  const timeout = new Promise((_, rej) => (t = setTimeout(() => rej(new Error('Timeout de red')), ms)));
  return Promise.race([promise.then((v) => { clearTimeout(t); return v; }), timeout]);
}

const AltaAgente = () => {
  const [form, setForm] = useState({
    email: '', fullname: '', fecha_nac: '', dni: '', telefono: '', residencia: '', instagram: '',
    conoce_destino: '', destinos_conocidos: '', agente_cert: '',
  });
  const [plataformas, setPlataformas] = useState([]);
  const [terms, setTerms] = useState(false);
  const [contractText, setContractText] = useState('');
  const [previewExpanded, setPreviewExpanded] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [statusBadge, setStatusBadge] = useState(null);
  const [steps, setSteps] = useState([-1]); // -1 = none
  const [showProgress, setShowProgress] = useState(false);
  const [toast, setToast] = useState(null);

  const canvasRef = useRef(null);
  const drawingRef = useRef(false);
  const prevRef = useRef({ x: 0, y: 0 });
  const docIdentidadRef = useRef(null);
  const docServicioRef = useRef(null);

  const val = (name) => form[name] || '';

  const updateField = (name, value) => setForm((prev) => ({ ...prev, [name]: value }));

  const togglePlataforma = (v) => {
    setPlataformas((prev) => prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]);
  };

  // Contract preview
  const updatePreview = useCallback(() => {
    const fullname = val('fullname') || '________________';
    const email = val('email') || '________________';
    const tel = val('telefono') || '________________';
    const resi = val('residencia') || '________________';
    const dni = val('dni') || '________________';
    let t = CONTRACT_TPL
      .replaceAll('[Nombre completo del Agente]', fullname)
      .replaceAll('[DNI/Pasaporte Nº]', dni)
      .replaceAll('[dirección declarada]', resi)
      .replaceAll('[email]', email)
      .replaceAll('[teléfono]', tel);
    setContractText(t + `\n\nFecha de carga: ${todayISO()}`);
  }, [form]);

  useEffect(() => { updatePreview(); }, [updatePreview]);

  // Canvas signature
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const start = (x, y) => { drawingRef.current = true; prevRef.current = { x, y }; };
    const move = (x, y) => {
      if (!drawingRef.current) return;
      ctx.lineWidth = 2; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(prevRef.current.x, prevRef.current.y); ctx.lineTo(x, y); ctx.stroke();
      prevRef.current = { x, y };
    };
    const stop = () => { drawingRef.current = false; };

    const mouseDown = (e) => start(e.offsetX, e.offsetY);
    const mouseMove = (e) => move(e.offsetX, e.offsetY);
    const touchStart = (e) => { e.preventDefault(); const t = e.touches[0], r = canvas.getBoundingClientRect(); start(t.clientX - r.left, t.clientY - r.top); };
    const touchMove = (e) => { e.preventDefault(); const t = e.touches[0], r = canvas.getBoundingClientRect(); move(t.clientX - r.left, t.clientY - r.top); };

    canvas.addEventListener('mousedown', mouseDown);
    canvas.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseup', stop);
    canvas.addEventListener('touchstart', touchStart, { passive: false });
    canvas.addEventListener('touchmove', touchMove, { passive: false });
    canvas.addEventListener('touchend', stop);

    return () => {
      canvas.removeEventListener('mousedown', mouseDown);
      canvas.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseup', stop);
      canvas.removeEventListener('touchstart', touchStart);
      canvas.removeEventListener('touchmove', touchMove);
      canvas.removeEventListener('touchend', stop);
    };
  }, []);

  // Warm-up
  useEffect(() => {
    fetch(WEBAPP_URL + '?ping=1', { method: 'GET', mode: 'no-cors' }).catch(() => {});
  }, []);

  const clearSig = () => {
    const canvas = canvasRef.current;
    if (canvas) canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  };

  const showToast = (msg, type) => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 6000);
  };

  const downloadTxt = () => {
    const blob = new Blob([contractText], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'Contrato_GlobalDream_preview.txt';
    a.click(); URL.revokeObjectURL(a.href);
  };

  const printPdf = () => {
    const w = window.open('', '_blank');
    const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
    w.document.write(`<html><head><meta charset="utf-8"><title>Contrato — Vista previa</title>
      <style>body{font-family:Arial,Helvetica;white-space:pre-wrap;line-height:1.55;margin:24px}</style></head>
      <body>${esc(contractText)}</body></html>`);
    w.document.close(); w.focus(); w.print();
  };

  const handleSubmit = async () => {
    for (const n of REQUIRED) {
      if (!val(n)) { showToast(`Campo obligatorio: ${n}`, 'err'); return; }
    }
    if (!terms) { showToast('Debés aceptar el contrato.', 'err'); return; }

    const f1 = docIdentidadRef.current?.files[0];
    const f2 = docServicioRef.current?.files[0];
    if (!f1 || !f2) { showToast('Adjuntá DNI/Pasaporte y Servicio.', 'err'); return; }
    if (f1.size > MAX || f2.size > MAX) { showToast('Cada archivo debe pesar ≤ 5 MB.', 'err'); return; }

    const full = val('fullname'); const parts = full.split(/\s+/);
    const nombre = parts.slice(0, -1).join(' ') || full;
    const apellido = parts.slice(-1).join(' ');

    setBtnLoading(true); setShowProgress(true); setSteps([0]);
    showToast('Iniciando envío…', 'info');

    let idB64, svB64;
    try {
      [idB64, svB64] = await Promise.all([toB64(f1), toB64(f2)]);
    } catch (err) {
      setBtnLoading(false); setShowProgress(false);
      showToast('Error leyendo archivos: ' + err.message, 'err'); return;
    }

    const firmaB64 = canvasRef.current.toDataURL('image/png');
    const clientId = 'AGT-' + Date.now();

    const fd = new FormData();
    fd.append('client_id', clientId);
    fd.append('nombre', nombre);
    fd.append('apellido', apellido);
    fd.append('dni', val('dni'));
    fd.append('email', val('email'));
    fd.append('telefono', val('telefono'));
    fd.append('residencia', val('residencia'));
    fd.append('fecha_nac', val('fecha_nac'));
    fd.append('instagram', val('instagram') || '');
    fd.append('conoce_destino', val('conoce_destino') || '');
    fd.append('destinos_conocidos', val('destinos_conocidos') || '');
    fd.append('plataformas_turismo', plataformas.join(', ') || '');
    fd.append('agente_cert', val('agente_cert') || '');
    fd.append('acept_contrato', 'on');
    fd.append('doc_identidad_name', f1.name);
    fd.append('doc_identidad_mime', f1.type || 'application/octet-stream');
    fd.append('doc_identidad_bytes', f1.size);
    fd.append('doc_identidad_b64', idB64 || '');
    fd.append('doc_servicio_name', f2.name);
    fd.append('doc_servicio_mime', f2.type || 'application/octet-stream');
    fd.append('doc_servicio_bytes', f2.size);
    fd.append('doc_servicio_b64', svB64 || '');
    fd.append('firma_bytes', (firmaB64 && atob(firmaB64.split(',')[1]).length) || 0);
    fd.append('firma_b64', firmaB64 || '');
    fd.append('contractPreviewText', contractText);

    setSteps([1]);
    setStatusBadge({ id: clientId, pending: true });

    try {
      const resp = await withTimeout(fetch(WEBAPP_URL, { method: 'POST', body: fd, redirect: 'follow', credentials: 'omit', cache: 'no-store' }), TIMEOUT_MS);
      const ct = resp.headers.get('content-type') || '';
      setSteps([2]);
      if (!ct.includes('application/json')) throw new Error('Respuesta no válida del servidor');
      const data = await resp.json();
      setStatusBadge({ id: data.id || clientId, pending: false });
      showToast('✅ Enviado. Pendiente de validación.', 'ok');
      setForm({ email: '', fullname: '', fecha_nac: '', dni: '', telefono: '', residencia: '', instagram: '', conoce_destino: '', destinos_conocidos: '', agente_cert: '' });
      setPlataformas([]);
      clearSig();
      updatePreview();
    } catch (ex) {
      if (String(ex.message || '').toLowerCase().includes('timeout')) {
        showToast('Servidor tardó en responder, pero el alta siguió procesándose. Revisá tu email.', 'info');
      } else {
        showToast('Error: ' + ex.message, 'err');
      }
    } finally {
      setBtnLoading(false); setShowProgress(false); setSteps([-1]);
    }
  };

  return (
    <div style={S.wrap}>
      <h1 style={S.h1}>GlobalDream.travel — Registro de Agentes</h1>
      <p style={S.lead}>Completá, <b>leé y firmá</b> el contrato, adjuntá tu documentación y enviá para validación.</p>

      <div style={S.card}>
        <div style={S.grid}>
          <div><label style={S.label}>Correo electrónico *</label><input style={S.input} type="email" value={form.email} onChange={(e) => updateField('email', e.target.value)} required /></div>
          <div><label style={S.label}>Nombre y Apellido *</label><input style={S.input} type="text" value={form.fullname} onChange={(e) => updateField('fullname', e.target.value)} required placeholder="Ej.: Juan Pérez" /></div>
        </div>
        <div style={S.grid}>
          <div><label style={S.label}>Fecha de nacimiento *</label><input style={S.input} type="date" value={form.fecha_nac} onChange={(e) => updateField('fecha_nac', e.target.value)} required /></div>
          <div><label style={S.label}>Nº de Pasaporte / DNI *</label><input style={S.input} type="text" value={form.dni} onChange={(e) => updateField('dni', e.target.value)} required placeholder="12.345.678 / PA1234567" /></div>
        </div>
        <div style={S.grid}>
          <div><label style={S.label}>Teléfono (con código de país) *</label><input style={S.input} type="tel" value={form.telefono} onChange={(e) => updateField('telefono', e.target.value)} required placeholder="+54 9 11 1234-5678" /></div>
          <div><label style={S.label}>Residencia (Localidad / Provincia / País) *</label><input style={S.input} type="text" value={form.residencia} onChange={(e) => updateField('residencia', e.target.value)} required /></div>
        </div>
        <div style={S.grid}>
          <div><label style={S.label}>Link de Instagram</label><input style={S.input} type="url" value={form.instagram} onChange={(e) => updateField('instagram', e.target.value)} placeholder="https://instagram.com/tu_usuario" /></div>
        </div>
      </div>

      {/* Experiencia */}
      <div style={S.card}>
        <h2 style={S.h2}>Experiencia del Agente</h2>
        <div style={S.grid}>
          <div>
            <label style={S.label}>¿Conoce destino?</label>
            <select style={S.input} value={form.conoce_destino} onChange={(e) => updateField('conoce_destino', e.target.value)}>
              <option value="">Seleccione…</option>
              <option value="Sí">Sí</option>
              <option value="No">No</option>
            </select>
          </div>
          <div>
            <label style={S.label}>¿Cuáles destinos?</label>
            <input style={S.input} type="text" value={form.destinos_conocidos} onChange={(e) => updateField('destinos_conocidos', e.target.value)} placeholder="Ej.: Orlando, California, Disneyland París, Asia" />
          </div>
        </div>
        <label style={S.label}>¿Qué plataformas conoce?</label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {['VAX', 'DTA', 'Expedia', 'Booking', 'Otro'].map((p) => (
            <label key={p} style={{ fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <input type="checkbox" checked={plataformas.includes(p)} onChange={() => togglePlataforma(p)} /> {p}
            </label>
          ))}
        </div>
        <div style={{ marginTop: 10 }}>
          <label style={S.label}>¿Fue agente certificado (Disney / Universal)?</label>
          <select style={S.input} value={form.agente_cert} onChange={(e) => updateField('agente_cert', e.target.value)}>
            <option value="">Seleccione…</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>

      {/* Documentación */}
      <div style={S.card}>
        <h2 style={S.h2}>Documentación obligatoria</h2>
        <div style={S.grid}>
          <div>
            <label style={S.label}>DNI o Pasaporte (imagen o PDF) *</label>
            <input type="file" ref={docIdentidadRef} accept=".jpg,.jpeg,.png,.pdf" required />
            <div style={S.muted}>Formatos: JPG/PNG/PDF. Máx. 5 MB</div>
          </div>
          <div>
            <label style={S.label}>Comprobante de domicilio (1 servicio) *</label>
            <input type="file" ref={docServicioRef} accept=".jpg,.jpeg,.png,.pdf" required />
            <div style={S.muted}>Formatos: JPG/PNG/PDF. Máx. 5 MB</div>
          </div>
        </div>
      </div>

      {/* Contract Preview */}
      <div style={{ ...S.card, background: '#fafafa' }}>
        <h2 style={S.h2}>Previsualización del contrato</h2>
        <p style={{ ...S.muted, margin: '0 0 8px' }}>Leé el contrato completo antes de firmar. Podés imprimir o descargar una copia.</p>
        <div style={{ background: '#fff', border: '1px dashed #dbe2ea', borderRadius: 12, padding: 12 }}>
          <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.55, maxHeight: previewExpanded ? 'none' : 440, overflow: previewExpanded ? 'visible' : 'auto', marginTop: 8 }}>
            {contractText}
          </div>
          <div style={{ borderTop: '1px dashed #e5e7eb', marginTop: 10, paddingTop: 8 }}>
            <b>Por la Agencia</b><br />
            Andrea J. Olivera<br />
            CEO &amp; Founder<br />
            Global Dream Travel
          </div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'space-between', alignItems: 'center', marginTop: 10, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <button type="button" style={S.btnGhost} onClick={() => setPreviewExpanded(!previewExpanded)}>Expandir / Contraer</button>
              <button type="button" style={S.btnGhost} onClick={downloadTxt}>Descargar .TXT</button>
              <button type="button" style={S.btnGhost} onClick={printPdf}>Imprimir / Guardar PDF</button>
            </div>
            <button type="button" style={S.btnGhost} onClick={updatePreview}>Actualizar vista previa</button>
          </div>
        </div>
      </div>

      {/* Signature */}
      <div style={S.card}>
        <h2 style={S.h2}>Firma digital del Agente</h2>
        <p style={{ ...S.muted, margin: '0 0 8px' }}>Firmá dentro del recuadro.</p>
        <canvas ref={canvasRef} id="sigPad" width={900} height={180}
          style={{ border: '1px dashed #cbd5e1', borderRadius: 10, width: '100%', height: 180, background: '#fff', touchAction: 'none' }} />
        <div style={{ marginTop: 10 }}><button type="button" style={S.btnGhost} onClick={clearSig}>Borrar firma</button></div>
      </div>

      {/* Submit */}
      <div style={S.card}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600 }}>
            <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} />
            <span>Declaro haber leído y acepto el contrato Global Dream Travel.</span>
          </div>
          <button type="button" style={S.btnPrimary} disabled={btnLoading} onClick={handleSubmit}>
            {btnLoading ? 'Enviando…' : 'Enviar y Validar'}
          </button>
        </div>
        <div style={{ ...S.muted, marginTop: 6 }}>El alta queda <b>PENDIENTE DE VALIDACIÓN</b> hasta aprobación.</div>

        {statusBadge && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#ecfdf5', color: '#064e3b', border: '1px solid #d1fae5', padding: '10px 14px', borderRadius: 12, fontWeight: 700, marginTop: 10 }}>
            ✔ Pendiente de Validación — <span style={{ fontWeight: 800 }}>{statusBadge.id}</span>
            {statusBadge.pending && <span style={{ fontWeight: 600, color: '#6b7280' }}>(en proceso…)</span>}
          </div>
        )}

        {showProgress && (
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 10, flexWrap: 'wrap' }}>
            {['Subiendo archivos', 'Generando contrato', 'Notificando a Global Dream Travel'].map((label, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
                <span style={{ width: 9, height: 9, borderRadius: 999, background: steps[0] > i ? '#059669' : steps[0] === i ? '#2563eb' : '#e5e7eb', display: 'inline-block' }} />
                {label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Toast */}
      {toast && (
        <div style={{
          position: 'fixed', right: 16, bottom: 16, zIndex: 999999,
          background: toast.type === 'ok' ? '#ecfdf5' : toast.type === 'err' ? '#fef2f2' : '#f3f4f6',
          color: toast.type === 'ok' ? '#065f46' : toast.type === 'err' ? '#991b1b' : '#111',
          border: '1px solid #e5e7eb', borderRadius: 10, padding: '12px 14px',
          boxShadow: '0 6px 16px rgba(0,0,0,.08)', fontFamily: 'Inter,Arial', fontSize: 14,
        }}>
          {toast.msg}
        </div>
      )}
    </div>
  );
};

const S = {
  wrap: { maxWidth: 980, margin: '28px auto', padding: '0 16px', fontFamily: 'Inter,system-ui,Arial,Helvetica', color: '#111827' },
  h1: { fontSize: 22, margin: '0 0 8px' },
  h2: { fontSize: 18, margin: '0 0 8px' },
  lead: { color: '#6b7280', margin: '0 0 18px' },
  card: { background: '#fff', border: '1px solid #e5e7eb', borderRadius: 14, padding: 18, margin: '14px 0' },
  label: { display: 'block', fontWeight: 600, margin: '10px 0 6px' },
  input: { width: '100%', padding: 12, border: '1px solid #d1d5db', borderRadius: 10, outline: 'none', boxSizing: 'border-box', fontSize: 14 },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 },
  muted: { color: '#6b7280', fontSize: 13 },
  btnPrimary: { padding: '12px 16px', borderRadius: 10, border: 0, cursor: 'pointer', fontWeight: 700, background: '#111827', color: '#fff' },
  btnGhost: { padding: '12px 16px', borderRadius: 10, border: 0, cursor: 'pointer', fontWeight: 700, background: '#f3f4f6', color: '#111' },
};

export default AltaAgente;
