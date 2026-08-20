import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Flag, Award, Users, Maximize2, X, Sparkles } from 'lucide-react'

// Dynamically load all Independence Day photos from src/assets/Independence Day
const photoModules = import.meta.glob('../assets/Independence Day/*.{png,jpg,jpeg,webp,gif,JPG,JPEG}', {
  eager: true,
  query: '?url',
  import: 'default',
})
const independencePhotos = Object.values(photoModules) as string[]

export default function IndependenceDaySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const totalPhotos = independencePhotos.length

  const nextSlide = useCallback(() => {
    if (totalPhotos === 0) return
    setCurrentIndex((prev) => (prev + 1) % totalPhotos)
  }, [totalPhotos])

  const prevSlide = useCallback(() => {
    if (totalPhotos === 0) return
    setCurrentIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos)
  }, [totalPhotos])

  // Auto-play slideshow every 3.5 seconds when not hovered/paused
  useEffect(() => {
    if (!isAutoPlaying || totalPhotos === 0) return
    const timer = setInterval(() => {
      nextSlide()
    }, 3500)
    return () => clearInterval(timer)
  }, [isAutoPlaying, nextSlide, totalPhotos])

  if (totalPhotos === 0) return null

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-emerald-950/40 to-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Glow & Patriotic Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-white/10 to-emerald-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Flag className="w-4 h-4 text-amber-400" />
            <span>Independence Day Celebration</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-4 leading-tight">
            Celebrating Freedom & <span className="bg-gradient-to-r from-amber-400 via-slate-100 to-emerald-400 bg-clip-text text-transparent">Unity</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Al Aqdas Welfare Association proudly celebrated Independence Day with flag hoisting, community ration distribution, and patriotic fervor.
          </p>
        </div>

        {/* Chief Guest Spotlight Card */}
        <div className="mb-12 bg-gradient-to-r from-slate-800/90 via-emerald-950/60 to-slate-800/90 border border-amber-500/30 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden max-w-4xl mx-auto">
          {/* Top Tricolor Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-white to-emerald-500" />
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-emerald-600 p-0.5 shadow-lg flex-shrink-0 flex items-center justify-center">
              <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-amber-400">
                <Award className="w-9 h-9" />
              </div>
            </div>

            <div className="text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Chief Guest of Honor</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-white">
                MLA Amin Patel
              </h3>
              <p className="text-emerald-400 font-semibold text-sm mt-1">
                Member of the Legislative Assembly (MLA)
              </p>
              <p className="text-slate-300 text-xs md:text-sm mt-2 leading-relaxed">
                We were deeply honored to welcome <strong className="text-white">MLA Amin Patel</strong> as our Chief Guest for the Flag Hoisting Ceremony. His inspiring address and support for community welfare energized our entire team and neighborhood families.
              </p>
            </div>

            {/* Quick Stat Badges */}
            <div className="flex md:flex-col gap-3 flex-shrink-0 w-full md:w-auto justify-center">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                <Flag className="w-4 h-4 text-amber-400" />
                <span>Flag Hoisting</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>500+ Citizens</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Showcase Container */}
        <div
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden bg-slate-950 border border-white/15 shadow-2xl group"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Active Image Display */}
          <div className="relative aspect-[16/10] md:aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
            <img
              src={independencePhotos[currentIndex]}
              alt={`Independence Day celebration photo ${currentIndex + 1}`}
              className="w-full h-full object-contain md:object-cover transition-all duration-700 ease-out"
            />

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30 pointer-events-none" />

            {/* Photo Counter & Title */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
                Photo {currentIndex + 1} of {totalPhotos}
              </span>
              <span className="hidden sm:inline-flex px-3 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                Chief Guest: MLA Amin Patel
              </span>
            </div>

            {/* Expand / Lightbox Button */}
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/65 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
              title="View full screen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Prev & Next Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/60 hover:bg-emerald-600 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg active:scale-95"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/60 hover:bg-emerald-600 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg active:scale-95"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Bottom Caption Bar */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row items-center justify-between gap-2 bg-slate-900/80 backdrop-blur-md p-3 sm:px-5 sm:py-3 rounded-2xl border border-white/10 text-xs text-slate-200">
              <span className="font-semibold text-white truncate text-center sm:text-left">
                🇮🇳 Independence Day Celebration with MLA Amin Patel & Community Members
              </span>
              <span className="text-[11px] text-amber-400 font-bold flex-shrink-0">
                Click photo to expand
              </span>
            </div>
          </div>

          {/* Thumbnail Preview Selector Bar */}
          <div className="bg-slate-900 p-3 md:p-4 border-t border-white/10 flex items-center gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-emerald-600">
            {independencePhotos.map((photo, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-xl overflow-hidden border-2 transition-all ${
                  idx === currentIndex
                    ? 'border-amber-400 scale-105 shadow-md shadow-amber-500/20'
                    : 'border-white/10 opacity-50 hover:opacity-100 hover:border-white/40'
                }`}
              >
                <img
                  src={photo}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* ════════════ FULLSCREEN LIGHTBOX MODAL ════════════ */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img
              src={independencePhotos[currentIndex]}
              alt={`Independence Day celebration full view ${currentIndex + 1}`}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center">
              <p className="text-white font-bold text-base font-serif">
                Independence Day Celebration · Chief Guest MLA Amin Patel
              </p>
              <p className="text-slate-400 text-xs mt-1">
                Photo {currentIndex + 1} of {totalPhotos}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
