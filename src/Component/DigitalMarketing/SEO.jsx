// // import React from "react";
// // import { motion } from "framer-motion";
// // import { ArrowRight, Search, BarChart3, Globe, MapPin, Link, FileText, Zap } from "lucide-react";

// // // Images from search (you can replace with your own imports if needed)
// // const seoDashboard = "https://www.databloo.com/wp-content/uploads/2024/09/Data-Bloo-Custom-Template-with-GA4-Google-Ads-Facebook-Ads-GA4-2.png"; // analytics dashboard
// // const seoTeam = "https://img.freepik.com/premium-photo/seo-search-engine-optimization-modish-ecommerce-online-retail-business_31965-63124.jpg"; // team working
// // const googleSERP = "https://yoast.com/app/uploads/2018/02/cody-gakpo-google-search-result-scaled.jpg"; // Google search results example
// // const localSEO = "https://www.seoguruatlanta.com/wp-content/uploads/2020/03/ultimate-local-business-marketing-tool-guide-to-google-my-business.png"; // Google Maps/local pin

// // const seoServices = [
// //   { icon: Zap, title: "Technical SEO Audit", desc: "Detailed website audit to fix issues affecting rankings and performance." },
// //   { icon: FileText, title: "On-Page SEO", desc: "Optimize content, meta tags, headings, structure, and internal linking." },
// //   { icon: Link, title: "Off-Page SEO", desc: "Build authority with high-quality backlinks and trusted mentions." },
// //   { icon: MapPin, title: "Local SEO", desc: "Rank in local searches and Google Maps to attract nearby customers." },
// //   { icon: Search, title: "Keyword Research & Strategy", desc: "Find high-value keywords your customers are actually searching for." },
// //   { icon: Globe, title: "E-commerce SEO", desc: "Optimize product & category pages to boost visibility and online sales." },
// // ];

// // const packages = [
// //   {
// //     name: "Basic Plan",
// //     for: "Startups & Small Businesses",
// //     features: ["Initial SEO analysis", "On-page optimization", "Keyword research", "Local SEO setup", "Off-page SEO", "Monthly reporting"],
// //   },
// //   {
// //     name: "Advance Plan",
// //     for: "Growing Businesses",
// //     features: ["SEO audit and strategy", "On-page optimization", "Keyword targeting", "Local SEO optimization", "Content marketing", "Off-page SEO", "Monthly reporting", "Customer support"],
// //   },
// //   {
// //     name: "Pro Plan",
// //     for: "Competitive Industries",
// //     features: ["Complete SEO strategy", "On-page + technical SEO", "Keyword research and targeting", "Local SEO optimization", "Content marketing", "High-quality backlinks", "Premium SEO reports", "Dedicated support"],
// //   },
// // ];

// // const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
// // const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

// // export default function SEO() {
// //   return (
// //     <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
// //       {/* Hero Section */}
// //       <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
// //         <div className="absolute inset-0">
// //           <img src={googleSERP} alt="Google search results example" className="w-full h-full object-cover opacity-20 brightness-50" />
// //           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
// //         </div>

// //         <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 max-w-7xl mx-auto text-center">
// //           <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
// //             Best SEO Company in India That Drives{" "}
// //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Traffic & Generates Real Leads</span>
// //           </motion.h1>

// //           <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
// //             At <span className="text-red-400 font-semibold">AI Knots</span>, we focus on real business growth — more qualified traffic, inquiries, calls, and sales — not just rankings.
// //           </motion.p>

// //           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
// //             <button className="px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-xl font-bold shadow-xl shadow-red-900/40 hover:shadow-red-700/60 hover:scale-105 transition-all flex items-center gap-3 group">
// //               Let's Talk Growth <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
// //             </button>
// //             <button className="px-10 py-5 border-2 border-red-600/70 text-red-400 rounded-full text-xl font-semibold hover:bg-red-950/40 transition-all">
// //               Get Free SEO Audit
// //             </button>
// //           </motion.div>
// //         </motion.div>
// //       </section>

// //       {/* SEO Services */}
// //       <section className="py-20 px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black text-center mb-16">
// //             Our SEO Services – <span className="text-red-500">Designed to Deliver Results</span>
// //           </motion.h2>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {seoServices.map((service, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 40 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.1 }}
// //                 className="bg-gray-900/60 backdrop-blur-sm border border-red-900/30 rounded-2xl p-8 hover:border-red-600/50 hover:shadow-xl hover:shadow-red-900/20 transition-all group"
// //               >
// //                 <service.icon className="w-14 h-14 text-red-500 mb-6 mx-auto group-hover:scale-110 transition-transform" />
// //                 <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
// //                 <p className="text-gray-300 text-center">{service.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Advantages & Dashboard Image */}
// //       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
// //         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
// //           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
// //             <h2 className="text-4xl md:text-5xl font-black mb-8">Advantages of SEO for Your Business</h2>
// //             <ul className="space-y-4 text-lg text-gray-300">
// //               {["Higher visibility on search engines", "Increased website traffic", "Stronger brand awareness", "Higher conversion rates", "Long-term business growth"].map((adv, i) => (
// //                 <motion.li key={i} variants={fadeInUp} className="flex items-center gap-3">
// //                   <span className="text-red-500 text-2xl">✓</span> {adv}
// //                 </motion.li>
// //               ))}
// //             </ul>
// //           </motion.div>

// //           <motion.img
// //             initial={{ opacity: 0, x: 50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             src={seoDashboard}
// //             alt="SEO analytics dashboard showing traffic growth"
// //             className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover"
// //           />
// //         </div>
// //       </section>

// //       {/* Why Choose Us & Team Image */}
// //       <section className="py-20 px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
// //           <motion.img
// //             initial={{ opacity: 0, x: -50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             src={seoTeam}
// //             alt="Professional SEO team collaborating"
// //             className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover order-2 md:order-1"
// //           />

// //           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-1 md:order-2">
// //             <h2 className="text-4xl md:text-5xl font-black mb-8">Why Choose Atlas Knots for SEO?</h2>
// //             <ul className="space-y-6 text-lg">
// //               {["White Hat SEO Practices – Long-term results", "Transparent Reporting – Weekly/monthly updates", "Dedicated SEO Team – Specialists + writers + developers", "Proven Experience – Always updated with latest trends"].map((reason, i) => (
// //                 <motion.li key={i} variants={fadeInUp} className="flex items-start gap-4">
// //                   <span className="text-red-500 text-3xl font-bold">0{i + 1}</span>
// //                   <p>{reason}</p>
// //                 </motion.li>
// //               ))}
// //             </ul>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Packages */}
// //       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black text-center mb-16">
// //             Our SEO <span className="text-red-500">Packages</span>
// //           </motion.h2>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             {packages.map((pkg, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 50 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.15 }}
// //                 className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8 hover:border-red-600 hover:shadow-xl hover:shadow-red-900/30 transition-all text-center"
// //               >
// //                 <h3 className="text-3xl font-bold text-red-400 mb-4">{pkg.name}</h3>
// //                 <p className="text-gray-400 mb-6">{pkg.for}</p>
// //                 <ul className="space-y-3 text-left">
// //                   {pkg.features.map((feat, i) => (
// //                     <li key={i} className="flex items-center gap-3">
// //                       <span className="text-red-500">•</span> {feat}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Local SEO Image & Final CTA */}
// //       <section className="py-20 px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto text-center">
// //           <motion.img
// //             initial={{ opacity: 0, scale: 0.95 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             viewport={{ once: true }}
// //             src={localSEO}
// //             alt="Local SEO Google Maps optimization"
// //             className="rounded-2xl shadow-2xl border border-red-900/30 mx-auto mb-12 max-w-2xl w-full"
// //           />

// //           <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black mb-8">
// //             Let’s Talk About <span className="text-red-500">Growth</span> — Not Just Rankings
// //           </motion.h2>

// //           <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
// //             Ready to attract real customers who convert? Connect with us today.
// //           </motion.p>

