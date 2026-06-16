// import React, { useState, useEffect, useRef } from "react";
// import { motion, useAnimation, useInView } from "framer-motion";
// import FlowManagementSystem from "../assets/Images/Icon/flow management system.png";
// import AmazonModel from "../assets/Images/Icon/Amazon-Model.jpg";
// import DelegationTaskAssignment from "../assets/Images/Icon/Delegation Task Assignment.png";
// import RepetitiveTaskAssignment from "../assets/Images/Icon/Repeatative-Task-Assignment.png";
// import HelpTicketSystem from "../assets/Images/Icon/Help-Ticket-System-1.png";
// import AuditorModule from "../assets/Images/Icon/amazonmodel.png";
// import Helpticket from "../assets/Images/Icon/Help ticket system.png";
// import paymentcollectionengine from "../assets/Images/Icon/paymentcollectionengine.png";
// import AutomatedScoring from "../assets/Images/Icon/AutomatedScoring.png";
// import KRAKPI from "../assets/Images/Icon/KRAKPI.png";
// import intranet from "../assets/Images/Icon/intranet.png";
// import RunoAPIIntegrated from "../assets/Images/Icon/RunoAPIIntegrated.png";
// import AIPoweredDelegation from "../assets/Images/Icon/AIPoweredDelegation.png";
// import ProjectManagementSystem from "../assets/Images/Icon/ProjectManagementSystem.png";
// import QuickLaunch from "../assets/Images/Icon/QuickLaunch.png";
// import LeaveRegister from "../assets/Images/Icon/LeaveRegister.png";
// import HiringFMS from "../assets/Images/Icon/image1.png";
// import AutoTaskReminders from "../assets/Images/Icon/AutoTaskReminders2.png";
// import dashboard from "../assets/Images/Icon/dashboard5.png";
// import {
//   Check,
//   ArrowRight,
//   Play,
//   Users,
//   Award,
//   ChevronDown,
//   Star,
//   Zap,
//   TrendingUp,
//   Clock,
//   Settings,
//   BarChart3,
//   Shield,
//   Sparkles,
//   Layers,
//   Megaphone,
//   MessageCircle,
//   AlertCircle,
//   Menu,
//   X,
//   CheckCircle,
//   CheckCircle2Icon,
// } from "lucide-react";
// import ATLAknotsDark from "./Mobile/img/logoimage3.png";
// import ATLAknotsDark2 from "../assets/Images/Robot2.gif";

// // Counter Component for animated numbers
// const Counter = ({ value, duration = 2 }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   // Extract numeric value
//   const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
//   // Extract suffix (K, +, etc)
//   const suffix = value.replace(/[0-9,]/g, "");

//   useEffect(() => {
//     if (!isInView) return;

//     let start = 0;
//     const increment = numericValue / (duration * 60); // 60 frames per second approximation
//     const interval = setInterval(
//       () => {
//         start += increment;
//         if (start >= numericValue) {
//           setCount(numericValue);
//           clearInterval(interval);
//         } else {
//           setCount(Math.floor(start));
//         }
//       },
//       (duration * 1000) / (numericValue / increment),
//     );

//     return () => clearInterval(interval);
//   }, [isInView, numericValue, duration]);

//   return (
//     <div ref={ref}>
//       {count.toLocaleString()}
//       {suffix}
//     </div>
//   );
// };

// const Home = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeFeatureTab, setActiveFeatureTab] = useState("operations");
//   const [activeIndustryTab, setActiveIndustryTab] = useState("All");

//   // Client logos from the reference website
//   const clientLogos = [
//     "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/1.png",
//     "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/2.png",
//     "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/3.png",
//     "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/4.png",
//     "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/5.png",
//     "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/6.png",
//     "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/7.png",
//     "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/8.png",
//     "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/9.png",
//     "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/10.png",
//     "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2025/03/16.png",
//     "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2025/03/17.png",
//   ];

//   // All industries from reference
//   const industries = [
//     "Agriculture",
//     "Construction",
//     "Design & Marketing",
//     "Arts & Crafts",
//     "Automotive",
//     "Gems & Jewellery",
//     "Jute Industry",
//     "Logistic",
//     "Manufacturing",
//     "Marbles & Tiles",
//     "Packaging",
//     "Training Institute",
//     "Solar",
//     "Textile",
//     "Trader",
//     "Electronics",
//     "Finance & Insurance",
//     "Food & Beverages",
//     "Healthcare",
//     "Pharma",
//     "Real Estate",
//   ];

//   // Benefits data
//   const benefits = [
//     {
//       title: "Increased Efficiency",
//       description:
//         "AI KNOTS automates repetitive tasks, freeing up your team to focus on high-value work.",
//       icon: <Zap className="w-6 h-6" />,
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       title: "Time & Cost Savings",
//       description:
//         "By streamlining processes and reducing manual errors, AI KNOTS saves you time and money.",
//       icon: <Clock className="w-6 h-6" />,
//       color: "from-emerald-500 to-teal-500",
//     },
//     {
//       title: "Improve Scalability",
//       description:
//         "By automating repetitive tasks and optimizing workflows, AI KNOTS empowers your business to scale without compromising quality or customer satisfaction.",
//       icon: <TrendingUp className="w-6 h-6" />,
//       color: "from-purple-500 to-indigo-500",
//     },
//     {
//       title: "Error Reduction",
//       description:
//         "AI KNOTS's automation minimizes human error, ensuring accuracy and reliability in your operations.",
//       icon: <Shield className="w-6 h-6" />,
//       color: "from-red-500 to-rose-500",
//     },
//     {
//       title: "Enhance Productivity",
//       description:
//         " optimizes workflows, increasing productivity and improving overall performance.",
//       icon: <BarChart3 className="w-6 h-6" />,
//       color: "from-orange-500 to-amber-500",
//     },
//     {
//       title: "Streamline Process",
//       description:
//         "Simplify your complex business processes and make them more efficient with AI KNOTS automation system.",
//       icon: <Settings className="w-6 h-6" />,
//       color: "from-cyan-500 to-blue-500",
//     },
//     {
//       title: "Full Audibility and Tracking",
//       description:
//         "Track progress and identify areas for improvement with AI KNOTS's complete visibility into your operations.",
//       icon: <Layers className="w-6 h-6" />,
//       color: "from-indigo-500 to-purple-500",
//     },
//     {
//       title: "Improve Customer Experience",
//       description:
//         "Deliver better products and services to your customers by streamlining processes and reducing errors with AI KNOTS.",
//       icon: <Users className="w-6 h-6" />,
//       color: "from-pink-500 to-rose-500",
//     },
//     {
//       title: "Insights and Data Accuracy",
//       description:
//         "Make informed decisions and optimize your business with AI KNOTS's accurate and actionable data.",
//       icon: <BarChart3 className="w-6 h-6" />,
//       color: "from-green-500 to-emerald-500",
//     },
//   ];

//   // Features from the reference
//   const allFeatures = [
//     {
//       title: "Flow Management System",
//       desc: "Create and deploy a new task flow system in just 5 minutes, along with the doer dashboard and WhatsApp.",
//       category: "operations",
//       icon: FlowManagementSystem,
//     },
//     {
//       title: "Development",
//       desc: "Get custom software development services tailored to your unique business needs, ensuring a perfect fit for your operations.",
//       category: "operations",
//       icon: AmazonModel,
//     },
//     {
//       title: "Testing",
//       desc: "Ensure your software is reliable and bug-free with our comprehensive testing services, including functional, performance, security, and user acceptance testing.",
//       category: "operations",
//       icon: DelegationTaskAssignment,
//     },
//     {
//       title: "L2 Support",
//       desc: "Our dedicated L2 support team provides expert assistance to resolve complex technical issues, ensuring your software runs smoothly and efficiently.",
//       category: "operations",
//       icon: RepetitiveTaskAssignment,
//     },
//     {
//       title: "Product Assistance",
//       desc: "Our product assistance services offer expert guidance and support to help you maximize the value of your software, ensuring you get the most out of your investment.",
//       category: "operations",
//       icon: HelpTicketSystem,
//     },
//     {
//       title: "Search Engine Optimization (SEO)",
//       desc: "Boost your online visibility and drive organic traffic to your website with our expert SEO services, tailored to your business goals and target audience.",
//       category: "operations",
//       icon: AuditorModule,
//     },
//     {
//       title: "Social Media Marketing",
//       desc: "Engage your audience and grow your brand presence on social media platforms with our strategic social media marketing services, designed to create meaningful connections and drive results.",
//       category: "operations",
//       icon: intranet,
//     },
//     {
//       title: "Google & Meta Ads Management",
//       desc: "Maximize your advertising ROI with our expert Google and Meta Ads management services, designed to create targeted campaigns that drive traffic, generate leads, and boost sales.",
//       category: "operations",
//       icon: "🏬",
//     },
//     {
//       title: "Voice, Chat &amp; Email Bot",
//       desc: "Enhance customer engagement and support with our AI-powered voice, chat, and email bot services, designed to provide instant assistance and personalized interactions around the clock.",
//       category: "operations",
//       icon: paymentcollectionengine,
//     },
//     {
//       title: "Cataloguing & Enrichment",
//       desc: "Our cataloguing and enrichment services help you organize and enhance your product data, ensuring accurate and comprehensive information that drives better customer experiences and increased sales.",
//       category: "operations",
//       icon: AutomatedScoring,
//     },
//     {
//       title: "Quality Assurance",
//       desc: "Ensure your software is reliable and bug-free with our comprehensive testing services, including functional, performance, security, and user acceptance testing.",
//       category: "operations",
//       icon: AutoTaskReminders,
//     },
//     {
//       title: "HRMS & Payroll",
//       desc: "Streamline your human resources and payroll processes with our comprehensive HRMS and payroll services, designed to simplify employee management and ensure accurate compensation.",
//       category: "Software",
//       icon: "👥",
//     },
//     {
//       title: "CRM Integration",
//       desc: "Integrate your customer relationship management (CRM) system with our expert CRM integration services, designed to streamline your sales and marketing processes and enhance customer engagement.",
//       category: "Software",
//       icon: AutoTaskReminders,
//     },
//     {
//       title: "Billing & Payment Reminders",
//       desc: "AI KNOTS's billing and payment reminder feature allows you to send automated WhatsApp messages to your customers, reminding them of upcoming bills and payment due dates.",
//       category: "Software",
//       icon: FlowManagementSystem,
//     },
//     {
//       title: "AI ChatBot",
//       desc: "AI KNOTS's AI ChatBot feature allows you to interact with your customers in a more personalized and efficient manner, providing instant assistance and support.",
//       category: "Software",
//       icon: "🤖",
//     }
//   ];

