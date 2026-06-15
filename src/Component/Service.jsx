import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowUp } from "lucide-react";
import serviceimg1 from "../assets/Images/service.jpeg";
import serviceimg2 from "../assets/Images/service2.jpeg";
import BPO from "../assets/Images/BPO.jpg";
import { Helmet } from "react-helmet-async";
// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const FAQAccordion = ({ isDark }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What kind of projects do you take?",
      answer:
        "We handle custom web & mobile applications, enterprise software, government / PSU compliant systems, cloud migrations, legacy modernization, and full digital transformation initiatives.",
    },
    {
      question: "Do you provide maintenance after launch?",
      answer:
        "Yes — we offer comprehensive Application Maintenance Services (AMS) including proactive monitoring, bug fixes, performance optimization, security patches, and regular updates.",
    },
    {
      question: "What are your BPO working hours?",
      answer:
        "We provide 24/7 support coverage with multiple shifts. Most clients choose 24×5 or 24×7 depending on their time zone and SLA requirements.",
    },
    {
      question: "Which technologies do you work with?",
      answer:
        "Frontend: React, Next.js, TypeScript | Backend: Java + Spring Boot, Node.js, Python | Databases: PostgreSQL, MongoDB, MySQL | Cloud: AWS, Azure, GCP | Others: Docker, Kubernetes, CI/CD pipelines.",
    },
    {
      question: "How do you ensure data security & compliance?",
      answer:
        "We follow ISO 27001 practices, implement encryption at rest & in transit, conduct regular security audits, follow GDPR / DPDP / IT Act guidelines (where applicable), and provide role-based access control.",
    },
  ];

  return (
    <div className="space-y-5">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`group backdrop-blur-lg border rounded-2xl overflow-hidden shadow-xl transition-all duration-300
            ${
              isDark
                ? "bg-gray-950/90 border-red-800/60 hover:border-red-700"
                : "bg-white border-gray-200 hover:border-red-300 shadow-gray-100"
            }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className={`w-full px-6 md:px-8 py-6 text-left flex items-center justify-between transition-all duration-300
              ${isDark ? "hover:bg-red-950/50" : "hover:bg-red-50"}`}
          >
            <span
              className={`text-xl md:text-2xl font-semibold transition-colors
              ${
                isDark
                  ? "text-white group-hover:text-red-400"
                  : "text-gray-900 group-hover:text-[#EFE5C8]"
              }`}
            >
              {faq.question}
            </span>
            <ChevronDown
              className={`w-7 h-7 md:w-8 md:h-8 flex-shrink-0 transition-transform duration-400 text-red-500
                ${openIndex === index ? "rotate-180" : ""}`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openIndex === index ? "auto" : 0,
              opacity: openIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className={`px-6 md:px-8 pb-6 pt-3 leading-relaxed text-base md:text-lg border-t
              ${isDark ? "text-gray-300 border-red-900/50" : "text-gray-700 border-gray-200"}`}
            >
              {faq.answer}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const Service = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  // Dark mode observer
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Scroll to top
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>IT & Digital Marketing Services | Atla IKS</title>
        <meta
          name="description"
          content="Explore website development, SEO, app development, software & branding services for business growth."
        />
        <meta
          name="keywords"
          content="IT Services Company	Digital Marketing Services, Web Solutions, Software Development, Branding Services, SEO Services, App Development, BPO Services, IT Solutions Provider, Digital Marketing Agency, Custom Software, Website Development, Online Marketing, Business Growth Solutions"
        />
      </Helmet>
      <div
        className={`relative min-h-screen overflow-x-hidden transition-colors duration-500
      ${isDark ? "bg-black text-gray-100" : "bg-gray-50 text-gray-900"}`}
      >
        {/* ==================== HERO SECTION WITH BACKGROUND IMAGE ==================== */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          {/* Background Image - Only in Hero */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2340&q=80"
              alt="Services Background"
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 transition-all duration-700
              ${
                isDark
                  ? "bg-gradient-to-br from-black/85 via-black/75 to-black/90"
                  : "bg-gradient-to-br from-black/60 via-black/50 to-black/40"
              }`}
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              <span className="bg-gradient-to-r from-red-500 via-rose-400 to-red-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>

            <p
              className={`mt-6 text-xl md:text-2xl max-w-4xl mx-auto font-light leading-relaxed text-white/90`}
            >
              End-to-end IT solutions & premium BPO services — empowering your
              business with innovation, reliability, and scale.
            </p>

            <div className="mt-10 h-1.5 w-40 mx-auto rounded-full bg-gradient-to-r from-red-600 to-rose-600" />
          </div>
        </section>

        {/* ==================== MAIN CONTENT (No Background Image) ==================== */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-24 lg:py-32">
          {/* IT Services Section */}
          <section className="mb-24 md:mb-32">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden border shadow-2xl relative group">
                <div className="w-full aspect-[4/5] lg:aspect-auto lg:h-[720px] overflow-hidden">
                  <img
                    src={serviceimg2}
                    alt="Modern development"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              </div>

              <div className="w-full lg:w-1/2 space-y-8">
                <h2
                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent 
                ${isDark ? "from-red-400 to-rose-500" : "from-red-600 via-red-700 to-rose-600"}`}
                >
                  Information Technology Services
                </h2>

                <p
                  className={`text-xl leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  Full-cycle development — from concept to deployment and
                  long-term success.
                </p>

                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    {
                      title: "Website & Enterprise Apps",
                      desc: "Custom portals, dashboards, ERP & scalable solutions",
                    },
                    {
                      title: "Testing & Deployment",
                      desc: "Automated & manual QA, CI/CD, smooth production rollout",
                    },
                    {
                      title: "Application Maintenance (AMS)",
                      desc: "Proactive monitoring, updates, performance tuning",
                    },
                    {
                      title: "Digital Transformation",
                      desc: "Cloud migration, legacy modernization, strategy",
                    },
                    {
                      title: "Government & PSU Projects",
                      desc: "Secure systems, citizen portals, compliance-focused delivery",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`group backdrop-blur-md border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                      ${
                        isDark
                          ? "bg-gray-950/80 border-red-900/40 hover:border-red-600/60"
                          : "bg-white border-gray-200 hover:border-red-400"
                      }`}
                    >
                      <h4
                        className={`text-xl font-semibold mb-3 transition-colors ${
                          isDark
                            ? "text-white group-hover:text-red-400"
                            : "text-gray-900 group-hover:text-[#EFE5C8]"
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={`transition-colors ${isDark ? "text-gray-400 group-hover:text-gray-300" : "text-gray-700 group-hover:text-gray-800"}`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  {[
                    "Java + Spring Boot",
                    "React / Next.js",
                    "Node.js",
                    "PostgreSQL / MongoDB",
                    "AWS / Azure",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors
                      ${
                        isDark
                          ? "bg-red-950/50 border-red-800 text-red-300 hover:bg-red-900/60"
                          : "bg-red-100 border-red-200 text-red-700 hover:bg-red-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Digital Marketing Section */}
          <section className="mb-24 md:mb-32">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden border shadow-2xl relative group">
                <div className="w-full aspect-[4/5] lg:aspect-auto lg:h-[620px] overflow-hidden">
                  <img
                    src={serviceimg1}
                    alt="Digital Marketing"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              </div>

              <div className="w-full lg:w-1/2 space-y-8">
                <h2
                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent 
                ${isDark ? "from-red-400 to-rose-500" : "from-red-600 via-red-700 to-rose-600"}`}
                >
                  Digital Marketing
                </h2>

                <p
                  className={`text-xl leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  Boost your online presence with strategic digital marketing
                  solutions — driving traffic, engagement, and conversions.
                </p>

                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    {
                      title: "Search Engine Optimization (SEO)",
                      desc: "Improve search rankings, organic traffic, and visibility",
                    },
                    {
                      title: "Social Media Marketing",
                      desc: "Engage audiences on platforms like Facebook, Instagram, LinkedIn",
                    },
                    {
                      title: "Pay-Per-Click (PPC) Advertising",
                      desc: "Targeted ads on Google, Bing, and social media",
                    },
                    {
                      title: "Content Marketing",
                      desc: "Create valuable content to attract and retain customers",
                    },
                    {
                      title: "Email Marketing",
                      desc: "Build relationships and drive sales through personalized campaigns",
                    },
                    {
                      title: "Analytics & Reporting",
                      desc: "Track performance, insights, and ROI optimization",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`group backdrop-blur-md border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                      ${
                        isDark
                          ? "bg-gray-950/80 border-red-900/40 hover:border-red-600/60"
                          : "bg-white border-gray-200 hover:border-red-400"
                      }`}
                    >
                      <h4
                        className={`text-xl font-semibold mb-3 transition-colors ${
                          isDark
                            ? "text-white group-hover:text-red-400"
                            : "text-gray-900 group-hover:text-[#EFE5C8]"
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={`transition-colors ${isDark ? "text-gray-400 group-hover:text-gray-300" : "text-gray-700 group-hover:text-gray-800"}`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  {[
                    "Google Ads",
                    "Facebook Ads",
                    "SEO Tools",
                    "Analytics",
                    "Content Management",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors
                      ${
                        isDark
                          ? "bg-red-950/50 border-red-800 text-red-300 hover:bg-red-900/60"
                          : "bg-red-100 border-red-200 text-red-700 hover:bg-red-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* BPO Section */}
          <section className="mb-24 md:mb-32">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2 space-y-8">
                <h2
                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent 
                ${isDark ? "from-red-400 to-rose-500" : "from-red-600 via-red-700 to-rose-600"}`}
                >
                  Business Process Outsourcing (BPO)
                </h2>

                <p
                  className={`text-xl leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  High-quality customer support, data operations & back-office
                  excellence — 24/7 ready.
                </p>

                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    {
                      title: "Voice • Chat • Email Support",
                      desc: "Inbound / outbound calls, live chat, structured email handling",
                    },
                    {
                      title: "Cataloguing & Data Enrichment",
                      desc: "Product descriptions, SEO tags, image validation",
                    },
                    {
                      title: "Level 2 (L2) Support",
                      desc: "Advanced troubleshooting, root cause analysis",
                    },
                    {
                      title: "Quality & Infrastructure",
                      desc: "SLA compliance, regular audits, coaching",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`group backdrop-blur-md border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                      ${
                        isDark
                          ? "bg-gray-950/80 border-red-900/40 hover:border-red-600/60"
                          : "bg-white border-gray-200 hover:border-red-400"
                      }`}
                    >
                      <h4
                        className={`text-xl font-semibold mb-3 transition-colors ${
                          isDark
                            ? "text-white group-hover:text-red-400"
                            : "text-gray-900 group-hover:text-[#EFE5C8]"
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={`transition-colors ${isDark ? "text-gray-400 group-hover:text-gray-300" : "text-gray-700 group-hover:text-gray-800"}`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden border shadow-2xl relative group">
                <div className="w-full aspect-[4/5] lg:aspect-auto lg:h-[620px] overflow-hidden">
                  <img
                    src={BPO}
                    alt="BPO Support"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section
            className={`relative py-20 md:py-24 lg:py-28 px-5 sm:px-8 md:px-10 lg:px-16 overflow-hidden rounded-3xl my-12 md:my-16
          ${isDark ? "bg-gray-950/90 border border-red-900/50" : "bg-white border border-gray-100 shadow-2xl"}`}
          >
            <div className="relative z-10 max-w-6xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2
                  variants={fadeInUp}
                  className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 md:mb-8 tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  FREQUENTLY <span className="text-red-500">ASKED</span>{" "}
                  QUESTIONS
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className={`text-lg sm:text-xl md:text-2xl text-center mb-12 md:mb-16 font-light max-w-4xl mx-auto ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  Got questions? We've got clear, straightforward answers.
                </motion.p>

                <FAQAccordion isDark={isDark} />
              </motion.div>
            </div>
          </section>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-xl border transition-all duration-300
            ${
              isDark
                ? "bg-gray-900 border-gray-700 hover:bg-gray-800 text-white"
                : "bg-white border-gray-200 hover:bg-gray-50 text-gray-900 shadow-lg"
            }`}
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>
        )}
      </div>
    </>
  );
};

export default Service;