// //           <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl font-bold shadow-2xl shadow-red-900/50 hover:shadow-red-700/70 transition-all">
// //             Get Your Free SEO Consultation →
// //           </motion.button>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // import React from "react";
// // import { motion } from "framer-motion";
// // import { ArrowRight, Search, BarChart3, Globe, MapPin, Link, FileText, Zap, CheckCircle } from "lucide-react";
// // import { useState, useEffect } from "react";
// // // You can replace these with your own image imports or keep the URLs
// // const images = {
// //   dashboard: "https://media.whatagraph.com/Data_bloo_s_Google_Search_Console_report_template_6972d36596.png", // SEO analytics dashboard
// //   team: "https://cdn.searchenginejournal.com/wp-content/uploads/2020/07/how-seos-the-sales-team-can-drive-business-growth-5f0c9b22e8c6d-1280x720.png", // SEO team collaborating
// //   serp: "https://www.wordstream.com/wp-content/uploads/2008/12/organic-results-on-the-serp.png", // Google SERP example
// //   localSEO: "https://zenbrief.com/wp-content/uploads/2022/07/How-To-Use-Google-Business-Profile-For-Local-SEO_-Complete-Guide-to-GBP-ex-GMB.png", // Google Business Profile / Local pins
// //   ecommerce: "https://searchengineland.com/wp-content/seloads/2025/07/why-e-commerce-matters.png.webp", // E-commerce SEO visibility
// // };

// // const seoServices = [
// //   { icon: Zap, title: "Technical SEO Audit", desc: "Detailed website audit to identify technical problems affecting rankings and performance." },
// //   { icon: FileText, title: "On-Page SEO", desc: "Optimize structure, content, meta tags, headings, and internal links for better understanding by search engines." },
// //   { icon: Link, title: "Off-Page SEO", desc: "Build authority through high-quality backlinks, brand mentions, and trusted references." },
// //   { icon: MapPin, title: "Local SEO", desc: "Rank in local search results and Google Maps to attract nearby customers." },
// //   { icon: Search, title: "Keyword Research & Strategy", desc: "Identify high-value keywords your potential customers search for and build strong strategies." },
// //   { icon: Globe, title: "E-commerce SEO", desc: "Optimize product pages, categories, and technical elements to increase visibility and sales." },
// // ];

// // const packages = [
// //   {
// //     name: "Basic Plan",
// //     desc: "Best for startups and small businesses",
// //     features: ["Initial SEO analysis", "On-page optimization", "Keyword research", "Local SEO setup", "Off-page SEO", "Monthly reporting"],
// //   },
// //   {
// //     name: "Advance Plan",
// //     desc: "Best for growing businesses",
// //     features: ["SEO audit and strategy", "On-page optimization", "Keyword targeting", "Local SEO optimization", "Content marketing", "Off-page SEO", "Monthly reporting", "Customer support"],
// //   },
// //   {
// //     name: "Pro Plan",
// //     desc: "Best for competitive industries",
// //     features: ["Complete SEO strategy", "On-page + technical SEO", "Keyword research and targeting", "Local SEO optimization", "Content marketing", "High-quality backlinks", "Premium SEO reports", "Dedicated support"],
// //   },
// // ];

// // const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
// // const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

// // export default function SEO() {

// //     const [showScrollTop, setShowScrollTop] = useState(false);

// //     useEffect(() => {
// //       const handleScroll = () => {
// //         setShowScrollTop(window.scrollY > 400);
// //       };

// //       window.addEventListener('scroll', handleScroll);
// //       return () => window.removeEventListener('scroll', handleScroll);
// //     }, []);

// //     const scrollToTop = () => {
// //       window.scrollTo({
// //         top: 0,
// //         behavior: 'smooth',
// //       });
// //     };
// //   return (
// //     <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
// //       {/* Hero Section */}
// //       <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
// //         <div className="absolute inset-0">
// //           <img src={images.serp} alt="Google SERP organic results example" className="w-full h-full object-cover opacity-25 brightness-50" />
// //           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-transparent" />
// //         </div>

// //         <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 max-w-7xl mx-auto text-center">
// //           <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
// //             Best SEO Company in India That Drives Traffic & Generates{" "}
// //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Real Leads</span>
// //           </motion.h1>

// //           <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
// //             At AI Knots, we are not just another digital marketing agency using complicated marketing words. We are a team that truly understands how search engines work and how businesses grow online.
// //           </motion.p>

// //           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
// //             <button className="px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-xl font-bold shadow-xl shadow-red-900/40 hover:shadow-red-700/60 hover:scale-105 transition-all flex items-center gap-3 group">
// //               Let's Talk Growth <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
// //             </button>
// //             <button className="px-10 py-5 border-2 border-red-600/70 text-red-400 rounded-full text-xl font-semibold hover:bg-red-950/40 transition-all">
// //               Free SEO Audit →
// //             </button>
// //           </motion.div>
// //         </motion.div>
// //       </section>

// //       {/* Results Focus */}
// //       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
// //         <div className="max-w-7xl mx-auto text-center">
// //           <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-black mb-10">
// //             Many promise “Rank #1 on Google.” But the real question is: Will those rankings bring you <span className="text-red-500">real customers</span>?
// //           </motion.h2>

// //           <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
// //             That’s where we work differently. We focus on results that actually help your business grow:
// //           </motion.p>

// //           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
// //             {["More qualified website traffic", "More inquiries and calls", "More real customers and sales"].map((point, i) => (
// //               <motion.div
// //                 key={i}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: i * 0.15 }}
// //                 className="bg-gray-900/60 border border-red-900/30 rounded-2xl p-8 hover:border-red-600/50 transition-all"
// //               >
// //                 <CheckCircle className="w-12 h-12 text-red-500 mx-auto mb-6" />
// //                 <p className="text-xl font-semibold">{point}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Services */}
// //       <section className="py-20 px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black text-center mb-16">
// //             Our SEO Services – <span className="text-red-500">Designed to Deliver Results</span>
// //           </motion.h2>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {seoServices.map((service, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 40 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.1 }}
// //                 className="bg-gray-900/60 backdrop-blur-sm border border-red-900/30 rounded-2xl p-8 hover:border-red-600/50 hover:shadow-xl hover:shadow-red-900/20 transition-all group"
// //               >
// //                 <service.icon className="w-14 h-14 text-red-500 mb-6 mx-auto group-hover:scale-110 transition-transform" />
// //                 <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
// //                 <p className="text-gray-300 text-center">{service.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Advantages + Dashboard Image */}
// //       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
// //         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
// //           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
// //             <h2 className="text-4xl md:text-5xl font-black mb-8">Advantages of SEO for Your Business</h2>
// //             <p className="text-lg text-gray-300 mb-8 leading-relaxed">
// //               Search Engine Optimization helps businesses build a strong online presence and reach customers who are actively searching for their products or services.
// //             </p>
// //             <ul className="space-y-4 text-lg">
// //               {["Higher visibility on search engines", "Increased website traffic", "Stronger brand awareness", "Higher conversion rates", "Long-term business growth"].map((adv, i) => (
// //                 <motion.li key={i} variants={fadeInUp} className="flex items-center gap-4">
// //                   <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
// //                   {adv}
// //                 </motion.li>
// //               ))}
// //             </ul>
// //           </motion.div>

// //           <motion.img
// //             initial={{ opacity: 0, x: 50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             src={images.dashboard}
// //             alt="SEO analytics dashboard showing traffic, impressions, clicks and keyword rankings growth"
// //             className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover"
// //           />
// //         </div>
// //       </section>

// //       {/* Why Choose Us + Team Image */}
// //       <section className="py-20 px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
// //           <motion.img
// //             initial={{ opacity: 0, x: -50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             src={images.team}
// //             alt="Professional SEO team discussing strategy and growth plans"
// //             className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover order-2 md:order-1"
// //           />

