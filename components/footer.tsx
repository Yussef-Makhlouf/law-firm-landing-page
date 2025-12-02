"use client"

import { Phone, Mail, MapPin, Clock, Instagram, Twitter, Linkedin, Facebook } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "من نحن", href: "/about" },
    { label: "الخدمات القانونية", href: "/services" },
    { label: "معرض الصور", href: "/gallery" },
    { label: "تواصل معنا", href: "/contact" },
  ]

  const services = [
    "التمثيل القانوني",
    "إعداد العقود",
    "التحكيم التجاري",
    "الاستشارات الاقتصادية",
    "التحقيقات الداخلية",
  ]

  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center bg-navy">
              <img src="/favicon.jpeg" alt="Logo" className="w-16 h-16 rounded-full" />
              </div>
              <div>
              <p className="text-white font-bold">مكتب المستشار</p>
              <p className="text-primary text-sm">محمد القاضي</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              مكتب متخصص في تقديم الدراسات والاستشارات القانونية والاقتصادية الشاملة للشركات والمؤسسات، وفق أعلى
              المعايير المهنية الدولية.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
          
                <a
                  
                  href="https://www.facebook.com/koko.pop.148553?mibextid=wwXIfr&rdid=voQGWO3RlQLALsSj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BdhjpSR1n%2F%3Fmibextid%3DwwXIfr#"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://t.me/elkady_academyy"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary transition-colors"
                >
                  <img src="/telegram.svg" className="w-5 h-5" />
                </a>
            
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-white/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-white/70 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm"> جمهورية مصر العربيه - محافظة بني سويف</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+201093998856"
                  className="text-white/70 text-sm hover:text-primary transition-colors"
                  dir="ltr"
                >
                  01093998856
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@alqadi-law.com"
                  className="text-white/70 text-sm hover:text-primary transition-colors"
                >
                 drmohamedelkady0@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/70 text-sm">السبت - الخميس: 9 ص - 5 م</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-right">
              © {currentYear} مكتب المستشار محمد القاضي للدراسات والاستشارات القانونية. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-6">
              {/* <a href="#" className="text-white/50 text-sm hover:text-primary transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-white/50 text-sm hover:text-primary transition-colors">
                الشروط والأحكام
              </a> */}
            </div>
            <div className="flex items-center gap-6">
              <a href="https://yussef-dev-studio.vercel.app/" className="text-white/50 text-sm hover:text-primary transition-colors">
                <img src="/yussef-dev-studio.png" className="w-12 h-12" alt="YUSSEF DEV STUDIO" />
              </a>
              <a href="https://wa.me/201009403754" className="text-white/50 text-sm hover:text-primary transition-colors">
                تطوير فريق YUSSEF DEV STUDIO
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
