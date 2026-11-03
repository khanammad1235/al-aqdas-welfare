import { ChevronRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface PageHeaderProps {
  title: string
  subtitle?: string
  bgImage?: string
}

const breadcrumbMap: Record<string, string> = {
  '/': 'Home',
  '/overview': 'About Us',
  '/activities': 'Our Work',
  '/documents': 'Documents',
  '/gallery': 'Gallery',
  '/media': 'Media',
  '/donation': 'Donate',
  '/contact': 'Contact',
  '/appeal': 'Appeal',
}

export default function PageHeader({ title, subtitle, bgImage }: PageHeaderProps) {
  const location = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative overflow-hidden bg-primary min-h-[260px] flex items-center"
    >
      {/* Background image with overlay */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt=""
            className="w-full h-full object-cover opacity-20"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
      )}

      {/* Decorative shapes */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute -left-20 bottom-0 w-60 h-60 bg-secondary/30 rounded-full blur-2xl pointer-events-none z-0" />
      <div className="absolute right-10 bottom-5 w-32 h-32 border border-white/10 rounded-full z-0" />
      <div className="absolute right-20 bottom-10 w-16 h-16 border border-accent/15 rounded-full z-0" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full relative z-10 py-14">
        {/* Breadcrumb */}
        <nav className={`flex items-center gap-1.5 mb-5 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link to="/" className="text-white/50 hover:text-accent text-xs font-medium transition-colors">
            Home
          </Link>
          {location.pathname !== '/' && (
            <>
              <ChevronRight className="w-3 h-3 text-white/30 flex-shrink-0" />
              <span className="text-accent text-xs font-semibold">
                {breadcrumbMap[location.pathname] || title}
              </span>
            </>
          )}
        </nav>

        {/* Title */}
        <h1
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif leading-tight transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {title}
        </h1>

        {/* Accent line */}
        <div className={`mt-4 flex items-center gap-3 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="w-16 h-0.5 bg-accent rounded-full" />
          {subtitle && (
            <p className="text-white/65 text-sm font-medium">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  )
}
