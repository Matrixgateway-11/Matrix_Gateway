import { CheckCircle2, CreditCard, ArrowRight, Shield, Zap, BarChart3, Code2, Smartphone, Wallet, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'
import FeatureCard from '../components/FeatureCard'

const paymentMethods = [
  { icon: Smartphone, label: 'UPI', desc: 'All major UPI apps' },
  { icon: CreditCard, label: 'Cards', desc: 'Visa, Mastercard, RuPay, Amex' },
  { icon: Globe, label: 'Net Banking', desc: '100+ banks supported' },
  { icon: Wallet, label: 'Wallets', desc: 'Paytm, PhonePe & more' },
]

const benefits = [
  { icon: Shield, title: 'Secure Transactions', description: 'Payment workflows built with security-conscious data handling practices and encrypted data transmission.' },
  { icon: Zap, title: 'High Success Rates', description: 'Intelligent routing and retry logic helps maximize transaction success rates.' },
  { icon: BarChart3, title: 'Real-Time Reporting', description: 'Live transaction dashboard with detailed analytics, export capabilities, and insights.' },
  { icon: Code2, title: 'Easy Integration', description: 'RESTful APIs with SDKs, plugins for popular platforms, and complete documentation.' },
]

export default function PaymentGateway() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#040E2B] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="container-wide relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#60A5FA] text-xs font-bold uppercase tracking-[0.14em] mb-5"><span className="w-2 h-2 bg-[#60A5FA] rounded-full" />Payment Gateway</span>
            <h1 className="text-[2.6rem] sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-[1.1] tracking-[-0.04em]">
              Accept Payments<br />
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                Every Way Customers Pay
              </span>
            </h1>
            <p className="text-lg text-blue-100/80 mb-8 max-w-xl leading-relaxed">
              One integration unlocks all major payment methods in India. Fast, reliable, and built to scale with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup" className="btn-primary bg-white text-[#0F1E5C] hover:bg-blue-50 border-white shadow-lg inline-flex items-center gap-2">
                Start Accepting Payments <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/developers" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium text-sm px-6 py-3 rounded-lg border border-white/10 hover:border-white/25 transition-all">View API Docs</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeader label="Payment Methods" title="All the Ways India Pays" subtitle="A single integration gives you access to every major payment method in India." />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-12">
            {paymentMethods.map((m, i) => (
              <ScrollReveal key={m.label} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl border border-slate-100 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(26,86,219,0.1)] hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 bg-[#EFF6FF] rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <m.icon className="w-7 h-7 text-[#1A56DB]" />
                  </div>
                  <p className="font-bold text-[#0F1E5C] text-sm">{m.label}</p>
                  <p className="text-xs text-slate-400 mt-1">{m.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-3">
            {['EMI', 'International Cards', 'BNPL', 'Cardless EMI', 'QR Code', 'Payment Links'].map((m) => (
              <div key={m} className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 rounded-xl text-sm text-slate-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                {m}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <SectionHeader label="Why Choose Us" title="Built for Business Performance" subtitle="Every feature is designed to help you collect more payments with less friction." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {benefits.map((b, i) => <FeatureCard key={b.title} {...b} index={i} />)}
          </div>
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="inline-flex items-center gap-2 text-[#1A56DB] text-xs font-bold uppercase tracking-[0.12em] mb-4"><span className="w-2 h-2 bg-[#1A56DB] rounded-full" />Dashboard</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em] mb-4">Track Every Rupee in Real Time</h2>
              <p className="text-slate-500 leading-relaxed mb-6">Your payment dashboard gives you a live view of transactions, settlements, refunds, and revenue trends — all in one place.</p>
              <ul className="space-y-3">
                {['Live transaction monitoring', 'Detailed payment analytics', 'Settlement tracking', 'One-click refunds', 'Custom date range reports', 'Export to CSV/Excel'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <div className="space-y-3">
                  {[
                    { label: 'Total Collected', value: '₹28,47,500', pct: 100, color: 'bg-[#1A56DB]' },
                    { label: 'Settled', value: '₹24,80,000', pct: 87, color: 'bg-emerald-500' },
                    { label: 'Processing', value: '₹3,67,500', pct: 13, color: 'bg-amber-400' },
                  ].map(({ label, value, pct, color }) => (
                    <div key={label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-slate-700">{label}</span>
                        <span className="font-bold text-[#0F1E5C]">{value}</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-slate-200 grid grid-cols-3 gap-4 text-center">
                    {[{ v: '14,823', l: 'Total Txns' }, { v: '98.7%', l: 'Success Rate' }, { v: '< 2s', l: 'Avg Speed' }].map(({ v, l }) => (
                      <div key={l}><p className="text-xl font-black text-[#0F1E5C]">{v}</p><p className="text-xs text-slate-400">{l}</p></div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection title="Ready to Start Accepting Payments?" subtitle="Integrate Matrix Gateway and go live with all major payment methods in less than a day." />
    </>
  )
}
