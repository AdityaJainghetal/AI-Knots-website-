import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import {
  ShieldCheck,
  Cloud,
  Server,
  Database,
  ArrowUpRight,
  Scale,
  Lock,
  Cpu,
  Globe,
  HardDrive,
  Zap,
  Code,
  Container,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sun,
  Moon,
  ChevronDown,
} from "lucide-react";

// Placeholder images
const images = {
  hero: "https://cdn.prod.website-files.com/646e120d6d1b3e437d8b5803/6501bc2b71ecba4b05b3b9d9_X5aZrndcHEi_Rug_WZ1le8pKXCaQvXYT_7Wutcw6adALMBSda8_8nuXDLPM_jrgzAF0h28IA6ZQuJ_buuwe7Jk3py8ElkcvPoUHeoJJt8Eo94uINQgyeB39TUQRjzXlT7WWcLFl16ttUbf_0t1w450Q.jpeg",
  migration:
    "https://www.nsight-inc.com/wp-content/uploads/2023/11/iStock-1239864853-min.jpg",
  k8s: "https://miro.medium.com/1*N2TmMYRqfCcHrYErZJ9JNA.png",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cloudTypes = [
  {
    icon: Server,
    title: "Private Cloud",
    desc: "Fully dedicated environment with complete control, maximum security, and tailored scalability for sensitive workloads.",
  },
  {
    icon: Cloud,
    title: "Enterprise Cloud",
    desc: "Cost-optimized, high-performance cloud for growing businesses — reliable, flexible, and ready to scale.",
  },
  {
    icon: ShieldCheck,
    title: "BFSI Cloud Solutions",
    desc: "Banking-grade security, compliance, encryption, and disaster recovery built for financial institutions.",
  },
  {
    icon: Globe,
    title: "Government Cloud",
    desc: "Compliant, secure infrastructure designed for government digital transformation and public sector needs.",
  },
  {
    icon: Cpu,
    title: "SAP HANA Cloud Solutions",
    desc: "High-performance real-time analytics, data processing, and decision-making in the cloud.",
  },
];

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Advanced Security & Compliance",
    desc: "Enterprise-grade protection and regulatory adherence.",
  },
  {
    icon: HardDrive,
    title: "Flexible Storage Solutions",
    desc: "Block, file, object — whatever your needs.",
  },
  {
    icon: Cpu,
    title: "Virtual Machines & Compute",
    desc: "On-demand high-performance computing.",
  },
  {
    icon: Zap,
    title: "Serverless Computing",
    desc: "Pay only for actual usage.",
  },
  {
    icon: Globe,
    title: "CDN & Media Services",
    desc: "Ultra-fast global content delivery.",
  },
  {
    icon: Database,
    title: "Database Management",
    desc: "Optimized storage and querying.",
  },
  {
    icon: BarChart3,
    title: "Data Lake & Analytics",
    desc: "Turn raw data into actionable insights.",
  },
  {
    icon: Code,
    title: "DevOps Support",
    desc: "Automated workflows and faster deployments.",
  },
  {
    icon: Container,
    title: "Kubernetes Services",
    desc: "Container orchestration and auto-scaling.",
  },
  {
    icon: Lock,
    title: "Business Continuity & DR",
    desc: "Zero-downtime recovery plans.",
  },
];

