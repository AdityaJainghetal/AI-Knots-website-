

// import React, { useState } from "react";
// import { useTheme } from "../../context/ThemeContext"; // ← Added Theme Hook
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet-async";
// import { useNavigate } from "react-router-dom";
// import webdesign from "../../assets/Images/webdesign.png";
// import {
//   Palette,
//   Code,
//   ShoppingCart,
//   RefreshCw,
//   FileText,
//   Zap,
//   CheckCircle2,
//   ArrowRight,
// } from "lucide-react";

// // Selected high-quality images for 2026 modern feel
// const images = {
//   hero: "https://miro.medium.com/1*mdU5f4UCSQZKZ_PSoehmWA.avif",
//   responsive:
//     "https://goodmockups.com/wp-content/uploads/2024/07/Free-Apple-Devices-Responsive-Web-Design-Stationery-8K-Mockup-PSD.jpg",
//   ecommerce:
//     "https://www.thegenielab.com/cdn/shop/articles/Make-a-Shopify-Store-Mobile-Friendly.png?v=1696021845",
//   process:
//     "https://thumbs.dreamstime.com/b/flat-line-illustration-website-design-process-idea-startup-development-quality-assurance-60716700.jpg",
//   ctaExample: "https://www.axelerant.com/hubfs/Blog%20Image.png",
// };

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };
// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } },
// };

// const benefits = [
//   "Boost Search Rankings – Google favors fast, mobile-friendly sites",
//   "Reduce Maintenance Cost – One site for all devices",
//   "Get Found Online – Better visibility to the right audience",
//   "Increase Traffic and Leads – Superior UX = more engagement",
//   "Reach More Customers – Mobile dominance in 2026",
//   "Improve Conversion Rate – Action-oriented design",
//   "Better User Experience – Keeps visitors longer",
//   "Strong Brand Image – Instant credibility",
// ];

// const services = [
//   {
//     icon: Palette,
//     title: "Custom Website Design",
//     desc: "Unique, brand-aligned websites built from scratch for maximum impact.",
//   },
//   {
//     icon: Code,
//     title: "WordPress Website Design",
//     desc: "Powerful, easy-to-manage sites with advanced features and flexibility.",
//   },
//   {
//     icon: ShoppingCart,
//     title: "eCommerce Website Design",
//     desc: "Smooth, high-converting online stores that drive sales.",
//   },
//   {
//     icon: RefreshCw,
//     title: "Website Redesign",
//     desc: "Modernize outdated sites for better performance and user experience.",
//   },
//   {
//     icon: FileText,
//     title: "Landing Page Design",
//     desc: "High-conversion pages optimized for ads, campaigns, and lead generation.",
//   },
// ];

// const processSteps = [
//   "Understanding your business & goals",
//   "Planning structure & user flow",
//   "Designing modern, responsive layouts",
//   "Development, testing & optimization",
//   "Launch with full support & handover",
// ];

// const differences = [
//   "Custom Design – No generic templates",
//   "Full Control – You own everything",
//   "SEO-Friendly Structure – Built to rank",
//   "Data-Driven Approach – Based on real user behavior",
//   "Transparent Process – Stay involved always",
// ];

// const additionalServices = [
//   "Content Writing",
//   "SEO Optimization",
//   "Logo Design",
//   "Conversion Rate Optimization",
//   "Technical SEO",
//   "Website Maintenance",
//   "Website Hosting",
// ];

// const whyChoose = [
//   "No long-term contracts",
//   "Transparent pricing",
//   "Dedicated team",
//   "Affordable solutions",
//   "Complete ongoing support",
// ];

// const faqs = [
//   {
//     q: "How long does it take to design a website?",
//     a: "Usually 7 to 15 days depending on your requirements and complexity.",
//   },
//   {
//     q: "Will my website be mobile-friendly?",
//     a: "Yes, all our websites are fully responsive and optimized for all devices.",
//   },
//   {
//     q: "Do you build SEO-friendly websites?",
//     a: "Yes, we follow the latest SEO best practices including Core Web Vitals and mobile-first indexing.",
//   },
//   {
//     q: "Can you redesign my existing website?",
//     a: "Yes, we specialize in upgrading old sites for modern performance and conversions.",
//   },
//   {
//     q: "Do you provide support after launch?",
//     a: "Yes, we offer maintenance, updates, and support packages.",
//   },
// ];

