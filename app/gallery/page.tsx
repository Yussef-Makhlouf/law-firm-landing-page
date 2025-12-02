"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { X, ChevronRight, ChevronLeft, Camera } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const galleryCategories = [
  { id: "all", label: "الكل" },
  { id: "office", label: "المكتب" },
  { id: "sessions", label: "الجلسات" },
  { id: "events", label: "الفعاليات" },
]

const galleryImages = [
  {
    src: "/hero.jpeg",
    alt: "مكتب المحاماة الرئيسي",
    title: "المكتب الرئيسي",
    category: "office",
  },


  {
    src: "/consultation-room-with-comfortable-seating.jpg",
    alt: "غرفة الاستشارات",
    title: "غرفة الاستشارات",
    category: "sessions",
  },


  {
     src: "/fest.jpeg",
    alt: "ندوة قانونية",
    title: "ندوة قانونية",
    category: "events",
  },

  {
    src: "/price.jpeg",
    alt: "حفل تكريم",
    title: "حفل تكريم",
    category: "events",
  },

  {
    src: "/hero2.jpeg",
    alt: "منطقة الاستقبال",
    title: "منطقة الاستقبال",
    category: "office",
  },
  {
    src: "/on-air.jpeg",
    alt: "شراكات ناجحة",
    title: "شراكات ناجحة",
    category: "events",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">معرض الصور</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              لمحة عن <span className="text-primary">المكتب</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              نفخر بتقديم بيئة عمل احترافية تليق بعملائنا الكرام
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground hover:border-primary/50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <Camera className="w-10 h-10 text-primary mx-auto mb-2" />
                      <span className="text-white font-semibold text-lg">{image.title}</span>
                    </div>
                  </div>
                  {/* Gold border on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-2xl transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 left-6 text-white hover:text-primary transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 bg-navy/50 rounded-full p-2"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 bg-navy/50 rounded-full p-2"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredImages[selectedImage].src || "/placeholder.svg"}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-center text-white mt-4 text-xl font-medium">{filteredImages[selectedImage].title}</p>
          </div>

          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70">
            {selectedImage + 1} / {filteredImages.length}
          </div>
        </motion.div>
      )}

      <Footer />
    </main>
  )
}