// //           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-1 md:order-2">
// //             <h2 className="text-4xl md:text-5xl font-black mb-8">Why Choose AI Knots for SEO?</h2>
// //             <div className="space-y-8">
// //               {[
// //                 { title: "White Hat SEO Practices", desc: "We follow ethical and search-engine-approved techniques that deliver long-term results." },
// //                 { title: "Transparent Reporting", desc: "Weekly and monthly SEO reports so you can clearly track rankings and traffic growth." },
// //                 { title: "Dedicated SEO Team", desc: "Specialists, content writers, and developers working together for your website performance." },
// //                 { title: "Proven SEO Experience", desc: "We stay updated with the latest algorithm changes to keep your business ahead." },
// //               ].map((item, i) => (
// //                 <motion.div key={i} variants={fadeInUp} className="flex items-start gap-5">
// //                   <div className="text-4xl font-black text-red-500 opacity-70">{`0${i + 1}`}</div>
// //                   <div>
// //                     <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
// //                     <p className="text-gray-300">{item.desc}</p>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Packages */}
// //       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black text-center mb-16">
// //             Our SEO <span className="text-red-500">Packages</span>
// //           </motion.h2>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             {packages.map((pkg, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 50 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.15 }}
// //                 className={`bg-gradient-to-br from-gray-900 to-black border border-red-900/40 rounded-2xl p-8 text-center hover:border-red-600 hover:shadow-2xl hover:shadow-red-900/30 transition-all ${
// //                   idx === 1 ? "scale-105 border-red-600 shadow-red-900/50" : ""
// //                 }`}
// //               >
// //                 <h3 className="text-3xl font-black text-red-400 mb-3">{pkg.name}</h3>
// //                 <p className="text-gray-400 mb-6 font-medium">{pkg.desc}</p>
// //                 <ul className="space-y-3 text-left">
// //                   {pkg.features.map((feat, i) => (
// //                     <li key={i} className="flex items-center gap-3">
// //                       <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
// //                       {feat}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Local & E-commerce Images + Final CTA */}
// //       <section className="py-20 px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
// //           <div>
// //             <motion.img
// //               initial={{ opacity: 0, scale: 0.95 }}
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               viewport={{ once: true }}
// //               src={images.localSEO}
// //               alt="Google Business Profile optimization for local SEO with map pins"
// //               className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover mb-8"
// //             />
// //             <motion.img
// //               initial={{ opacity: 0, scale: 0.95 }}
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: 0.3 }}
// //               src={images.ecommerce}
// //               alt="E-commerce SEO product visibility comparison then vs now"
// //               className="rounded-2xl shadow-2xl border border-red-900/30 w-full object-cover"
// //             />
// //           </div>

// //           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col justify-center">
// //             <h2 className="text-4xl md:text-6xl font-black mb-8">
// //               Let’s Talk About <span className="text-red-500">Growth</span> Not Just Rankings
// //             </h2>

// //             <p className="text-xl text-gray-300 mb-10 leading-relaxed">
// //               Ranking on search engines is important, but real success happens when those rankings bring customers who are genuinely interested in your services.
// //             </p>

// //             <p className="text-lg text-gray-300 mb-12">
// //               At AI Knots, we focus on attracting the right visitors who convert into leads and sales. Connect with us today and start growing your business online.
// //             </p>

// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.98 }}
// //               className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl font-bold shadow-2xl shadow-red-900/50 hover:shadow-red-700/70 transition-all w-fit"
// //             >
// //               Get Your Free Consultation →
// //             </motion.button>
// //           </motion.div>
// //         </div>
// //       </section>

// //        <button
// //         onClick={scrollToTop}
// //         className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/50 transition-all duration-300 hover:scale-110 active:scale-95 ${
// //           showScrollTop
// //             ? "opacity-100 translate-y-0"
// //             : "opacity-0 translate-y-16 pointer-events-none"
// //         }`}
// //         aria-label="Scroll back to top"
// //       >
// //         <svg
// //           className="w-6 h-6"
// //           fill="none"
// //           stroke="currentColor"
// //           viewBox="0 0 24 24"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <path
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             strokeWidth={2}
// //             d="M5 10l7-7m0 0l7 7m-7-7v18"
// //           />
// //         </svg>
// //       </button>
// //     </div>
// //   );
// // }

// // import React, { useState, useEffect } from "react";
// // import { motion } from "framer-motion";
// // import { ArrowRight, Search, BarChart3, Globe, MapPin, Link, FileText, Zap, CheckCircle } from "lucide-react";

// // const images = {
// //   dashboard: "https://media.whatagraph.com/Data_bloo_s_Google_Search_Console_report_template_6972d36596.png",
// //   team: "https://cdn.searchenginejournal.com/wp-content/uploads/2020/07/how-seos-the-sales-team-can-drive-business-growth-5f0c9b22e8c6d-1280x720.png",
// //   serp: "https://www.wordstream.com/wp-content/uploads/2008/12/organic-results-on-the-serp.png",
// //   localSEO: "https://zenbrief.com/wp-content/uploads/2022/07/How-To-Use-Google-Business-Profile-For-Local-SEO_-Complete-Guide-to-GBP-ex-GMB.png",
// //   ecommerce: "https://searchengineland.com/wp-content/seloads/2025/07/why-e-commerce-matters.png.webp",
// // };

// // const seoServices = [
// //   { icon: Zap, title: "Technical SEO Audit", desc: "Detailed website audit to identify technical problems affecting rankings and performance." },
// //   { icon: FileText, title: "On-Page SEO", desc: "Optimize structure, content, meta tags, headings, and internal links for better understanding by search engines." },
// //   { icon: Link, title: "Off-Page SEO", desc: "Build authority through high-quality backlinks, brand mentions, and trusted references." },
// //   { icon: MapPin, title: "Local SEO", desc: "Rank in local search results and Google Maps to attract nearby customers." },
// //   { icon: Search, title: "Keyword Research & Strategy", desc: "Identify high-value keywords your potential customers search for and build strong strategies." },
// //   { icon: Globe, title: "E-commerce SEO", desc: "Optimize product pages, categories, and technical elements to increase visibility and sales." },
// // ];

// // const packages = [
// //   {
// //     name: "Basic Plan",
// //     desc: "Best for startups and small businesses",
// //     features: ["Initial SEO analysis", "On-page optimization", "Keyword research", "Local SEO setup", "Off-page SEO", "Monthly reporting"],
// //   },
// //   {
// //     name: "Advance Plan",
// //     desc: "Best for growing businesses",
// //     features: ["SEO audit and strategy", "On-page optimization", "Keyword targeting", "Local SEO optimization", "Content marketing", "Off-page SEO", "Monthly reporting", "Customer support"],
// //   },
// //   {
// //     name: "Pro Plan",
// //     desc: "Best for competitive industries",
// //     features: ["Complete SEO strategy", "On-page + technical SEO", "Keyword research and targeting", "Local SEO optimization", "Content marketing", "High-quality backlinks", "Premium SEO reports", "Dedicated support"],
// //   },
// // ];

// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 40 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
// // };

// // const staggerContainer = {
// //   hidden: {},
// //   visible: { transition: { staggerChildren: 0.12 } }
// // };

// // export default function SEO() {
// //   const [isDark, setIsDark] = useState(() =>
// //     document.documentElement.classList.contains("dark")
// //   );
// //   const [showScrollTop, setShowScrollTop] = useState(false);

// //   // Dark mode observer
// //   useEffect(() => {
// //     const observer = new MutationObserver(() => {
// //       setIsDark(document.documentElement.classList.contains("dark"));
// //     });
// //     observer.observe(document.documentElement, {
// //       attributes: true,
// //       attributeFilter: ["class"],
// //     });
// //     return () => observer.disconnect();
// //   }, []);

// //   // Scroll to top logic
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setShowScrollTop(window.scrollY > 400);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   };

// //   const accentClass = "text-red-500";
// //   const headingClass = isDark ? "text-white" : "text-gray-900";
// //   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";

