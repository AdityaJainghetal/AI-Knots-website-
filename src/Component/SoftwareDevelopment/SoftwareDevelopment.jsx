import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Globe,
  Server,
  Smartphone,
  Database,
  Cloud,
  Users,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
// High-quality images for visual appeal (Unsplash free stock - perfect for software dev theme)
const images = {
  hero: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Modern coding team
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Collaborative dev team
  codeWorkspace:
    "https://images.unsplash.com/photo-1555066931-bf19c9cb1085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Clean code on multiple screens
  cloudDevops:
    "https://images.unsplash.com/photo-1563986768609-620da13593e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Cloud infrastructure visualization
  mobileApps:
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Mobile app screens mockup
  growthChart:
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Business growth analytics
  caseStudyDashboard:
    "https://images.unsplash.com/photo-1551288049-b1f4d7c0e309?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", // Analytics dashboard for case studies
};

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    desc: "Develop software applications according to the changing needs of your business and customers. We build fully functional, feature-rich, and scalable software that solves business challenges and supports growth.",
  },
  {
    icon: Globe,
    title: "Web Development Services",
    desc: "Grow your business with custom web development solutions that match your business requirements. Secure, scalable, and high-performance web applications that integrate perfectly with your ecosystem.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Solutions",
    desc: "Automation and cloud technologies help businesses manage operations efficiently. Streamline workflows, improve collaboration, and accelerate development while maintaining high performance.",
  },
  {
    icon: Users,
    title: "Dedicated Development Team",
    desc: "Hire a dedicated team of experienced developers, architects, and project managers who understand your business needs and deliver real solutions.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Build Android and iOS mobile applications (native & cross-platform) with smooth functionality, better performance, and excellent user experience.",
  },
  {
    icon: Database,
    title: "Staff Augmentation",
    desc: "Flexible IT staff augmentation services to scale your development team according to project needs. Fill technical gaps, speed up development, and ensure successful completion.",
  },
];

const industries = [
  "Fintech & Insurance",
  "Education",
  "Retail & eCommerce",
  "Energy & Utilities",
  "Logistics & Distribution",
  "Healthcare",
  "Travel & Hospitality",
  "Media & Entertainment",
  "Public Sector",
  "Technology",
];

