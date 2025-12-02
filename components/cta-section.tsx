"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Phone, ArrowLeft } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-primary/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/50 bg-primary/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-medium">ابدأ رحلتك نحو النجاح</span>
          </div>

          {/* Main headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            ابدأ الآن واحصل على <span className="text-primary">استشارتك</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            نسعد بخدمتكم وتقديم الدعم القانوني والاقتصادي لضمان نجاح أعمالكم واتخاذ قراراتكم بثقة ووضوح
          </p>

          {/* CTA Buttons - Updated to use Link for navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="tel:+201093998856">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-lg font-semibold shadow-xl shadow-primary/30 w-full sm:w-auto group"
              >
                <Calendar className="w-5 h-5 ml-2" />
                حجز موعد
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-7 text-lg font-semibold w-full sm:w-auto bg-transparent"
              asChild
            >
              <a href="https://wa.me/201093998856">
                <Phone className="w-5 h-5 ml-2" />
                تواصل عبر الواتساب
              </a>
            </Button>
          </div>

          {/* Trust note */}
          <p className="mt-8 text-sm text-muted-foreground">استشارة أولى للنجاح • رد خلال 24 ساعة • سرية تامة</p>
        </motion.div>
      </div>
    </section>
  )
}
