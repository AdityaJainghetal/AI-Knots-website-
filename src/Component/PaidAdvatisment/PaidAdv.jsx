import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import report from "../../assets/report.pdf";
import {
  ArrowRight,
  Target,
  BarChart3,
  TrendingUp,
  Megaphone,
  Repeat,
  Youtube,
  ChevronDown,
  Sparkles,
  Users,
  DollarSign,
  LineChart,
  Globe,
  CheckCircle2,
} from "lucide-react";

const carouselImages = [
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=90",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=90",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=90",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=90",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

function PaidAdvertising() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();
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

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleFAQ = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Why is AI Knots the best paid advertising agency in Bhopal?",
      a: "Because we focus on ROI, not just clicks. Our campaigns are data-driven and designed to generate real business results.",
    },
    {
      q: "What platforms do you run ads on?",
      a: "We run ads on Google, Facebook, Instagram, YouTube, and other performance platforms.",
    },
    {
      q: "How do you ensure better ad performance?",
      a: "Through continuous optimization, A/B testing, audience targeting, and real-time data analysis.",
    },
    {
      q: "Can you help small businesses generate leads?",
      a: "Yes, we specialize in lead generation campaigns for startups and small businesses with budget-friendly strategies.",
    },
    {
      q: "How soon can I see results?",
      a: "You can start seeing initial results within a few days, while optimized performance improves over time.",
    },
    {
      q: "Do you provide reporting?",
      a: "Yes, we provide transparent reports with clear insights on performance, leads, and ROI.",
    },
    {
      q: "Can you reduce my ad cost?",
      a: "Yes, with proper targeting and optimization, we aim to reduce cost per lead and increase conversions.",
    },
    {
      q: "Do you create ad creatives also?",
      a: "Absolutely! We design high-converting creatives and ad copies that grab attention.",
    },
    {
      q: "Do you handle remarketing campaigns?",
      a: "Yes, we run advanced remarketing campaigns to convert interested users into customers.",
    },
    {
      q: "How can I get started with AI Knots?",
      a: "Simply contact us, and we’ll create a custom ad strategy for your business.",
    },
  ];

  // Dynamic Theme Classes (Same as your other pages)
  const accentClass = "text-accent";
  const headingClass = isDark ? "text-white" : "text-gray-700";
  const bodyClass = isDark ? "text-[#8B6B4A]" : "text-gray-700";

  const cardClass = isDark
    ? "bg-gray-900/80 backdrop-blur-xl border border-gray-700/80 hover:border-[#8B6B4A] hover:shadow-2xl hover:shadow-[#8B6B4A]/20 transition-all duration-500"
    : "bg-white border border-gray-100 hover:border-[#8B6B4A] hover:shadow-2xl hover:shadow-[#8B6B4A]/80 transition-all duration-500";

  const premiumButton = ` px-12 py-7 rounded-2xl text-xl font-bold transition-all flex items-center gap-3 group shadow-xl btn-accent hover:shadow-2xl hover:shadow-[#8B6B4A]/50`;

  return (
    <>
      <Helmet>
        <title>Google & Meta Ads Services | Atla IKS</title>
        <meta
          name="description"
          content="Get quality leads with paid ads management services for Google Ads and Meta Ads campaigns"
        />
        <meta name="keywords" content="Paid Ads Services	Google Ads, Meta Ads" />
      </Helmet>
      <div
        className={`min-h-screen overflow-hidden transition-colors duration-700
      ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}
      >
        {/* ====================== HERO CAROUSEL ====================== */}
        <section className="relative h-[85vh] overflow-hidden">
          {" "}
          {/* ← Changed here */}
          {carouselImages.map((img, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            >
              <motion.img
                src={img}
                alt="Paid Advertising Performance"
                className="w-full h-full object-cover brightness-75"
              />

              <div
                className={`absolute inset-0 bg-gradient-to-b 
          ${
            isDark
              ? "from-black/55 via-black/75 to-black/90"
              : "from-black/45 via-black/70 to-black/85"
          } 
          flex items-center justify-center`}
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="text-center px-6 max-w-6xl z-10"
                >
                  <motion.h1
                    variants={fadeInUp}
                    className="text-6xl sm:text-7xl md:text-8xl font-black mb-6 tracking-tight bg-[#f7f4f1] to-white bg-clip-text text-transparent"
                  >
                    AI Knots
                  </motion.h1>

                  <motion.p
                    variants={fadeInUp}
                    className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8 text-[#8B6B4A]"
                  >
                    Paid Advertising Agency
                    <br className="sm:hidden" /> in Bhopal
                  </motion.p>

                  <motion.p
                    variants={fadeInUp}
                    className={`text-xl sm:text-3xl max-w-4xl mx-auto leading-tight mb-10 ${isDark ? "text-gray-200" : "text-white/90"}`}
                  >
                    Driving High-Performance Ads Across India • Real Growth •
                    Measurable ROI
                  </motion.p>

                  <motion.p
                    variants={fadeInUp}
                    className={`text-lg md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed ${isDark ? "text-gray-300" : "text-white/90"}`}
                  >
                    At AI Knots, a creative paid advertising agency in Bhopal,
                    we go beyond clicks and impressions — we focus on real
                    business growth.
                  </motion.p>

                  <motion.div
                    variants={fadeInUp}
                    className="mt-10 flex flex-col sm:flex-row gap-6 justify-center"
                  >
                    <a href={report} target="_blank" rel="noopener noreferrer">
                      <button className={premiumButton}>
                        Website Audit Report
                        <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                      </button>
                    </a>

                    <button
                      className={`px-12 py-7 border-2 border-[#8B6B4A] rounded-2xl text-2xl font-bold transition-all
                ${
                  isDark
                    ? "text-[#8B6B4A] hover:bg-[#8B6B4A]/10 hover:border-[#8B6B4A]"
                    : "text-[#8B6B4A] hover:bg-[#8B6B4A]/10 hover:border-[#8B6B4A]"
                }`}
                      onClick={() => navigate("/contact")}
                    >
                      Get Started →
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
          {/* Carousel dots */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
            {carouselImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-700 ${
                  i === currentSlide
                    ? "bg-[#8B6B4A] scale-150 shadow-lg shadow-[#8B6B4A]/50"
                    : isDark
                      ? "bg-gray-600 hover:bg-[#8B6B4A]"
                      : "bg-gray-400 hover:bg-[#8B6B4A]"
                }`}
              />
            ))}
          </div>
        </section>

        <main
          className={`max-w-7xl mx-auto px-6 py-24 lg:py-32 space-y-40 ${isDark ? "" : "bg-white"}`}
        >
          {/* What We Do Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className={`text-5xl sm:text-7xl font-black mb-10 ${headingClass}`}
            >
              We Don’t Just Run Ads, We Drive Results
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className={`text-2xl max-w-5xl mx-auto leading-relaxed mb-16 ${bodyClass}`}
            >
              We create smart, result-driven ad campaigns that connect your
              brand with the right audience at the right time. From Google Ads
              to Meta Ads and performance marketing, our strategies are designed
              to generate leads, sales, and measurable ROI across India.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  icon: Target,
                  title: "Better Targeting",
                  desc: "We don’t waste your budget on random audiences. With advanced targeting, audience segmentation, and retargeting strategies, we make sure your ads reach people who are actually interested in your business.",
                },
                {
                  icon: BarChart3,
                  title: "Better Data & Insights",
                  desc: "AI Knots uses real-time data, analytics, and performance tracking tools to optimize campaigns continuously. We study user behavior, clicks, and conversions to improve your ad performance every single day.",
                },
                {
                  icon: TrendingUp,
                  title: "Better Results",
                  desc: "From brand awareness to lead generation and sales, we focus on outcomes that matter. Our goal is simple - more conversions, lower cost, higher ROI.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`rounded-3xl p-10 transition-all group ${cardClass}`}
                >
                  <item.icon
                    className={`w-16 h-16 mb-8 mx-auto transition-transform group-hover:scale-110 ${accentClass}`}
                  />
                  <h3
                    className={`text-3xl font-black mb-5 text-center ${isDark ? "text-[#9F714E]" : "text-[#9F714E]"}`}
                  >
                    {item.title}
                  </h3>
                  <p className={`text-lg leading-relaxed ${bodyClass}`}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Paid Advertising Solutions */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className={`text-5xl sm:text-7xl font-black text-center mb-16 ${headingClass}`}
            >
              Our Paid Advertising{" "}
              <span className={accentClass}>Solutions</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Megaphone,
                  title: "Google Ads (Search + Display)",
                  desc: "Get found when your customers are searching. We create high-converting search and display campaigns that bring quality traffic to your website.",
                },
                {
                  icon: Target,
                  title: "Meta Ads (Facebook & Instagram)",
                  desc: "We design scroll-stopping creatives and run targeted campaigns that turn views into leads and sales.",
                },
                {
                  icon: Youtube,
                  title: "YouTube Advertising",
                  desc: "Reach your audience through engaging video ads that build trust and brand recall.",
                },
                {
                  icon: LineChart,
                  title: "Performance Marketing",
                  desc: "We focus on ROI-driven campaigns where every rupee is tracked and optimized for better results.",
                },
                {
                  icon: Repeat,
                  title: "Remarketing Campaigns",
                  desc: "Turn visitors into customers with smart retargeting strategies that bring them back to your business.",
                },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`rounded-3xl p-10 transition-all group ${cardClass}`}
                >
                  <service.icon
                    className={`w-14 h-14 mb-6 mx-auto block transition-transform group-hover:scale-110 ${accentClass}`}
                  />
                  <h3
                    className={`text-3xl font-black mb-5 text-center ${isDark ? "text-[#9F714E]" : "text-[#9F714E]"}`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-lg text-center leading-relaxed ${bodyClass}`}
                  >
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Why Choose Us */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className={`text-5xl sm:text-7xl font-black mb-10 ${headingClass}`}
            >
              Why AI Knots is Your Best Choice
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className={`text-2xl max-w-5xl mx-auto leading-relaxed mb-12 ${bodyClass}`}
            >
              AI Knots is not just another digital agency, we are your growth
              partner. We combine creative strategy, data-driven marketing, and
              performance ads to help your business grow faster. Whether you’re
              a local business in Bhopal or targeting customers across India, we
              make sure your ads deliver real impact.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "ROI-Focused Campaigns",
                "Creative + Data-Driven",
                "Transparent Reporting",
                "Budget Optimization",
                "India-Wide Reach",
                "Proven Lead & Sales Growth",
              ].map((point, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className={`rounded-3xl p-8 flex items-center justify-center ${cardClass}`}
                >
                  <CheckCircle2
                    className={`w-10 h-10 mr-4 flex-shrink-0 ${accentClass}`}
                  />
                  <p
                    className={`text-2xl font-bold ${isDark ? "text-[#9F714E]" : "text-[#9F714E]"}`}
                  >
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className={`text-5xl sm:text-7xl font-black text-center mb-16 ${headingClass}`}
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-5">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className={`border rounded-2xl overflow-hidden ${isDark ? "border-gray-800 bg-gray-900/60" : "border-gray-200 bg-white"} ${cardClass}`}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className={`w-full px-8 py-7 text-left flex justify-between items-center transition-all ${isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"}`}
                  >
                    <span className={`text-2xl font-bold ${headingClass}`}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-7 h-7 ${accentClass} transition-transform ${openFaq === idx ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className={`px-8 pb-8 text-lg leading-relaxed ${bodyClass}`}
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </main>

       
        
      </div>
    </>
  );
}

export default PaidAdvertising;