// export default function WebsiteDesignDevelopment() {
//   const { isDark } = useTheme(); // ← Theme Hook
//   const navigate = useNavigate();
//   const [openFaq, setOpenFaq] = useState(null);

//   // ====================== THEME CLASSES ======================
//   const cardClass = isDark
//     ? "bg-gray-900/70 backdrop-blur-sm border border-gray-800 hover:border-red-600/60 rounded-2xl p-8 hover:shadow-2xl hover:shadow-red-900/30 transition-all"
//     : "bg-white border border-gray-200 shadow-lg hover:shadow-2xl rounded-2xl p-8 transition-all";

//   const headingClass = isDark ? "text-white" : "text-gray-900";
//   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
//   const accentClass = "text-red-500";

//   return (
//     <>
//       <Helmet>
//         <title>Website Development Company Bhopal | Atla IKS</title>
//         <meta
//           name="description"
//           content="Professional website design & development company in Bhopal for businesses."
//         />
//         <meta
//           name="keywords"
//           content="Website Development Company Bhopal	Web Design Company, Website Services"
//         />
//       </Helmet>
//       <div
//         className={`min-h-screen transition-colors duration-700 overflow-hidden
//       ${isDark ? "bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white" : "bg-gray-50 text-gray-900"}`}
//       >
//         {/* Hero */}
//         <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
//           <div className="absolute inset-0">
//             <img
//               src={images.hero}
//               alt="Modern Website Dashboard"
//               className="w-full h-full object-cover"
//               loading="lazy"
//             />

//             {/* Improved Overlay */}
//             <div
//               className={`absolute inset-0 transition-all duration-700 ${
//                 isDark
//                   ? "bg-gradient-to-b from-black/80 via-black/90 to-black/95"
//                   : "bg-gradient-to-b from-black/60 via-black/70 to-black/80"
//               }`}
//             />
//           </div>

//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer}
//             className="relative z-10 max-w-7xl mx-auto text-center"
//           >
//             <motion.h1
//               variants={fadeInUp}
//               className={`text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight ${
//                 isDark ? "text-white" : "text-white"
//               }`}
//             >
//               Website Design & Development Services{" "}
//               <span className="text-transparent bg-clip-text bg-[#8d6140] dark:bg-[#826047]">
//                 AI KNOTS IT Solution
//               </span>
//             </motion.h1>

//             <motion.p
//               variants={fadeInUp}
//               className={`text-3xl md:text-5xl font-bold mb-8 ${
//                 isDark ? "text-red-400" : "text-[#8d6140]"
//               }`}
//             >
//               Fast, Functional and Focused on Results
//             </motion.p>

//             <motion.p
//               variants={fadeInUp}
//               className={`text-xl md:text-2xl mb-10 max-w-5xl mx-auto leading-relaxed ${
//                 isDark ? "text-gray-300" : "text-gray-300"
//               }`}
//             >
//               Convert Visitors Into Customers With Smart Web Design
//             </motion.p>

//             <motion.p
//               variants={fadeInUp}
//               className={`text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed ${
//                 isDark ? "text-gray-400" : "text-gray-300"
//               }`}
//             >
//               Don’t lose potential customers because of a poor website. We build
//               fast-loading, conversion-focused sites that generate leads, build
//               trust, and grow your business in 2026.
//             </motion.p>

//             <motion.div
//               variants={fadeInUp}
//               className="flex flex-col sm:flex-row gap-6 justify-center"
//             >
//               <button
//                 onClick={() => navigate("/recentwork")}
//                 className={`px-12 py-6 rounded-full text-xl md:text-2xl font-bold shadow-2xl transition-all flex items-center gap-3 group hover:scale-105 ${
//                   isDark
//                     ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-red-900/70"
//                     : "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-red-600/50 text-white"
//                 }`}
//               >
//                 Our Recent Work
//                 <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
//               </button>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* Responsive Mockup Visual */}

