// // import React, { useEffect, useMemo, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { ArrowRight, ExternalLink } from "lucide-react";
// // import { Helmet } from "react-helmet-async";
// // import background from "../../assets/Images/backgroundimage1.jpeg";
// // import background2 from "../../assets/Images/backgroundimage2.jpeg";
// // import { Link } from "react-router-dom";
// // import background3 from "../../assets/Images/backgroundimage3.jpeg";
// // const API_BASE_URL = "https://api.aiknotsit.com"; // Change to production URL later

// // export default function RecentWork() {
// //   // const navigate = useNavigate();
// //   const [isDark, setIsDark] = useState(() =>
// //     document.documentElement.classList.contains("dark"),
// //   );
// // const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
// //   const [activeFilter, setActiveFilter] = useState("All");
// //   const [portfolioItems, setPortfolioItems] = useState([]);
// //   const [allCategories, setAllCategories] = useState(["All"]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// // const navigate = useNavigate();

// //   const HERO_SLIDES = [
// //     {
// //       image: background,
// //       title: "Global IT Services",
// //       subtitle:
// //         "End-to-end digital transformation, product engineering, and cloud delivery for growing brands",
// //       cta: "Discover ATLA",
// //     },
// //     {
// //       image: background2,
// //       title: "Marketing & Growth",
// //       subtitle:
// //         "Performance marketing, SEO, and brand campaigns designed to convert and scale",
// //       cta: "Grow with ATLA",
// //     },
// //     {
// //       image: background3,
// //       title: "Creative Product Design",
// //       subtitle:
// //         "UX-driven web and mobile experiences that engage users and accelerate adoption",
// //       cta: "See Solution",
// //     },
// //   ];
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

// //   // Fetch data from backend
// //   useEffect(() => {
// //     const fetchRecentWork = async () => {
// //       try {
// //         setLoading(true);
// //         const res = await fetch(`${API_BASE_URL}/recentwork`);

// //         if (!res.ok) throw new Error("Failed to fetch projects");

// //         const result = await res.json();

// //         const formattedData = result.data.map((item) => ({
// //           id: item._id,
// //           title: item.title,
// //           categories: item.category ? [item.category.name] : ["General"],
// //           image:
// //             item.images && item.images.length > 0
// //               ? item.images[0]
// //               : "https://via.placeholder.com/600x400", // fallback image
// //           link: item.link || "#",
// //         }));

// //         setPortfolioItems(formattedData);

// //         // Generate categories
// //         const cats = [
// //           "All",
// //           ...new Set(formattedData.flatMap((item) => item.categories)),
// //         ];
// //         setAllCategories(cats);
// //       } catch (err) {
// //         console.error(err);
// //         setError("Failed to load projects. Please try again.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchRecentWork();
// //   }, []);

// //   const filteredItems = useMemo(() => {
// //     if (activeFilter === "All") return portfolioItems;
// //     return portfolioItems.filter((item) =>
// //       item.categories.includes(activeFilter),
// //     );
// //   }, [activeFilter, portfolioItems]);

// //   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

// //   if (loading) {
// //     return (
// //       <div
// //         className={`min-h-screen flex items-center justify-center ${isDark ? "bg-black" : "bg-gray-50"}`}
// //       >
// //         <p className="text-2xl font-medium">Loading Recent Work...</p>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div
// //         className={`min-h-screen flex items-center justify-center ${isDark ? "bg-black text-red-400" : "bg-gray-50 text-[#EFE5C8]"}`}
// //       >
// //         <p>{error}</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <>
// //       <Helmet>
// //         <title>Our Recent Work | Atla Inteligent Knots</title>
// //         <meta
// //           name="description"
// //           content="Explore our recent website, software, branding & digital marketing projects for businesses.."
// //         />
// //         <meta
// //           name="keywords"
// //           content="Recent IT Projects	Portfolio, Website Projects, Software Projects, Branding Projects, Digital Marketing Projects, Web Development Portfolio, Software Development Portfolio, Branding Portfolio, Digital Marketing Portfolio"
// //         />
// //       </Helmet>
// //       <div
// //         className={`min-h-screen relative overflow-x-hidden transition-colors duration-500
// //       ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}
// //       >
// //         {/* Background Gradient */}
// //         <div
// //           className={`absolute inset-0 z-0 ${
// //             isDark
// //               ? "bg-gradient-to-b from-black via-gray-950 to-black"
// //               : "bg-gradient-to-b from-white via-gray-50 to-red-50/30"
// //           }`}
// //         />

