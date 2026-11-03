import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import ContactSidebar from '../components/ContactSidebar'
import { ImageLightbox } from '../components/ImageLightbox'
import { Newspaper, Calendar, ExternalLink, ZoomIn, Radio, Tv } from 'lucide-react'

const mediaCoverages = [
  {
    outlet: 'Mumbai Mirror',
    type: 'print' as const,
    date: 'March 2024',
    headline: 'Al Aqdas Welfare distributes ration kits to 500 families in Mandvi',
    img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=500&fit=crop',
  },
  {
    outlet: 'Urdu Times',
    type: 'print' as const,
    date: 'January 2024',
    headline: 'Free Medical Camp serves 300 patients at Dana Bandar locality',
    img: 'https://images.unsplash.com/photo-1546422904-90eab23c3d7e?w=400&h=500&fit=crop',
  },
  {
    outlet: 'Maharashtra Patrika',
    type: 'print' as const,
    date: 'Nov 2023',
    headline: 'Al Aqdas English School celebrates 17 years of free education',
    img: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&h=500&fit=crop',
  },
  {
    outlet: 'TV9 Maharashtra',
    type: 'tv' as const,
    date: 'Aug 2023',
    headline: 'Independence Day celebrations: NGO distributes gifts to orphans',
    img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=500&fit=crop',
  },
  {
    outlet: 'Radio Mirchi 98.3',
    type: 'radio' as const,
    date: 'Ramadan 2023',
    headline: 'Community iftar and ration drive — Live coverage',
    img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=500&fit=crop',
  },
  {
    outlet: 'Inquilab',
    type: 'print' as const,
    date: 'Dec 2022',
    headline: 'Winter relief: Blankets and warm meals distributed to 200 families',
    img: 'https://images.unsplash.com/photo-1546422904-90eab23c3d7e?w=400&h=500&fit=crop',
  },
]

const mediaImages = mediaCoverages.map(m => m.img)

const typeIcon: Record<string, typeof Newspaper> = {
  print: Newspaper,
  tv: Tv,
  radio: Radio,
}

const typeLabel: Record<string, string> = {
  print: 'Print',
  tv: 'TV',
  radio: 'Radio',
}

const typeBg: Record<string, string> = {
  print: 'bg-blue-50 text-blue-700 border-blue-200',
  tv: 'bg-rose-50 text-rose-700 border-rose-200',
  radio: 'bg-purple-50 text-purple-700 border-purple-200',
}

export default function Media() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageHeader
        title="Media Coverage"
        subtitle="News, press clippings and announcements featuring Al Aqdas Welfare Association."
        bgImage="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&h=300&fit=crop"
      />

      <section className="max-w-[1170px] mx-auto px-4 mt-12">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Media Gallery */}
          <div className="w-full lg:w-[65%]">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              {/* Header */}
              <div className="bg-primary px-6 py-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                  <Newspaper className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-lg font-serif leading-none">Press Clippings</h2>
                  <p className="text-white/60 text-xs mt-0.5">{mediaCoverages.length} Media Coverages</p>
                </div>
              </div>

              <div className="p-5 md:p-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {mediaCoverages.map((item, index) => {
                    const Icon = typeIcon[item.type]
                    return (
                      <div
                        key={index}
                        className="group bg-white border border-slate-100 rounded-2xl overflow-hidden cursor-pointer hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                      >
                        {/* Image */}
                        <div
                          className="relative aspect-[3/2] overflow-hidden bg-slate-100"
                          onClick={() => openLightbox(index)}
                        >
                          <img
                            src={item.img}
                            alt={item.headline}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100 bg-white rounded-xl px-3 py-2 flex items-center gap-2 shadow-md">
                              <ZoomIn className="w-4 h-4 text-primary" />
                              <span className="text-xs font-bold text-primary">View</span>
                            </div>
                          </div>
                          {/* Type badge */}
                          <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border ${typeBg[item.type]} bg-opacity-90 backdrop-blur-sm`}>
                            <Icon className="w-3 h-3" />
                            {typeLabel[item.type]}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-slate-800">{item.outlet}</span>
                            <div className="flex items-center gap-1 text-[11px] text-slate-400">
                              <Calendar className="w-3 h-3" />
                              {item.date}
                            </div>
                          </div>
                          <p className="text-sm text-slate-600 leading-snug font-medium line-clamp-2">{item.headline}</p>
                          <button
                            onClick={() => openLightbox(index)}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-accent mt-2.5 transition-colors group/link"
                          >
                            View Clipping
                            <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[35%] shrink-0">
            <ContactSidebar />
          </div>
        </div>
      </section>

      <ImageLightbox
        images={mediaImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentIndex}
      />
    </div>
  )
}
