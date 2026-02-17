import { useEffect } from 'react';

/* ════════════════════════════════════════════════════════════
   LATAM Disney Family Market Snapshot 2025
   Private Executive Brief — Confidential
   ════════════════════════════════════════════════════════════ */

const font = "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif";

const s = {
  page: {
    background: '#fff',
    minHeight: '100vh',
    fontFamily: font,
    color: '#444',
    fontSize: 15,
    lineHeight: 1.7,
    WebkitFontSmoothing: 'antialiased',
  },
  section: {
    maxWidth: 720,
    margin: '0 auto',
    padding: '64px 32px',
    borderBottom: '1px solid #eaeaea',
  },
  sectionLast: {
    maxWidth: 720,
    margin: '0 auto',
    padding: '64px 32px',
  },
  label: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    color: '#999',
    marginBottom: 8,
  },
  h2: {
    fontSize: 22,
    fontWeight: 700,
    color: '#000',
    margin: '0 0 24px 0',
    lineHeight: 1.3,
  },
  h3: {
    fontSize: 16,
    fontWeight: 600,
    color: '#333',
    margin: '28px 0 12px 0',
  },
  p: {
    color: '#444',
    margin: '0 0 16px 0',
    lineHeight: 1.7,
  },
  bullet: {
    paddingLeft: 0,
    listStyle: 'none',
    margin: '0 0 20px 0',
  },
  li: {
    padding: '6px 0',
    color: '#444',
    fontSize: 15,
    lineHeight: 1.6,
  },
  dot: {
    display: 'inline-block',
    width: 5,
    height: 5,
    borderRadius: '50%',
    background: '#999',
    marginRight: 12,
    verticalAlign: 'middle',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #eaeaea',
    margin: '48px 0',
  },
  chartContainer: {
    margin: '32px 0',
    textAlign: 'center',
  },
};

/* ── Pie Chart (Resort Distribution) ─────────────────────── */
const PieChart = () => {
  const r = 80;
  const cx = 100;
  const cy = 100;
  const pct = 0.8;
  const angle = pct * 360;
  const rad = (a) => ((a - 90) * Math.PI) / 180;
  const x1 = cx + r * Math.cos(rad(0));
  const y1 = cy + r * Math.sin(rad(0));
  const x2 = cx + r * Math.cos(rad(angle));
  const y2 = cy + r * Math.sin(rad(angle));
  const large = angle > 180 ? 1 : 0;

  return (
    <svg viewBox="0 0 300 200" style={{ width: '100%', maxWidth: 340 }}>
      {/* 80% slice */}
      <path
        d={`M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large},1 ${x2},${y2} Z`}
        fill="#666"
      />
      {/* 20% slice */}
      <path
        d={`M${cx},${cy} L${x2},${y2} A${r},${r} 0 ${1 - large},1 ${x1},${y1} Z`}
        fill="#bbb"
      />
      {/* Labels */}
      <text x="225" y="80" style={{ fontSize: 12, fontWeight: 700, fill: '#333', fontFamily: font }}>80% Value</text>
      <rect x="210" y="70" width="10" height="10" fill="#666" />
      <text x="225" y="105" style={{ fontSize: 12, fontWeight: 700, fill: '#333', fontFamily: font }}>20% Moderate</text>
      <rect x="210" y="95" width="10" height="10" fill="#bbb" />
    </svg>
  );
};

