// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
// import ATLAknots from "./Mobile/img/ITLogo.png";
// import ATLAknots2 from "../../src/assets/Images/logoimage2.PNG";

// import { useTheme } from "../context/ThemeContext.jsx";

// const navItems = [
//   { name: "Home", path: "/" },
//   {
//     name: "About",
//     path: "/about",q

//   },
//   { name: "Recent Work", path: "/recentwork" },
//   {
//     name: "Service",path: "/software",

//     hasDropdown: true,
//     dropdownItems: [
//       {
//         name: "Digital Marketing",
//         path: "/digital-marketing",
//         hasDropdown: true,
//         dropdownItems: [
//           { name: "SEO Services", path: "/seo" },
//           { name: "Social Media Marketing", path: "/socialmediamarketing" },
//           { name: "Paid Advertisement", path: "/paidadv" },
//           { name: "Graphic design", path: "/graphicdesign" },
//           { name: "Local Marketing", path: "/localmarketing" },
//         ],
//       },
//       {
//         name: "Development",
//         path: "/software",
//         hasDropdown: true,
//         dropdownItems: [
//           { name: "Software development", path: "/software" },
//           { name: "Mobile App development", path: "/mobiledevelopment" },
//           { name: "E-commerce", path: "/ecommercedevelopment" },
//           { name: "Custom ERP Software", path: "/erpdevelopment" },
//           { name: "Cloud Services", path: "/cloudsolutions" },
//           { name: "AI & Machine Learning", path: "/ai-mlservice" },
//         ],
//       },
//       {
//         name: "Design",
//         path: "/graphics",
//         hasDropdown: true,
//         dropdownItems: [
//           { name: "UI/UX Design", path: "/uidesign" },
//           {
//             name: "Web Design & Development",
//             path: "/websitedesigndevelopment",
//           },
//           { name: "Branding", path: "/contentwritingbranding" },
//         ],
//       },
//     ],
//   },
//   { name: "Blog", path: "/blog",

//    },
//   // { name: "Careers", path: "/careers" },
//   { name: "AI Technology", path: "/technology" },
//   { name: "Tech News", path: "/technews" },
//   { name: "Contact", path: "/contact",
//      hasDropdown: true,
//     dropdownItems: [
//       { name: "Careers", path: "/careers" },
//       { name: "Gallery", path: "/gallery" },
//     ],
//    },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [openSubDropdown, setOpenSubDropdown] = useState(null);
//   const { isDark, toggleTheme } = useTheme();

//   useEffect(() => {
//     if (!isOpen) return;

//     const timerId = setTimeout(() => {
//       setIsOpen(false);
//       setOpenDropdown(null);
//       setOpenSubDropdown(null);
//     }, 10000);

//     return () => clearTimeout(timerId);
//   }, [isOpen]);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const closeAll = () => {
//     setIsOpen(false);
//     setOpenDropdown(null);
//     setOpenSubDropdown(null);
//   };

//   return (
//     <nav
//       className={`
//         sticky top-0 z-50 border-b transition-all duration-300
//         ${
//           isDark
//             ? "bg-black/90 border-gray-800"
//             : "bg-white/95 border-gray-200 shadow-sm"
//         }
//       `}
//     >
//       <div className="max-w-7xl mx-auto px-5">
//         <div className="flex justify-between items-center h-20">
//           {/* LOGO */}
//           <NavLink to="/" onClick={closeAll}>
//             <img
//               src={isDark ? ATLAknots : ATLAknots2}
//               alt="ATLAKnots Logo"
//               className="h-12 w-auto md:h-12 lg:h-18 object-contain"
//             />
//           </NavLink>

