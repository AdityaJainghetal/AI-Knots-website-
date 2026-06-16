import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext";
import {
  Newspaper,
  ExternalLink,
  Clock,
  Cpu,
  Zap,
  Globe,
  ArrowUp,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import DOMPurify from "dompurify";

import {
  fetchTechNews,
  setSelectedCategory,
} from "./techNewsSlice/techNewsSlice.js";

const TechNews = () => {
  const { isDark } = useTheme();
  const dispatch = useDispatch();

  const {
    items: newsItems,
    selectedCategory,
    status,
    error,
  } = useSelector((state) => state.techNews);

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTechNews());
    }
  }, [status, dispatch]);

  // Scroll to top
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

  const categories = [
    "All",
    ...new Set(newsItems.map((item) => item.category)),
  ];

  const filteredNews =
    selectedCategory === "All"
      ? newsItems
      : newsItems.filter((item) => item.category === selectedCategory);

  const getIconForCategory = (category) => {
    const cat = (category || "").toLowerCase();
    if (cat.includes("ai") || cat.includes("artificial intelligence"))
      return <Cpu className="w-5 h-5" />;
    if (cat.includes("hardware")) return <Zap className="w-5 h-5" />;
    if (cat.includes("company") || cat.includes("update"))
      return <Cpu className="w-5 h-5" />;
    if (cat.includes("industry") || cat.includes("news"))
      return <Newspaper className="w-5 h-5" />;
    if (cat.includes("software") || cat.includes("developer"))
      return <Cpu className="w-5 h-5" />;
    return <Globe className="w-5 h-5" />;
  };

  // ====================== THEME CLASSES ======================
  const cardClass = isDark
    ? "bg-gray-900 border border-gray-800 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20"
    : "bg-white border border-gray-200 shadow-lg hover:shadow-2xl";

  const headingClass = isDark ? "text-white" : "text-primary";
  const bodyClass = isDark ? "text-gray-300" : "text-primary-600";
  const accentClass = "text-accent";

  // Sanitize function
  const sanitize = (html) => {
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: [
        "b",
        "i",
        "em",
        "strong",
        "p",
        "br",
        "ul",
        "ol",
        "li",
        "a",
      ],
      ALLOWED_ATTR: ["href", "target", "rel"],
    });
  };

  if (status === "loading") {
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-700
        ${isDark ? "bg-gray-950 text-white" : "bg-gray-50 text-primary"}`}
      >
        {/* ... loading UI unchanged ... */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-4 border-gray-300 border-primary rounded-full animate-spin"></div>
          <div
            className="absolute inset-3 border-4 border-gray-300 border-primary rounded-full animate-spin"
            style={{ animationDuration: "1.5s", animationDirection: "reverse" }}
          ></div>
          <div
            className="absolute inset-6 border-4 border-gray-300 border-primary rounded-full animate-spin"
            style={{ animationDuration: "2s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full animate-pulse shadow-lg"></div>
        </div>
        <div className="mt-8 flex items-center gap-2">
          <Newspaper className="w-5 h-5 text-[#EFE5C8] animate-pulse" />
          <p className={`text-lg ${bodyClass} animate-pulse`}>
            Loading latest tech news...
          </p>
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div
        className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-700
        ${isDark ? "bg-gray-950 text-white" : "bg-gray-50 text-primary"}`}
      >
        <div className="text-xl text-red-500">
          {error || "Something went wrong"}
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Latest Tech News India | Atla IKS</title>
        <meta
          name="description"
          content="Stay updated with latest technology news, AI updates, software trends & IT insights."
        />
        <meta
          name="keywords"
          content="Latest Tech News India	Technology Updates, IT News"
        />
      </Helmet>
      <div
        className={`min-h-screen p-6 md:p-10 relative transition-colors duration-700
      ${isDark ? "bg-gray-950 text-white" : "bg-gray-50 text-primary"}`}
      >
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <Newspaper
                className={`w-10 h-10 ${accentClass}`}
                strokeWidth={2.5}
              />
              <h1
                className={`text-4xl md:text-5xl font-bold tracking-tight ${headingClass}`}
              >
                Tech<span className={accentClass}>News</span>
              </h1>
            </div>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => dispatch(setSelectedCategory(category))}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "btn-accent"
                    : isDark
                      ? "bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-700"
                      : "bg-white text-primary hover:bg-gray-100 border border-gray-300 hover:border-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item) => (
              <div
                key={item.id}
                className={`group rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl ${cardClass}`}
              >
                <div
                  className={`p-5 border-b ${isDark ? "border-gray-800" : "border-gray-200"}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-muted text-accent`}>
                        {getIconForCategory(item.category)}
                      </div>
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider ${accentClass}`}
                      >
                        {item.category}
                      </span>
                    </div>
                    <div
                      className={`flex items-center gap-1 text-xs ${bodyClass}`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      {item.date}
                    </div>
                  </div>
                </div>

                {item.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="p-6">
                  <h2
                    className={`text-xl font-bold mb-3 group-hover:text-accent transition-colors ${headingClass}`}
                  >
                    {item.title}
                  </h2>

                  {/* Safely render description as HTML */}
                  <div
                    className={`text-sm leading-relaxed mb-6 line-clamp-3 ${bodyClass}`}
                    dangerouslySetInnerHTML={{
                      __html: sanitize(item.description || ""),
                    }}
                  />

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 font-medium text-sm transition-colors ${accentClass} hover:text-accent`}
                  >
                    Read more
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className={`text-center text-lg mt-12 ${bodyClass}`}>
              No news found in this category.
            </div>
          )}
        </div>

        {/* Scroll to Top Button */}
       
      </div>
    </>
  );
};

export default TechNews;
