"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "من نحن" },
    { href: "/services", label: "الخدمات" },
    { href: "/gallery", label: "معرض الصور" },
    { href: "/contact", label: "تواصل معنا" },
  ]

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 text-white ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg " 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "h-16" : "h-24"
        }`}>
          {/* Logo - Enhanced */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`rounded-xl border-2 border-primary flex items-center justify-center bg-primary/5 transition-all duration-500 overflow-hidden ${
              isScrolled ? "w-14 h-14" : "w-16 h-16"
            }`}>
              <img src="/logo.jpeg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <p className={`font-bold text-base transition-all duration-300 ${isScrolled ? "text-foreground" : "text-white"}`}>مكتب المستشار</p>
              <p className="text-primary font-semibold text-sm">محمد القاضي</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-primary/50 bg-primary/10 backdrop-blur-sm w-fit">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                  pathname === link.href 
                    ? "text-primary bg-primary/10" 
                    : isScrolled ? "text-foreground/70 hover:text-primary hover:bg-primary/5" : "text-white/80 hover:text-foreground hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="tel:+201093998856">
              <Button
                className="bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                size={isScrolled ? "sm" : "default"}
              >
                <Phone className="w-4 h-4 ml-2" />
                احجز استشارة
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden p-2 hover:rounded-lg transition-colors ${
              isScrolled ? "text-foreground hover:bg-foreground/10" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border animate-in fade-in slide-in-from-top-2">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 text-base font-medium ${
                  pathname === link.href 
                    ? "text-primary bg-primary/10" 
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block pt-2">
              <Button className="w-full bg-primary text-white hover:bg-primary/90 mt-2 shadow-lg font-semibold">
                <Phone className="w-4 h-4 ml-2" />
                احجز استشارة
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