//           {/* DESKTOP MENU */}
//           <div className="hidden md:flex items-center gap-1">
//             {navItems.map((item) => (
//               <div key={item.name} className="relative group">
//                 <NavLink
//                   to={item.path}
//                   onClick={item.name === "Home" ? undefined : undefined} // Removed animation effect for Home
//                   className={`
//                     px-4 py-5 flex items-center gap-1.5 transition-colors duration-150
//                     ${
//                       isDark
//                         ? "text-gray-200 hover:text-red-400"
//                         : "text-gray-700 hover:text-blue-600 font-medium"
//                     }
//                   `}
//                 >
//                   {item.name}
//                   {item.hasDropdown && (
//                     <ChevronDown
//                       size={16}
//                       className={`transition-transform duration-200
//                         ${isDark ? "group-hover:rotate-180" : "group-hover:rotate-180 text-blue-600"}`}
//                     />
//                   )}
//                 </NavLink>

//                 {/* FIRST LEVEL DROPDOWN */}
//                 {item.hasDropdown && (
//                   <div
//                     className={`
//                       absolute left-0 top-full pt-2 w-56
//                       border rounded-lg shadow-xl transition-all duration-200 ease-out
//                       opacity-0 scale-95 pointer-events-none
//                       group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
//                       ${
//                         isDark
//                           ? "bg-black/95 border-gray-700"
//                           : "bg-white border-gray-200 shadow-lg"
//                       }
//                     `}
//                   >
//                     {item.dropdownItems.map((sub) => (
//                       <div key={sub.name} className="relative group/sub">
//                         <NavLink
//                           to={sub.path}
//                           className={`
//                             flex justify-between items-center px-4 py-2.5
//                             transition-colors duration-150
//                             ${
//                               isDark
//                                 ? "text-gray-200 hover:bg-red-900/40"
//                                 : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
//                             }
//                           `}
//                         >
//                           {sub.name}
//                           {sub.hasDropdown && (
//                             <ChevronDown
//                               size={14}
//                               className={`transition-transform duration-200
//                                 ${isDark ? "rotate-[-90deg] group-hover/sub:rotate-[-270deg]" : "rotate-[-90deg] group-hover/sub:rotate-[-270deg] text-blue-600"}`}
//                             />
//                           )}
//                         </NavLink>

//                         {/* SECOND LEVEL DROPDOWN */}
//                         {sub.hasDropdown && (
//                           <div
//                             className={`
//                               absolute left-full top-0 ml-1 w-52 border rounded-lg shadow-xl
//                               transition-all duration-200 ease-out
//                               opacity-0 scale-95 pointer-events-none
//                               group-hover/sub:opacity-100 group-hover/sub:scale-100 group-hover/sub:pointer-events-auto
//                               ${
//                                 isDark
//                                   ? "bg-black/95 border-gray-700"
//                                   : "bg-white border-gray-200"
//                               }
//                             `}
//                           >
//                             {sub.dropdownItems.map((child) => (
//                               <NavLink
//                                 key={child.path}
//                                 to={child.path}
//                                 className={`
//                                   block px-4 py-2.5 transition-colors duration-150
//                                   ${
//                                     isDark
//                                       ? "text-gray-200 hover:bg-red-900/40"
//                                       : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
//                                   }
//                                 `}
//                               >
//                                 {child.name}
//                               </NavLink>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="flex items-center gap-3">
//             {/* Theme Toggle */}
//             <button
//               onClick={toggleTheme}
//               className={`
//                 p-2 rounded-full transition-all duration-150
//                 ${
//                   isDark
//                     ? "text-gray-200 hover:text-red-400 hover:bg-gray-800"
//                     : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
//                 }
//               `}
//               title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
//             >
//               {isDark ? <Sun size={22} /> : <Moon size={22} />}
//             </button>

//             {/* MOBILE BUTTON */}
//             <div className="md:hidden">
//               <button
//                 onClick={toggleMenu}
//                 className={isDark ? "text-gray-200" : "text-gray-700"}
//               >
//                 {isOpen ? <X size={28} /> : <Menu size={28} />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {isOpen && (
//         <div
//           className={`
//             md:hidden px-5 py-6 space-y-2 border-t
//             ${isDark ? "bg-black border-gray-800" : "bg-white border-gray-200"}
//           `}
//         >
//           {navItems.map((item) => (
//             <div key={item.name}>
//               <div className="flex justify-between items-center">
//                 <NavLink
//                   to={item.path}
//                   onClick={closeAll}
//                   className={`
//                     py-3 flex-1 transition-colors
//                     ${isDark ? "text-gray-200" : "text-gray-800 font-medium"}
//                   `}
//                 >
//                   {item.name}
//                 </NavLink>

