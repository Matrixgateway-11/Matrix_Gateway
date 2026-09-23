import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Loader2, ArrowRight } from 'lucide-react'
import { FormInput } from '../components/FormInput'

interface FormState { email: string; password: string; remember: boolean }
interface FormErrors { email?: string; password?: string }

export default function Login() {
  const [form, setForm] = useState<FormState>({ email: '', password: '', remember: false })
  const [errors, setErrors] = useState<FormErrors>({})
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)

  function validate(): boolean {
    const e: FormErrors = {}
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.password) e.password = 'Password is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    console.log('Login:', form.email)
    setLoading(false)
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
            Welcome back to<br />Matrix Gateway
          </h2>
          <p className="text-blue-200/80 leading-relaxed mb-8">
            Log in to manage your payments, view analytics, and access all platform features.
          </p>
          <div className="space-y-3">
            {['Real-time payment dashboard', 'Complete transaction history', 'Settlement tracking', 'API key management'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-blue-100/70 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1A56DB]-bright" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <p className="text-blue-200/40 text-xs relative z-10">© {new Date().getFullYear()} Matrix Gateway</p>
      </div>

      {/* Right panel */}
      <div className="flex items-center justify-center p-6 sm:p-12 bg-slate-50">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <Link to="/" className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-8 h-8 bg-[#1A56DB] rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-sm">M</span>
            </div>
            <span className="font-bold text-lg text-[#0F1E5C]">Matrix Gateway</span>
          </Link>

          <div className="bg-white rounded-2xl shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-8">
            <h1 className="text-2xl font-bold text-[#0F1E5C] mb-1">Log In</h1>
            <p className="text-slate-500 text-sm mb-6">Access your Matrix Gateway account</p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <FormInput label="Email Address" type="email" placeholder="you@company.com" required value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} error={errors.email} />

              <div className="space-y-1.5">
                <label htmlFor="password" className="block text-sm font-semibold text-slate-700">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPw ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    aria-invalid={!!errors.password}
                    className={`w-full pl-4 pr-12 py-3 rounded-xl border text-sm transition-all duration-150 bg-white
                      focus:outline-none focus:ring-2 focus:ring-[#1A56DB] placeholder:text-slate-400
                      ${errors.password ? 'border-red-400' : 'border-slate-200 focus:border-[#1A56DB]'}`}
                  />
                  <button type="button" onClick={() => setShowPw(!showPw)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                    aria-label={showPw ? 'Hide password' : 'Show password'}>
                    {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && <p role="alert" className="text-xs text-red-600">{errors.password}</p>}
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <input type="checkbox" checked={form.remember} onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                    className="w-4 h-4 text-[#1A56DB] rounded focus:ring-[#1A56DB]" />
                  Remember me
                </label>
                <Link to="#" className="text-sm text-[#1A56DB] hover:underline font-medium">Forgot password?</Link>
              </div>

              <button type="submit" disabled={loading}
                className="w-full btn-primary justify-center py-3.5">
                {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Logging in...</> : <>Log In <ArrowRight className="w-4 h-4" /></>}
              </button>
            </form>

            <p className="text-center text-sm text-slate-500 mt-6">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#1A56DB] font-semibold hover:underline">Create one free</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
