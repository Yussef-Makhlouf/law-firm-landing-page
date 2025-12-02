"use client"

import { Button } from "@/components/ui/button"
import { Phone, Calendar, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero2.jpeg')",
        }}
      />
      
      {/* Gradient Overlay - Left to Right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen flex items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/50 bg-primary/15 backdrop-blur-sm w-fit"
              >
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-white text-sm font-semibold">استشارات متميزة</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                مكتب المستشار <br />
                <span className="text-primary">محمد القاضي</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg text-white/80 max-w-xl leading-relaxed font-light"
              >
                استشارات قانونية واقتصادية متكاملة للشركات والمؤسسات، وفق أعلى المعايير المهنية
              </motion.p>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-3 pt-4"
              >
                {[
                  "خبرة أكثر من 10 سنوات",
                  "فريق متخصص وموثوق",
                  "حلول مخصصة وفعّالة"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-white/70 text-sm">{feature}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-start gap-4 pt-6"
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-base font-semibold shadow-lg transition-all duration-300 w-full sm:w-auto"
                  >
                    <Calendar className="w-5 h-5 ml-2" />
                    احجز الآن
                  </Button>
                </Link>
                <Button
                  size="lg"
                  className="border-2 border-white/50 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold w-full sm:w-auto bg-transparent transition-all duration-300"
                >
                  <Phone className="w-5 h-5 ml-2" />
                  تواصل معنا
                </Button>
              </motion.div>

              {/* Trust Stats - Inline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="flex gap-8 pt-8 border-t border-white/10"
              >
                {[
                  { num: "10+", label: "سنوات الخبرة" },
                  { num: "500+", label: "عميل راضٍ" },
                  { num: "100%", label: "التزام مهني" },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-2xl sm:text-3xl font-bold text-primary">{stat.num}</p>
                    <p className="text-xs text-white/60">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

  
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex justify-center pt-8"
          >
            <a
              href="#about"
              className="inline-flex flex-col items-center text-white/60 hover:text-primary transition-colors duration-300"
            >
              <span className="text-sm mb-2">اكتشف المزيد</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
