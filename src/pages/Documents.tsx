import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { FileText, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react'

// Dynamically load all document images from the assets/documents folder
// To add a document: just drop an image file into src/assets/documents/
const documentModules = import.meta.glob('../assets/documents/*.{png,jpg,jpeg,webp,pdf,gif}', { eager: true, query: '?url', import: 'default' })
const documents = Object.values(documentModules) as string[]

export default function Documents() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const prevDoc = () => setCurrentIndex((prev) => (prev - 1 + documents.length) % documents.length)
  const nextDoc = () => setCurrentIndex((prev) => (prev + 1) % documents.length)

  return (
    <div className="bg-background min-h-screen pb-20">
      <PageHeader
        title="Official Documents"
        bgImage="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&h=300&fit=crop"
      />

      <section className="max-w-[1200px] mx-auto px-4 mt-16">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2">Official Records</p>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary">Our Documents</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-4 mb-4" />
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Official documents, certificates, and records of Al Aqdas Welfare Association.
          </p>
        </div>

        {/* No documents placeholder */}
        {documents.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center mb-6">
              <FileText className="w-10 h-10 text-primary/30" />
            </div>
            <h3 className="text-xl font-serif font-bold text-primary mb-2">No Documents Yet</h3>
            <p className="text-slate-500 text-sm max-w-sm">
              To add documents, place your image files (JPG, PNG, WEBP) inside the folder:<br />
              <code className="mt-2 block bg-slate-100 text-primary px-3 py-2 rounded-lg text-xs font-mono">
                src/assets/documents/
              </code>
            </p>
          </div>
        ) : (
          <>
            <p className="text-sm text-slate-400 mb-6 text-right">{documents.length} document{documents.length !== 1 ? 's' : ''}</p>

            {/* Documents Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((src, index) => {
                const filename = src.split('/').pop()?.split('?')[0] ?? `Document ${index + 1}`
                const label = filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
                return (
                  <div
                    key={index}
                    onClick={() => openLightbox(index)}
                    className="group bg-white border border-slate-100 rounded-2xl overflow-hidden cursor-pointer hover:shadow-soft transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-slate-50">
                      <img
                        src={src}
                        alt={label}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3 shadow-sm">
                          <ZoomIn className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                    </div>
                </div>
                )
              })}
            </div>
          </>
        )}
      </section>

      {/* Lightbox */}
      {lightboxOpen && documents.length > 0 && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Prev */}
          {documents.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prevDoc() }}
              className="absolute left-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
          )}

          {/* Image */}
          <div onClick={(e) => e.stopPropagation()} className="max-w-3xl w-full max-h-[90vh] flex items-center justify-center">
            <img
              src={documents[currentIndex]}
              alt={`Document ${currentIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Next */}
          {documents.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); nextDoc() }}
              className="absolute right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          )}

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 text-white text-xs px-4 py-2 rounded-full">
            {currentIndex + 1} / {documents.length}
          </div>
        </div>
      )}
    </div>
  )
}
