import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X, Heart, ChevronDown, FileText, ShieldCheck, Flame, Users } from 'lucide-react'
import TaxReceiptModal from './TaxReceiptModal'
import SaaSDonationModal from './SaaSDonationModal'

const navLinks = [
  { path: '/', label: 'Overview' },
  { path: '/activities', label: 'Field Operations & Work' },
  { path: '/documents', label: 'Audits & Documents' },
  { path: '/gallery', label: 'Field Dispatches' },
  {
    label: 'Governance & Media',
    children: [
      { path: '/overview', label: 'Board of Trustees & Charter' },
      { path: '/media', label: 'Media & Press Coverage' },
      { path: '/appeal', label: 'Special Ramadan Appeal' },
      { path: '/contact', label: 'Headquarters & Relief Depots' },
    ],
  },
]

export default function Header() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [receiptModalOpen, setReceiptModalOpen] = useState(false)
  const [donationModalOpen, setDonationModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)
      const totalHeight = document.body.scrollHeight - window.innerHeight
      setScrollProgress(totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setDropdownOpen(false)
  }, [location.pathname])

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-200'
            : 'bg-white border-slate-100'
        }`}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[2.5px] bg-emerald-600 transition-all duration-100 z-50"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[70px]">
          {/* Logo & Identity */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                src="/al-aqdas-logo.png"
                alt="Al Aqdas Welfare Association Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-900 font-extrabold text-[17px] md:text-[18px] tracking-tight font-serif leading-none uppercase">
                  Al Aqdas
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.2 text-[9px] font-mono font-bold bg-emerald-100 text-emerald-800 rounded">
                  NGO SAAS
                </span>
              </div>
              <span className="text-[10px] text-emerald-700 font-bold tracking-[0.16em] mt-0.5 uppercase">
                Humanitarian Welfare Association
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
                      className={`flex items-center gap-1 px-3.5 py-2 text-[13px] font-semibold tracking-wide rounded-lg transition-all duration-200 ${
                        anyChildActive
                          ? 'text-emerald-700 bg-emerald-50'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-slate-400" />
                    </button>
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                            location.pathname === child.path
                              ? 'text-emerald-700 bg-emerald-50'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
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
                  className={`px-3.5 py-2 text-[13px] font-semibold tracking-wide rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-emerald-700 bg-emerald-50 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right Side SaaS Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setReceiptModalOpen(true)}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all border border-slate-200"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verify 80G</span>
            </button>

            <button
              type="button"
              onClick={() => setDonationModalOpen(true)}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 shadow-md hover:shadow-emerald-600/20 active:scale-95"
            >
              <Heart className="w-4 h-4 fill-current text-rose-300" />
              <span>Deploy Aid</span>
            </button>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-slate-200 ${
            mobileMenuOpen ? 'max-h-[600px] opacity-100 py-3' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <nav className="px-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.label}>
                    <button
                      onClick={() => setDropdownOpen((v) => !v)}
                      className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-semibold text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        dropdownOpen ? 'max-h-48' : 'max-h-0'
                      }`}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block pl-7 pr-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
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
                  className={`block px-3.5 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-emerald-700 bg-emerald-50 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  setReceiptModalOpen(true)
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-slate-800 bg-slate-100 rounded-xl"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-600" />
                Generate & Verify 80G Tax Receipt
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Global Modals */}
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
