import { motion } from 'framer-motion';
import { Shield, Users, Globe, TrendingUp, Smartphone, BarChart3, Handshake, ArrowRight, ExternalLink, Play } from 'lucide-react';
import { useState } from 'react';

const sectionFade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const MediaKit = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen font-poppins">

      {/* PORTADA */}
      <section className="min-h-screen flex items-center justify-center bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        >
          <img
            src="/assets/logo-global-dream.png"
            alt="Global Dream Travel"
            className="h-20 md:h-24 mx-auto mb-12 object-contain"
          />
          <div className="w-16 h-px bg-slate-300 mx-auto mb-8" />
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4 tracking-tight">
            Strategic LATAM Growth Partner
          </h1>
          <p className="text-lg text-slate-500 mb-2">
            Theme Parks & Destination Experiences
          </p>
          <div className="w-16 h-px bg-slate-300 mx-auto my-10" />
          <div className="text-sm text-slate-600 font-medium">
            Andrea Johanna Olivera
          </div>
          <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">
            CEO & Market Operator
          </div>
        </motion.div>
      </section>

      {/* EXECUTIVE OVERVIEW */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-disney uppercase tracking-[0.3em] mb-4">01</p>
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

      {/* AGENCY INFRASTRUCTURE */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-disney uppercase tracking-[0.3em] mb-4">02</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">Agency Infrastructure</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: <Shield size={20} />, label: 'IATA Accredited Agency' },
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

      {/* DIGITAL MARKET PENETRATION */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-disney uppercase tracking-[0.3em] mb-4">03</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Digital Market Penetration</h2>
            <p className="text-sm text-slate-400 uppercase tracking-wider mb-10">Organic Reach Metrics</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
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
            <p className="text-sm text-slate-500 mt-8 leading-relaxed">
              Our digital distribution consistently penetrates beyond our follower base,
              reaching high-intent family audiences organically across LATAM.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DIGITAL ECOSYSTEM CONNECTIVITY */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-disney uppercase tracking-[0.3em] mb-4">04</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">Digital Ecosystem Connectivity</h2>
            <div className="space-y-4">
              {[
                {
                  platform: 'Instagram',
                  role: 'Mass Reach Engine',
                  metric: '2.7M+ Organic Views',
                  url: 'https://www.instagram.com/andiolivera',
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

      {/* TECHNOLOGY INFRASTRUCTURE */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-disney uppercase tracking-[0.3em] mb-4">05</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">Technology Infrastructure</h2>

            {/* TRIP Engine */}
            <div className="mb-12">
              <h3 className="text-lg font-bold text-slate-800 mb-4">TRIP — Dynamic Itinerary Engine</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                A proprietary date-activated itinerary system designed specifically for theme park execution.
              </p>

              {/* Video preview */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 mb-6 cursor-pointer group"
                onClick={() => setVideoOpen(!videoOpen)}
              >
                {videoOpen ? (
                  <video
                    src="/assets/fix/appTRIPGlobal.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                  />
                ) : (
                  <div className="bg-slate-100 py-16 flex items-center justify-center">
                    <div className="w-16 h-16 bg-disney rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                    <span className="ml-4 text-sm font-medium text-slate-600">View TRIP App Demo</span>
                  </div>
                )}
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-4">Core Capabilities</p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Automatic day recognition based on arrival date',
                    'Daily schedule activation without manual input',
                    'Attraction-linked navigation',
                    'Real-time in-park guidance',
                    'Reduced decision fatigue for families',
                    'Structured experience flow',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-disney rounded-full mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-700 font-medium mt-6 italic">
                  TRIP transforms planning into guided execution.
                </p>
              </div>
            </div>

            {/* Agency OS */}
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-4">Integrated Agency Operating System</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Centralized digital workflow connecting:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {['Agents', 'Clients', 'Itinerary Engine', 'Sales Structure', 'Operational Visibility'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <div className="w-1.5 h-1.5 bg-disney rounded-full shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-4 uppercase tracking-wider">Scalable LATAM Infrastructure</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARKET POSITIONING */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-disney uppercase tracking-[0.3em] mb-4">06</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Market Positioning</h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Global Dream Travel represents a hybrid model:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              {['Digital Acquisition Channel', 'Structured IATA Agency', 'Proprietary Experience Technology'].map((item, i) => (
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

      {/* STRATEGIC COLLABORATION MODEL */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-disney uppercase tracking-[0.3em] mb-4">07</p>
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

      {/* DIFFERENTIATION */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-disney uppercase tracking-[0.3em] mb-4">08</p>
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

      {/* LATAM MARKET OPPORTUNITY */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-disney uppercase tracking-[0.3em] mb-4">09</p>
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

      {/* STRATEGIC INVITATION */}
      <section className="py-24 md:py-32 bg-slate-900 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div {...sectionFade}>
            <p className="text-xs font-bold text-disney-light uppercase tracking-[0.3em] mb-4">10</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Strategic Invitation</h2>
            <p className="text-base text-slate-400 leading-relaxed mb-10">
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
  );
};

export default MediaKit;
