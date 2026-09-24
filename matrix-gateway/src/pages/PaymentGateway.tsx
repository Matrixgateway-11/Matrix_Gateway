import { motion } from 'framer-motion'
import {
  ArrowRight, MonitorSmartphone, Layers, ShieldCheck, ListChecks,
  Globe, CalendarClock, Landmark, Handshake, CreditCard,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

/* Checkout feature grid */
const checkoutFeatures = [
  { icon: MonitorSmartphone, title: 'Matrix Gateway Platform', desc: 'A wide, assorted set of solutions for payment-processing transactions — integrated with major banks and payment methods.', highlight: false },
  { icon: Layers, title: 'Countless Payment Options', desc: 'Payment options are key to retaining customers. Accept cards, net banking, wallets, UPI, QR, NEFT/RTGS, and more.', highlight: true },
  { icon: ShieldCheck, title: 'Security-Conscious Encryption', desc: 'Online security backed by encryption and secure data handling — a high level of protection for every transaction.', highlight: true },
  { icon: ListChecks, title: 'Retry Option', desc: 'Offer customers the luxury of all payment modes — Credit/Debit cards, Net Banking, UPI, Wallets, and more.', highlight: false },
  { icon: Globe, title: 'Quick Checkout', desc: 'Customers can securely save card details, so subsequent transactions complete with just the CVV — easy and fast.', highlight: false },
  { icon: CalendarClock, title: 'Re-do Feature', desc: 'If a transaction fails, resume from where you left off instead of re-entering all details — saving time and effort.', highlight: false },
]

export default function PaymentGateway() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative bg-gradient-to-b from-[#F0F4FF] to-white overflow-hidden">
        <div className="hidden lg:block absolute top-0 right-0 w-[42%] h-full pointer-events-none"
          style={{ background: 'linear-gradient(135deg, #1A56DB 0%, #0F1E5C 100%)', clipPath: 'polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)' }} />

        <div className="container-wide relative z-10 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            <div className="max-w-xl">
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="inline-flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                  <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Payment Gateway</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08 }}
                className="text-[2.4rem] sm:text-5xl lg:text-[2.9rem] font-extrabold text-[#0F1E5C] leading-[1.12] tracking-[-0.04em] mb-5"
              >
                Experience Flawless Integration of{' '}
                <span className="bg-gradient-to-r from-[#1A56DB] to-[#60A5FA] bg-clip-text text-transparent">
                  Digital Payments
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.16 }}
                className="text-slate-500 text-base sm:text-lg mb-8 max-w-lg leading-relaxed"
              >
                It's the swiftest and easiest way to collect and disburse payments. Register today and allow
                Matrix Gateway to be your digital payment partner.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.24 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#1A56DB] text-white font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-[#1648C8] transition-colors shadow-lg active:scale-[0.98]">
                  Get Started <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </Link>
                <Link to="/developers"
                  className="inline-flex items-center justify-center gap-2 text-[#1A56DB] font-semibold text-sm px-7 py-3.5 rounded-xl border-2 border-[#1A56DB] hover:bg-[#EFF6FF] transition-colors active:scale-[0.98]">
                  View API Docs
                </Link>
              </motion.div>
            </div>

            {/* Right — hero image (dark render → framed card, with graceful fallback) */}
            <div className="relative flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
                className="relative rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(15,30,92,0.3)] w-full max-w-md bg-[#0A1240]"
              >
                <img
                  src="/images/gateway-hero.png"
                  alt="Digital payment gateway technology"
                  width={560} height={440}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    const el = e.currentTarget
                    el.style.display = 'none'
                    const fb = el.nextElementSibling as HTMLElement
                    if (fb) fb.style.display = 'flex'
                  }}
                />
                {/* fallback if image not added yet */}
                <div className="hidden aspect-[5/4] flex-col items-center justify-center text-center px-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                    <CreditCard className="w-8 h-8 text-[#60A5FA]" strokeWidth={1.5} />
                  </div>
                  <p className="text-white font-bold text-lg tracking-[-0.02em]">Secure Payment Gateway</p>
                  <p className="text-blue-200/60 text-sm mt-1">All payment methods, one integration</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CHECKOUT FEATURE SECTION ══ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal>
            {/* Blue header strip */}
            <div className="bg-gradient-to-r from-[#1A56DB] to-[#0F1E5C] rounded-2xl px-6 sm:px-10 py-6 mb-8 text-center">
              <span className="text-white/70 text-xs font-bold uppercase tracking-[0.14em]">Checkout</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-[-0.04em] mt-1">
                Everything for a Seamless Checkout
              </h2>
            </div>
          </ScrollReveal>

          {/* Feature grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {checkoutFeatures.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`flex gap-4 rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1
                    ${f.highlight
                      ? 'bg-white border-[#1A56DB]/20 shadow-[0_8px_30px_rgba(26,86,219,0.12)]'
                      : 'bg-white border-slate-100 shadow-[0_2px_12px_rgba(15,30,92,0.05)] hover:shadow-[0_8px_30px_rgba(26,86,219,0.1)]'}`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0
                    ${f.highlight ? 'bg-[#1A56DB]' : 'bg-[#EFF6FF]'}`}>
                    <Icon className={`w-5 h-5 ${f.highlight ? 'text-white' : 'text-[#1A56DB]'}`} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0F1E5C] tracking-[-0.02em] mb-1.5">{f.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ COLLECTION & SETTLEMENT ══ */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-4 justify-center">
                <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">How Money Moves</span>
                <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em]">
                From Collection to Settlement
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Landmark, title: 'Collection', desc: 'A customer purchases a product from your website and taps "Pay Now" — redirecting them to the secure online payment gateway.' },
              { icon: Handshake, title: 'Settlement', desc: 'The collected amount is settled and credited to your account, typically within the next business day.' },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(15,30,92,0.05)] p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-[#1A56DB]" strokeWidth={1.7} />
                </div>
                <h3 className="text-lg font-bold text-[#0F1E5C] tracking-[-0.02em] mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
