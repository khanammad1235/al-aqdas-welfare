import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X, Heart, ChevronDown, FileText } from 'lucide-react'
import TaxReceiptModal from './TaxReceiptModal'
import SaaSDonationModal from './SaaSDonationModal'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/overview', label: 'About Us' },
  { path: '/activities', label: 'Our Programs' },
  { path: '/documents', label: 'Financials & 80G' },
  { path: '/gallery', label: 'Field Gallery' },
  {
    label: 'More',
    children: [
      { path: '/media', label: 'News & Media Coverage' },
      { path: '/appeal', label: 'Special Ramadan Appeal' },
      { path: '/contact', label: 'Contact Us' },
    ],
  },
]

export default function Header() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [receiptModalOpen, setReceiptModalOpen] = useState(false)
  const [donationModalOpen, setDonationModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-200'
            : 'bg-white border-slate-200/80'
        }`}
      >
        <div className="max-w-[1340px] mx-auto px-3 sm:px-6 flex items-center justify-between h-[68px] sm:h-[72px]">
          {/* Logo & Identity */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink min-w-0 pr-2">
            <img
              src="/al-aqdas-logo.png"
              alt="Al Aqdas Welfare Association Logo"
              className="w-9 h-9 sm:w-11 sm:h-11 object-contain shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <span className="text-slate-900 font-extrabold text-[14px] sm:text-[17px] tracking-tight leading-tight truncate">
                Al Aqdas Welfare Association
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium truncate">
                Registered Public Trust • Mumbai
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.children) {
                const anyChildActive = link.children.some((c) => location.pathname === c.path)
                return (
                  <div key={link.label} className="relative group">
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-[13.5px] font-semibold rounded-md transition-colors ${
                        anyChildActive
                          ? 'text-emerald-800 bg-emerald-50'
                          : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-150" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-lg border border-slate-200 py-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-3.5 py-2 text-xs font-semibold transition-colors ${
                            location.pathname === child.path
                              ? 'text-emerald-800 bg-emerald-50'
                              : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.label}
                  to={link.path!}
                  className={`px-3 py-2 text-[13.5px] font-semibold rounded-md transition-colors ${
                    isActive
                      ? 'text-emerald-800 bg-emerald-50'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => setReceiptModalOpen(true)}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors border border-slate-200"
            >
              <FileText className="w-3.5 h-3.5 text-slate-600" />
              <span>Verify 80G</span>
            </button>

            <button
              type="button"
              onClick={() => setDonationModalOpen(true)}
              className="inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-semibold transition-colors shadow-xs shrink-0"
            >
              <Heart className="w-3.5 h-3.5 fill-current text-emerald-200" />
              <span>Donate</span>
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center text-slate-700 hover:bg-slate-100 rounded-md transition-colors shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-3 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.label} className="pt-2 border-t border-slate-100">
                    <span className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {link.label}
                    </span>
                    <div className="mt-1 space-y-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }
              return (
                <Link
                  key={link.label}
                  to={link.path!}
                  className={`block px-3 py-2 text-xs font-semibold rounded ${
                    location.pathname === link.path
                      ? 'text-emerald-800 bg-emerald-50'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  setReceiptModalOpen(true)
                }}
                className="w-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded border border-slate-200"
              >
                <FileText className="w-3.5 h-3.5 text-slate-600" />
                <span>Verify & Download 80G Tax Receipt</span>
              </button>
            </div>
          </div>
        )}
      </header>

      <TaxReceiptModal
        isOpen={receiptModalOpen}
        onClose={() => setReceiptModalOpen(false)}
      />

      <SaaSDonationModal
        isOpen={donationModalOpen}
        onClose={() => setDonationModalOpen(false)}
        onOpenReceipt={() => setReceiptModalOpen(true)}
      />
    </>
  )
}
