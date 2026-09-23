import { Code2, Webhook, BookOpen, Shield, Zap, Terminal, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'

const sdks = ['Node.js', 'Python', 'PHP', 'Java', 'Ruby', 'Go', '.NET', 'React Native']

export default function Developers() {
  return (
    <>
      <section className="bg-[#040E2B] py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#60A5FA] text-xs font-bold uppercase tracking-[0.14em] mb-5">Developer Portal</span>
            <h1 className="text-[2.6rem] sm:text-5xl font-extrabold text-white mb-5 leading-[1.1] tracking-[-0.04em]">
              Payments Built for<br />
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                Developers
              </span>
            </h1>
            <p className="text-lg text-blue-100/80 mb-8 max-w-xl leading-relaxed">
              Clean REST APIs, comprehensive documentation, SDKs for your stack, and webhooks for every event. 
              Integrate Matrix Gateway in less than a day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup" className="inline-flex items-center gap-2 bg-[#1A56DB] text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#1648C8] transition-colors shadow-lg active:scale-[0.98]">
                Start Building <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="#api-reference" className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl border-2 border-white/25 hover:border-white/50 hover:bg-white/10 transition-all">
                API Reference
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integration steps */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <SectionHeader label="Quick Start" title="From Zero to Payments in Under a Day" center={false} />
              <p className="text-slate-500 mt-4 mb-6 leading-relaxed">
                Our integration process is designed to minimize the time between signing up and processing your first live transaction.
              </p>
              <div className="space-y-4">
                {[
                  { step: 1, title: 'Get API Keys', desc: 'Sign up and grab your test API keys from the dashboard immediately.' },
                  { step: 2, title: 'Install the SDK', desc: 'Install our SDK for your language or use the REST API directly.' },
                  { step: 3, title: 'Create a Payment', desc: 'A single API call creates a payment and returns a checkout URL.' },
                  { step: 4, title: 'Handle Webhooks', desc: 'Subscribe to events to get notified when payments succeed or fail.' },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-8 h-8 bg-[#1A56DB] text-white rounded-full text-sm font-black flex items-center justify-center flex-shrink-0">
                      {step}
                    </div>
                    <div>
                      <p className="font-bold text-[#0F1E5C] text-sm">{title}</p>
                      <p className="text-sm text-slate-500 mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Code panel */}
            <ScrollReveal direction="right">
              <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl" id="api-reference">
                <div className="flex items-center gap-2 px-5 py-3 bg-slate-800 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs text-white/30 ml-3 font-mono">Create Payment — Node.js</span>
                </div>
                <div className="p-5 font-mono text-sm">
                  <div className="text-slate-500 text-xs mb-3">// Install: npm install @matrix-gateway/node</div>
                  <pre className="text-xs text-slate-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">{`const MatrixGateway = require('@matrix-gateway/node');

const mg = new MatrixGateway({
  apiKey: process.env.MG_API_KEY
});

const payment = await mg.payments.create({
  amount: 49900,        // amount in paise
  currency: 'INR',
  method: 'upi',
  customer: {
    name: 'Customer Name',
    email: 'customer@example.com',
    contact: '+91-XXXXX-XXXXX'
  },
  callback_url: 'https://yourapp.com/callback',
  description: 'Order #1234'
});

console.log(payment.payment_url);
// https://checkout.matrixgateway.in/pay/...`}</pre>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="text-emerald-400 text-xs mb-1.5">// Response</div>
                    <pre className="text-xs text-slate-300">{`{
  "id": "pay_xyz123abc",
  "status": "created",
  "amount": 49900,
  "currency": "INR",
  "payment_url": "https://checkout.matrixgateway.in/pay/xyz123"
}`}</pre>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <SectionHeader label="Developer Features" title="Everything You Need to Build" subtitle="Tools and features designed to make integration as smooth as possible." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {[
              { icon: Code2, title: 'RESTful API', description: 'Clean, predictable REST API with JSON responses. Every resource is documented with examples.' },
              { icon: Webhook, title: 'Webhooks', description: 'Real-time event notifications for payment success, failure, refunds, and more.' },
              { icon: BookOpen, title: 'Documentation', description: 'Comprehensive documentation with guides, API reference, and code examples for every flow.' },
              { icon: Terminal, title: 'Test Mode', description: 'Full sandbox environment to test every payment flow without processing real money.' },
              { icon: Shield, title: 'Signature Verification', description: 'Webhook signature verification to ensure all incoming events are genuine.' },
              { icon: Zap, title: 'Idempotent Requests', description: 'Idempotency keys to safely retry requests without creating duplicate payments.' },
            ].map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.08}>
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(26,86,219,0.1)] hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-11 h-11 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-[#1A56DB]" />
                  </div>
                  <h3 className="font-bold text-[#0F1E5C] mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeader label="SDKs" title="Your Language, Your Choice" subtitle="Official SDKs and community libraries for popular languages and frameworks." />
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {sdks.map((sdk, i) => (
              <ScrollReveal key={sdk} delay={i * 0.05}>
                <div className="flex items-center gap-2 px-5 py-3 bg-[#EFF6FF] rounded-xl border border-[#DBEAFE]">
                  <CheckCircle2 className="w-4 h-4 text-[#1A56DB]" />
                  <span className="font-semibold text-[#0F1E5C] text-sm">{sdk}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Webhook section */}
      <section className="section-padding bg-slate-900">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <SectionHeader label="Webhooks" title="Stay in Sync with Every Event" light center={false} />
              <p className="text-blue-100/70 mt-4 mb-6 leading-relaxed text-sm">
                Subscribe to webhook events and get notified the instant something happens — no polling required.
              </p>
              <div className="space-y-2">
                {['payment.success', 'payment.failed', 'payment.refunded', 'subscription.charged', 'payout.completed', 'invoice.paid'].map((event) => (
                  <div key={event} className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                    <code className="text-sm text-slate-300 font-mono">{event}</code>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-slate-800 rounded-2xl overflow-hidden">
                <div className="px-5 py-3 bg-slate-700 flex items-center gap-2">
                  <Webhook className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-slate-300 font-mono">Webhook Payload</span>
                </div>
                <div className="p-5 font-mono text-xs leading-relaxed text-slate-300">
                  <pre className="overflow-x-auto whitespace-pre-wrap">{`{
  "event": "payment.success",
  "id": "evt_abc123",
  "created_at": "2026-09-22T09:41:00Z",
  "data": {
    "payment_id": "pay_xyz123abc",
    "order_id": "ord_456",
    "amount": 49900,
    "currency": "INR",
    "method": "upi",
    "status": "captured",
    "customer": {
      "name": "Customer Name",
      "email": "customer@example.com"
    }
  }
}`}</pre>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection title="Ready to Build?" subtitle="Get your API keys and start integrating in minutes." primaryLabel="Get API Access" />
    </>
  )
}
