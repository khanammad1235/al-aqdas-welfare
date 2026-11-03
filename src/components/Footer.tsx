import {
  Mail, MapPin, Phone, Facebook, Instagram, Youtube,
  ShieldCheck, Award, FileText, CheckCircle2, Heart
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { STATUTORY_CREDENTIALS } from '../data/ngoData'

const quickLinks = [
  { label: 'About Our Trust', path: '/overview' },
  { label: 'Our Programs & Schools', path: '/activities' },
  { label: 'Audited Financials & 80G', path: '/documents' },
  { label: 'Field Photo Gallery', path: '/gallery' },
  { label: 'News & Media Coverage', path: '/media' },
  { label: 'Special Ramadan Appeal', path: '/appeal' },
  { label: 'Make a Donation', path: '/donation' },
  { label: 'Contact Us', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Credentials Bar */}
      <div className="border-b border-slate-800 py-4 bg-slate-950">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NITI Aayog DARPAN: <strong className="text-white">MH/2015/009124</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>80G Unique Reg: <strong className="text-white">AAETA8194EF20214</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Trust Registration: <strong className="text-white">F-46725 (BOM)</strong></span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
              <CheckCircle2 className="w-4 h-4" />
              <span>100% Direct Program Deployment Ratio</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Organization Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/al-aqdas-logo.png"
                alt="Al Aqdas Welfare Association"
                className="w-10 h-10 object-contain brightness-0 invert"
              />
              <div>
                <h3 className="text-white font-bold text-base leading-tight">
                  Al Aqdas Welfare Association
                </h3>
                <p className="text-[11px] text-emerald-400 font-medium">
                  Public Charitable Trust • Mumbai
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Dedicated to uplifting marginalized communities in Mumbai through accredited primary, secondary, and junior college education, daily nutrition relief, and free medical camps since 2015.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>PAN: <span className="text-slate-200">{STATUTORY_CREDENTIALS.pan}</span></p>
              <p>UPI ID: <span className="text-emerald-400 font-mono">{STATUTORY_CREDENTIALS.upiVpa}</span></p>
              <p>Statutory Auditor: <span className="text-slate-300">{STATUTORY_CREDENTIALS.statutoryAuditor}</span></p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Bank Details */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Head Office & Banking
            </h4>
            
            <div className="space-y-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>1, Lidhar Shah Rd, Dana Bandar, Mandvi, Mumbai, Maharashtra 400009</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>+91 97027 94786</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>alaqdaswelfare@gmail.com</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-0.5">
              <p className="font-semibold text-slate-200">Bank Transfer Details:</p>
              <p>Bank: {STATUTORY_CREDENTIALS.bankName} (Mandvi)</p>
              <p>A/C: <span className="font-mono text-slate-200">{STATUTORY_CREDENTIALS.accountNo}</span></p>
              <p>IFSC: <span className="font-mono text-slate-200">{STATUTORY_CREDENTIALS.ifsc}</span></p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Al Aqdas Welfare Association. All rights reserved. Registered under Bombay Public Trust Act 1950.</p>
          <div className="flex items-center gap-4">
            <Link to="/documents" className="hover:text-slate-300">Audited Financials</Link>
            <Link to="/overview" className="hover:text-slate-300">Trust Charter</Link>
            <Link to="/contact" className="hover:text-slate-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
