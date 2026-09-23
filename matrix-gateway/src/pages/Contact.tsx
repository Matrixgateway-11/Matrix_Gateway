import { useState } from 'react'
import { Mail, MapPin, Phone, CheckCircle2, Loader2 } from 'lucide-react'
import { FormInput, FormTextarea } from '../components/FormInput'
import SectionHeader from '../components/SectionHeader'
import ScrollReveal from '../components/ScrollReveal'
import { companyInfo } from '../data/content'

interface FormState {
  name: string
  email: string
  phone: string
  company: string
  inquiry: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const initialForm: FormState = { name: '', email: '', phone: '', company: '', inquiry: 'general', message: '' }

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  function validate(): boolean {
    const newErrors: FormErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email address'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    console.log('Form submitted:', form)
    setLoading(false)
    setSuccess(true)
    setForm(initialForm)
  }

  return (
    <>
      <section className="bg-[#040E2B] py-20">
        <div className="container-wide">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[#60A5FA] text-xs font-bold uppercase tracking-[0.14em] mb-5">Contact Us</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
              Let's Talk
            </h1>
            <p className="text-lg text-blue-100/80 leading-relaxed">
              Whether it's a sales inquiry, partnership discussion, or a technical question — our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-6">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-xl font-bold text-[#0F1E5C] mb-4">Get in Touch</h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    Our team typically responds within one business day. For urgent technical issues, please use your dashboard support channel.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-[#1A56DB]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#0F1E5C] text-sm">Email</p>
                        <a href={`mailto:${companyInfo.email}`} className="text-sm text-[#1A56DB] hover:underline">{companyInfo.email}</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-[#1A56DB]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#0F1E5C] text-sm">Phone</p>
                        <p className="text-sm text-slate-500">{companyInfo.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-[#1A56DB]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#0F1E5C] text-sm">Address</p>
                        <p className="text-sm text-slate-500">{companyInfo.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <p className="font-semibold text-[#0F1E5C] text-sm mb-3">Inquiry Types</p>
                  <div className="space-y-2">
                    {['Sales & Pricing', 'Partnership Opportunities', 'Developer Support', 'General Questions'].map((t) => (
                      <div key={t} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />{t}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                {success ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F1E5C] mb-2">Message Sent!</h3>
                    <p className="text-slate-500 mb-6 max-w-sm">Thanks for reaching out. Our team will get back to you within one business day.</p>
                    <button onClick={() => setSuccess(false)} className="btn-primary">Send Another Message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl border border-slate-100 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-6 sm:p-8 space-y-5">
                    <h2 className="text-xl font-bold text-[#0F1E5C]">Send us a Message</h2>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormInput label="Full Name" placeholder="Your full name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} error={errors.name} />
                      <FormInput label="Email Address" type="email" placeholder="you@company.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} error={errors.email} />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormInput label="Phone Number" type="tel" placeholder="+91-XXXXX-XXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                      <FormInput label="Company" placeholder="Your company name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="inquiry" className="block text-sm font-semibold text-slate-700">Inquiry Type</label>
                      <select
                        id="inquiry"
                        value={form.inquiry}
                        onChange={(e) => setForm({ ...form, inquiry: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A56DB] focus:border-[#1A56DB] bg-white"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="sales">Sales & Pricing</option>
                        <option value="partnership">Partnership</option>
                        <option value="developer">Developer Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <FormTextarea label="Message" placeholder="Tell us how we can help..." required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} error={errors.message} />

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center"
                    >
                      {loading ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                      ) : 'Send Message'}
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