//         {/* Why Your Business Needs a Modern Website */}
//         <section
//           className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "" : "bg-white"}`}
//         >
//           <div className="max-w-7xl mx-auto">
//             <motion.h2
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
//             >
//               Why Your Business Needs a{" "}
//               <span className={accentClass}>Modern Website</span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`text-xl mb-12 max-w-4xl mx-auto text-center ${bodyClass}`}
//             >
//               In 2026, your website is your 24/7 salesperson. Outdated or slow
//               sites loose customers to competitors instantly.
//             </motion.p>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {benefits.map((benefit, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.1 }}
//                   className={cardClass}
//                 >
//                   <div className="flex items-center">
//                     <CheckCircle2
//                       className={`w-8 h-8 ${accentClass} mr-4 flex-shrink-0`}
//                     />
//                     <p className={`text-lg ${bodyClass}`}>{benefit}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Services */}
//         <section
//           className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/50" : "bg-gray-100"}`}
//         >
//           <div className="max-w-7xl mx-auto">
//             <motion.h2
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
//             >
//               Our <span className={accentClass}>Website Design Services</span>
//             </motion.h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {services.map((serv, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.1 }}
//                   className={cardClass}
//                 >
//                   <serv.icon
//                     className={`w-16 h-16 ${accentClass} mb-6 mx-auto group-hover:scale-110 transition-transform`}
//                   />
//                   <h3
//                     className={`text-2xl font-bold mb-4 text-center ${headingClass}`}
//                   >
//                     {serv.title}
//                   </h3>
//                   <p className={`text-center ${bodyClass}`}>{serv.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Process */}
//         <section
//           className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "" : "bg-white"}`}
//         >
//           <div className="max-w-7xl mx-auto text-center">
//             <motion.h2
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`text-4xl md:text-5xl font-black mb-12 ${headingClass}`}
//             >
//               Our Simple & Effective{" "}
//               <span className={accentClass}>Process</span>
//             </motion.h2>

//             <motion.img
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               src={images.process}
//               alt="Website Design Process Timeline"
//               className="rounded-2xl shadow-2xl mx-auto w-full max-w-4xl mb-12"
//             />

//             <div className="grid md:grid-cols-5 gap-6">
//               {processSteps.map((step, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.15 }}
//                   className={cardClass}
//                 >
//                   <div className={`text-3xl font-black ${accentClass} mb-2`}>
//                     {idx + 1}
//                   </div>
//                   <p className={`text-lg font-semibold ${bodyClass}`}>{step}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* What Makes Us Different */}
//         <section
//           className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/40" : "bg-gray-100"}`}
//         >
//           <div className="max-w-7xl mx-auto">
//             <motion.h2
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
//             >
//               What Makes Us <span className={accentClass}>Different</span>
//             </motion.h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {differences.map((diff, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.1 }}
//                   className={cardClass}
//                 >
//                   <div className="flex items-center justify-center gap-4">
//                     <CheckCircle2
//                       className={`w-8 h-8 ${accentClass} flex-shrink-0`}
//                     />
//                     <p className={`text-lg font-semibold ${bodyClass}`}>
//                       {diff}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA Example Visual */}
//         <section
//           className={`py-16 px-4 sm:px-6 lg:px-8 ${isDark ? "" : "bg-white"}`}
//         >
//           <div className="max-w-5xl mx-auto text-center">
//             <motion.h3
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`text-3xl font-bold mb-8 ${headingClass}`}
//             >
//               Conversion-Focused Design in Action
//             </motion.h3>
//             <motion.img
//               src={images.ctaExample}
//               alt="High-Converting CTA Buttons Examples"
//               className="rounded-2xl shadow-2xl mx-auto w-full"
//             />
//           </div>
//         </section>

//         {/* Additional Services & Why Choose */}
//         <section
//           className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}
//         >
//           <div className="max-w-7xl mx-auto">
//             <div className="grid md:grid-cols-2 gap-16">
//               <div>
//                 <motion.h2
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   className={`text-4xl md:text-5xl font-black mb-8 ${headingClass}`}
//                 >
//                   Additional <span className={accentClass}>Services</span>
//                 </motion.h2>
//                 <ul className={`space-y-4 text-lg ${bodyClass}`}>
//                   {additionalServices.map((serv, idx) => (
//                     <li key={idx} className="flex items-center">
//                       <Zap className={`w-6 h-6 ${accentClass} mr-3`} /> {serv}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <motion.h2
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   className={`text-4xl md:text-5xl font-black mb-8 ${headingClass}`}
//                 >
//                   Why Choose <span className={accentClass}>AI Knots</span>
//                 </motion.h2>
//                 <div className="grid gap-6">
//                   {whyChoose.map((point, idx) => (
//                     <motion.div
//                       key={idx}
//                       initial={{ opacity: 0, x: -30 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: idx * 0.1 }}
//                       className={cardClass}
//                     >
//                       <div className="flex items-center">
//                         <CheckCircle2
//                           className={`w-8 h-8 ${accentClass} mr-4`}
//                         />
//                         <p className={`text-xl font-semibold ${bodyClass}`}>
//                           {point}
//                         </p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section
//           className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gradient-to-br from-red-950/30 to-black" : "bg-red-50"}`}
//         >
//           <div className="max-w-5xl mx-auto text-center">
//             <motion.h2
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`text-4xl md:text-6xl font-black mb-8 ${headingClass}`}
//             >
//               Ready to Build Your{" "}
//               <span className={accentClass}>High-Performing</span> Website?
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`text-xl md:text-2xl mb-10 max-w-3xl mx-auto ${bodyClass}`}
//             >
//               Let’s create a website that attracts visitors, engages them, and
//               converts them into loyal customers.
//             </motion.p>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl md:text-3xl font-black shadow-2xl shadow-red-900/60 hover:shadow-red-700/80 transition-all flex items-center gap-4 mx-auto"
//             >
//               <button onClick={() => navigate("/contact")}>Contact Us</button>
//               <ArrowRight className="w-auto h-8" />
//             </motion.button>
//           </div>
//         </section>