/* ── Bar Chart (Dining Adoption) ─────────────────────────── */
const BarChartDining = () => {
  const bw = 80;
  const maxH = 120;
  const baseline = 160;

  const bars = [
    { label: 'Individual', value: 35, display: '35%' },
    { label: 'Group', value: 100, display: '100%' },
  ];

  return (
    <svg viewBox="0 0 300 200" style={{ width: '100%', maxWidth: 340 }}>
      {/* Gridlines */}
      {[0, 25, 50, 75, 100].map((v) => {
        const y = baseline - (v / 100) * maxH;
        return (
          <g key={v}>
            <line x1="40" y1={y} x2="280" y2={y} stroke="#eaeaea" strokeWidth="1" />
            <text x="35" y={y + 4} textAnchor="end" style={{ fontSize: 9, fill: '#999', fontFamily: font }}>{v}%</text>
          </g>
        );
      })}
      {bars.map((bar, i) => {
        const x = 80 + i * 110;
        const h = (bar.value / 100) * maxH;
        return (
          <g key={i}>
            <rect x={x} y={baseline - h} width={bw} height={h} fill={i === 0 ? '#999' : '#555'} />
            <text x={x + bw / 2} y={baseline - h - 8} textAnchor="middle" style={{ fontSize: 12, fontWeight: 700, fill: '#333', fontFamily: font }}>{bar.display}</text>
            <text x={x + bw / 2} y={baseline + 16} textAnchor="middle" style={{ fontSize: 10, fill: '#666', fontFamily: font }}>{bar.label}</text>
          </g>
        );
      })}
    </svg>
  );
};