// //   const cardClass = isDark
// //     ? "bg-gray-900/70 backdrop-blur-sm border border-gray-800 hover:border-red-500/60 hover:shadow-red-900/30"
// //     : "bg-white border border-gray-200 hover:border-red-300 hover:shadow-2xl";

// //   return (
// //     <div className={`min-h-screen overflow-hidden transition-colors duration-700
// //       ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}>

// //       {/* ====================== HERO SECTION ====================== */}
// //       <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
// //         <div className="absolute inset-0">
// //           <img
// //             src={images.serp}
// //             alt="Google SERP organic results"
// //             className="w-full h-full object-cover opacity-30 brightness-50"
// //           />
// //           <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? "from-black via-black/90 to-transparent" : "from-black/80 via-black/70 to-transparent"}`} />
// //         </div>

// //         <motion.div
// //           initial="hidden"
// //           animate="visible"
// //           variants={staggerContainer}
// //           className="relative z-10 max-w-7xl mx-auto text-center"
// //         >
// //           <motion.h1
// //             variants={fadeInUp}
// //             className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight text-white"
// //           >
// //             Best SEO Company in India That Drives Traffic & Generates{" "}
// //             <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-white">
// //               Real Leads
// //             </span>
// //           </motion.h1>

// //           <motion.p
// //             variants={fadeInUp}
// //             className={`text-xl md:text-2xl mb-12 max-w-5xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-white/90"}`}
// //           >
// //             At AI Knots IT Solutions, we are not just another digital marketing agency.
// //             We are a team that truly understands how search engines work and how businesses grow online.
// //           </motion.p>

// //           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
// //             <button className="group px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-xl font-bold shadow-xl shadow-red-900/50 transition-all flex items-center gap-3">
// //               Let's Talk Growth
// //               <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
// //             </button>
// //             <button className={`px-10 py-5 border-2 border-red-500/70 rounded-full text-xl font-semibold transition-all
// //               ${isDark ? "text-red-400 hover:bg-red-950/50" : "text-[#EFE5C8] hover:bg-red-50"}`}>
// //               Free SEO Audit →
// //             </button>
// //           </motion.div>
// //         </motion.div>
// //       </section>

// //       {/* ====================== RESULTS FOCUS ====================== */}
// //       <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}>
// //         <div className="max-w-7xl mx-auto text-center">
// //           <motion.h2
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             variants={fadeInUp}
// //             className={`text-4xl md:text-5xl font-black mb-10 ${headingClass}`}
// //           >
// //             Many promise “Rank #1 on Google.” But the real question is: Will those rankings bring you{" "}
// //             <span className={accentClass}>real customers</span>?
// //           </motion.h2>

// //           <motion.p
// //             variants={fadeInUp}
// //             className={`text-xl mb-12 max-w-4xl mx-auto ${bodyClass}`}
// //           >
// //             That’s where we work differently. We focus on results that actually help your business grow:
// //           </motion.p>

// //           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
// //             {["More qualified website traffic", "More inquiries and calls", "More real customers and sales"].map((point, i) => (
// //               <motion.div
// //                 key={i}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: i * 0.15 }}
// //                 className={`rounded-3xl p-8 transition-all ${cardClass}`}
// //               >
// //                 <CheckCircle className={`w-12 h-12 mx-auto mb-6 ${accentClass}`} />
// //                 <p className="text-xl font-semibold">{point}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ====================== SEO SERVICES ====================== */}
// //       <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-white"}`}>
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className={`text-4xl md:text-5xl font-black text-center mb-16 ${headingClass}`}
// //           >
// //             Our SEO Services – <span className={accentClass}>Designed to Deliver Results</span>
// //           </motion.h2>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {seoServices.map((service, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 40 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.1 }}
// //                 className={`rounded-3xl p-8 transition-all group ${cardClass}`}
// //               >
// //                 <service.icon className={`w-14 h-14 mb-6 mx-auto transition-transform group-hover:scale-110 ${accentClass}`} />
// //                 <h3 className={`text-2xl font-bold mb-4 text-center ${headingClass}`}>{service.title}</h3>
// //                 <p className={`text-center ${bodyClass}`}>{service.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ====================== ADVANTAGES + DASHBOARD ====================== */}
// //       <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}>
// //         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
// //           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
// //             <h2 className={`text-4xl md:text-5xl font-black mb-8 ${headingClass}`}>
// //               Advantages of SEO for Your Business
// //             </h2>
// //             <p className={`text-lg mb-8 leading-relaxed ${bodyClass}`}>
// //               Search Engine Optimization helps businesses build a strong online presence and reach customers who are actively searching for their products or services.
// //             </p>
// //             <ul className="space-y-4 text-lg">
// //               {["Higher visibility on search engines", "Increased website traffic", "Stronger brand awareness", "Higher conversion rates", "Long-term business growth"].map((adv, i) => (
// //                 <motion.li key={i} variants={fadeInUp} className="flex items-center gap-4">
// //                   <CheckCircle className={`w-6 h-6 flex-shrink-0 ${accentClass}`} />
// //                   {adv}
// //                 </motion.li>
// //               ))}
// //             </ul>
// //           </motion.div>

// //           <motion.img
// //             initial={{ opacity: 0, x: 50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             src={images.dashboard}
// //             alt="SEO analytics dashboard"
// //             className={`rounded-3xl shadow-2xl w-full object-cover border ${isDark ? "border-red-900/30" : "border-gray-200"}`}
// //           />
// //         </div>
// //       </section>

// //       {/* ====================== WHY CHOOSE US ====================== */}
// //       <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-white"}`}>
// //         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
// //           <motion.img
// //             initial={{ opacity: 0, x: -50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             src={images.team}
// //             alt="SEO team collaborating"
// //             className={`rounded-3xl shadow-2xl w-full object-cover border ${isDark ? "border-red-900/30" : "border-gray-200"} order-2 md:order-1`}
// //           />

// //           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-1 md:order-2">
// //             <h2 className={`text-4xl md:text-5xl font-black mb-8 ${headingClass}`}>
// //               Why Choose AI Knots IT Solutions for SEO?
// //             </h2>
// //             <div className="space-y-8">
// //               {[
// //                 { title: "White Hat SEO Practices", desc: "We follow ethical and search-engine-approved techniques that deliver long-term results." },
// //                 { title: "Transparent Reporting", desc: "Weekly and monthly SEO reports so you can clearly track rankings and traffic growth." },
// //                 { title: "Dedicated SEO Team", desc: "Specialists, content writers, and developers working together for your website performance." },
// //                 { title: "Proven SEO Experience", desc: "We stay updated with the latest algorithm changes to keep your business ahead." },
// //               ].map((item, i) => (
// //                 <motion.div key={i} variants={fadeInUp} className="flex items-start gap-5">
// //                   <div className={`text-4xl font-black ${accentClass} opacity-70`}>{`0${i + 1}`}</div>
// //                   <div>
// //                     <h4 className={`text-2xl font-bold mb-2 ${headingClass}`}>{item.title}</h4>
// //                     <p className={bodyClass}>{item.desc}</p>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ====================== SEO PACKAGES ====================== */}
// //       <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}>
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className={`text-4xl md:text-5xl font-black text-center mb-16 ${headingClass}`}
// //           >
// //             Our SEO <span className={accentClass}>Packages</span>
// //           </motion.h2>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             {packages.map((pkg, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 50 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.15 }}
// //                 className={`rounded-3xl p-8 text-center transition-all ${cardClass} ${
// //                   idx === 1 ? "scale-105 border-red-500 shadow-xl" : ""
// //                 }`}
// //               >
// //                 <h3 className={`text-3xl font-black mb-3 ${accentClass}`}>{pkg.name}</h3>
// //                 <p className={`mb-6 ${bodyClass}`}>{pkg.desc}</p>
// //                 <ul className="space-y-3 text-left">
// //                   {pkg.features.map((feat, i) => (
// //                     <li key={i} className="flex items-center gap-3">
// //                       <CheckCircle className={`w-5 h-5 flex-shrink-0 ${accentClass}`} />
// //                       {feat}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ====================== FINAL CTA SECTION ====================== */}
// //       <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-gray-50"}`}>
// //         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
// //           <div>
// //             <motion.img
// //               initial={{ opacity: 0, scale: 0.95 }}
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               viewport={{ once: true }}
// //               src={images.localSEO}
// //               alt="Local SEO Google Business Profile"
// //               className={`rounded-3xl shadow-2xl w-full object-cover border mb-8 ${isDark ? "border-red-900/30" : "border-gray-200"}`}
// //             />
// //             <motion.img
// //               initial={{ opacity: 0, scale: 0.95 }}
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: 0.3 }}
// //               src={images.ecommerce}
// //               alt="E-commerce SEO"
// //               className={`rounded-3xl shadow-2xl w-full object-cover border ${isDark ? "border-red-900/30" : "border-gray-200"}`}
// //             />
// //           </div>

