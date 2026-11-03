import { Mail, MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { STATUTORY_CREDENTIALS } from '../data/ngoData'

export default function ContactSidebar() {
  return (
    <aside className="w-full">
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden sticky top-[90px]">
        {/* Header strip */}
        <div className="bg-slate-900 text-white px-5 py-4 flex items-center gap-3 border-b border-slate-800">
          <div className="w-9 h-9 rounded-lg bg-emerald-700/30 border border-emerald-500/30 flex items-center justify-center shrink-0">
            <Phone className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm leading-tight">Get In Touch</h3>
            <p className="text-slate-400 text-xs mt-0.5">We're here to assist</p>
          </div>
        </div>

        <div className="p-5 space-y-4 text-xs">
          {/* Address */}
          <div className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center shrink-0 text-slate-700 mt-0.5">
              <MapPin className="w-4 h-4 text-emerald-700" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-0.5">
                Head Office
              </p>
              <p className="text-slate-600 leading-relaxed text-xs">
                1, Lidhar Shah Rd, Dana Bandar,<br />
                Mandvi, Mumbai 400009
              </p>
              <a
                href="https://maps.google.com/?q=1+Lidhar+Shah+Rd+Mandvi+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-700 font-semibold text-xs mt-1 hover:underline"
              >
                <span>View on Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="h-px bg-slate-100" />

          {/* Phone */}
          <div className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center shrink-0 text-slate-700 mt-0.5">
              <Phone className="w-4 h-4 text-emerald-700" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-0.5">
                Helpline Numbers
              </p>
              <a href="tel:+919702794786" className="block text-slate-700 font-medium hover:text-emerald-700 transition-colors">
                +91 97027 94786
              </a>
              <a href="tel:02223749786" className="block text-slate-700 font-medium hover:text-emerald-700 transition-colors">
                022 2374 9786
              </a>
            </div>
          </div>

          <div className="h-px bg-slate-100" />

          {/* Email */}
          <div className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center shrink-0 text-slate-700 mt-0.5">
              <Mail className="w-4 h-4 text-emerald-700" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-0.5">
                Official Email
              </p>
              <a
                href="mailto:alaqdaswelfare@gmail.com"
                className="text-slate-700 font-medium hover:text-emerald-700 transition-colors break-all"
              >
                alaqdaswelfare@gmail.com
              </a>
            </div>
          </div>

          <div className="h-px bg-slate-100" />

          {/* Office Hours */}
          <div className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center shrink-0 text-slate-700 mt-0.5">
              <Clock className="w-4 h-4 text-emerald-700" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-0.5">
                Office Hours
              </p>
              <p className="text-slate-600">Monday – Saturday</p>
              <p className="font-semibold text-slate-800">10:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="px-5 pb-5 flex flex-col gap-2">
          <Link
            to="/contact"
            className="block w-full py-2.5 text-center bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors text-xs"
          >
            Send an Inquiry
          </Link>
          <a
            href="https://wa.me/919702794786?text=Hello%20Al%20Aqdas%20Welfare%20Association%2C%20I%20would%20like%20to%20get%20in%20touch."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 w-full py-2.5 text-center bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-lg transition-colors text-xs"
          >
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>
  )
}