export default function CloudSolutions() {
  const { isDark } = useTheme();
  const [openFAQ, setOpenFAQ] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Cloud Solutions Company India | Atla IKS</title>
        <meta
          name="description"
          content="Scalable cloud computing solutions for migration, hosting & enterprise growth."
        />
        <meta
          name="keywords"
          content="Cloud Solutions Company India	Cloud Migration, Cloud Services"
        />
      </Helmet>
      <div
        className={`min-h-screen transition-colors duration-500 overflow-hidden ${isDark ? "bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white" : "bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900"}`}
      >
        {/* Theme Toggle */}

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={images.hero}
              alt="Modern cloud dashboard"
              className={`w-full h-full object-cover transition-all duration-700 ${isDark ? "brightness-50 contrast-125" : "brightness-75 contrast-110"}`}
              loading="lazy"
            />

            {/* Gradient Overlay - Optimized for both themes */}
            <div
              className={`absolute inset-0 bg-gradient-to-b ${isDark ? "from-black/85 via-black/75 to-black/90" : "from-black/70 via-black/60 to-black/80"}`}
            />

            {/* Optional subtle light mode tint */}
            {!isDark && (
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
            )}
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
              Empowering Indian Businesses with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                Smart Cloud Solutions
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className={`text-2xl md:text-4xl font-bold mb-8 ${isDark ? "text-[#f9e8c8]" : "text-[#9F714E]"}`}
            >
              Scale Securely, Save Costs, Grow Limitlessly
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className={`text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-300"}`}
            >
              At{" "}
              <span
                className={`font-semibold ${isDark ? "text-[#f9e8c8]" : "text-[#f9e8c8]"}`}
              >
                AI Knots IT Solution
              </span>
              , we deliver fast, secure, and scalable cloud infrastructure
              tailored for Indian startups, enterprises, and regulated sectors.
            </motion.p>

            <motion.ul
              variants={fadeInUp}
              className={`flex flex-wrap justify-center gap-6 mb-12 text-lg ${isDark ? "text-gray-300" : "text-gray-300"}`}
            >
              {[
                "Advanced data protection",
                "Pay-as-you-go savings",
                "Seamless scaling",
                "Full compliance support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-[#8B6B4A]" /> {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button
                onClick={() => navigate("/contact")}
                className={`px-12 py-6 border-2 border-[#e9e4df] font-bold rounded-full text-xl md:text-2xl transition-all duration-300 ${isDark ? "text-white hover:bg-[#8B6B4A]/50 hover:border-[#8B6B4A]" : "text-white hover:bg-[#8B6B4A] hover:border-[#8B6B4A]"}`}
              >
                Free Consultation
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Why Cloud */}
        <section
          className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/50" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className={`text-4xl md:text-6xl font-black mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Why Your Business Needs Reliable
                <span className="text-[#8B6B4A]">Cloud Solutions</span>{" "}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className={`text-xl max-w-4xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                Move beyond outdated hardware — embrace secure, scalable,
                cost-efficient cloud that grows with you.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Lock,
                  title: "Advanced Security",
                  desc: "Protect data with encryption, firewalls, and compliance.",
                },
                {
                  icon: Server,
                  title: "No More Expensive Hardware",
                  desc: "Eliminate on-premises maintenance costs.",
                },
                {
                  icon: Scale,
                  title: "Instant Scalability",
                  desc: "Scale resources up/down in minutes.",
                },
                {
                  icon: Globe,
                  title: "Global Compliance",
                  desc: "Meet Indian & international data regulations.",
                },
                {
                  icon: BarChart3,
                  title: "Pay-as-You-Use",
                  desc: "Optimize spending with usage-based pricing.",
                },
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className={`border rounded-2xl p-10 hover:shadow-2xl transition-all group ${isDark ? "bg-gray-900/70 border-red-900/40 hover:border-[#8B6B4A]" : "bg-white border-gray-200 hover:border-[#8B6B4A]"}`}
                >
                  <benefit.icon
                    className={`w-16 h-16 mb-6 mx-auto group-hover:scale-110 transition-transform ${isDark ? "text-[#f9e8c8]" : "text-[#8B6B4A]"}`}
                  />
                  <h3
                    className={`text-2xl font-bold mb-4 text-center ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className={`text-center ${isDark ? "text-gray-300" : "text-gray-600"}`}
                  >
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Types */}
        <section
          className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-transparent" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-6xl font-black text-center mb-16 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Cloud Solutions{" "}
              <span className="text-[#8B6B4A]">Tailored for You</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cloudTypes.map((type, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`rounded-2xl p-10 hover:shadow-2xl transition-all group text-center ${isDark ? "bg-gradient-to-br from-gray-900 to-black border border-red-900/40 hover:border-red-600" : "bg-white border border-gray-200 hover:border-red-600"}`}
                >
                  <type.icon
                    className={`w-16 h-16 mb-6 mx-auto group-hover:scale-110 transition-transform ${isDark ? "text-red-500" : "text-[#8B6B4A]"}`}
                  />
                  <h3
                    className={`text-3xl font-black mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {type.title}
                  </h3>
                  <p
                    className={`text-lg mb-8 ${isDark ? "text-gray-300" : "text-gray-600"}`}
                  >
                    {type.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section
          className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-6xl font-black text-center mb-12 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Enterprise-Grade{" "}
              <span className="text-[#8B6B4A]">Cloud Capabilities</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {capabilities.map((cap, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`rounded-2xl p-8 hover:shadow-2xl transition-all group flex flex-col items-center text-center ${isDark ? "bg-gray-900/70 border border-red-900/40 hover:border-[#8B6B4A]" : "bg-white border border-gray-200 hover:border-[#8B6B4A]"}`}
                >
                  <cap.icon
                    className={`w-12 h-12 mb-6 group-hover:scale-110 transition-transform ${isDark ? "text-[#f9e8c8]" : "text-[#8B6B4A]"}`}
                  />
                  <h3
                    className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {cap.title}
                  </h3>
                  <p
                    className={`${isDark ? "text-gray-300" : "text-gray-600"}`}
                  >
                    {cap.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mt-16 grid md:grid-cols-2 gap-12 items-center"
            >
              <motion.img
                variants={fadeInUp}
                src={images.k8s}
                alt="Kubernetes dashboard"
                className={`rounded-2xl shadow-2xl border w-full ${isDark ? "border-red-900/30" : "border-gray-200"}`}
                loading="lazy"
              />
              <motion.div variants={fadeInUp}>
                <h3
                  className={`text-3xl font-black mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  Kubernetes-Powered Scaling
                </h3>
                <p
                  className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  Orchestrate containers effortlessly, auto-scale workloads, and
                  deploy faster with our managed Kubernetes services — perfect
                  for modern, cloud-native applications.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/70" : "bg-white"}`}
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`text-4xl md:text-6xl font-black mb-8 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Ready to Transform Your Business with{" "}
              <span className="text-[#8B6B4A]">Smart Cloud</span>?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className={`text-xl md:text-2xl mb-12 ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              Secure migration, optimized costs, unbreakable security — let's
              build your future-ready cloud infrastructure today.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/contact")}
              className={`px-14 py-7 rounded-full text-2xl md:text-3xl font-black shadow-2xl transition-all ${isDark ? "bg-[#8B6B4A] text-white shadow-red-900/60 hover:shadow-red-700/80" : "bg-[#3d220e] text-white shadow-red-800/60 hover:shadow-red-600/80"}`}
            >
              Start Your Cloud Journey →
            </motion.button>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/50" : "bg-gray-50"}`}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2
                className={`text-4xl md:text-6xl font-black mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Frequently Asked{" "}
                <span className="text-[#8B6B4A]">Questions</span>
              </h2>
              <p
                className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                Everything you need to know about our cloud solutions
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  q: "What cloud solutions do you offer?",
                  a: "We provide Private Cloud, Enterprise Cloud, BFSI Cloud, Government Cloud, and SAP HANA Cloud Solutions. Each is customized for your industry and compliance needs.",
                },
                {
                  q: "How secure is your cloud infrastructure?",
                  a: "Our cloud uses enterprise-grade encryption, multi-layer firewalls, regular security audits, and compliance with Indian & international standards like ISO 27001, RBI guidelines, and GDPR.",
                },
                {
                  q: "Can you migrate my existing systems to the cloud?",
                  a: "Yes, we handle end-to-end cloud migration with zero downtime. Our team manages data transfer, system reconfiguration, testing, and post-migration support.",
                },
                {
                  q: "What are the cost benefits of cloud?",
                  a: "Cloud eliminates expensive hardware purchases and maintenance. You pay only for what you use, scale resources on-demand, and reduce IT overhead significantly.",
                },
                {
                  q: "How quickly can we scale resources?",
                  a: "You can scale computing, storage, and bandwidth in minutes through our portal. No hardware installation or lengthy procurement needed.",
                },
                {
                  q: "Do you provide 24/7 support?",
                  a: "Yes, we offer 24/7 managed cloud support with dedicated engineers, rapid incident response, and proactive monitoring to ensure 99.9% uptime.",
                },
                {
                  q: "Is my data backed up and recoverable?",
                  a: "Absolutely. We maintain automatic daily backups, disaster recovery plans, and can restore your data instantly if needed — zero business downtime.",
                },
                {
                  q: "How do you ensure compliance with Indian regulations?",
                  a: "We comply with RBI guidelines, MEITY standards, and data localization requirements. All data remains in India with end-to-end encryption.",
                },
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`rounded-2xl overflow-hidden transition-all ${isDark ? "bg-gray-900/70 border border-red-900/40 hover:border-[#8B6B4A]" : "bg-white border border-gray-200 hover:border-[#8B6B4A]"}`}
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                    className={`w-full px-8 py-6 text-left flex items-center justify-between gap-4 transition-colors ${isDark ? "hover:bg-red-950/20" : "hover:bg-red-50"}`}
                  >
                    <h3
                      className={`text-lg md:text-xl font-bold flex-1 ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      {faq.q}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFAQ === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown
                        className={`w-6 h-6 ${isDark ? "text-red-500" : "text-[#8B6B4A]"}`}
                      />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: openFAQ === idx ? "auto" : 0,
                      opacity: openFAQ === idx ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`overflow-hidden border-t ${isDark ? "border-red-900/40" : "border-gray-200"}`}
                  >
                    <p
                      className={`px-8 py-6 text-lg ${isDark ? "text-gray-300" : "text-gray-700"}`}
                    >
                      {faq.a}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet-async";
// import { useNavigate } from "react-router-dom";
// import {
//   ShieldCheck,
//   Cloud,
//   Server,
//   Database,
//   ArrowUpRight,
//   Scale,
//   Lock,
//   Cpu,
//   Globe,
//   HardDrive,
//   Zap,
//   Code,
//   Container,
//   BarChart3,
//   ArrowRight,
//   CheckCircle2,
//   ChevronDown,
// } from "lucide-react";
// import { useTheme } from "../../context/ThemeContext";

// // Placeholder images
// const images = {
//   hero: "https://cdn.prod.website-files.com/646e120d6d1b3e437d8b5803/6501bc2b71ecba4b05b3b9d9_X5aZrndcHEi_Rug_WZ1le8pKXCaQvXYT_7Wutcw6adALMBSda8_8nuXDLPM_jrgzAF0h28IA6ZQuJ_buuwe7Jk3py8ElkcvPoUHeoJJt8Eo94uINQgyeB39TUQRjzXlT7WWcLFl16ttUbf_0t1w450Q.jpeg",
//   migration: "https://www.nsight-inc.com/wp-content/uploads/2023/11/iStock-1239864853-min.jpg",
//   k8s: "https://miro.medium.com/1*N2TmMYRqfCcHrYErZJ9JNA.png",
// };

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } },
// };

// const cloudTypes = [
//   {
//     icon: Server,
//     title: "Private Cloud",
//     desc: "Fully dedicated environment with complete control, maximum security, and tailored scalability for sensitive workloads.",
//   },
//   {
//     icon: Cloud,
//     title: "Enterprise Cloud",
//     desc: "Cost-optimized, high-performance cloud for growing businesses — reliable, flexible, and ready to scale.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "BFSI Cloud Solutions",
//     desc: "Banking-grade security, compliance, encryption, and disaster recovery built for financial institutions.",
//   },
//   {
//     icon: Globe,
//     title: "Government Cloud",
//     desc: "Compliant, secure infrastructure designed for government digital transformation and public sector needs.",
//   },
//   {
//     icon: Cpu,
//     title: "SAP HANA Cloud Solutions",
//     desc: "High-performance real-time analytics, data processing, and decision-making in the cloud.",
//   },
// ];

// const capabilities = [
//   {
//     icon: ShieldCheck,
//     title: "Advanced Security & Compliance",
//     desc: "Enterprise-grade protection and regulatory adherence.",
//   },
//   {
//     icon: HardDrive,
//     title: "Flexible Storage Solutions",
//     desc: "Block, file, object — whatever your needs.",
//   },
//   {
//     icon: Cpu,
//     title: "Virtual Machines & Compute",
//     desc: "On-demand high-performance computing.",
//   },
//   {
//     icon: Zap,
//     title: "Serverless Computing",
//     desc: "Pay only for actual usage.",
//   },
//   {
//     icon: Globe,
//     title: "CDN & Media Services",
//     desc: "Ultra-fast global content delivery.",
//   },
//   {
//     icon: Database,
//     title: "Database Management",
//     desc: "Optimized storage and querying.",
//   },
//   {
//     icon: BarChart3,
//     title: "Data Lake & Analytics",
//     desc: "Turn raw data into actionable insights.",
//   },
//   {
//     icon: Code,
//     title: "DevOps Support",
//     desc: "Automated workflows and faster deployments.",
//   },
//   {
//     icon: Container,
//     title: "Kubernetes Services",
//     desc: "Container orchestration and auto-scaling.",
//   },
//   {
//     icon: Lock,
//     title: "Business Continuity & DR",
//     desc: "Zero-downtime recovery plans.",
//   },
// ];

// export default function CloudSolutions() {
//   const { isDark } = useTheme();
//   const [openFAQ, setOpenFAQ] = useState(null);
//   const navigate = useNavigate();

//   return (
//     <>
//       <Helmet>
//         <title>Cloud Solutions Company India | Atla IKS</title>
//         <meta
//           name="description"
//           content="Scalable cloud computing solutions for migration, hosting & enterprise growth."
//         />
//         <meta
//           name="keywords"
//           content="Cloud Solutions Company India, Cloud Migration, Cloud Services"
//         />
//       </Helmet>

//       <div className={`min-h-screen transition-colors duration-700 overflow-hidden
//         ${isDark ? "bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white" : "bg-gradient-to-b from-[#f9efe1] via-white to-[#f4e9d8] text-[#3d220e]"}`}>

//         {/* ====================== HERO SECTION ====================== */}
//         <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
//           <div className="absolute inset-0">
//             <img
//               src={images.hero}
//               alt="Modern cloud dashboard"
//               className="w-full h-full object-cover brightness-75 contrast-110 dark:brightness-50 dark:contrast-125 transition-all duration-700"
//               loading="lazy"
//             />
//             <div className={`absolute inset-0 bg-gradient-to-b
//               ${isDark ? "from-black/85 via-black/75 to-black/90" : "from-black/85 via-black/75 to-black/90"}`} />
//           </div>

//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer}
//             className="relative z-10 max-w-7xl mx-auto text-center"
//           >
//             <motion.h1
//               variants={fadeInUp}
//               className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight text-white"
//             >
//               Empowering Indian Businesses with{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B6B4A] to-[#f9e8c8]">
//                 Smart Cloud Solutions
//               </span>
//             </motion.h1>

//             <motion.p
//               variants={fadeInUp}
//               className="text-2xl md:text-4xl font-bold mb-8 text-[#f9e8c8]"
//             >
//               Scale Securely, Save Costs, Grow Limitlessly
//             </motion.p>

//             <motion.p
//               variants={fadeInUp}
//               className="text-lg md:text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
//             >
//               At{" "}
//               <span className="text-[#8B6B4A] font-semibold">
//                 AI Knots IT Solution
//               </span>
//               , we deliver fast, secure, and scalable cloud infrastructure tailored for Indian startups, enterprises, and regulated sectors.
//             </motion.p>

//             <motion.ul
//               variants={fadeInUp}
//               className="flex flex-wrap justify-center gap-6 mb-12 text-lg text-gray-200"
//             >
//               {[
//                 "Advanced data protection",
//                 "Pay-as-you-go savings",
//                 "Seamless scaling",
//                 "Full compliance support",
//               ].map((item) => (
//                 <li key={item} className="flex items-center gap-2">
//                   <CheckCircle2 className="w-6 h-6 text-[#8B6B4A]" /> {item}
//                 </li>
//               ))}
//             </motion.ul>

//             <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
//               <button
//                 onClick={() => navigate("/contact")}
//                 className="px-12 py-6 bg-gradient-to-r from-[#3d220e] to-[#5c4635] hover:from-[#5c4635] hover:to-[#3d220e] text-white font-bold rounded-full text-xl md:text-2xl shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
//               >
//                 Free Consultation
//                 <ArrowRight className="w-6 h-6" />
//               </button>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* Why Cloud */}
//         <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/50" : "bg-white"}`}>
//           <div className="max-w-7xl mx-auto">
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
//               <motion.h2 variants={fadeInUp} className={`text-4xl md:text-6xl font-black mb-6 ${isDark ? "text-white" : "text-[#3d220e]"}`}>
//                 Why Your Business Needs Reliable{" "}
//                 <span className="text-[#8B6B4A]">Cloud Solutions</span>
//               </motion.h2>
//               <motion.p variants={fadeInUp} className={`text-xl max-w-4xl mx-auto ${isDark ? "text-gray-300" : "text-[#5c4635]"}`}>
//                 Move beyond outdated hardware — embrace secure, scalable, cost-efficient cloud that grows with you.
//               </motion.p>
//             </motion.div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[
//                 { icon: Lock, title: "Advanced Security", desc: "Protect data with encryption, firewalls, and compliance." },
//                 { icon: Server, title: "No More Expensive Hardware", desc: "Eliminate on-premises maintenance costs." },
//                 { icon: Scale, title: "Instant Scalability", desc: "Scale resources up/down in minutes." },
//                 { icon: Globe, title: "Global Compliance", desc: "Meet Indian & international data regulations." },
//                 { icon: BarChart3, title: "Pay-as-You-Use", desc: "Optimize spending with usage-based pricing." },
//               ].map((benefit, idx) => (
//                 <motion.div
//                   key={idx}
//                   variants={fadeInUp}
//                   className={`border rounded-2xl p-10 hover:shadow-2xl transition-all group text-center ${
//                     isDark
//                       ? "bg-gray-900 border-[#8B6B4A]/40 hover:border-[#8B6B4A]"
//                       : "bg-white border-[#e8d9c2] hover:border-[#8B6B4A] shadow-md"
//                   }`}
//                 >
//                   <benefit.icon className={`w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform ${isDark ? "text-[#f9e8c8]" : "text-[#8B6B4A]"}`} />
//                   <h3 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-[#3d220e]"}`}>{benefit.title}</h3>
//                   <p className={`text-lg ${isDark ? "text-gray-300" : "text-[#5c4635]"}`}>{benefit.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Cloud Types */}
//         <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/70" : "bg-white"}`}>
//           <div className="max-w-7xl mx-auto">
//             <motion.h2
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`text-4xl md:text-6xl font-black text-center mb-16 ${isDark ? "text-white" : "text-[#3d220e]"}`}
//             >
//               Cloud Solutions{" "}
//               <span className="text-[#8B6B4A]">Tailored for You</span>
//             </motion.h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {cloudTypes.map((type, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.1 }}
//                   className={`rounded-2xl p-10 hover:shadow-2xl transition-all text-center ${
//                     isDark
//                       ? "bg-gray-900 border border-[#8B6B4A]/40 hover:border-[#8B6B4A]"
//                       : "bg-white border border-[#e8d9c2] shadow-lg hover:border-[#8B6B4A]"
//                   }`}
//                 >
//                   <type.icon className={`w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform ${isDark ? "text-[#f9e8c8]" : "text-[#8B6B4A]"}`} />
//                   <h3 className={`text-3xl font-black mb-4 ${isDark ? "text-white" : "text-[#3d220e]"}`}>{type.title}</h3>
//                   <p className={`text-lg ${isDark ? "text-gray-300" : "text-[#5c4635]"}`}>{type.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Capabilities */}
//         <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/50" : "bg-[#f4e9d8]"}`}>
//           <div className="max-w-7xl mx-auto">
//             <motion.h2
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`text-4xl md:text-6xl font-black text-center mb-12 ${isDark ? "text-white" : "text-[#3d220e]"}`}
//             >
//               Enterprise-Grade{" "}
//               <span className="text-[#8B6B4A]">Cloud Capabilities</span>
//             </motion.h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//               {capabilities.map((cap, idx) => (
//                 <motion.div
//                   key={idx}
//                   variants={fadeInUp}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   className={`rounded-2xl p-8 hover:shadow-2xl transition-all text-center flex flex-col items-center ${
//                     isDark
//                       ? "bg-gray-900 border border-[#8B6B4A]/40 hover:border-[#8B6B4A]"
//                       : "bg-white border border-[#e8d9c2] shadow hover:border-[#8B6B4A]"
//                   }`}
//                 >
//                   <cap.icon className={`w-12 h-12 mb-6 transition-transform ${isDark ? "text-[#f9e8c8]" : "text-[#8B6B4A]"}`} />
//                   <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-[#3d220e]"}`}>{cap.title}</h3>
//                   <p className={`${isDark ? "text-gray-300" : "text-[#5c4635]"}`}>{cap.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Final CTA */}
//         <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/70" : "bg-white"}`}>
//           <div className="max-w-5xl mx-auto text-center">
//             <motion.h2
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//               className={`text-4xl md:text-6xl font-black mb-8 ${isDark ? "text-white" : "text-[#3d220e]"}`}
//             >
//               Ready to Transform Your Business with{" "}
//               <span className="text-[#8B6B4A]">Smart Cloud</span>?
//             </motion.h2>
//             <motion.p
//               variants={fadeInUp}
//               className={`text-xl md:text-2xl mb-12 ${isDark ? "text-gray-300" : "text-[#5c4635]"}`}
//             >
//               Secure migration, optimized costs, unbreakable security — let's build your future-ready cloud infrastructure today.
//             </motion.p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={() => navigate("/contact")}
//               className="px-14 py-7 bg-gradient-to-r from-[#3d220e] to-[#5c4635] text-white rounded-full text-2xl md:text-3xl font-black shadow-2xl hover:shadow-[#8B6B4A]/50 transition-all"
//             >
//               Start Your Cloud Journey →
//             </motion.button>
//           </div>
//         </section>

//         {/* FAQ Section */}
//         <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/60" : "bg-[#f4e9d8]"}`}>
//           <div className="max-w-4xl mx-auto">
//             <motion.h2
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`text-4xl md:text-6xl font-black text-center mb-16 ${isDark ? "text-white" : "text-[#3d220e]"}`}
//             >
//               Frequently Asked{" "}
//               <span className="text-[#8B6B4A]">Questions</span>
//             </motion.h2>