//   // Most Loved Features
//   const lovedFeatures = [
//     {
//       title: "Next Level Delegation",
//       desc: "AI KNOTS's Next Level Delegation System makes task assignment easy and effective with priority levels, deadlines, voice notes, and attachments.",
//       icon: "🎯",
//     },
//     {
//       title: "Compliance Checklist",
//       desc: "It ensures all your processes meet required standards. Create detailed checklists to track mandatory tasks, deadlines, and responsibilities.",
//       icon: "✅",
//     },
//     {
//       title: "Flow Management System",
//       desc: "AI KNOTS's Flow Management System enables seamless coordination of a single process across multiple departments and roles.",
//       icon: "🌊",
//     },
//     {
//       title: "Amazon Model",
//       desc: "AI KNOTS's Amazon Model allows you to send step-by-step updates to your customers on WhatsApp, just like in e-commerce systems.",
//       icon: "📦",
//     },
//     {
//       title: "Advanced & Robust Split FMS",
//       desc: "The Split FMS in AI KNOTS allows seamless task handovers between workflows.",
//       icon: "⚡",
//     },
//     {
//       title: "Attendance Management System",
//       desc: "With our Attendance Management System, keeping track of employee attendance is simplified with real-time tracking.",
//       icon: "📅",
//     },
//   ];

//   // Process Steps
//   const processSteps = [
//     {
//       step: "01",
//       title: "Process Mapping & Design",
//       desc: "Our experts work closely with you to map out your existing workflows and design automation solutions that align with your specific needs and goals.",
//     },
//     {
//       step: "02",
//       title: "Software Implementation",
//       desc: "Our team seamlessly integrates AI KNOTS into your existing systems, ensuring a smooth transition and minimal disruption to your daily operations.",
//     },
//     {
//       step: "03",
//       title: "Training & Support",
//       desc: "We provide comprehensive training to your staff, empowering them to effectively utilize AI KNOTS and maximize its benefits.",
//     },
//     {
//       step: "04",
//       title: "Monitoring & Optimization",
//       desc: "We continuously monitor AI KNOTS's performance and gather feedback to identify opportunities for further optimization.",
//     },
//     {
//       step: "05",
//       title: "Customization",
//       desc: "If your process is not fulfilled by any of our existing features, we will define the implementation flow and deliver the requirement.",
//     },
//   ];

//   // Testimonials from reference
//   const testimonials = [
//     {
//       rating: 5,
//       content:
//         "A reliable digital marketing partner. AI Knots understands business needs and works with clear communication and timely delivery. The team is highly skilled and always ready to provide innovative solutions.",
//       author: "Swadesh Jyoti Lalwani",
//     },
//     {
//       rating: 5,
//       content:
//        "Working with AI Knots has been a great decision. Their team understands our brand and consistently helps us reach more customers. The results have been impressive, and we look forward to continuing our partnership.",
//       author: "Pathik Shah",
//     },
//     {
//       rating: 5,
//       content:
//        "AI Knots has helped us improve our digital visibility and attract more clients. Practical and result-focused. The team is always available to answer our questions and provide support. We highly recommend their services.",
//       author: "Bharat e-Filing",
//     },
//   ];

//   const categories = [
//     {
//       title: "Agriculture & Allied",
//       icon: "🌾",
//       industries: [
//         "Agriculture",
//         "Construction",
//         "Design & Marketing",
//         "Arts & Crafts",
//         "Automotive",
//         "Automobile",
//         "Gems & Jewellery",
//         "Jute Industry",
//       ],
//     },
//     {
//       title: "Logistics & Manufacturing",
//       icon: "🏭",
//       industries: [
//         "Logistics",
//         "Manufacturing",
//         "Marbles & Tiles",
//         "Packaging",
//         "Training Institute",
//         "Solar",
//         "Textile",
//       ],
//     },
//     {
//       title: "Trade & Financial Services",
//       icon: "📊",
//       industries: [
//         "Trader",
//         "Electronics",
//         "Finance & Insurance",
//         "Food & Beverages",
//         "Healthcare",
//         "Pharmacy",
//         "Pharma",
//         "Real Estate",
//       ],
//     },
//   ];

//   // FAQ Data
//   const faqs = [
//     {
//       q: "AI KNOTS is software to streamline and automate your marketing and business operations.",
//       a: "AI KNOTS helps businesses automate repetitive tasks, streamline workflows, and improve overall operational efficiency through intelligent automation.",
//     },
//     {
//       q: "Currently, AI KNOTS supports WhatsApp and Emails, which allows businesses to communicate with their customers and programmatically track their operational activity.",
//       a: "The platform integrates seamlessly with WhatsApp and Email services to provide automated communication and tracking capabilities.",
//     },
//     {
//       q: "AI KNOTS can be used by small to medium-sized businesses across various industries that are looking to improve their Operations, customer engagement and communication through messaging platforms.",
//       a: "From manufacturing to retail, healthcare to finance, AI KNOTS serves a wide range of industries looking to optimize their operations.",
//     },
//     {
//       q: "Yes, AI KNOTS can integrate with other systems such as CRM tools, e-commerce platforms, and more to streamline communication and improve customer engagement.",
//       a: "AI KNOTS offers API integrations with popular CRMs, e-commerce platforms, and other business tools for seamless data flow.",
//     },
//     {
//       q: "AI KNOTS offers proper customer support to assist our clients with the proper training and any questions or issues they may encounter while using or implementing our platform.",
//       a: "Our dedicated support team provides training, onboarding assistance, and ongoing technical support.",
//     },
//   ];

//   const getFilteredFeatures = () => {
//     return allFeatures.filter((f) => f.category === activeFeatureTab);
//   };

//   // Animation variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 60 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
//   };

//   return (
//     <div className="min-h-screen bg-white font-sans overflow-x-hidden  ">
//       {/* HERO SECTION */}

//       <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16 bg-gradient-to-br from-[#e2d7a4] via-[#f9efe1] to-[#b8a790]from-[#D6E7F7]  to-[#a39d6f] overflow-hidden">
//         {/* Background decorative elements */}
//         <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>

//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-8"
//           >
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#3d220e]"> 
//               Transform Your Ideas Into
//               <br />
//               <span className="text-[#8B6B4A]">Intelligent Solutions!</span>
//             </h1>

//             <ul className="space-y-4 text-xl md:text-2xl text-[#3d220e]">
//               {[
//                 "Automate Repetitive Tasks",
//                 "Streamline Workflows",
//                 "Manage Inventory Hassle-Free",
//               ].map((item, i) => (
//                 <motion.li
//                   key={i}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.1 }}
//                   className="flex items-center gap-4"
//                 >
//                   <div className="w-8 h-8 rounded-full text-white bg-[#3d220e] flex items-center justify-center flex-shrink-0">
//                     <Check className="w-5 h-5 text-[#d8d7db]" />
//                   </div>
//                   <span>{item}</span>
//                 </motion.li>
//               ))}
//             </ul>

//             <div className="flex flex-wrap gap-4">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-[#3d220e] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#8B6B4A] transition flex items-center gap-2 shadow-lg"
//               >
//                 Schedule a demo
//                 <ArrowRight className="w-5 h-5" />
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="border-2 border-[#3d220e] bg-transparent text-[#3d220e] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#3d220e] hover:text-white transition"
//               >
//                 Start a free trial
//               </motion.button>
//             </div>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="flex items-center gap-3 text-lg font-medium text-[#3d220e]"
//             >
//               <span className="text-green-400 text-2xl">✔</span> Get 15 Days
//               FREE Trial Now
//             </motion.p>
//           </motion.div>