// //           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col justify-center">
// //             <h2 className={`text-4xl md:text-6xl font-black mb-8 ${headingClass}`}>
// //               Let’s Talk About <span className={accentClass}>Growth</span> Not Just Rankings
// //             </h2>
// //             <p className={`text-xl mb-10 leading-relaxed ${bodyClass}`}>
// //               Ranking on search engines is important, but real success happens when those rankings bring customers who are genuinely interested in your services.
// //             </p>
// //             <p className={`text-lg mb-12 ${bodyClass}`}>
// //               At AI Knots IT Solutions, we focus on attracting the right visitors who convert into leads and sales.
// //               Connect with us today and start growing your business online.
// //             </p>
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.98 }}
// //               className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-2xl font-bold shadow-2xl transition-all w-fit"
// //             >
// //               Get Your Free Consultation →
// //             </motion.button>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Scroll to Top Button */}
// //       <button
// //         onClick={scrollToTop}
// //         className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 ${
// //           showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
// //         }`}
// //         aria-label="Scroll back to top"
// //       >
// //         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
// //         </svg>
// //       </button>
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet-async";
// import { AnimatePresence } from "framer-motion";
// import {
//   ArrowRight,
//   Search,
//   BarChart3,
//   Globe,
//   MapPin,
//   Link,
//   FileText,
//   Zap,
//   CheckCircle,
// } from "lucide-react";

// const images = {
//   dashboard:
//     "https://media.whatagraph.com/Data_bloo_s_Google_Search_Console_report_template_6972d36596.png",
//   team: "https://cdn.searchenginejournal.com/wp-content/uploads/2020/07/how-seos-the-sales-team-can-drive-business-growth-5f0c9b22e8c6d-1280x720.png",
//   serp: "https://www.wordstream.com/wp-content/uploads/2008/12/organic-results-on-the-serp.png",
//   localSEO:
//     "https://zenbrief.com/wp-content/uploads/2022/07/How-To-Use-Google-Business-Profile-For-Local-SEO_-Complete-Guide-to-GBP-ex-GMB.png",
//   ecommerce:
//     "https://www.webhopers.com/wp-content/uploads/2024/06/Top-10-SEO-Strategies-for-eCommerce-Websites-4.png",
// };

// const seoServices = [
//   {
//     icon: Zap,
//     title: "Technical SEO Audit",
//     desc: "Detailed website audit to identify technical problems affecting rankings and performance.",
//   },
//   {
//     icon: FileText,
//     title: "On-Page SEO",
//     desc: "Optimize structure, content, meta tags, headings, and internal links for better understanding by search engines.",
//   },
//   {
//     icon: Link,
//     title: "Off-Page SEO",
//     desc: "Build authority through high-quality backlinks, brand mentions, and trusted references.",
//   },
//   {
//     icon: MapPin,
//     title: "Local SEO",
//     desc: "Rank in local search results and Google Maps to attract nearby customers.",
//   },
//   {
//     icon: Search,
//     title: "Keyword Research & Strategy",
//     desc: "Identify high-value keywords your potential customers search for and build strong strategies.",
//   },
//   {
//     icon: Globe,
//     title: "E-commerce SEO",
//     desc: "Optimize product pages, categories, and technical elements to increase visibility and sales.",
//   },
// ];

// const packages = [
//   {
//     name: "Basic Plan",
//     desc: "Best for startups and small businesses",
//     features: [
//       "Initial SEO analysis",
//       "On-page optimization",
//       "Keyword research",
//       "Local SEO setup",
//       "Off-page SEO",
//       "Monthly reporting",
//     ],
//   },
//   {
//     name: "Advance Plan",
//     desc: "Best for growing businesses",
//     features: [
//       "SEO audit and strategy",
//       "On-page optimization",
//       "Keyword targeting",
//       "Local SEO optimization",
//       "Content marketing",
//       "Off-page SEO",
//       "Monthly reporting",
//       "Customer support",
//     ],
//   },
//   {
//     name: "Pro Plan",
//     desc: "Best for competitive industries",
//     features: [
//       "Complete SEO strategy",
//       "On-page + technical SEO",
//       "Keyword research and targeting",
//       "Local SEO optimization",
//       "Content marketing",
//       "High-quality backlinks",
//       "Premium SEO reports",
//       "Dedicated support",
//     ],
//   },
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.12 } },
// };

