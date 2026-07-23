import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import ContactSidebar from '../components/ContactSidebar'
import { ImageLightbox } from '../components/ImageLightbox'
import { Newspaper } from 'lucide-react'

const mediaImages = [
  'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1546422904-90eab23c3d7e?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1546422904-90eab23c3d7e?w=400&h=500&fit=crop',
]

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
        bgImage="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&h=300&fit=crop"
      />

      <section className="max-w-[1170px] mx-auto px-4 mt-16">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Media Gallery */}
          <div className="w-full lg:w-[65%]">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                  <Newspaper className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Press Clippings</h2>
                  <p className="text-sm font-medium text-emerald-600">News & Announcements</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {mediaImages.map((img, index) => (
                  <div
                    key={index}
                    className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 cursor-pointer group shadow-sm hover:shadow-md transition-all relative border border-slate-100"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-colors z-10" />
                    <img
                      src={img}
                      alt={`Media clipping ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <ContactSidebar />
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
