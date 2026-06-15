import { createBrowserRouter } from "react-router-dom";

// Layout
import MainLayout from "../Component/Layout";   // Your existing Layout

// Pages / Components
import Home from "../Component/Home";
import About from "../Component/About";
import Service from "../Component/Service";
import Contact from "../Component/Contact";

import FitnessApp from "../Component/Mobile/Fitnessapplanding";
import MobileOnboarding from "../Component/Mobile/Mobilebraing";
import FitnessAppLanding from "../Component/Mobile/Fitnessapplanding";

import Technology from "../Technology/Technology";
import TechNews from "../Technology/TechNews";
import TechnologyDetail from "../Technology/TechnologyDetail";

import RecentWork from "../Component/Recentwork/Recentwork";
import CareerPage from "../Component/Carrer/Carrerpage";
import Gallery from "../Gallery/Gallery";
import Portfolio from "../Component/Portfolio/Portfolio";

import Blog from "../Component/Blog/Blog";
import BlogDetail from "../Component/Blog/BlogDetail";

import DigitalMarketing from "../Component/DigitalMarketing/DigitalMarketing";
import SEO from "../Component/DigitalMarketing/SEO";
import GraphicDesigning from "../Component/Graphic/Graphic";

import SoftwareDevelopment from "../Component/SoftwareDevelopment/SoftwareDevelopment";
import MobileAppDevelopment from "../Component/SoftwareDevelopment/MobileAppDevelopment";
import ERPDevelopment from "../Component/SoftwareDevelopment/ERPDevelopment";
import EcommerceDevelopment from "../Component/SoftwareDevelopment/EcommerceDevelopment";
import CloudSolutions from "../Component/SoftwareDevelopment/CloudSolutions";
import AIServices from "../Component/SoftwareDevelopment/AIServices";

import PaidAdv from "../Component/PaidAdvatisment/PaidAdv";
import LocalMarketing from "../Component/LocalMarketing/LocalMarketing";
import SocialMediaMarketing from "../Component/SoftwareDevelopment/SocialMediaMarketing";

import ContentWritingBranding from "../Component/Design/ContentWritingBranding";
import WebsiteDesignDevelopment from "../Component/Design/WebsiteDesignDevelopment";
import UiUxDesign from "../Component/Design/UiUxDesign";

import PrivacyPolicy from "../Component/PrivacyPolicy/PrivacyPolicy";
import CookiePolicy from "../Component/CookiePolicy/CookiePolicy";
import TermsOfService from "../Component/TermsOfService/TermsOfService";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "service", element: <Service /> },
      { path: "contact", element: <Contact /> },


      // Mobile & Fitness
      { path: "mobile", element: <FitnessApp /> },
      { path: "mobile-onboarding", element: <MobileOnboarding /> },
      { path: "fitness", element: <FitnessAppLanding /> },

      // Technology
      { path: "technology", element: <Technology /> },
      { path: "technews", element: <TechNews /> },
      { path: "technology/:slug", element: <TechnologyDetail /> },

      // Work & Career
      { path: "recentwork", element: <RecentWork /> },
      { path: "careers", element: <CareerPage /> },
      { path: "gallery", element: <Gallery /> },
      { path: "portfolio", element: <Portfolio /> },

      // Blog
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogDetail /> },

      
      // Services
      { path: "digital-marketing", element: <DigitalMarketing /> },
      { path: "seo", element: <SEO /> },
      { path: "graphics", element: <GraphicDesigning /> },
      { path: "graphicdesign", element: <GraphicDesigning /> },

      { path: "software", element: <SoftwareDevelopment /> },
      { path: "mobiledevelopment", element: <MobileAppDevelopment /> },
      { path: "erpdevelopment", element: <ERPDevelopment /> },
      { path: "ecommercedevelopment", element: <EcommerceDevelopment /> },
      { path: "cloudsolutions", element: <CloudSolutions /> },
      { path: "ai-mlservice", element: <AIServices /> },

      { path: "paidadv", element: <PaidAdv /> },
      { path: "localmarketing", element: <LocalMarketing /> },
      { path: "socialmediamarketing", element: <SocialMediaMarketing /> },

      { path: "contentwritingbranding", element: <ContentWritingBranding /> },
      { path: "websitedesigndevelopment", element: <WebsiteDesignDevelopment /> },
      { path: "uidesign", element: <UiUxDesign /> },

      // Legal Pages
      { path: "privacypolicy", element: <PrivacyPolicy /> },
      { path: "cookiepolicy", element: <CookiePolicy /> },
      { path: "termsofservice", element: <TermsOfService /> },
    ],
  },
]);

// For Sitemap / SEO
export const routeList = [
  "/",
  "/about",
  "/service",
  "/contact",
  "/technology",
  "/technews",
  "/careers",
  "/recentwork",
  "/portfolio",
  "/gallery",
  "/blog",
  "/digital-marketing",
  "/seo",
  "/graphics",
  "/software",
  "/mobiledevelopment",
  "/erpdevelopment",
  "/ecommercedevelopment",
  "/cloudsolutions",
  "/ai-mlservice",
  "/socialmediamarketing",
  "/websitedesigndevelopment",
  "/uidesign",
  "/privacypolicy",
  "/termsofservice",
  // Add more dynamic routes if needed
];