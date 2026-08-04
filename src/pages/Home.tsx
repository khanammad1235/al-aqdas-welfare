import {
  Heart, Users, GraduationCap, UtensilsCrossed, CheckCircle2,
  ChevronRight, BookOpen, HeartPulse, Droplets, ShieldAlert,
  Quote, ArrowRight, Sparkles, ChevronLeft
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef, useCallback } from 'react'

/* ─── Data ─────────────────────────────────────────────────── */

// Dynamically load gallery images from assets
const galleryPhotoModules = import.meta.glob('../assets/gallery-images/*.{png,jpg,jpeg,webp,gif}', { eager: true, query: '?url', import: 'default' })
const localGalleryPhotos = Object.values(galleryPhotoModules) as string[]

const heroSlides = [
  {
    img: localGalleryPhotos[0] || 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&h=700&fit=crop',
    tag: 'Food Aid & Ration Drive',
    badgeVal: '5,000+',
    badgeText: 'Families Supported',
    title: 'Nourishing Families in Need',
  },
  {
    img: localGalleryPhotos[4] || 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&h=700&fit=crop',
    tag: 'Education Initiative',
    badgeVal: '500+',
    badgeText: 'Children Educated',
    title: 'Empowering Young Minds',
  },
  {
    img: localGalleryPhotos[12] || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000&h=700&fit=crop',
    tag: 'Medical Health Camps',
    badgeVal: '1,200+',
    badgeText: 'Patients Treated',
    title: 'Healthcare for Everyone',
  },
  {
    img: localGalleryPhotos[18] || 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1000&h=700&fit=crop',
    tag: 'Community Relief',
    badgeVal: '20,000+',
    badgeText: 'Meals Distributed',
    title: 'Relief When It Matters Most',
  },
]

const carouselCauses = [
  {
    title: 'Ramadan Food Distribution',
    desc: 'Providing essential food kits to families in need during the holy month of Ramadan.',
    img: localGalleryPhotos[1] || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&h=420&fit=crop',
    raised: 245000,
    goal: 500000,
    tag: 'Food Aid',
    color: 'from-amber-500 to-amber-700',
  },
  {
    title: 'Education for Needy Children',
    desc: 'Scholarships, uniforms and school supplies for 500+ underprivileged students across Mumbai.',
    img: localGalleryPhotos[5] || 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=700&h=420&fit=crop',
    raised: 180000,
    goal: 400000,
    tag: 'Education',
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    title: 'Winter Relief Blankets',
    desc: 'Warm blankets and winter kits distributed to homeless families and elderly citizens.',
    img: localGalleryPhotos[8] || 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=700&h=420&fit=crop',
    raised: 90000,
    goal: 200000,
    tag: 'Disaster Relief',
    color: 'from-sky-500 to-sky-700',
  },
  {
    title: 'Free Medical Health Camps',
    desc: 'Monthly camps providing free check-ups, medicines and specialist consultations.',
    img: localGalleryPhotos[15] || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&h=420&fit=crop',
    raised: 135000,
    goal: 300000,
    tag: 'Healthcare',
    color: 'from-rose-500 to-rose-700',
  },
]

const stats = [
  { icon: Users,          value: 5000,  suffix: '+', label: 'Families Supported' },
  { icon: Users,          value: 1000,  suffix: '+', label: 'Volunteers' },
  { icon: GraduationCap, value: 500,   suffix: '+', label: 'Students Helped' },
  { icon: UtensilsCrossed,value: 20000, suffix: '+', label: 'Meals Distributed' },
  { icon: CheckCircle2,  value: 50,    suffix: '+', label: 'Projects Completed' },
]