//             <div className="space-y-4">
//               {[
//                 {
//                   q: "What cloud solutions do you offer?",
//                   a: "We provide Private Cloud, Enterprise Cloud, BFSI Cloud, Government Cloud, and SAP HANA Cloud Solutions. Each is customized for your industry and compliance needs.",
//                 },
//                 {
//                   q: "How secure is your cloud infrastructure?",
//                   a: "Our cloud uses enterprise-grade encryption, multi-layer firewalls, regular security audits, and compliance with Indian & international standards.",
//                 },
//                 {
//                   q: "Can you migrate my existing systems to the cloud?",
//                   a: "Yes, we handle end-to-end cloud migration with zero downtime.",
//                 },
//                 {
//                   q: "What are the cost benefits of cloud?",
//                   a: "Cloud eliminates expensive hardware purchases and maintenance. You pay only for what you use.",
//                 },
//                 {
//                   q: "How quickly can we scale resources?",
//                   a: "You can scale computing, storage, and bandwidth in minutes.",
//                 },
//                 {
//                   q: "Do you provide 24/7 support?",
//                   a: "Yes, we offer 24/7 managed cloud support with dedicated engineers.",
//                 },
//               ].map((faq, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.05 }}
//                   className={`border rounded-2xl overflow-hidden transition-all ${
//                     isDark ? "bg-gray-900 border-[#8B6B4A]/40" : "bg-white border-[#e8d9c2]"
//                   }`}
//                 >
//                   <button
//                     onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
//                     className={`w-full px-8 py-6 text-left flex justify-between items-center hover:bg-[#f9efe1] dark:hover:bg-gray-800 transition-colors`}
//                   >
//                     <h3 className={`text-lg md:text-xl font-bold flex-1 ${isDark ? "text-white" : "text-[#3d220e]"}`}>
//                       {faq.q}
//                     </h3>
//                     <ChevronDown className={`w-6 h-6 transition-transform ${openFAQ === idx ? "rotate-180" : ""} ${isDark ? "text-[#8B6B4A]" : "text-[#8B6B4A]"}`} />
//                   </button>

//                   {openFAQ === idx && (
//                     <div className={`px-8 pb-8 ${isDark ? "text-gray-300" : "text-[#5c4635]"}`}>
//                       {faq.a}
//                     </div>
//                   )}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }
