import { motion } from 'framer-motion';
import { Shield, Users, Globe, TrendingUp, Smartphone, BarChart3, Handshake, ArrowRight, ExternalLink, Play, ShoppingBag, Utensils, Sparkles, Heart, Download } from 'lucide-react';
import { useRef, useEffect } from 'react';

const sectionFade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/* ── Photo strip component ─────────────────────────── */
const PhotoStrip = ({ images, height = 'h-64' }) => (
  <div className="w-full overflow-hidden">
    <div className="flex gap-2">
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          className={`${height} flex-1 min-w-0 overflow-hidden rounded-2xl`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  </div>
);

const MediaKit = () => {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const el = videoContainerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {});
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white min-h-screen font-poppins">

      {/* ═══════════════ FLOATING DOWNLOAD BUTTON ═══════════ */}
      <a
        href="/GlobalDreamTravel-MediaKit.pdf"
        download="GlobalDreamTravel-MediaKit.pdf"
        className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-2xl shadow-red-600/30 flex items-center gap-2 font-bold text-sm uppercase tracking-wider hover:scale-105 transition-all print:hidden no-underline"
      >
        <Download size={18} />
        Download PDF
      </a>

      <div>

      {/* ═══════════════════════════════════════════════════ */}
      {/* HERO — White, clean, corporate                       */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="pdf-section min-h-screen flex items-center justify-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-6 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-8 md:gap-12 mb-10">
            <img
              src="/assets/logo-global-dream.png"
              alt="Global Dream Travel"
              className="h-24 md:h-32 object-contain"
            />
            <img
              src="/assets/logo-iata.jpg"
              alt="IATA Accredited US"
              className="h-24 md:h-32 object-contain rounded-xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-4 tracking-tight">
            Global Dream Travel
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-light mb-6 max-w-2xl mx-auto">
            Strategic LATAM Growth Partner
          </p>
          <div className="w-20 h-px bg-disney mx-auto my-8" />
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Technology', 'Infrastructure', 'Destination Experiences', 'IATA US'].map((tag) => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.2em] text-disney bg-disney/5 border border-disney/10 px-4 py-2 rounded-lg">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm text-slate-400 uppercase tracking-[0.25em] font-medium">
            Theme Parks &middot; Cruises &middot; Proprietary Technology &middot; 150+ Advisors
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 01 — ANDREA OLIVERA — CEO & Market Operator          */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="pdf-section py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-disney uppercase tracking-[0.3em] mb-4">01</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">CEO & Market Operator</h2>

            <div className="flex flex-col md:flex-row gap-10 items-start mb-14">
              {/* Corporate photo — large, prominent */}
              <div className="w-full md:w-[340px] shrink-0">
                <img
                  src="/assets/andi-olivera.jpg"
                  alt="Andrea Olivera — CEO"
                  className="w-full rounded-3xl shadow-xl object-cover bg-white"
                />
                <div className="mt-4 text-center">
                  <p className="text-lg font-bold text-slate-800">Andrea Johanna Olivera</p>
                  <p className="text-xs text-disney uppercase tracking-[0.2em] font-bold mt-1">
                    CEO & Market Operator
                  </p>
                </div>
              </div>

              {/* Bio — serious executive tone */}
              <div className="flex-1">
                <p className="text-base text-slate-600 leading-relaxed mb-5">
                  Andrea Olivera leads Global Dream Travel as CEO and primary market operator,
                  combining executive agency management with direct field expertise in the LATAM
                  theme park segment. She manages a structured network of 150+ certified travel
                  advisors and oversees proprietary technology development.
                </p>
                <p className="text-base text-slate-600 leading-relaxed mb-5">
                  With over 2.7 million organic views across digital channels, she operates
                  as both the strategic decision-maker and the primary distribution channel
                  for the agency — a dual role that eliminates the gap between brand awareness
                  and operational execution.
                </p>
                <p className="text-base text-slate-600 leading-relaxed mb-6">
                  Her direct presence in the parks ensures that every itinerary, recommendation
                  and operational decision is based on first-hand operational knowledge —
                  not third-party information.
                </p>

                {/* Credentials */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {['IATA Accredited US', 'Disney Certified', 'Universal Partner', 'Florida LLC'].map((c) => (
                    <span key={c} className="text-[10px] font-bold uppercase tracking-wider text-disney bg-disney/5 px-3 py-1.5 rounded-lg border border-disney/10">
                      {c}
                    </span>
                  ))}
                </div>

                <blockquote className="border-l-4 border-slate-300 pl-5 py-2">
                  <p className="text-sm text-slate-500 italic leading-relaxed">
                    "Every family that trusts us receives the same dedication I would give to my own.
                    That is my promise, my mission, and the reason we created Global Dream Travel."
                  </p>
                </blockquote>
              </div>
            </div>

            {/* Gallery — Walt + Roy (brother) statues */}
            <PhotoStrip
              height="h-48 md:h-64"
              images={[
                { src: '/assets/WALT.jpeg', alt: 'Andrea with Walt Disney statue at EPCOT' },
                { src: '/assets/ROY.jpeg', alt: 'Roy Disney statue with Minnie Mouse' },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 02 — EXECUTIVE OVERVIEW                             */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="pdf-section py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-disney uppercase tracking-[0.3em] mb-4">02</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Executive Overview</h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Global Dream Travel operates as an IATA-accredited agency with structured LATAM distribution
              and proprietary digital infrastructure designed specifically for theme park travel.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <p className="text-sm text-slate-700 leading-relaxed mb-4 font-medium">We integrate:</p>
              <ul className="space-y-3">
                {[
                  'Large-scale organic digital reach',
                  'Structured advisory network',
                  'Proprietary itinerary automation technology',
                  'High-intent LATAM family segment',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 bg-disney rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-500 mt-6 italic">
                This creates a closed-loop ecosystem combining awareness, advisory execution
                and in-park experience optimization.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 03 — AGENCY INFRASTRUCTURE                          */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="pdf-section py-20 md:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-disney uppercase tracking-[0.3em] mb-4">03</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">Agency Infrastructure</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: <Shield size={20} />, label: 'IATA Accredited Agency — US' },
                { icon: <Globe size={20} />, label: 'Registered LLC — Florida, USA' },
                { icon: <Users size={20} />, label: '150+ Active Travel Advisors' },
                { icon: <Handshake size={20} />, label: 'Disney & Universal Specialization' },
                { icon: <TrendingUp size={20} />, label: 'LATAM High-Intent Market Focus' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white p-5 rounded-xl border border-slate-200 flex items-center gap-3"
                >
                  <div className="text-disney shrink-0">{item.icon}</div>
                  <span className="text-sm text-slate-700 font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-slate-500 mt-8 leading-relaxed">
              Global Dream Travel functions not only as a digital brand but as an operationally
              structured distribution network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 04 — DIGITAL MARKET PENETRATION + METRIC PROOFS     */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="pdf-section py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-disney uppercase tracking-[0.3em] mb-4">04</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Digital Market Penetration</h2>
            <p className="text-sm text-slate-400 uppercase tracking-wider mb-10">Organic Reach Metrics — Verified</p>

            {/* Metric cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {[
                { value: '2.7M+', label: 'Viral Reel Views' },
                { value: '1.9M+', label: 'Secondary High-Impact Reach' },
                { value: '900K+', label: 'Engagement Campaign' },
                { value: '83%', label: 'Non-Follower Organic Penetration' },
                { value: '1.1M+', label: 'Views (Last 30 Days)' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-disney font-quicksand mb-2">{item.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Instagram proof screenshots */}
            <div className="mb-8">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-4 text-center">
                Verified Instagram Analytics
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { src: '/assets/metrics-2.7m.jpeg', alt: '2.7M views reel stats' },
                  { src: '/assets/metrics-1.9m.jpeg', alt: '1.9M views reel stats' },
                  { src: '/assets/metrics-904k.jpeg', alt: '904K views reel stats' },
                  { src: '/assets/metrics-30days.jpeg', alt: '1.1M views last 30 days' },
                ].map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto object-contain bg-white"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed text-center">
              Our digital distribution consistently penetrates beyond our follower base,
              reaching high-intent family audiences organically across LATAM.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* PHOTO BREAKER — Group, castle, charla                */}
      {/* ═══════════════════════════════════════════════════ */}
      <div className="pdf-section max-w-5xl mx-auto px-4 py-4">
        <PhotoStrip
          height="h-48 md:h-64"
          images={[
            { src: '/assets/gruoal2026.jpg', alt: 'Global Dream Travel group at Cinderella Castle 2026' },
            { src: '/assets/CASTILLO1.jpeg', alt: 'Cinderella Castle daytime' },
            { src: '/assets/CHARLA.png', alt: 'Andrea Olivera professional talk on stage' },
          ]}
        />
      </div>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 05 — EXPERIENCE PHILOSOPHY                          */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="pdf-section py-20 md:py-28 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-disney-light uppercase tracking-[0.3em] mb-4">05</p>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Why Families Spend More and Enjoy More
            </h2>
            <p className="text-base text-slate-400 leading-relaxed mb-12 max-w-3xl">
              When families stop worrying about logistics, navigation and timing, something
              remarkable happens: they become fully present. Our TRIP App eliminates itinerary
              stress — and the result is a fundamentally different in-park behavior.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-14">
              {[
                {
                  icon: <ShoppingBag size={24} />,
                  title: 'More Merchandise Purchased',
                  desc: 'Relaxed families browse and buy. When you are not rushing to the next ride, the gift shop becomes part of the experience — not an obstacle.',
                },
                {
                  icon: <Utensils size={24} />,
                  title: 'More In-Park Dining',
                  desc: 'Planned dining means families eat inside the parks instead of skipping meals or leaving the property. Reservations are pre-structured in their TRIP itinerary.',
                },
                {
                  icon: <Sparkles size={24} />,
                  title: 'More Activities Completed',
                  desc: 'A structured day eliminates wasted time. Families complete 30-40% more attractions, shows and experiences than unplanned visitors.',
                },
                {
                  icon: <Heart size={24} />,
                  title: 'A More Immersive Experience',
                  desc: 'When logistics are invisible, families are present in the moment. They watch the fireworks instead of checking maps. They enjoy the ride instead of planning the next one.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-7"
                >
                  <div className="text-disney mb-4">{item.icon}</div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Philosophy photo grid — 2x2 balanced */}
            <div className="grid grid-cols-2 gap-3 rounded-2xl overflow-hidden">
              <div className="h-52 md:h-64 overflow-hidden rounded-xl">
                <img src="/assets/gruoal2026.jpg" alt="Global Dream Travel group at Cinderella Castle" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="h-52 md:h-64 overflow-hidden rounded-xl">
                <img src="/assets/BACKCASTILLO.jpeg" alt="Fireworks at Cinderella Castle from audience" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="h-52 md:h-64 overflow-hidden rounded-xl">
                <img src="/assets/capacitacion.jpg" alt="Andrea Olivera capacitacion profesional" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="h-52 md:h-64 overflow-hidden rounded-xl">
                <img src="/assets/familia-parque.jpg" alt="Family enjoying Disney parks" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>

            <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
                <span className="text-white font-bold">The strategic implication for partners:</span>{' '}
                Global Dream Travel families arrive prepared, stay longer, spend more and leave
                with higher satisfaction scores. Our technology doesn't just help families —
                it drives higher per-visitor revenue for every park and resort we send them to.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 06 — DIGITAL ECOSYSTEM CONNECTIVITY                 */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="pdf-section py-20 md:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-disney uppercase tracking-[0.3em] mb-4">06</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">Digital Ecosystem Connectivity</h2>
            <div className="space-y-4">
              {[
                {
                  platform: 'Instagram',
                  role: 'Mass Reach Engine',
                  metric: '2.7M+ Organic Views',
                  url: 'https://www.instagram.com/andiiolivera.ok',
                },
                {
                  platform: 'LinkedIn',
                  role: 'Executive Authority',
                  metric: 'CEO-Level Corporate Positioning',
                  url: 'https://www.linkedin.com/in/andrea-johanna-olivera-global/',
                },
                {
                  platform: 'YouTube',
                  role: 'Long-form Educational Media',
                  metric: 'Structured Destination Storytelling',
                  url: 'https://www.youtube.com/@Globaldreamtravel13',
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-5 bg-white border border-slate-200 rounded-xl hover:border-disney/30 hover:shadow-sm transition-all group"
                >
                  <div>
                    <div className="text-sm font-bold text-slate-800">{item.platform}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{item.role} — {item.metric}</div>
                  </div>
                  <ExternalLink size={16} className="text-slate-300 group-hover:text-disney transition-colors shrink-0" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 07 — TECHNOLOGY INFRASTRUCTURE (compact sidebar)    */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="pdf-section py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-disney uppercase tracking-[0.3em] mb-4">07</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Technology Infrastructure</h2>

            {/* TRIP Engine — side-by-side layout */}
            <div className="flex flex-col md:flex-row gap-8 mb-10">
              {/* Left: Video auto-play on scroll */}
              <div className="w-full md:w-[280px] shrink-0" ref={videoContainerRef}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[9/16] max-h-[400px]">
                  <video
                    ref={videoRef}
                    src="/assets/fix/appTRIPGlobal.mp4"
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right: Text content */}
              <div className="flex-1">
                <h3 className="text-base font-bold text-slate-800 mb-2">TRIP — Dynamic Itinerary Engine</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Proprietary date-activated itinerary system for theme park execution.
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    'Automatic day recognition based on arrival date',
                    'Daily schedule activation without manual input',
                    'Attraction-linked navigation',
                    'Real-time in-park guidance',
                    'Reduced decision fatigue for families',
                    'Structured experience flow',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <div className="w-1 h-1 bg-disney rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-500 italic">
                  TRIP transforms planning into guided execution.
                </p>

              </div>
            </div>

            {/* ── Agent Administration System ─────────────── */}
            <div className="mt-10 pt-10 border-t border-slate-100">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Left: Text */}
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-800 mb-2">Centralized Agent Operating Platform</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Proprietary B2B administration system managing 150+ travel advisors,
                    booking pipelines, sales tracking and operational visibility in real time.
                  </p>
                  <ul className="space-y-2 mb-4">
                    {[
                      'Internal booking management & pipeline',
                      'Sales tracking and performance analytics',
                      'Structured advisor network administration',
                      'Unified digital workflow across all agents',
                      'Real-time operational visibility dashboard',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <div className="w-1 h-1 bg-disney rounded-full mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                    globaldream.netlify.app — Scalable LATAM Infrastructure
                  </p>
                </div>

                {/* Right: Dashboard mockup (compact) */}
                <div className="w-full md:w-[300px] shrink-0">
                  <div className="bg-slate-800 rounded-2xl border border-slate-700 p-4 shadow-xl">
                    {/* Browser bar */}
                    <div className="flex items-center gap-1.5 mb-4">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="ml-2 text-[8px] text-slate-500 font-mono">globaldream.netlify.app</span>
                    </div>
                    {/* Revenue card */}
                    <div className="bg-gradient-to-r from-disney to-disney-light p-3 rounded-lg mb-3">
                      <div className="text-[8px] uppercase tracking-widest text-white/60 font-bold">Bookings this month</div>
                      <div className="text-xl font-bold font-quicksand text-white">$247,850</div>
                      <div className="text-[8px] text-white/70">+23% vs last month</div>
                    </div>
                    {/* Mini stats */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {[
                        { val: '38', label: 'Active', color: 'text-yellow-400' },
                        { val: '12', label: 'Confirmed', color: 'text-green-400' },
                        { val: '5', label: 'Pending', color: 'text-blue-400' },
                      ].map((s, i) => (
                        <div key={i} className="bg-white/5 p-2 rounded-lg text-center">
                          <div className={`text-sm font-bold font-quicksand ${s.color}`}>{s.val}</div>
                          <div className="text-[7px] text-slate-400 uppercase">{s.label}</div>
                        </div>
                      ))}
                    </div>
                    {/* Booking rows */}
                    <div className="space-y-1.5">
                      {['Fam. Rodriguez — Disney World', 'Fam. Lopez — Disney Cruise', 'Fam. Martinez — Universal'].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                          <span className="text-[9px] text-slate-300">{item}</span>
                          <span className="text-[7px] px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded-full font-bold">Confirmed</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* PHOTO BREAKER — Mickey + Castle night                 */}
      {/* ═══════════════════════════════════════════════════ */}
      <div className="pdf-section max-w-5xl mx-auto px-4 py-4">
        <PhotoStrip
          height="h-48 md:h-64"
          images={[
            { src: '/assets/andii_mickey.jpeg', alt: 'Andrea with Sorcerer Mickey' },
            { src: '/assets/REDCASTILLO.jpeg', alt: 'Cinderella Castle night fireworks' },
          ]}
        />
      </div>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 08 — MARKET POSITIONING                              */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="pdf-section py-20 md:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-disney uppercase tracking-[0.3em] mb-4">08</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Market Positioning</h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Global Dream Travel represents a hybrid model:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              {['Digital Acquisition Channel', 'Structured IATA Agency — US', 'Proprietary Experience Technology'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-white border border-slate-200 rounded-xl px-6 py-4 text-center">
                    <span className="text-sm font-bold text-slate-700">{item}</span>
                  </div>
                  {i < 2 && <span className="text-disney font-bold text-lg hidden md:block">+</span>}
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 leading-relaxed text-center">
              This integrated model reduces friction between inspiration and execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 09 — STRATEGIC COLLABORATION MODEL                   */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="pdf-section py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-disney uppercase tracking-[0.3em] mb-4">09</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Strategic Collaboration Model</h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              We seek alignment beyond traditional influencer campaigns.
            </p>
            <div className="space-y-3">
              {[
                'LATAM launch amplification',
                'Educational campaign integration',
                'Event and preview coverage',
                'Training-based content activation',
                'Strategic growth alignment discussions',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl"
                >
                  <ArrowRight size={14} className="text-disney shrink-0" />
                  <span className="text-sm text-slate-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 10 — DIFFERENTIATION                                 */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="pdf-section py-20 md:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-disney uppercase tracking-[0.3em] mb-4">10</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Differentiation</h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Unlike standalone creators or traditional agencies, we combine:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Reach', desc: 'Organic viral distribution' },
                { label: 'Infrastructure', desc: 'IATA structured agency' },
                { label: 'Technology', desc: 'Proprietary TRIP engine' },
                { label: 'Specialization', desc: 'LATAM theme park segment' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-slate-200 rounded-xl p-6 text-center"
                >
                  <div className="text-lg font-bold text-disney mb-2">{item.label}</div>
                  <div className="text-xs text-slate-400">{item.desc}</div>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-slate-500 text-center leading-relaxed">
              Creating measurable, scalable impact within the LATAM theme park segment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 11 — LATAM MARKET OPPORTUNITY                        */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="pdf-section py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-disney uppercase tracking-[0.3em] mb-4">11</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">LATAM Market Opportunity Snapshot</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: 'Tourism Growth', desc: 'LATAM tourism to Florida growing at accelerated pace year-over-year, driven by family segment demand.' },
                { title: 'Family Segment', desc: 'Families represent the primary driver of theme park tourism from Latin America, with high average spend per trip.' },
                { title: 'Structured Planning', desc: 'Growing demand for structured, technology-assisted travel planning among LATAM families visiting US theme parks.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-6"
                >
                  <h3 className="text-sm font-bold text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 12 — STRATEGIC INVITATION                            */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="pdf-section py-24 md:py-32 relative overflow-hidden">
        {/* Background image */}
        <img
          src="/assets/BACKCASTILLO.jpeg"
          alt="Fireworks at Cinderella Castle"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/85" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-disney-light uppercase tracking-[0.3em] mb-4">12</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Strategic Invitation</h2>
            <p className="text-base text-slate-300 leading-relaxed mb-10">
              We welcome a 20-minute executive conversation to explore long-term
              LATAM growth alignment opportunities.
            </p>
            <a
              href="https://calendly.com/GLOBALDREAMT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-10 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-disney hover:text-white transition-all"
            >
              Schedule Strategic Call
              <ArrowRight size={16} />
            </a>
            <div className="mt-16 pt-8 border-t border-white/10">
              <img
                src="/assets/logo-global-dream.png"
                alt="Global Dream Travel"
                className="h-10 mx-auto mb-4 object-contain opacity-50"
              />
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em]">
                Global Dream Travel — Confidential Strategic Brief
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      </div>
    </div>
  );
};

export default MediaKit;
