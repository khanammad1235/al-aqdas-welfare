import { useState, useEffect, useRef } from 'react'
import PageHeader from '../components/PageHeader'
import { ImageLightbox } from '../components/ImageLightbox'
import { Image as ImageIcon, Video, Instagram, ExternalLink, Play, Grid3X3, LayoutGrid } from 'lucide-react'

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
  const [gridMode, setGridMode] = useState<'grid' | 'masonry'>('grid')
  const loadMoreRef = useRef<HTMLDivElement>(null)

  // Infinite scroll
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
    if (currentRef) observer.observe(currentRef)
    return () => { if (currentRef) observer.unobserve(currentRef) }
  }, [visibleImages])

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageHeader
        title="Our Gallery"
        subtitle="Moments of impact — captured from the field."
        bgImage="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&h=300&fit=crop"
      />

      {/* Stats bar */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-[1170px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <ImageIcon className="w-3.5 h-3.5 text-emerald-500" />
              <strong className="text-slate-800">{galleryImages.length}</strong> Photos
            </span>
            <span className="flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5 text-blue-500" />
              <strong className="text-slate-800">{galleryVideos.length + instagramReels.length}</strong> Videos & Reels
            </span>
          </div>
          {/* Grid toggle */}
          <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
            <button
              onClick={() => setGridMode('grid')}
              className={`w-8 h-8 rounded-md flex items-center justify-center transition-all ${gridMode === 'grid' ? 'bg-white shadow-sm text-primary' : 'text-slate-400 hover:text-slate-600'}`}
              title="Grid view"
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setGridMode('masonry')}
              className={`w-8 h-8 rounded-md flex items-center justify-center transition-all ${gridMode === 'masonry' ? 'bg-white shadow-sm text-primary' : 'text-slate-400 hover:text-slate-600'}`}
              title="Masonry view"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <section className="max-w-[1170px] mx-auto px-4 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Image Gallery */}
          <div className="w-full lg:w-[60%]">
            <div className="bg-white rounded-2xl p-5 md:p-7 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-100">
                <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center">
                  <ImageIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800 font-serif">Photo Gallery</h2>
                  <p className="text-xs text-emerald-600 font-semibold mt-0.5">{galleryImages.length} Photos</p>
                </div>
              </div>

              {galleryImages.length === 0 ? (
                <div className="p-14 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  <ImageIcon className="w-10 h-10 mx-auto mb-3 text-slate-300" />
                  <p className="font-semibold text-slate-500">No images found</p>
                  <p className="text-sm text-slate-400 mt-1">Add photos to <code className="text-xs">src/assets/gallery-images</code></p>
                </div>
              ) : (
                <>
                  {gridMode === 'grid' ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {galleryImages.slice(0, visibleImages).map((img, index) => (
                        <div
                          key={index}
                          className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 cursor-pointer group relative shadow-sm hover:shadow-md transition-all"
                          onClick={() => openLightbox(index)}
                        >
                          <img
                            src={img}
                            alt={`Gallery ${index + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 shadow-md">
                              <ImageIcon className="w-4 h-4 text-primary" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/50 text-white text-[10px] font-bold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            {index + 1} / {galleryImages.length}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Masonry-style — 2 columns with varying heights */
                    <div className="columns-2 md:columns-3 gap-3 space-y-3">
                      {galleryImages.slice(0, visibleImages).map((img, index) => (
                        <div
                          key={index}
                          className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer group relative shadow-sm hover:shadow-md transition-all mb-3"
                          onClick={() => openLightbox(index)}
                        >
                          <img
                            src={img}
                            alt={`Gallery ${index + 1}`}
                            loading="lazy"
                            className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                        </div>
                      ))}
                    </div>
                  )}

                  {visibleImages < galleryImages.length && (
                    <div ref={loadMoreRef} className="mt-8 py-5 text-center flex items-center justify-center gap-2 text-emerald-600 font-medium text-sm">
                      <div className="w-5 h-5 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
                      <span>Loading more photos...</span>
                    </div>
                  )}

                  {visibleImages >= galleryImages.length && galleryImages.length > IMAGES_PER_PAGE && (
                    <div className="mt-6 text-center text-xs text-slate-400 font-medium">
                      ✓ All {galleryImages.length} photos loaded
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Video & Reels Gallery */}
          <div className="w-full lg:w-[40%]">
            <div className="bg-white rounded-2xl p-5 md:p-7 shadow-sm border border-slate-100 sticky top-[90px]">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-100">
                <div className="w-11 h-11 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center shadow-sm">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800 font-serif">Reels & Videos</h2>
                  <p className="text-xs text-pink-600 font-semibold mt-0.5">Official Instagram Coverage</p>
                </div>
              </div>

              {/* Instagram Reels */}
              <div className="space-y-5 mb-6">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Instagram className="w-3.5 h-3.5 text-pink-500" /> Featured Reels
                </p>
                {instagramReels.map((reel) => (
                  <div key={reel.id} className="bg-slate-900 rounded-2xl overflow-hidden shadow-md border border-slate-800 group hover:border-pink-500/50 transition-all">
                    <div className="aspect-[9/14] max-h-[380px] w-full bg-slate-950 relative overflow-hidden">
                      <iframe
                        src={reel.embedUrl}
                        title={reel.title}
                        className="w-full h-full border-0"
                        allowTransparency={true}
                        allow="encrypted-media"
                      />
                    </div>
                    <div className="p-4 bg-slate-900 border-t border-white/10 flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white truncate">{reel.title}</p>
                        <p className="text-[11px] font-medium text-pink-400 mt-0.5">@alaqdaswelfare</p>
                      </div>
                      <a
                        href={reel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-pink-500 to-rose-600 hover:opacity-90 text-white rounded-xl text-xs font-bold shadow-sm transition-all active:scale-95"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        Watch
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Local Videos */}
              {galleryVideos.length > 0 && (
                <div className="space-y-4 pt-5 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5 text-blue-500" /> Ground Coverage Videos
                  </p>
                  <div className="flex flex-col gap-5">
                    {galleryVideos.map((video, index) => (
                      <div key={index} className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-900">
                        <video controls className="w-full aspect-video object-cover">
                          <source src={video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Follow CTA */}
              <div className="mt-5 pt-5 border-t border-slate-100">
                <a
                  href="https://www.instagram.com/alaqdaswelfare?igsh=MXBrdjNwNGhraDJvbQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white font-bold rounded-xl text-sm transition-all shadow-md"
                >
                  <Instagram className="w-4 h-4" />
                  Follow @alaqdaswelfare
                </a>
              </div>
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
