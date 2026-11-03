import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import {
  Heart, ShieldCheck, Award, Users, TrendingUp, CheckCircle2,
  Copy, Check, Smartphone, QrCode, Building2, FileText, ArrowRight, Sparkles
} from 'lucide-react'
import { STATUTORY_CREDENTIALS, CAMPAIGNS } from '../data/ngoData'
import TaxReceiptModal from '../components/TaxReceiptModal'

const presetAmounts = [500, 1000, 2500, 5000, 10000, 25000]

const impactMapping: Record<number, string> = {
  500: 'Provides 10 hot, freshly cooked meals for pavement dwellers',
  1000: 'Sponsors 1 month of school books and stationery for 2 slum children',
  2500: 'Funds 1 complete 25kg dry ration kit for a family of 5 for a full month',
  5000: 'Covers 3 months of junior college tuition and computer lab fees',
  10000: 'Sponsors an entire free medical diagnostic camp (100+ screenings)',
  25000: 'Funds emergency nutrition reserves for 10 destitute single-mother families',
}

export default function Donation() {
  const [amount, setAmount] = useState<number>(2500)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time')
  const [selectedCampaignId, setSelectedCampaignId] = useState<string>(CAMPAIGNS[0].id)
  const [receiptModalOpen, setReceiptModalOpen] = useState(false)
  const [copiedVpa, setCopiedVpa] = useState(false)
  const [copiedAcc, setCopiedAcc] = useState(false)
  const [copiedIfsc, setCopiedIfsc] = useState(false)

  const activeAmount = customAmount ? Number(customAmount) : amount
  const selectedCampaign = CAMPAIGNS.find((c) => c.id === selectedCampaignId) || CAMPAIGNS[0]

  const impactText =
    impactMapping[activeAmount] ||
    `Your contribution of ₹${activeAmount.toLocaleString('en-IN')} deploys immediate verified humanitarian aid.`

  // Dynamic UPI URI
  const upiNote = `Al Aqdas Donation - ${selectedCampaign.title.slice(0, 30)}`
  const upiDeepLink = `upi://pay?pa=${encodeURIComponent(
    STATUTORY_CREDENTIALS.upiVpa
  )}&pn=${encodeURIComponent(
    STATUTORY_CREDENTIALS.ngoName
  )}&am=${activeAmount}&cu=INR&tn=${encodeURIComponent(upiNote)}`

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=10&data=${encodeURIComponent(
    upiDeepLink
  )}`

  const copyToClipboard = (text: string, type: 'vpa' | 'acc' | 'ifsc') => {
    navigator.clipboard.writeText(text)
    if (type === 'vpa') {
      setCopiedVpa(true)
      setTimeout(() => setCopiedVpa(false), 2000)
    } else if (type === 'acc') {
      setCopiedAcc(true)
      setTimeout(() => setCopiedAcc(false), 2000)
    } else if (type === 'ifsc') {
      setCopiedIfsc(true)
      setTimeout(() => setCopiedIfsc(false), 2000)
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageHeader
        title="Humanitarian Giving Gateway"
        subtitle="100% direct-to-field impact. Open-book fiduciary transparency with instant Section 80G tax certificates."
        bgImage="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=300&fit=crop"
      />

      {/* Trust & Statutory Strip */}
      <div className="bg-white border-b border-slate-200 shadow-2xs">
        <div className="max-w-[1240px] mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs">
          <div className="flex items-center gap-2 font-semibold text-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Section 80G Tax Exemption (50% Deduction)</span>
          </div>
          <div className="flex items-center gap-2 font-semibold text-slate-800">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>NITI Aayog DARPAN: <strong>MH/2015/009124</strong></span>
          </div>
          <div className="flex items-center gap-2 font-semibold text-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Statutory CA Audited Annually</span>
          </div>
        </div>
      </div>

      <section className="max-w-[1240px] mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Console: Giving Configurator (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
              <div>
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  Configure Your Humanitarian Grant
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Designate your contribution to an active ground initiative
                </p>
              </div>
              <button
                type="button"
                onClick={() => setReceiptModalOpen(true)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                Receipt Lookup / 80G
              </button>
            </div>

            {/* Campaign Dedicated Select */}
            <div className="mb-6">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                1. Dedicated Project Allocation
              </label>
              <select
                value={selectedCampaignId}
                onChange={(e) => setSelectedCampaignId(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs font-semibold border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {CAMPAIGNS.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Frequency Selection */}
            <div className="mb-6">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                2. Giving Cadence
              </label>
              <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setFrequency('one-time')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all ${
                    frequency === 'one-time'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  One-Time Grant
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    frequency === 'monthly'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Monthly Sustainer Partner
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-6">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                3. Choose Amount
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-3">
                {presetAmounts.map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => {
                      setAmount(val)
                      setCustomAmount('')
                    }}
                    className={`py-2.5 text-xs font-bold font-mono rounded-xl border transition-all ${
                      amount === val && !customAmount
                        ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    ₹{val >= 1000 ? `${val / 1000}k` : val}
                  </button>
                ))}
              </div>

              {/* Custom Input */}
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-sm font-bold text-slate-400">₹</span>
                <input
                  type="number"
                  placeholder="Or enter custom amount in INR"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    if (e.target.value) setAmount(Number(e.target.value))
                  }}
                  className="w-full pl-8 pr-4 py-2 text-sm font-bold border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Dynamic Real-world Impact Feedback Card */}
            <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/90 mb-6">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5 fill-current" />
                <div>
                  <p className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
                    Target Impact Projection
                  </p>
                  <p className="text-xs text-emerald-900 mt-1 leading-relaxed">
                    {impactText}
                  </p>
                  <p className="text-[11px] text-emerald-700 font-semibold mt-1">
                    Tax Relief: Eligible for 50% deduction under Section 80G (~₹{Math.round(activeAmount * 0.5 * 0.3)} net saving)
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <a
              href={upiDeepLink}
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Smartphone className="w-4 h-4" />
              Pay ₹{activeAmount.toLocaleString('en-IN')} via UPI App
            </a>
          </div>

          {/* Right Console: Dynamic BharatQR & Bank Wire (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Dynamic QR Box */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900 text-white mb-4">
                <QrCode className="w-3.5 h-3.5 text-emerald-400" />
                Dynamic UPI & BharatQR
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 inline-block mb-4 shadow-inner">
                <img
                  src={qrCodeUrl}
                  alt="Dynamic Donation QR Code"
                  className="w-48 h-48 object-contain rounded-lg mx-auto"
                />
              </div>

              <p className="text-xs font-bold text-slate-800">
                Amount Encoded: ₹{activeAmount.toLocaleString('en-IN')}
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Scan with Google Pay, PhonePe, Paytm, or BHIM
              </p>

              {/* UPI Copy Box */}
              <div className="mt-4 p-2.5 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between text-xs">
                <div className="text-left">
                  <span className="text-[9px] uppercase font-bold text-slate-400 block">VPA</span>
                  <span className="font-mono font-bold text-slate-800 select-all text-xs">
                    {STATUTORY_CREDENTIALS.upiVpa}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(STATUTORY_CREDENTIALS.upiVpa, 'vpa')}
                  className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-200 text-slate-700 font-semibold border border-slate-200 transition-colors flex items-center gap-1"
                >
                  {copiedVpa ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedVpa ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Direct Bank Wire Details Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-4 h-4 text-emerald-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Direct Bank Wire / NEFT / RTGS
                </h4>
              </div>

              <p className="text-[11px] text-slate-400 mb-4">
                Recommended for CSR funding, corporate grants, and transfers exceeding ₹1,00,000.
              </p>

              <div className="space-y-2.5 text-xs font-mono">
                <div className="p-2.5 bg-slate-800/80 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-sans block">Bank & Branch</span>
                    <span className="text-slate-200 font-bold">{STATUTORY_CREDENTIALS.bankName} · {STATUTORY_CREDENTIALS.branch}</span>
                  </div>
                </div>

                <div className="p-2.5 bg-slate-800/80 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-sans block">Account Number</span>
                    <span className="text-emerald-400 font-bold">{STATUTORY_CREDENTIALS.accountNo}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(STATUTORY_CREDENTIALS.accountNo, 'acc')}
                    className="p-1 rounded text-slate-400 hover:text-white"
                  >
                    {copiedAcc ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="p-2.5 bg-slate-800/80 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-sans block">IFSC Code</span>
                    <span className="text-slate-200 font-bold">{STATUTORY_CREDENTIALS.ifsc}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(STATUTORY_CREDENTIALS.ifsc, 'ifsc')}
                    className="p-1 rounded text-slate-400 hover:text-white"
                  >
                    {copiedIfsc ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Receipt Modal */}
      <TaxReceiptModal
        isOpen={receiptModalOpen}
        onClose={() => setReceiptModalOpen(false)}
        initialAmount={activeAmount}
      />
    </div>
  )
}
