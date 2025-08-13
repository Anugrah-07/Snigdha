"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const hoursVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 variants={headerVariants} className="text-3xl font-bold text-gray-900 mb-4">
            {t("contactTitle")}
          </motion.h2>
          <motion.p variants={headerVariants} className="text-lg text-gray-600">
            {t("contactSubtitle")}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Email */}
          <motion.div
            variants={cardVariants}
            className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t("emailTitle")}</h3>
            <p className="text-gray-600 mb-3">
              {t("language") === "ml" ? "നിങ്ങളുടെ ചോദ്യങ്ങൾ അയയ്ക്കുക" : "Send us your queries"}
            </p>
            <a href="mailto:snigdhasolutions123@gmail.com" className="text-sky-600 hover:text-sky-700 font-medium">
              snigdhasolutions123@gmail.com
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            variants={cardVariants}
            className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t("whatsappTitle")}</h3>
            <p className="text-gray-600 mb-3">
              {t("language") === "ml" ? "വേഗത്തിലുള്ള സഹായം ലഭ്യമാണ്" : "Quick assistance available"}
            </p>
            <a
              href="https://wa.me/918129801575"
              className="text-sky-600 hover:text-sky-700 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 8129801575
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={cardVariants}
            className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t("locationTitle")}</h3>
            <p className="text-gray-600 mb-3">
              {t("language") === "ml" ? "ഞങ്ങളുടെ സേവന കേന്ദ്രം സന്ദർശിക്കുക" : "Visit our service center"}
            </p>
            <address className="text-sky-600 not-italic">{t("locationText")}</address>
          </motion.div>
        </motion.div>

        {/* Operating Hours */}
        <motion.div
          className="mt-12 text-center p-6 bg-white rounded-xl shadow-sm"
          variants={hoursVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{t("workingHoursTitle")}</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-600">
            <div>
              <span className="font-medium">{t("workingHoursText")}</span>
            </div>
            <div>
              <span className="font-medium">{t("sundayText")}</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {t("language") === "ml"
              ? "നിങ്ങളുടെ സൗകര്യത്തിനായി ഞായറാഴ്ചകളിൽ ഞങ്ങൾ അടച്ചിരിക്കുന്നു"
              : "We are closed on Sundays for your convenience"}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
