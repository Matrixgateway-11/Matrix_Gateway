import { Link2, CheckCircle2, Share2, MessageSquare, Mail, ArrowRight, Zap, Clock, BarChart3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'

const steps = [
  { step: 1, title: 'Create a Link', icon: Link2, description: 'Set the amount, add a description, and optionally set an expiry date — done in under a minute.' },
  { step: 2, title: 'Share It Anywhere', icon: Share2, description: 'Share via WhatsApp, SMS, email, or embed it anywhere. No website required.' },
  { step: 3, title: 'Customer Pays', icon: CheckCircle2, description: 'Customer clicks the link, chooses their preferred payment method, and pays instantly.' },
  { step: 4, title: 'You Get Paid', icon: Zap, description: 'Payment is confirmed in real time and settled to your account on the next business day.' },
]

export default function PaymentLinks() {
  return (
    <>
      <section className="bg-[#040E2B] py-20 relative overflow-hidden">
        <div className="container-wide relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#60A5FA] text-xs font-bold uppercase tracking-[0.14em] mb-5"><span className="w-2 h-2 bg-[#60A5FA] rounded-full" />Payment Links</span>
            <h1 className="text-[2.6rem] sm:text-5xl font-extrabold text-white mb-5 leading-[1.1] tracking-[-0.04em]">
              Collect Payments<br />
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                Without a Website
              </span>
            </h1>
            <p className="text-lg text-blue-100/80 mb-8 max-w-xl leading-relaxed">
              Create a payment link in seconds and share it anywhere. Your customers pay without any friction — no app download, no website needed.
            </p>
            <Link to="/signup" className="inline-flex items-center gap-2 bg-[#1A56DB] text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#1648C8] transition-colors shadow-lg active:scale-[0.98]">
              Create Your First Link <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeader label="How It Works" title="Four Simple Steps to Get Paid" subtitle="The fastest way to collect payments without a developer or a website." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {steps.map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl border border-slate-100 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(26,86,219,0.1)] hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 bg-[#1A56DB] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-black text-xl shadow-md">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-[#0F1E5C] mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Link preview mockup */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="inline-flex items-center gap-2 text-[#1A56DB] text-xs font-bold uppercase tracking-[0.12em] mb-4"><span className="w-2 h-2 bg-[#1A56DB] rounded-full" />Features</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em] mb-4">Everything You Need, Nothing You Don't</h2>
              <p className="text-slate-500 mb-6 leading-relaxed">Payment Links are designed for simplicity. Set them up fast and track them easily.</p>
              <div className="space-y-4">
                {[
                  { icon: Clock, title: 'Set Expiry Dates', desc: 'Links expire automatically — great for time-sensitive offers.' },
                  { icon: BarChart3, title: 'Track in Real Time', desc: 'See who paid, when, and how much from your dashboard.' },
                  { icon: MessageSquare, title: 'Share Everywhere', desc: 'WhatsApp, SMS, email, social media — any channel works.' },
                  { icon: CheckCircle2, title: 'All Payment Methods', desc: 'UPI, cards, wallets, and net banking — customers choose their preference.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#1A56DB]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0F1E5C] text-sm">{title}</p>
                      <p className="text-sm text-slate-500 mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Payment link mockup */}
            <ScrollReveal direction="right">
              <div className="max-w-xs mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
                  <div className="bg-gradient-to-br from-[#0F1E5C] to-[#1A56DB] px-6 py-8 text-center">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-black text-lg">M</span>
                    </div>
                    <p className="text-white/70 text-sm">Matrix Gateway</p>
                    <p className="text-white font-bold mt-1">Request Payment</p>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <p className="text-4xl font-black text-[#0F1E5C]">₹2,499</p>
                      <p className="text-sm text-slate-500 mt-1">Professional Services Fee</p>
                    </div>
                    <div className="space-y-2 mb-5">
                      {['UPI', 'Credit / Debit Card', 'Net Banking', 'Wallets'].map((m) => (
                        <div key={m} className="flex items-center gap-3 p-3 border border-slate-100 rounded-xl hover:bg-[#EFF6FF] transition-colors cursor-pointer">
                          <div className="w-3 h-3 rounded-full border-2 border-slate-300 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{m}</span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full bg-[#1A56DB] text-white font-bold py-3.5 rounded-xl text-sm hover:bg-[#1A56DB]-light transition-colors">
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection title="Start Collecting Payments Instantly" subtitle="Create your first payment link in under a minute. No code, no website required." primaryLabel="Create a Payment Link" />
    </>
  )
}