// export default function SEO() {
//   const navigate = useNavigate();
//   const [openIndex, setOpenIndex] = useState(null);
//   const [isDark, setIsDark] = useState(() =>
//     document.documentElement.classList.contains("dark"),
//   );
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     const observer = new MutationObserver(() => {
//       setIsDark(document.documentElement.classList.contains("dark"));
//     });
//     observer.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ["class"],
//     });
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 400);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const accentClass = "text-red-500";
//   const headingClass = isDark ? "text-white" : "text-gray-900";
//   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";

//   const cardClass = isDark
//     ? "bg-gray-900/70 backdrop-blur-sm border border-gray-800 hover:border-red-500/60 hover:shadow-red-900/30"
//     : "bg-white border border-gray-200 hover:border-red-300 hover:shadow-2xl";

//   return (
//     <>
//       <Helmet>
//         <title> SEO Services Company in Bhopal | Atla IKS</title>
//         <meta
//           name="description"
//           content="Improve Google rankings with SEO services including local SEO, on-page SEO & technical SEO."
//         />
//         <meta
//           name="keywords"
//           content="SEO Company in Bhopal	Local SEO, Technical SEO"
//         />
//       </Helmet>
//       <div
//         className={`min-h-screen overflow-hidden transition-colors duration-700
//       ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
//       >
//         {/* ====================== HERO SECTION ====================== */}
//         <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-black">
//           <div className="absolute inset-0">
//             <img
//               src={images.serp}
//               alt="Google SERP organic results"
//               className="w-full h-full object-cover opacity-40"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
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
//               Best SEO Company in India That Drives Traffic & Generates{" "}
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-white">
//                 Real Leads
//               </span>
//             </motion.h1>

//             <motion.p
//               variants={fadeInUp}
//               className="text-xl md:text-2xl mb-12 max-w-5xl mx-auto leading-relaxed text-white/90"
//             >
//               At AI Knots IT Solutions, we are not just another digital
//               marketing agency. We are a team that truly understands how search
//               engines work and how businesses grow online.
//             </motion.p>

//             <motion.div
//               variants={fadeInUp}
//               className="flex flex-col sm:flex-row gap-6 justify-center"
//             >
//               <button
//                 onClick={() => navigate("/contact")}
//                 className="group px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-xl font-bold shadow-xl shadow-red-900/50 transition-all flex items-center gap-3 text-white"
//               >
//                 Let's Talk Growth
//                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button
//                 onClick={() => navigate("/contact")}
//                 className="px-10 py-5 border-2 border-red-400 rounded-full text-xl font-semibold transition-all text-red-400 hover:bg-red-950/50"
//               >
//                 Free SEO Audit →
//               </button>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* ====================== RESULTS FOCUS ====================== */}
//         <section
//           className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
//         >
//           <div className="max-w-7xl mx-auto text-center">
//             <motion.h2
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//               className={`text-4xl md:text-5xl font-black mb-10 ${headingClass}`}
//             >
//               Many promise "Rank #1 on Google." But the real question is: Will
//               those rankings bring you{" "}
//               <span className={accentClass}>real customers</span>?
//             </motion.h2>

//             <motion.p
//               variants={fadeInUp}
//               className={`text-xl mb-12 max-w-4xl mx-auto ${bodyClass}`}
//             >
//               That's where we work differently. We focus on results that
//               actually help your business grow:
//             </motion.p>

//             <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//               {[
//                 "More qualified website traffic",
//                 "More inquiries and calls",
//                 "More real customers and sales",
//               ].map((point, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.15 }}
//                   className={`rounded-3xl p-8 transition-all ${cardClass}`}
//                 >
//                   <CheckCircle
//                     className={`w-12 h-12 mx-auto mb-6 ${accentClass}`}
//                   />
//                   <p className="text-xl font-semibold">{point}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ====================== SEO SERVICES ====================== */}
//         <section
//           className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-white"}`}
//         >
//           <div className="max-w-7xl mx-auto">
//             <motion.h2
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`text-4xl md:text-5xl font-black text-center mb-16 ${headingClass}`}
//             >
//               Our SEO Services –{" "}
//               <span className={accentClass}>Designed to Deliver Results</span>
//             </motion.h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {seoServices.map((service, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.1 }}
//                   className={`rounded-3xl p-8 transition-all group ${cardClass}`}
//                 >
//                   <service.icon
//                     className={`w-14 h-14 mb-6 mx-auto transition-transform group-hover:scale-110 ${accentClass}`}
//                   />
//                   <h3
//                     className={`text-2xl font-bold mb-4 text-center ${headingClass}`}
//                   >
//                     {service.title}
//                   </h3>
//                   <p className={`text-center ${bodyClass}`}>{service.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ====================== ADVANTAGES + DASHBOARD ====================== */}
//         <section
//           className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}
//         >
//           <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={staggerContainer}
//             >
//               <h2
//                 className={`text-4xl md:text-5xl font-black mb-8 ${headingClass}`}
//               >
//                 Advantages of SEO for Your Business
//               </h2>
//               <p className={`text-lg mb-8 leading-relaxed ${bodyClass}`}>
//                 Search Engine Optimization helps businesses build a strong
//                 online presence and reach customers who are actively searching
//                 for their products or services.
//               </p>
//               <ul className="space-y-4 text-lg">
//                 {[
//                   "Higher visibility on search engines",
//                   "Increased website traffic",
//                   "Stronger brand awareness",
//                   "Higher conversion rates",
//                   "Long-term business growth",
//                 ].map((adv, i) => (
//                   <motion.li
//                     key={i}
//                     variants={fadeInUp}
//                     className="flex items-center gap-4"
//                   >
//                     <CheckCircle
//                       className={`w-6 h-6 flex-shrink-0 ${accentClass}`}
//                     />
//                     {adv}
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>

//             <motion.img
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               src={images.dashboard}
//               alt="SEO analytics dashboard"
//               className={`rounded-3xl shadow-2xl w-full object-cover border ${isDark ? "border-red-900/30" : "border-gray-200"}`}
//             />
//           </div>
//         </section>

//         {/* ====================== WHY CHOOSE US ====================== */}
//         <section
//           className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-white"}`}
//         >
//           <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//             <motion.img
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               src={images.team}
//               alt="SEO team collaborating"
//               className={`rounded-3xl shadow-2xl w-full object-cover border ${isDark ? "border-red-900/30" : "border-gray-200"} order-2 md:order-1`}
//             />

//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={staggerContainer}
//               className="order-1 md:order-2"
//             >
//               <h2
//                 className={`text-4xl md:text-5xl font-black mb-8 ${headingClass}`}
//               >
//                 Why Choose AI Knots IT Solutions for SEO?
//               </h2>
//               <div className="space-y-8">
//                 {[
//                   {
//                     title: "White Hat SEO Practices",
//                     desc: "We follow ethical and search-engine-approved techniques that deliver long-term results.",
//                   },
//                   {
//                     title: "Transparent Reporting",
//                     desc: "Weekly and monthly SEO reports so you can clearly track rankings and traffic growth.",
//                   },
//                   {
//                     title: "Dedicated SEO Team",
//                     desc: "Specialists, content writers, and developers working together for your website performance.",
//                   },
//                   {
//                     title: "Proven SEO Experience",
//                     desc: "We stay updated with the latest algorithm changes to keep your business ahead.",
//                   },
//                 ].map((item, i) => (
//                   <motion.div
//                     key={i}
//                     variants={fadeInUp}
//                     className="flex items-start gap-5"
//                   >
//                     <div
//                       className={`text-4xl font-black ${accentClass} opacity-70`}
//                     >{`0${i + 1}`}</div>
//                     <div>
//                       <h4 className={`text-2xl font-bold mb-2 ${headingClass}`}>
//                         {item.title}
//                       </h4>
//                       <p className={bodyClass}>{item.desc}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* ====================== SEO PACKAGES ====================== */}
//         <section
//           className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
//         >
//           <div className="max-w-7xl mx-auto">
//             <motion.h2
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`text-4xl md:text-5xl font-black text-center mb-16 ${headingClass}`}
//             >
//               Our SEO <span className={accentClass}>Packages</span>
//             </motion.h2>

//             <div className="grid md:grid-cols-3 gap-8">
//               {packages.map((pkg, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.15 }}
//                   className={`rounded-3xl p-8 text-center transition-all ${cardClass} ${
//                     idx === 1 ? "scale-105 border-red-500 shadow-xl" : ""
//                   }`}
//                 >
//                   <h3 className={`text-3xl font-black mb-3 ${accentClass}`}>
//                     {pkg.name}
//                   </h3>
//                   <p className={`mb-6 ${bodyClass}`}>{pkg.desc}</p>
//                   <ul className="space-y-3 text-left">
//                     {pkg.features.map((feat, i) => (
//                       <li key={i} className="flex items-center gap-3">
//                         <CheckCircle
//                           className={`w-5 h-5 flex-shrink-0 ${accentClass}`}
//                         />
//                         {feat}
//                       </li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ====================== FINAL CTA SECTION ====================== */}
//         <section
//           className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-gray-50"}`}
//         >
//           <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
//             <div>
//               <motion.img
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 src={images.localSEO}
//                 alt="Local SEO Google Business Profile"
//                 className={`rounded-3xl shadow-2xl w-full object-cover border mb-8 ${isDark ? "border-red-900/30" : "border-gray-200"}`}
//               />
//               <motion.img
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3 }}
//                 src={images.ecommerce}
//                 alt="E-commerce SEO"
//                 className={`rounded-3xl shadow-2xl w-full object-cover border ${isDark ? "border-red-900/30" : "border-gray-200"}`}
//               />
//             </div>

//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={staggerContainer}
//               className="flex flex-col justify-center"
//             >
//               <h2
//                 className={`text-4xl md:text-6xl font-black mb-8 ${headingClass}`}
//               >
//                 Let's Talk About <span className={accentClass}>Growth</span> Not
//                 Just Rankings
//               </h2>
//               <p className={`text-xl mb-10 leading-relaxed ${bodyClass}`}>
//                 Ranking on search engines is important, but real success happens
//                 when those rankings bring customers who are genuinely interested
//                 in your services.
//               </p>
//               <p className={`text-lg mb-12 ${bodyClass}`}>
//                 At AI Knots IT Solutions, we focus on attracting the right
//                 visitors who convert into leads and sales. Connect with us today
//                 and start growing your business online.
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={() => navigate("/contact")}
//                 className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-2xl font-bold shadow-2xl transition-all w-fit text-white"
//               >
//                 Get Your Free Consultation →
//               </motion.button>
//             </motion.div>
//           </div>
//         </section>

