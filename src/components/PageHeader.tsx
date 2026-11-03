import { ChevronRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

interface PageHeaderProps {
  title: string
  subtitle?: string
  bgImage?: string
}

const breadcrumbMap: Record<string, string> = {
  '/': 'Home',
  '/overview': 'About Us',
  '/activities': 'Our Programs',
  '/documents': 'Documents & 80G',
  '/gallery': 'Gallery',
  '/media': 'Media Coverage',
  '/donation': 'Donate',
  '/contact': 'Contact Us',
  '/appeal': 'Ramadan Appeal',
}

export default function PageHeader({ title, subtitle, bgImage }: PageHeaderProps) {
  const location = useLocation()

  return (
    <section className="relative overflow-hidden bg-slate-900 py-12 md:py-16 text-white border-b border-slate-800">
      {/* Background image with overlay */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt=""
            className="w-full h-full object-cover opacity-20"
            loading="eager"
          />
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>
      )}

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 w-full relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 mb-3 text-xs text-slate-400">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          {location.pathname !== '/' && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span className="text-emerald-400 font-medium">
                {breadcrumbMap[location.pathname] || title}
              </span>
            </>
          )}
        </nav>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