//         {/* FAQ */}
//         <section
//           className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "" : "bg-white"}`}
//         >
//           <div className="max-w-4xl mx-auto">
//             <motion.h2
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
//             >
//               Frequently Asked <span className={accentClass}>Questions</span>
//             </motion.h2>

//             <div className="space-y-4">
//               {faqs.map((faq, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.1 }}
//                   className={`border rounded-xl overflow-hidden transition-all
//                   ${
//                     isDark
//                       ? "border-gray-800 bg-gray-900/30"
//                       : "border-gray-200 bg-white shadow"
//                   }`}
//                 >
//                   <button
//                     onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
//                     className={`w-full px-8 py-6 text-left flex justify-between items-center transition-colors
//                     ${isDark ? "hover:bg-gray-800/50" : "hover:bg-gray-100"}`}
//                   >
//                     <span className={`text-xl font-bold ${headingClass}`}>
//                       {faq.q}
//                     </span>
//                     <span
//                       className={`text-red-500 text-2xl transition-transform ${openFaq === idx ? "rotate-180" : ""}`}
//                     >
//                       ▼
//                     </span>
//                   </button>
//                   {openFaq === idx && (
//                     <div
//                       className={`px-8 pb-8 pt-2 leading-relaxed ${bodyClass}`}
//                     >
//                       {faq.a}
//                     </div>
//                   )}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Final CTA */}
//       </div>
//     </>
//   );
// }


