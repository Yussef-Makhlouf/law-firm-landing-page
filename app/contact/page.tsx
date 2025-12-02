"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Video, Users } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const contactMethods = [
  {
    icon: Phone,
    title: "اتصل بنا",
    value: "01093998856",
    href: "tel:+201093998856",
    description: "متاحون خلال ساعات العمل",
  },
  {
    icon: MessageCircle,
    title: "واتساب",
    value: "01093998856",
    href: "https://wa.me/201093998856",
    description: "للرد السريع",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "drmohamedelkady0@gmail.com",
    href: "mailto:drmohamedelkady0@gmail.com",
    description: "نرد خلال 24 ساعة",
  },
  {
    icon: MapPin,
    title: "العنوان",
    value: "  جمهورية مصر العربية - محافظة بني سويف",
    href: "#",
    description: "مقر المكتب الرئيسي",
  },
]

const workingHours = [
  { day: "السبت - الخميس", hours: "9:00 ص - 5:00 م" },
  { day: "الجمعة", hours: "مغلق" },

]

const consultationTypes = [
  {
    icon: Users,
    title: "مقابلة مباشرة",
    description: "زيارة المكتب بموعد مسبق لا يقل عن 24 ساعة",
    features: ["استشارة شخصية", "مراجعة المستندات", "توقيع العقود"],
  },
  {
    icon: Video,
    title: "استشارة عن بُعد",
    description: "جلسات افتراضية عبر منصات الاجتماعات",
    features: ["مرونة في الوقت", "من أي مكان", "تسجيل الجلسة"],
  },
  {
    icon: Phone,
    title: "استشارة هاتفية",
    description: "للاستفسارات السريعة والعاجلة",
    features: ["رد فوري", "استفسارات قصيرة", "متابعة الملفات"],
  },
]

export default function ContactPage() {
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
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">تواصل معنا</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              نسعد <span className="text-primary">بخدمتكم</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              تواصل معنا للحصول على استشارة قانونية واقتصادية متخصصة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
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
              طرق <span className="text-primary">التواصل</span>
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group block"
              >
                <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl text-center">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
                  <p className="text-primary font-medium mb-2" dir="ltr">
                    {method.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Types */}
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
              أنواع <span className="text-primary">الاستشارات</span>
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              اختر الطريقة المناسبة لك للحصول على استشارتك
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {consultationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <type.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Hours & Map */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">ساعات العمل</h2>
              </div>

              <div className="space-y-4">
                {workingHours.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-card border border-border"
                  >
                    <span className="font-medium text-foreground">{item.day}</span>
                    <span className={item.hours === "مغلق" ? "text-destructive" : "text-primary font-semibold"}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-foreground font-medium mb-2">ملاحظة هامة</p>
                <p className="text-muted-foreground text-sm">
                  يرجى حجز موعد مسبق قبل الزيارة بمدة لا تقل عن 24 ساعة لضمان توفر الوقت المناسب لخدمتكم.
                </p>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">موقعنا</h2>
              </div>

                <div className="aspect-[4/3] rounded-2xl bg-card border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106093.69037597622!2d31.20211995521705!3d29.046233979341128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145a2431941dec1f%3A0x3fe3ed5dbea0e40!2z2YXYr9mK2YbZhyDYqNmG2Ykg2LPZiNmK2YEg2KfZhNis2K_Zitiv2KnYjCDYqNmG2Ykg2LPZiNmK2YEg2KfZhNis2K_Zitiv2KnYjCDZhdit2KfZgdi42Kkg2KjZhtmKINiz2YjZitmB!5e1!3m2!1sar!2seg!4v1764699298460!5m2!1sar!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              احجز موعدك <span className="text-primary">الآن</span>
            </h2>
            <p className="text-xl text-white/70 mb-8">تواصل معنا عبر الواتساب لحجز موعد استشارة</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary text-navy hover:bg-primary/90 px-10 py-7 text-lg font-semibold w-full sm:w-auto"
                asChild
              >
                <a href="https://wa.me/201093998856">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  تواصل عبر الواتساب
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-navy px-10 py-7 text-lg font-semibold w-full sm:w-auto bg-transparent"
                asChild
              >
                <a href="tel:+201093998856">
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل الآن
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