// //         <section className="relative">
// //           <div className="relative w-full h-[70vh] min-h-[520px] overflow-hidden">
// //             {HERO_SLIDES.map((slide, index) => (
// //               <div
// //                 key={index}
// //                 className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
// //                   index === currentHeroSlide ? "opacity-100" : "opacity-0"
// //                 }`}
// //               >
// //                 <img
// //                   src={slide.image}
// //                   alt={slide.title}
// //                   className="w-full h-full object-cover brightness-[0.85]"
// //                 />
// //                 <div
// //                   className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent/30"
// //                   w-
// //                 />
// //                 <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-10 ">
// //                   <div className="text-center max-w-4/5xl ">
// //                     <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 md:mb-6 drop-shadow-2xl">
// //                       Power Your Brand Growth with
// //                       <br />
// //                       <span className="text-gray-900">
// //                         AI KNOTS {slide.title}
// //                       </span>
// //                     </h2>
// //                     <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-medium mb-8 md:mb-12 max-w-4xl mx-auto drop-shadow-lg">
// //                       {slide.subtitle}
// //                     </p>
// //                     <Link to="/service">
// //                       <button className="bg-gradient-to-r from-red-600 via-red-500 to-rose-600 text-white font-bold uppercase tracking-wider px-10 py-5 mb-3 rounded-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1.5 transition-all duration-300 text-lg md:text-xl">
// //                         {slide.cta} →
// //                       </button>
// //                     </Link>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}

// //             {/* Slider Dots - Red Theme */}
// //             <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center gap-4 z-20">
// //               {HERO_SLIDES.map((_, i) => (
// //                 <button
// //                   key={i}
// //                   onClick={() => setCurrentHeroSlide(i)}
// //                   className={`w-3.5 h-3.5 rounded-full transition-all duration-400 shadow-md ${
// //                     i === currentHeroSlide
// //                       ? "bg-red-500 scale-125 ring-2 ring-red-500/60"
// //                       : "bg-white/60 hover:bg-white/90"
// //                   }`}
// //                 />
// //               ))}
// //             </div>
// //           </div>

// //           {/* Stats Bar - Red Theme */}
// //           <div className="max-w-6xl mx-auto px-6 -mt-20 sm:-mt-24 relative z-10">
// //             <div className="bg-white/95 backdrop-blur-lg border border-red-500/30 rounded-2xl shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6 p-8 md:p-10">
// //               {[
// //                 { n: "10+", l: "Years of Experience" },
// //                 { n: "5x", l: "Average return on Investment" },
// //                 { n: "100+", l: "Businesses Transformation" },
// //                 { n: "50+", l: "Industry we serve" },
// //               ].map((s, i) => (
// //                 <div key={i} className="text-center">
// //                   <div className="text-gray-900 text-4xl md:text-5xl font-extrabold">
// //                     {s.n}
// //                   </div>
// //                   <div className="text-[#0a2342] text-sm md:text-base uppercase tracking-wider mt-2 font-semibold">
// //                     {s.l}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-16 md:pt-24 lg:pt-28 pb-20">
// //           {/* Hero Section */}
// //           <div className="text-center mb-12 md:mb-16">
// //             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-5 tracking-tight leading-tight">
// //               OUR{" "}
// //               <span
// //                 className={
// //                   isDark
// //                     ? "bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-pink-600"
// //                     : "bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-rose-600"
// //                 }
// //               >
// //                 RECENT WORK
// //               </span>
// //             </h1>
// //             <p
// //               className={`text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
// //             >
// //               Crafting high-impact digital experiences that drive growth across
// //               industries.
// //             </p>
// //           </div>

