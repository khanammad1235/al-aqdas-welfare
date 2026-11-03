import { useState } from 'react'
import { Mail, Phone, Clock, Facebook, Instagram, ShieldCheck, FileText } from 'lucide-react'
import { STATUTORY_CREDENTIALS } from '../data/ngoData'
import TaxReceiptModal from './TaxReceiptModal'

export default function TopBar() {
  const [receiptModalOpen, setReceiptModalOpen] = useState(false)

  return (
    <>
      <div className="bg-slate-900 text-slate-200 border-b border-slate-800 hidden md:block text-xs">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 flex items-center justify-between h-9">
          {/* Left: Contact info */}
          <div className="flex items-center gap-5 text-[12px] font-medium text-slate-300">
            <a href="tel:+919702794786" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              +91 97027 94786
            </a>
            <a href="mailto:alaqdaswelfare@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              alaqdaswelfare@gmail.com
            </a>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Office: Mon–Sat 10 AM – 6 PM
            </div>
          </div>

          {/* Center: Legal registrations */}
          <div className="hidden lg:flex items-center gap-2 text-[11px] text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Regd. Public Charitable Trust F-46725 (BOM)</span>
            <span className="text-slate-600">•</span>
            <span>DARPAN: MH/2015/009124</span>
            <span className="text-slate-600">•</span>
            <span>80G Tax-Exempt</span>
          </div>

          {/* Right: 80G Quick Link & Social */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setReceiptModalOpen(true)}
              className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded transition-colors"
            >
              <FileText className="w-3 h-3 text-emerald-400" />
              <span>Tax Exemption (80G)</span>
            </button>

            <div className="h-3.5 w-px bg-slate-700" />

            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/share/1Csm1nxUNh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 rounded bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors text-slate-300 hover:text-white"
                title="Facebook"
              >
                <Facebook className="w-3 h-3" />
              </a>
              <a
                href="https://www.instagram.com/alaqdaswelfare?igsh=MXBrdjNwNGhraDJvbQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 rounded bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors text-slate-300 hover:text-white"
                title="Instagram"
              >
                <Instagram className="w-3 h-3" />
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
