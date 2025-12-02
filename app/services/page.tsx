"use client"

import { motion } from "framer-motion"
import {
  Scale,
  FileText,
  Handshake,
  Shield,
  ScrollText,
  Search,
  Building2,
  Gavel,
  TrendingUp,
  Landmark,
  Brain,
  CheckCircle2,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const legalServices = [
  {
    icon: Building2,
    title: "التمثيل القانوني والإداري",
    description: "تمثيل الشركات أمام الأفراد والجهات العامة والخاصة بكفاءة عالية",
    features: ["تمثيل أمام الجهات الحكومية", "تمثيل أمام القطاع الخاص", "متابعة المعاملات"],
  },
  {
    icon: FileText,
    title: "إعداد ومراجعة العقود",
    description: "صياغة جميع أنواع العقود المدنية والتجارية والإدارية باللغتين العربية والإنجليزية",
    features: ["عقود مدنية وتجارية", "عقود إدارية", "ترجمة قانونية"],
  },
  {
    icon: Handshake,
    title: "التفاوض باسم الشركة",
    description: "التفاوض الاحترافي مع الأفراد والجهات الحكومية والخاصة لتحقيق أفضل النتائج",
    features: ["تفاوض احترافي", "تحقيق أفضل الشروط", "حماية المصالح"],
  },
  {
    icon: ScrollText,
    title: "صياغة العقود الاحترافية",
    description: "كتابة عقود تحدد الحقوق والواجبات وتضع حلولًا واضحة عند الخلاف",
    features: ["تحديد الحقوق والواجبات", "حلول النزاعات", "ضمانات قانونية"],
  },
  {
    icon: Shield,
    title: "حماية المؤسسة من المخاطر",
    description: "توفير حماية قانونية ومالية كاملة للمؤسسة وتجنّب المخاطر المحتملة",
    features: ["تحليل المخاطر", "حماية قانونية", "حماية مالية"],
  },
  {
    icon: Scale,
    title: "استشارات الامتثال",
    description: "تقديم استشارات متوافقة مع القوانين المحلية واللوائح الدولية",
    features: ["القوانين المحلية", "اللوائح الدولية", "الامتثال التنظيمي"],
  },
  {
    icon: Gavel,
    title: "صياغة اللوائح الداخلية",
    description: "إعداد وصياغة اللوائح الداخلية والتنظيمية للمؤسسات",
    features: ["اللوائح الداخلية", "السياسات التنظيمية", "إجراءات العمل"],
  },
  {
    icon: Search,
    title: "التحقيقات الداخلية",
    description: "إجراء التحقيقات الداخلية المتعلقة بالمخالفات بشكل مهني ودقيق",
    features: ["تحقيقات المخالفات", "تقارير مهنية", "توصيات إصلاحية"],
  },
]

const arbitrationServices = [
  "التفاوض باسم الشركة مع الأفراد والجهات العامة والخاصة",
  "وضع بنود دقيقة داخل العقود لتفادي النزاعات المستقبلية",
  "تحديد الحقوق والالتزامات بشكل واضح لتجنّب أي خلافات",
  "وضع حلول مسبقة لأي مخالفة أو جزاء، بما يضمن تنفيذ الالتزامات",
]

const economicServices = [
  {
    icon: TrendingUp,
    title: "استشارات اقتصاد المال والأعمال",
    subtitle: "نقود وبنوك",
    items: [
      "تحليل اقتصاد الدولة وتقديم أفضل حلول إدارة الموارد لتعظيم الأصول والأرباح",
      "تحليل العرض والطلب وتأثير التضخم على أعمال الشركة",
      "مراجعة التقارير المالية وتحسين الأداء لتحقيق الأهداف",
      "تقديم آراء واستشارات لاتخاذ القرارات الاستراتيجية",
      "تحليل القرارات المالية والاقتصادية ووضع استراتيجيات تسعير تنافسية",
      "متابعة الهيكل الإداري وتحليل الأداء داخل المؤسسة",
    ],
  },
  {
    icon: Landmark,
    title: "استشارات الاقتصاد السياسي",
    subtitle: "التحليل السياسي",
    items: [
      "تحليل وضع الشركة في ضوء السياسات الحكومية وتقديم توصيات لتعزيز مكانتها",
      "مراجعة خطابات وأعمال الشركة لتتوافق مع الاتجاه العام للدولة",
      "تحليل الوضع الاقتصادي والتنبؤ بالخطوات المستقبلية بما يخدم مصالح الشركة",
      "تحليل القرارات السياسية والاقتصادية للتنبؤ بالفرص وتحقيق أقصى استفادة منها",
    ],
  },
  {
    icon: Brain,
    title: "استشارات الاقتصاد السلوكي",
    subtitle: "الرأي العام",
    items: [
      "تقديم توصيات فعّالة لتعزيز سياسة الشركة تجاه الرأي العام",
      "مراجعة الخطابات العامة لضمان قبول الجمهور وتجنب ما قد يسبب رفضًا أو انتقادًا",
      "تحديد التوقيت المناسب لإصدار القرارات والإعلانات المهمة",
      "تحليل اتجاهات الرأي العام لتعظيم الإيجابيات وتقليل السلبيات",
    ],
  },
]

export default function ServicesPage() {
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
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">خدماتنا</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              خدماتنا <span className="text-primary">المتخصصة</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من الخدمات القانونية والاقتصادية المتخصصة لحماية أعمالكم وتحقيق أهدافكم
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legal Services */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              الخدمات <span className="text-primary">القانونية</span>
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {legalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Arbitration Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">التحكيم</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                التحكيم التجاري <span className="text-primary">الداخلي والدولي</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                يقدّم المكتب خدمات التحكيم التجاري وفق أعلى المعايير الدولية، بما يضمن حماية مصالحكم وتجنّب النزاعات
                المستقبلية.
              </p>
              <ul className="space-y-4">
                {arbitrationServices.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 border-2 border-primary rounded-2xl transform translate-x-4 translate-y-4" />
                <div className="absolute inset-0 border-2 border-primary rounded-2xl flex items-center justify-center">
                  {/* <Scale className="w-32 h-32 text-primary/30" /> */}
                  <img src="/logo.jpeg" alt="Scale" className="w-90 h-90 rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Economic Services */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              الاستشارات <span className="text-primary">الاقتصادية</span>
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto" />
          </motion.div>

          <div className="space-y-12">
            {economicServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl border ${index === 0 ? "bg-primary/5 border-primary/20" : index === 1 ? "bg-navy text-white" : "bg-secondary border-border"}`}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${index === 1 ? "bg-primary/20" : "bg-primary/10 border border-primary/20"}`}
                  >
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold mb-1 ${index === 1 ? "text-white" : "text-foreground"}`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm ${index === 1 ? "text-primary" : "text-primary"}`}>{service.subtitle}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className={index === 1 ? "text-white/80" : "text-muted-foreground"}>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              هل تحتاج إلى <span className="text-primary">استشارة</span>؟
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              تواصل معنا اليوم للحصول على استشارة متخصصة تناسب احتياجاتك
            </p>
                 <a
              href="https://wa.me/201093998856"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-lg">
                تواصل عبر واتساب
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
