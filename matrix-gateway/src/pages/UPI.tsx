import { Smartphone, CheckCircle2, Zap, QrCode, ArrowRight, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'

export default function UPI() {
  return (
    <>
      <section className="bg-[#040E2B] py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#60A5FA] text-xs font-bold uppercase tracking-[0.14em] mb-5">UPI</span>
            <h1 className="text-[2.6rem] sm:text-5xl font-extrabold text-white mb-5 leading-[1.1] tracking-[-0.04em]">
              Native UPI Payments<br />
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                Your Customers Trust
              </span>
            </h1>
            <p className="text-lg text-blue-100/80 mb-8 max-w-xl leading-relaxed">
              Accept UPI payments through QR codes, collect requests, and intent flows. Fast, familiar, and used by hundreds of millions of Indians every day.
            </p>
            <Link to="/signup" className="inline-flex items-center gap-2 bg-[#1A56DB] text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#1648C8] transition-colors shadow-lg active:scale-[0.98]">
              Enable UPI Payments <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container-wide grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { v: '58%', l: 'of digital payments in India' },
            { v: 'Instant', l: 'Payment confirmation' },
            { v: '24/7', l: 'Always available' },
            { v: 'Zero', l: 'UPI transaction fee for customers' },
          ].map(({ v, l }, i) => (
            <ScrollReveal key={l} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-3xl font-black text-[#0F1E5C]">{v}</p>
                <p className="text-sm text-slate-500 mt-1">{l}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Phone mockup */}
            <ScrollReveal direction="left">
              <div className="flex justify-center">
                <div className="relative">
                  {/* Phone frame */}
                  <div className="w-64 bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl">
                    <div className="bg-white rounded-[2rem] overflow-hidden">
                      {/* Status bar */}
                      <div className="bg-[#1A56DB] h-8 flex items-center justify-between px-5">
                        <span className="text-white text-xs font-medium">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-3 h-1.5 bg-white/80 rounded-full" />
                          <div className="w-4 h-1.5 bg-white rounded-full" />
                        </div>
                      </div>

                      <div className="p-5">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Scan & Pay</p>

                        {/* QR placeholder */}
                        <div className="aspect-square bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center mb-4">
                          <QrCode className="w-16 h-16 text-[#0F1E5C] mb-2" />
                          <p className="text-xs text-slate-400 text-center">Matrix Gateway</p>
                          <p className="text-xs font-bold text-[#0F1E5C]">@matrixgateway</p>
                        </div>

                        <div className="text-center mb-4">
                          <p className="text-2xl font-black text-[#0F1E5C]">₹4,500</p>
                          <p className="text-xs text-slate-400">Order #4821</p>
                        </div>

                        <button className="w-full bg-[#1A56DB] text-white font-bold py-3 rounded-xl text-sm mb-3">
                          Pay via UPI
                        </button>

                        <div className="flex justify-center gap-4">
                          {['PhonePe', 'GPay', 'Paytm'].map((app) => (
                            <div key={app} className="flex flex-col items-center gap-1">
                              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                                <Smartphone className="w-5 h-5 text-slate-500" />
                              </div>
                              <span className="text-xs text-slate-400">{app}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Features */}
            <ScrollReveal direction="right">
              <SectionHeader label="UPI Features" title="All UPI Payment Flows, One Integration" center={false} />
              <p className="text-slate-500 mt-4 mb-6 leading-relaxed">From QR codes to collect requests and deep links — we cover every UPI payment scenario.</p>
              <div className="space-y-4">
                {[
                  { icon: QrCode, title: 'Dynamic QR Codes', desc: 'Generate unique QR codes per transaction for precise tracking and reconciliation.' },
                  { icon: Smartphone, title: 'UPI Intent (Deep Links)', desc: "Open any UPI app directly with pre-filled payment details for a one-tap experience." },
                  { icon: Zap, title: 'Collect Requests', desc: 'Send a collect request to a customer UPI ID and get notified when they approve.' },
                  { icon: CheckCircle2, title: 'Real-Time Settlement', desc: 'UPI payments settle directly to your account with instant notifications.' },
                  { icon: Shield, title: 'Fraud Monitoring', desc: 'Transaction monitoring to flag unusual patterns in your payment flows.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#1A56DB]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0F1E5C] text-sm">{title}</p>
                      <p className="text-sm text-slate-500 mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection title="Add UPI to Your Payment Stack" subtitle="Start accepting UPI payments across all major apps with a single integration." primaryLabel="Enable UPI" />
    </>
  )
}
