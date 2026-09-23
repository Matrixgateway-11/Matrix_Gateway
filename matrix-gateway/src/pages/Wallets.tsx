import { Wallet, Plus, ArrowDownLeft, ArrowUpRight, RefreshCw, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'

export default function Wallets() {
  return (
    <>
      <section className="bg-[#040E2B] py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#60A5FA] text-xs font-bold uppercase tracking-[0.14em] mb-5"><span className="w-2 h-2 bg-[#60A5FA] rounded-full" />Wallets</span>
            <h1 className="text-[2.6rem] sm:text-5xl font-extrabold text-white mb-5 leading-[1.1] tracking-[-0.04em]">
              Manage Digital Balances<br />
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                for Your Platform
              </span>
            </h1>
            <p className="text-lg text-blue-100/80 mb-8 max-w-xl leading-relaxed">
              Give your users wallet functionality built into your product. Add money, withdraw, and transact — all within your own platform.
            </p>
            <Link to="/signup" className="inline-flex items-center gap-2 bg-[#1A56DB] text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#1648C8] transition-colors shadow-lg active:scale-[0.98]">
              Add Wallets to Your App <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <SectionHeader label="Wallet Features" title="Everything a Wallet Should Do" center={false} />
              <p className="text-slate-500 mb-6 mt-4 leading-relaxed">Offer a seamless wallet experience embedded directly into your platform. Users get a familiar, frictionless way to manage their money.</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Plus, title: 'Add Money', desc: 'Load via UPI, cards, or net banking' },
                  { icon: ArrowUpRight, title: 'Withdraw', desc: 'Transfer to linked bank account' },
                  { icon: RefreshCw, title: 'Transfer', desc: 'Send between wallet users' },
                  { icon: BarChart3, title: 'History', desc: 'Full transaction audit trail' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="p-4 bg-[#EFF6FF] rounded-xl">
                    <Icon className="w-5 h-5 text-[#1A56DB] mb-2" />
                    <p className="font-bold text-[#0F1E5C] text-sm">{title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-2">
                {['User wallet creation via API', 'KYC-linked wallet management', 'Wallet-to-wallet transfers', 'Auto-debit for recurring charges'].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />{f}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Wallet UI mock */}
            <ScrollReveal direction="right">
              <div className="max-w-xs mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                  <div className="bg-gradient-to-br from-[#0F1E5C] to-[#1A56DB] p-6">
                    <p className="text-blue-200/70 text-xs mb-1">Wallet Balance</p>
                    <p className="text-4xl font-black text-white mb-4">₹12,450.00</p>
                    <div className="flex gap-3">
                      {[{ icon: Plus, label: 'Add' }, { icon: ArrowUpRight, label: 'Send' }, { icon: ArrowDownLeft, label: 'Receive' }].map(({ icon: Icon, label }) => (
                        <button key={label} className="flex-1 flex flex-col items-center gap-1 bg-white/10 hover:bg-white/20 rounded-xl py-2.5 transition-colors">
                          <Icon className="w-4 h-4 text-white" />
                          <span className="text-white text-xs font-medium">{label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Recent Activity</p>
                    <div className="space-y-3">
                      {[
                        { label: 'Added via UPI', amt: '+₹5,000', color: 'text-emerald-600', icon: ArrowDownLeft },
                        { label: 'Purchase - Order #491', amt: '-₹1,250', color: 'text-red-500', icon: ArrowUpRight },
                        { label: 'Cashback Reward', amt: '+₹50', color: 'text-emerald-600', icon: ArrowDownLeft },
                        { label: 'Transfer to Bank', amt: '-₹10,000', color: 'text-red-500', icon: ArrowUpRight },
                      ].map(({ label, amt, color, icon: Icon }, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`w-7 h-7 rounded-full flex items-center justify-center ${color === 'text-emerald-600' ? 'bg-emerald-50' : 'bg-red-50'}`}>
                              <Icon className={`w-3.5 h-3.5 ${color}`} />
                            </div>
                            <span className="text-xs text-slate-600">{label}</span>
                          </div>
                          <span className={`text-xs font-bold ${color}`}>{amt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection title="Add Wallets to Your Platform" subtitle="Give your users a native payment experience they'll love to use." primaryLabel="Explore Wallet API" />
    </>
  )
}
