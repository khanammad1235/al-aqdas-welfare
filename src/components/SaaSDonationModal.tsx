import { useState } from 'react'
import {
  X, Heart, ShieldCheck, QrCode, Smartphone, Copy, Check,
  ExternalLink, ArrowRight
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

  const upiNote = `Donation to Al Aqdas - ${selectedCampaign.title.slice(0, 30)}`
  const upiDeepLink = `upi://pay?pa=${encodeURIComponent(
    STATUTORY_CREDENTIALS.upiVpa
  )}&pn=${encodeURIComponent(
    STATUTORY_CREDENTIALS.ngoName
  )}&am=${activeAmount}&cu=INR&tn=${encodeURIComponent(upiNote)}`

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=8&data=${encodeURIComponent(
    upiDeepLink
  )}`

  const handleCopyVpa = () => {
    navigator.clipboard.writeText(STATUTORY_CREDENTIALS.upiVpa)
    setCopiedVpa(true)
    setTimeout(() => setCopiedVpa(false), 2000)
  }

  const presetAmounts = [500, 1000, 2500, 5000, 10000]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-200 bg-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
              <Heart className="w-4 h-4 fill-current text-emerald-700" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                Support Al Aqdas Welfare
              </h3>
              <p className="text-[11px] text-slate-500 truncate">
                100% direct disbursement • 80G Tax-Exempt
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-100 flex items-center justify-center transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {/* Cause Selector */}
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
              Select Cause:
            </label>
            <select
              value={selectedCampaignId}
              onChange={(e) => setSelectedCampaignId(e.target.value)}
              className="w-full px-3 py-2 text-xs font-semibold border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-emerald-700"
            >
              {CAMPAIGNS.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>

          {/* Amount Presets */}
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
              Select Donation Amount:
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 mb-2">
              {presetAmounts.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => {
                    setAmount(p)
                    setCustomAmount('')
                  }}
                  className={`py-2 text-xs font-semibold rounded border transition-colors ${
                    activeAmount === p && !customAmount
                      ? 'bg-emerald-50 border-emerald-700 text-emerald-900 font-bold'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  ₹{p.toLocaleString('en-IN')}
                </button>
              ))}
            </div>

            <div className="relative mt-2">
              <span className="absolute left-3 top-2.5 text-xs font-bold text-slate-400">₹</span>
              <input
                type="number"
                placeholder="Or enter custom amount in INR"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full pl-7 pr-3 py-2 text-xs font-medium border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-700"
              />
            </div>
          </div>

          {/* UPI Direct QR Code Box */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center gap-5">
            <div className="w-36 h-36 bg-white p-2 rounded-lg border border-slate-200 shadow-2xs shrink-0 flex items-center justify-center">
              <img
                src={qrCodeUrl}
                alt="Donation UPI QR Code"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex-1 text-center sm:text-left space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200">
                <QrCode className="w-3 h-3" /> Scan with Any UPI App
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Scan using Google Pay, PhonePe, Paytm, BHIM, or your mobile banking app.
              </p>

              {/* UPI ID Copy Box */}
              <div className="flex items-center gap-1.5 pt-1">
                <div className="flex-1 px-2.5 py-1.5 bg-white border border-slate-300 rounded text-xs font-mono text-slate-800 truncate">
                  {STATUTORY_CREDENTIALS.upiVpa}
                </div>
                <button
                  type="button"
                  onClick={handleCopyVpa}
                  className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold rounded flex items-center gap-1 transition-colors shrink-0"
                >
                  {copiedVpa ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedVpa ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bank Transfer Details Box */}
          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs space-y-1">
            <p className="font-bold text-slate-800">Direct Bank Account Transfer (NEFT / RTGS / IMPS):</p>
            <p className="text-slate-600">Bank: <strong className="text-slate-800">{STATUTORY_CREDENTIALS.bankName}</strong> ({STATUTORY_CREDENTIALS.branch} Branch)</p>
            <p className="text-slate-600">Account No: <strong className="text-slate-800 font-mono">{STATUTORY_CREDENTIALS.accountNo}</strong> | IFSC: <strong className="text-slate-800 font-mono">{STATUTORY_CREDENTIALS.ifsc}</strong></p>
          </div>

          {/* 80G Note */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Section 80G Tax Exemption Eligible</span>
            </div>
            {onOpenReceipt && (
              <button
                type="button"
                onClick={() => {
                  onClose()
                  onOpenReceipt()
                }}
                className="text-emerald-800 font-semibold hover:underline"
              >
                Claim 80G Tax Receipt →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
