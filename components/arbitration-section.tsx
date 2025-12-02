"use client"

import { motion } from "framer-motion"
import { Scale, FileCheck, Target, ShieldCheck, CheckCircle2 } from "lucide-react"

const arbitrationPoints = [
  {
    icon: FileCheck,
    text: "التفاوض باسم الشركة مع الأفراد والجهات العامة والخاصة",
  },
  {
    icon: Target,
    text: "وضع بنود دقيقة داخل العقود لتفادي النزاعات المستقبلية",
  },
  {
    icon: CheckCircle2,
    text: "تحديد الحقوق والالتزامات بشكل واضح لتجنّب أي خلافات",
  },
  {
    icon: ShieldCheck,
    text: "وضع حلول مسبقة لأي مخالفة أو جزاء، بما يضمن تنفيذ الالتزامات",
  },
]

export function ArbitrationSection() {
  return (
    <section id="arbitration" className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
              التحكيم المتخصص
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              التحكيم التجاري <span className="text-primary">الداخلي والدولي</span>
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mb-8" />

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              يقدّم المكتب خدمات التحكيم التجاري وفق أعلى المعايير الدولية، مع التركيز على حماية مصالح العملاء وضمان
              تنفيذ الالتزامات دون الدخول في الإجراءات الروتينية المعقدة.
            </p>

            {/* Points */}
            <div className="space-y-4">
              {arbitrationPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground/90 leading-relaxed pt-2">{point.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual - Simplified */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Simple border rings */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full" />
              <div className="absolute inset-8 border border-primary/30 rounded-full" />

              {/* Center content */}
              <div className="absolute inset-16 bg-card rounded-full border border-primary/40 flex items-center justify-center shadow-xl">
                <div className="text-center p-8">
                  <Scale className="w-20 h-20 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">التحكيم الدولي</h3>
                  <p className="text-sm text-muted-foreground">وفق المعايير العالمية</p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-4 right-1/4 bg-card rounded-lg p-3 border border-primary/30 shadow-lg">
                <p className="text-primary font-semibold text-sm">حماية كاملة</p>
              </div>
              <div className="absolute bottom-4 left-1/4 bg-card rounded-lg p-3 border border-primary/30 shadow-lg">
                <p className="text-primary font-semibold text-sm">حلول مبتكرة</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