import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import webdesign from "../../assets/Images/webdesign.png";
import {
  Palette,
  Code,
  ShoppingCart,
  RefreshCw,
  FileText,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const images = {
  hero: "https://miro.medium.com/1*mdU5f4UCSQZKZ_PSoehmWA.avif",
  responsive: "https://goodmockups.com/wp-content/uploads/2024/07/Free-Apple-Devices-Responsive-Web-Design-Stationery-8K-Mockup-PSD.jpg",
  ecommerce: "https://www.thegenielab.com/cdn/shop/articles/Make-a-Shopify-Store-Mobile-Friendly.png?v=1696021845",
  process: "https://thumbs.dreamstime.com/b/flat-line-illustration-website-design-process-idea-startup-development-quality-assurance-60716700.jpg",
  ctaExample: "https://www.axelerant.com/hubfs/Blog%20Image.png",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const benefits = [
  "Boost Search Rankings – Google favors fast, mobile-friendly sites",
  "Reduce Maintenance Cost – One site for all devices",
  "Get Found Online – Better visibility to the right audience",
  "Increase Traffic and Leads – Superior UX = more engagement",
  "Reach More Customers – Mobile dominance in 2026",
  "Improve Conversion Rate – Action-oriented design",
  "Better User Experience – Keeps visitors longer",
  "Strong Brand Image – Instant credibility",
];

const services = [
  {
    icon: Palette,
    title: "Custom Website Design",
    desc: "Unique, brand-aligned websites built from scratch for maximum impact.",
  },
  {
    icon: Code,
    title: "WordPress Website Design",
    desc: "Powerful, easy-to-manage sites with advanced features and flexibility.",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Website Design",
    desc: "Smooth, high-converting online stores that drive sales.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    desc: "Modernize outdated sites for better performance and user experience.",
  },
  {
    icon: FileText,
    title: "Landing Page Design",
    desc: "High-conversion pages optimized for ads, campaigns, and lead generation.",
  },
];

const processSteps = [
  "Understanding your business & goals",
  "Planning structure & user flow",
  "Designing modern, responsive layouts",
  "Development, testing & optimization",
  "Launch with full support & handover",
];

const differences = [
  "Custom Design – No generic templates",
  "Full Control – You own everything",
  "SEO-Friendly Structure – Built to rank",
  "Data-Driven Approach – Based on real user behavior",
  "Transparent Process – Stay involved always",
];

const additionalServices = [
  "Content Writing",
  "SEO Optimization",
  "Logo Design",
  "Conversion Rate Optimization",
  "Technical SEO",
  "Website Maintenance",
  "Website Hosting",
];

const whyChoose = [
  "No long-term contracts",
  "Transparent pricing",
  "Dedicated team",
  "Affordable solutions",
  "Complete ongoing support",
];

const faqs = [
  {
    q: "How long does it take to design a website?",
    a: "Usually 7 to 15 days depending on your requirements and complexity.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Yes, all our websites are fully responsive and optimized for all devices.",
  },
  {
    q: "Do you build SEO-friendly websites?",
    a: "Yes, we follow the latest SEO best practices including Core Web Vitals and mobile-first indexing.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes, we specialize in upgrading old sites for modern performance and conversions.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes, we offer maintenance, updates, and support packages.",
  },
];

export default function WebsiteDesignDevelopment() {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  // ====================== NEW EARTHY COLOR SCHEME ======================
  const primary = "#3d220e";
  const accent = "#8B6B4A";
  const lightBg = "#f9efe1";
  const softBg = "#f4e9d8";

  const cardClass = isDark
    ? "bg-gray-900/70 backdrop-blur-sm border border-gray-800 hover:border-[#8B6B4A] rounded-2xl p-8 hover:shadow-2xl hover:shadow-[#8B6B4A]/30 transition-all"
    : "bg-white border border-[#e8d9c2] shadow-lg hover:shadow-2xl hover:shadow-[#8B6B4A]/20 rounded-2xl p-8 transition-all";

  const headingClass = isDark ? "text-white" : "text-[#3d220e]";
  const bodyClass = isDark ? "text-gray-300" : "text-[#5c4635]";
  const accentClass = `text-[${accent}]`;

  return (
    <>
      <Helmet>
        <title>Website Development Company Bhopal | Atla IKS</title>
        <meta
          name="description"
          content="Professional website design & development company in Bhopal for businesses."
        />
        <meta
          name="keywords"
          content="Website Development Company Bhopal, Web Design Company, Website Services"
        />
      </Helmet>

      <div
        className={`min-h-screen transition-colors duration-700 overflow-hidden
          ${isDark ? "bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white" : `bg-[${lightBg}] text-[#3d220e]`}`}
      >
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={images.hero}
              alt="Modern Website Dashboard"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className={`absolute inset-0 transition-all duration-700 ${
                isDark ? "bg-black/90" : "bg-black/70"
              }`}
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
              className={`text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight text-white`}
            >
              Website Design & Development Services{" "}
              <span className="text-transparent bg-clip-text bg-[#8B6B4A]">AI KNOTS IT Solution</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className={`text-3xl md:text-5xl font-bold mb-8 text-[#f9e8c8]`}
            >
              Fast, Functional and Focused on Results
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className={`text-xl md:text-2xl mb-10 max-w-5xl mx-auto leading-relaxed text-gray-200`}
            >
              Convert Visitors Into Customers With Smart Web Design
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className={`text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-300`}
            >
              Don’t lose potential customers because of a poor website. We build
              fast-loading, conversion-focused sites that generate leads, build
              trust, and grow your business in 2026.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button
                onClick={() => navigate("/recentwork")}
                className="px-12 py-6 rounded-full text-xl md:text-2xl font-bold shadow-2xl transition-all flex items-center gap-3 group hover:scale-105 bg-[#3d220e] hover:bg-[#5c4635] text-white"
              >
                Our Recent Work
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Why Your Business Needs a Modern Website */}
        <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
            >
              Why Your Business Needs a{" "}
              <span className={accentClass}>Modern Website</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-xl mb-12 max-w-4xl mx-auto text-center ${bodyClass}`}
            >
              In 2026, your website is your 24/7 salesperson. Outdated or slow
              sites lose customers to competitors instantly.
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={cardClass}
                >
                  <div className="flex items-center">
                    <CheckCircle2 className={`w-8 h-8 text-[#8B6B4A] mr-4 flex-shrink-0`} />
                    <p className={`text-lg ${bodyClass}`}>{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/50" : "bg-[#f4e9d8]"}`}>
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
            >
              Our <span className={accentClass}>Website Design Services</span>
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
                  <serv.icon className={`w-16 h-16 text-[#8B6B4A] mb-6 mx-auto`} />
                  <h3 className={`text-2xl font-bold mb-4 text-center ${headingClass}`}>
                    {serv.title}
                  </h3>
                  <p className={`text-center ${bodyClass}`}>{serv.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl font-black mb-12 ${headingClass}`}
            >
              Our Simple & Effective{" "}
              <span className={accentClass}>Process</span>
            </motion.h2>

            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src={images.process}
              alt="Website Design Process Timeline"
              className="rounded-2xl shadow-2xl mx-auto w-full max-w-4xl mb-12"
            />

            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className={cardClass}
                >
                  <div className={`text-3xl font-black text-[#8B6B4A] mb-2`}>{idx + 1}</div>
                  <p className={`text-lg font-semibold ${bodyClass}`}>{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/40" : "bg-[#f4e9d8]"}`}>
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-6xl font-black text-center mb-16 ${headingClass}`}
            >
              What Makes Us <span className={accentClass}>Different</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differences.map((diff, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={cardClass}
                >
                  <div className="flex items-center justify-center gap-4">
                    <CheckCircle2 className={`w-8 h-8 text-[#8B6B4A] flex-shrink-0`} />
                    <p className={`text-lg font-semibold ${bodyClass}`}>{diff}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Example Visual */}
        <section className={`py-16 px-4 sm:px-6 lg:px-8 ${isDark ? "" : "bg-white"}`}>
          <div className="max-w-5xl mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-3xl font-bold mb-8 ${headingClass}`}
            >
              Conversion-Focused Design in Action
            </motion.h3>
            <motion.img
              src={images.ctaExample}
              alt="High-Converting CTA Buttons Examples"
              className="rounded-2xl shadow-2xl mx-auto w-full"
            />
          </div>
        </section>

        {/* Additional Services & Why Choose */}
        <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-[#f9efe1]"}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`text-4xl md:text-5xl font-black mb-8 ${headingClass}`}
                >
                  Additional <span className={accentClass}>Services</span>
                </motion.h2>
                <ul className={`space-y-4 text-lg ${bodyClass}`}>
                  {additionalServices.map((serv, idx) => (
                    <li key={idx} className="flex items-center">
                      <Zap className={`w-6 h-6 text-[#8B6B4A] mr-3`} /> {serv}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`text-4xl md:text-5xl font-black mb-8 ${headingClass}`}
                >
                  Why Choose <span className={accentClass}>AI Knots</span>
                </motion.h2>
                <div className="grid gap-6">
                  {whyChoose.map((point, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className={cardClass}
                    >
                      <div className="flex items-center">
                        <CheckCircle2 className={`w-8 h-8 text-[#8B6B4A] mr-4`} />
                        <p className={`text-xl font-semibold ${bodyClass}`}>{point}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main CTA */}
        <section className={`py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#3d220e] via-[#5c4635] to-[#3d220e] text-white`}>
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-8"
            >
              Ready to Build Your{" "}
              <span className="text-[#f9e8c8]">High-Performing</span> Website?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
            >
              Let’s create a website that attracts visitors, engages them, and
              converts them into loyal customers.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/contact")}
              className="px-14 py-7 bg-white text-[#3d220e] rounded-full text-2xl md:text-3xl font-black shadow-2xl hover:bg-[#f9e8c8] transition-all flex items-center gap-4 mx-auto"
            >
              Contact Us
              <ArrowRight className="w-8 h-8" />
            </motion.button>
          </div>
        </section>

        {/* FAQ */}
        <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "" : "bg-white"}`}>
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
                  className={`border rounded-xl overflow-hidden transition-all ${
                    isDark ? "border-gray-800 bg-gray-900/30" : "border-[#e8d9c2] bg-white shadow"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className={`w-full px-8 py-6 text-left flex justify-between items-center transition-colors ${
                      isDark ? "hover:bg-gray-800/50" : "hover:bg-[#f9efe1]"
                    }`}
                  >
                    <span className={`text-xl font-bold ${headingClass}`}>{faq.q}</span>
                    <span
                      className={`text-[#8B6B4A] text-2xl transition-transform ${openFaq === idx ? "rotate-180" : ""}`}
                    >
                      ▼
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className={`px-8 pb-8 pt-2 leading-relaxed ${bodyClass}`}>
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