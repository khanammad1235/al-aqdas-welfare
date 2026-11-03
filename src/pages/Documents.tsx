import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { FileText, ZoomIn, X, ChevronLeft, ChevronRight, Shield, Download } from 'lucide-react'

// Dynamically load all document images from the assets/documents folder
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
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageHeader
        title="Official Documents"
        subtitle="Our certificates, registrations, and official records — fully transparent."
        bgImage="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&h=300&fit=crop"
      />

      {/* Trust strip */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-6">
          {[
            'NGO Registration Certificate',
            '80G Tax Exemption',
            'Annual Audit Reports',
            'FCRA Compliance',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <Shield className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>

      <section className="max-w-[1200px] mx-auto px-4 mt-12">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-label mb-3 block">Official Records</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary">Our Documents</h2>
          <div className="divider-center mt-4 mb-4" />
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            All official documents, certificates, and records of Al Aqdas Welfare Association.
            Click any document to view it in full resolution.
          </p>
        </div>

        {documents.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-6">
              <FileText className="w-10 h-10 text-primary/30" />
            </div>
            <h3 className="text-xl font-serif font-bold text-primary mb-2">No Documents Yet</h3>
            <p className="text-slate-500 text-sm max-w-sm">
              To add documents, place your image files (JPG, PNG, WEBP) inside:
              <code className="mt-2 block bg-slate-100 text-primary px-3 py-2 rounded-lg text-xs font-mono">
                src/assets/documents/
              </code>
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-slate-500 font-medium">
                {documents.length} document{documents.length !== 1 ? 's' : ''} available
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {documents.map((src, index) => {
                const filename = src.split('/').pop()?.split('?')[0] ?? `Document ${index + 1}`
                const label = filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
                return (
                  <div
                    key={index}
                    className="group bg-white border border-slate-100 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    <div className="relative overflow-hidden bg-slate-50 flex-1" onClick={() => openLightbox(index)}>
                      <img
                        src={src}
                        alt={label}
                        className="w-full object-contain group-hover:scale-105 transition-transform duration-500"
                        style={{ minHeight: '200px', maxHeight: '280px' }}
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100 bg-white rounded-xl px-3 py-2 flex items-center gap-2 shadow-md">
                          <ZoomIn className="w-4 h-4 text-primary" />
                          <span className="text-xs font-bold text-primary">View</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-t border-slate-100">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="w-7 h-7 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0">
                            <FileText className="w-3.5 h-3.5 text-primary/60" />
                          </div>
                          <p className="text-xs font-semibold text-slate-700 capitalize truncate">{label}</p>
                        </div>
                        <a
                          href={src}
                          download
                          onClick={(e) => e.stopPropagation()}
                          className="flex-shrink-0 w-7 h-7 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 flex items-center justify-center transition-colors"
                          title="Download"
                        >
                          <Download className="w-3.5 h-3.5 text-emerald-600" />
                        </a>
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
          className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {documents.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevDoc() }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextDoc() }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </>
          )}

          <div onClick={(e) => e.stopPropagation()} className="max-w-3xl w-full max-h-[90vh] flex flex-col items-center gap-4">
            <img
              src={documents[currentIndex]}
              alt={`Document ${currentIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="flex items-center gap-3">
              <span className="bg-white/10 text-white text-xs px-4 py-2 rounded-full font-medium">
                {currentIndex + 1} / {documents.length}
              </span>
              <a
                href={documents[currentIndex]}
                download
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs px-4 py-2 rounded-full font-medium transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
