import { FileText, CheckCircle2, Bell, BarChart3, ArrowRight, Clock, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'

export default function Invoice() {
  return (
    <>
      <section className="bg-[#040E2B] py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#60A5FA] text-xs font-bold uppercase tracking-[0.14em] mb-5"><span className="w-2 h-2 bg-[#60A5FA] rounded-full" />Invoice</span>
            <h1 className="text-[2.6rem] sm:text-5xl font-extrabold text-white mb-5 leading-[1.1] tracking-[-0.04em]">
              Create Invoices That<br />
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                Get Paid Faster
              </span>
            </h1>
            <p className="text-lg text-blue-100/80 mb-8 max-w-xl leading-relaxed">
              Generate professional invoices with an integrated payment link. Track status, send reminders, and manage your receivables — all in one place.
            </p>
            <Link to="/signup" className="inline-flex items-center gap-2 bg-[#1A56DB] text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#1648C8] transition-colors shadow-lg active:scale-[0.98]">
              Create Your First Invoice <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Invoice mockup */}
            <ScrollReveal direction="left">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-w-md">
                <div className="bg-gradient-to-r from-[#0F1E5C] to-[#1A56DB] h-1" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-7 h-7 bg-[#1A56DB] rounded-lg flex items-center justify-center">
                          <span className="text-white font-black text-xs">M</span>
                        </div>
                        <span className="font-bold text-[#0F1E5C] text-sm">Matrix Gateway</span>
                      </div>
                      <p className="text-xs text-slate-400">Chennai, Tamil Nadu</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400">Invoice</p>
                      <p className="font-bold text-[#0F1E5C] text-sm">#INV-2024-0042</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-5 text-xs">
                    <div>
                      <p className="text-slate-400 mb-0.5">Bill To</p>
                      <p className="font-semibold text-[#0F1E5C]">Acme Corp</p>
                      <p className="text-slate-500">accounts@acme.in</p>
                    </div>
                    <div className="text-right">
                      <div className="mb-2">
                        <p className="text-slate-400">Issue Date</p>
                        <p className="font-semibold text-[#0F1E5C]">Sep 22, 2026</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Due Date</p>
                        <p className="font-semibold text-red-600">Oct 07, 2026</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-slate-100 rounded-xl overflow-hidden mb-5">
                    <div className="bg-slate-50 grid grid-cols-3 px-3 py-2 text-xs font-semibold text-slate-500">
                      <span>Item</span><span className="text-center">Qty</span><span className="text-right">Amount</span>
                    </div>
                    {[
                      { item: 'API Integration', qty: 1, amt: '₹25,000' },
                      { item: 'Monthly Support', qty: 3, amt: '₹9,000' },
                    ].map(({ item, qty, amt }) => (
                      <div key={item} className="grid grid-cols-3 px-3 py-2 text-xs text-slate-700 border-t border-slate-100">
                        <span>{item}</span><span className="text-center">{qty}</span><span className="text-right font-medium">{amt}</span>
                      </div>
                    ))}
                    <div className="grid grid-cols-3 px-3 py-3 border-t border-slate-200 bg-[#EFF6FF]">
                      <span className="text-xs font-bold text-[#0F1E5C] col-span-2">Total</span>
                      <span className="text-right text-sm font-black text-[#0F1E5C]">₹34,000</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-[#1A56DB] text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5">
                      <Send className="w-3.5 h-3.5" /> Pay Now
                    </button>
                    <div className="flex items-center gap-1 px-3 py-2 bg-amber-50 rounded-xl">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      <span className="text-xs text-amber-700 font-medium">Pending</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Features */}
            <ScrollReveal direction="right">
              <SectionHeader label="Features" title="Smart Invoicing for Modern Businesses" center={false} />
              <p className="text-slate-500 mt-4 mb-6 leading-relaxed">Stop chasing payments. Matrix Gateway Invoice handles creation, delivery, and collection automatically.</p>
              <div className="space-y-4">
                {[
                  { icon: FileText, title: 'Professional Invoice Creation', desc: 'Add items, taxes, descriptions, and your branding in a clean invoice template.' },
                  { icon: Send, title: 'Integrated Payment Links', desc: 'Every invoice comes with a secure payment link — customers pay with one click.' },
                  { icon: Bell, title: 'Automated Reminders', desc: 'Automatic payment reminders sent before and after due dates.' },
                  { icon: BarChart3, title: 'Receivables Dashboard', desc: 'See what\'s paid, pending, and overdue at a glance.' },
                  { icon: CheckCircle2, title: 'Instant Status Updates', desc: 'Invoice status updates in real time when payment is received.' },
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

      <CTASection title="Get Paid Faster with Smart Invoicing" subtitle="Create your first invoice in under 2 minutes." primaryLabel="Create an Invoice" />
    </>
  )
}
