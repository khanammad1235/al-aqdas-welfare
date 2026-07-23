import { Mail, Phone, Clock, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="bg-primary text-white py-2 px-4 hidden md:block border-b border-white/10">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center text-xs font-medium">
        
        {/* Contact Info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-accent" />
            <span>+91 97027 94786 | 022 23749786</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-accent" />
            <a href="mailto:aawamiwelfare@gmail.com" className="hover:text-accent transition-colors">
              aawamiwelfare@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-accent" />
            <span>Mon - Sat: 10:00 AM - 6:00 PM</span>
          </div>
        </div>

        {/* Social & Follow Us */}
        <div className="flex items-center gap-4">
          <span className="text-white/80">Follow Us:</span>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/aqdaswelfareassociation/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-6 h-6 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-700 transition-colors">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="https://www.youtube.com/@aqdaswelfare2043" target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors">
              <Youtube className="w-3.5 h-3.5" />
            </a>
            <a href="https://www.justdial.com/Mumbai/Al-Aqdas-Walfare-Association-Near-Utkarsh-Nager-Mbpt-Colony-Umerkhadi/022PXX22-XX22-180222205242-E5M2_BZDET" target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors font-bold text-[10px]" title="Justdial">
              JD
            </a>
          </div>
        </div>
        
      </div>
    </div>
  )
}