//                 {item.hasDropdown && (
//                   <button
//                     onClick={() =>
//                       setOpenDropdown(
//                         openDropdown === item.name ? null : item.name,
//                       )
//                     }
//                   >
//                     <ChevronDown
//                       size={20}
//                       className={`${isDark ? "text-gray-400" : "text-gray-500"}
//                         ${openDropdown === item.name ? "rotate-180" : ""}`}
//                     />
//                   </button>
//                 )}
//               </div>

//               {/* First Level Mobile Dropdown */}
//               {item.hasDropdown && openDropdown === item.name && (
//                 <div className="pl-6 space-y-1">
//                   {item.dropdownItems.map((sub) => (
//                     <div key={sub.name}>
//                       <div className="flex justify-between items-center">
//                         <NavLink
//                           to={sub.path}
//                           onClick={closeAll}
//                           className={`
//                             py-2.5 flex-1 transition-colors
//                             ${isDark ? "text-gray-300" : "text-gray-700"}
//                           `}
//                         >
//                           {sub.name}
//                         </NavLink>

//                         {sub.hasDropdown && (
//                           <button
//                             onClick={() =>
//                               setOpenSubDropdown(
//                                 openSubDropdown === sub.name ? null : sub.name,
//                               )
//                             }
//                           >
//                             <ChevronDown
//                               size={18}
//                               className={`${isDark ? "text-gray-400" : "text-gray-500"}
//                                 ${openSubDropdown === sub.name ? "rotate-180" : ""}`}
//                             />
//                           </button>
//                         )}
//                       </div>

//                       {/* Second Level Mobile */}
//                       {sub.hasDropdown && openSubDropdown === sub.name && (
//                         <div className="pl-6">
//                           {sub.dropdownItems.map((child) => (
//                             <NavLink
//                               key={child.path}
//                               to={child.path}
//                               onClick={closeAll}
//                               className={`
//                                 block py-2 text-sm transition-colors
//                                 ${isDark ? "text-gray-400" : "text-gray-600"}
//                               `}
//                             >
//                               {child.name}
//                             </NavLink>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
// import ATLAknots from "./Mobile/img/ITLogo.png";
// import ATLAknots2 from "../../src/assets/Images/logoimage2.PNG";

// import { useTheme } from "../context/ThemeContext.jsx";

