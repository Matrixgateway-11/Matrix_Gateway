import { GitBranch, ArrowRight, CheckCircle2, Users, Zap, BarChart3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'
import { motion } from 'framer-motion'

export default function RoutePage() {
  return (
    <>
      <section className="bg-[#040E2B] py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#60A5FA] text-xs font-bold uppercase tracking-[0.14em] mb-5"><span className="w-2 h-2 bg-[#60A5FA] rounded-full" />Route</span>
            <h1 className="text-[2.6rem] sm:text-5xl font-extrabold text-white mb-5 leading-[1.1] tracking-[-0.04em]">
              Route Payments to<br />
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                the Right Destination
              </span>
            </h1>
            <p className="text-lg text-blue-100/80 mb-8 max-w-xl leading-relaxed">
              Automatically split and distribute payments across multiple recipients — vendors, platforms, and partners — based on configurable rules.
            </p>
            <Link to="/signup" className="inline-flex items-center gap-2 bg-[#1A56DB] text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#1648C8] transition-colors shadow-lg active:scale-[0.98]">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Routing diagram */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeader label="How Route Works" title="Intelligent Payment Distribution" subtitle="Payments flow from the customer through Matrix Gateway's routing engine to the right accounts — automatically." />

          <div className="mt-12 flex flex-col items-center gap-4 max-w-2xl mx-auto">
            {/* Customer */}
            <ScrollReveal>
              <div className="flex items-center justify-center w-full">
                <div className="bg-[#EFF6FF] border-2 border-[#1A56DB] rounded-2xl px-8 py-4 text-center">
                  <Users className="w-6 h-6 text-[#1A56DB] mx-auto mb-1" />
                  <p className="font-bold text-[#0F1E5C] text-sm">Customer Payment</p>
                  <p className="text-xs text-slate-500">₹10,000 collected</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Arrow */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="flex flex-col items-center gap-1">
                <div className="w-px h-6 bg-[#1A56DB]/40" />
                <ArrowRight className="w-5 h-5 text-[#1A56DB] -rotate-90" />
              </div>
            </motion.div>

            {/* Routing engine */}
            <ScrollReveal>
              <div className="bg-[#040E2B] rounded-2xl px-10 py-5 text-center">
                <GitBranch className="w-6 h-6 text-blue-300 mx-auto mb-1" />
                <p className="font-bold text-white text-sm">Matrix Gateway Route Engine</p>
                <p className="text-xs text-blue-300">Rules-based distribution</p>
              </div>
            </ScrollReveal>

            {/* Arrow split */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="w-full flex justify-center">
              <div className="flex flex-col items-center gap-1">
                <div className="w-px h-6 bg-[#1A56DB]/40" />
                <div className="flex items-center gap-0">
                  <div className="w-16 sm:w-24 h-px bg-[#1A56DB]/40" />
                  <div className="w-px h-6 bg-[#1A56DB]/40 mt-0" />
                  <div className="w-16 sm:w-24 h-px bg-[#1A56DB]/40" />
                </div>
              </div>
            </motion.div>

            {/* Destinations */}
            <div className="grid grid-cols-3 gap-4 w-full">
              {[
                { label: 'Merchant', pct: '80%', color: 'bg-emerald-50 border-emerald-200' },
                { label: 'Platform Fee', pct: '15%', color: 'bg-blue-50 border-blue-200' },
                { label: 'Reserve', pct: '5%', color: 'bg-slate-50 border-slate-200' },
              ].map(({ label, pct, color }) => (
                <ScrollReveal key={label}>
                  <div className={`border-2 ${color} rounded-xl p-4 text-center`}>
                    <p className="font-black text-[#0F1E5C] text-lg">{pct}</p>
                    <p className="text-xs text-slate-600 font-medium">{label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <SectionHeader label="Features" title="Powerful Routing Capabilities" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {[
              { icon: GitBranch, title: 'Rule-Based Splitting', description: 'Define rules for how incoming payments are distributed across recipients.' },
              { icon: Zap, title: 'Instant Distribution', description: 'Funds are split and routed in real time, no manual intervention needed.' },
              { icon: CheckCircle2, title: 'Multiple Recipients', description: 'Route a single payment to any number of destination accounts simultaneously.' },
              { icon: BarChart3, title: 'Full Audit Trail', description: 'Every routing decision is logged with detailed reports for compliance.' },
              { icon: Users, title: 'Marketplace Support', description: "Perfect for marketplace models where payments go to multiple vendors." },
              { icon: ArrowRight, title: 'Configurable via API', description: 'Set and update routing rules programmatically through our API.' },
            ].map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.08}>
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-[0_4px_24px_rgba(26,86,219,0.1)] hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-3">
                    <f.icon className="w-5 h-5 text-[#1A56DB]" />
                  </div>
                  <h3 className="font-bold text-[#0F1E5C] text-sm mb-1.5">{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Simplify Complex Payment Flows" subtitle="Use Route to distribute payments to the right recipients — automatically." primaryLabel="Explore Route API" />
    </>
  )
}
