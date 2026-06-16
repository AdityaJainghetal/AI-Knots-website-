import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import contentimage from "../../assets/Images/contentimage2.jpg";

import {
  Pen,
  FileText,
  Newspaper,
  Link,
  BookOpen,
  Megaphone,
  Code,
  Mail,
  CheckCircle2,
  ArrowRight,
  Globe,
  Zap,
} from "lucide-react";

// Selected images
const images = {
  hero: contentimage,
  contentExamples:
    "https://designmodo.com/wp-content/uploads/2024/11/email-design-trends-2025.jpg",
  bhopalLocal:
    "https://media.licdn.com/dms/image/v2/D4D22AQEi5Cvxfd_t-g/feedshare-shrink_800/B4DZrABYmtIMAg-/0/1764158180158?e=2147483647&v=beta&t=O1BquIYxDkYWQmO3xUD-S_7bEe4u8Rdb5wU1wpB7-Pk",
  newsletter:
    "https://piktochart.com/wp-content/uploads/2024/04/company-newsletter-examples-featured-image.png",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const services = [
  {
    icon: FileText,
    title: "Website Content Writing",
    desc: "Clear, engaging, SEO-friendly copy that turns visitors into customers.",
  },
  {
    icon: BookOpen,
    title: "Blog Writing",
    desc: "High-value blogs that boost rankings, traffic, and audience trust.",
  },
  {
    icon: Newspaper,
    title: "Press Release Writing",
    desc: "Professional releases to amplify your brand message and visibility.",
  },
  {
    icon: Link,
    title: "Guest Posting",
    desc: "Strategic placements on authoritative sites for reach and strong backlinks.",
  },
  {
    icon: Pen,
    title: "Article Writing",
    desc: "Well-researched, readable articles that establish brand authority.",
  },
  {
    icon: Megaphone,
    title: "Ad Copy Writing",
    desc: "Compelling ads for Google, Facebook, Instagram that drive clicks and sales.",
  },
  {
    icon: Code,
    title: "Technical Writing",
    desc: "Simplified explanations of complex topics for better understanding.",
  },
  {
    icon: Mail,
    title: "Email & Newsletter Writing",
    desc: "Engaging sequences that nurture leads and increase conversions.",
  },
];

const whyChoose = [
  "100% Human Content – Authentic and emotionally resonant",
  "In-House Writers – Consistent quality aligned with your voice",
  "Plagiarism-Free Content – Always original and checked",
  "SEO-Optimized Content – Keyword-rich for better rankings",
  "Content That Engages and Converts – Designed for real results",
];

const engagementPoints = [
  "Grabs attention with powerful headlines and hooks",
  "Builds trust through valuable, authentic storytelling",
  "Drives action with clear CTAs and persuasive messaging",
];

const industries = [
  "Education",
  "E-commerce",
  "Healthcare",
  "Real Estate",
  "Technology & IT",
  "Finance",
  "Travel & Hospitality",
  "Startups & Local Businesses in Bhopal",
];

const faqs = [
  {
    q: "What types of content writing services do you offer?",
    a: "We offer website content, blog writing, SEO content, ad copy, social media content, email marketing content, and more based on your business needs.",
  },
  {
    q: "Is your content SEO-friendly?",
    a: "Yes, all our content is written with proper keyword research and SEO structure to help your website rank better on search engines.",
  },
  {
    q: "How long does it take to deliver content?",
    a: "Delivery time depends on the project size, but most content is delivered within 2 to 5 working days.",
  },
  {
    q: "Will the content be original?",
    a: "Yes, we provide 100% original and plagiarism-free content that is tailored specifically for your brand.",
  },
  {
    q: "Can you write content for my specific industry?",
    a: "Yes, we create content for various industries like education, healthcare, real estate, eCommerce, and more.",
  },
];

export default function ContentWritingBranding() {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const [openFaq, setOpenFaq] = useState(null);

  // ====================== THEME CLASSES ======================
  const cardClass = isDark
    ? "bg-gray-900/70 backdrop-blur-sm border border-gray-800 hover:border-red-600/60 rounded-2xl p-10 hover:shadow-2xl hover:shadow-red-900/30 transition-all group text-center"
    : "bg-white border border-gray-200 shadow-lg hover:shadow-2xl rounded-2xl p-10 transition-all group text-center";

  const headingClass = isDark ? "text-white" : "text-[#8B6B4A]";
  const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
  const accentClass = "text-[#8B6B4A] dark:text-[#f9e8c8]";
  const sectionBg = isDark ? "bg-gray-950" : "bg-[#f9efe1]";
  const sectionBg2 = isDark ? "bg-gray-900" : "bg-[#f9efe1]";
  const sectionBg3 = isDark ? "bg-gray-950" : "bg-white";
  const faqBg = isDark ? "bg-gray-950" : "bg-gray-50";

  return (
    <>
      <Helmet>
        <title>Content Writing & Branding | Atla IKS</title>
        <meta
          name="description"
          content="SEO content writing and branding services for Bhopal businesses. We create high-converting website content, blogs, email campaigns, and more."
        />
        <meta
          name="keywords"
          content="Content Writing Services, SEO Content Writing, Branding, Blog Writing, Copywriting, Email Marketing Content, Website Copy, Content Strategy"
        />
      </Helmet>
      <div
        className={`min-h-screen transition-colors duration-700 overflow-hidden ${isDark ? "bg-gray-950 text-white" : "bg-white text-[#3d220e]"}`}
      >
        {/* Hero */}
        <section
          className={`relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 ${isDark ? "bg-gradient-to-br from-gray-900 via-black to-gray-950" : "bg-gradient-to-br from-gray-900 via-black to-gray-950"}`}
        >
          <div className="absolute inset-0">
            <img
              src={images.hero}
              alt="SEO content writing workspace for creative branding"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className={`absolute inset-0 transition-all duration-700 ${isDark ? "bg-black/70" : "bg-black/50"}`}
            />
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 max-w-7xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className={`text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight text-white ${headingClass}`}
            >
              Content Writing & Branding Services in{" "}
              <span className="text-transparent bg-clip-text bg-[#8B6B4A] dark:bg-gradient-to-r dark:from-[#8B6B4A] dark:via-[#f9e8c8] dark:to-[#8B6B4A]">
                Bhopal
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className={`text-3xl md:text-5xl font-bold text-[#8B6B4A]  mb-8 ${`font-bold ${isDark ? "text-[#9F714E]" : "text-[#9F714E]"}`}`}
            >
              Turn Your Ideas Into Words That Sell
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className={`text-xl md:text-2xl mb-10 max-w-5xl mx-auto leading-relaxed ${`font-bold ${isDark ? "text-[#9F714E]" : "text-[#9F714E]"}`}`}
            >
              Your brand deserves content that connects, engages, and converts.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className={`text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed ${`font-bold ${isDark ? "text-[#9F714E]" : "text-[#9F714E]"}`}`}
            >
              At AI Knots IT Solution, we create simple, clear, and impactful
              SEO-optimized content for websites, blogs, ads, emails, and more —
              tailored for Bhopal businesses and beyond.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button
                onClick={() => navigate("/seo")}
                aria-label="Book SEO content consultation"
                className="px-12 py-6 bg-[#8B6B4A] text-white rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 hover:scale-105 transition-all flex items-center gap-3 group"
              >
                Get SEO Content Consultation
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </button>
              <button
                onClick={() => navigate("/contact")}
                aria-label="Contact AI Knots for branding and SEO content"
                className={`px-12 py-6 border-2 rounded-full text-xl md:text-2xl font-bold transition-all
              ${
                isDark
                  ? "border-[#8B6B4A] text-[#EFE5C8] hover:bg-[#8B6B4A]/50"
                  : "border-[#8B6B4A] text-[#8B6B4A] hover:bg-[#8B6B4A]/10"
              }`}
              >
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Services */}
        <section className={`py-24 px-4 sm:px-6 lg:px-8 ${sectionBg}`}>
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
            >
              Content Marketing <span className={accentClass}>Services</span> We
              Offer
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((serv, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={cardClass}
                >
                  <serv.icon
                    className={`w-16 h-16 mx-auto mb-6 ${accentClass} group-hover:scale-110 transition-transform`}
                  />
                  <h3 className={`text-2xl font-bold mb-4 ${headingClass}`}>
                    {serv.title}
                  </h3>
                  <p className={`text-center ${bodyClass}`}>{serv.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={`py-24 px-4 sm:px-6 lg:px-8 ${sectionBg2}`}>
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
            >
              Why Choose AI Knots as Your{" "}
              <span className={accentClass}>Content Partner</span> in Bhopal
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChoose.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={cardClass}
                >
                  <div className="flex items-center justify-center gap-4">
                    <CheckCircle2
                      className={`w-8 h-8 flex-shrink-0 ${accentClass}`}
                    />
                    <p className={`text-lg font-semibold ${bodyClass}`}>
                      {point}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content That Engages */}
        <section className={`py-20 px-4 sm:px-6 lg:px-8 ${sectionBg3}`}>
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl font-black mb-12 ${headingClass}`}
            >
              Content That{" "}
              <span className={accentClass}>Engages and Converts</span>
            </motion.h2>

            <p className={`text-xl mb-10 max-w-4xl mx-auto ${bodyClass}`}>
              Good content is not just about writing — it’s about results.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {engagementPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={cardClass}
                >
                  <Zap className={`w-12 h-12 mx-auto mb-6 ${accentClass}`} />
                  <p className={`text-lg font-semibold ${bodyClass}`}>
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Bhopal Visual */}

        {/* Industries */}
        <section className={`py-24 px-4 sm:px-6 lg:px-8 ${sectionBg3}`}>
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl font-black mb-12 ${headingClass}`}
            >
              Industries We <span className={accentClass}>Serve</span> in Bhopal
              & Beyond
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-6">
              {industries.map((ind, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`border rounded-full px-8 py-4 text-lg font-medium flex items-center gap-3 transition-all
                  ${
                    isDark
                      ? "bg-red-950/40 border-red-800/50"
                      : "bg-white border-red-200 shadow"
                  }`}
                >
                  <Globe className={`w-6 h-6 ${accentClass}`} /> {ind}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gradient-to-br from-red-950/30 to-black" : "bg-red-50"}`}
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-6xl font-black mb-8 ${headingClass}`}
            >
              Ready to Get Content That{" "}
              <span className={accentClass}>Sells</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-xl md:text-2xl mb-10 max-w-3xl mx-auto ${bodyClass}`}
            >
              Let AI Knots help your Bhopal business stand out with words that
              connect and convert.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/contact")}
              className="px-14 py-7 bg-[#8B6B4A] text-white rounded-full text-2xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all flex items-center gap-4 mx-auto"
            >
              Contact Us Today
            </motion.button>
          </div>
        </section>

        {/* FAQ */}
        <section className={`py-24 px-4 sm:px-6 lg:px-8 ${faqBg}`}>
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
            >
              Frequently Asked <span className={accentClass}>Questions</span>
            </motion.h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`border rounded-xl overflow-hidden transition-all
                  ${
                    isDark
                      ? "border-gray-800 bg-gray-900/30"
                      : "border-gray-200 bg-white shadow"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className={`w-full px-8 py-6 text-left flex justify-between items-center transition-colors
                    ${isDark ? "hover:bg-gray-800/50" : "hover:bg-gray-100"}`}
                  >
                    <span className={`text-xl font-bold ${headingClass}`}>
                      {faq.q}
                    </span>
                    <span
                      className={`text-[#8B6B4A] text-2xl transition-transform ${openFaq === idx ? "rotate-180" : ""}`}
                    >
                      ▼
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div
                      className={`px-8 pb-8 pt-2 leading-relaxed ${bodyClass}`}
                    >
                      {faq.a}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}

        {/* Scroll to Top Button */}
      </div>
    </>
  );
}
