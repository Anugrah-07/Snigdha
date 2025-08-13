"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "ml"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",

    // Hero Section
    heroTitle: "Welcome to Snigdha Solutions",
    heroSubtitle: "EI Janaseva Kendram",
    heroDescription:
      "Your trusted partner for all government and village services. We provide fast, reliable, and efficient solutions for all your documentation and service needs.",
    reliableService: "Reliable Service",
    reliableServiceDesc: "Quick and accurate processing of all your documents",
    secureProcess: "Secure Process",
    secureProcessDesc: "Your personal information is protected and secure",
    fastDelivery: "Fast Delivery",
    fastDeliveryDesc: "Quick turnaround time for all service requests",

    // Services Section
    servicesTitle: "Our Services",
    servicesSubtitle: "We offer a wide range of government and panchayat services",

    // Service Cards
    passportTitle: "Passport Services",
    passportDesc: "New passport applications, renewals, and related documentation services",

    vehicleTitle: "Vehicle Related Services",
    vehicleDesc: "RC transfers, license renewals, and other vehicle documentation",

    panchayatTitle: "Panchayat Services",
    panchayatDesc: "Building permits, trade licenses, property tax, and local government services",

    villageTitle: "Village Services",
    villageDesc: "Village officer certificates, land records, agricultural subsidies, and rural services",

    digitalTitle: "Digital Services",
    digitalDesc: "Online applications, digital payments, e-governance support",

    pensionTitle: "Pension Services",
    pensionDesc: "Pension applications, updates, and related government schemes",

    certificateTitle: "Certificate Services",
    certificateDesc: "Birth, death, income, and other government certificates",

    rationTitle: "Ration Card Services",
    rationDesc: "New ration card applications, updates, and corrections",

    insuranceTitle: "Insurance Services",
    insuranceDesc: "Health insurance, life insurance, and government insurance schemes",

    // Contact Section
    contactTitle: "Get in Touch",
    contactSubtitle: "Contact us for any queries or service requirements",
    emailTitle: "Email Us",
    whatsappTitle: "WhatsApp",
    locationTitle: "Visit Us",
    workingHoursTitle: "Working Hours",
    workingHoursText: "Monday to Saturday: 9:00 AM - 6:00 PM",
    sundayText: "Sunday: Closed",
    locationText: "Kolassery to Parakkettu Road Near thabalamukk Bustop",
  },
  ml: {
    // Header
    home: "ഹോം",
    about: "കുറിച്ച്",
    services: "സേവനങ്ങൾ",
    contact: "ബന്ധപ്പെടുക",

    // Hero Section
    heroTitle: "സ്നിഗ്ധ സൊല്യൂഷൻസിലേക്ക് സ്വാഗതം",
    heroSubtitle: "ഇ-ജനസേവ കേന്ദ്രം",
    heroDescription:
      "എല്ലാ സർക്കാർ, ഗ്രാമപഞ്ചായത്ത് സേവനങ്ങൾക്കുമുള്ള നിങ്ങളുടെ വിശ്വസ്ത പങ്കാളി. നിങ്ങളുടെ എല്ലാ ഡോക്യുമെന്റേഷൻ, സേവന ആവശ്യങ്ങൾക്കും ഞങ്ങൾ വേഗമേറിയതും വിശ്വസനീയവുമായ പരിഹാരങ്ങൾ നൽകുന്നു.",
    reliableService: "വിശ്വസനീയ സേവനം",
    reliableServiceDesc: "നിങ്ങളുടെ എല്ലാ ഡോക്യുമെന്റുകളുടെയും വേഗമേറിയതും കൃത്യവുമായ പ്രോസസ്സിംഗ്",
    secureProcess: "സുരക്ഷിത പ്രക്രിയ",
    secureProcessDesc: "നിങ്ങളുടെ വ്യക്തിഗത വിവരങ്ങൾ സംരക്ഷിതവും സുരക്ഷിതവും അണ്",
    fastDelivery: "വേഗത്തിലുള്ള ഡെലിവറി",
    fastDeliveryDesc: "എല്ലാ സേവന അഭ്യർത്ഥനകൾക്കും വേഗത്തിലുള്ള പ്രതികരണ സമയം",

    // Services Section
    servicesTitle: "ഞങ്ങളുടെ സേവനങ്ങൾ",
    servicesSubtitle: "ഞങ്ങൾ വിപുലമായ സർക്കാർ, പഞ്ചായത്ത് സേവനങ്ങൾ നൽകുന്നു",

    // Service Cards
    passportTitle: "പാസ്‌പോർട്ട് സേവനങ്ങൾ",
    passportDesc: "പുതിയ പാസ്‌പോർട്ട് അപേക്ഷകൾ, പുതുക്കൽ, അനുബന്ധ ഡോക്യുമെന്റേഷൻ സേവനങ്ങൾ",

    vehicleTitle: "വാഹന സംബന്ധിയായ സേവനങ്ങൾ",
    vehicleDesc: "ആർസി ട്രാൻസ്ഫർ, ലൈസൻസ് പുതുക്കൽ, മറ്റ് വാഹന ഡോക്യുമെന്റേഷൻ",

    panchayatTitle: "പഞ്ചായത്ത് സേവനങ്ങൾ",
    panchayatDesc: "കെട്ടിട അനുമതി, വ്യാപാര ലൈസൻസ്, പ്രോപ്പർട്ടി ടാക്സ്, പ്രാദേശിക സർക്കാർ സേവനങ്ങൾ",

    villageTitle: "ഗ്രാമ സേവനങ്ങൾ",
    villageDesc: "വില്ലേജ് ഓഫീസർ സർട്ടിഫിക്കറ്റുകൾ, ഭൂമി രേഖകൾ, കാർഷിക സബ്സിഡികൾ, ഗ്രാമീണ സേവനങ്ങൾ",

    digitalTitle: "ഡിജിറ്റൽ സേവനങ്ങൾ",
    digitalDesc: "ഓൺലൈൻ അപേക്ഷകൾ, ഡിജിറ്റൽ പേയ്‌മെന്റുകൾ, ഇ-ഗവേണൻസ് സപ്പോർട്��്",

    pensionTitle: "പെൻഷൻ സേവനങ്ങൾ",
    pensionDesc: "പെൻഷൻ അപേക്ഷകൾ, അപ്‌ഡേറ്റുകൾ, അനുബന്ധ സർക്കാർ പദ്ധതികൾ",

    certificateTitle: "സർട്ടിഫിക്കറ്റ് സേവനങ്ങൾ",
    certificateDesc: "ജനന, മരണ, വരുമാന, മറ്റ് സർക്കാർ സർട്ടിഫിക്കറ്റുകൾ",

    rationTitle: "റേഷൻ കാർഡ് സേവനങ്ങൾ",
    rationDesc: "പുതിയ റേഷൻ കാർഡ് അപേക്ഷകൾ, അപ്‌ഡേറ്റുകൾ, തിരുത്തലുകൾ",

    insuranceTitle: "ഇൻഷുറൻസ് സേവനങ്ങൾ",
    insuranceDesc: "ആരോഗ്യ ഇൻഷുറൻസ്, ജീവിത ഇൻഷുറൻസ്, സർക്കാർ ഇൻഷുറൻസ് പദ്ധതികൾ",

    // Contact Section
    contactTitle: "ബന്ധപ്പെടുക",
    contactSubtitle: "എന്തെങ്കിലും ചോദ്യങ്ങൾക്കോ സേവന ആവശ്യങ്ങൾക്കോ ഞങ്ങളെ ബന്ധപ്പെടുക",
    emailTitle: "ഇമെയിൽ ചെയ്യുക",
    whatsappTitle: "വാട്സ്ആപ്പ്",
    locationTitle: "ഞങ്ങളെ സന്ദർശിക്കുക",
    workingHoursTitle: "പ്രവർത്തന സമയം",
    workingHoursText: "തിങ്കൾ മുതൽ ശനി വരെ: രാവിലെ 9:00 - വൈകുന്നേരം 6:00",
    sundayText: "ഞായർ: അവധി",
    locationText: "കൊളശ്ശേരി പാറക്കെട്ട് റോഡ് തബലമുക്ക് ബസ്റ്റോപ്പിന് സമീപം",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
