import { CheckCircle2, Target, Eye, Zap, Shield, Code2, TrendingUp, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'

const values = [
  { icon: Shield, title: 'Security First', description: 'We build payment infrastructure with security-conscious practices at every layer.' },
  { icon: Zap, title: 'Speed & Reliability', description: 'Payments should work — every time, instantly. Reliability is non-negotiable for us.' },
  { icon: Code2, title: 'Developer Experience', description: 'Clean APIs, comprehensive docs, and tools that developers actually enjoy using.' },
  { icon: TrendingUp, title: 'Business Growth', description: 'Our goal is to reduce payment friction so your business can focus on growth.' },
]

export default function About() {
  return (
    <>
      <section className="bg-[#040E2B] py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#60A5FA] text-xs font-bold uppercase tracking-[0.14em] mb-5">About Us</span>
            <h1 className="text-[2.6rem] sm:text-5xl font-extrabold text-white mb-5 leading-[1.1] tracking-[-0.04em]">
              Building the Future of<br />
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                Indian Payments
              </span>
            </h1>
            <p className="text-lg text-blue-100/80 max-w-xl leading-relaxed">
              Matrix Gateway is a modern payment infrastructure company providing businesses across India with the tools they need to accept, process, and disburse digital payments.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="inline-flex items-center gap-2 text-[#1A56DB] text-xs font-bold uppercase tracking-[0.12em] mb-4">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F1E5C] mb-6 leading-tight">
                A Payment Platform Built for Modern India
              </h2>
              <p className="text-slate-500 mb-4 leading-relaxed">
                India's digital payment ecosystem has transformed dramatically. Yet many businesses still face unnecessary complexity when accepting payments — multiple integrations, opaque pricing, and fragmented tooling.
              </p>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Matrix Gateway was built to solve that. One platform, all payment methods, clear pricing, and the developer experience modern teams deserve.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Whether you're a registered business, a startup, or an independent professional — Matrix Gateway provides access to a full payments infrastructure built to scale with you.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: 'All Types', l: 'Businesses Served', sub: 'Registered or not, online or offline' },
                  { v: '150+', l: 'Payment Methods', sub: 'Cards, UPI, wallets, net banking' },
                  { v: 'T+1', l: 'Settlement', sub: 'Next-day funds to your account' },
                  { v: '99.9%', l: 'Platform Uptime', sub: 'Reliable when you need it most' },
                ].map(({ v, l, sub }) => (
                  <div key={l} className="p-5 bg-[#EFF6FF] rounded-2xl">
                    <p className="text-2xl font-black text-[#0F1E5C] mb-1">{v}</p>
                    <p className="text-sm font-bold text-[#0F1E5C] mb-1">{l}</p>
                    <p className="text-xs text-slate-500">{sub}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <ScrollReveal delay={0}>
              <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
                <div className="w-12 h-12 bg-[#1A56DB] rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F1E5C] mb-3">Our Mission</h3>
                <p className="text-slate-500 leading-relaxed">
                  To make digital payments accessible, reliable, and developer-friendly for every business in India — regardless of size, sector, or technical capability.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
                <div className="w-12 h-12 bg-[#040E2B] rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F1E5C] mb-3">Our Vision</h3>
                <p className="text-slate-500 leading-relaxed">
                  A future where any business — from a street vendor to a large enterprise — has frictionless access to world-class payment infrastructure.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeader label="Our Values" title="What Drives Us" subtitle="The principles that guide every product decision we make." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl border border-slate-100 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(26,86,219,0.1)] hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-4">
                    <v.icon className="w-6 h-6 text-[#1A56DB]" />
                  </div>
                  <h3 className="font-bold text-[#0F1E5C] mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we provide */}
      <section className="section-padding bg-[#040E2B]">
        <div className="container-wide">
          <SectionHeader label="What We Provide" title="The Complete Payments Stack" light />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {[
              'Payment Gateway for online businesses',
              'Payment Links for quick collections',
              'Payouts for sending money at scale',
              'Wallets for platform balance management',
              'Subscriptions for recurring billing',
              'Route for payment distribution',
              'Invoice for digital billing',
              'UPI for native mobile payments',
              'Developer APIs for custom integrations',
            ].map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.06}>
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm text-blue-100">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to Build with Matrix Gateway?" subtitle="Start today and get your payment infrastructure live fast." />
    </>
  )
}
