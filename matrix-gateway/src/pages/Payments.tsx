import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

const paymentServices = services.filter(s =>
  ['payment-gateway', 'payment-links', 'payment-pages', 'upi'].includes(s.id)
)

export default function Payments() {
  return (
    <>
      <section className="bg-[#040E2B] py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#60A5FA] text-xs font-bold uppercase tracking-[0.14em] mb-5">Payments</span>
            <h1 className="text-[2.6rem] sm:text-5xl font-extrabold text-white mb-5 leading-[1.1] tracking-[-0.04em]">
              Accept Payments<br />
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                Every Way You Need
              </span>
            </h1>
            <p className="text-lg text-blue-100/80 mb-8 max-w-xl leading-relaxed">
              Matrix Gateway's payment products let you collect money from customers via any channel — your website, a shareable link, a custom page, or UPI.
            </p>
            <Link to="/signup" className="inline-flex items-center gap-2 bg-[#1A56DB] text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#1648C8] transition-colors shadow-lg active:scale-[0.98]">
              Start Accepting Payments <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeader label="Payment Products" title="Choose How You Collect" subtitle="Every business model needs a different payment approach. We have them all." />
          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {paymentServices.map((svc, i) => (
              <ServiceCard key={svc.id} title={svc.title} description={svc.longDescription} icon={svc.icon} href={svc.href} color={svc.color} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