const programs = [
  {
    icon: BookOpen,
    title: 'Education',
    color: 'from-emerald-600 to-emerald-800',
    desc: 'We provide quality education and school supplies to underprivileged children.',
    detail: 'Scholarships, stationery kits, uniform support, and after-school tutoring for 500+ students annually.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    color: 'from-rose-600 to-rose-800',
    desc: 'Free medical camps, health check-ups and medicines for those in need.',
    detail: 'Monthly medical camps reaching 1,200+ patients, free medicine distribution and specialist consultations.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food Aid',
    color: 'from-amber-600 to-amber-800',
    desc: 'We distribute food kits and meals to the hungry and needy families.',
    detail: '20,000+ meals distributed, ration kits for Ramadan, and daily community kitchen serving 100 families.',
  },
  {
    icon: Users,
    title: 'Orphan Support',
    color: 'from-violet-600 to-violet-800',
    desc: 'Supporting orphans with education, care, and a brighter future.',
    detail: 'Sponsorship programs, mentorship, skill-building workshops and festive celebrations for 300+ orphans.',
  },
  {
    icon: Droplets,
    title: 'Community Dev',
    color: 'from-cyan-600 to-cyan-800',
    desc: 'Working for clean water, hygiene, and community empowerment.',
    detail: 'Water purification projects, hygiene drives, women empowerment and vocational training programs.',
  },
  {
    icon: ShieldAlert,
    title: 'Disaster Relief',
    color: 'from-orange-600 to-orange-800',
    desc: 'Immediate aid and relief support during natural disasters.',
    detail: 'Rapid response teams, emergency ration kits, temporary shelter and rehabilitation support.',
  },
]

const howItWorks = [
  {
    step: '01',
    icon: Heart,
    title: 'You Donate',
    desc: 'Make a secure one-time or monthly donation in minutes. Every rupee is recorded transparently.',
    color: 'text-rose-400',
    border: 'border-rose-400/30',
  },
  {
    step: '02',
    icon: Users,
    title: 'We Identify Need',
    desc: 'Our on-ground volunteers identify the most vulnerable families and individuals in the community.',
    color: 'text-amber-400',
    border: 'border-amber-400/30',
  },
  {
    step: '03',
    icon: UtensilsCrossed,
    title: 'Aid Is Delivered',
    desc: 'Food kits, medicines, school supplies and emergency relief reach those in need — fast and directly.',
    color: 'text-emerald-400',
    border: 'border-emerald-400/30',
  },
  {
    step: '04',
    icon: CheckCircle2,
    title: 'Impact Reported',
    desc: 'You receive a full transparency report. Every donation is accounted for and lives changed are documented.',
    color: 'text-sky-400',
    border: 'border-sky-400/30',
  },
]

const testimonials = [
  {
    name: 'Fatima Shaikh',
    role: 'Beneficiary, Food Aid Program',
    text: 'Al Aqdas came like a blessing during our hardest time. They provided food and hope when we had nothing left.',
    initials: 'FS',
    color: 'bg-emerald-600',
  },
  {
    name: 'Mohammed Irfan',
    role: 'Volunteer since 2021',
    text: 'Volunteering here changed my perspective on life. The team is incredibly dedicated and the impact is real.',
    initials: 'MI',
    color: 'bg-amber-600',
  },
  {
    name: 'Zainab Ansari',
    role: 'Donor, Education Fund',
    text: 'I donate monthly knowing every rupee is used wisely. Seeing children go to school because of our support is priceless.',
    initials: 'ZA',
    color: 'bg-rose-600',
  },
]

const heroWords = ['Compassion', 'Dignity', 'Hope', 'Justice', 'Kindness']



/* ─── Hooks ─────────────────────────────────────────────────── */

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    const start = performance.now()
    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [active, target, duration])
  return count
}

/* ─── Sub-components ────────────────────────────────────────── */

