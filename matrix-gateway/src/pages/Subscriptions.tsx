import { RefreshCw, CheckCircle2, Users, BarChart3, Bell, ArrowRight, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'

export default function Subscriptions() {
  return (
    <>
      <section className="bg-[#040E2B] py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#60A5FA] text-xs font-bold uppercase tracking-[0.14em] mb-5">Subscriptions</span>
            <h1 className="text-[2.6rem] sm:text-5xl font-extrabold text-white mb-5 leading-[1.1] tracking-[-0.04em]">
              Automate Recurring<br />
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                Revenue Effortlessly
              </span>
            </h1>
            <p className="text-lg text-blue-100/80 mb-8 max-w-xl leading-relaxed">
              Build subscription-based revenue with automated billing, smart retry logic, and complete subscriber lifecycle management.
            </p>
            <Link to="/signup" className="inline-flex items-center gap-2 bg-[#1A56DB] text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#1648C8] transition-colors shadow-lg active:scale-[0.98]">
              Set Up Subscriptions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <SectionHeader label="Features" title="Everything You Need for Recurring Revenue" center={false} />
              <p className="text-slate-500 mt-4 mb-6 leading-relaxed">From plan creation to subscriber management — all in one dashboard.</p>
              <div className="space-y-4">
                {[
                  { icon: RefreshCw, title: 'Automated Billing', desc: 'Charges run automatically on the billing date. No manual intervention required.' },
                  { icon: Bell, title: 'Smart Retry Logic', desc: 'Failed payments are retried automatically with configurable retry rules.' },
                  { icon: Users, title: 'Subscriber Management', desc: 'Track active, churned, and paused subscribers from a single dashboard.' },
                  { icon: BarChart3, title: 'Revenue Analytics', desc: 'MRR, churn rate, and subscription growth tracked in real time.' },
                  { icon: Zap, title: 'Multiple Plans', desc: 'Create monthly, quarterly, annual, or custom billing cycles.' },
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

            {/* Subscription plans mockup */}
            <ScrollReveal direction="right">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                <div className="bg-slate-50 border-b border-slate-100 p-4">
                  <p className="font-bold text-[#0F1E5C] text-sm">Subscription Plans</p>
                </div>
                <div className="p-4 space-y-3">
                  {[
                    { name: 'Starter', price: '₹499/mo', subs: 142, status: 'active', color: 'bg-blue-500' },
                    { name: 'Professional', price: '₹1,499/mo', subs: 89, status: 'active', color: 'bg-[#1A56DB]' },
                    { name: 'Enterprise', price: '₹4,999/mo', subs: 23, status: 'active', color: 'bg-[#040E2B]' },
                  ].map((plan) => (
                    <div key={plan.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${plan.color}`} />
                        <div>
                          <p className="font-bold text-[#0F1E5C] text-sm">{plan.name}</p>
                          <p className="text-xs text-slate-500">{plan.price}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[#0F1E5C] text-sm">{plan.subs}</p>
                        <p className="text-xs text-emerald-600">subscribers</p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-slate-200 grid grid-cols-3 gap-3 text-center">
                    {[{ l: 'MRR', v: '₹2.8L' }, { l: 'Active', v: '254' }, { l: 'Churn', v: '2.4%' }].map(({ l, v }) => (
                      <div key={l}>
                        <p className="font-black text-[#0F1E5C] text-lg">{v}</p>
                        <p className="text-xs text-slate-400">{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection title="Build Predictable Revenue with Subscriptions" subtitle="Automate billing, reduce churn, and grow recurring revenue with ease." primaryLabel="Start for Free" />
    </>
  )
}
