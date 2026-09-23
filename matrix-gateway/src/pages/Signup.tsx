import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Loader2, CheckCircle2, ArrowRight } from 'lucide-react'
import { FormInput } from '../components/FormInput'

interface FormState {
  name: string; email: string; phone: string
  password: string; confirmPassword: string; terms: boolean
}
interface FormErrors { name?: string; email?: string; phone?: string; password?: string; confirmPassword?: string; terms?: string }

export default function Signup() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', password: '', confirmPassword: '', terms: false })
  const [errors, setErrors] = useState<FormErrors>({})
  const [showPw, setShowPw] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  function validate(): boolean {
    const e: FormErrors = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    if (!form.password) e.password = 'Password is required'
    else if (form.password.length < 8) e.password = 'Password must be at least 8 characters'
    if (!form.confirmPassword) e.confirmPassword = 'Please confirm your password'
    else if (form.password !== form.confirmPassword) e.confirmPassword = 'Passwords do not match'
    if (!form.terms) e.terms = 'You must accept the terms to continue'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1800))
    console.log('Signup:', { ...form, password: '[hidden]' })
    setLoading(false)
    setSuccess(true)
  }

  if (success) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-6 bg-slate-50">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-[#0F1E5C] mb-2">Account Created!</h2>
          <p className="text-slate-500 mb-6">Your Matrix Gateway account is ready. Check your email to verify your address, then you can log in and start accepting payments.</p>
          <Link to="/login" className="btn-primary inline-flex">Go to Log In <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] grid lg:grid-cols-2">
      {/* Left panel */}
      <div className="hidden lg:flex flex-col justify-between bg-[#040E2B] p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <Link to="/" className="flex items-center gap-2.5 relative z-10">
          <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
            <span className="text-white font-black text-base">M</span>
          </div>
          <span className="font-bold text-xl text-white">Matrix Gateway</span>
        </Link>

        <div className="relative z-10">
          <h2 className="text-3xl font-black text-white mb-4 leading-tight">
            Start Accepting Payments<br />in Minutes
          </h2>
          <p className="text-blue-200/80 leading-relaxed mb-8">
            Join businesses across India using Matrix Gateway's modern payment infrastructure.
          </p>
          <div className="space-y-3">
            {['Free to start, no setup fee', 'All major payment methods included', 'Live within 24 hours', 'Developer-friendly APIs'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-blue-100/70 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />{item}
              </div>
            ))}
          </div>
        </div>
        <p className="text-blue-200/40 text-xs relative z-10">© {new Date().getFullYear()} Matrix Gateway</p>
      </div>

      {/* Right panel */}
      <div className="flex items-center justify-center p-6 sm:p-10 bg-slate-50 overflow-y-auto">
        <div className="w-full max-w-md py-8">
          <Link to="/" className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-8 h-8 bg-[#1A56DB] rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-sm">M</span>
            </div>
            <span className="font-bold text-lg text-[#0F1E5C]">Matrix Gateway</span>
          </Link>

          <div className="bg-white rounded-2xl shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-8">
            <h1 className="text-2xl font-bold text-[#0F1E5C] mb-1">Create Account</h1>
            <p className="text-slate-500 text-sm mb-6">Start your Matrix Gateway journey</p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <FormInput label="Full Name" placeholder="Your full name" required value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })} error={errors.name} />
              <FormInput label="Email Address" type="email" placeholder="you@company.com" required value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} error={errors.email} />
              <FormInput label="Phone Number" type="tel" placeholder="+91-XXXXX-XXXXX" required value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })} error={errors.phone} />

              {/* Password */}
              {[
                { id: 'password', label: 'Password', show: showPw, setShow: setShowPw, key: 'password' as const },
                { id: 'confirm-password', label: 'Confirm Password', show: showConfirm, setShow: setShowConfirm, key: 'confirmPassword' as const },
              ].map(({ id, label, show, setShow, key }) => (
                <div key={id} className="space-y-1.5">
                  <label htmlFor={id} className="block text-sm font-semibold text-slate-700">
                    {label} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input id={id} type={show ? 'text' : 'password'} placeholder="••••••••"
                      value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      aria-invalid={!!errors[key]}
                      className={`w-full pl-4 pr-12 py-3 rounded-xl border text-sm bg-white placeholder:text-slate-400
                        focus:outline-none focus:ring-2 focus:ring-[#1A56DB] transition-all
                        ${errors[key] ? 'border-red-400' : 'border-slate-200 focus:border-[#1A56DB]'}`} />
                    <button type="button" onClick={() => setShow(!show)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                      aria-label={show ? 'Hide password' : 'Show password'}>
                      {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors[key] && <p role="alert" className="text-xs text-red-600">{errors[key]}</p>}
                </div>
              ))}

              {/* Terms */}
              <div>
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input type="checkbox" checked={form.terms} onChange={(e) => setForm({ ...form, terms: e.target.checked })}
                    className="w-4 h-4 text-[#1A56DB] rounded focus:ring-[#1A56DB] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 leading-tight">
                    I agree to the{' '}
                    <Link to="#" className="text-[#1A56DB] hover:underline">Terms of Service</Link>
                    {' '}and{' '}
                    <Link to="#" className="text-[#1A56DB] hover:underline">Privacy Policy</Link>
                  </span>
                </label>
                {errors.terms && <p role="alert" className="text-xs text-red-600 mt-1">{errors.terms}</p>}
              </div>

              <button type="submit" disabled={loading} className="w-full btn-primary justify-center py-3.5">
                {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Creating account...</> : <>Create Account <ArrowRight className="w-4 h-4" /></>}
              </button>
            </form>

            <p className="text-center text-sm text-slate-500 mt-5">
              Already have an account?{' '}
              <Link to="/login" className="text-[#1A56DB] font-semibold hover:underline">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
