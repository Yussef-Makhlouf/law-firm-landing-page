"use client"

import { motion } from "framer-motion"
import {
  TrendingUp,
  Landmark,
  Users,
  BarChart3,
  PieChart,
  Target,
  LineChart,
  Building,
  Megaphone,
  Clock,
  ThumbsUp,
  ArrowUpRight,
} from "lucide-react"

const consultingCategories = [
  {
    id: "finance",
    title: "استشارات اقتصاد المال والأعمال",
    subtitle: "(نقود وبنوك)",
    icon: TrendingUp,
    points: [
      { icon: BarChart3, text: "تحليل اقتصاد الدولة وتقديم أفضل حلول إدارة الموارد لتعظيم الأصول والأرباح" },
      { icon: LineChart, text: "تحليل العرض والطلب وتأثير التضخم على أعمال الشركة" },
      { icon: PieChart, text: "مراجعة التقارير المالية وتحسين الأداء لتحقيق الأهداف" },
      { icon: Target, text: "تقديم آراء واستشارات لاتخاذ القرارات الاستراتيجية" },
      { icon: TrendingUp, text: "تحليل القرارات المالية والاقتصادية ووضع استراتيجيات تسعير تنافسية" },
      { icon: Building, text: "متابعة الهيكل الإداري وتحليل الأداء داخل المؤسسة" },
    ],
  },
  {
    id: "political",
    title: "استشارات الاقتصاد السياسي",
    subtitle: "",
    icon: Landmark,
    points: [
      { icon: Landmark, text: "تحليل وضع الشركة في ضوء السياسات الحكومية وتقديم توصيات لتعزيز مكانتها" },
      { icon: Target, text: "مراجعة خطابات وأعمال الشركة لتتوافق مع الاتجاه العام للدولة" },
      { icon: LineChart, text: "تحليل الوضع الاقتصادي والتنبؤ بالخطوات المستقبلية بما يخدم مصالح الشركة" },
      { icon: ArrowUpRight, text: "تحليل القرارات السياسية والاقتصادية للتنبؤ بالفرص وتحقيق أقصى استفادة منها" },
    ],
  },
  {
    id: "behavioral",
    title: "استشارات الاقتصاد السلوكي",
    subtitle: "",
    icon: Users,
    points: [
      { icon: Megaphone, text: "تقديم توصيات فعّالة لتعزيز سياسة الشركة تجاه الرأي العام" },
      { icon: ThumbsUp, text: "مراجعة الخطابات العامة لضمان قبول الجمهور وتجنب ما قد يسبب رفضًا أو انتقادًا" },
      { icon: Clock, text: "تحديد التوقيت المناسب لإصدار القرارات والإعلانات المهمة" },
      { icon: Users, text: "تحليل اتجاهات الرأي العام لتعظيم الإيجابيات وتقليل السلبيات" },
    ],
  },
]

export function EconomicConsultingSection() {
  return (
    <section id="consulting" className="py-24 md:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
            الاستشارات المتخصصة
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            الاستشارات <span className="text-primary">الاقتصادية</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            استشارات اقتصادية متخصصة لدعم قراراتكم الاستراتيجية وتعزيز نمو أعمالكم
          </p>
        </motion.div>

        {/* Category 1 - Full width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-sm">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Content */}
              <div className="lg:col-span-3 p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{consultingCategories[0].title}</h3>
                    <p className="text-primary text-sm">{consultingCategories[0].subtitle}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {consultingCategories[0].points.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <point.icon className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed">{point.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className="lg:col-span-2 bg-secondary p-8 lg:p-12 flex items-center justify-center">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full border-4 border-primary/30 flex items-center justify-center bg-card">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 text-primary mx-auto mb-3" />
                      <p className="text-foreground font-semibold">تحليل مالي</p>
                      <p className="text-xs text-muted-foreground">متقدم</p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories 2 & 3 - Side by side */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Category 2 - Political Economy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-card border border-border overflow-hidden group hover:border-primary/30 transition-colors shadow-sm"
          >
            {/* Header */}
            <div className="p-6 bg-secondary border-b border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{consultingCategories[1].title}</h3>
              </div>
            </div>

            {/* Points */}
            <div className="p-6 space-y-3">
              {consultingCategories[1].points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground/80 leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Category 3 - Behavioral Economy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-card border border-border overflow-hidden group hover:border-primary/30 transition-colors shadow-sm"
          >
            {/* Header */}
            <div className="p-6 bg-secondary border-b border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{consultingCategories[2].title}</h3>
              </div>
            </div>

            {/* Points */}
            <div className="p-6 space-y-3">
              {consultingCategories[2].points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground/80 leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