function HeroCarousel({ heroImgRef }: { heroImgRef: React.RefObject<HTMLDivElement | null> }) {
  const [slideIdx, setSlideIdx] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const total = heroSlides.length

  const changeSlide = useCallback((nextIdx: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setSlideIdx(nextIdx)
      setIsTransitioning(false)
    }, 300)
  }, [isTransitioning])

  const nextSlide = useCallback(() => {
    changeSlide((slideIdx + 1) % total)
  }, [slideIdx, total, changeSlide])

  const prevSlide = useCallback(() => {
    changeSlide((slideIdx - 1 + total) % total)
  }, [slideIdx, total, changeSlide])

  // Touch swipe logic for mobile
  const minSwipeDistance = 40

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(nextSlide, 4500)
    return () => clearInterval(interval)
  }, [isPlaying, nextSlide])

  const current = heroSlides[slideIdx]

  return (
    <div
      ref={heroImgRef}
      className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white/10 h-[340px] sm:h-[440px] lg:h-[500px] w-full group select-none touch-pan-y"
      style={{ transition: 'transform 0.15s ease-out' }}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background slide images */}
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            idx === slideIdx
              ? 'opacity-100 scale-105 z-10'
              : 'opacity-0 scale-100 z-0'
          }`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
            draggable={false}
          />
          {/* Subtle dark gradient overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
      ))}

      {/* Slide Badge Tag at Top Left */}
      <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-20 transition-all duration-500">
        <span className="inline-flex items-center gap-1.5 bg-primary/90 backdrop-blur-md border border-accent/40 text-accent text-[11px] sm:text-xs font-bold px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full shadow-lg">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent" />
          {current.tag}
        </span>
      </div>

      {/* Chevron Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 bg-black/40 hover:bg-primary/90 text-white rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110 active:scale-95"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 bg-black/40 hover:bg-primary/90 text-white rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110 active:scale-95"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Floating Overlay Badge & Indicators at Bottom */}
      <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 z-20 flex flex-row items-end justify-between gap-2">
        <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-xl border border-white/40 flex items-center gap-2.5 sm:gap-3.5 max-w-[190px] sm:max-w-xs transition-all duration-500 hover:scale-105">
          <div className="w-8 h-8 sm:w-11 sm:h-11 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-accent fill-current" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] sm:text-xs text-slate-500 font-medium truncate">{current.badgeText}</p>
            <p className="text-base sm:text-xl font-bold font-serif text-primary">{current.badgeVal}</p>
          </div>
        </div>

        {/* Thumbnail Indicators */}
        <div className="flex items-center gap-1.5 sm:gap-2 bg-black/50 backdrop-blur-md border border-white/20 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => changeSlide(i)}
              className={`rounded-full transition-all duration-300 ${
                i === slideIdx
                  ? 'w-5 sm:w-7 h-2 sm:h-2.5 bg-accent shadow-md'
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/40 hover:bg-white/70'
              }`}
              title={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Top Animated Progress Line */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/20">
        <div
          key={slideIdx + '-' + isPlaying}
          className={`h-full bg-accent transition-all duration-300 ${
            isPlaying ? 'w-full ease-linear' : 'w-0'
          }`}
          style={{
            transitionDuration: isPlaying ? '4500ms' : '0ms',
          }}
        />
      </div>
    </div>
  )
}

function StatCard({ icon: Icon, value, suffix, label }: typeof stats[0]) {
  const { ref, inView } = useInView()
  const count = useCountUp(value, inView)
  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center px-4">
      <div className={`w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mb-4 transition-all duration-700 ${inView ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className={`text-2xl md:text-3xl font-bold font-serif mb-1 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {count.toLocaleString('en-IN')}{suffix}
      </h3>
      <p className={`text-xs tracking-wider text-white/80 uppercase transition-all duration-700 delay-200 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        {label}
      </p>
    </div>
  )
}

