import { Mail, MapPin, Phone, Facebook, Instagram, Youtube, Twitter, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-6 relative overflow-hidden">
      {/* Background pattern overlay (subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column (takes up 2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="/al-aqdas-logo.png"
                  alt="Al Aqdas Logo"
                  className="w-full h-full object-contain brightness-0 invert" // Make logo white if it's transparent PNG
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-white font-bold text-xl tracking-wide font-serif leading-none">AL AQDAS</h3>
                <p className="text-[10px] text-white/80 font-semibold tracking-[0.2em] mt-1">WELFARE ASSOCIATION</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-white/80 pr-4">
              We are a non-profit organization dedicated to serving humanity through compassion, care and community development.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/aqdaswelfareassociation/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:-translate-y-1 transition-transform">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center hover:-translate-y-1 transition-transform">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@aqdaswelfare2043" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center hover:-translate-y-1 transition-transform">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://www.justdial.com/Mumbai/Al-Aqdas-Walfare-Association-Near-Utkarsh-Nager-Mbpt-Colony-Umerkhadi/022PXX22-XX22-180222205242-E5M2_BZDET" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center hover:-translate-y-1 transition-transform font-bold text-xs" title="Justdial">
                JD
              </a>
              <a href="tel:+919702794786" className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center hover:-translate-y-1 transition-transform">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent font-bold mb-6 tracking-wide text-sm">QUICK LINKS</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Work', 'Gallery', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-white/80 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Contact Us & QR */}
          <div className="lg:col-span-1">
            <h4 className="text-accent font-bold mb-6 tracking-wide text-sm">CONTACT US</h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-sm text-white/80">
                <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>+91 97027 94786 | 022 23749786</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80">
                <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="break-all">aawamiwelfare@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="leading-snug">1, Lidhar Shah Rd, Dana Bandar, Mandvi,<br />Mumbai, Maharashtra 400009</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Mon - Sat: 10:00 AM - 6:00 PM</span>
              </li>
            </ul>
            

          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} Al Aqdas Welfare Association. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/60">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