const techStack = {
  backend: ["Node.js", "Java", ".NET", "PHP", "Ruby on Rails"],
  frontend: ["React", "Angular", "Vue.js"],
  database: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server", "Oracle"],
  mobile: ["iOS", "Android", "Flutter", "React Native"],
  cloud: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
  testing: ["Selenium", "Postman", "Apache JMeter", "BrowserStack"],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function SoftwareDevelopment() {
  const { isDark } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Helmet>
        <title>Best Software Development Company in India | Atla IKS</title>
        <meta
          name="description"
          content="Custom software development company for CRM, ERP and scalable business software solutions."
        />
        <meta
          name="keywords"
          content="Software Development Company India	CRM Software, ERP Development"
        />
      </Helmet>
      <div
        className={`relative overflow-hidden ${isDark ? "bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white" : "bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900"}`}
      >
        {/* Hero Section with Photo */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={images.hero}
              alt="Modern software development team collaborating"
              className="w-full h-full object-cover 
                 brightness-75 contrast-110 
                 dark:brightness-50 dark:contrast-125
                 transition-all duration-700"
              loading="lazy"
            />

            {/* Gradient Overlay - Optimized for both themes */}
            <div
              className="absolute inset-0 bg-gradient-to-t 
                    from-black/80 via-black/70 to-black/60 
                    dark:from-black/90 dark:via-black/85 dark:to-black/80"
            />
          </div>

          {/* Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 max-w-7xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight text-white"
            >
              Software Development Company India
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold mb-6 text-[#9F714E] dark:text-red-400"
            >
              Expand your business globally by outsourcing your technology
              requirements to a trusted partner.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl mb-12 max-w-5xl mx-auto leading-relaxed text-gray-200 dark:text-gray-300"
            >
              We provide high-quality software development services to
              businesses by building secure, scalable, and high-performance
              software solutions with excellent user experience.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              {/* Primary Button */}
              <button
                onClick={() => navigate("/contact")}
                className="px-12 py-6 bg-[#3d220e] text-white rounded-full text-xl md:text-2xl font-bold 
                  active:scale-95 transition-all duration-300 
                   flex items-center gap-3 group"
              >
                Get in Touch{" "}
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </button>

              {/* Secondary Button */}
              <button
                onClick={() => navigate("/portfolio")}
                className="px-12 py-6 border-2 border-[#3d220e] text-white 
                   hover:bg-[#3d220e] hover:border-[#3d220e] 
                   dark:hover:bg-[#5a3a1c] rounded-full 
                   text-xl md:text-2xl font-bold transition-all duration-300"
              >
                View Portfolio →
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Empower Section with Team Photo */}
        <section
          className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/50 text-[#9F714E]" : "bg-white/50 text-[#71553f]"}`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-10 text-center"
            >
              Empower Your Business with Modern Software Development
            </motion.h2>

            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src={images.team}
              alt="Dedicated software development team collaborating"
              className={`rounded-2xl shadow-2xl mx-auto max-w-4xl w-full object-cover mb-12 ${isDark ? "border border-red-900/30" : "border border-gray-200"}`}
            />


            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-xl mb-12 max-w-5xl mx-auto leading-relaxed text-center ${isDark ? "text-gray-300" : "text-[#704d34]"}`}
            >
              Access a skilled team of developers who can transform your
              business and help you adapt to evolving technologies.
              <br />
              <br />
              By partnering with AI Knots, businesses can gain a strong
              competitive advantage. Our team delivers reliable and efficient
              software development services that help increase productivity and
              business growth.
              <br />
              <br />
              We offer a wide range of services including software design,
              custom development, software testing, legacy system migration,
              product development, and many more solutions tailored to business
              requirements.
              <br />
              <br />
              Our dedicated team of developers ensures smooth business
              processes, improved efficiency, and long-term profitability.
            </motion.p>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {["50+", "3+", "10+", "10+"].map((num, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`rounded-2xl p-10 text-center transition-all ${isDark ? "bg-gray-900/70 border border-red-900/40 hover:border-red-600/60" : "bg-white border border-gray-200 hover:border-red-500/60 shadow-md"}`}
                >
                  <div className="text-6xl md:text-7xl font-black text-[#9F714E] mb-4">
                    {num}
                  </div>
                  <p className="text-xl font-medium">
                    {i === 0 && "Completed Projects"}
                    {i === 1 && "Years of Experience"}
                    {i === 2 && "Global Customers"}
                    {i === 3 && "Countries Clients Served"}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid with Code Workspace Photo */}
        <section
          className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/50" : "bg-gray-50 text-[#462206]"}`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-center mb-12"
            >
              Our Software Development{" "}
              <span className="text-[#9F714E]">Services</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`backdrop-blur-sm rounded-2xl p-10 hover:shadow-2xl transition-all group ${isDark ? "bg-gray-900/70 border border-red-900/40 hover:border-red-600/60 hover:shadow-red-900/30" : "bg-white border border-gray-200 hover:border-red-500/60 hover:shadow-gray-200 shadow-md"}`}
                >
                  <service.icon className="w-16 h-16 text-red-500 mb-8 mx-auto group-hover:scale-110 transition-transform" />
                  <h3
                    className={`text-2xl md:text-3xl font-bold mb-6 text-center ${isDark ? "text-white" : "text-[#462206]"}`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-lg leading-relaxed text-center ${isDark ? "text-gray-300" : "text-[#462206]"}`}
                  >
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies with Analytics Photo */}
        <section
          className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/50" : "bg-white/50 text-[#462206]"}`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-center mb-12"
            >
              Software Development{" "}
              <span className="text-red-500">Case Studies</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Media Distribution & Aggregation Platform",
                  desc: "Interactive media distribution platform integrating social media channels, managing advertising campaigns, and collecting data into a single system.",
                },
                {
                  title: "Online Forex Trading Solution",
                  desc: "Secure forex trading platform with real-time currency exchange, competitive rates, flexible payments, and strong financial security.",
                },
                {
                  title: "Smart City Application",
                  desc: "IoT-connected smart city management system for monitoring environmental data, energy usage, lighting, flood detection, and air quality.",
                },
              ].map((study, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className={`border rounded-2xl p-10 transition-all ${isDark ? "bg-gray-900/70 border-red-900/40 hover:border-red-600/60" : "bg-white border-gray-200 hover:border-red-500/60 shadow-md"}`}
                >
                  <h3
                    className={`text-2xl font-bold mb-6 ${isDark ? "text-red-400" : "text-[#714b2e]"}`}
                  >
                    {study.title}
                  </h3>
                  <p
                    className={`leading-relaxed ${isDark ? "text-gray-300" : "text-[#9F714E]"}`}
                  >
                    {study.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries + Tech Stack with Cloud Photo */}
        <section
          className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/50 text-[#9F714E]" : "bg-gray-50 text-[#462206]"}`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-center mb-12"
            >
              Industries We Work With
            </motion.h2>

            <div className="mb-20">
              <h2
                className={`text-3xl md:text-4xl font-bold text-center mb-12 ${isDark ? "bg-black/50 text-[#9F714E]" : "bg-gray-50 text-[#462206]"}`}
              >
                Industries We Serve
              </h2>

              <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                {industries.map((ind, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                      transition: { duration: 0.2 },
                    }}
                    className={`px-8 py-4 rounded-2xl text-base md:text-lg font-medium cursor-pointer transition-all duration-300 shadow-md ${
                      isDark
                        ? "bg-zinc-900 border border-red-800/60 text-gray-200 hover:border-red-500 hover:bg-red-950/70 hover:shadow-red-900/30"
                        : "bg-white border border-gray-200 text-gray-800 hover:border-red-500 hover:bg-red-50 hover:shadow-lg hover:shadow-red-100"
                    }`}
                  >
                    {ind}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-center mb-12"
            >
              Technology <span className="text-[#9F714E]">Stack</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(techStack).map(([category, techs], idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`border rounded-2xl p-8 ${isDark ? "bg-gray-900/70 border-red-900/40" : "bg-white border-gray-200 shadow-md"}`}
                >
                  <h3
                    className={`text-2xl font-bold mb-6 capitalize ${isDark ? "text-red-400" : "text-[#9F714E]"}`}
                  >
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {techs.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-4 py-2 rounded-full text-sm ${isDark ? "bg-black/50 border border-red-900/30" : "bg-gray-100 border border-gray-300"}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Sections with Code Photo */}
        <section
          className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/50" : "bg-white/50"}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
              {/* Column 1 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className={`p-8 rounded-2xl border flex flex-col h-full transition-all duration-300 hover:shadow-xl ${
                  isDark
                    ? "bg-zinc-900 border-red-900/50 hover:border-red-700"
                    : "bg-white border-red-200 hover:border-red-500"
                }`}
              >
                <h2
                  className={`text-3xl md:text-4xl font-black mb-8 ${isDark ? "text-red-400" : "text-[#9F714E]"}`}
                >
                  Why Software Outsourcing?
                </h2>

                <ul className="space-y-4 text-lg flex-1">
                  {[
                    "Reduced software development costs",
                    "Access to skilled developers",
                    "Faster development process",
                    "Access to modern technologies",
                    "Flexible and scalable development teams",
                    "Reduced operational risks",
                  ].map((point, i) => (
                    <motion.li
                      key={i}
                      variants={fadeInUp}
                      className="flex items-start gap-4"
                    >
                      <ArrowRight className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Column 2 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className={`p-8 rounded-2xl border flex flex-col h-full transition-all duration-300 hover:shadow-xl ${
                  isDark
                    ? "bg-zinc-900 border-red-900/50 hover:border-red-700"
                    : "bg-white border-red-200 hover:border-red-500"
                }`}
              >
                <h2
                  className={`text-3xl md:text-4xl font-black mb-8 ${isDark ? "text-red-400" : "text-[#9F714E]"}`}
                >
                  Why Choose India for Software Development?
                </h2>

                <ul className="space-y-4 text-lg flex-1">
                  {[
                    "Cost-effective development solutions",
                    "Highly skilled developer community",
                    "Flexible business models",
                    "24/7 development support for global clients",
                    "Access to the latest technologies",
                    "Faster project delivery",
                  ].map((point, i) => (
                    <motion.li
                      key={i}
                      variants={fadeInUp}
                      className="flex items-start gap-4"
                    >
                      <ArrowRight className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Column 3 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className={`p-8 rounded-2xl border flex flex-col h-full transition-all duration-300 hover:shadow-xl ${
                  isDark
                    ? "bg-zinc-900 border-red-900/50 hover:border-red-700"
                    : "bg-white border-red-200 hover:border-red-500"
                }`}
              >
                <h2
                  className={`text-3xl md:text-4xl font-black mb-8 ${isDark ? "text-red-400" : "text-[#9F714E]"}`}
                >
                  Why Choose AI Knots?
                </h2>

                <ul className="space-y-4 text-lg flex-1">
                  {[
                    "Clear Communication",
                    "Scalable Teams",
                    "Efficient Project Management",
                    "Strong Industry Experience",
                    "Business-Friendly Hiring Models",
                  ].map((point, i) => (
                    <motion.li
                      key={i}
                      variants={fadeInUp}
                      className="flex items-start gap-4"
                    >
                      <ArrowRight className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Development Process + Final CTA with Growth Photo */}
        <section
          className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-center mb-12"
            >
              Our Development <span className="text-[#9F714E]">Process</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {[
                "Requirement Analysis",
                "Agile Development",
                "Testing and Delivery",
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`border rounded-2xl p-10 text-center transition-all ${isDark ? "bg-gray-900/70 border-red-900/40 hover:border-red-600/60" : "bg-white border-gray-200 hover:border-red-500/60 shadow-md"}`}
                >
                  <div className="text-5xl font-black text-[#9F714E] mb-6">{`0${i + 1}`}</div>
                  <h3
                    className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {step}
                  </h3>
                  <p
                    className={`text-[#704c32] ${isDark ? "text-[#826047]" : "text-[#826047]"}`}
                  >
                    {step === "Requirement Analysis" &&
                      "We understand your business needs and define the project roadmap."}
                    {step === "Agile Development" &&
                      "Our developers follow agile methods with regular updates and feedback cycles."}
                    {step === "Testing and Delivery" &&
                      "We conduct thorough testing before deploying the final product to ensure performance and security."}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src={images.growthChart}
                alt="Business growth through software solutions"
                className={`rounded-2xl shadow-2xl mx-auto max-w-4xl w-full object-cover mb-12 ${isDark ? "border border-red-900/30" : "border border-gray-200"}`}
              />

              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-black mb-10 text-[#462206]"
              >
                Hire a Dedicated Software Development Team
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${isDark ? "text-[#826047]" : "text-[#826047]"}`}
              >
                Get access to experienced developers who can build powerful web
                and mobile applications tailored to your business needs.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section
          className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gradient-to-br from-red-950/30 to-black" : "bg-red-50"}`}
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-14 py-7 bg-[#3d220e] text-white rounded-full text-2xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all flex items-center gap-4 mx-auto"
            >
              <button onClick={() => navigate("/contact")}>Contact Us</button>
              <ArrowRight className="w-auto h-8" />
            </motion.button>
          </div>
        </section>

        {/* FAQ */}
        <section
          className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/60" : "bg-white/60"}`}
        >
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-center mb-16"
            >
              Frequently Asked Questions
            </motion.h2>

            <div className="space-y-8">
              {[
                {
                  q: "What is the cost of software development?",
                  a: "The cost depends on the complexity, features, and timeline of the project.",
                },
                {
                  q: "Do you offer custom software development?",
                  a: "Yes, we specialize in building custom software solutions based on business needs.",
                },
                {
                  q: "Can I hire a dedicated development team?",
                  a: "Yes, we offer dedicated developer hiring models for businesses.",
                },
                {
                  q: "Do you provide maintenance and support?",
                  a: "Yes, we provide post-development support and maintenance services.",
                },
                {
                  q: "Which industries do you work with?",
                  a: "We serve industries such as healthcare, education, fintech, retail, logistics, and many others.",
                },
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`border rounded-2xl p-8 ${isDark ? "bg-gray-900/70 border-red-900/40" : "bg-white border-gray-200 shadow-md"}`}
                >
                  <h3
                    className={`text-2xl font-bold mb-4 ${isDark ? "text-[#a1814d]" : "text-[#a1814d]"}`}
                  >
                    {faq.q}
                  </h3>
                  <p
                    className={`text-lg leading-relaxed ${isDark ? "text-[#745625]" : "text-[#8d7146]"}`}
                  >
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/50 transition-all duration-300 hover:scale-110 active:scale-95 ${
            showScrollTop
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-16 pointer-events-none"
          }`}
          aria-label="Scroll back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