// const navItems = [
//   { name: "Home", path: "/" },
//   { name: "About", path: "/about" },
//   { name: "Recent Work", path: "/recentwork" },
//   {
//     name: "Service",
//     path: "/software",
//     hasDropdown: true,
//     dropdownItems: [
//       {
//         name: "Digital Marketing",
//         path: "/digital-marketing",
//         hasDropdown: true,
//         dropdownItems: [
//           { name: "SEO Services", path: "/seo" },
//           { name: "Social Media Marketing", path: "/socialmediamarketing" },
//           { name: "Paid Advertisement", path: "/paidadv" },
//           { name: "Graphic design", path: "/graphicdesign" },
//           { name: "Local Marketing", path: "/localmarketing" },
//         ],
//       },
//       {
//         name: "Development",
//         path: "/software",
//         hasDropdown: true,
//         dropdownItems: [
//           { name: "Software development", path: "/software" },
//           { name: "Mobile App development", path: "/mobiledevelopment" },
//           { name: "E-commerce", path: "/ecommercedevelopment" },
//           { name: "Custom ERP Software", path: "/erpdevelopment" },
//           { name: "Cloud Services", path: "/cloudsolutions" },
//           { name: "AI & Machine Learning", path: "/ai-mlservice" },
//         ],
//       },
//       {
//         name: "Design",
//         path: "/graphics",
//         hasDropdown: true,
//         dropdownItems: [
//           { name: "UI/UX Design", path: "/uidesign" },
//           { name: "Web Design & Development", path: "/websitedesigndevelopment" },
//           { name: "Branding", path: "/contentwritingbranding" },
//         ],
//       },
//     ],
//   },
//   { name: "Blog", path: "/blog" },
//   { name: "AI Technology", path: "/technology" },
//   { name: "Tech News", path: "/technews" },
//   {
//     name: "Contact",
//     path: "/contact",
//     hasDropdown: true,
//     dropdownItems: [
//       { name: "Careers", path: "/careers" },
//       { name: "Gallery", path: "/gallery" },
//     ],
//   },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [openSubDropdown, setOpenSubDropdown] = useState(null);
//   const { isDark, toggleTheme } = useTheme();

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const closeAll = () => {
//     setIsOpen(false);
//     setOpenDropdown(null);
//     setOpenSubDropdown(null);
//   };

//   return (
//     <nav
//       className={`
//         sticky top-0 z-50 border-b transition-all duration-300
//         ${isDark ? "bg-black/90 border-gray-800" : "bg-white/95 border-gray-200 shadow-sm"}
//       `}
//     >
//       <div className="max-w-7xl mx-auto px-5">
//         <div className="flex justify-between items-center h-20">
//           {/* LOGO */}
//           <NavLink to="/" onClick={closeAll}>
//             <img
//               src={isDark ? ATLAknots : ATLAknots2}
//               alt="ATLAKnots Logo"
//               className="h-12 w-auto md:h-12 lg:h-18 object-contain"
//             />
//           </NavLink>

//           {/* DESKTOP MENU */}
//           <div className="hidden md:flex items-center gap-1">
//             {navItems.map((item) => (
//               <div key={item.name} className="relative group">
//                 <NavLink
//                   to={item.path}
//                   className={`
//                     px-4 py-5 flex items-center gap-1.5 transition-colors duration-150
//                     ${isDark ? "text-gray-200 hover:text-red-400" : "text-gray-700 hover:text-blue-600 font-medium"}
//                   `}
//                 >
//                   {item.name}
//                   {item.hasDropdown && (
//                     <ChevronDown
//                       size={16}
//                       className={`transition-transform duration-200
//                         ${isDark ? "group-hover:rotate-180" : "group-hover:rotate-180 text-blue-600"}`}
//                     />
//                   )}
//                 </NavLink>

//                 {/* First Level Dropdown */}
//                 {item.hasDropdown && (
//                   <div
//                     className={`
//                       absolute left-0 top-full pt-2 w-56 border rounded-lg shadow-xl
//                       opacity-0 scale-95 pointer-events-none group-hover:opacity-100
//                       group-hover:scale-100 group-hover:pointer-events-auto transition-all
//                       ${isDark ? "bg-black/95 border-gray-700" : "bg-white border-gray-200 shadow-lg"}
//                     `}
//                   >
//                     {item.dropdownItems.map((sub) => (
//                       <div key={sub.name} className="relative group/sub">
//                         <NavLink
//                           to={sub.path}
//                           className={`
//                             flex justify-between items-center px-4 py-2.5 transition-colors
//                             ${isDark ? "text-gray-200 hover:bg-red-900/40" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}
//                           `}
//                         >
//                           {sub.name}
//                           {sub.hasDropdown && (
//                             <ChevronDown
//                               size={14}
//                               className={`transition-transform duration-200
//                                 ${isDark ? "rotate-[-90deg] group-hover/sub:rotate-[-270deg]" : "rotate-[-90deg] group-hover/sub:rotate-[-270deg] text-blue-600"}`}
//                             />
//                           )}
//                         </NavLink>

//                         {/* Second Level Dropdown */}
//                         {sub.hasDropdown && (
//                           <div
//                             className={`
//                               absolute left-full top-0 ml-1 w-52 border rounded-lg shadow-xl
//                               opacity-0 scale-95 pointer-events-none
//                               group-hover/sub:opacity-100 group-hover/sub:scale-100
//                               group-hover/sub:pointer-events-auto transition-all
//                               ${isDark ? "bg-black/95 border-gray-700" : "bg-white border-gray-200"}
//                             `}
//                           >
//                             {sub.dropdownItems.map((child) => (
//                               <NavLink
//                                 key={child.path}
//                                 to={child.path}
//                                 className={`
//                                   block px-4 py-2.5 transition-colors
//                                   ${isDark ? "text-gray-200 hover:bg-red-900/40" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}
//                                 `}
//                               >
//                                 {child.name}
//                               </NavLink>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="flex items-center gap-3">
//             {/* Theme Toggle */}
//             <button
//               onClick={toggleTheme}
//               className={`
//                 p-2 rounded-full transition-all duration-150
//                 ${isDark ? "text-gray-200 hover:text-red-400 hover:bg-gray-800" : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"}
//               `}
//               title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
//             >
//               {isDark ? <Sun size={22} /> : <Moon size={22} />}
//             </button>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden">
//               <button onClick={toggleMenu} className={isDark ? "text-gray-200" : "text-gray-700"}>
//                 {isOpen ? <X size={28} /> : <Menu size={28} />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ==================== MOBILE MENU ==================== */}
//       {isOpen && (
//         <div
//           className={`md:hidden px-5 py-6 space-y-2 border-t ${
//             isDark ? "bg-black border-gray-800" : "bg-white border-gray-200"
//           }`}
//         >
//           {navItems.map((item) => (
//             <div key={item.name} className="border-b border-gray-700/30 last:border-none pb-3 last:pb-0">
//               <div className="flex justify-between items-center">
//                 <NavLink
//                   to={item.path}
//                   onClick={(e) => {
//                     if (item.hasDropdown) {
//                       e.preventDefault();
//                     } else {
//                       closeAll();
//                     }
//                   }}
//                   className={`py-3 flex-1 transition-colors ${
//                     isDark ? "text-gray-200" : "text-gray-800 font-medium"
//                   }`}
//                 >
//                   {item.name}
//                 </NavLink>

//                 {item.hasDropdown && (
//                   <button
//                     onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
//                   >
//                     <ChevronDown
//                       size={20}
//                       className={`transition-transform ${isDark ? "text-gray-400" : "text-gray-500"}
//                         ${openDropdown === item.name ? "rotate-180" : ""}`}
//                     />
//                   </button>
//                 )}
//               </div>

//               {/* First Level Dropdown */}
//               {item.hasDropdown && openDropdown === item.name && (
//                 <div className="pl-5 mt-2 space-y-2">
//                   {item.dropdownItems.map((sub) => (
//                     <div key={sub.name}>
//                       <div className="flex justify-between items-center">
//                         <NavLink
//                           to={sub.path}
//                           onClick={(e) => {
//                             if (sub.hasDropdown) {
//                               e.preventDefault();
//                             } else {
//                               closeAll();
//                             }
//                           }}
//                           className={`py-2.5 flex-1 transition-colors ${
//                             isDark ? "text-gray-300" : "text-gray-700"
//                           }`}
//                         >
//                           {sub.name}
//                         </NavLink>

//                         {sub.hasDropdown && (
//                           <button
//                             onClick={() =>
//                               setOpenSubDropdown(openSubDropdown === sub.name ? null : sub.name)
//                             }
//                           >
//                             <ChevronDown
//                               size={18}
//                               className={`transition-transform ${isDark ? "text-gray-400" : "text-gray-500"}
//                                 ${openSubDropdown === sub.name ? "rotate-180" : ""}`}
//                             />
//                           </button>
//                         )}
//                       </div>

//                       {/* Second Level Dropdown (SEO, etc.) */}
//                       {sub.hasDropdown && openSubDropdown === sub.name && (
//                         <div className="pl-5 mt-2 space-y-1">
//                           {sub.dropdownItems.map((child) => (
//                             <NavLink
//                               key={child.path}
//                               to={child.path}
//                               onClick={closeAll}
//                               className={`block py-2 text-sm transition-colors ${
//                                 isDark ? "text-gray-400" : "text-gray-600"
//                               }`}
//                             >
//                               {child.name}
//                             </NavLink>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import ATLAknots from "./Mobile/img/logoimage5.png";
import ATLAknots2 from "../../src/assets/Images/ITLogo.png";

import { useTheme } from "../context/ThemeContext.jsx";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Recent Work", path: "/recentwork" },
  {
    name: "Service",
    path: "/software",
    hasDropdown: true,
    dropdownItems: [
      // {
      //   name: "Digital Marketing",
      //   path: "/digital-marketing",
      //   hasDropdown: true,
      //   dropdownItems: [
      //     { name: "SEO Services", path: "/seo" },
      //     { name: "Social Media Marketing", path: "/socialmediamarketing" },
      //     { name: "Paid Advertisement", path: "/paidadv" },
      //     { name: "Graphic design", path: "/graphicdesign" },
      //     { name: "Local Marketing", path: "/localmarketing" },
      //   ],
      // },
      {
        name: "Design",
        path: "/graphics",
        hasDropdown: true,
        dropdownItems: [
          { name: "UI/UX Design", path: "/uidesign" },
          {
            name: "Web Design & Development",
            path: "/websitedesigndevelopment",
          },
          { name: "Branding", path: "/contentwritingbranding" },
        ],
      },
      {
        name: "Development",
        path: "/software",
        hasDropdown: true,
        dropdownItems: [
          { name: "Software development", path: "/software" },
          { name: "Mobile App development", path: "/mobiledevelopment" },
          { name: "E-commerce", path: "/ecommercedevelopment" },
          { name: "Custom ERP Software", path: "/erpdevelopment" },
          { name: "Cloud Services", path: "/cloudsolutions" },
          { name: "AI & Machine Learning", path: "/ai-mlservice" },
        ],
      },

      {
        name: "Digital Marketing",
        path: "/digital-marketing",
        hasDropdown: true,
        dropdownItems: [
          { name: "SEO Services", path: "/seo" },
          { name: "Social Media Marketing", path: "/socialmediamarketing" },
          { name: "Paid Advertisement", path: "/paidadv" },
          { name: "Graphic design", path: "/graphicdesign" },
          { name: "Local Marketing", path: "/localmarketing" },
        ],
      },
    ],
  },
  { name: "Blog", path: "/blog" },
  { name: "AI Technology", path: "/technology" },
  { name: "Tech News", path: "/technews" },
  {
    name: "Contact",
    path: "/contact",
    hasDropdown: true,
    dropdownItems: [
      { name: "Careers", path: "/careers" },
      { name: "Gallery", path: "/gallery" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const { isDark, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeAll = () => {
    setIsOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  };

  return (
    <nav
      className={`
        sticky top-0 z-50 border-b transition-all duration-300
        ${isDark ? "bg-black/90 border-gray-800" : "bg-white/95 border-gray-200 shadow-sm"}
      `}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center h-20">
          {/* LOGO */}
          <NavLink to="/" onClick={closeAll}>
            <img
              src={isDark ? ATLAknots : ATLAknots2}
              alt="ATLAKnots Logo"
              className="h-10 md:h-14 lg:h-18 w-auto object-contain"
            />
          </NavLink>
          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <NavLink
                  to={item.path}
                  className={`
                      px-4 py-5 flex items-center gap-1.5 transition-colors duration-150
                      ${isDark ? "text-white hover:text-accent" : "text-primary hover:text-accent font-medium"}
                    `}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 group-hover:rotate-180 ${isDark ? "" : "text-primary"}`}
                    />
                  )}
                </NavLink>

                {/* First Level Dropdown */}
                {item.hasDropdown && (
                  <div
                    className={`
                      absolute left-0 top-full pt-2 w-56 border rounded-lg shadow-xl 
                      opacity-0 scale-95 pointer-events-none group-hover:opacity-100 
                      group-hover:scale-100 group-hover:pointer-events-auto transition-all
                      ${isDark ? "bg-black/95 border-gray-700" : "bg-white border-gray-200 shadow-lg"}
                    `}
                  >
                    {item.dropdownItems.map((sub) => (
                      <div key={sub.name} className="relative group/sub">
                        <NavLink
                          to={sub.path}
                          className={`
                            flex justify-between items-center px-4 py-2.5 transition-colors
                            ${isDark ? "text-gray-200 hover:bg-red-900/40" : "text-gray-700 hover:bg-muted hover:text-accent"}
                          `}
                        >
                          {sub.name}
                          {sub.hasDropdown && (
                            <ChevronDown
                              size={14}
                              className={`transition-transform duration-200 rotate-[-90deg] group-hover/sub:rotate-[-270deg] ${isDark ? "" : "text-primary"}`}
                            />
                          )}
                        </NavLink>

                        {/* Second Level Dropdown */}
                        {sub.hasDropdown && (
                          <div
                            className={`
                              absolute left-full top-0 ml-1 w-52 border rounded-lg shadow-xl
                              opacity-0 scale-95 pointer-events-none 
                              group-hover/sub:opacity-100 group-hover/sub:scale-100 
                              group-hover/sub:pointer-events-auto transition-all
                              ${isDark ? "bg-black/95 border-gray-700" : "bg-white border-gray-200"}
                            `}
                          >
                            {sub.dropdownItems.map((child) => (
                              <NavLink
                                key={child.path}
                                to={child.path}
                                className={`
                                  block px-4 py-2.5 transition-colors
                                  ${isDark ? "text-gray-200 hover:bg-red-900/40" : "text-gray-700 hover:bg-muted hover:text-accent"}
                                `}
                              >
                                {child.name}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`
                p-2 rounded-full transition-all duration-150
                ${isDark ? "text-white hover:text-accent hover:bg-gray-800" : "text-primary hover:text-accent hover:bg-gray-100"}
              `}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun size={22} /> : <Moon size={22} />}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className={isDark ? "text-gray-200" : "text-gray-700"}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== MOBILE MENU ==================== */}
      {isOpen && (
        <div
          className={`md:hidden px-5 py-6 space-y-2 border-t ${
            isDark ? "bg-black border-gray-800" : "bg-white border-gray-200"
          }`}
        >
          {navItems.map((item) => (
            <div
              key={item.name}
              className="border-b border-gray-700/30 last:border-none pb-3 last:pb-0"
            >
              <div className="flex justify-between items-center">
                <NavLink
                  to={item.path}
                  onClick={(e) => {
                    if (item.hasDropdown) {
                      e.preventDefault();
                    } else {
                      closeAll();
                    }
                  }}
                  className={`py-3 flex-1 transition-colors ${isDark ? "text-gray-200" : "text-primary font-medium"}`}
                >
                  {item.name}
                </NavLink>

                {item.hasDropdown && (
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.name ? null : item.name,
                      )
                    }
                  >
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${isDark ? "text-gray-400" : "text-primary"} ${openDropdown === item.name ? "rotate-180" : ""}`}
                    />
                  </button>
                )}
              </div>

              {/* First Level Dropdown */}
              {item.hasDropdown && openDropdown === item.name && (
                <div className="pl-5 mt-2 space-y-2">
                  {item.dropdownItems.map((sub) => (
                    <div key={sub.name}>
                      <div className="flex justify-between items-center">
                        <NavLink
                          to={sub.path}
                          onClick={(e) => {
                            if (sub.hasDropdown) {
                              e.preventDefault();
                            } else {
                              closeAll();
                            }
                          }}
                          className={`py-2.5 flex-1 transition-colors ${isDark ? "text-gray-300" : "text-primary"}`}
                        >
                          {sub.name}
                        </NavLink>

                        {sub.hasDropdown && (
                          <button
                            onClick={() =>
                              setOpenSubDropdown(
                                openSubDropdown === sub.name ? null : sub.name,
                              )
                            }
                          >
                            <ChevronDown
                              size={18}
                              className={`transition-transform ${isDark ? "text-gray-400" : "text-primary"} ${openSubDropdown === sub.name ? "rotate-180" : ""}`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Second Level Dropdown (SEO, etc.) */}
                      {sub.hasDropdown && openSubDropdown === sub.name && (
                        <div className="pl-5 mt-2 space-y-1">
                          {sub.dropdownItems.map((child) => (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              onClick={closeAll}
                              className={`block py-2 text-sm transition-colors ${isDark ? "text-gray-400" : "text-primary"}`}
                            >
                              {child.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
