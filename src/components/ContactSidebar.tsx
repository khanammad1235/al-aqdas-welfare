import { Mail, MapPin, Phone, Clock, MessageCircle, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ContactSidebar() {
  return (
    <div className="w-full lg:w-[35%]">
      <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden sticky top-[90px]">
        {/* Header strip */}
        <div className="bg-primary px-6 py-5 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
            <Phone className="w-4 h-4 text-accent" />
          </div>
          <div>
            <h2 className="text-white font-bold text-base leading-none">Get In Touch</h2>
            <p className="text-white/50 text-[11px] mt-0.5">We're here to help</p>
          </div>
        </div>

        <div className="p-6 space-y-5">
          {/* Address */}
          <div className="flex gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-emerald-50 flex items-center justify-center shrink-0 transition-colors">
              <MapPin className="w-4.5 h-4.5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">Address</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                1, Lidhar Shah Rd, Dana Bandar,<br />
                Mandvi, Mumbai 400009
              </p>
              <a
                href="https://maps.google.com/?q=1+Lidhar+Shah+Rd+Mandvi+Mumbai"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-600 text-xs font-semibold mt-1.5 hover:underline"
              >
                View on Map <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="h-px bg-slate-100" />

          {/* Phone */}
          <div className="flex gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-emerald-50 flex items-center justify-center shrink-0 transition-colors">
              <Phone className="w-4.5 h-4.5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">Phone</p>
              <a href="tel:+919702794786" className="block text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                +91 97027 94786
              </a>
              <a href="tel:02223749786" className="block text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                022 2374 9786
              </a>
            </div>
          </div>

          <div className="h-px bg-slate-100" />

          {/* Email */}
          <div className="flex gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-emerald-50 flex items-center justify-center shrink-0 transition-colors">
              <Mail className="w-4.5 h-4.5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">Email</p>
              <a href="mailto:alaqdaswelfare@gmail.com" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors break-all">
                alaqdaswelfare@gmail.com
              </a>
            </div>
          </div>

          <div className="h-px bg-slate-100" />

          {/* Hours */}
          <div className="flex gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-emerald-50 flex items-center justify-center shrink-0 transition-colors">
              <Clock className="w-4.5 h-4.5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">Office Hours</p>
              <p className="text-sm text-slate-600">Mon – Sat</p>
              <p className="text-sm font-semibold text-slate-800">10:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="px-6 pb-6 flex flex-col gap-2">
          <Link
            to="/contact"
            className="block w-full py-3 text-center bg-primary hover:bg-secondary text-white font-bold rounded-xl transition-colors text-sm shadow-sm"
          >
            Send a Message
          </Link>
          <a
            href="https://wa.me/919702794786?text=Hello%20Al%20Aqdas%20Welfare%2C%20I%20need%20help."
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 text-center bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors text-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            WhatsApp Chat
          </a>
        </div>
      </div>
    </div>
  )
}
