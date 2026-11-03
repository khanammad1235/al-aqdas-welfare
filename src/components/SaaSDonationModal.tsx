import { useState } from 'react'
import {
  X, Heart, ShieldCheck, QrCode, Smartphone, Copy, Check,
  ExternalLink, Sparkles, Award, ArrowRight
} from 'lucide-react'
import { CAMPAIGNS, STATUTORY_CREDENTIALS } from '../data/ngoData'

interface SaaSDonationModalProps {
  isOpen: boolean
  onClose: () => void
  initialAmount?: number
  initialCampaignId?: string
  onOpenReceipt?: () => void
}

export default function SaaSDonationModal({
  isOpen,
  onClose,
  initialAmount = 2500,
  initialCampaignId,
  onOpenReceipt,
}: SaaSDonationModalProps) {
  const [amount, setAmount] = useState<number>(initialAmount)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time')
  const [selectedCampaignId, setSelectedCampaignId] = useState<string>(
    initialCampaignId || CAMPAIGNS[0].id
  )
  const [copiedVpa, setCopiedVpa] = useState<boolean>(false)

  if (!isOpen) return null

  const activeAmount = customAmount ? Number(customAmount) : amount
  const selectedCampaign = CAMPAIGNS.find((c) => c.id === selectedCampaignId) || CAMPAIGNS[0]

  // Dynamic UPI URI with custom note
  const upiNote = `Donation to Al Aqdas - ${selectedCampaign.title.slice(0, 30)}`
  const upiDeepLink = `upi://pay?pa=${encodeURIComponent(
    STATUTORY_CREDENTIALS.upiVpa
  )}&pn=${encodeURIComponent(
    STATUTORY_CREDENTIALS.ngoName
  )}&am=${activeAmount}&cu=INR&tn=${encodeURIComponent(upiNote)}`

  // Dynamic QR code API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=8&data=${encodeURIComponent(
    upiDeepLink
  )}`

  const handleCopyVpa = () => {
    navigator.clipboard.writeText(STATUTORY_CREDENTIALS.upiVpa)
    setCopiedVpa(true)
    setTimeout(() => setCopiedVpa(false), 2000)
  }

  const handleOpenUpiApp = () => {
    window.location.href = upiDeepLink
  }

  const presetAmounts = [500, 1000, 2500, 5000, 10000]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[94vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
              <Heart className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                Humanitarian Contribution Gateway
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 rounded-full">
                  Direct Field Deployment
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">
                100% direct-to-cause disbursement · 80G Tax Exemption Eligible
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Initiative Dedicated Selector */}
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
              Select Dedicated Humanitarian Mission
            </label>
            <select
              value={selectedCampaignId}
              onChange={(e) => setSelectedCampaignId(e.target.value)}
              className="w-full px-3 py-2 text-xs font-semibold border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {CAMPAIGNS.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title} (Goal: ₹{(c.goal / 100000).toFixed(1)}L)
                </option>
              ))}
            </select>
          </div>

          {/* Frequency & Amount Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                Giving Frequency
              </label>
              <div className="grid grid-cols-2 gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setFrequency('one-time')}
                  className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    frequency === 'one-time'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  One-Time
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1 ${
                    frequency === 'monthly'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  Monthly
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                Amount ({frequency === 'monthly' ? '₹ / Month' : '₹ One-Time'})
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-sm font-bold text-slate-400">₹</span>
                <input
                  type="number"
                  value={activeAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setAmount(Number(e.target.value))
                  }}
                  className="w-full pl-7 pr-3 py-1.5 text-sm font-bold border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Quick Presets */}
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
              Quick Preset Grants
            </span>
            <div className="grid grid-cols-5 gap-2">
              {presetAmounts.map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => {
                    setAmount(val)
                    setCustomAmount('')
                  }}
                  className={`py-1.5 text-xs font-bold rounded-lg border transition-all ${
                    amount === val && !customAmount
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  ₹{val.toLocaleString('en-IN')}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic UPI Payment Console (Bento) */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Dynamic QR Code */}
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm shrink-0 flex flex-col items-center">
                <img
                  src={qrCodeUrl}
                  alt="Dynamic Donation QR Code"
                  className="w-40 h-40 object-contain rounded-lg"
                />
                <span className="text-[10px] font-mono text-slate-400 mt-2">
                  Dynamic UPI QR · ₹{activeAmount}
                </span>
              </div>

              {/* Instructions & Mobile Intent */}
              <div className="flex-1 space-y-3.5 text-center sm:text-left">
                <div>
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 uppercase">
                    Scan with any UPI App
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1">
                    GPay · PhonePe · Paytm · BHIM · Axis
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Instant zero-fee transfer directly to the official Al Aqdas NGO trust account.
                  </p>
                </div>

                {/* UPI VPA Copy Bar */}
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between gap-2">
                  <div className="text-left">
                    <span className="text-[9px] uppercase font-bold text-slate-400 block">Official UPI VPA</span>
                    <span className="font-mono text-xs font-bold text-slate-800 select-all">
                      {STATUTORY_CREDENTIALS.upiVpa}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyVpa}
                    className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors flex items-center gap-1 shrink-0"
                  >
                    {copiedVpa ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedVpa ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Mobile Direct Pay Button */}
                <button
                  type="button"
                  onClick={handleOpenUpiApp}
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <Smartphone className="w-4 h-4" />
                  Pay ₹{activeAmount.toLocaleString('en-IN')} via Installed UPI App
                </button>
              </div>
            </div>
          </div>

          {/* 80G Receipt CTA in Modal */}
          <div className="p-3.5 rounded-xl bg-slate-900 text-white flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Need your Section 80G Tax Exemption Certificate right away?</span>
            </div>
            <button
              type="button"
              onClick={() => {
                onClose()
                if (onOpenReceipt) onOpenReceipt()
              }}
              className="text-xs font-bold text-emerald-400 hover:text-emerald-300 underline whitespace-nowrap"
            >
              Generate Receipt &rarr;
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Merchant ID: {STATUTORY_CREDENTIALS.merchantId}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  )
}

