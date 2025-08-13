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
          <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
              <Image
                src="/images/snigdha-logo.svg"
                alt="Snigdha Solutions Logo"
                width={40}
                height={40}
                className="object-contain sm:w-12 sm:h-12"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-lg sm:text-xl font-bold text-sky-600 font-serif truncate">Snigdha Solutions</h1>
              <p className="text-xs sm:text-sm text-gray-600 truncate">{t("heroSubtitle")}</p>
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
          <div className="md:hidden flex items-center space-x-1 flex-shrink-0">
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="text-sky-600 px-2">
              <Globe className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="px-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
