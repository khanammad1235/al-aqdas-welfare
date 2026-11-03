import { useState, useEffect } from 'react'
import { Cookie, X } from 'lucide-react'

const CONSENT_KEY = 'al_aqdas_cookie_consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem(CONSENT_KEY)
    if (!accepted) {
      const t = setTimeout(() => setVisible(true), 2000)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
          <Cookie className="w-5 h-5 text-amber-600" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-slate-800 mb-0.5">We use cookies</p>
          <p className="text-xs text-slate-500 leading-relaxed">
            We use cookies to enhance your experience. By continuing to browse, you consent to our{' '}
            <a href="#" className="text-primary underline hover:text-accent">Privacy Policy</a>.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={accept}
            className="px-5 py-2 bg-primary hover:bg-secondary text-white font-bold text-sm rounded-xl transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={accept}
            className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
