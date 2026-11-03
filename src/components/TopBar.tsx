import { useState } from 'react'
import { Mail, Phone, Clock, Facebook, Instagram, ShieldCheck, Award, FileText, CheckCircle2 } from 'lucide-react'
import { STATUTORY_CREDENTIALS } from '../data/ngoData'
import TaxReceiptModal from './TaxReceiptModal'

export default function TopBar() {
  const [receiptModalOpen, setReceiptModalOpen] = useState(false)

  return (
    <>
      <div className="bg-slate-950 text-white border-b border-slate-800 hidden md:block text-xs">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between h-9">
          {/* Left: Contact info */}
          <div className="flex items-center gap-5 text-[11.5px] font-medium text-slate-300">
            <a href="tel:+919702794786" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <Phone className="w-3 h-3 text-emerald-400" />
              +91 97027 94786
            </a>
            <a href="mailto:alaqdaswelfare@gmail.com" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <Mail className="w-3 h-3 text-emerald-400" />
              alaqdaswelfare@gmail.com
            </a>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3 h-3 text-emerald-400" />
              Daily Field Ops: 10AM–6PM
            </div>
          </div>

          {/* Center: Real-time Institutional Verification Badge */}
          <div className="hidden xl:flex items-center gap-3 text-[11px] font-medium text-slate-300">
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Verified 80G Tax-Exempt NGO</span>
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">Darpan: <strong className="text-slate-200">MH/2015/009124</strong></span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">Trust Reg: <strong className="text-slate-200">F-46725 (BOM)</strong></span>
          </div>

          {/* Right: Quick 80G Receipt & Social links */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setReceiptModalOpen(true)}
              className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30 transition-all"
            >
              <FileText className="w-3 h-3" />
              Generate 80G Receipt
            </button>

            <div className="h-3.5 w-px bg-slate-800" />

            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/share/1Csm1nxUNh/"
                target="_blank" rel="noopener noreferrer"
                className="w-5 h-5 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors text-white"
                title="Facebook"
              >
                <Facebook className="w-2.5 h-2.5" />
              </a>
              <a
                href="https://www.instagram.com/alaqdaswelfare?igsh=MXBrdjNwNGhraDJvbQ=="
                target="_blank" rel="noopener noreferrer"
                className="w-5 h-5 rounded-full bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition-colors text-white"
                title="Instagram"
              >
                <Instagram className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <TaxReceiptModal
        isOpen={receiptModalOpen}
        onClose={() => setReceiptModalOpen(false)}
      />
    </>
  )
}
