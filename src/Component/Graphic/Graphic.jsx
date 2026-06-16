

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import graphicdesign from "../../assets/Images/graphicdesign.jpg";
import {
  ArrowRight,
  Palette,
  Image as ImageIcon,
  Video,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
// import useNavigate from "react-router-dom";
import { useNavigate } from "react-router-dom";
const images = {
  hero: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=2340&q=80",
  designer:
    graphicdesign,
  logoProcess:
    "https://images.unsplash.com/photo-1581287053822-fd7bf4f1afec?auto=format&fit=crop&w=2340&q=80",
  socialGraphics:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2340&q=80",
  videoEdit:
    "https://images.unsplash.com/photo-1611162617210-7d7a39e9b1d7?auto=format&fit=crop&w=2340&q=80",
};

const services = [
  {
    icon: Palette,
    title: "Logo Designing",
    desc: "Your logo is the face of your brand. We design unique, memorable logos that perfectly represent your business values.",
  },
  {
    icon: ImageIcon,
    title: "Image & Creative Designing",
    desc: "Eye-catching social media posts, banners, advertisements, and marketing visuals that grab attention instantly.",
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Professional video editing for Reels, YouTube, ads, and brand stories that engage and convert your audience.",
  },
];

const whyImportant = [
  "Create a strong and memorable brand identity",
  "Attract customers at first glance",
  "Communicate your message clearly",
  "Build trust and credibility",
  "Stand out from your competitors",
];

const whyChoose = [
  "Creative and experienced designers who understand brand psychology",
  "100% unique and custom designs tailored to your business",
  "Strong focus on building long-term brand identity",
  "Fast turnaround time with multiple revisions",
];

const howHelpGrow = [
  "Get professional designs at affordable prices",
  "Stand out from competitors with creative visuals",
  "Build a strong and consistent brand identity",
  "Increase brand awareness and attract more customers",
];

const faqs = [
  {
    q: "What graphic design services does AI Knots IT Solution provide?",
    a: "We provide logo design, social media graphics, marketing banners, brand identity kits, promotional materials, and professional video editing.",
  },
  {
    q: "Why is good graphic design important for my business?",
    a: "Great design creates a strong first impression, builds trust, helps people remember your brand, and makes your marketing more effective.",
  },
  {
    q: "Do you design social media graphics and posts?",
    a: "Yes, we specialize in creating engaging social media creatives, Reels thumbnails, ad banners, and consistent brand visuals across all platforms.",
  },
  {
    q: "How long does it take to complete a design project?",
    a: "Simple logo or social media designs usually take 3–7 days. Complex brand identity projects may take 10–21 days depending on revisions.",
  },
  {
    q: "Do you offer revisions?",
    a: "Yes, we provide multiple rounds of revisions until you are completely satisfied with the final design.",
  },
  {
    q: "How can I start a graphic design project with you?",
    a: "Just contact us via call or WhatsApp. We'll discuss your requirements and start working on your project quickly.",
  },
];

export default function GraphicDesigning() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );
  const [openFaq, setOpenFaq] = useState(null);
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

  const accentClass = "text-[#9F714E] font-extrabold";
  const headingClass = isDark ? "text-white" : "text-[#462206]";
  const bodyClass = isDark ? "text-gray-300" : "text-[#462206]";

  const cardClass = isDark
    ? "bg-gray-900/70 backdrop-blur-sm border border-gray-800 hover:border-red-500/60 hover:shadow-red-900/30"
    : "bg-white border border-gray-200 hover:shadow-2xl";

  return (
    <>
             <Helmet>
                    <title>Graphic Design Services Bhopal | Atla IKS</title>
                    <meta
                      name="description"
                      content="Creative graphic design services for branding, logos, social media posts & business graphics."
                    />
                    <meta
                      name="keywords"
                      content="Graphic Design Services Bhopal	Logo Design, Branding Services"
                    />
                  </Helmet>
    <div
      className={`min-h-screen overflow-hidden transition-colors duration-700 ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="Creative Graphic Design Services in Bhopal - AI Knots"
            className="w-full h-full object-cover brightness-50"
            loading="eager"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${isDark ? "from-black/90 via-black/80 to-black/90" : "from-black/70 via-black/60 to-transparent"}`}
          />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="relative z-10 max-w-6xl mx-auto text-center"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8 text-[#e1d9d2] "
          >
            Professional Graphic Design Services in{" "}
            <span className="bg-clip-text text-transparent bg-[#e1d9d2]">
              Bhopal
            </span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`text-2xl md:text-3xl font-bold mb-8 ${accentClass}`}
          >
            Designs That Speak • Brands That Shine
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-12 ${isDark ? "text-gray-300" : "text-white/90"}`}
          >
            At{" "}
            <span className="font-bold text-[#795438]">
              AI KNOTS IT SOLUTION
            </span>
            , we create stunning logos, social media graphics, and videos that
            help your business look professional and grow faster.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className="px-12 py-6 bg-[#3d220e] text-white  hover:bg-[#5a3a1c] text-white text-xl font-bold rounded-full shadow-xl flex items-center gap-3 group transition-all" onClick={()=>navigate("/recentwork")}>
               View our work
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
            
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
          >
            Our Graphic Design <span className={accentClass}>Services</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${cardClass} rounded-3xl p-10 text-center group`}
              >
                <service.icon
                  className={`w-20 h-20 mx-auto mb-8 transition-transform group-hover:scale-110 ${accentClass}`}
                />
                <h3 className={`text-2xl font-bold mb-6 ${headingClass}`}>
                  {service.title}
                </h3>
                <p className={`leading-relaxed ${bodyClass}`}>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GRAPHIC DESIGN IS IMPORTANT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className={`text-4xl md:text-5xl font-black mb-10 ${headingClass}`}
            >
              Why Graphic Design Matters for Your Business
            </h2>
            <p className={`text-xl mb-10 ${bodyClass}`}>
              Good design is not just about looking pretty — it's about making
              your business memorable and trustworthy.
            </p>
            <ul className="space-y-6 text-lg">
              {whyImportant.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle
                    className={`w-8 h-8 mt-1 flex-shrink-0 ${accentClass}`}
                  />
                  <span className={bodyClass}>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={images.designer}
            
            alt="Professional graphic designer working on brand visuals"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
          >
            Why Choose <span className={accentClass}>AI Knots</span> for Graphic
            Design?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${cardClass} rounded-3xl p-8`}
              >
                <div
                  className={`text-6xl font-black ${accentClass} mb-6 opacity-75`}
                >{`0${idx + 1}`}</div>
                <p className={`text-lg leading-relaxed ${bodyClass}`}>
                  {reason}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA + HOW WE HELP GROW */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-black mb-8 ${headingClass}`}
          >
            Let’s Create Designs That Make Your Brand{" "}
            <span className={accentClass}>Stand Out</span>
          </motion.h2>

          <motion.p className={`text-xl max-w-3xl mx-auto mb-12 ${bodyClass}`}>
            From logos to social media creatives and video editing — we deliver
            designs that help your business grow in Bhopal and beyond.
          </motion.p>

          <button className="px-16 py-7 bg-[#3d220e]  text-white text-2xl font-bold rounded-full shadow-xl transition-all" onClick={()=>navigate("/contact")}>
            Get Your Custom Design Quote →
          </button>

         
        </div>
      </section>

      {/* FAQ SECTION - Interactive Dropdown */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
      >
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
                className={`border rounded-2xl overflow-hidden ${isDark ? "border-gray-800 bg-gray-900/50" : "border-gray-200 bg-white"}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-800/30 transition-all"
                >
                  <span className={`text-xl font-semibold ${headingClass}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-red-500 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>

                {openFaq === idx && (
                  <div className={`px-8 pb-8 text-lg ${bodyClass}`}>
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
    </>
  );
}
