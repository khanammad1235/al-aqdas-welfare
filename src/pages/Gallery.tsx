import { useState, useEffect, useRef } from 'react'
import PageHeader from '../components/PageHeader'
import { ImageLightbox } from '../components/ImageLightbox'
import { Image as ImageIcon, Video, Instagram, ExternalLink, Play } from 'lucide-react'

// Dynamically load all images and videos from the assets folders
const imageModules = import.meta.glob('../assets/gallery-images/*.{png,jpg,jpeg,webp,gif}', { eager: true, query: '?url', import: 'default' })
const galleryImages = Object.values(imageModules) as string[]

const videoModules = import.meta.glob('../assets/gallery-videos/*.{mp4,webm,ogg}', { eager: true, query: '?url', import: 'default' })
const galleryVideos = Object.values(videoModules) as string[]

const instagramReels = [
  {
    id: 'DcQZKiVPRSn',
    url: 'https://www.instagram.com/reel/DcQZKiVPRSn/?igsi=MWw3ZWt2ZmJ3YjI2Zw==',
    title: 'Al Aqdas Welfare Community Relief Drive',
    embedUrl: 'https://www.instagram.com/reel/DcQZKiVPRSn/embed',
  },
  {
    id: 'DcQY_5ax37p',
    url: 'https://www.instagram.com/reel/DcQY_5ax37p/?igsi=dnhyZXM4MnZlZXoz',
    title: 'Ration & Food Distribution Activity',
    embedUrl: 'https://www.instagram.com/reel/DcQY_5ax37p/embed',
  },
]

const IMAGES_PER_PAGE = 12

export default function Gallery() {
  const [visibleImages, setVisibleImages] = useState(IMAGES_PER_PAGE)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const loadMoreRef = useRef<HTMLDivElement>(null)

  // Automatic Infinite Scroll on photos as user scrolls
  useEffect(() => {
    if (visibleImages >= galleryImages.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleImages(prev => Math.min(prev + IMAGES_PER_PAGE, galleryImages.length))
        }
      },
      { threshold: 0.1, rootMargin: '250px' }
    )

    const currentRef = loadMoreRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [visibleImages])

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageHeader
        title="Our Gallery"
        bgImage="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&h=300&fit=crop"
      />

      <section className="max-w-[1170px] mx-auto px-4 mt-16">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Image Gallery */}
          <div className="w-full lg:w-[60%]">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Photo Gallery</h2>
                  <p className="text-sm font-medium text-emerald-600">{galleryImages.length} Photos</p>
                </div>
              </div>

              {galleryImages.length === 0 ? (
                <div className="p-12 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-slate-500">
                  <ImageIcon className="w-8 h-8 mx-auto mb-3 text-slate-400 opacity-50" />
                  <p className="font-medium">No images found.</p>
                  <p className="text-sm mt-1">Add photos to the <code>src/assets/gallery-images</code> folder.</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryImages.slice(0, visibleImages).map((img, index) => (
                      <div
                        key={index}
                        className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 cursor-pointer group shadow-sm hover:shadow-md transition-all relative"
                        onClick={() => openLightbox(index)}
                      >
                        <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-colors z-10" />
                        <img
                          src={img}
                          alt={`Gallery image ${index + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>

                  {visibleImages < galleryImages.length && (
                    <div ref={loadMoreRef} className="mt-8 py-4 text-center flex items-center justify-center gap-2 text-emerald-600 font-medium text-sm">
                      <div className="w-4 h-4 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
                      <span>Loading more photos...</span>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Video & Instagram Reels Gallery */}
          <div className="w-full lg:w-[40%]">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 sticky top-24">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-red-500 to-amber-500 rounded-2xl flex items-center justify-center text-white shadow-md">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Reels & Videos</h2>
                  <p className="text-sm font-medium text-pink-600">Official Instagram & Video Coverage</p>
                </div>
              </div>

              {/* Instagram Reels Section */}
              <div className="space-y-6 mb-8">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Instagram className="w-3.5 h-3.5 text-pink-600" /> Featured Instagram Reels
                </h3>
                {instagramReels.map((reel) => (
                  <div key={reel.id} className="bg-slate-900 rounded-2xl overflow-hidden shadow-md border border-slate-200 group relative">
                    <div className="aspect-[9/14] max-h-[420px] w-full bg-slate-950 flex items-center justify-center relative overflow-hidden">
                      <iframe
                        src={reel.embedUrl}
                        title={reel.title}
                        className="w-full h-full border-0"
                        allowTransparency={true}
                        allow="encrypted-media"
                      />
                    </div>

                    <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-800 truncate">{reel.title}</p>
                        <p className="text-[11px] font-medium text-slate-400">@alaqdaswelfare</p>
                      </div>
                      <a
                        href={reel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all active:scale-95"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        Watch
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Local Videos Section (if any) */}
              {galleryVideos.length > 0 && (
                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5 text-blue-600" /> Ground Coverage Videos
                  </h3>
                  <div className="flex flex-col gap-6">
                    {galleryVideos.map((video, index) => (
                      <div key={index} className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-900 group">
                        <video
                          controls
                          className="w-full aspect-video object-cover"
                        >
                          <source src={video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </section>

      <ImageLightbox
        images={galleryImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentIndex}
      />
    </div>
  )
}