//           {/* Right Side - Dashboard */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="relative flex justify-center"
//           >
//             <div className="relative">
//               <img
//                 src={dashboard}
//                 alt="AI KNOTS Dashboard"
//                 className="rounded-2xl  w-full max-w-[720px]"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-20   from-[#efeee9] via-[#f9efe1] to-[#b8a790] overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-12 items-start">
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-4xl md:text-5xl font-bold text-[#462206] leading-tight mb-10">
//                 About Us
//                 <br />
//               </h2>
//               <ul className="space-y-6">
//                 {[
//                   "Empowering businesses with innovative, scalable, and result-driven technology solutions.",
//                   "Specializing in Website Development, Digital Marketing, HRMS, CRM, and Business Automation.",
//                   "Helping organizations improve operational efficiency and strengthen their digital presence.",
//                   "Delivering strategic and technology-driven solutions that create measurable business impact.",
//                   "Building long-term partnerships through exceptional service, quality, and innovation.",
//                   "Enabling businesses to achieve sustainable growth and stay ahead in a rapidly evolving marketplace.",
//                 ].map((item, i) => (
//                   <motion.li
//                     key={i}
//                     initial={{ opacity: 0, x: 20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: i * 0.1 }}
//                     className="flex gap-4 items-start group"
//                   >
//                     <span className="text-2xl text-[#93460c] group-hover:scale-110 transition-transform">
//                       ✓
//                     </span>
//                     <p className="text-[#72441e] leading-relaxed font-medium">
//                       {item}
//                     </p>
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>
//             {/* Left: Pie Chart */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <div className="rounded-3xl overflow-hidden">
//                 <img
//                   src={ATLAknotsDark2}
//                   alt="AI KNOTS Story"
//                   className="w-full"
//                 />
//               </div>
//             </motion.div>

//             {/* Right: Challenges */}
//           </div>

//           {/* AI KNOTS Solution */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mt-20 pt-12 border-t border-gray-200"
//           >
//             <div className="grid md:grid-cols-2 gap-12">
//               <div>
//                 <h2 className="text-4xl font-bold text-[#462206]  leading-tight mb-6">
//                   Automate Your Complex
//                   <br />
//                   Business Process AI KNOTS
//                 </h2>
//                 <p className="text-[#72441e] leading-relaxed text-lg">
//                   More work. Less stress! AI KNOTS is the ultimate solution to
//                   streamline and automate your marketing and business
//                   operations. From automating workflows to generating insightful
//                   reports, AI KNOTS acts as your partner in efficiency and
//                   success.
//                 </p>
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#462206] ">
//                 {[
//                   { number: "220+", label: "Live Setup" },
//                   { number: "12,230+", label: "Users" },
//                   { number: "2,715+", label: "Live FMS" },
//                   {
//                     number: "26,000+",
//                     label: "Delegation Processed (Avg Monthly)",
//                   },
//                   {
//                     number: "316K+",
//                     label: "Checklist Processed (Avg Monthly)",
//                   },
//                 ].map((stat, i) => (
//                   <motion.div
//                     key={i}
//                     whileHover={{ y: -5 }}
//                     className="bg-[#f8e1cf] hover:bg-[#FFF6EF] transition-colors rounded-2xl p-6 cursor-pointer"
//                   >
//                     <div className="text-4xl font-bold text-[#462206] mb-1">
//                       <Counter value={stat.number} duration={2} />
//                     </div>
//                     <div className="text-[#7a5e46] font-medium">
//                       {stat.label}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* FEATURES TABS SECTION */}
//       <section className="py-12 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-6">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
//           >
//             Our{" "}
//             <span className="bg-gradient-to-r bg-gradient-to-br from-[#60533e] via-[#826c50] to-[#928a7f] bg-clip-text text-transparent">
//               Features
//             </span>
//           </motion.h2>
//           <p className="text-center text-[#72441e] mb-8 max-w-xl mx-auto text-sm md:text-base">
//             Discover the powerful tools that make AI KNOTS the ultimate business
//             automation solution
//           </p>

//           <div className="flex justify-center mb-8">
//             <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-gray-200">
//               {["operations", "Software"].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveFeatureTab(tab)}
//                   className={`px-6 py-2 rounded-full font-semibold transition-all text-sm ${
//                     activeFeatureTab === tab
//                       ? "bg-gradient-to-r  bg-gradient-to-br from-[#60533e] via-[#826c50] to-[#928a7f] text-white shadow"
//                       : "text-gray-600 hover:text-gray-800"
//                   }`}
//                 >
//                   {tab === "operations" ? "Operations" : "Software"}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <motion.div
//             key={activeFeatureTab}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
//           >
//             {getFilteredFeatures().map((feature, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -5 }}
//                 className="bg-[#f4ecec] hover:bg-[#FFF6EF] hover:border-indigo-200 hover:shadow-xl transition-all duration-300 rounded-3xl p-4 group cursor-pointer h-full"
//               >
//                 <div className="flex items-center gap-4 mb-4 ">
//                   <div className="flex-none h-24 w-24  bg-transparent  flex items-center justify-center text-5xl text-indigo-700 overflow-hidden">
//                     {typeof feature.icon === "string" &&
//                     /\.(png|jpe?g|gif|svg)$/i.test(feature.icon) ? (
//                       <img
//                         src={feature.icon}
//                         alt={feature.title}
//                         className="h-16 w-16 object-contain"
//                       />
//                     ) : (
//                       <div className="text-6xl">{feature.icon}</div>
//                     )}
//                   </div>
//                   <div className="min-w-0">
//                     <h3 className="text-lg font-bold text-[#573010] mb-1 group-hover:text-indigo-700 transition-colors">
//                       {feature.title}
//                     </h3>
//                     <p className="text-[#9d6231] leading-snug text-sm">
//                       {feature.desc}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//       <hr className="border-gray-200 my-12" />

//       {/* MOST LOVED FEATURES */}
//       <section className="py-20 bg-gradient-to-br bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold text-center mb-6 text-black"
//           >
//             Most <span className="text-[#9d6231]">Loved</span> Features
//           </motion.h2>
//           <p className="text-center  md:text-2xl font-bold bg-gradient-to-r text-[#573010] ">
//             Our clients' favorite features that have transformed their business
//             operations
//           </p>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {lovedFeatures.map((feature, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 whileHover={{ scale: 1.02 }}
//                 className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
//               >
//                 <h3 className="text-2xl font-semibold text-[#573010]  mb-3 flex items-center gap-2">
//                   <CheckCircle2Icon className="w-5 h-5 " />
//                   {feature.title}
//                 </h3>
//                 <p className="text-[#9d6231] leading-relaxed">{feature.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* INDUSTRIES SECTION */}
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Header with Logo */}

//           {/* Main Title */}
//           <div className="text-center mb-12">
//             <div className="inline-block">
//               <div className="flex items-center gap-2 justify-center mb-3">
//                 <span className="h-px w-8 bg-indigo-300"></span>
//                 <span className="text-[#573010] font-semibold text-sm tracking-wide uppercase">
//                   Our Expertise
//                 </span>
//                 <span className="h-px w-8 bg-indigo-300"></span>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold bg-[#573010] bg-clip-text text-transparent">
//                 Industries We Serve In
//               </h2>
//               <div className="w-24 h-1 bg-gradient-to-r from-[#F5F0E8] via-[#EFE6DA] to-[#E8DCCB] rounded-full mx-auto mt-4"></div>
//             </div>
//             <p className="mt-4 text-[#573010] max-w-2xl mx-auto">
//               Delivering tailored solutions across diverse sectors with
//               excellence and innovation
//             </p>
//           </div>

