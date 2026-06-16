import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import AIML from "../../assets/Images/AIML.png";
import {
  Brain,
  Users,
  LineChart,
  MessageSquare,
  Sparkles,
  Zap,
  Database,
  ArrowRight,
  CheckCircle2,
  Hospital,
  ShoppingCart,
  Landmark,
  GraduationCap,
  Home,
  TrendingUp,
  ShieldAlert,
  Megaphone,
  Headphones,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import aws from "../../assets/Images/aws.jpeg";
import { useNavigate } from "react-router-dom";
const images = {
  hero: aws,
  neural: AIML,
  analytics:
    "https://thumbs.dreamstime.com/b/futuristic-digital-interface-displaying-central-wave-graph-surrounding-data-visualizations-charts-feature-red-blue-391300624.jpg",
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
    icon: Zap,
    title: "AI-Based Automation",
    desc: "We help automate daily business operations such as customer support, data entry, and workflows, saving time and cost.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    desc: "Using machine learning models, we analyze past data to predict future outcomes like sales trends, customer actions, and market demand.",
  },
  {
    icon: MessageSquare,
    title: "Chatbot Development",
    desc: "We build smart AI chatbots that handle customer queries, provide instant responses, and improve user engagement.",
  },
  {
    icon: Database,
    title: "Data Analysis & Insights",
    desc: "We process large volumes of data to generate meaningful insights that help businesses make informed decisions.",
  },
  {
    icon: Sparkles,
    title: "Recommendation Systems",
    desc: "We create intelligent systems that suggest products or services based on user behavior, improving sales and customer experience.",
  },
  {
    icon: Brain,
    title: "Image & Speech Recognition",
    desc: "Our AI solutions can recognize images, voice, and patterns for advanced applications like security, automation, and customer interaction.",
  },
];

const keyFeatures = [
  "Data-driven decision making",
  "Scalable and flexible solutions",
  "Easy integration with existing systems",
  "Real-time data processing",
  "Secure and reliable architecture",
];

const industries = [
  {
    icon: Hospital,
    title: "Healthcare",
    desc: "Patient prediction, diagnostics support, personalized care.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    desc: "Demand forecasting, recommendations, inventory optimization.",
  },
  {
    icon: Landmark,
    title: "Finance",
    desc: "Fraud detection, risk assessment, algorithmic trading.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Adaptive learning, student performance prediction.",
  },
  {
    icon: Home,
    title: "Real Estate",
    desc: "Property valuation, buyer matching, market trend analysis.",
  },
  {
    icon: Users,
    title: "Startups & Small Businesses",
    desc: "Affordable AI tools for growth and efficiency.",
  },
];

const useCases = [
  { icon: Users, title: "Customer behavior analysis" },
  { icon: TrendingUp, title: "Sales forecasting" },
  { icon: ShieldAlert, title: "Fraud detection" },
  { icon: Zap, title: "Process automation" },
  { icon: Megaphone, title: "Personalized marketing" },
  { icon: Headphones, title: "Smart chat support" },
];

const faqs = [
  {
    q: "What are AI & Machine Learning services?",
    a: "These services help businesses use data and automation to improve operations, make better decisions, and increase efficiency.",
  },
  {
    q: "How can AI help my business?",
    a: "AI helps in reducing manual work, improving customer experience, and increasing accuracy in decision-making.",
  },
  {
    q: "Do I need technical knowledge to use AI solutions?",
    a: "No, we provide user-friendly solutions that are easy to use for non-technical users as well.",
  },
  {
    q: "How long does it take to implement AI solutions?",
    a: "It depends on the project, but basic solutions can be implemented within a few weeks.",
  },
  {
    q: "Are AI solutions expensive?",
    a: "We offer cost-effective solutions based on your business needs and budget.",
  },
];