function ProgramCard({ prog, idx }: { prog: typeof programs[0]; idx: number }) {
  const [flipped, setFlipped] = useState(false)
  const { ref, inView } = useInView(0.1)
  const Icon = prog.icon
  return (
    <div
      ref={ref}
      className="h-64 cursor-pointer"
      style={{
        perspective: '1000px',
        transitionDelay: `${idx * 80}ms`,
      }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(f => !f)}
    >
      <div
        className={`relative w-full h-full transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 0.6s cubic-bezier(0.4,0.2,0.2,1)',
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-white border border-slate-100 rounded-lg p-8 text-center flex flex-col items-center justify-center gap-4 shadow-soft"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${prog.color} flex items-center justify-center shadow-md`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold font-serif text-primary">{prog.title}</h3>
          <p className="text-sm text-slate-500 leading-relaxed">{prog.desc}</p>
          <span className="text-xs text-accent font-semibold flex items-center gap-1">
            Hover to learn more <ChevronRight className="w-3 h-3" />
          </span>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${prog.color} rounded-lg p-8 flex flex-col items-center justify-center gap-4 shadow-md`}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <Icon className="w-10 h-10 text-white/80" />
          <p className="text-sm text-white/90 leading-relaxed text-center">{prog.detail}</p>
          <Link
            to="/activities"
            onClick={e => e.stopPropagation()}
            className="mt-2 px-5 py-2 bg-white/20 hover:bg-white/30 text-white text-xs font-bold rounded-full border border-white/30 transition-colors flex items-center gap-2"
          >
            Learn More <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  )
}



function CausesCarousel({ active }: { active: boolean }) {
  const [idx, setIdx] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const total = carouselCauses.length

  const go = useCallback((next: number, dir: 'left' | 'right') => {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setIdx(next)
      setAnimating(false)
    }, 350)
  }, [animating])

  const prev = () => go((idx - 1 + total) % total, 'left')
  const next = () => go((idx + 1) % total, 'right')

  // Touch swipe logic for mobile
  const minSwipeDistance = 40

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) {
      next()
    } else if (isRightSwipe) {
      prev()
    }
  }

  // Auto-advance
  useEffect(() => {
    if (!active) return
    const t = setInterval(() => go((idx + 1) % total, 'right'), 4000)
    return () => clearInterval(t)
  }, [active, idx, go, total])

  const cause = carouselCauses[idx]

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-secondary/30 backdrop-blur-sm shadow-2xl select-none touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          key={idx}
          src={cause.img}
          alt={cause.title}
          className={`w-full h-full object-cover transition-all duration-350 ${
            animating
              ? direction === 'right'
                ? '-translate-x-full opacity-0'
                : 'translate-x-full opacity-0'
              : 'translate-x-0 opacity-100'
          }`}
          style={{ transition: 'transform 0.35s ease, opacity 0.35s ease' }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {/* Tag badge */}
        <span className={`absolute top-4 left-4 text-xs font-bold text-white px-3 py-1 rounded-full bg-gradient-to-r ${cause.color} shadow-md`}>
          {cause.tag}
        </span>
        {/* Slide counter */}
        <span className="absolute top-4 right-4 text-xs text-white/70 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
          {idx + 1} / {total}
        </span>
        {/* Nav arrows on image */}
        <button
          onClick={prev}
          className="absolute left-3 bottom-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 bottom-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          key={`title-${idx}`}
          className={`text-lg font-bold font-serif mb-2 transition-all duration-350 ${
            animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
          }`}
        >
          {cause.title}
        </h3>
        <p
          key={`desc-${idx}`}
          className={`text-sm text-white/70 mb-5 leading-relaxed transition-all duration-350 delay-75 ${
            animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
          }`}
        >
          {cause.desc}
        </p>



        <Link
          to="/donation"
          className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 active:scale-95 text-white font-bold py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <Heart className="w-4 h-4 fill-current" />
          DONATE TO THIS CAUSE
        </Link>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {carouselCauses.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > idx ? 'right' : 'left')}
              className={`rounded-full transition-all duration-300 ${
                i === idx ? 'w-6 h-2 bg-accent' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Main Component ────────────────────────────────────────── */

export default function Home() {

  const [heroWordIdx, setHeroWordIdx] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const heroImgRef = useRef<HTMLDivElement>(null)
  const { ref: statsRef } = useInView()
  const { ref: causesRef, inView: causesInView } = useInView()
  const { ref: testimonialRef, inView: testimonialInView } = useInView()

  // Hero entrance
  useEffect(() => {
    const t = setTimeout(() => setIsHeroVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  // Typewriter
  useEffect(() => {
    const word = heroWords[heroWordIdx]
    const speed = isDeleting ? 50 : 90
    const t = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(word.slice(0, typedText.length + 1))
        if (typedText.length + 1 === word.length) {
          setTimeout(() => setIsDeleting(true), 1400)
        }
      } else {
        setTypedText(word.slice(0, typedText.length - 1))
        if (typedText.length === 0) {
          setIsDeleting(false)
          setHeroWordIdx(i => (i + 1) % heroWords.length)
        }
      }
    }, speed)
    return () => clearTimeout(t)
  }, [typedText, isDeleting, heroWordIdx])

  // Hero parallax on mouse move
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = heroImgRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    el.style.transform = `perspective(900px) rotateY(${dx * 5}deg) rotateX(${-dy * 4}deg) scale(1.02)`
  }, [])
  const handleMouseLeave = useCallback(() => {
    const el = heroImgRef.current
    if (el) el.style.transform = 'perspective(900px) rotateY(0) rotateX(0) scale(1)'
  }, [])

  // Testimonial auto-cycle
  useEffect(() => {
    if (!testimonialInView) return
    const t = setInterval(() => setTestimonialIdx(i => (i + 1) % testimonials.length), 4500)
    return () => clearInterval(t)
  }, [testimonialInView])


  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">

      {/* ══════════════ HERO ══════════════ */}
      <section
        ref={heroRef}
        className="relative w-full bg-background overflow-hidden flex items-center pt-10 pb-20 lg:py-0 lg:min-h-[680px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Decorative blobs */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

        {/* Curved background */}
        <div className="absolute right-0 top-0 w-full lg:w-[60%] h-full bg-primary z-0 rounded-l-[100px] lg:rounded-l-[200px] hidden md:block" />
        <div className="absolute inset-0 bg-primary/5 md:hidden z-0" />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-accent/20 pointer-events-none hidden lg:block"
            style={{
              width: `${6 + (i % 5) * 4}px`,
              height: `${6 + (i % 5) * 4}px`,
              top: `${10 + (i * 7) % 80}%`,
              left: `${5 + (i * 13) % 55}%`,
              animation: `float ${3 + (i % 4)}s ease-in-out ${i * 0.3}s infinite alternate`,
            }}
          />
        ))}

        <div className="max-w-[1400px] mx-auto px-4 w-full relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* Text Content */}
          <div className={`w-full lg:w-[45%] xl:w-[40%] flex flex-col pt-8 lg:pt-0 transition-all duration-1000 ${isHeroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 w-fit">
              <Sparkles className="w-3 h-3" />
              Serving Since 2015
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-primary font-serif leading-[1.1] mb-4">
              Serving Humanity<br />
              with{' '}
              <span className="text-accent relative">
                <span style={{ minWidth: '220px', display: 'inline-block' }}>{typedText}</span>
                <span className="inline-block w-0.5 h-[1em] bg-accent ml-1 align-middle animate-pulse" />
              </span>
            </h1>

            <div className="w-16 h-0.5 bg-accent mb-6" />

            <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-md">
              We are committed to uplifting lives through education, healthcare, food aid, orphan support and community development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/donation"
                className="group px-8 py-3.5 bg-primary hover:bg-secondary text-white font-bold tracking-wide rounded transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Heart className="w-4 h-4 fill-current group-hover:scale-125 transition-transform" />
                DONATE NOW
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-white border border-primary/20 hover:border-primary text-primary font-bold tracking-wide rounded transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <Users className="w-4 h-4" />
                BECOME A VOLUNTEER
              </Link>
            </div>

            {/* Quick impact strip */}
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>100% Transparent</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-accent" />
                <span>Verified NGO</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-accent fill-current" />
                <span>9 Years of Service</span>
              </div>
            </div>
          </div>

          {/* Interactive Hero Image Carousel */}
          <div className={`w-full lg:w-[55%] xl:w-[60%] relative transition-all duration-1000 delay-200 ${isHeroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <HeroCarousel heroImgRef={heroImgRef} />
          </div>
        </div>
      </section>

      {/* ══════════════ STATS STRIP ══════════════ */}
      <section ref={statsRef} className="bg-primary text-white relative z-20 border-t-4 border-accent">
        <div className="max-w-[1400px] mx-auto px-4 py-8 md:py-12">
          <div className="text-center mb-10">
            <p className="font-serif text-lg md:text-xl text-accent/90 italic">
              "And whoever saves a life, it is as if he had saved all of mankind."
            </p>
            <p className="text-sm font-semibold tracking-wide text-white/60 mt-2">(Quran 5:32)</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <StatCard key={idx} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ PROGRAMS ══════════════ */}
      <section className="bg-background py-20 relative">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230b3b2c\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
        />
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary">Our Programs</h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
            <p className="text-slate-500 text-sm mt-4 max-w-md mx-auto">
              Hover over a card to discover the real impact behind each of our programs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog, idx) => (
              <ProgramCard key={idx} prog={prog} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CAUSES + DONATION ══════════════ */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-primary to-primary pointer-events-none" />

        <div ref={causesRef} className="max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

            {/* How Your Donation Helps */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold font-serif mb-2">How Your Donation Helps</h2>
              <p className="text-sm text-white/70 mb-10">Every contribution goes directly to those who need it most — transparently and with accountability.</p>
              <div className="space-y-5">
                {howItWorks.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={i}
                      className={`flex items-start gap-4 transition-all duration-700 ${causesInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                      style={{ transitionDelay: `${i * 120}ms` }}
                    >
                      {/* Step circle */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full border ${item.border} bg-white/5 flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-bold tracking-widest ${item.color}`}>{item.step}</span>
                          <h4 className="text-sm font-bold text-white">{item.title}</h4>
                        </div>
                        <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Center Visual */}
            <div className="lg:col-span-1 hidden lg:flex justify-center relative">
              <div className="absolute inset-0 bg-secondary/50 rounded-t-full border-t-2 border-accent/30 scale-90 origin-bottom" />
              <div className="relative text-center z-10 pt-10">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-accent/20 mb-6 shadow-xl">
                  <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=400&fit=crop" alt="Growth" className="w-full h-full object-cover" />
                </div>
                <p className="font-serif text-lg font-medium leading-snug">
                  Every act of kindness<br />is a seed of reward.
                </p>
                <p className="text-accent font-bold mt-2">Donate Now!</p>
              </div>
            </div>

            {/* Causes Carousel */}
            <div className="lg:col-span-1">
              <CausesCarousel active={causesInView} />
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════ TESTIMONIALS ══════════════ */}
      <section ref={testimonialRef} className="bg-background py-20">
        <div className="max-w-[900px] mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2">Voices of Hope</p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary">What People Say</h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
          </div>

          <div className={`relative transition-all duration-700 ${testimonialInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Cards */}
            <div className="overflow-hidden">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ${i === testimonialIdx ? 'opacity-100 translate-x-0 block' : 'opacity-0 absolute top-0 left-0 w-full'}`}
                >
                  <div className="bg-white border border-slate-100 rounded-2xl p-8 md:p-12 shadow-soft text-center">
                    <Quote className="w-10 h-10 text-accent/30 mx-auto mb-6" />
                    <p className="text-lg md:text-xl font-serif text-slate-700 leading-relaxed mb-8 italic">
                      "{t.text}"
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <div className={`w-12 h-12 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                        {t.initials}
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-primary">{t.name}</p>
                        <p className="text-xs text-slate-400">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setTestimonialIdx(i => (i - 1 + testimonials.length) % testimonials.length)}
                className="w-9 h-9 rounded-full border border-slate-200 hover:border-primary flex items-center justify-center text-slate-400 hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  className={`rounded-full transition-all duration-300 ${i === testimonialIdx ? 'w-6 h-2.5 bg-accent' : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'}`}
                />
              ))}
              <button
                onClick={() => setTestimonialIdx(i => (i + 1) % testimonials.length)}
                className="w-9 h-9 rounded-full border border-slate-200 hover:border-primary flex items-center justify-center text-slate-400 hover:text-primary transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ CALL TO ACTION ══════════════ */}
      <section className="bg-primary py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-[800px] mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">
            Ready to Make a <span className="text-accent">Difference?</span>
          </h2>
          <p className="text-white/70 mb-10 text-lg">
            Join thousands of supporters who are transforming lives every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donation"
              className="group px-10 py-4 bg-accent hover:bg-accent/90 text-white font-bold tracking-wide rounded transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Heart className="w-4 h-4 fill-current group-hover:scale-125 transition-transform" />
              DONATE NOW
            </Link>
            <Link
              to="/activities"
              className="px-10 py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold tracking-wide rounded transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              <ArrowRight className="w-4 h-4" />
              EXPLORE PROGRAMS
            </Link>
          </div>
        </div>
      </section>

      {/* Float animation keyframes injected inline */}
      <style>{`
        @keyframes float {
          from { transform: translateY(0px) scale(1); opacity: 0.4; }
          to   { transform: translateY(-18px) scale(1.1); opacity: 0.8; }
        }
      `}</style>

    </div>
  )
}
