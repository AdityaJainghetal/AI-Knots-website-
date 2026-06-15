// generate-sitemap.cjs
const fs = require("fs");
const path = require("path");

// ================ CONFIGURATION ================
const BASE_URL = "https://yourwebsite.com";   // ← Yahan apni real domain daal do

const today = new Date().toISOString().split("T")[0];

const routes = [
  { url: "/", changefreq: "weekly", priority: "1.0" },
  { url: "/home", changefreq: "weekly", priority: "0.9" },
  { url: "/about", changefreq: "monthly", priority: "0.9" },
  { url: "/service", changefreq: "weekly", priority: "0.9" },
  { url: "/contact", changefreq: "monthly", priority: "0.85" },

  // Services
  { url: "/digital-marketing", changefreq: "weekly", priority: "0.9" },
  { url: "/seo", changefreq: "weekly", priority: "0.85" },
  { url: "/graphics", changefreq: "monthly", priority: "0.8" },
  { url: "/graphicdesign", changefreq: "monthly", priority: "0.8" },
  { url: "/software", changefreq: "weekly", priority: "0.9" },
  { url: "/mobiledevelopment", changefreq: "weekly", priority: "0.85" },
  { url: "/ecommercedevelopment", changefreq: "weekly", priority: "0.85" },
  { url: "/erpdevelopment", changefreq: "monthly", priority: "0.8" },
  { url: "/cloudsolutions", changefreq: "monthly", priority: "0.8" },
  { url: "/ai-mlservice", changefreq: "weekly", priority: "0.85" },
  { url: "/paidadv", changefreq: "monthly", priority: "0.8" },
  { url: "/localmarketing", changefreq: "monthly", priority: "0.8" },
  { url: "/socialmediamarketing", changefreq: "weekly", priority: "0.85" },
  { url: "/contentwritingbranding", changefreq: "monthly", priority: "0.8" },
  { url: "/uidesign", changefreq: "monthly", priority: "0.8" },
  { url: "/websitedesigndevelopment", changefreq: "monthly", priority: "0.8" },

  // Others
  { url: "/technology", changefreq: "weekly", priority: "0.85" },
  { url: "/technews", changefreq: "daily", priority: "0.75" },
  { url: "/portfolio", changefreq: "weekly", priority: "0.9" },
  { url: "/recentwork", changefreq: "weekly", priority: "0.8" },
  { url: "/gallery", changefreq: "monthly", priority: "0.75" },
  { url: "/blog", changefreq: "weekly", priority: "0.85" },
  { url: "/careers", changefreq: "monthly", priority: "0.75" },

  // Mobile & Landing Pages
  { url: "/mobile", changefreq: "monthly", priority: "0.7" },
  { url: "/mobile-onboarding", changefreq: "monthly", priority: "0.6" },
  { url: "/branding", changefreq: "monthly", priority: "0.7" },
  { url: "/fitness", changefreq: "monthly", priority: "0.7" },

  // Legal Pages
  { url: "/privacypolicy", changefreq: "yearly", priority: "0.5" },
  { url: "/cookiepolicy", changefreq: "yearly", priority: "0.5" },
  { url: "/termsofservice", changefreq: "yearly", priority: "0.5" },
];

// ===============================================

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

routes.forEach(({ url, changefreq, priority }) => {
  xml += `  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
});

xml += "</urlset>";

// Create public folder if not exists
const publicDir = path.join(__dirname, "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate sitemap.xml
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xml);

console.log("✅ Sitemap.xml generated successfully!");
console.log(`📍 Path: ${path.join(publicDir, "sitemap.xml")}`);
console.log(`🌐 Base URL: ${BASE_URL}`);