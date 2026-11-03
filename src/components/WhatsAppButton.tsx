import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(true)
      setTimeout(() => setTooltip(true), 800)
      setTimeout(() => setTooltip(false), 5000)
    }, 3000)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
      {/* Tooltip bubble */}
      <div className={`transition-all duration-500 ${tooltip ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
        <div className="relative bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 max-w-[200px]">
          <button
            onClick={() => setTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-slate-200 rounded-full flex items-center justify-center"
          >
            <X className="w-3 h-3 text-slate-500" />
          </button>
          <p className="text-xs font-bold text-slate-800">Chat with us</p>
          <p className="text-[11px] text-slate-500 mt-0.5">Typically replies in minutes</p>
          {/* Tail */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-white" />
          </div>
        </div>
      </div>

      {/* WhatsApp button */}
      <a
        href="https://wa.me/919702794786?text=Hello%20Al%20Aqdas%20Welfare%2C%20I%20would%20like%20to%20know%20more%20about%20your%20work."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group relative"
        title="Chat on WhatsApp"
      >
        {/* Ping ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
        <MessageCircle className="w-7 h-7 fill-white stroke-0" />
      </a>
    </div>
  )
}
