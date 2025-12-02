"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Briefcase, GraduationCap, Video, Users, Target, Eye, Star } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const credentials = [
  { icon: GraduationCap, text: "باحث دكتوراه بالقانون العام" },
  { icon: Award, text: "مستشار بالتحكيم التجاري الدولي" },
  { icon: Briefcase, text: "خبير في العقود المدنية والتجارية" },
  { icon: BookOpen, text: "محاضر متخصص في المواد القانونية والاقتصادية والسياسية" },
]

const values = [
  { icon: Target, title: "الاحترافية", desc: "نلتزم بأعلى معايير الاحترافية في جميع خدماتنا" },
  { icon: Eye, title: "الشفافية", desc: "نؤمن بالوضوح والشفافية في تعاملاتنا مع العملاء" },
  { icon: Star, title: "التميز", desc: "نسعى دائماً لتقديم خدمات متميزة تفوق التوقعات" },
]

const stats = [
  { number: "10+", label: "سنوات خبرة" },
  { number: "500+", label: "عميل راضٍ" },
  { number: "1000+", label: "استشارة قانونية" },
  { number: "100%", label: "التزام مهني" },
]

const timeline = [
  { year: "2014", title: "بداية المسيرة", desc: "بدء العمل في مجال الاستشارات القانونية" },
  { year: "2017", title: "التوسع", desc: "توسيع نطاق الخدمات لتشمل الاستشارات الاقتصادية" },
  { year: "2020", title: "التحكيم الدولي", desc: "الحصول على شهادة المستشار بالتحكيم التجاري الدولي" },
  { year: "2024", title: "التطوير المستمر", desc: "متابعة دراسة الدكتوراه في القانون العام" },
]

export default function AboutPage() {
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
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">من نحن</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              مكتب المستشار <span className="text-primary">محمد القاضي</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              للدراسات والاستشارات القانونية والاقتصادية الشاملة
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Consultant */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[3/4] max-w-md mx-auto">
                <div className="absolute inset-0 border-2 border-primary rounded-2xl transform translate-x-4 translate-y-4" />
                <div className="absolute inset-0 bg-card rounded-2xl overflow-hidden shadow-2xl border border-border">
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                    <Image
                      src="/hero.jpeg"
                      alt="Consultant"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
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
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                عن المستشار <span className="text-primary">محمد القاضي</span>
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-8" />

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                باحث دكتوراه بالقانون العام، ومستشار بالتحكيم التجاري الدولي، وخبير في العقود المدنية والتجارية. يمتلك
                خبرة تتجاوز <span className="text-primary font-semibold">10 سنوات</span> في الدراسات والاستشارات
                القانونية والاقتصادية.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                بالإضافة لكونه محاضرًا متخصصًا في المواد القانونية والاقتصادية والسياسية، يقدم المستشار خدماته للشركات
                والمؤسسات الكبرى في المملكة العربية السعودية والخليج العربي.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {credentials.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-secondary border border-border">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              مسيرة <span className="text-primary">النجاح</span>
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto" />
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute right-1/2 transform translate-x-1/2 h-full w-0.5 bg-border" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "text-left pl-8" : "text-right pr-8"}`}>
                  <div
                    className={`p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors ${index % 2 === 0 ? "" : ""}`}
                  >
                    {/* <span className="text-primary font-bold text-lg">{item.year}</span> */}
                    <h3 className="text-xl font-bold text-foreground mt-2 mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
                {/* Dot */}
                <div className="absolute right-1/2 transform translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              قيمنا <span className="text-primary">ومبادئنا</span>
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Methods */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              طرق <span className="text-primary">الاستشارة</span>
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">يقدّم المكتب الاستشارات عبر طريقتين رئيسيتين</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-primary/20"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">مقابلة مباشرة</h3>
              <p className="text-muted-foreground">بمواعيد مسبقة لا تقل عن 24 ساعة، في مقر المكتب أو في مقر العميل</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-navy text-white"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Video className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">جلسات عبر الإنترنت</h3>
              <p className="text-white/70">استشارات احترافية عن بُعد عبر منصات الاجتماعات الافتراضية</p>
            </motion.div>
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
              ابدأ معنا <span className="text-primary">اليوم</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              نسعد بخدمتكم وتقديم الدعم القانوني والاقتصادي لضمان نجاح أعمالكم
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