// <section
//   className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black/60" : "bg-white/60"}`}
// >
//   <div className="max-w-5xl mx-auto">
//     <motion.h2
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="text-4xl md:text-5xl font-black text-center mb-16"
//     >
//       Frequently Asked Questions
//     </motion.h2>

//     <div className="space-y-4 max-w-4xl mx-auto">
//       {[
//         {
//           q: "What is the cost of software development?",
//           a: "The cost depends on the complexity, features, and timeline of the project.",
//         },
//         {
//           q: "Do you offer custom software development?",
//           a: "Yes, we specialize in building custom software solutions based on business needs.",
//         },
//         {
//           q: "Can I hire a dedicated development team?",
//           a: "Yes, we offer dedicated developer hiring models for businesses.",
//         },
//         {
//           q: "Do you provide maintenance and support?",
//           a: "Yes, we provide post-development support and maintenance services.",
//         },
//         {
//           q: "Which industries do you work with?",
//           a: "We serve industries such as healthcare, education, fintech, retail, logistics, and many others.",
//         },
//         {
//           q: "Do you provide SEO services? How does it help?",
//           a: "Yes, we provide complete SEO services including On-Page, Off-Page, Technical SEO, and Local SEO. Our SEO strategies help your website rank higher on Google, increase organic traffic, and generate more leads.",
//         },
//       ].map((faq, idx) => (
//         <motion.div
//           key={idx}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: idx * 0.08 }}
//           className={`border rounded-2xl overflow-hidden ${isDark ? "bg-gray-900/80 border-red-900/40" : "bg-white border-gray-200 shadow-md"}`}
//         >
//           <button
//             onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
//             className={`w-full px-8 py-6 text-left flex justify-between items-center transition-all duration-300 hover:bg-red-500/10 ${isDark ? "hover:bg-red-900/30" : ""}`}
//           >
//             <h3 className={`text-xl md:text-2xl font-semibold pr-8 ${isDark ? "text-white" : "text-gray-900"}`}>
//               {faq.q}
//             </h3>

//             {/* Better Plus/Minus Icon */}
//             <motion.div
//               animate={{ rotate: openIndex === idx ? 45 : 0 }}
//               transition={{ duration: 0.3 }}
//               className={`text-3xl font-light flex items-center justify-center w-8 h-8 transition-colors ${isDark ? "text-red-400" : "text-[#EFE5C8]"}`}
//             >
//               {openIndex === idx ? "−" : "+"}
//             </motion.div>
//           </button>

//           <AnimatePresence>
//             {openIndex === idx && (
//               <motion.div
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: "auto", opacity: 1 }}
//                 exit={{ height: 0, opacity: 0 }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//                 className="overflow-hidden"
//               >
//                 <div className={`px-8 pb-8 pt-2 text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
//                   {faq.a}
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>
//       ))}
//     </div>
//   </div>
// </section>

//         <button
//           onClick={scrollToTop}
//           className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 ${
//             showScrollTop
//               ? "opacity-100 translate-y-0"
//               : "opacity-0 translate-y-20 pointer-events-none"
//           }`}
//           aria-label="Scroll back to top"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5 10l7-7m0 0l7 7m-7-7v18"
//             />
//           </svg>
//         </button>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import SEOImage from "../../assets/Images/SEO.jpg"; // ← Changed name
import {
  ArrowRight,
  Search,
  Globe,
  MapPin,
  Link,
  FileText,
  Zap,
  CheckCircle,
} from "lucide-react";

const images = {
  dashboard:
    "https://media.whatagraph.com/Data_bloo_s_Google_Search_Console_report_template_6972d36596.png",
  team: SEOImage, // ← Updated here
  serp: "https://www.wordstream.com/wp-content/uploads/2008/12/organic-results-on-the-serp.png",
  localSEO:
    "https://zenbrief.com/wp-content/uploads/2022/07/How-To-Use-Google-Business-Profile-For-Local-SEO_-Complete-Guide-to-GBP-ex-GMB.png",
  ecommerce:
    "https://www.webhopers.com/wp-content/uploads/2024/06/Top-10-SEO-Strategies-for-eCommerce-Websites-4.png",
};

const seoServices = [
  {
    icon: Zap,
    title: "Technical SEO Audit",
    desc: "Detailed website audit to identify technical problems affecting rankings and performance.",
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    desc: "Optimize structure, content, meta tags, headings, and internal links for better understanding by search engines.",
  },
  {
    icon: Link,
    title: "Off-Page SEO",
    desc: "Build authority through high-quality backlinks, brand mentions, and trusted references.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    desc: "Rank in local search results and Google Maps to attract nearby customers.",
  },
  {
    icon: Search,
    title: "Keyword Research & Strategy",
    desc: "Identify high-value keywords your potential customers search for and build strong strategies.",
  },
  {
    icon: Globe,
    title: "E-commerce SEO",
    desc: "Optimize product pages, categories, and technical elements to increase visibility and sales.",
  },
];

