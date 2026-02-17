import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';

/* ── Animated counter ─────────────────────────────── */
const Counter = ({ end, duration = 2, prefix = '', suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration * 60);
    const id = setInterval(() => {
      start += step;
      if (start >= end) { setVal(end); clearInterval(id); }
      else setVal(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [inView, end, duration]);

  return <span ref={ref}>{prefix}{val.toLocaleString('en-US')}{suffix}</span>;
};

/* ── Animated horizontal bar ──────────────────────── */
const HBar = ({ label, value, max, display, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-1.5">
        <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">{label}</span>
        <span className="text-xs font-bold text-slate-900">{display}</span>
      </div>
      <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${(value / max) * 100}%` } : {}}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-slate-800"
        />
      </div>
    </div>
  );
};

/* ── Projection chart (SVG) ───────────────────────── */
const ProjectionSVG = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });

  const pts = [
    { x: 0, y: 1.5, label: '2025' },
    { x: 1, y: 1.8, label: 'Q2' },
    { x: 2, y: 2.1, label: 'Q4' },
    { x: 3, y: 2.5, label: '2026' },
    { x: 4, y: 3.0, label: '2027' },
  ];

  const w = 480, h = 200;
  const pad = { t: 30, r: 30, b: 35, l: 45 };
  const pw = w - pad.l - pad.r, ph = h - pad.t - pad.b;
  const maxY = 3.5;
  const toX = (i) => pad.l + (i / 4) * pw;
  const toY = (v) => pad.t + ph - (v / maxY) * ph;

  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.x)},${toY(p.y)}`).join(' ');
  const area = `${line} L${toX(4)},${toY(0)} L${toX(0)},${toY(0)} Z`;

  return (
    <div ref={ref} className="w-full">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
        {[0, 1, 2, 3].map((v) => (
          <g key={v}>
            <line x1={pad.l} y1={toY(v)} x2={w - pad.r} y2={toY(v)} stroke="#f1f5f9" strokeWidth="1" />
            <text x={pad.l - 6} y={toY(v) + 3} textAnchor="end" className="text-[9px] fill-slate-400">${v}M</text>
          </g>
        ))}
        <motion.path d={area} fill="#0f172a" initial={{ opacity: 0 }} animate={inView ? { opacity: 0.04 } : {}} transition={{ duration: 1 }} />
        <motion.path d={line} fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ duration: 2, ease: 'easeOut' }} />
        {pts.map((p, i) => (
          <motion.g key={i} initial={{ opacity: 0, scale: 0 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.4 + i * 0.15 }}>
            <circle cx={toX(p.x)} cy={toY(p.y)} r="4" fill="#0f172a" stroke="#fff" strokeWidth="2" />
            <text x={toX(p.x)} y={toY(p.y) - 12} textAnchor="middle" className="text-[10px] font-bold fill-slate-800">${p.y}M</text>
            <text x={toX(p.x)} y={h - 8} textAnchor="middle" className="text-[9px] fill-slate-400">{p.label}</text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

/* ── Section fade ─────────────────────────────────── */
const sf = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

/* ════════════════════════════════════════════════════ */
/*              EXECUTIVE FINANCIAL BRIEF               */
/* ════════════════════════════════════════════════════ */
const EFBrief = () => {
  return (
    <div className="bg-white min-h-screen font-poppins text-slate-800">

      {/* ─── COVER ─────────────────────────────────── */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center relative z-10 max-w-3xl">
          <div className="w-12 h-px bg-slate-800 mx-auto mb-10" />
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-8">Executive Financial Brief</p>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Global Dream Travel
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-light mb-2">
            LATAM Revenue Acceleration Framework
          </p>
          <p className="text-sm text-slate-400 mb-12">2025 – 2028</p>
          <div className="w-12 h-px bg-slate-300 mx-auto mb-10" />
          <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em]">
            Confidential — For Internal Distribution Only
          </p>
        </motion.div>
      </section>

      {/* ─── 1. EXECUTIVE OVERVIEW ─────────────────── */}
      <section className="py-20 md:py-28 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sf}>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">Section 01</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Executive Overview</h2>

            <p className="text-sm text-slate-600 leading-relaxed mb-10 max-w-3xl">
              Global Dream Travel is a US-registered IATA agency focused primarily on Disney destinations,
              operating with a structured LATAM distribution network and proprietary planning technology.
            </p>

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">2025 Disney Performance Metrics</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {[
                { value: '$1.5M', label: 'Annual Disney Volume' },
                { value: '$7,000', label: 'Avg Ticket / Family' },
                { value: '~214', label: 'Families Served Annually' },
                { value: '20%', label: 'Cruise Attach Rate' },
                { value: '22%', label: 'Repeat Booking Rate' },
                { value: '150', label: 'Active Agent Network' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="border border-slate-200 rounded-lg p-5 text-center">
                  <p className="text-2xl font-black text-slate-900">{item.value}</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-sm text-slate-600 leading-relaxed border-l-2 border-slate-200 pl-5">
              Global Dream has transitioned from traditional agency distribution to a structured growth model
              focused on scalable, controlled revenue expansion aligned with Disney's trade objectives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. CURRENT REVENUE STRUCTURE ──────────── */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sf}>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">Section 02</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Current Revenue Structure</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-3">Volume Composition</p>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>Primary: Walt Disney World & Disney Cruise Line</p>
                  <p>Disney share of total revenue: <span className="font-bold text-slate-900">60–70%</span></p>
                  <p>Cruise integration: <span className="font-bold text-slate-900">20%</span> of Disney families</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-3">Annual Family Flow</p>
                <p className="text-sm text-slate-600">Estimated <span className="font-bold text-slate-900">214 Disney families</span> annually based on conservative ticket average.</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-3">Repeat Behavior</p>
                <p className="text-sm text-slate-600">Estimated <span className="font-bold text-slate-900">22% repeat booking rate</span>, supporting predictable recurring revenue.</p>
                <p className="text-xs text-slate-400 mt-2 italic">Indicates stable customer satisfaction and brand alignment.</p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <HBar label="Disney Volume" value={1.5} max={3} display="$1.5M" delay={0} />
              <HBar label="Cruise Attach (20%)" value={0.3} max={3} display="$300K" delay={0.1} />
              <HBar label="Repeat Revenue (22%)" value={0.33} max={3} display="$330K" delay={0.2} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 3. CONTROLLED DISTRIBUTION MODEL ──────── */}
      <section className="py-20 md:py-28 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sf}>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">Section 03</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Controlled Distribution Model</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-10 max-w-3xl">
              Global Dream operates under a structured distribution system designed for scalability without operational risk.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                '150 active agents under centralized supervision',
                'Internal NRV audit process',
                'Commission monitoring and reconciliation',
                'Performance tracking and ranking',
                'Disney-focused internal training modules',
                'Monthly production monitoring',
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="border border-slate-200 rounded-lg p-4 flex items-start gap-3">
                  <span className="w-5 h-5 rounded bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0 mt-0.5">{i + 1}</span>
                  <span className="text-xs text-slate-600 leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="border-l-2 border-slate-800 pl-5">
              <p className="text-sm text-slate-700 font-medium italic">
                This model allows expansion without loss of quality control.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 4. BEHAVIORAL REVENUE IMPACT — TRIP ───── */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sf}>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">Section 04</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Behavioral Revenue Impact via TRIP Planning System</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-10 max-w-3xl">
              Global Dream integrates a proprietary planning application (TRIP) into its client ecosystem.
            </p>

            <div className="grid md:grid-cols-2 gap-10 mb-10">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-4">Application Facilitates</p>
                <div className="space-y-3">
                  {[
                    'Structured dining reservations',
                    'Paid experience scheduling',
                    'Premium add-on anticipation (Genie+, After Hours, events)',
                    'Cruise integration planning',
                    'Merchandise and spending planning',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <ArrowRight size={12} className="text-slate-400 shrink-0" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="border border-slate-200 rounded-xl p-6 bg-white text-center">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">In-Park Spending Increase</p>
                  <p className="text-4xl font-black text-slate-900">+12%</p>
                  <p className="text-xs text-slate-500 mt-1">per family (conservative)</p>
                </div>
                <div className="border border-slate-800 bg-slate-900 rounded-xl p-6 text-center">
                  <p className="text-[10px] text-white/50 uppercase tracking-wider mb-1">Incremental In-Park Revenue Impact</p>
                  <p className="text-3xl font-black text-white">~USD <Counter end={180000} duration={2} /></p>
                  <p className="text-xs text-white/40 mt-1">annually — conservative model</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-600 border-l-2 border-slate-200 pl-5 italic">
              This represents measurable revenue influence beyond base package sales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 5. OPERATIONAL RISK & QUALITY ─────────── */}
      <section className="py-20 md:py-28 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sf}>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">Section 05</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Operational Risk & Quality Indicators</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-10 max-w-3xl">
              Global Dream maintains operational discipline aligned with financial scalability.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: 'Cancellation Ratio', status: 'Controlled' },
                { label: 'Rejection Rate', status: 'Low' },
                { label: 'Documentation', status: 'Structured' },
                { label: 'Booking Behavior', status: 'Stable' },
                { label: 'Commission Reconciliation', status: 'Predictable' },
                { label: 'Brand Integrity', status: 'Protected' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="border border-slate-200 rounded-lg p-5">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-lg font-bold text-slate-900">{item.status}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-sm text-slate-600 border-l-2 border-slate-200 pl-5 mt-8 italic">
              The network is designed to reduce volatility and protect brand integrity in LATAM distribution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 6. 24-MONTH PROJECTION ────────────────── */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sf}>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">Section 06</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">24-Month Conservative Growth Projection</h2>
            <div className="w-12 h-px bg-slate-300 mb-10" />

            <div className="grid md:grid-cols-2 gap-10 items-start mb-10">
              <div>
                <div className="border border-slate-200 rounded-xl p-6 bg-white mb-6">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Base Year Volume</p>
                  <p className="text-4xl font-black text-slate-900">USD 1.5M</p>
                </div>

                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-4">Expansion Drivers</p>
                <div className="space-y-3">
                  {[
                    'Increase active Disney-focused agents from 150 to 250',
                    'Maintain conservative ticket average of USD 7,000',
                    'Maintain 20% cruise attach rate',
                    'Mandatory TRIP planning integration',
                    'Conversion rate optimization through training',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0 mt-0.5">{i + 1}</span>
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="border border-slate-200 rounded-xl p-6 bg-white mb-6">
                  <ProjectionSVG />
                </div>
                <div className="bg-slate-900 rounded-xl p-6 text-center">
                  <p className="text-[10px] text-white/40 uppercase tracking-wider mb-2">Projected Volume (24 months)</p>
                  <p className="text-4xl md:text-5xl font-black text-white">USD <Counter end={2700000} prefix="$" duration={2.5} /></p>
                  <p className="text-xl font-bold text-white/40 mt-1">– $3.0M</p>
                  <p className="text-[10px] text-white/30 mt-4 uppercase tracking-wider">
                    Does not assume ticket inflation — structural growth only
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 7. STRUCTURED ALIGNMENT PROPOSAL ──────── */}
      <section className="py-20 md:py-28 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sf}>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">Section 07</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Structured Alignment Proposal</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-10 max-w-3xl">
              Global Dream seeks to align growth within Disney's trade framework through measurable performance criteria.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {[
                'Defined volume milestones',
                'Quarterly structured reporting',
                'Clear growth thresholds',
                'Escalation model based on achieved performance',
                'Long-term positioning as structured LATAM revenue partner',
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="border border-slate-200 rounded-lg p-4 flex items-start gap-3">
                  <ArrowRight size={12} className="text-slate-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
              <p className="text-sm text-slate-700 font-medium leading-relaxed">
                This is not a request for promotional advantage.
              </p>
              <p className="text-sm text-slate-900 font-bold mt-2">
                It is a readiness declaration for structured revenue alignment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 8. POSITIONING STATEMENT ──────────────── */}
      <section className="py-24 md:py-32 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div {...sf}>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-8">Section 08 — Positioning Statement</p>

            <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-12">
              Global Dream Travel is positioned as a structured LATAM revenue channel
              ready for scalable expansion under Disney trade supervision.
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[
                { label: 'Infrastructure', status: 'In Place' },
                { label: 'Distribution', status: 'Controlled' },
                { label: 'Growth', status: 'Measurable' },
                { label: 'Risk', status: 'Managed' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="border border-white/10 rounded-lg p-5 text-center">
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-lg font-bold text-white">{item.status}</p>
                </motion.div>
              ))}
            </div>

            <div className="w-12 h-px bg-white/20 mx-auto mb-8" />
            <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">
              Global Dream Travel — Executive Financial Brief — Confidential
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default EFBrief;
