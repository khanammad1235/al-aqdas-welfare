import {
  Mail, MapPin, Phone, Facebook, Instagram, Youtube, Clock,
  Heart, ChevronRight, ShieldCheck, Award, FileText, CheckCircle2
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { STATUTORY_CREDENTIALS } from '../data/ngoData'

const quickLinks = [
  { label: 'Executive Overview & Board', path: '/overview' },
  { label: 'Field Operations & Programs', path: '/activities' },
  { label: 'Audited Documents & Returns', path: '/documents' },
  { label: 'Field Media & Dispatches', path: '/gallery' },
  { label: 'Media & Press Coverage', path: '/media' },
  { label: 'Special Ramadan Lifeline', path: '/appeal' },
  { label: 'Humanitarian Giving Portal', path: '/donation' },
  { label: 'Headquarters & Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Top trust strip */}
      <div className="border-b border-slate-800/80 bg-slate-900/60">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-6 text-xs">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NITI Aayog DARPAN: <strong className="text-white font-mono">MH/2015/009124</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Section 80G Approval: <strong className="text-white font-mono">AAETA8194EF20214</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Trust Registration: <strong className="text-white font-mono">F-46725 (BOM)</strong></span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>100% Direct Program Deployment Ratio</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="/al-aqdas-logo.png"
                  alt="Al Aqdas Welfare Association"
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-lg tracking-wider font-serif leading-none uppercase">
                  Al Aqdas
                </h3>
                <p className="text-[10px] text-emerald-400 font-bold tracking-[0.2em] mt-0.5 uppercase">
                  Humanitarian Welfare Platform
                </p>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Administering accredited primary, secondary, and junior college education, emergency food
              relief logistics, and free medical outreach for Mumbai's most marginalized communities since 2015.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1 font-mono">
              <p>PAN: <span className="text-slate-200">{STATUTORY_CREDENTIALS.pan}</span></p>
              <p>UPI VPA: <span className="text-emerald-400">{STATUTORY_CREDENTIALS.upiVpa}</span></p>
              <p>Auditor: <span className="text-slate-300 font-sans">{STATUTORY_CREDENTIALS.statutoryAuditor}</span></p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.facebook.com/share/1Csm1nxUNh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors text-white"
                title="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/alaqdaswelfare?igsh=MXBrdjNwNGhraDJvbQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition-colors text-white"
                title="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.youtube.com/@aqdaswelfare2043"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-red-600 flex items-center justify-center transition-colors text-white"
                title="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 lg:pl-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
              Platform & Missions
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-emerald-500/60" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Headquarters & Operations Center */}
          <div className="lg:col-span-5 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
              Central Relief Headquarters & Depots
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  1, Lidhar Shah Rd, Dana Bandar, Mandvi, Mumbai, Maharashtra 400009
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919702794786" className="hover:text-emerald-400 transition-colors">
                  +91 97027 94786 &nbsp;|&nbsp; 022 2374 9786
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:alaqdaswelfare@gmail.com" className="hover:text-emerald-400 transition-colors">
                  alaqdaswelfare@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Daily Dispatch & Operational Hours: 10:00 AM – 6:00 PM IST</span>
              </div>
            </div>

            {/* Map Preview */}
            <div className="rounded-xl overflow-hidden border border-slate-800 h-28 mt-3">
              <iframe
                title="Al Aqdas Central Headquarters Map"
                src="https://maps.google.com/maps?q=1+Lidhar+Shah+Rd+Mumbai&output=embed"
                className="w-full h-full border-0 opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom Statutory Line */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Al Aqdas Welfare Association. Registered under the Bombay Public Trust Act 1950.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link to="/documents" className="hover:text-slate-300">Audited Financials</Link>
            <span>•</span>
            <Link to="/overview" className="hover:text-slate-300">Board Charter</Link>
            <span>•</span>
            <Link to="/donation" className="hover:text-slate-300">80G Tax Exemption</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
