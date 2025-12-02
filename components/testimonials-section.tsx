"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "أحمد العتيبي",
    role: "الرئيس التنفيذي - شركة البناء المتقدمة",
    content:
      "تعاملنا مع مكتب المستشار محمد القاضي في عدة قضايا تجارية، وكانت النتائج دائماً ممتازة. احترافية عالية وخبرة متميزة.",
    rating: 5,
  },
  {
    name: "فهد الشمري",
    role: "مدير عام - مجموعة الاستثمار السعودية",
    content:
      "أفضل مكتب استشارات قانونية تعاملت معه. المستشار محمد القاضي يتمتع بفهم عميق للقوانين التجارية والاقتصادية.",
    rating: 5,
  },
  {
    name: "سارة القحطاني",
    role: "المؤسسة والمديرة - شركة تقنية ناشئة",
    content: "ساعدني المكتب في صياغة جميع العقود التأسيسية لشركتي بطريقة احترافية. أنصح بشدة بالتعامل معهم.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">آراء العملاء</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            ماذا يقول <span className="text-primary">عملاؤنا</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/30 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-white/80 leading-relaxed mb-6">{testimonial.content}</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-white/50 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
