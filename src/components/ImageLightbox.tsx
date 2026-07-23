import { ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog"

interface ImageLightboxProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (index: number) => void
}

export function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  if (!images || images.length === 0) return null

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-5xl w-full h-[80vh] p-0 overflow-hidden bg-transparent border-none shadow-none flex items-center justify-center"
        showCloseButton={true}
      >
        <DialogTitle className="sr-only">Image preview</DialogTitle>
        <div className="relative w-full h-full flex items-center justify-center group">
          <img
            src={images[currentIndex]}
            alt={`Gallery view ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain"
          />
          
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