// //           {/* Filter Buttons */}
// //           <div className="flex flex-wrap justify-center gap-2.5 md:gap-4 mb-10 md:mb-14">
// //             {allCategories.map((cat) => (
// //               <button
// //                 key={cat}
// //                 onClick={() => setActiveFilter(cat)}
// //                 className={`
// //                 px-6 py-3 rounded-full text-sm md:text-base font-semibold uppercase tracking-wider
// //                 border transition-all duration-300
// //                 ${
// //                   activeFilter === cat
// //                     ? isDark
// //                       ? "bg-red-600 border-red-500 text-white shadow-lg shadow-red-900/50"
// //                       : "bg-red-600 border-red-500 text-white shadow-lg shadow-red-300/50"
// //                     : isDark
// //                       ? "bg-white/5 border-gray-700 text-gray-200 hover:bg-white/10 hover:border-gray-500"
// //                       : "bg-white border-gray-300 text-gray-700 hover:bg-red-50 hover:border-red-400"
// //                 }
// //               `}
// //               >
// //                 {cat}
// //               </button>
// //             ))}
// //           </div>

// //           {/* Portfolio Grid */}
// //           <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 pb-8">
// //             {filteredItems.length === 0 ? (
// //               <div
// //                 className={`col-span-full text-center py-20 text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}
// //               >
// //                 No projects found.
// //               </div>
// //             ) : (
// //               filteredItems.map((item) => (
// //                 <a
// //                   key={item.id}
// //                   href={item.link}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="group block break-inside-avoid cursor-pointer pb-6"
// //                 >
// //                   <div
// //                     className={`
// //                   relative overflow-hidden rounded-2xl
// //                   border transition-all duration-300 hover:-translate-y-2
// //                   ${
// //                     isDark
// //                       ? "bg-gray-900/60 backdrop-blur-sm border-gray-800/70 shadow-xl shadow-black/60 hover:shadow-2xl hover:shadow-red-900/30"
// //                       : "bg-white border-gray-200 shadow-md hover:shadow-xl hover:shadow-red-200/60"
// //                   }
// //                 `}
// //                   >
// //                     <div className="relative w-full aspect-[4/3] overflow-hidden">
// //                       <div
// //                         className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
// //                         style={{ backgroundImage: `url(${item.image})` }}
// //                       />

// //                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

// //                       <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
// //                         <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight drop-shadow-2xl">
// //                           {item.title}
// //                         </h3>
// //                         <p className="mt-3 text-sm md:text-base font-medium uppercase tracking-wider text-white/90">
// //                           {item.categories.join(" • ")}
// //                         </p>
// //                         <div className="mt-6 flex items-center gap-2 text-white/90 text-sm font-medium">
// //                           <span>View Live Project</span>
// //                           <ExternalLink size={18} />
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </a>
// //               ))
// //             )}
// //           </div>

// //           {/* CTA Section */}
// //           <div className="text-center mt-16">
// //             <h2
// //               className={`text-4xl md:text-5xl font-black mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
// //             >
// //               Ready to Start <span className="text-gray-900">Your Project</span>?
// //             </h2>
// //             <p
// //               className={`text-lg md:text-xl mb-8 max-w-xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}
// //             >
// //               Let's create something powerful together.
// //             </p>
// //             <button
// //               onClick={() => navigate("/contact")}
// //               className={`
// //               inline-flex items-center gap-3 px-10 py-5 rounded-full text-xl font-bold text-white
// //               transition-all duration-300 hover:-translate-y-1
// //               bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700
// //               shadow-xl shadow-red-900/50 hover:shadow-red-800/60
// //             `}
// //               type="button"
// //             >
// //               Let's Talk
// //               <ArrowRight size={24} />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   motion,
//   useInView,
//   useMotionValue,
//   useTransform,
//   animate,
// } from "framer-motion";
// import { ArrowRight, ExternalLink } from "lucide-react";
// import { Helmet } from "react-helmet-async";
// import background from "../../assets/Images/backgroundimage1.jpeg";
// import background2 from "../../assets/Images/backgroundimage2.jpeg";
// import background3 from "../../assets/Images/backgroundimage3.jpeg";
// import { Link } from "react-router-dom";