/* ── Line Chart (Growth Projection) ──────────────────────── */
const GrowthLineChart = () => {
  const w = 400;
  const h = 180;
  const pad = { t: 30, r: 30, b: 35, l: 50 };
  const pw = w - pad.l - pad.r;
  const ph = h - pad.t - pad.b;

  const points = [
    { x: 0, y: 800, label: '2024' },
    { x: 1, y: 1050, label: '2025' },
    { x: 2, y: 1600, label: '2026' },
  ];
  const maxY = 1800;

  const toX = (i) => pad.l + (i / 2) * pw;
  const toY = (v) => pad.t + ph - (v / maxY) * ph;

  const line = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.x)},${toY(p.y)}`).join(' ');

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: 420 }}>
      {/* Grid */}
      {[0, 400, 800, 1200, 1600].map((v) => (
        <g key={v}>
          <line x1={pad.l} y1={toY(v)} x2={w - pad.r} y2={toY(v)} stroke="#eaeaea" strokeWidth="1" />
          <text x={pad.l - 8} y={toY(v) + 4} textAnchor="end" style={{ fontSize: 9, fill: '#999', fontFamily: font }}>
            {v.toLocaleString()}
          </text>
        </g>
      ))}
      {/* Line */}
      <path d={line} fill="none" stroke="#555" strokeWidth="2.5" strokeLinecap="round" />
      {/* Points */}
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={toX(p.x)} cy={toY(p.y)} r="4" fill="#333" stroke="#fff" strokeWidth="2" />
          <text x={toX(p.x)} y={toY(p.y) - 12} textAnchor="middle" style={{ fontSize: 11, fontWeight: 700, fill: '#333', fontFamily: font }}>
            {p.y.toLocaleString()}
          </text>
          <text x={toX(p.x)} y={h - 6} textAnchor="middle" style={{ fontSize: 10, fill: '#666', fontFamily: font }}>
            {p.label}
          </text>
        </g>
      ))}
    </svg>
  );
};

/* ── Bullet item ─────────────────────────────────────────── */
const B = ({ children }) => (
  <li style={s.li}>
    <span style={s.dot} />
    {children}
  </li>
);

/* ════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════ */
const LatamExecBrief = () => {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);

  return (
    <div style={s.page}>
      {/* Print styles */}
      <style>{`
        @media print {
          body { background: #fff !important; }
          .no-print { display: none !important; }
        }
      `}</style>

      {/* ─── PAGE 1: COVER ──────────────────────────── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '64px 32px',
        maxWidth: 720,
        margin: '0 auto',
        borderBottom: '1px solid #eaeaea',
      }}>
        <p style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: '#c00',
          marginBottom: 48,
        }}>
          Confidential &mdash; Restricted Distribution
        </p>

        <h1 style={{
          fontSize: 28,
          fontWeight: 700,
          color: '#000',
          lineHeight: 1.3,
          margin: '0 0 48px 0',
        }}>
          LATAM Disney Family Market Snapshot 2025
        </h1>

        <div style={{ width: 40, height: 1, background: '#ddd', margin: '0 auto 48px' }} />

        <p style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>Prepared by</p>
        <p style={{ fontSize: 16, fontWeight: 700, color: '#000', marginBottom: 2 }}>Andrea Johanna Olivera</p>
        <p style={{ fontSize: 13, color: '#666', marginBottom: 2 }}>Chief Executive Officer</p>
        <p style={{ fontSize: 13, color: '#666', marginBottom: 0 }}>Global Dream Travel</p>

        <div style={{ marginTop: 'auto', paddingTop: 80 }}>
          <p style={{ fontSize: 10, color: '#bbb', letterSpacing: '0.15em' }}>
            For Internal Strategic Review Only
          </p>
        </div>
      </section>

      {/* ─── PAGE 2: EXECUTIVE OVERVIEW ─────────────── */}
      <section style={s.section}>
        <p style={s.label}>Section 01</p>
        <h2 style={s.h2}>Market Overview &mdash; LATAM Family Segment</h2>

        <ul style={s.bullet}>
          <B>1,050 Disney families (70% of annual portfolio)</B>
          <B>+30% year-over-year growth</B>
          <B>1,600 families projected (2026 Strategic Target)</B>
          <B>60% repeat rate</B>
          <B>80% referral rate</B>
        </ul>

        <p style={s.p}>
          This growth trajectory reflects structured expansion driven by repeat dynamics,
          referral behavior, and coordinated segment organization within the LATAM family market.
        </p>
      </section>

      {/* ─── PAGE 3: RESORT CATEGORY DISTRIBUTION ───── */}
      <section style={s.section}>
        <p style={s.label}>Section 02</p>
        <h2 style={s.h2}>Resort Category Breakdown</h2>

        <ul style={s.bullet}>
          <B>80% Value Resorts</B>
          <B>20% Moderate Resorts</B>
          <B>Leading Moderate Resort: Port Orleans Riverside</B>
        </ul>

        <p style={s.p}>
          The segment demonstrates price-driven decision behavior with selective experiential upgrades
          when value perception is clearly structured.
        </p>

        <div style={s.chartContainer}>
          <PieChart />
        </div>
      </section>

      {/* ─── PAGE 4: DINING BEHAVIOR ────────────────── */}
      <section style={s.section}>
        <p style={s.label}>Section 03</p>
        <h2 style={s.h2}>Dining Plan Adoption &amp; Consumption Behavior</h2>

        <ul style={s.bullet}>
          <B>35% individual Dining Plan adoption</B>
          <B>60% grocery optimization behavior</B>
          <B>100% Dining Plan adoption in structured group model</B>
        </ul>

        <p style={s.p}>
          Adoption rates increase significantly when structured guidance and coordinated planning
          are implemented.
        </p>

        <div style={s.chartContainer}>
          <BarChartDining />
        </div>
      </section>

      {/* ─── PAGE 5: STAY & BOOKING PATTERN ─────────── */}
      <section style={s.section}>
        <p style={s.label}>Section 04</p>
        <h2 style={s.h2}>Stay Duration &amp; Booking Window</h2>

        <ul style={s.bullet}>
          <B>6 nights average stay</B>
          <B>4 park days average</B>
          <B>6-month advance booking window</B>
        </ul>

        <p style={s.p}>
          The segment reflects structured planning behavior and seasonal predictability aligned
          with the regional academic calendar.
        </p>
      </section>

      {/* ─── PAGE 6: ADD-ON PENETRATION ─────────────── */}
      <section style={s.section}>
        <p style={s.label}>Section 05</p>
        <h2 style={s.h2}>Add-On Penetration &amp; Upsell Opportunity</h2>

        <ul style={s.bullet}>
          <B>20% Park Hopper</B>
          <B>30% Genie+</B>
          <B>20% Memory Maker</B>
        </ul>

        <p style={s.p}>
          Upsell penetration indicates growth potential through structured pre-arrival education
          and aligned segment messaging.
        </p>
      </section>

      {/* ─── PAGE 7: GROUP MODEL ────────────────────── */}
      <section style={s.section}>
        <p style={s.label}>Section 06</p>
        <h2 style={s.h2}>Coordinated Group Model &mdash; 2025 Pilot</h2>

        <ul style={s.bullet}>
          <B>35-family structured group</B>
          <B>Standardized package (6N / 4D)</B>
          <B>Unified resort allocation</B>
          <B>Coordinated in-park execution</B>
          <B>100% Dining Plan adoption</B>
          <B>Expansion model projected for 2026</B>
        </ul>

        <p style={s.p}>
          The pilot demonstrated structured scalability, coordinated consumption,
          and segment cohesion.
        </p>
      </section>

      {/* ─── PAGE 8: STRATEGIC ALIGNMENT ────────────── */}
      <section style={s.section}>
        <p style={s.label}>Section 07</p>
        <h2 style={s.h2}>Strategic Integration &amp; Segment Reinforcement</h2>

        <ul style={s.bullet}>
          <B>Structured LATAM family segment with demonstrated repeat dynamics</B>
          <B>Coordinated seasonal distribution aligned with school calendar</B>
          <B>Scalable group expansion model</B>
          <B>Established digital communication channel within the LATAM family segment</B>
          <B>Monthly organic reach exceeding 2.7M impressions</B>
          <B>Reinforcement capacity for operational clarity and structured consumption messaging</B>
        </ul>

        <p style={s.p}>
          We are not seeking to operate independently from Disney's ecosystem. Our objective
          is to reinforce and structure the LATAM family segment in alignment with regional strategy,
          contributing to optimized preparation, coordinated execution, and long-term segment growth.
        </p>

        <h3 style={s.h3}>Growth Projection</h3>
        <div style={s.chartContainer}>
          <GrowthLineChart />
        </div>
      </section>

      {/* ─── SIGNATURE BLOCK ────────────────────────── */}
      <section style={s.sectionLast}>
        <div style={{ width: 40, height: 1, background: '#ddd', margin: '0 0 32px' }} />

        <p style={{ fontSize: 15, fontWeight: 700, color: '#000', margin: '0 0 2px' }}>
          Andrea Johanna Olivera
        </p>
        <p style={{ fontSize: 13, color: '#666', margin: '0 0 2px' }}>Chief Executive Officer</p>
        <p style={{ fontSize: 13, color: '#666', margin: '0 0 20px' }}>Global Dream Travel</p>

        <div style={{ fontSize: 12, color: '#888', lineHeight: 1.8 }}>
          <p style={{ margin: '0 0 4px' }}>IATA Accredited Agency: 10504756</p>
          <p style={{ margin: '0 0 16px' }}>Florida Seller of Travel Reg. No. ST46031</p>
          <p style={{ margin: '0 0 2px' }}>3080 Park Pond Way #80</p>
          <p style={{ margin: '0 0 2px' }}>Kissimmee, FL 34741</p>
          <p style={{ margin: '0 0 16px' }}>United States</p>
          <p style={{ margin: '0 0 2px' }}>comercial@globaldream.travel</p>
          <p style={{ margin: 0 }}>www.globaldream.travel</p>
        </div>

        {/* PDF Download */}
        <div style={{ marginTop: 56, textAlign: 'center' }} className="no-print">
          <a
            href="/latam-exec-brief-2025.pdf"
            download="LATAM-Disney-Executive-Brief-2025.pdf"
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#fff',
              background: '#000',
              textDecoration: 'none',
              borderRadius: 4,
              fontFamily: font,
            }}
          >
            Download Executive Confidential Brief (PDF)
          </a>
        </div>

        <p style={{
          fontSize: 10,
          color: '#ccc',
          textAlign: 'center',
          marginTop: 48,
          letterSpacing: '0.15em',
        }}>
          Confidential &mdash; For Internal Strategic Review Only
        </p>
      </section>
    </div>
  );
};

export default LatamExecBrief;
