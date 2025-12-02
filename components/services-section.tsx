"use client"

import { motion } from "framer-motion"
import { Scale, FileText, Handshake, Shield, ScrollText, Search, Building2, Gavel, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Building2,
    title: "التمثيل القانوني والإداري",
    description: "تمثيل الشركات أمام الأفراد والجهات العامة والخاصة بكفاءة عالية",
  },
  {
    icon: FileText,
    title: "إعداد ومراجعة العقود",
    description: "صياغة جميع أنواع العقود المدنية والتجارية والإدارية باللغتين العربية والإنجليزية",
  },
  {
    icon: Handshake,
    title: "التفاوض باسم الشركة",
    description: "التفاوض الاحترافي مع الأفراد والجهات الحكومية والخاصة لتحقيق أفضل النتائج",
  },
  {
    icon: ScrollText,
    title: "صياغة العقود الاحترافية",
    description: "كتابة عقود تحدد الحقوق والواجبات وتضع حلولًا واضحة عند الخلاف",
  },
  {
    icon: Shield,
    title: "حماية المؤسسة من المخاطر",
    description: "توفير حماية قانونية ومالية كاملة للمؤسسة وتجنّب المخاطر المحتملة",
  },
  {
    icon: Scale,
    title: "استشارات الامتثال",
    description: "تقديم استشارات متوافقة مع القوانين المحلية واللوائح الدولية",
  },
  {
    icon: Gavel,
    title: "صياغة اللوائح الداخلية",
    description: "إعداد وصياغة اللوائح الداخلية والتنظيمية للمؤسسات",
  },
  {
    icon: Search,
    title: "التحقيقات الداخلية",
    description: "إجراء التحقيقات الداخلية المتعلقة بالمخالفات بشكل مهني ودقيق",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
            خدماتنا المتخصصة
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            الخدمات <span className="text-primary">القانونية</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات القانونية المتخصصة لحماية أعمالكم وتحقيق أهدافكم
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>

                {/* Gold accent line */}
                <div className="mt-5 h-0.5 bg-gradient-to-l from-primary/50 to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/services">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
              عرض جميع الخدمات
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