//           {/* Categories Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {categories.map((category, idx) => (
//               <div
//                 key={idx}
//                 className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-50 hover:border-indigo-100 overflow-hidden"
//               >
//                 {/* Card Header */}
//                 <div className="relative px-6 pt-6 pb-4 bg-gradient-to-r from-indigo-50/50 to-transparent border-b border-indigo-100">
//                   <div className="flex items-center gap-3">
//                     <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
//                       {category.icon}
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-[#573010] group-hover:text-indigo-700 transition-colors">
//                         {category.title}
//                       </h3>
//                       <div className="h-0.5 w-12 bg-indigo-400 rounded-full mt-1 group-hover:w-16 transition-all duration-300"></div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Industries List */}
//                 <div className="p-6">
//                   <div className="flex flex-wrap gap-2.5">
//                     {category.industries.map((industry, i) => (
//                       <span
//                         key={i}
//                         className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium bg-gray-50 text-[#573010] border border-gray-100 shadow-sm hover:shadow-md hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-all duration-200 cursor-default"
//                       >
//                         {industry}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Card Footer Decoration */}
//                 <div className="h-1 w-full bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>
//             ))}
//           </div>

//           {/* Bottom Stats / Extra Info - Optional */}
//           <div className="mt-16 pt-8 border-t border-indigo-100 text-center">
//             <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 rounded-full bg-[#573010]"></div>
//                 <span>25+ Years Combined Experience</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 rounded-full bg-[#573010]"></div>
//                 <span>Global Client Network</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 rounded-full bg-[#573010]"></div>
//                 <span>24/7 Industry Support</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* BENEFITS SECTION */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#573010] "
//           >
//             Benefits Of Business Process Automation By{" "}
//             <span className="bg-gradient-to-r bg-gradient-to-br from-[#bc9b65] via-[#9b8c77] to-[#ad9779] bg-clip-text text-transparent">
//               AI KNOTS
//             </span>
//           </motion.h2>

//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {benefits.map((benefit, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.05 }}
//                 whileHover={{ y: -5 }}
//                 className="group rounded-2xl border border-gray-100 bg-[#F5F5FF] p-6 shadow-sm transition-all hover:shadow-lg hover:border-indigo-200 cursor-pointer"
//               >
//                 <h3 className="mb-3 text-xl font-bold text-gray-900 flex items-center gap-2">
//                   <Check className="w-5 h-5 text-[#724c2e]" />
//                   {benefit.title}
//                 </h3>
//                 <p className="leading-relaxed text-[#573010]">
//                   {benefit.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PROCESS SECTION */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#573010] "
//           >
//             Our Process & Approach
//           </motion.h2>
//           <p className="text-center text-[#573010] mb-12 max-w-2xl mx-auto">
//             A systematic approach to ensure successful implementation and
//             maximum ROI
//           </p>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {processSteps.map((step, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className="relative rounded-2xl bg-gradient-to-br from-gray-50 to-white p-8 shadow-md hover:shadow-xl transition-all cursor-pointer group"
//               >
//                 <div className="text-6xl font-bold text-[#ead9cb] absolute top-4 right-4 group-hover:text-indigo-200 transition-colors">
//                   {step.step}
//                 </div>
//                 <h3 className="text-2xl font-bold text-[#573010] mb-4 relative z-10">
//                   {step.title}
//                 </h3>
//                 <p className="text-[#573010] leading-relaxed relative z-10">
//                   {step.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* TESTIMONIALS SECTION */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
//           >
//             What Our{" "}
//             <span className="bg-gradient-to-r bg-gradient-to-br from-[#ad8e5b] via-[#967a55] to-[#b1a390] bg-clip-text text-transparent">
//               Clients Say?
//             </span>
//           </motion.h2>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {testimonials.map((testimonial, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg cursor-pointer"
//               >
//                 <div className="mb-4 flex items-center gap-1">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="h-5 w-5 fill-yellow-400 text-yellow-400"
//                     />
//                   ))}
//                 </div>
//                 <p className="mb-4 flex-1 text-gray-700 leading-relaxed line-clamp-4">
//                   {testimonial.content}
//                 </p>
//                 <div className="mt-4 pt-4 border-t border-gray-100">
//                   <p className="font-semibold text-gray-900">
//                     {testimonial.author}
//                   </p>
//                   <p className="text-sm text-indigo-600">{testimonial.title}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CASE STUDIES SECTION */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-12">
          
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-4xl font-bold text-[#854a1a] mb-6">
//                 Blogs & Resources
//               </h2>
//               <p className="text-[#573010] text-lg mb-6">
//                 Explore our case studies and stay up to date on how MI Digital
//                 AutoPilot is helping business automate their operation and
//                 marketing efforts.
//               </p>
//               <button className="text-[#854a1a] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
//                 Read Our Blog <ArrowRight className="w-4 h-4" />
//               </button>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ SECTION */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-4xl mx-auto px-6">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
//           >
//             Frequently Asked{" "}
//             <span className="bg-gradient-to-r bg-gradient-to-br from-[#aba06e] via-[#e7d0b1] to-[#d4c3ac] bg-clip-text text-transparent">
//               Questions
//             </span>
//           </motion.h2>

//           <div className="space-y-4">
//             {faqs.map((faq, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="group"
//               >
//                 <details className="bg-white rounded-xl p-6 cursor-pointer hover:bg-gray-50 transition-colors border border-gray-100">
//                   <summary className="font-semibold text-gray-900 text-lg list-none flex justify-between items-center">
//                     {faq.q}
//                     <ChevronDown className="w-5 h-5 text-indigo-600 group-open:rotate-180 transition-transform" />
//                   </summary>
//                   <p className="mt-4 text-gray-600 leading-relaxed pl-2 border-l-2 border-indigo-300">
//                     {faq.a}
//                   </p>
//                 </details>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes marquee {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 30s linear infinite;
//         }
//         .animate-marquee:hover {
//           animation-play-state: paused;
//         }
//         .line-clamp-4 {
//           display: -webkit-box;
//           -webkit-line-clamp: 4;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import FlowManagementSystem from "../assets/Images/Icon/flow management system.png";
import AmazonModel from "../assets/Images/Icon/Amazon-Model.jpg";
import DelegationTaskAssignment from "../assets/Images/Icon/Delegation Task Assignment.png";
import RepetitiveTaskAssignment from "../assets/Images/Icon/Repeatative-Task-Assignment.png";
import HelpTicketSystem from "../assets/Images/Icon/Help-Ticket-System-1.png";
import AuditorModule from "../assets/Images/Icon/amazonmodel.png";
import Helpticket from "../assets/Images/Icon/Help ticket system.png";
import paymentcollectionengine from "../assets/Images/Icon/paymentcollectionengine.png";
import AutomatedScoring from "../assets/Images/Icon/AutomatedScoring.png";
import KRAKPI from "../assets/Images/Icon/KRAKPI.png";
import intranet from "../assets/Images/Icon/intranet.png";
import RunoAPIIntegrated from "../assets/Images/Icon/RunoAPIIntegrated.png";
import AIPoweredDelegation from "../assets/Images/Icon/AIPoweredDelegation.png";
import ProjectManagementSystem from "../assets/Images/Icon/ProjectManagementSystem.png";
import QuickLaunch from "../assets/Images/Icon/QuickLaunch.png";
import LeaveRegister from "../assets/Images/Icon/LeaveRegister.png";
import HiringFMS from "../assets/Images/Icon/image1.png";
import AutoTaskReminders from "../assets/Images/Icon/AutoTaskReminders2.png";
import dashboard from "../assets/Images/Icon/dashboard5.png";
import {
  Check,
  ArrowRight,
  Users,
  TrendingUp,
  Clock,
  Settings,
  BarChart3,
  Shield,
  Layers,
  Star,
  Zap,
  ChevronDown,
  CheckCircle2Icon,
} from "lucide-react";
import ATLAknotsDark2 from "../assets/Images/Robot2.gif";
import { useTheme } from "../context/ThemeContext";

// Counter Component
const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9,]/g, "");

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = numericValue / (duration * 60);
    const interval = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, (duration * 1000) / (numericValue / increment));

    return () => clearInterval(interval);
  }, [isInView, numericValue, duration]);

  return (
    <div ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

const Home = () => {
  const { isDark } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeatureTab, setActiveFeatureTab] = useState("operations");
  const [activeIndustryTab, setActiveIndustryTab] = useState("All");

  const clientLogos = [
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/1.png",
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/2.png",
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/3.png",
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/4.png",
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/5.png",
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/6.png",
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/7.png",
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/8.png",
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/9.png",
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2023/04/10.png",
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2025/03/16.png",
    "https://cdn-jdbol.nitrocdn.com/stMslhZcyTrQKwaudxVanuuJFlvCrYOu/assets/images/optimized/rev-3eef2b7/midigitalautopilot.com/wp-content/uploads/2025/03/17.png",
  ];

  const industries = [
    "Agriculture", "Construction", "Design & Marketing", "Arts & Crafts",
    "Automotive", "Gems & Jewellery", "Jute Industry", "Logistic",
    "Manufacturing", "Marbles & Tiles", "Packaging", "Training Institute",
    "Solar", "Textile", "Trader", "Electronics", "Finance & Insurance",
    "Food & Beverages", "Healthcare", "Pharma", "Real Estate",
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "AI KNOTS automates repetitive tasks, freeing up your team to focus on high-value work.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Time & Cost Savings",
      description: "By streamlining processes and reducing manual errors, AI KNOTS saves you time and money.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Improve Scalability",
      description: "By automating repetitive tasks and optimizing workflows, AI KNOTS empowers your business to scale.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Error Reduction",
      description: "AI KNOTS's automation minimizes human error, ensuring accuracy and reliability.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Enhance Productivity",
      description: "Optimizes workflows, increasing productivity and improving overall performance.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Streamline Process",
      description: "Simplify your complex business processes with AI KNOTS automation system.",
      icon: <Settings className="w-6 h-6" />,
    },
    {
      title: "Full Audibility and Tracking",
      description: "Track progress with complete visibility into your operations.",
      icon: <Layers className="w-6 h-6" />,
    },
    {
      title: "Improve Customer Experience",
      description: "Deliver better products and services by streamlining processes.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const allFeatures = [
    { title: "Flow Management System", desc: "Create and deploy a new task flow system in just 5 minutes...", category: "operations", icon: FlowManagementSystem },
    { title: "Development", desc: "Get custom software development services tailored to your unique business needs...", category: "operations", icon: AmazonModel },
    { title: "Testing", desc: "Ensure your software is reliable and bug-free...", category: "operations", icon: DelegationTaskAssignment },
    { title: "L2 Support", desc: "Our dedicated L2 support team provides expert assistance...", category: "operations", icon: RepetitiveTaskAssignment },
    { title: "Product Assistance", desc: "Our product assistance services offer expert guidance...", category: "operations", icon: HelpTicketSystem },
    { title: "Search Engine Optimization (SEO)", desc: "Boost your online visibility...", category: "operations", icon: AuditorModule },
    { title: "Social Media Marketing", desc: "Engage your audience...", category: "operations", icon: intranet },
    { title: "Google & Meta Ads Management", desc: "Maximize your advertising ROI...", category: "operations", icon: "🏬" },
    { title: "Voice, Chat & Email Bot", desc: "Enhance customer engagement...", category: "operations", icon: paymentcollectionengine },
    { title: "Cataloguing & Enrichment", desc: "Organize and enhance your product data...", category: "operations", icon: AutomatedScoring },
    { title: "Quality Assurance", desc: "Ensure your software is reliable...", category: "operations", icon: AutoTaskReminders },
    { title: "HRMS & Payroll", desc: "Streamline your human resources...", category: "Software", icon: "👥" },
    { title: "CRM Integration", desc: "Integrate your customer relationship management...", category: "Software", icon: AutoTaskReminders },
    { title: "Billing & Payment Reminders", desc: "Send automated WhatsApp messages...", category: "Software", icon: FlowManagementSystem },
    { title: "AI ChatBot", desc: "Interact with your customers in a personalized way...", category: "Software", icon: "🤖" }
  ];

  const lovedFeatures = [
    { title: "Next Level Delegation", desc: "AI KNOTS's Next Level Delegation System makes task assignment easy...", icon: "🎯" },
    { title: "Compliance Checklist", desc: "Ensures all your processes meet required standards...", icon: "✅" },
    { title: "Flow Management System", desc: "Enables seamless coordination of a single process...", icon: "🌊" },
    { title: "Amazon Model", desc: "Send step-by-step updates to your customers on WhatsApp...", icon: "📦" },
    { title: "Advanced & Robust Split FMS", desc: "Allows seamless task handovers between workflows...", icon: "⚡" },
    { title: "Attendance Management System", desc: "Keeping track of employee attendance is simplified...", icon: "📅" },
  ];

  const processSteps = [
    { step: "01", title: "Process Mapping & Design", desc: "Our experts work closely with you to map out your existing workflows..." },
    { step: "02", title: "Software Implementation", desc: "Our team seamlessly integrates AI KNOTS into your existing systems..." },
    { step: "03", title: "Training & Support", desc: "We provide comprehensive training to your staff..." },
    { step: "04", title: "Monitoring & Optimization", desc: "We continuously monitor AI KNOTS's performance..." },
    { step: "05", title: "Customization", desc: "If your process is not fulfilled by any of our existing features..." },
  ];

  const testimonials = [
    { rating: 5, content: "A reliable digital marketing partner. AI Knots understands business needs...", author: "Swadesh Jyoti Lalwani" },
    { rating: 5, content: "Working with AI Knots has been a great decision...", author: "Pathik Shah" },
    { rating: 5, content: "AI Knots has helped us improve our digital visibility...", author: "Bharat e-Filing" },
  ];

  const categories = [
    { title: "Agriculture & Allied", icon: "🌾", industries: ["Agriculture", "Construction", "Design & Marketing", "Arts & Crafts", "Automotive", "Gems & Jewellery", "Jute Industry"] },
    { title: "Logistics & Manufacturing", icon: "🏭", industries: ["Logistic", "Manufacturing", "Marbles & Tiles", "Packaging", "Training Institute", "Solar", "Textile"] },
    { title: "Trade & Financial Services", icon: "📊", industries: ["Trader", "Electronics", "Finance & Insurance", "Food & Beverages", "Healthcare", "Pharma", "Real Estate"] },
  ];

  const faqs = [
    { q: "AI KNOTS is software to streamline and automate your marketing and business operations.", a: "AI KNOTS helps businesses automate repetitive tasks..." },
    { q: "Currently, AI KNOTS supports WhatsApp and Emails...", a: "The platform integrates seamlessly with WhatsApp and Email services..." },
    { q: "AI KNOTS can be used by small to medium-sized businesses...", a: "From manufacturing to retail, healthcare to finance..." },
    { q: "Yes, AI KNOTS can integrate with other systems...", a: "AI KNOTS offers API integrations..." },
    { q: "AI KNOTS offers proper customer support...", a: "Our dedicated support team provides training..." },
  ];

  const getFilteredFeatures = () => allFeatures.filter((f) => f.category === activeFeatureTab);

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-700
      ${isDark ? "bg-gray-950 text-white" : "bg-white text-[#3d220e]"}`}>

      {/* HERO SECTION */}
      <section className={`relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden
        ${isDark ? "bg-gradient-to-br from-gray-900 via-black to-gray-950" : "bg-gradient-to-br from-[#e2d7a4] via-[#f9efe1] to-[#b8a790]"}`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8B6B4A]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${isDark ? "text-white" : "text-[#3d220e]"}`}>
              Transform Your Ideas Into
              <br />
              <span className="text-[#8B6B4A]">Intelligent Solutions!</span>
            </h1>

            <ul className={`space-y-4 text-xl md:text-2xl ${isDark ? "text-gray-200" : "text-[#3d220e]"}`}>
              {["Automate Repetitive Tasks", "Streamline Workflows", "Manage Inventory Hassle-Free"].map((item, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${isDark ? "bg-[#8B6B4A]" : "bg-[#3d220e]"} text-white`}>
                    <Check className="w-5 h-5" />
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-full font-semibold text-lg transition flex items-center gap-2 shadow-lg
                  ${isDark ? "bg-[#8B6B4A] hover:bg-[#a17d5f] text-white" : "bg-[#3d220e] hover:bg-[#5c4635] text-white"}`}>
                Schedule a demo <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-full font-semibold text-lg transition border-2
                  ${isDark ? "border-[#8B6B4A] text-[#8B6B4A] hover:bg-[#8B6B4A] hover:text-white" : "border-[#3d220e] text-[#3d220e] hover:bg-[#3d220e] hover:text-white"}`}>
                Start a free trial
              </motion.button>
            </div>

            
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative flex justify-center">
            <img src={dashboard} alt="AI KNOTS Dashboard" className="rounded-2xl w-full max-w-[720px]" />
          </motion.div>
        </div>
      </section>

      {/* About Us + Stats */}
      <section className={`py-20 overflow-hidden ${isDark ? "bg-gray-950" : "bg-[#f9efe1]"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className={`text-4xl md:text-5xl font-bold leading-tight mb-10 ${isDark ? "text-white" : "text-[#462206]"}`}>About Us</h2>
              <ul className="space-y-6">
                {[
                  "Empowering businesses with innovative, scalable, and result-driven technology solutions.",
                  "Specializing in Website Development, Digital Marketing, HRMS, CRM, and Business Automation.",
                  "Helping organizations improve operational efficiency and strengthen their digital presence.",
                  "Delivering strategic and technology-driven solutions that create measurable business impact.",
                  "Building long-term partnerships through exceptional service, quality, and innovation.",
                  "Enabling businesses to achieve sustainable growth and stay ahead in a rapidly evolving marketplace.",
                ].map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4 items-start group">
                    <span className={`text-2xl ${isDark ? "text-[#8B6B4A]" : "text-[#93460c]"}`}>✓</span>
                    <p className={`${isDark ? "text-gray-300" : "text-[#72441e]"} leading-relaxed font-medium`}>{item}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={ATLAknotsDark2} alt="AI KNOTS Story" className="rounded-3xl w-full" />
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className={`text-4xl font-bold leading-tight mb-6 ${isDark ? "text-white" : "text-[#462206]"}`}>Automate Your Complex Business Process AI KNOTS</h2>
                <p className={`${isDark ? "text-gray-400" : "text-[#72441e]"} leading-relaxed text-lg`}>More work. Less stress! AI KNOTS is the ultimate solution to streamline and automate your marketing and business operations.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { number: "220+", label: "Live Setup" },
                  { number: "12,230+", label: "Users" },
                  { number: "2,715+", label: "Live FMS" },
                  { number: "26,000+", label: "Delegation Processed (Avg Monthly)" },
                  { number: "316K+", label: "Checklist Processed (Avg Monthly)" },
                ].map((stat, i) => (
                  <motion.div key={i} whileHover={{ y: -5 }} className={`rounded-2xl p-6 transition-colors ${isDark ? "bg-gray-900 hover:bg-gray-800" : "bg-[#f8e1cf] hover:bg-[#FFF6EF]"}`}>
                    <div className={`text-4xl font-bold mb-1 ${isDark ? "text-[#8B6B4A]" : "text-[#462206]"}`}>
                      <Counter value={stat.number} />
                    </div>
                    <div className={`${isDark ? "text-gray-400" : "text-[#7a5e46]"} font-medium`}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES TABS SECTION */}
      <section className={`py-12 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`text-3xl md:text-4xl font-bold text-center mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            Our <span className="text-[#8B6B4A]">Features</span>
          </motion.h2>
          <p className={`text-center mb-8 max-w-xl mx-auto ${isDark ? "text-gray-400" : "text-[#72441e]"}`}>Discover the powerful tools that make AI KNOTS the ultimate business automation solution</p>

          <div className="flex justify-center mb-8">
            <div className={`inline-flex rounded-full p-1 shadow-sm border ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
              {["operations", "Software"].map((tab) => (
                <button key={tab} onClick={() => setActiveFeatureTab(tab)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all text-sm ${activeFeatureTab === tab
                    ? isDark ? "bg-[#8B6B4A] text-white" : "bg-[#3d220e] text-white"
                    : isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-800"}`}>
                  {tab === "operations" ? "Operations" : "Software"}
                </button>
              ))}
            </div>
          </div>

          <motion.div key={activeFeatureTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {getFilteredFeatures().map((feature, index) => (
              <motion.div key={index} whileHover={{ y: -5 }}
                className={`rounded-3xl p-4 group cursor-pointer h-full transition-all duration-300 ${isDark ? "bg-gray-900 hover:bg-gray-800" : "bg-[#f4ecec] hover:bg-[#FFF6EF]"}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-none h-24 w-24 flex items-center justify-center text-5xl overflow-hidden">
                    {typeof feature.icon === "string" && /\.(png|jpe?g|gif|svg)$/i.test(feature.icon) ? (
                      <img src={feature.icon} alt={feature.title} className="h-16 w-16 object-contain" />
                    ) : (
                      <div className="text-6xl">{feature.icon}</div>
                    )}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-1 transition-colors ${isDark ? "text-white group-hover:text-[#8B6B4A]" : "text-[#573010] group-hover:text-[#8B6B4A]"}`}>
                      {feature.title}
                    </h3>
                    <p className={`${isDark ? "text-gray-400" : "text-[#9d6231]"} leading-snug text-sm`}>{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MOST LOVED FEATURES */}
      <section className={`py-20 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold text-center mb-6 ${isDark ? "text-white" : "text-black"}`}>
            Most <span className="text-[#8B6B4A]">Loved</span> Features
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lovedFeatures.map((feature, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ scale: 1.02 }}
                className={`rounded-3xl p-8 transition-all ${isDark ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-100"}`}>
                <h3 className={`text-2xl font-semibold mb-3 flex items-center gap-2 ${isDark ? "text-white" : "text-[#573010]"}`}>
                  <CheckCircle2Icon className="w-5 h-5 text-[#8B6B4A]" /> {feature.title}
                </h3>
                <p className={`${isDark ? "text-gray-400" : "text-[#9d6231]"}`}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-950" : "bg-gradient-to-br from-slate-50 via-white to-[#f9efe1]"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-[#573010]"}`}>Industries We Serve In</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, idx) => (
              <div key={idx} className={`group rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border overflow-hidden ${isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100"}`}>
                <div className="px-6 pt-6 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{category.icon}</div>
                    <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-[#573010]"}`}>{category.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2.5">
                    {category.industries.map((ind, i) => (
                      <span key={i} className={`inline-flex px-3.5 py-1.5 rounded-full text-sm ${isDark ? "bg-gray-800 text-gray-300" : "bg-gray-50 text-[#573010]"}`}>
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className={`py-20 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold text-center mb-12 ${isDark ? "text-white" : "text-[#573010]"}`}>
            Benefits Of Business Process Automation By <span className="text-[#8B6B4A]">AI KNOTS</span>
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -5 }}
                className={`rounded-2xl p-6 transition-all ${isDark ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-100"}`}>
                <h3 className={`mb-3 text-xl font-bold flex items-center gap-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                  <Check className="w-5 h-5 text-[#8B6B4A]" /> {benefit.title}
                </h3>
                <p className={`${isDark ? "text-gray-400" : "text-[#573010]"}`}>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={`py-20 ${isDark ? "bg-gray-950" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold text-center mb-6 ${isDark ? "text-white" : "text-[#573010]"}`}>Our Process & Approach</motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -5 }}
                className={`rounded-2xl p-8 transition-all ${isDark ? "bg-gray-900" : "bg-gradient-to-br from-gray-50 to-white"}`}>
                <div className={`text-6xl font-bold mb-4 ${isDark ? "text-gray-700" : "text-[#ead9cb]"}`}>{step.step}</div>
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-[#573010]"}`}>{step.title}</h3>
                <p className={`${isDark ? "text-gray-400" : "text-[#573010]"}`}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={`py-20 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold text-center mb-12 ${isDark ? "text-white" : "text-[#573010]"}`}>What Our Clients Say?</motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} whileHover={{ y: -5 }}
                className={`rounded-2xl p-6 ${isDark ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-100"}`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                </div>
                <p className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>{t.content}</p>
                <p className={`mt-6 font-semibold ${isDark ? "text-white" : "text-[#573010]"}`}>{t.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`py-20 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold text-center mb-12 ${isDark ? "text-white" : "text-[#573010]"}`}>Frequently Asked Questions</motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className={`rounded-xl p-6 ${isDark ? "bg-gray-900" : "bg-white"} border ${isDark ? "border-gray-800" : "border-gray-100"}`}>
                <summary className={`font-semibold text-lg cursor-pointer flex justify-between ${isDark ? "text-white" : "text-[#573010]"}`}>
                  {faq.q}
                  <ChevronDown className="w-5 h-5 transition-transform" />
                </summary>
                <p className={`mt-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTheme } from "../context/ThemeContext";
// import {
//   ArrowRight,
//   X,
//   Code,
//   ShieldCheck,
//   Users,
//   Server,
//   Headphones,
//   BarChart3,
//   CheckCircle,
//   Briefcase,
//   HardDrive,
//   ChevronDown,
// } from "lucide-react";
// import heroVideo from "../assets/herosectionvideo.mp4";

// // ReCAPTCHA & Toast
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Helmet } from "react-helmet-async";
// // Redux
// import { useDispatch, useSelector } from "react-redux";

// import {
//   updateField,
//   clearMessages,
//   submitContactForm,
// } from "./Redux/query/querySlice.js";

// import background from "../assets/Images/backgroundimage1.jpeg";
// import background2 from "../assets/Images/backgroundimage2.jpeg";

// import background3 from "../assets/Images/backgroundimage3.jpeg";

// // React Router for navigation
// import { Link, useNavigate } from "react-router-dom";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } },
// };

// // Hero Slider Data
// const HERO_SLIDES = [
//   {
//     image: background,
//     title: "Global IT Services",
//     subtitle:
//       "End-to-end digital transformation, product engineering, and cloud delivery for growing brands",
//     cta: "Discover ATLA",
//   },
//   {
//     image: background2,
//     title: "Marketing & Growth",
//     subtitle:
//       "Performance marketing, SEO, and brand campaigns designed to convert and scale",
//     cta: "Grow with ATLA",
//   },
//   {
//     image: background3,
//     title: "Creative Product Design",
//     subtitle:
//       "UX-driven web and mobile experiences that engage users and accelerate adoption",
//     cta: "See Solution",
//   },
// ];

// export default function Home() {
//   const { isDark } = useTheme();
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); // For navigation to Portfolio

//   const { formData, loading, successMessage, errorMessage } = useSelector(
//     (state) => state.contact,
//   );

//   const [showPopup, setShowPopup] = useState(false);
//   const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

//   // Auto slide for hero slider
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   // Popup appears after 1.5 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => setShowPopup(true), 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   // Toast Notifications
//   useEffect(() => {
//     if (successMessage) {
//       toast.success(successMessage, { position: "top-right", autoClose: 5000 });
//       dispatch(clearMessages());
//       setShowPopup(false);
//     }
//   }, [successMessage, dispatch]);

//   useEffect(() => {
//     if (errorMessage) {
//       toast.error(errorMessage, { position: "top-right", autoClose: 7000 });
//       dispatch(clearMessages());
//     }
//   }, [errorMessage, dispatch]);

//   const handleChange = (e) => {
//     dispatch(updateField({ name: e.target.name, value: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const payload = {
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       message: formData.message,
//       category: formData.category,
//     };
//     dispatch(submitContactForm(payload));
//   };

//   // Navigate to Portfolio Page
//   const goToPortfolio = () => {
//     navigate("/portfolio");
//   };

//   // Reusable Classes with Red Theme
//   const cardClass = isDark
//     ? "bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:border-red-500/50 transition-colors"
//     : "bg-white border border-gray-200 shadow-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:shadow-xl transition-shadow";

//   const headingClass = isDark ? "text-white" : "text-gray-900";
//   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
//   const accentClass = "text-red-500";
//   const sectionHeadingAccent = "text-red-500";

//   // FAQ Accordion Item Component
//   const FAQItem = ({ question, answer }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//       <div
//         className={`border rounded-3xl overflow-hidden transition-all duration-300 ${
//           isDark
//             ? "border-gray-800 bg-gray-900 hover:border-red-500/40"
//             : "border-gray-200 bg-white hover:border-red-200 shadow-sm"
//         }`}
//       >
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className={`w-full px-8 py-7 flex justify-between items-center text-left transition-all duration-300 hover:bg-red-50 dark:hover:bg-gray-800 ${
//             isOpen ? (isDark ? "bg-gray-800" : "bg-red-50") : ""
//           }`}
//         >
//           <span className={`font-semibold text-lg ${headingClass} pr-6`}>
//             {question}
//           </span>

//           <div className={`transition-transform duration-300 ${accentClass}`}>
//             <ChevronDown
//               size={28}
//               className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
//             />
//           </div>
//         </button>

//         <div
//           className={`overflow-hidden transition-all duration-400 ease-out ${
//             isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <div className={`px-8 pb-9 pt-2 ${bodyClass} leading-relaxed`}>
//             {answer}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <Helmet>
//         <title>IT Company in Bhopal | Atla Inteligent Knots</title>
//         <meta
//           name="description"
//           content="Atla Inteligent Knots Solution offers website development, SEO, digital marketing, software & app solutions."
//         />
//         <meta
//           name="keywords"
//           content="IT Company in Bhopal Website Development, SEO Company, Digital Marketing, Software Development, Mobile App Development, Cloud Solutions, AI Services, BPO Services"
//         />
//       </Helmet>

//       <div
//         className={`min-h-screen overflow-x-hidden transition-colors duration-700
//       ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
//       >
//         <ToastContainer
//           position="top-right"
//           autoClose={5000}
//           theme={isDark ? "dark" : "light"}
//         />

//  <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
//           <div className="absolute inset-0 z-0">
//             <video
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="absolute inset-0 w-full h-full object-cover"
//             >
//               <source src={heroVideo} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//             <div
//               className={`absolute inset-0 z-10 transition-colors duration-700
//               ${
//                 isDark
//                   ? "bg-gradient-to-br from-black/90 via-black/80 to-black/90"
//                   : "bg-gradient-to-br from-slate-950/95 via-slate-950/90 to-black/70"
//               }`}
//             />
//           </div>
//           <div className="max-w-7xl mx-auto text-center relative z-20">
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={staggerContainer}
//             >
//               <motion.h1
//                 variants={fadeInUp}
//                 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white"
//               >
//                 AI KNOTS
//                 <br />
//                 <span
//                   className={
//                     isDark
//                       ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white"
//                       : "text-[#abaaaa]"
//                   }
//                 >
//                   IT SOLUTION (AIKIS)
//                 </span>
//               </motion.h1>

//               <motion.p
//   variants={fadeInUp}
//   initial="hidden"
//   animate="visible"
//   className={`text-[22px] md:text-[28px] lg:text-[32px]
//               max-w-5xl mx-auto mb-12 leading-[1.35] font-light tracking-wide
//               ${isDark ? "text-gray-200" : "text-white"} text-center`}
// >
//   India&apos;s No. 1 Website Development Company
// </motion.p>
//               <motion.p
//                 variants={fadeInUp}
//                 className={`text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed
//                 ${isDark ? "text-gray-300" : "text-white"}`}
//               >
//                 Making technology impactful, dependable, and easy to use — for
//                 businesses of all sizes.
//               </motion.p>
//               <motion.p
//                 variants={fadeInUp}
//                 className={`text-lg md:text-xl max-w-3xl mx-auto mb-12
//                 ${isDark ? "text-gray-400" : "text-white/90"}`}
//               >
//                 We build secure, future-ready software that drives efficiency
//                 and digital transformation.
//               </motion.p>
//               <motion.div
//                 variants={fadeInUp}
//                 className="flex flex-col sm:flex-row gap-6 justify-center"
//               >
//                 <button
//                   onClick={() => setShowPopup(true)}
//                   className="group px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all
//                   bg-red-600 hover:bg-red-700 active:bg-red-800 text-white"
//                 >
//                   GET STARTED
//                   <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
//                 </button>

//                 <Link to="/portfolio">
//                   <button
//                     className={`group px-10 py-5 border-2 rounded-full text-lg font-semibold transition-all
//                   ${
//                     isDark
//                       ? "border-red-600/60 text-red-400 hover:border-red-500 hover:text-red-300"
//                       : "border-white/80 text-white hover:bg-white/10"
//                   }`}
//                   >
//                     VIEW OUR WORK
//                   </button>
//                 </Link>
//               </motion.div>
//             </motion.div>
//           </div>
//         </section>
//         <hr className="border-t border-red-500/30" />
//         {/* ====================== HERO SLIDER SECTION ====================== */}

//         {/* ====================== HERO SECTION WITH VIDEO ====================== */}

//         {/* ====================== SERVICES SECTION ====================== */}
//         <section
//           className={`py-24 px-6 md:px-12 lg:px-24 transition-colors
//         ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}
//         >
//           <div className="max-w-7xl mx-auto">
//             <motion.h2
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//               className={`text-5xl md:text-6xl font-bold text-center mb-6 ${headingClass}`}
//             >
//               OUR <span className={accentClass}>SERVICES</span>
//             </motion.h2>
//             <motion.p
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//               className={`text-xl text-center font-semibold mb-16 max-w-3xl mx-auto ${bodyClass}`}
//             >
//               Empowering businesses with smart digital solutions, scalable
//               technology, and seamless operational support. From software
//               development and cloud services to customer support, digital
//               marketing, and automation — we deliver complete business solutions
//               under one roof.
//             </motion.p>

//             <div className="space-y-20">
//               {/* IT Services */}
//               <div>
//                 <h3
//                   className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}
//                 >
//                   Information Technology Services
//                 </h3>
//                 <p
//                   className={`text-lg md:text-xl mb-12 text-center max-w-4xl mx-auto leading-relaxed ${bodyClass}`}
//                 >
//                   Supporting companies at every stage of the product lifecycle.
//                 </p>
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//                   {[Code, ShieldCheck, Users, Server].map((Icon, index) => (
//                     <motion.div
//                       key={index}
//                       initial="hidden"
//                       whileInView="visible"
//                       viewport={{ once: true }}
//                       variants={fadeInUp}
//                       className={cardClass}
//                     >
//                       <Icon
//                         className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
//                       />
//                       <h4
//                         className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
//                       >
//                         {
//                           [
//                             "Development",
//                             "Testing",
//                             "L2 Support",
//                             "Product Assistance",
//                           ][index]
//                         }
//                       </h4>
//                       <ul
//                         className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
//                       >
//                         {index === 0 && (
//                           <>
//                             <li>• Web application development</li>
//                             <li>• Mobile application development</li>
//                             <li>
//                               • Secure, scalable &amp; user-friendly solutions
//                             </li>
//                           </>
//                         )}
//                         {index === 1 && (
//                           <>
//                             <li>• Web application testing</li>
//                             <li>• Mobile application testing</li>
//                             <li>
//                               • Quality, performance &amp; security assurance
//                             </li>
//                           </>
//                         )}
//                         {index === 2 && (
//                           <li>
//                             • Advanced troubleshooting, in-depth diagnosis &amp;
//                             root cause resolution.
//                           </li>
//                         )}
//                         {index === 3 && (
//                           <>
//                             <li>• Continuous support &amp; maintenance</li>
//                             <li>• Ticket &amp; incident management</li>
//                             <li>• Change management &amp; SLA tracking</li>
//                           </>
//                         )}
//                       </ul>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               <div className="text-center max-w-5xl mx-auto">
//                 <h3
//                   className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${sectionHeadingAccent}`}
//                 >
//                   Digital Marketing Services
//                 </h3>
//                 <p
//                   className={`text-lg md:text-xl leading-relaxed ${bodyClass} mb-12`}
//                 >
//                   In today’s digital-first world, building a strong online
//                   presence is essential for businesses to grow and stay ahead.
//                 </p>
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//                   {[Headphones, BarChart3, CheckCircle].map((Icon, index) => (
//                     <motion.div
//                       key={index}
//                       initial="hidden"
//                       whileInView="visible"
//                       viewport={{ once: true }}
//                       variants={fadeInUp}
//                       className={cardClass}
//                     >
//                       <Icon
//                         className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
//                       />
//                       <h4
//                         className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
//                       >
//                         {
//                           [
//                             "Search Engine Optimization",
//                             "Social Media Marketing",
//                             "Google &amp; Meta Ads",
//                           ][index]
//                         }
//                       </h4>
//                       <ul
//                         className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
//                       >
//                         {index === 0 && (
//                           <>
//                             <li>• Boost your website ranking</li>
//                             <li>• Increase organic traffic</li>
//                             <li>• Attract the right audience</li>
//                             <li>• Gain competitive edge</li>
//                           </>
//                         )}
//                         {index === 1 && (
//                           <>
//                             <li>• Reach the right audience</li>
//                             <li>• Build trust and brand awareness</li>
//                             <li>• Increase engagement</li>
//                             <li>• Convert followers into customers</li>
//                           </>
//                         )}
//                         {index === 2 && (
//                           <>
//                             <li>• Targeted ad campaigns</li>
//                             <li>• Improve brand visibility</li>
//                             <li>• Generate quality leads</li>
//                             <li>• Effective PPC strategies</li>
//                           </>
//                         )}
//                       </ul>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               {/* BPO Services */}
//               <div>
//                 <h3
//                   className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}
//                 >
//                   Business Process Outsourcing (BPO) Services
//                 </h3>
//                 <p
//                   className={`text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed ${bodyClass}`}
//                 >
//                   Streamline operations and enhance customer engagement with
//                   reliable support.
//                 </p>
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//                   {[Headphones, BarChart3, CheckCircle].map((Icon, index) => (
//                     <motion.div
//                       key={index}
//                       initial="hidden"
//                       whileInView="visible"
//                       viewport={{ once: true }}
//                       variants={fadeInUp}
//                       className={cardClass}
//                     >
//                       <Icon
//                         className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
//                       />
//                       <h4
//                         className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
//                       >
//                         {
//                           [
//                             "Voice, Chat &amp; Email",
//                             "Cataloguing &amp; Enrichment",
//                             "Quality Assurance",
//                           ][index]
//                         }
//                       </h4>
//                       <ul
//                         className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
//                       >
//                         {index === 0 && (
//                           <>
//                             <li>• Inbound &amp; outbound voice support</li>
//                             <li>• Real-time chat assistance</li>
//                             <li>• Structured email &amp; ticketing</li>
//                           </>
//                         )}
//                         {index === 1 && (
//                           <>
//                             <li>• Product descriptions, tags &amp; keywords</li>
//                             <li>• Data validation &amp; cleaning</li>
//                             <li>• Category &amp; attribute enrichment</li>
//                           </>
//                         )}
//                         {index === 2 && (
//                           <p
//                             className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}
//                           >
//                             Call/chat audits, SOP/SLA compliance, feedback &amp;
//                             continuous improvement.
//                           </p>
//                         )}
//                       </ul>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               {/* Digital Marketing Services */}
//             </div>
//           </div>
//         </section>

//         {/* ====================== TESTIMONIALS SECTION ====================== */}
//         <section
//           className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
//         >
//           <div className="max-w-7xl mx-auto">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//               className="text-center mb-16"
//             >
//               <h2
//                 className={`text-5xl md:text-6xl font-bold mb-4 ${headingClass}`}
//               >
//                 TESTIMONIALS
//               </h2>
//               <p className={`text-2xl font-medium ${accentClass}`}>
//                 Real Results, Real Client Experiences.
//               </p>
//               <p className={`mt-6 text-lg max-w-3xl mx-auto ${bodyClass}`}>
//                 We focus on performance, transparency, and long-term
//                 partnerships.
//               </p>
//             </motion.div>
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 {
//                   name: "Swadesh Jyoti",
//                   text: "A reliable digital marketing partner. AI Knots understands business needs and works with clear communication.",
//                 },
//                 {
//                   name: "Amina",
//                   text: "Working with AI Knots has been a great decision. Their team understands our brand and consistently helps us reach more customers.",
//                 },
//                 {
//                   name: "Bharat e-Filing",
//                   text: "AI Knots has helped us improve our digital visibility and attract more clients. Practical and result-focused.",
//                 },
//               ].map((testimonial, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   variants={fadeInUp}
//                   className={`p-8 rounded-3xl h-full flex flex-col ${isDark ? "bg-gray-900 border border-gray-800" : "bg-white shadow-lg border border-gray-100"}`}
//                 >
//                   <div className="flex gap-1 text-2xl text-yellow-400 mb-6">
//                     ★★★★★
//                   </div>
//                   <p className={`flex-1 leading-relaxed mb-8 ${bodyClass}`}>
//                     "{testimonial.text}"
//                   </p>
//                   <p className={`font-semibold text-lg ${headingClass}`}>
//                     {testimonial.name}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ====================== WHY CHOOSE US ====================== */}
//         <section
//           className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
//         >
//           <div className="max-w-7xl mx-auto">
//             <motion.h2
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//               className={`text-5xl md:text-6xl font-bold text-center mb-16 ${headingClass}`}
//             >
//               WHY <span className={accentClass}>CHOOSE US</span>
//             </motion.h2>
//             <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center">
//               {[
//                 {
//                   icon: Users,
//                   title: "Innovative Digital Solutions",
//                   desc: "Empowering businesses with cutting-edge, scalable, and result-driven technology solutions built for the future.",
//                 },
//                 {
//                   icon: Briefcase,
//                   title: "Enterprise Expertise",
//                   desc: "Extensive experience delivering secure, high-performance solutions across BFSI, retail, government, and PSU sectors.",
//                 },
//                 {
//                   icon: HardDrive,
//                   title: "Reliable Support & Growth",
//                   desc: "From development to maintenance, we ensure seamless performance and long-term success.",
//                 },
//               ].map((item, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   variants={fadeInUp}
//                   className={`p-10 rounded-3xl border transition-all ${isDark ? "bg-gray-900 border-gray-800 hover:border-red-500/30" : "bg-white border-gray-200 shadow-md hover:shadow-lg"}`}
//                 >
//                   <div
//                     className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto ${isDark ? "bg-gray-800" : "bg-red-50"}`}
//                   >
//                     <item.icon className={`w-10 h-10 ${accentClass}`} />
//                   </div>
//                   <h3 className={`text-3xl font-bold mb-5 ${headingClass}`}>
//                     {item.title}
//                   </h3>
//                   <p
//                     className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
//                   >
//                     {item.desc}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ====================== LET'S DISCUSS YOUR PROJECT ====================== */}
//         <section
//           className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
//         >
//           <div className="max-w-7xl mx-auto">
//             <div className="grid lg:grid-cols-2 gap-16 items-start">
//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeInUp}
//               >
//                 <h2
//                   className={`text-5xl md:text-6xl font-bold mb-3 ${headingClass}`}
//                 >
//                   Let's Discuss Your Project
//                 </h2>
//                 <p className={`text-xl mb-10 ${bodyClass}`}>
//                   Tell us about your requirements. Our team will get back to you
//                   shortly.
//                 </p>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Your Name"
//                       required
//                       disabled={loading}
//                       className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
//                     />
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="Your Email"
//                       required
//                       disabled={loading}
//                       className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
//                     />
//                   </div>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Mobile Number"
//                     required
//                     disabled={loading}
//                     className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
//                   />
//                   <div className="relative">
//                     <select
//                       name="category"
//                       value={formData.category}
//                       onChange={handleChange}
//                       required
//                       disabled={loading}
//                       className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors appearance-none ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
//                     >
//                       <option value="">Select Category</option>
//                       <option value="SEO">SEO</option>
//                       <option value="BPO">BPO</option>
//                       <option value="Software Developer">
//                         Software Developer
//                       </option>
//                       <option value="Digital Marketing">
//                         Digital Marketing
//                       </option>
//                       <option value="Web Development">Web Development</option>
//                       <option value="Other">Other</option>
//                     </select>

//                     {/* Dropdown Arrow */}
//                     <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-gray-400">
//                       ▼
//                     </div>
//                   </div>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={5}
//                     placeholder="Tell us about your project..."
//                     required
//                     disabled={loading}
//                     className={`w-full px-6 py-4 rounded-3xl border focus:outline-none focus:border-red-500 transition-colors resize-y ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
//                   />
//                   <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className={`flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-5 rounded-2xl transition-all text-lg ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
//                     >
//                       {loading ? "Sending..." : "Submit Inquiry"}
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() =>
//                         window.open("https://wa.me/917869636070", "_blank")
//                       }
//                       className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-5 rounded-2xl transition-all text-lg flex items-center justify-center gap-3"
//                     >
//                       Chat on WhatsApp
//                     </button>
//                   </div>
//                 </form>
//               </motion.div>

//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeInUp}
//                 className="space-y-8"
//               >
//                 <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 h-[420px]">
//                   <iframe
//                     title="AI Knots Solution - Full Location"
//                     src="https://www.google.com/maps?q=103,+Goyal+Vihar,+Plot+No.31-C,+Zone-II,+M.P.+Nagar,+Bhopal,+Madhya+Pradesh+462011,+India&output=embed"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                   />
//                 </div>
//                 <div
//                   className={`p-8 rounded-3xl ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
//                 >
//                   <h3 className={`text-2xl font-semibold mb-4 ${headingClass}`}>
//                     AI Knots Solutions
//                   </h3>
//                   <p className={`leading-relaxed ${bodyClass}`}>
//                     103, Goyal Vihar,
//                     <br />
//                     Plot No 31-C, Zone 2,
//                     <br />
//                     M.P. Nagar, Bhopal - 462011
//                     <br />
//                     Madhya Pradesh, India
//                   </p>
//                   <div className="mt-6 space-y-2">
//                     <a
//                       href="tel:+917869636070"
//                       className="block text-red-500 hover:underline"
//                     >
//                       +91 78696 36070
//                     </a>
//                     <a
//                       href="mailto:admin@atlaknots.com"
//                       className="block text-red-500 hover:underline"
//                     >
//                       admin@atlaknots.com
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         <section
//           className={`py-20 px-6 md:px-12 lg:px-24 ${isDark ? "bg-gray-950" : "bg-white"}`}
//         >
//           <div className="max-w-5xl mx-auto text-center">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//             >
//               <h2
//                 className={`text-5xl md:text-6xl font-bold mb-6 ${headingClass}`}
//               >
//                 Explore Our <span className="text-red-500">Portfolio</span>
//               </h2>
//               <p className={`text-xl max-w-2xl mx-auto mb-10 ${bodyClass}`}>
//                 Discover our latest projects in web development, digital
//                 marketing, and IT solutions that have delivered real results for
//                 our clients.
//               </p>

//               <button
//                 onClick={goToPortfolio}
//                 className="group inline-flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-12 py-5 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
//               >
//                 View Complete Portfolio
//                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </motion.div>
//           </div>
//         </section>

//         {/* ====================== FAQ SECTION ====================== */}
//         <section
//           className={`relative py-20 md:py-24 lg:py-28 px-5 sm:px-8 md:px-10 lg:px-16 overflow-hidden rounded-3xl my-12 md:my-16
//           ${isDark ? "bg-gray-950/90 border border-red-900/50" : "bg-white border border-gray-100 shadow-2xl"}`}
//         >
//           <div className="max-w-4xl mx-auto">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//               className="text-center mb-16"
//             >
//               <h2
//                 className={`text-5xl md:text-6xl font-bold mb-4 ${headingClass}`}
//               >
//                 FREQUENTLY ASKED <span className={accentClass}>QUESTIONS</span>
//               </h2>
//               <p className={`text-xl ${bodyClass}`}>
//                 Find quick answers to common questions about our services
//               </p>
//             </motion.div>

//             <div className="space-y-4">
//               {[
//                 {
//                   q: "What services does your IT company provide?",
//                   a: "We offer comprehensive end-to-end IT services including Web & Mobile App Development, Custom Software Development, QA Testing, L2/L3 Support, BPO (Voice, Chat, Email), Digital Marketing (SEO, SMM, PPC, Content), Cloud Solutions, and Professional IT Training programs.",
//                 },
//                 {
//                   q: "Do you work with startups or only large enterprises?",
//                   a: "We work with businesses of all sizes — from startups and SMEs to large enterprises, government projects, and PSUs.",
//                 },
//                 {
//                   q: "How long does it take to complete a project?",
//                   a: "Project timelines depend on scope and complexity. A simple static website takes 3–6 weeks, while a full-scale web/mobile application or complex ERP/CRM project can take 3–8 months.",
//                 },
//                 {
//                   q: "Do you provide ongoing support and maintenance?",
//                   a: "Yes. We provide 24×7 production support, SLA-based Annual Maintenance Contracts (AMC), Application Management Services (AMS), and dedicated support teams.",
//                 },
//                 {
//                   q: "What is the process for starting a project with you?",
//                   a: "It starts with a free consultation call → detailed requirement gathering → proposal with timeline & cost estimate → NDA & agreement → project kickoff with regular sprint reviews and updates.",
//                 },
//                 {
//                   q: "Do you offer free demos or consultations?",
//                   a: "Absolutely! We offer free initial consultations, requirement analysis sessions, and live demos of similar projects we have delivered.",
//                 },
//                 {
//                   q: "Where is your IT company located?",
//                   a: "We are based in Bhopal, Madhya Pradesh (M.P. Nagar Zone 2). We serve clients across India and globally through remote and on-site models.",
//                 },
//                 {
//                   q: "What makes your IT company different from others?",
//                   a: "We focus on long-term partnerships, complete transparency, result-oriented delivery, quality-first approach, and post-delivery support rather than just project completion.",
//                 },
//                 {
//                   q: "Do you sign NDAs and ensure data security?",
//                   a: "Yes. We sign NDAs with every client and follow strict data security protocols, ISO standards, and secure development practices.",
//                 },
//               ].map((faq, index) => (
//                 <FAQItem key={index} question={faq.q} answer={faq.a} />
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ====================== PORTFOLIO CTA SECTION (NEW) ====================== */}

//         {/* ====================== EXCLUSIVE OFFER POPUP ====================== */}
//         <AnimatePresence>
//           {showPopup && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
//               onClick={() => setShowPopup(false)}
//             >
//               <motion.div
//                 initial={{ scale: 0.9, y: 40, opacity: 0 }}
//                 animate={{ scale: 1, y: 0, opacity: 1 }}
//                 exit={{ scale: 0.9, y: 40, opacity: 0 }}
//                 transition={{ duration: 0.3, ease: "easeOut" }}
//                 className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row max-h-[92vh]"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 {/* Left Side - Offer Content */}
//                 <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 p-6 md:p-8 lg:p-10 pb-12 md:pb-16 flex flex-col">
//                   <div className="flex justify-between items-center mb-6">
//                     <div className="bg-red-600 text-white font-bold px-6 py-2 rounded-full text-sm tracking-wider">
//                       LIMITED TIME OFFER
//                     </div>
//                     <button
//                       onClick={() => setShowPopup(false)}
//                       className="text-gray-600 dark:text-gray-400 hover:text-[#abaaaa] transition-colors"
//                     >
//                       <X size={28} />
//                     </button>
//                   </div>

//                   <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 dark:text-white mb-3">
//                     Get up to <span className="text-[#abaaaa]">5% OFF</span>
//                     <br />
//                     on IT Services & Business Solutions
//                   </h2>
//                   <p className="text-base md:text-lg lg:text-xl text-[#abaaaa] font-medium mb-4 md:mb-5">
//                     Grow Your Business with AI KNOTS IT Solution
//                   </p>

//                   <div className="relative flex justify-center my-5">
//                     <img
//                       src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
//                       alt="AI KNOTS IT Services"
//                       className="w-40 md:w-56 lg:w-72 rounded-3xl shadow-2xl object-cover"
//                     />

//                     <div className="absolute -top-5 -left-5 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 text-center">
//                       <p className="text-[#abaaaa] font-semibold text-sm">
//                         ★ Top Rated
//                       </p>
//                       <p className="font-bold text-gray-900 dark:text-white text-xs mt-1">
//                         AI KNOTS IT Solution
//                       </p>
//                     </div>

//                     <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 text-center">
//                       <p className="text-[#abaaaa] font-bold text-sm">
//                         Bhopal Based
//                       </p>
//                       <p className="font-semibold text-gray-900 dark:text-white text-xs mt-1">
//                         Pan India Delivery
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-auto grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700 dark:text-gray-300">
//                     <div className="flex items-center gap-2">
//                       <CheckCircle className="w-5 h-5 text-green-600" /> Web &
//                       Mobile App
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <CheckCircle className="w-5 h-5 text-green-600" /> Digital
//                       Marketing
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <CheckCircle className="w-5 h-5 text-green-600" /> 24×7
//                       Support
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <CheckCircle className="w-5 h-5 text-green-600" /> 100+
//                       Projects Delivered
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right Side - Form */}
//                 <div className="w-full md:w-1/2 bg-white dark:bg-gray-900 p-6 md:p-8 lg:p-10 pb-12 md:pb-16 flex flex-col">

//   {/* Close Button */}
//   <div className="flex justify-between items-center mb-6 md:hidden">
//     <div></div>
//     <button
//       onClick={() => setShowPopup(false)}
//       className="text-gray-600 dark:text-gray-400 hover:text-[#abaaaa] transition-colors"
//     >
//       <X size={28} />
//     </button>
//   </div>

//   {/* Heading */}
//   <div className="text-center mb-8">
//     <h3 className="text-[#abaaaa] dark:text-red-500 text-lg md:text-xl lg:text-2xl font-bold">
//       Book Your FREE IT Consultation Today
//     </h3>
//     <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">
//       Get expert advice • No obligation • Quick Response
//     </p>
//   </div>

//   <form onSubmit={handleSubmit} className="space-y-5 flex-1">

//     <input
//       type="text"
//       name="name"
//       value={formData.name}
//       onChange={handleChange}
//       placeholder="Full Name *"
//       required
//       disabled={loading}
//       className="w-full px-5 py-3.5 rounded-2xl
//                  border border-gray-300 dark:border-gray-700
//                  bg-gray-50 dark:bg-gray-800
//                  text-gray-900 dark:text-gray-100
//                  placeholder-gray-500 dark:placeholder-gray-400
//                  focus:border-red-500 focus:ring-1 focus:ring-red-500
//                  outline-none transition-all"
//     />

//     <input
//       type="email"
//       name="email"
//       value={formData.email}
//       onChange={handleChange}
//       placeholder="Email ID *"
//       required
//       disabled={loading}
//       className="w-full px-5 py-3.5 rounded-2xl
//                  border border-gray-300 dark:border-gray-700
//                  bg-gray-50 dark:bg-gray-800
//                  text-gray-900 dark:text-gray-100
//                  placeholder-gray-500 dark:placeholder-gray-400
//                  focus:border-red-500 focus:ring-1 focus:ring-red-500
//                  outline-none transition-all"
//     />

//     <input
//       type="tel"
//       name="phone"
//       value={formData.phone}
//       onChange={handleChange}
//       placeholder="Mobile Number *"
//       required
//       disabled={loading}
//       className="w-full px-5 py-3.5 rounded-2xl
//                  border border-gray-300 dark:border-gray-700
//                  bg-gray-50 dark:bg-gray-800
//                  text-gray-900 dark:text-gray-100
//                  placeholder-gray-500 dark:placeholder-gray-400
//                  focus:border-red-500 focus:ring-1 focus:ring-red-500
//                  outline-none transition-all"
//     />

//     <textarea
//       name="message"
//       value={formData.message}
//       onChange={handleChange}
//       rows={3}
//       placeholder="Tell us about your project..."
//       required
//       disabled={loading}
//       className="w-full px-5 py-3.5 rounded-2xl
//                  border border-gray-300 dark:border-gray-700
//                  bg-gray-50 dark:bg-gray-800
//                  text-gray-900 dark:text-gray-100
//                  placeholder-gray-500 dark:placeholder-gray-400
//                  focus:border-red-500 focus:ring-1 focus:ring-red-500
//                  outline-none transition-all resize-none"
//     />

//     <button
//       type="submit"
//       disabled={loading}
//       className="w-full py-4 bg-red-600 hover:bg-red-700 active:bg-red-800
//                  text-white font-semibold rounded-2xl text-lg
//                  transition-all shadow-md mt-4 disabled:opacity-70"
//     >
//       {loading ? "Submitting..." : "Get Free Consultation"}
//     </button>

//     <p className="text-center text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-4">
//       ✅ No spam • 100% Free Consultation • Confidential
//     </p>
//   </form>
// </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </>
//   );
// }
