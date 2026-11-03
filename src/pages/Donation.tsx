import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import {
  Heart, ShieldCheck, Award, Users, CheckCircle2,
  Copy, Check, Smartphone, QrCode, Building2, FileText, ArrowRight
} from 'lucide-react'
import { STATUTORY_CREDENTIALS, CAMPAIGNS } from '../data/ngoData'
import TaxReceiptModal from '../components/TaxReceiptModal'

const presetAmounts = [500, 1000, 2500, 5000, 10000, 25000]

const impactMapping: Record<number, string> = {
  500: 'Provides 10 hot, freshly cooked meals for daily wage workers & pavement dwellers',
  1000: 'Sponsors 1 month of school textbooks and stationery for 2 slum children',
  2500: 'Funds 1 complete 25kg dry grocery ration kit for a family of 5 for a full month',
  5000: 'Covers 3 months of junior college tuition and computer laboratory training',
  10000: 'Sponsors an entire free medical diagnostic camp (100+ patients screened with medicines)',
  25000: 'Funds emergency nutrition reserves for 10 destitute single-mother households',
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
    `Your contribution of ₹${activeAmount.toLocaleString('en-IN')} directly funds relief operations in Mumbai.`

  const upiNote = `Al Aqdas Donation - ${selectedCampaign.title.slice(0, 30)}`
  const upiDeepLink = `upi://pay?pa=${encodeURIComponent(
    STATUTORY_CREDENTIALS.upiVpa
  )}&pn=${encodeURIComponent(
    STATUTORY_CREDENTIALS.ngoName
  )}&am=${activeAmount}&cu=INR&tn=${encodeURIComponent(upiNote)}`

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=8&data=${encodeURIComponent(
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
    <div className="bg-slate-50 min-h-screen pb-16">
      <PageHeader
        title="Donate & Support Our Work"
        subtitle="100% direct-to-field impact. All donations are eligible for 50% tax exemption under Section 80G."
        bgImage="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=300&fit=crop"
      />

      {/* Trust & Statutory Strip */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 py-3.5 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs text-slate-700">
          <div className="flex items-center gap-2 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Section 80G Tax Exemption (50% Deduction)</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <Award className="w-4 h-4 text-emerald-700" />
            <span>NITI Aayog DARPAN: <strong>MH/2015/009124</strong></span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>Audited Annually by Chartered Accountants</span>
          </div>
        </div>
      </div>

      <section className="max-w-[1240px] mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Giving Configurator (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Select Your Contribution
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Designate your donation to a specific initiative
                </p>
              </div>
              <span className="px-2.5 py-1 text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 rounded">
                80G Eligible
              </span>
            </div>

            {/* Campaign Selector */}
            <div className="mb-5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                Choose Dedicated Initiative:
              </label>
              <select
                value={selectedCampaignId}
                onChange={(e) => setSelectedCampaignId(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs font-semibold border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-emerald-700"
              >
                {CAMPAIGNS.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Giving Frequency */}
            <div className="mb-5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                Donation Frequency:
              </label>
              <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-lg">
                <button
                  type="button"
                  onClick={() => setFrequency('one-time')}
                  className={`py-2 text-xs font-semibold rounded transition-colors ${
                    frequency === 'one-time'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  One-Time Donation
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`py-2 text-xs font-semibold rounded transition-colors ${
                    frequency === 'monthly'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Monthly Support
                </button>
              </div>
            </div>

            {/* Preset Amount Grid */}
            <div className="mb-5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                Select Amount:
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => {
                      setAmount(preset)
                      setCustomAmount('')
                    }}
                    className={`py-2.5 px-2 rounded-lg border text-center transition-colors ${
                      amount === preset && !customAmount
                        ? 'border-emerald-700 bg-emerald-50 text-emerald-950 font-bold'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium'
                    }`}
                  >
                    <span className="text-xs">₹{preset.toLocaleString('en-IN')}</span>
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div className="mt-3 relative">
                <span className="absolute left-3.5 top-2.5 text-xs font-bold text-slate-400">₹</span>
                <input
                  type="number"
                  placeholder="Or enter custom amount in INR"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full pl-8 pr-4 py-2.5 text-xs font-semibold border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-700"
                />
              </div>
            </div>

            {/* Selected Impact Box */}
            <div className="p-4 bg-emerald-50/60 rounded-lg border border-emerald-200 text-xs text-emerald-950 mb-5">
              <span className="font-bold block mb-0.5">Your Real-World Impact:</span>
              <p className="leading-relaxed">{impactText}</p>
            </div>

            {/* 80G Certificate CTA */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Already donated? Generate your receipt:
              </span>
              <button
                type="button"
                onClick={() => setReceiptModalOpen(true)}
                className="text-xs font-bold text-emerald-800 hover:underline flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Claim 80G Tax Receipt</span>
              </button>
            </div>
          </div>

          {/* Right Column: Instant UPI QR & Bank Transfer (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* UPI QR Payment Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
              <div className="text-center mb-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Instant UPI Payment
                </span>
                <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                  ₹{activeAmount.toLocaleString('en-IN')}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Scan with Google Pay, PhonePe, Paytm, or BHIM
                </p>
              </div>

              {/* QR Code Container */}
              <div className="w-48 h-48 mx-auto bg-slate-50 p-2.5 rounded-lg border border-slate-200 shadow-2xs flex items-center justify-center mb-4">
                <img
                  src={qrCodeUrl}
                  alt="Donation UPI QR Code"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* UPI ID Copy Strip */}
              <div className="space-y-1.5 mb-4">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Official UPI ID:
                </label>
                <div className="flex items-center gap-1.5">
                  <div className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-800 select-all truncate">
                    {STATUTORY_CREDENTIALS.upiVpa}
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(STATUTORY_CREDENTIALS.upiVpa, 'vpa')}
                    className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors shrink-0"
                  >
                    {copiedVpa ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedVpa ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <a
                href={upiDeepLink}
                className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Pay ₹{activeAmount.toLocaleString('en-IN')} via Mobile UPI App</span>
              </a>
            </div>

            {/* Direct Bank Account Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs text-xs space-y-3">
              <div className="flex items-center gap-2 font-bold text-slate-900 pb-2 border-b border-slate-100">
                <Building2 className="w-4 h-4 text-emerald-700" />
                <span>Direct Bank Transfer (NEFT / RTGS / IMPS)</span>
              </div>

              <div className="space-y-2 text-slate-600">
                <div className="flex justify-between">
                  <span>Account Name:</span>
                  <span className="font-semibold text-slate-900">{STATUTORY_CREDENTIALS.ngoName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Bank & Branch:</span>
                  <span className="font-semibold text-slate-900">{STATUTORY_CREDENTIALS.bankName}, {STATUTORY_CREDENTIALS.branch}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Account Number:</span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono font-bold text-slate-900">{STATUTORY_CREDENTIALS.accountNo}</span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(STATUTORY_CREDENTIALS.accountNo, 'acc')}
                      className="p-1 hover:bg-slate-100 rounded text-slate-500"
                      title="Copy account number"
                    >
                      {copiedAcc ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>IFSC Code:</span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono font-bold text-slate-900">{STATUTORY_CREDENTIALS.ifsc}</span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(STATUTORY_CREDENTIALS.ifsc, 'ifsc')}
                      className="p-1 hover:bg-slate-100 rounded text-slate-500"
                      title="Copy IFSC"
                    >
                      {copiedIfsc ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 80G Receipt Modal */}
      <TaxReceiptModal
        isOpen={receiptModalOpen}
        onClose={() => setReceiptModalOpen(false)}
        initialAmount={activeAmount}
      />
    </div>
  )
}