// const API_BASE_URL = "https://api.aiknotsit.com";

// function Counter({ value, duration = 2.5 }) {
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, Math.round);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (!isInView) return;
//     const target = Number(value) || 0;
//     const controls = animate(count, target, { duration, ease: "easeOut" });
//     return () => controls.stop();
//   }, [isInView, value, duration, count]);

//   return (
//     <div ref={ref} className="inline-block">
//       <motion.span>{rounded}</motion.span>
//     </div>
//   );
// }

// export default function RecentWork() {
//   const [isDark, setIsDark] = useState(() =>
//     document.documentElement.classList.contains("dark"),
//   );
//   const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [portfolioItems, setPortfolioItems] = useState([]);
//   const [allCategories, setAllCategories] = useState(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();

//   const HERO_SLIDES = [
//     {
//       image: background,
//       title: "Global IT Services",
//       subtitle:
//         "End-to-end digital transformation, product engineering, and cloud delivery for growing brands",
//       cta: "Discover ATLA",
//     },
//     {
//       image: background2,
//       title: "Marketing & Growth",
//       subtitle:
//         "Performance marketing, SEO, and brand campaigns designed to convert and scale",
//       cta: "Grow with ATLA",
//     },
//     {
//       image: background3,
//       title: "Creative Product Design",
//       subtitle:
//         "UX-driven web and mobile experiences that engage users and accelerate adoption",
//       cta: "See Solution",
//     },
//   ];

//   // Dark mode observer
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

//   // Auto Slide Hero
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   // Fetch Portfolio
//   useEffect(() => {
//     const fetchRecentWork = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(`${API_BASE_URL}/recentwork`);
//         if (!res.ok) throw new Error("Failed to fetch projects");

//         const result = await res.json();

//         const formattedData = result.data.map((item) => ({
//           id: item._id,
//           title: item.title,
//           categories: item.category ? [item.category.name] : ["General"],
//           image: item.images?.[0] || "https://via.placeholder.com/600x400",
//           link: item.link || "#",
//         }));

//         setPortfolioItems(formattedData);
//         const cats = [
//           "All",
//           ...new Set(formattedData.flatMap((item) => item.categories)),
//         ];
//         setAllCategories(cats);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load projects. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRecentWork();
//   }, []);

//   const filteredItems = useMemo(() => {
//     if (activeFilter === "All") return portfolioItems;
//     return portfolioItems.filter((item) =>
//       item.categories.includes(activeFilter),
//     );
//   }, [activeFilter, portfolioItems]);

//   // Stats Data
//   const stats = [
//     { target: 10, suffix: "+", label: "Years of Experience" },
//     { target: 5, suffix: "x", label: "Average return on Investment" },
//     { target: 100, suffix: "+", label: "Businesses Transformation" },
//     { target: 50, suffix: "+", label: "Industry we serve" },
//   ];

//   // Intersection Observer for Stats Animation
//   // The stats counter uses framer-motion useInView to animate when visible.

//   if (loading) {
//     return (
//       <div
//         className={`min-h-screen flex items-center justify-center ${isDark ? "bg-black" : "bg-gray-50"}`}
//       >
//         <p className="text-2xl font-medium">Loading Recent Work...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div
//         className={`min-h-screen flex items-center justify-center ${isDark ? "bg-black text-red-400" : "bg-gray-50 text-[#EFE5C8]"}`}
//       >
//         <p>{error}</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>Our Recent Work | Atla Inteligent Knots</title>
//         <meta
//           name="description"
//           content="Explore our recent website, software, branding & digital marketing projects for businesses."
//         />
//       </Helmet>

//       <div
//         className={`min-h-screen relative overflow-x-hidden transition-colors duration-500 ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}
//       >
//         <div
//           className={`absolute inset-0 z-0 ${isDark ? "bg-gradient-to-b from-black via-gray-950 to-black" : "bg-gradient-to-b from-white via-gray-50 to-red-50/30"}`}
//         />

