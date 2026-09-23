import { Handshake, TrendingUp, Users, Code2, DollarSign, ArrowRight, CheckCircle2, Shield, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'

const partnerTypes = [
  {
    icon: Code2,
    title: 'Technology Partners',
    description: 'Platforms, SaaS tools, and technology companies that want to embed payment functionality for their users.',
    benefits: ['API-level integration', 'Co-marketing opportunities', 'Dedicated technical support'],
  },
  {
    icon: Users,
    title: 'Referral Partners',
    description: 'Consultants, agencies, and individuals who recommend Matrix Gateway to businesses they work with.',
    benefits: ['Revenue sharing on referrals', 'Partner dashboard', 'Sales and marketing materials'],
  },
  {
    icon: Handshake,
    title: 'Reseller Partners',
    description: 'Businesses that want to offer payment capabilities as part of their own product or service offering.',
    benefits: ['White-label options', 'Competitive margin structure', 'Onboarding and training support'],
  },
]

export default function Partner() {
  return (
    <>
      <section className="bg-[#040E2B] py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#60A5FA] text-xs font-bold uppercase tracking-[0.14em] mb-5">Partner Program</span>
            <h1 className="text-[2.6rem] sm:text-5xl font-extrabold text-white mb-5 leading-[1.1] tracking-[-0.04em]">
              Grow Together with<br />
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                Matrix Gateway
              </span>
            </h1>
            <p className="text-lg text-blue-100/80 mb-8 max-w-xl leading-relaxed">
              Partner with Matrix Gateway and bring best-in-class payment infrastructure to your customers, clients, or platform users.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1A56DB] text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#1648C8] transition-colors shadow-lg active:scale-[0.98]">
              Become a Partner <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership types */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeader label="Partnership Types" title="Find the Right Partnership Model" subtitle="We offer flexible partnership structures to match different business models." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {partnerTypes.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl border border-slate-100 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(26,86,219,0.1)] hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-4">
                    <p.icon className="w-6 h-6 text-[#1A56DB]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F1E5C] mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-500 mb-4 leading-relaxed">{p.description}</p>
                  <ul className="space-y-2">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <SectionHeader label="Partner Benefits" title="Why Partner with Matrix Gateway?" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {[
              { icon: DollarSign, title: 'Revenue Sharing', desc: 'Competitive revenue sharing model with transparent payouts.' },
              { icon: TrendingUp, title: 'Growth Support', desc: 'Marketing materials, co-selling resources, and go-to-market support.' },
              { icon: Zap, title: 'Fast Integration', desc: 'Well-documented APIs and SDKs to get up and running quickly.' },
              { icon: Shield, title: 'Reliable Platform', desc: 'High-uptime infrastructure that you can confidently offer to your customers.' },
            ].map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.1}>
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] text-center">
                  <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <b.icon className="w-6 h-6 text-[#1A56DB]" />
                  </div>
                  <h3 className="font-bold text-[#0F1E5C] mb-2">{b.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl mx-auto">
          <SectionHeader label="How It Works" title="Getting Started as a Partner" />
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              { step: 1, title: 'Apply to the Program', desc: 'Fill out the partnership application form and share details about your business and goals.' },
              { step: 2, title: 'Get Onboarded', desc: 'Our team reviews your application and guides you through the onboarding process.' },
              { step: 3, title: 'Start Growing Together', desc: 'Access your partner dashboard, start referring, integrating, or reselling — and track your results.' },
            ].map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-[#1A56DB] rounded-full text-white font-black text-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-[#0F1E5C] mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to Partner with Us?" subtitle="Let's explore how we can build something valuable together." primaryLabel="Apply to Partner Program" primaryHref="/contact" secondaryLabel="Learn More" secondaryHref="/about" />
    </>
  )
}
