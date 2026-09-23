import { LayoutTemplate, CheckCircle2, Smartphone, Palette, BarChart3, ArrowRight, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'

const features = [
  { icon: Palette, title: 'Custom Branding', description: 'Add your logo, brand colors, and business description to match your identity.' },
  { icon: Smartphone, title: 'Mobile-First Design', description: 'Pages are optimized for mobile — where most of your customers will pay.' },
  { icon: BarChart3, title: 'Payment Tracking', description: 'Track every payment in real time from a centralized dashboard.' },
  { icon: Lock, title: 'Secure Checkout', description: 'Designed with secure data handling practices for every transaction.' },
]

export default function PaymentPages() {
  return (
    <>
      <section className="bg-[#040E2B] py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#60A5FA] text-xs font-bold uppercase tracking-[0.14em] mb-5">Payment Pages</span>
            <h1 className="text-[2.6rem] sm:text-5xl font-extrabold text-white mb-5 leading-[1.1] tracking-[-0.04em]">
              Custom Pages for<br />
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                Every Payment Need
              </span>
            </h1>
            <p className="text-lg text-blue-100/80 mb-8 max-w-xl leading-relaxed">
              Build beautiful, branded payment collection pages without writing a single line of code. Perfect for events, products, donations, and more.
            </p>
            <Link to="/signup" className="inline-flex items-center gap-2 bg-[#1A56DB] text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#1648C8] transition-colors shadow-lg active:scale-[0.98]">
              Create a Payment Page <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <SectionHeader label="Features" title="Professional Checkout Pages Built for You" subtitle="No developer needed. Create and publish payment pages from your dashboard." center={false} />
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {features.map((f, i) => (
                  <div key={f.title} className="p-5 rounded-xl border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-3">
                      <f.icon className="w-5 h-5 text-[#1A56DB]" />
                    </div>
                    <h3 className="font-bold text-[#0F1E5C] text-sm mb-1">{f.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{f.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Checkout UI mockup */}
            <ScrollReveal direction="right">
              <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                <div className="bg-gradient-to-r from-[#0F1E5C] to-[#1A56DB] h-2" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center">
                      <span className="text-[#1A56DB] font-black text-sm">M</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#0F1E5C] text-sm">Matrix Gateway</p>
                      <p className="text-xs text-slate-400">Secure Checkout</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4 mb-5">
                    <p className="text-xs text-slate-500 mb-1">Amount</p>
                    <p className="text-3xl font-black text-[#0F1E5C]">₹9,999</p>
                    <p className="text-sm text-slate-500 mt-1">Annual Membership</p>
                  </div>

                  <div className="space-y-3 mb-5">
                    {['Full Name', 'Email Address', 'Phone Number'].map((f) => (
                      <div key={f} className="border border-slate-200 rounded-xl px-4 py-3">
                        <p className="text-xs text-slate-400">{f}</p>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-[#1A56DB] text-white font-bold py-3.5 rounded-xl text-sm">
                    Pay ₹9,999
                  </button>

                  <div className="flex items-center justify-center gap-1.5 mt-4">
                    <Lock className="w-3 h-3 text-slate-400" />
                    <p className="text-xs text-slate-400">Powered by Matrix Gateway</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <SectionHeader label="Use Cases" title="Pages for Every Business" subtitle="Whether you run events, sell products, or accept donations — Payment Pages handle it all." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {['Events & Registrations', 'Service Bookings', 'Product Sales', 'Donation Drives', 'Course Enrollments', 'Club Memberships'].map((uc, i) => (
              <ScrollReveal key={uc} delay={i * 0.08}>
                <div className="flex items-center gap-3 p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="font-semibold text-[#0F1E5C] text-sm">{uc}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Build Your Payment Page Today" primaryLabel="Get Started Free" />
    </>
  )
}