//         <section className="relative pt-0">
//           {/* Hero Slider */}
//           <div className="relative w-full h-[70vh] min-h-[520px] overflow-hidden">
//             {HERO_SLIDES.map((slide, index) => (
//               <div
//                 key={index}
//                 className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentHeroSlide ? "opacity-100" : "opacity-0"}`}
//               >
//                 <img
//                   src={slide.image}
//                   alt={slide.title}
//                   className="w-full h-full object-cover brightness-[0.85]"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent" />

//                 <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-10">
//                   <div className="text-center max-w-4xl">
//                     <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 md:mb-6 drop-shadow-2xl">
//                       Power Your Brand Growth with
//                       <br />
//                       <span className="text-[#8B6B4A]">
//                         AI KNOTS {slide.title}
//                       </span>
//                     </h2>
//                     <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-medium mb-8 md:mb-12 max-w-4xl mx-auto drop-shadow-lg">
//                       {slide.subtitle}
//                     </p>
//                     <Link to="/service">
//                       <button className="bg-gradient-to-r from-red-600 via-red-500 to-rose-600 text-white font-bold uppercase tracking-wider px-10 py-5 mb-3 rounded-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1.5 transition-all duration-300 text-lg md:text-xl">
//                         {slide.cta} →
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center gap-4 z-20">
//               {HERO_SLIDES.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrentHeroSlide(i)}
//                   className={`w-3.5 h-3.5 rounded-full transition-all duration-400 shadow-md ${i === currentHeroSlide ? "bg-[#9F714E]" : "bg-white/60 hover:bg-white/90"}`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Stats Section */}
//           <div
//             id="stats-section"
//             className="max-w-6xl mx-auto px-6 -mt-20 sm:-mt-24 relative z-10"
//           >
//             <div className="bg-white/95 backdrop-blur-lg border border-red-500/30 rounded-2xl shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6 p-8 md:p-10">
//               {stats.map((stat, i) => (
//                 <div key={i} className="text-center">
//                   <div className="text-[#704d34ce] text-4xl md:text-5xl font-extrabold">
//                     <Counter value={stat.target} duration={2.5} />
//                     {stat.suffix}
//                   </div>
//                   <div className="text-[#0a2342] text-sm md:text-base uppercase tracking-wider mt-2 font-semibold">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Rest of the page */}
//         <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-16 md:pt-24 lg:pt-28 pb-20">
//           <div className="text-center mb-12 md:mb-16">
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-5 tracking-tight leading-tight">
//               OUR{" "}
//               <span
//                 className={
//                   isDark
//                     ? "bg-clip-text text-transparent bg-[#8B6B4A] "
//                     : "bg-clip-text text-transparent bg-[#8B6B4A]"
//                 }
//               >
//                 RECENT WORK
//               </span>
//             </h1>
//             <p
//               className={`text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
//             >
//               Crafting high-impact digital experiences that drive growth across
//               industries.
//             </p>
//           </div>

//           {/* Filter Buttons */}
//           <div className="flex flex-wrap justify-center gap-2.5 md:gap-4 mb-10 md:mb-14">
//             {allCategories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveFilter(cat)}
//                 className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold uppercase tracking-wider border transition-all duration-300 ${
//                   activeFilter === cat
//                     ? isDark
//                       ? "bg-[#D220E] border-red-500 text-white shadow-lg shadow-red-900/50"
//                       : "bg-[#3D220E] border-red-500 text-white shadow-lg shadow-red-300/50"
//                     : isDark
//                       ? "bg-white/5 border-gray-700 text-gray-200 hover:bg-white/10 hover:border-gray-500"
//                       : "bg-white border-gray-300 text-gray-700 hover:bg-red-50 hover:border-red-400"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* Portfolio Grid */}
//           <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 pb-8">
//             {filteredItems.length === 0 ? (
//               <div
//                 className={`col-span-full text-center py-20 text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}
//               >
//                 No projects found.
//               </div>
//             ) : (
//               filteredItems.map((item) => (
//                 <a
//                   key={item.id}
//                   href={item.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group block break-inside-avoid cursor-pointer pb-6"
//                 >
//                   <div
//                     className={`relative overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${isDark ? "bg-gray-900/60 border-gray-800/70" : "bg-white border-gray-200"}`}
//                   >
//                     <div className="relative w-full aspect-[4/3] overflow-hidden">
//                       <div
//                         className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
//                         style={{ backgroundImage: `url(${item.image})` }}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

