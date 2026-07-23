import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X, Heart } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'HOME' },
  { path: '/overview', label: 'ABOUT US' },
  { path: '/activities', label: 'OUR WORK' },
  { path: '/documents', label: 'DOCUMENTS' },
  { path: '/gallery', label: 'GALLERY' },
  { path: '/contact', label: 'CONTACT' },
]

export default function Header() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40) // Adjusted since we have TopBar
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white ${
        scrolled ? 'shadow-soft py-2' : 'py-4'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
            <img
              src="/al-aqdas-logo.png"
              alt="Al Aqdas Welfare Association Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <h1 className="text-primary font-bold text-xl md:text-2xl tracking-wide font-serif leading-none">
              AL AQDAS
            </h1>
            <p className="text-[10px] md:text-xs text-primary font-semibold tracking-[0.2em] mt-1">
              WELFARE ASSOCIATION
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path && link.path !== '#'
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`text-[13px] font-bold tracking-wider transition-colors ${
                  isActive
                    ? 'text-accent'
                    : 'text-slate-600 hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Donate Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/donation"
            className="hidden sm:flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded text-sm font-bold tracking-wide transition-colors shadow-sm"
          >
            <Heart className="w-4 h-4 fill-current" />
            DONATE NOW
          </Link>
          
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${
          mobileMenuOpen ? 'max-h-[500px] border-t border-slate-100' : 'max-h-0'
        }`}
      >
        <nav className="px-4 py-4 flex flex-col shadow-inner">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path && link.path !== '#'
            return (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-bold tracking-wider border-b border-slate-50 last:border-0 ${
                  isActive
                    ? 'text-accent bg-slate-50'
                    : 'text-slate-600 hover:text-accent hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            to="/donation"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded text-sm font-bold tracking-wide"
          >
            <Heart className="w-4 h-4 fill-current" />
            DONATE NOW
          </Link>
        </nav>
      </div>
    </header>
  )
}
