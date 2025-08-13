"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"

export function Header() {
  const { language, setLanguage, t } = useLanguage()

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ml" : "en")
  }

  return (
    <header className="bg-white shadow-sm border-b fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Service Center Name */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src="/images/snigdha-logo.svg"
                alt="Snigdha Solutions Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-sky-600 font-serif">Snigdha Solutions</h1>
              <p className="text-sm text-gray-600">{t("heroSubtitle")}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-sky-600 transition-colors font-medium">
              {t("home")}
            </a>
            <a href="#about" className="text-gray-700 hover:text-sky-600 transition-colors font-medium">
              {t("about")}
            </a>
            <a href="#services" className="text-gray-700 hover:text-sky-600 transition-colors font-medium">
              {t("services")}
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1 border-sky-300 text-sky-600 hover:bg-sky-50 bg-transparent"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "en" ? "മലയാളം" : "English"}</span>
            </Button>
            <Button className="bg-sky-300 hover:bg-sky-400 text-white" onClick={scrollToContact}>
              {t("contact")}
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="text-sky-600">
              <Globe className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