//                       <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
//                         <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
//                           {item.title}
//                         </h3>
//                         <p className="mt-3 text-sm md:text-base font-medium uppercase tracking-wider text-white/90">
//                           {item.categories.join(" • ")}
//                         </p>
//                         <div className="mt-6 flex items-center gap-2 text-white/90 text-sm font-medium">
//                           View Live Project <ExternalLink size={18} />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               ))
//             )}
//           </div>

//           {/* CTA */}
//           <div className="text-center mt-16">
//             <h2
//               className={`text-4xl md:text-5xl font-black mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
//             >
//               Ready to Start <span className="text-[#8B6B4A]">Your Project ?</span>
//             </h2>
//             <p
//               className={`text-lg md:text-xl mb-8 max-w-xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}
//             >
//               Let's create something powerful together.
//             </p>
//             <button
//               onClick={() => navigate("/contact")}
//               className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-xl font-bold text-white bg-[#3D220E] transition-all duration-300 hover:-translate-y-1"
//             >
//               Let's Talk <ArrowRight size={24} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";
import background from "../../assets/Images/backgroundimage1.jpeg";
import background2 from "../../assets/Images/backgroundimage2.jpeg";
import background3 from "../../assets/Images/backgroundimage3.jpeg";
import { Link } from "react-router-dom";

const API_BASE_URL = "https://api.aiknotsit.com";

