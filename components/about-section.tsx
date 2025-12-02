"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Briefcase, GraduationCap, Video, Users, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
  const credentials = [
    { icon: GraduationCap, text: "باحث دكتوراه بالقانون العام" },
    { icon: Award, text: "مستشار بالتحكيم التجاري الدولي" },
    { icon: Briefcase, text: "خبير في العقود المدنية والتجارية" },
    { icon: BookOpen, text: "محاضر متخصص في المواد القانونية" },
  ]

  const consultationMethods = [
    { icon: Users, title: "مقابلة مباشرة", desc: "بمواعيد مسبقة لا تقل عن 24 ساعة" },
    { icon: Video, title: "جلسات عبر الإنترنت", desc: "استشارات احترافية عن بُعد" },
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Gold frame */}
              <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4" />
              <div className="absolute inset-0 bg-card rounded-lg overflow-hidden shadow-2xl border border-border">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <img
                      src="/logo.jpeg"
                      alt="Consultant"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            {/* Section Title */}
            <div className="mb-8">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
                نبذة تعريفية
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                عن المستشار <span className="text-primary">محمد القاضي</span>
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full" />
            </div>

            {/* Bio Text */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              باحث دكتوراه بالقانون العام، ومستشار بالتحكيم التجاري الدولي، وخبير في العقود المدنية والتجارية. يمتلك
              خبرة تتجاوز <span className="text-primary font-semibold">10 سنوات</span> في الدراسات والاستشارات القانونية
              والاقتصادية، بالإضافة لكونه محاضرًا متخصصًا في المواد القانونية والاقتصادية والسياسية.
            </p>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {credentials.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-secondary border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground/90 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Consultation Methods */}
            {/* <div className="p-6 rounded-xl bg-secondary border border-primary/20 mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">يقدّم المكتب الاستشارات عبر:</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {consultationMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <method.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{method.title}</p>
                      <p className="text-sm text-muted-foreground">{method.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            <Link href="/about">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                المزيد عن المستشار
                <ArrowLeft className="w-4 h-4 mr-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
