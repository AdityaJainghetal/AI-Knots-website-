import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
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
  const [isDark, setIsDark] = useState(true);
  const [openFAQ, setOpenFAQ] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

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
      <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-gray-950 dark:via-black dark:to-gray-950 text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden">
        {/* Theme Toggle */}

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={images.hero}
              alt="Modern cloud dashboard"
              className="w-full h-full object-cover 
                 brightness-75 contrast-110 
                 dark:brightness-50 dark:contrast-125
                 transition-all duration-700"
              loading="lazy"
            />

            {/* Gradient Overlay - Optimized for both themes */}
            <div
              className="absolute inset-0 bg-gradient-to-b 
                    from-black/70 via-black/60 to-black/80 
                    dark:from-black/85 dark:via-black/75 dark:to-black/90"
            />

            {/* Optional subtle light mode tint */}
            <div
              className="absolute inset-0 bg-gradient-to-t 
                    from-white/10 to-transparent 
                    dark:hidden"
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
              Empowering Indian Businesses with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                Smart Cloud Solutions
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-2xl md:text-4xl font-bold text-red-500 dark:text-red-400 mb-8"
            >
              Scale Securely, Save Costs, Grow Limitlessly
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-200 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              At{" "}
              <span className="text-red-500 dark:text-red-400 font-semibold">
                AI Knots IT Solution
              </span>
              , we deliver fast, secure, and scalable cloud infrastructure
              tailored for Indian startups, enterprises, and regulated sectors.
            </motion.p>

            <motion.ul
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-6 mb-12 text-lg text-gray-200 dark:text-gray-300"
            >
              {[
                "Advanced data protection",
                "Pay-as-you-go savings",
                "Seamless scaling",
                "Full compliance support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-red-500 dark:text-red-400" />{" "}
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button
                onClick={() => navigate("/contact")}
                className="px-12 py-6 border-2 border-red-500 text-white font-bold rounded-full text-xl md:text-2xl 
                   hover:bg-red-600 hover:border-red-600 transition-all duration-300
                   dark:hover:bg-red-700"
              >
                Free Consultation
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Why Cloud */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black/50">
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
                className="text-4xl md:text-6xl font-black mb-6"
              >
                Why Your Business Needs Reliable
                <span className="text-[#EFE5C8] dark:text-red-500">
                  Cloud Solutions
                </span>{" "}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto"
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
                  className="bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-red-900/40 rounded-2xl p-10 hover:border-red-600 dark:hover:border-red-600 hover:shadow-2xl transition-all group"
                >
                  <benefit.icon className="w-16 h-16 text-[#EFE5C8] dark:text-red-500 mb-6 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Types */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-transparent">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-center mb-16"
            >
              Cloud Solutions{" "}
              <span className="text-[#EFE5C8] dark:text-red-500">
                Tailored for You
              </span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cloudTypes.map((type, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black border border-gray-200 dark:border-red-900/40 rounded-2xl p-10 hover:border-red-600 dark:hover:border-red-600 hover:shadow-2xl transition-all group text-center"
                >
                  <type.icon className="w-16 h-16 text-[#EFE5C8] dark:text-red-500 mb-6 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="text-3xl font-black mb-4">{type.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    {type.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gradient-to-b dark:from-black dark:to-gray-950">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-center mb-12"
            >
              Enterprise-Grade{" "}
              <span className="text-[#EFE5C8] dark:text-red-500">
                Cloud Capabilities
              </span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {capabilities.map((cap, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-red-900/40 rounded-2xl p-8 hover:border-red-600 dark:hover:border-red-600 hover:shadow-2xl transition-all group flex flex-col items-center text-center"
                >
                  <cap.icon className="w-12 h-12 text-[#EFE5C8] dark:text-red-500 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3">{cap.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{cap.desc}</p>
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
                className="rounded-2xl shadow-2xl border border-gray-200 dark:border-red-900/30 w-full"
                loading="lazy"
              />
              <motion.div variants={fadeInUp}>
                <h3 className="text-3xl font-black mb-6">
                  Kubernetes-Powered Scaling
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Orchestrate containers effortlessly, auto-scale workloads, and
                  deploy faster with our managed Kubernetes services — perfect
                  for modern, cloud-native applications.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black/70">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-8"
            >
              Ready to Transform Your Business with{" "}
              <span className="text-[#EFE5C8] dark:text-red-500">
                Smart Cloud
              </span>
              ?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12"
            >
              Secure migration, optimized costs, unbreakable security — let's
              build your future-ready cloud infrastructure today.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full text-2xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-800 transition-all"
            >
              <button onClick={() => navigate("/contact")}>
                Start Your Cloud Journey →
              </button>
            </motion.button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black/50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                Frequently Asked{" "}
                <span className="text-[#EFE5C8] dark:text-red-500">
                  Questions
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
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
                  className="bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-red-900/40 rounded-2xl overflow-hidden hover:border-red-600 dark:hover:border-red-600 transition-all"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white flex-1">
                      {faq.q}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFAQ === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-6 h-6 text-[#EFE5C8] dark:text-red-500" />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: openFAQ === idx ? "auto" : 0,
                      opacity: openFAQ === idx ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-gray-200 dark:border-red-900/40"
                  >
                    <p className="px-8 py-6 text-lg text-gray-700 dark:text-gray-300">
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
