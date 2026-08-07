import { useState, useEffect, useCallback } from 'react'
import { X, Heart, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

// Load gallery images (same source as Gallery page)
const imageModules = import.meta.glob('../assets/gallery-images/*.{png,jpg,jpeg,webp,gif}', {
  eager: true,
  query: '?url',
  import: 'default',
})
const allImages = Object.values(imageModules) as string[]

// Pick a curated set of up to 8 images for the banner slideshow
const BANNER_IMAGES = allImages.slice(0, Math.min(8, allImages.length))

const SESSION_KEY = 'al_aqdas_banner_shown'

export default function WelcomeBanner() {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  // Show banner once per browser session
  useEffect(() => {
    const shown = sessionStorage.getItem(SESSION_KEY)
    if (!shown && BANNER_IMAGES.length > 0) {
      const timer = setTimeout(() => setVisible(true), 600)
      return () => clearTimeout(timer)
    }
  }, [])

  // Auto-advance slideshow every 3 seconds
  useEffect(() => {
    if (!visible || BANNER_IMAGES.length <= 1) return
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % BANNER_IMAGES.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [visible])

  const closeBanner = useCallback(() => {
    setClosing(true)
    sessionStorage.setItem(SESSION_KEY, '1')
    setTimeout(() => {
      setVisible(false)
      setClosing(false)
    }, 400)
  }, [])

  const prev = () => setActiveIndex((i) => (i - 1 + BANNER_IMAGES.length) % BANNER_IMAGES.length)
  const next = () => setActiveIndex((i) => (i + 1) % BANNER_IMAGES.length)

  if (!visible || BANNER_IMAGES.length === 0) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-400 ${
        closing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={closeBanner}
      />

      {/* Banner Card */}
      <div
        className={`relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col sm:flex-row transition-all duration-400 ${
          closing ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'
        }`}
        style={{ maxHeight: '90vh' }}
      >
        {/* ── Left: Image Slideshow ── */}
        <div className="relative w-full sm:w-1/2 h-56 sm:h-auto overflow-hidden flex-shrink-0 bg-slate-900">
          {BANNER_IMAGES.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Al Aqdas Welfare activity ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                i === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            />
          ))}

          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent sm:bg-gradient-to-r" />

          {/* Slide counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {BANNER_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          {/* Prev / Next Arrows */}
          {BANNER_IMAGES.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>

        {/* ── Right: Content ── */}
        <div className="flex flex-col justify-between p-6 sm:p-8 overflow-y-auto flex-1">
          {/* Logo + Org name */}
          <div className="flex items-center gap-3 mb-5">
            <img
              src="/al-aqdas-logo.png"
              alt="Al Aqdas Welfare"
              className="w-12 h-12 object-contain"
            />
            <div>
              <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Welcome to</p>
              <h2 className="text-lg font-bold font-serif text-slate-900 leading-tight">
                Al Aqdas Welfare Association
              </h2>
            </div>
          </div>

          {/* Headline */}
          <div className="mb-5">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 leading-snug mb-3">
              Serving Humanity with{' '}
              <span className="text-emerald-700">Compassion</span>
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              For over a decade, Al Aqdas Welfare Association has been on the ground — providing food,
              education, healthcare, and hope to families in need across Mumbai and beyond.
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { value: '10+', label: 'Years Active' },
              { value: '5000+', label: 'Families Served' },
              { value: '100%', label: 'Direct Impact' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-emerald-50 border border-emerald-100 rounded-2xl p-3 text-center"
              >
                <p className="text-xl font-bold text-emerald-800 font-serif">{value}</p>
                <p className="text-[10px] font-semibold text-emerald-600 uppercase tracking-wider mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/donation"
              onClick={closeBanner}
              className="flex-1 flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-5 rounded-xl transition-all text-sm shadow-md hover:shadow-lg active:scale-95"
            >
              <Heart className="w-4 h-4 fill-current" />
              Donate Now
            </a>
            <button
              onClick={closeBanner}
              className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-5 rounded-xl transition-all text-sm active:scale-95"
            >
              Explore Website
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Close Button ── */}
        <button
          onClick={closeBanner}
          aria-label="Close welcome banner"
          className="absolute top-4 right-4 w-9 h-9 bg-white/90 hover:bg-white shadow-md text-slate-700 rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
