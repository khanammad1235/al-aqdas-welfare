import { useState } from 'react'
import { Heart, ShieldCheck, Sparkles, QrCode, Smartphone, Copy, Check, ExternalLink, X } from 'lucide-react'

interface DonationWidgetProps {
  defaultAmount?: string
  className?: string
  theme?: 'dark' | 'light'
}

const UPI_VPA = 'mab.037326002330038@axisbank'
const RECIPIENT_NAME = 'Al Aqdas Welfare Association'

const PRESET_AMOUNTS = ['500', '1000', '2500', '5000', '10000']

const IMPACT_MAPPING: Record<string, string> = {
  '500': 'Provides warm meals for 5 hungry families',
  '1000': 'Provides school supplies & stationery for 2 children',
  '2500': 'Provides 1 complete monthly ration kit for a family',
  '5000': 'Sponsors educational fees for a child for 3 months',
  '10000': 'Sponsors a free medical health check-up camp',
}

export default function DonationWidget({
  defaultAmount = '500',
  className = '',
  theme = 'dark',
}: DonationWidgetProps) {
  const [amount, setAmount] = useState<string>(defaultAmount)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [copied, setCopied] = useState<boolean>(false)

  const numAmount = parseInt(amount, 10) || 0
  const impactMessage =
    IMPACT_MAPPING[amount] ||
    (numAmount > 0 ? `Your ₹${numAmount.toLocaleString('en-IN')} brings hope and essential care to those in need.` : '')

  // Standard UPI URI deep link
  const upiDeepLink = `upi://pay?pa=${encodeURIComponent(UPI_VPA)}&pn=${encodeURIComponent(
    RECIPIENT_NAME
  )}&am=${numAmount}&cu=INR&tn=${encodeURIComponent('Donation to Al Aqdas Welfare')}`

  // Dynamic QR Code encoded with the dynamic UPI URI
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=10&data=${encodeURIComponent(
    upiDeepLink
  )}`

  const handleDonateClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!numAmount || numAmount <= 0) return

    setShowModal(true)

    // Attempt to open UPI app directly on mobile devices
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      setTimeout(() => {
        window.location.href = upiDeepLink
      }, 300)
    }
  }

  const handleCopyVPA = () => {
    navigator.clipboard.writeText(UPI_VPA)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const isDark = theme === 'dark'

  return (
    <div
      className={`rounded-2xl border p-5 sm:p-8 backdrop-blur-md shadow-2xl transition-all duration-300 ${
        isDark
          ? 'bg-secondary/40 border-white/15 text-white'
          : 'bg-white border-slate-200 text-slate-800'
      } ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className={`text-xl font-bold font-serif ${isDark ? 'text-white' : 'text-primary'}`}>
            Make a Donation
          </h3>
          <p className={`text-xs mt-1 ${isDark ? 'text-white/70' : 'text-slate-500'}`}>
            100% Direct Impact · Tax Exempted
          </p>
        </div>
        <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
          <Heart className="w-5 h-5 text-accent fill-current" />
        </div>
      </div>

      {/* Preset Amount Grid — 3 cols on mobile, 5 on sm+ */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-4">
        {PRESET_AMOUNTS.map((val) => (
          <button
            key={val}
            type="button"
            onClick={() => setAmount(val)}
            className={`py-2.5 text-xs font-bold rounded-xl transition-all duration-200 ${
              amount === val
                ? 'bg-accent text-white border-transparent shadow-md scale-105'
                : isDark
                ? 'bg-white/5 text-white/80 border border-white/10 hover:border-accent hover:scale-105'
                : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-accent hover:scale-105'
            }`}
          >
            ₹{parseInt(val, 10).toLocaleString('en-IN')}
          </button>
        ))}
      </div>

      {/* Custom Amount Input Box */}
      <div className="relative mb-4">
        <span
          className={`absolute left-4 top-1/2 -translate-y-1/2 font-bold text-base ${
            isDark ? 'text-accent' : 'text-primary'
          }`}
        >
          ₹
        </span>
        <input
          type="text"
          inputMode="numeric"
          value={amount}
          onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ''))}
          placeholder="Enter Custom Amount"
          className={`w-full rounded-xl pl-8 pr-4 py-3.5 text-base font-bold transition-colors focus:outline-none ${
            isDark
              ? 'bg-white/5 border border-white/15 text-white placeholder:text-white/30 focus:border-accent'
              : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-primary'
          }`}
        />
      </div>

      {/* Live Impact Note */}
      {impactMessage && (
        <div
          className={`mb-5 rounded-xl px-4 py-3 text-xs flex items-start gap-2.5 transition-all duration-300 ${
            isDark
              ? 'bg-accent/15 border border-accent/30 text-white/90'
              : 'bg-emerald-50 border border-emerald-200 text-emerald-800'
          }`}
        >
          <Sparkles className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
          <span>{impactMessage}</span>
        </div>
      )}

      {/* Main Donate Button */}
      <button
        type="button"
        onClick={handleDonateClick}
        disabled={numAmount <= 0}
        className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 active:scale-95 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base tracking-wide"
      >
        <Heart className="w-5 h-5 fill-current flex-shrink-0" />
        <span>DONATE ₹{numAmount > 0 ? numAmount.toLocaleString('en-IN') : 'NOW'} VIA UPI</span>
      </button>

      <div className="mt-4 flex items-center justify-between text-[11px] opacity-75 gap-2 flex-wrap">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-accent" /> Safe &amp; Secure UPI
        </span>
        <span className="flex items-center gap-1">
          <Smartphone className="w-3.5 h-3.5 text-accent" /> Instant App Launch
        </span>
      </div>

      {/* ════════════ QR MODAL ════════════ */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800 text-center border border-slate-100 max-h-[92vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-9 h-9 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Drag handle (mobile sheet feel) */}
            <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-5 sm:hidden" />

            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-3 text-emerald-600 border border-emerald-100">
              <QrCode className="w-6 h-6" />
            </div>

            <h4 className="text-xl font-bold font-serif text-slate-800">Scan or Tap to Pay</h4>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Pre-filled donation of{' '}
              <strong className="text-emerald-700 text-sm">₹{numAmount.toLocaleString('en-IN')}</strong> to{' '}
              {RECIPIENT_NAME}
            </p>

            {/* Dynamic Generated UPI QR Code */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-4 inline-block shadow-inner">
              <img
                src={qrCodeUrl}
                alt={`UPI QR Code for ₹${numAmount}`}
                className="w-44 h-44 sm:w-56 sm:h-56 mx-auto rounded-xl object-contain bg-white p-2"
              />
              <p className="text-[11px] font-semibold text-slate-500 mt-2 flex items-center justify-center gap-1">
                <QrCode className="w-3.5 h-3.5 text-accent" /> Scan with Google Pay, PhonePe, Paytm, or BHIM
              </p>
            </div>

            {/* Quick Mobile App Direct Launch Button */}
            <div className="mb-4">
              <a
                href={upiDeepLink}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-all shadow-md active:scale-95"
              >
                <Smartphone className="w-4 h-4 flex-shrink-0" />
                Open UPI App (₹{numAmount.toLocaleString('en-IN')})
                <ExternalLink className="w-3.5 h-3.5 ml-1 flex-shrink-0" />
              </a>
            </div>

            {/* Copy VPA Box */}
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex items-center justify-between gap-2 text-xs">
              <div className="text-left min-w-0">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">UPI VPA</p>
                <p className="font-mono font-semibold text-slate-700 break-all leading-snug mt-0.5">{UPI_VPA}</p>
              </div>
              <button
                type="button"
                onClick={handleCopyVPA}
                className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-300 hover:border-emerald-600 text-slate-700 hover:text-emerald-700 rounded-lg text-xs font-semibold transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