const packages = [
  {
    name: "Basic Plan",
    desc: "Best for startups and small businesses",
    features: [
      "Initial SEO analysis",
      "On-page optimization",
      "Keyword research",
      "Local SEO setup",
      "Off-page SEO",
      "Monthly reporting",
    ],
  },
  {
    name: "Advance Plan",
    desc: "Best for growing businesses",
    features: [
      "SEO audit and strategy",
      "On-page optimization",
      "Keyword targeting",
      "Local SEO optimization",
      "Content marketing",
      "Off-page SEO",
      "Monthly reporting",
      "Customer support",
    ],
  },
  {
    name: "Pro Plan",
    desc: "Best for competitive industries",
    features: [
      "Complete SEO strategy",
      "On-page + technical SEO",
      "Keyword research and targeting",
      "Local SEO optimization",
      "Content marketing",
      "High-quality backlinks",
      "Premium SEO reports",
      "Dedicated support",
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function SEO() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const accentClass = "text-[#8B6B4A]";
  const headingClass = isDark ? "text-white" : "text-gray-900";
  const bodyClass = isDark ? "text-gray-300" : "text-gray-700";

  const cardClass = isDark
    ? "bg-gray-900/70 backdrop-blur-sm border border-gray-800 hover:border-[#8B6B4A]/60 hover:shadow-[#8B6B4A]/30"
    : "bg-white border border-gray-200 hover:border-[#8B6B4A]/60 hover:shadow-2xl";

  const faqs = [
    {
      q: "How long does it take to see results from SEO?",
      a: "Usually, you start seeing initial improvements in 3-6 months. Significant results typically appear in 6-12 months depending on competition.",
    },
    {
      q: "Do you provide monthly SEO reports?",
      a: "Yes, we provide detailed monthly reports with rankings, traffic, and performance insights so you can track your ROI.",
    },
    {
      q: "What is the cost of SEO services?",
      a: "Our SEO packages start from ₹15,000/month. Pricing depends on your website size, competition, and goals.",
    },
    {
      q: "Do you work on Local SEO?",
      a: "Yes, we specialize in Local SEO including Google Business Profile optimization, local citations, and map ranking.",
    },
    {
      q: "Can you guarantee #1 ranking on Google?",
      a: "No ethical SEO company can guarantee #1 position. We guarantee transparent work and consistent growth in rankings and traffic.",
    },
    {
      q: "Do you provide SEO for e-commerce websites?",
      a: "Yes, we have extensive experience in e-commerce SEO including product page optimization, schema markup, and category optimization.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>SEO Services Company in India | AI KNOTS IT SOLUTION</title>
        <meta
          name="description"
          content="Improve Google rankings with professional SEO services including local SEO, on-page SEO, technical SEO & e-commerce SEO."
        />
        <meta
          name="keywords"
          content="SEO Company in India, Best SEO Services, Local SEO, Technical SEO, Digital Marketing Bhopal"
        />
      </Helmet>

      <div
        className={`min-h-screen overflow-hidden transition-colors duration-700
      ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
      >
        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-black">
          <div className="absolute inset-0">
            <img
              src={images.serp}
              alt="Google SERP organic results"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          </div>

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
              Best SEO Company in India That Drives Traffic & Generates{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B6B4A] via-[#8B6B4A] to-white">
                Real Leads
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-12 max-w-5xl mx-auto leading-relaxed text-white/90"
            >
              At AI KNOTS IT SOLUTION, we are not just another digital marketing
              agency. We are a team that truly understands how search engines
              work and how businesses grow online.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button
                onClick={() => navigate("/contact")}
                className="group px-10 py-5 bg-gradient-to-r from-[#8B6B4A] to-[#8B6B4A] hover:from-[#8B6B4A] hover:to-[#8B6B4A] rounded-full text-xl font-bold shadow-xl shadow-[#8B6B4A]/50 transition-all flex items-center gap-3 text-white"
              >
                Let's Talk Growth
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="px-10 py-5 border-2 border-[#8B6B4A] rounded-full text-xl font-semibold transition-all text-[#8B6B4A] hover:bg-[#8B6B4A]/10"
              >
                Free SEO Audit →
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* ====================== RESULTS FOCUS ====================== */}
        <section
          className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={`text-4xl md:text-5xl font-black mb-10 ${headingClass}`}
            >
              Many promise "Rank #1 on Google." But the real question is: Will
              those rankings bring you{" "}
              <span className={accentClass}>real customers</span>?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className={`text-xl mb-12 max-w-4xl mx-auto ${bodyClass}`}
            >
              That's where we work differently. We focus on results that
              actually help your business grow:
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                "More qualified website traffic",
                "More inquiries and calls",
                "More real customers and sales",
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`rounded-3xl p-8 transition-all ${cardClass}`}
                >
                  <CheckCircle
                    className={`w-12 h-12 mx-auto mb-6 ${accentClass}`}
                  />
                  <p className="text-xl font-semibold">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================== SEO SERVICES ====================== */}
        <section
          className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl font-black text-center mb-16 ${headingClass}`}
            >
              Our SEO Services –{" "}
              <span className={accentClass}>Designed to Deliver Results</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seoServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`rounded-3xl p-8 transition-all group ${cardClass}`}
                >
                  <service.icon
                    className={`w-14 h-14 mb-6 mx-auto transition-transform group-hover:scale-110 ${accentClass}`}
                  />
                  <h3
                    className={`text-2xl font-bold mb-4 text-center ${headingClass}`}
                  >
                    {service.title}
                  </h3>
                  <p className={`text-center ${bodyClass}`}>{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================== ADVANTAGES + DASHBOARD ====================== */}
        <section
          className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h2
                className={`text-4xl md:text-5xl font-black mb-8 ${headingClass}`}
              >
                Advantages of SEO for Your Business
              </h2>
              <p className={`text-lg mb-8 leading-relaxed ${bodyClass}`}>
                Search Engine Optimization helps businesses build a strong
                online presence and reach customers who are actively searching
                for their products or services.
              </p>
              <ul className="space-y-4 text-lg">
                {[
                  "Higher visibility on search engines",
                  "Increased website traffic",
                  "Stronger brand awareness",
                  "Higher conversion rates",
                  "Long-term business growth",
                ].map((adv, i) => (
                  <motion.li
                    key={i}
                    variants={fadeInUp}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle
                      className={`w-6 h-6 flex-shrink-0 ${accentClass}`}
                    />
                    {adv}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src={images.dashboard}
              alt="SEO analytics dashboard"
              className={`rounded-3xl shadow-2xl w-full object-cover border ${isDark ? "border-red-900/30" : "border-gray-200"}`}
            />
          </div>
        </section>

        {/* ====================== WHY CHOOSE US ====================== */}
        <section
          className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src={images.team}
              alt="SEO team collaborating"
              className={`rounded-3xl shadow-2xl w-full object-cover border ${isDark ? "border-red-900/30" : "border-gray-200"} order-2 md:order-1`}
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="order-1 md:order-2"
            >
              <h2
                className={`text-4xl md:text-5xl font-black mb-8 ${headingClass}`}
              >
                Why Choose AI KNOTS IT SOLUTION for SEO?
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "White Hat SEO Practices",
                    desc: "We follow ethical and search-engine-approved techniques that deliver long-term results.",
                  },
                  {
                    title: "Transparent Reporting",
                    desc: "Weekly and monthly SEO reports so you can clearly track rankings and traffic growth.",
                  },
                  {
                    title: "Dedicated SEO Team",
                    desc: "Specialists, content writers, and developers working together for your website performance.",
                  },
                  {
                    title: "Proven SEO Experience",
                    desc: "We stay updated with the latest algorithm changes to keep your business ahead.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-5"
                  >
                    <div
                      className={`text-4xl font-black ${accentClass} opacity-70`}
                    >{`0${i + 1}`}</div>
                    <div>
                      <h4 className={`text-2xl font-bold mb-2 ${headingClass}`}>
                        {item.title}
                      </h4>
                      <p className={bodyClass}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ====================== SEO PACKAGES ====================== */}
        <section
          className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl font-black text-center mb-16 ${headingClass}`}
            >
              Our SEO <span className={accentClass}>Packages</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className={`rounded-3xl p-8 text-center transition-all ${cardClass} ${
                    idx === 1 ? "scale-105 border-red-500 shadow-xl" : ""
                  }`}
                >
                  <h3 className={`text-3xl font-black mb-3 ${accentClass}`}>
                    {pkg.name}
                  </h3>
                  <p className={`mb-6 ${bodyClass}`}>{pkg.desc}</p>
                  <ul className="space-y-3 text-left">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle
                          className={`w-5 h-5 flex-shrink-0 ${accentClass}`}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================== FINAL CTA SECTION ====================== */}
        <section
          className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src={images.localSEO}
                alt="Local SEO Google Business Profile"
                className={`rounded-3xl shadow-2xl w-full object-cover border mb-8 ${isDark ? "border-red-900/30" : "border-gray-200"}`}
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                src={images.ecommerce}
                alt="E-commerce SEO"
                className={`rounded-3xl shadow-2xl w-full object-cover border ${isDark ? "border-red-900/30" : "border-gray-200"}`}
              />
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col justify-center"
            >
              <h2
                className={`text-4xl md:text-6xl font-black mb-8 ${headingClass}`}
              >
                Let's Talk About <span className={accentClass}>Growth</span> Not
                Just Rankings
              </h2>
              <p className={`text-xl mb-10 leading-relaxed ${bodyClass}`}>
                Ranking on search engines is important, but real success happens
                when those rankings bring customers who are genuinely interested
                in your services.
              </p>
              <p className={`text-lg mb-12 ${bodyClass}`}>
                At AI KNOTS IT SOLUTION, we focus on attracting the right
                visitors who convert into leads and sales. Connect with us today
                and start growing your business online.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/contact")}
                className="px-12 py-6 bg-[#8B6B4A]  rounded-full text-2xl font-bold shadow-2xl transition-all w-fit text-white"
              >
                Get Your Free Consultation →
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* ====================== FAQ SECTION ====================== */}
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

            <div className="space-y-4 max-w-4xl mx-auto">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className={`border rounded-2xl overflow-hidden ${isDark ? "bg-gray-900/80 border-red-900/40" : "bg-white border-gray-200 shadow-md"}`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className={`w-full px-8 py-6 text-left flex justify-between items-center transition-all duration-300 hover:bg-red-500/10 ${isDark ? "hover:bg-red-900/30" : ""}`}
                  >
                    <h3
                      className={`text-xl md:text-2xl font-semibold pr-8 ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      {faq.q}
                    </h3>

                    <motion.div
                      animate={{ rotate: openIndex === idx ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`text-3xl font-light flex items-center justify-center w-8 h-8 transition-colors ${isDark ? "text-red-400" : "text-[#EFE5C8]"}`}
                    >
                      {openIndex === idx ? "−" : "+"}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div
                          className={`px-8 pb-8 pt-2 text-lg leading-relaxed ${bodyClass}`}
                        >
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 ${
            showScrollTop
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20 pointer-events-none"
          }`}
          aria-label="Scroll back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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
