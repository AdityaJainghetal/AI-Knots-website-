import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Users,
  Megaphone,
  Search,
  Mail,
  TrendingUp,
} from "lucide-react";

const images = {
  hero: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  growth:
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
};

const services = [
  {
    icon: Users,
    title: "Social Media Management",
    desc: "We manage your social media platforms with engaging content, regular posting, and strategic campaigns that help increase brand awareness and audience interaction.",
  },
  {
    icon: Megaphone,
    title: "Content Marketing",
    desc: "Our content marketing services focus on creating valuable and engaging content that builds trust, attracts potential customers, and supports business growth.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    desc: "Our SEO services help improve your website’s visibility on search engines, increase organic traffic, and attract potential customers searching for your services online.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "We create targeted email marketing campaigns that help businesses communicate with customers, promote services, and build long-term relationships.",
  },
  {
    icon: TrendingUp,
    title: "Social Media Advertisements",
    desc: "Our team creates creative and well-planned social media advertisements that help businesses reach the right audience and improve engagement across platforms.",
  },
  {
    icon: BarChart3,
    title: "Google Ads Management",
    desc: "If your Google Ads campaigns are not delivering the results you expect, our experts can help optimize your campaigns to improve performance and maximize return on investment.",
  },
];

const industries = [
  "Advertising and Media",
  "Construction and Builders",
  "Education and Training",
  "Finance and Insurance",
  "Healthcare and Medical Services",
  "E-Commerce",
  "Entertainment",
  "Real Estate",
  "Hospitality",
  "Engineering Services",
  "Health and Wellness",
  "Technology",
  "Automobile Services",
  "Property Management",
  "Business Consulting",
  "Home Renovation",
  "Beauty and Wellness",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function DigitalMarketing() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    category: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const inputClass = isDark
    ? "bg-gray-900/80 border-gray-700 text-white placeholder-gray-400"
    : "bg-white border-gray-200 text-gray-900 placeholder-gray-500";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const apiUrl = `${import.meta.env.VITE_API_URL}/query/create`;
      await axios.post(apiUrl, formData);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        category: "",
      });
      setTimeout(() => {
        setIsModalOpen(false);
        setSuccess(false);
      }, 2000);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const accentClass = "text-[#8B6B4A] dark:text-[#f9e8c8]";
  const headingClass = isDark ? "text-white" : "text-gray-900";
  const bodyClass = isDark ? "text-gray-300" : "text-gray-700";

  const cardClass = isDark
    ? "bg-gray-900/70 backdrop-blur-sm border border-gray-800 hover:border-[#8B6B4A]/60 hover:shadow-[#8B6B4A]/30"
    : "bg-white border border-gray-200 hover:border-[#8B6B4A]/60 hover:shadow-2xl";

  const buttonClass = `px-8 md:px-12 py-4 md:py-6 rounded-full text-lg md:text-xl font-bold transition-all flex items-center gap-3 group shadow-xl
    ${
      isDark
        ? "bg-gradient-to-r from-[#8B6B4A] to-[#8B6B4A] hover:from-[#8B6B4A] hover:to-[#8B6B4A] shadow-[#8B6B4A]/60"
        : "bg-[#8B6B4A] hover:bg-[#8B6B4A] text-white shadow-[#8B6B4A]/50"
    }`;

  return (
    <>
      <Helmet>
        <title>Digital Marketing Company Bhopal | Atla IKS</title>
        <meta
          name="description"
          content="Grow your business with digital marketing services including SEO, paid ads & social media marketing."
        />
        <meta
          name="keywords"
          content="Digital Marketing Company Bhopal	Online Marketing, Lead Generation, SEO Services, Social Media Marketing, Paid Advertising, Content Marketing, Digital Strategy, Online Growth, Bhopal Digital Agency, Business Promotion, Internet Marketing, Digital Campaigns"
        />
      </Helmet>
      <div
        className={`min-h-screen overflow-hidden transition-colors duration-700
        ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
      >
        {/* ====================== HERO SECTION ====================== */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={images.hero}
              alt="Digital marketing strategy"
              className="w-full h-full object-cover brightness-50"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${isDark ? "from-black/90 via-black/80 to-black/90" : "from-black/70 via-black/60 to-transparent"}`}
            />
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 max-w-6xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8 text-white"
            >
              Driving Growth with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B6B4A] via-[#8B6B4A] to-white">
                Proven Digital Marketing Strategies
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className={`text-2xl md:text-3xl font-bold mb-8 ${accentClass}`}
            >
              Powering Growth with a Top Digital Marketing Agency
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className={`text-lg md:text-xl max-w-5xl mx-auto leading-relaxed mb-12 ${isDark ? "text-gray-300" : "text-white/90"}`}
            >
              Partner with{" "}
              <span className="font-semibold text-[#8B6B4A]">
                AI KNOTS IT SOLUTION
              </span>
              , one of India’s trusted digital marketing companies. We help
              businesses increase their online presence, reach the right
              audience, and generate quality leads through smart, result-driven
              digital marketing campaigns.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button
                className={buttonClass}
                onClick={() => setIsModalOpen(true)}
              >
                Request a Quote
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </button>
              <button
                className={`px-12 py-6 border-2 border-[#8B6B4A]/70 rounded-full text-xl font-bold transition-all
                ${
                  isDark
                    ? "text-[#8B6B4A] hover:bg-[#8B6B4A]/60 hover:border-[#8B6B4A]"
                    : "text-[#EFE5C8] hover:bg-[#8B6B4A] border-[#8B6B4A]"
                }`}
                onClick={() => navigate("/contact")}
              >
                Free Consultation
              </button>
            </motion.div>

            {isModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-10">
                <div
                  className={`w-full max-w-3xl rounded-3xl p-8 bg-white shadow-2xl ${isDark ? "bg-gray-950 text-white" : "bg-white text-gray-900"}`}
                >
                  <div className="flex items-start justify-between mt-20">
                    <div>
                      <h2 className="text-3xl font-black mb-2">
                        Request a Quote
                      </h2>
                      <p className="text-sm text-gray-500">
                        Share your requirements and we’ll get back to you fast.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="text-xl font-bold text-[#EFE5C8] hover:text-[#8B6B4A] transition-colors"
                    >
                      ×
                    </button>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {["name", "email", "phone"].map((field) => (
                      <input
                        key={field}
                        type={
                          field === "email"
                            ? "email"
                            : field === "phone"
                              ? "tel"
                              : "text"
                        }
                        name={field}
                        placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)} *`}
                        value={formData[field]}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${inputClass}`}
                      />
                    ))}
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${inputClass}`}
                    >
                      <option value="" disabled>
                        Select Category *
                      </option>
                      <option value="SEO">SEO</option>
                      <option value="Software Developer">
                        Software Developer
                      </option>
                      <option value="BPO">BPO</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                      <option value="Web Development">Web Development</option>
                      <option value="Other">Other</option>
                    </select>
                    <textarea
                      name="message"
                      placeholder="Your Message / Requirement..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${inputClass}`}
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full py-4 rounded-lg font-bold text-lg text-white transition ${
                        loading
                          ? "bg-gray-700 cursor-not-allowed"
                          : "bg-[#8B6B4A] hover:bg-[#8B6B4A] shadow-lg shadow-[#8B6B4A]/40"
                      }`}
                    >
                      {loading ? "Sending..." : "Submit Inquiry"}
                    </button>
                    {success && (
                      <p className="text-green-500 text-center font-medium">
                        Thank you! We'll get back to you soon.
                      </p>
                    )}
                    {error && (
                      <p className="text-red-500 text-center">{error}</p>
                    )}
                  </form>
                </div>
              </div>
            )}
          </motion.div>
        </section>

        {/* ====================== TRANSFORM YOUR VISION ====================== */}
        <section
          className={`py-12 md:py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-20"
            >
              <motion.h2
                variants={fadeInUp}
                className={`text-4xl md:text-6xl font-black mb-6 ${headingClass}`}
              >
                Transform Your Vision into{" "}
                <span className={accentClass}>Digital Success</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className={`text-2xl font-bold mb-8 ${accentClass}`}
              >
                With India’s Trusted Digital Marketing Services
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {["Be Unique", "Be Scalable", "Be Future Ready"].map(
                (title, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className={`rounded-3xl p-10 text-center transition-all group ${cardClass}`}
                  >
                    <h3 className={`text-4xl font-black mb-6 ${accentClass}`}>
                      {title}
                    </h3>
                    <p className={`text-lg leading-relaxed ${bodyClass}`}>
                      {title === "Be Unique" &&
                        "Get digital marketing strategies designed specifically for your business goals and target audience."}
                      {title === "Be Scalable" &&
                        "Grow your business with flexible marketing solutions that can expand as your company grows."}
                      {title === "Be Future Ready" &&
                        "Stay ahead in the digital world with modern marketing tools and innovative strategies."}
                    </p>
                  </motion.div>
                ),
              )}
            </div>

            {/* <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`text-lg md:text-xl max-w-5xl mx-auto leading-relaxed text-center ${bodyClass}`}
          >
            At AI Knots IT Solutions, we create customized digital marketing strategies 
            that help businesses strengthen their brand presence, manage campaigns smoothly, 
            and build long-term engagement with customers.
          </motion.p> */}

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`text-lg md:text-xl max-w-5xl mx-auto leading-relaxed text-center mb-16 ${isDark ? "text-gray-300" : "text-gray-700"}`}
            >
              At AI Knots, we create customized digital marketing strategies
              that help businesses strengthen their brand presence, manage
              campaigns smoothly, and build long-term engagement with customers.
              <br />
              <br />
              As a trusted digital marketing company in India, we understand
              that every business has different goals. That is why our team
              creates tailored marketing solutions that help generate leads,
              increase website traffic, and improve customer connections.
              <br />
              <br />
              Our strategies focus on helping businesses grow through practical,
              measurable, and result-focused marketing campaigns.
              <br />
              <br />
              With years of experience in digital marketing services, our team
              ensures smooth campaign management, data-driven decisions, and
              continuous improvements.
              <br />
              <br />
              From strategy planning to campaign optimization, our services are
              designed to support long-term business growth and build a strong
              digital presence.
            </motion.p>
          </div>
        </section>

        {/* ====================== SERVICES SECTION ====================== */}
        <section
          className={`py-12 md:py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`text-4xl md:text-6xl font-black text-center mb-6 ${headingClass}`}
            >
              Complete Digital Marketing{" "}
              <span className={accentClass}>Solutions</span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`text-xl text-center mb-20 max-w-4xl mx-auto ${bodyClass}`}
            >
              Reliable and result-driven digital marketing services tailored to
              your business goals.
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className={`rounded-3xl p-10 transition-all group ${cardClass}`}
                >
                  <service.icon
                    className={`w-16 h-16 mb-8 mx-auto transition-transform group-hover:scale-110 ${accentClass}`}
                  />
                  <h3
                    className={`text-2xl font-bold mb-6 text-center ${headingClass}`}
                  >
                    {service.title}
                  </h3>
                  <p className={`text-center leading-relaxed ${bodyClass}`}>
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================== INDUSTRIES WE SERVE ====================== */}
        <section
          className={`py-12 md:py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`text-4xl md:text-6xl font-black text-center mb-12 ${headingClass}`}
            >
              Industries We <span className={accentClass}>Serve</span>
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {industries.map((industry, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.03 }}
                  className={`px-6 py-5 rounded-2xl text-center font-medium transition-all ${cardClass}`}
                >
                  {industry}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================== INNOVATION + GROWTH SECTION ====================== */}
        <section
          className={`py-12 md:py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`text-4xl md:text-6xl font-black mb-12 ${headingClass}`}
            >
              Innovation That Drives{" "}
              <span className={accentClass}>Business Growth</span>
            </motion.h2>

            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src={images.growth}
              alt="Business growth through digital marketing"
              className={`rounded-3xl shadow-2xl mx-auto max-w-5xl w-full object-cover border ${isDark ? "border-red-900/30" : "border-gray-200"}`}
            />
          </div>
        </section>

        {/* ====================== PROCESS + FINAL CTA ====================== */}
        <section
          className={`py-12 md:py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-950" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl font-black text-center mb-16 ${headingClass}`}
            >
              Our <span className={accentClass}>Process</span>
            </motion.h2>

            <div className="grid md:grid-cols-5 gap-6 mb-24">
              {[
                "01 Discovery & Strategy",
                "02 Research & Planning",
                "03 Creative Implementation",
                "04 Optimization & SEO",
                "05 Analytics & Reporting",
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-3xl p-8 text-center min-h-[180px] flex flex-col justify-center border transition-all ${cardClass}`}
                >
                  <div className={`text-5xl font-black mb-4 ${accentClass}`}>
                    {step.split(" ")[0]}
                  </div>
                  <p className="font-semibold text-lg">
                    {step.split(" ").slice(1).join(" ")}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Final CTA */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className={`text-4xl md:text-6xl font-black mb-8 ${headingClass}`}
              >
                Let’s Elevate Your Brand with{" "}
                <span className={accentClass}>Digital Marketing</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className={`text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed ${bodyClass}`}
              >
                At AI KNOTS IT SOLUTION, we believe every business has the
                potential to grow online with the right strategy. Contact us
                today and start your digital growth journey.
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`px-16 py-7 rounded-full text-2xl font-bold transition-all ${
                  isDark
                    ? "bg-[#8B6B4A] shadow-[#8B6B4A]/60"
                    : "bg-[#8B6B4A] hover:bg-[#8B6B4A] text-white shadow-[#8B6B4A]/50"
                }`}
              >
                <button
                  onClick={() => navigate("/contact")}
                  className="flex items-center gap-3"
                >
                  Get Started Today →
                </button>
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