function Counter({ value, duration = 2.5 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const target = Number(value) || 0;
    const controls = animate(count, target, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [isInView, value, duration, count]);

  return (
    <div ref={ref} className="inline-block">
      <motion.span>{rounded}</motion.span>
    </div>
  );
}

export default function RecentWork() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [allCategories, setAllCategories] = useState(["All"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const HERO_SLIDES = [
    {
      image: background,
      title: "Global IT Services",
      subtitle:
        "End-to-end digital transformation, product engineering, and cloud delivery for growing brands",
      cta: "Discover ATLA",
    },
    {
      image: background2,
      title: "Marketing & Growth",
      subtitle:
        "Performance marketing, SEO, and brand campaigns designed to convert and scale",
      cta: "Grow with ATLA",
    },
    {
      image: background3,
      title: "Creative Product Design",
      subtitle:
        "UX-driven web and mobile experiences that engage users and accelerate adoption",
      cta: "See Solution",
    },
  ];

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

  // Auto Slide Hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [HERO_SLIDES.length]);

  // Fetch Portfolio
  useEffect(() => {
    const fetchRecentWork = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`${API_BASE_URL}/recentwork`);

        if (!res.ok) throw new Error("Failed to fetch projects");

        const result = await res.json();

        const formattedData =
          result.data?.map((item) => ({
            id: item._id,
            title: item.title,
            categories: item.category ? [item.category.name] : ["General"],
            image: item.images?.[0] || "https://via.placeholder.com/600x400",
            link: item.link || "#",
          })) || [];

        setPortfolioItems(formattedData);
        const cats = [
          "All",
          ...new Set(formattedData.flatMap((item) => item.categories)),
        ];
        setAllCategories(cats);
      } catch (err) {
        console.error(err);
        setError("Failed to load projects. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecentWork();
  }, []);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return portfolioItems;
    return portfolioItems.filter((item) =>
      item.categories.includes(activeFilter),
    );
  }, [activeFilter, portfolioItems]);

  const stats = [
    { target: 10, suffix: "+", label: "Years of Experience" },
    { target: 5, suffix: "x", label: "Average ROI" },
    { target: 100, suffix: "+", label: "Businesses Transformed" },
    { target: 50, suffix: "+", label: "Industries Served" },
  ];

  if (loading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${isDark ? "bg-black" : "bg-gray-50"}`}
      >
        <p className="text-2xl font-medium">Loading Recent Work...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${isDark ? "bg-black text-red-400" : "bg-gray-50 text-red-600"}`}
      >
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Our Recent Work | Atla Intelligent Knots</title>
        <meta
          name="description"
          content="Explore our recent website, software, branding & digital marketing projects for businesses."
        />
      </Helmet>

      <div
        className={`min-h-screen relative overflow-x-hidden transition-colors duration-500 ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}
      >
        <div
          className={`absolute inset-0 z-0 ${isDark ? "bg-gradient-to-b from-black via-gray-950 to-black" : "bg-gradient-to-b from-white via-gray-50 to-red-50/30"}`}
        />

        <section className="relative pt-0">
          {/* Hero Slider */}
          <div className="relative w-full h-[70vh] min-h-[520px] overflow-hidden">
            {HERO_SLIDES.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentHeroSlide ? "opacity-100" : "opacity-0"}`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-10">
                  <div className="text-center max-w-4xl">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 md:mb-6 drop-shadow-2xl">
                      Power Your Brand Growth with
                      <br />
                      <span className="text-[#e7e4e1]">
                        AI KNOTS {slide.title}
                      </span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-medium mb-8 md:mb-12 max-w-4xl mx-auto drop-shadow-lg">
                      {slide.subtitle}
                    </p>
                    <Link to="/service">
                      <button className="bg-gradient-to-r from-red-600 via-red-500 to-rose-600 text-white font-bold uppercase tracking-wider px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1.5 transition-all duration-300 text-lg md:text-xl">
                        {slide.cta} →
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Slide Indicators */}
            <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center gap-4 z-20">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentHeroSlide(i)}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-400 shadow-md ${i === currentHeroSlide ? "bg-[#8B6B4A] scale-125" : "bg-white/60 hover:bg-white/90"}`}
                />
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div
            id="stats-section"
            className="max-w-6xl mx-auto px-6 -mt-20 sm:-mt-24 relative z-10"
          >
            <div className="bg-white/95 backdrop-blur-lg border border-red-500/30 rounded-2xl shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6 p-8 md:p-10">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-[#704D34] text-4xl md:text-5xl font-extrabold">
                    <Counter value={stat.target} duration={2.5} />
                    {stat.suffix}
                  </div>
                  <div className="text-[#0a2342] text-sm md:text-base uppercase tracking-wider mt-2 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-16 md:pt-24 lg:pt-28 pb-20">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-5 tracking-tight leading-tight">
              OUR <span className="text-[#8B6B4A]">RECENT WORK</span>
            </h1>
            <p
              className={`text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              Crafting high-impact digital experiences that drive growth across
              industries.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2.5 md:gap-4 mb-10 md:mb-14">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold uppercase tracking-wider border transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-[#3D220E] border-red-500 text-white shadow-lg shadow-red-900/50"
                    : isDark
                      ? "bg-white/5 border-gray-700 text-gray-200 hover:bg-white/10 hover:border-gray-500"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-red-50 hover:border-red-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 pb-8">
            {filteredItems.length === 0 ? (
              <div
                className={`col-span-full text-center py-20 text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                No projects found.
              </div>
            ) : (
              filteredItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block break-inside-avoid cursor-pointer pb-6"
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${isDark ? "bg-gray-900/60 border-gray-800/70" : "bg-white border-gray-200"}`}
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm md:text-base font-medium uppercase tracking-wider text-white/90">
                          {item.categories.join(" • ")}
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-white/90 text-sm font-medium">
                          View Live Project <ExternalLink size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))
            )}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h2
              className={`text-4xl md:text-5xl font-black mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Ready to Start{" "}
              <span className="text-[#8B6B4A]">Your Project?</span>
            </h2>
            <p
              className={`text-lg md:text-xl mb-8 max-w-xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              Let's create something powerful together.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-xl font-bold text-white bg-[#3D220E] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8B6B4A]"
            >
              Let's Talk <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
