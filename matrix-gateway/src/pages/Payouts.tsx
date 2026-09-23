import { ArrowRightLeft, CheckCircle2, Zap, Users, FileText, BarChart3, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'

const useCases = [
  { icon: Users, title: 'Vendor Payments', description: 'Pay multiple vendors and suppliers simultaneously with bulk payout support.' },
  { icon: ArrowRightLeft, title: 'Customer Refunds', description: 'Process refunds directly to customer bank accounts or UPI IDs.' },
  { icon: FileText, title: 'Salary Disbursement', description: 'Automate salary and commission payments for your team.' },
  { icon: Zap, title: 'Partner Commissions', description: 'Distribute commissions and partner payouts automatically.' },
]

const modes = ['Bank Account (NEFT/RTGS/IMPS)', 'UPI ID', 'Wallet Transfer', 'IFSC-based Transfer']

export default function Payouts() {
  return (
    <>
      <section className="bg-[#040E2B] py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#60A5FA] text-xs font-bold uppercase tracking-[0.14em] mb-5"><span className="w-2 h-2 bg-[#60A5FA] rounded-full" />Payouts</span>
            <h1 className="text-[2.6rem] sm:text-5xl font-extrabold text-white mb-5 leading-[1.1] tracking-[-0.04em]">
              Disburse Funds<br />
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                Instantly at Scale
              </span>
            </h1>
            <p className="text-lg text-blue-100/80 mb-8 max-w-xl leading-relaxed">
              Send money to anyone — customers, vendors, partners, employees — through a single, reliable API. One-click or bulk, we handle it.
            </p>
            <Link to="/signup" className="inline-flex items-center gap-2 bg-[#1A56DB] text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#1648C8] transition-colors shadow-lg active:scale-[0.98]">
              Start Sending Payouts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container-wide grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { v: 'Instant', l: 'IMPS Transfers' },
            { v: 'Bulk', l: 'Payout Support' },
            { v: 'T+1', l: 'Settlement Cycle' },
            { v: 'All Modes', l: 'Transfer Options' },
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

      {/* Use cases */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <SectionHeader label="Use Cases" title="One Platform for All Your Disbursements" subtitle="Whether you're paying one vendor or a thousand — Matrix Gateway Payouts handles it." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {useCases.map((uc, i) => (
              <ScrollReveal key={uc.title} delay={i * 0.1}>
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(26,86,219,0.1)] hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-4">
                    <uc.icon className="w-6 h-6 text-[#1A56DB]" />
                  </div>
                  <h3 className="font-bold text-[#0F1E5C] mb-2">{uc.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{uc.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Transfer modes */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-3xl font-extrabold text-[#0F1E5C] tracking-[-0.04em] mb-4">Flexible Transfer Modes</h2>
              <p className="text-slate-500 mb-6">Send payouts through whichever channel works best for your recipients.</p>
              <div className="space-y-3">
                {modes.map((m) => (
                  <div key={m} className="flex items-center gap-3 p-4 bg-[#EFF6FF] rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-[#1A56DB] flex-shrink-0" />
                    <span className="font-medium text-[#0F1E5C] text-sm">{m}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Payout dashboard mock */}
            <ScrollReveal direction="right">
              <div className="bg-slate-900 rounded-2xl p-5 shadow-2xl">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-white font-bold text-sm">Payout Dashboard</h3>
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">Live</span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[{ l: 'Sent Today', v: '₹8.4L' }, { l: 'Pending', v: '₹1.2L' }, { l: 'Success Rate', v: '99.2%' }].map(({ l, v }) => (
                    <div key={l} className="bg-slate-800 rounded-xl p-3 text-center">
                      <p className="text-white font-bold text-base">{v}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    { name: 'Vendor A', amt: '₹50,000', mode: 'NEFT', status: 'success' },
                    { name: 'Vendor B', amt: '₹25,000', mode: 'IMPS', status: 'success' },
                    { name: 'Employee C', amt: '₹82,000', mode: 'NEFT', status: 'processing' },
                    { name: 'Partner D', amt: '₹12,500', mode: 'UPI', status: 'success' },
                  ].map((p, i) => (
                    <div key={i} className="flex items-center justify-between bg-slate-800 rounded-xl px-4 py-2.5">
                      <div>
                        <p className="text-white text-xs font-semibold">{p.name}</p>
                        <p className="text-slate-500 text-xs">{p.mode}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-xs font-bold">{p.amt}</p>
                        <span className={`text-xs ${p.status === 'success' ? 'text-emerald-400' : 'text-amber-400'}`}>{p.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection title="Start Disbursing at Scale" subtitle="Automate your payout workflows and save hours every week." primaryLabel="Set Up Payouts" />
    </>
  )
}