export default function AIServices() {
  const { isDark } = useTheme();
  const [openFaq, setOpenFaq] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const t = {
    bg: isDark ? "bg-gray-950 text-white" : "bg-white text-[#3d220e]",
    sectionBg: isDark ? "bg-gray-950" : "bg-gray-50",
    sectionBg2: isDark ? "bg-gray-900" : "bg-gray-50",
    sectionBg3: isDark ? "bg-gray-900/95" : "bg-gray-100",
    sectionBg4: isDark ? "bg-gray-950" : "bg-white",
    sectionBg5: isDark ? "bg-gray-900" : "bg-gray-100",
    card: isDark
      ? "bg-gray-900 border border-gray-800 shadow-sm"
      : "bg-white border border-gray-100 shadow-sm",
    cardGrad: isDark
      ? "bg-gradient-to-br from-slate-950 via-gray-900 to-black border border-gray-800 shadow-sm"
      : "bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm",
    faqCard: isDark
      ? "border border-gray-800 bg-gray-900"
      : "border border-gray-100 bg-white shadow-sm",
    faqHover: isDark ? "hover:bg-gray-800" : "hover:bg-red-50",
    text: isDark ? "text-gray-300" : "text-[#3d220e]",
    heroText: isDark ? "text-gray-200" : "text-gray-200",
    featureCard: isDark
      ? "bg-gray-900 border border-gray-800"
      : "bg-white border border-gray-100 shadow-sm",
    useCase: isDark
      ? "bg-gray-900 border border-gray-800"
      : "bg-white border border-gray-100 shadow-sm",
  };

  return (
    <>
      <Helmet>
        <title>AI & ML Services Company India | Atla IKS</title>
        <meta
          name="description"
          content="AI and machine learning services for automation, analytics & smart business solutions."
        />
        <meta
          name="keywords"
          content="AI ML Services Company	Artificial Intelligence Services"
        />
      </Helmet>
      <div
        className={`relative ${t.bg} overflow-hidden transition-colors duration-300`}
      >
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={images.hero}
              alt="Futuristic AI Dashboard"
              className="w-full h-full object-cover 
                 brightness-75 contrast-110 
                 dark:brightness-45 dark:contrast-125
                 transition-all duration-700"
              loading="lazy"
            />

            {/* Gradient Overlay - Optimized for both themes */}
            <div
              className="absolute inset-0 bg-gradient-to-t 
                    from-black/75 via-black/65 to-black/80 
                    dark:from-black/90 dark:via-black/85 dark:to-black/90"
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
              className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight text-white"
            >
              AI & Machine Learning Services in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F714E] to-[#9F714E]/90">
                Bhopal
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-2xl md:text-4xl font-bold mb-8 text-[#a17451] dark:text-[#9F714E]"
            >
              Turn Data into Decisions — Automate, Predict, Win
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className={`text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed ${t.heroText}`}
            >
              At{" "}
              <span className="text-[#d9c5b5] dark:text-[#af8360] font-semibold">
                AI KNOTS IT SOLUTION
              </span>
              , we provide advanced AI & Machine Learning Services that help
              businesses automate processes, analyze data, and make smarter
              decisions. In today's fast-growing digital world, using AI is no
              longer optional — it's essential for staying ahead of the
              competition.
            </motion.p>

            <motion.ul
              variants={fadeInUp}
              className={`flex flex-wrap justify-center gap-6 mb-12 text-lg ${t.heroText}`}
            >
              {[
                "Understand customer behavior",
                "Predict future trends",
                "Automate repetitive tasks",
                "Improve decision-making",
                "Deliver personalized user experiences",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-[#a27350] dark:text-[#9F714E]" />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              {/* Primary Button */}
              <button
                onClick={() => navigate("/contact")}
                className="px-12 py-6 bg-gradient-to-r from-[#9F714E] to-[#9F714E]/90
                   text-white rounded-full text-xl md:text-2xl font-bold 
                   shadow-xl shadow-[#9F714E]/60 hover:shadow-[#9F714E] 
                   hover:scale-105 active:scale-95 transition-all duration-300 
                   flex items-center gap-3 group"
              >
                Get Free AI Consultation
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </button>

              {/* Secondary Button */}
            </motion.div>
          </motion.div>
        </section>
        {/* What is AI & ML */}
        <section
          className={`py-20 px-4 sm:px-6 lg:px-8 ${t.sectionBg} transition-colors duration-300`}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-6xl font-black mb-10 ${isDark ? "text-white" : "text-[#3d220e]"}`}
            >
              What is{" "}
              <span className="text-[#3d220e] dark:text-[#9F714E]">AI & Machine Learning</span> in
              Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-xl ${t.text} max-w-5xl mx-auto leading-relaxed`}
            >
              Artificial Intelligence (AI) and Machine Learning (ML) are
              technologies that allow systems to learn from data and improve
              over time without manual effort.
              <br />
              <br />
              We help businesses turn their data into powerful insights using
              AI-driven solutions that improve efficiency, reduce manual work,
              and increase overall performance.
            </motion.p>
          </div>
        </section>

        {/* Our Services */}
        <section
          className={`py-24 px-4 sm:px-6 lg:px-8 ${t.sectionBg} transition-colors duration-300`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-6xl font-black text-center mb-16 ${isDark ? "text-white" : "text-[#3d220e]"}`}
            >
              Our <span className="text-[#3d220e] dark:text-[#9F714E]">AI & ML Services</span>
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className={`${t.card} rounded-2xl p-8 md:p-10 hover:shadow-2xl transition-all group flex flex-col items-center text-center min-h-[260px]`}
                >
                  <service.icon className="w-14 h-14 md:w-16 md:h-16 text-[#3d220e] dark:text-[#9F714E] mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    {service.title}
                  </h3>
                  <p className={`${t.text} text-base`}>{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Key Features */}
        <section
          className={`py-20 px-4 sm:px-6 lg:px-8 ${t.sectionBg3} transition-colors duration-300`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl font-black text-center mb-12 ${isDark ? "text-white" : "text-[#3d220e]"}`}
            >
              Key Features of Our AI & ML Solutions
            </motion.h2>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {keyFeatures.map((feature, idx) => (
                <motion.li
                  key={idx}
                  variants={fadeInUp}
                  className={`${t.featureCard} rounded-xl p-6 text-center text-lg font-medium flex items-center justify-center gap-3`}
                >
                  <CheckCircle2 className="w-6 h-6 text-[#3d220e] dark:text-[#9F714E] flex-shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* Why Choose Us */}
        <section
          className={`py-24 px-4 sm:px-6 lg:px-8 ${t.sectionBg2} transition-colors duration-300`}
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className={`text-4xl md:text-6xl font-black mb-8 ${isDark ? "text-white" : "text-[#3d220e]"}`}
              >
                Why Choose{" "}
                <span className="text-[#3d220e] dark:text-[#9F714E]">AI Knots IT Solutions</span>?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className={`text-xl ${t.text} mb-8`}
              >
                AI KNOTS IT SOLUTION is a trusted provider of AI & Machine
                Learning Services in Bhopal, focused on delivering practical and
                result-oriented solutions. We don't just build technology, we
                build solutions that solve real business problems.
              </motion.p>
              <motion.ul
                variants={fadeInUp}
                className={`space-y-4 text-lg ${t.text}`}
              >
                {[
                  "Customized AI solutions for your business",
                  "Experienced development team",
                  "Latest tools and technologies",
                  "Affordable pricing",
                  "Focus on real business outcomes",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#3d220e] dark:text-[#9F714E] flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src={images.neural}
              alt="Neural Network Visualization"
              className={`rounded-2xl shadow-2xl border ${isDark ? "border-red-900/30" : "border-red-200"} w-full`}
              loading="lazy"
            />
          </div>
        </section>

        {/* Industries */}
        <section
          className={`py-24 px-4 sm:px-6 lg:px-8 ${t.sectionBg2} transition-colors duration-300`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-6xl font-black text-center mb-16 ${isDark ? "text-white" : "text-[#3d220e]"}`}
            >
              Industries We Serve
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((ind, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className={`${t.cardGrad} rounded-2xl p-10 hover:shadow-2xl transition-all group text-center`}
                >
                  <ind.icon className="w-16 h-16 text-[#3d220e] dark:text-[#9F714E] mb-6 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="text-3xl font-black mb-4">{ind.title}</h3>
                  <p className={`text-lg ${t.text}`}>{ind.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section
          className={`py-20 px-4 sm:px-6 lg:px-8 ${t.sectionBg} transition-colors duration-300`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl font-black text-center mb-12 ${isDark ? "text-white" : "text-[#3d220e]"}`}
            >
              Use Cases of AI & Machine Learning
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {useCases.map((useCase, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className={`${t.useCase} rounded-xl p-6 flex items-center gap-4 transition-all`}
                >
                  <useCase.icon className="w-10 h-10 text-[#3d220e] dark:text-[#9F714E] flex-shrink-0" />
                  <span className="text-xl font-bold">{useCase.title}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section
          className={`py-24 px-4 sm:px-6 lg:px-8 ${t.sectionBg5} transition-colors duration-300`}
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-6xl font-black mb-8 ${isDark ? "text-white" : "text-[#3d220e]"}`}
            >
              Get Started with AI Machine learning Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-xl md:text-2xl ${t.text} mb-12 max-w-3xl mx-auto`}
            >
              Transform your business with smart technology. Partner with AI
              Knots IT Solutions for reliable and result-driven AI & Machine
              Learning Services in Bhopal.
            </motion.p>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/contact")}
              className="px-12 py-6 md:px-14 md:py-7 bg-gradient-to-r from-[#3d220e] to-[#3d220e]/90 rounded-full text-xl md:text-3xl font-black shadow-2xl shadow-[#3d220e]/60 hover:shadow-[#3d220e]/80 transition-all text-white"
            >
              Contact Us Now →
            </motion.button>
          </div>
        </section>

        {/* FAQ */}
        <section
          className={`py-24 px-4 sm:px-6 lg:px-8 ${t.sectionBg4} transition-colors duration-300`}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-6xl font-black text-center mb-16 ${isDark ? "text-white" : "text-[#3d220e]"}`}
            >
              Frequently Asked <span className="text-[#3d220e] dark:text-[#9F714E]">Questions</span>
            </motion.h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`${t.faqCard} rounded-xl overflow-hidden`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className={`w-full px-6 py-5 md:px-8 md:py-6 text-left flex justify-between items-center ${t.faqHover} transition-colors`}
                  >
                    <span className="text-lg md:text-xl font-bold pr-4">
                      {faq.q}
                    </span>
                    <span
                      className={`text-[#3d220e] dark:text-[#9F714E] text-xl transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
                    >
                      ▼
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div
                      className={`px-6 pb-6 md:px-8 ${t.text} text-base leading-relaxed`}
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
      </div>
    </>
  );
}
