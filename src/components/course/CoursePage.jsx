"use client";

import React, { useMemo } from "react";
import { useParams, usePathname } from "next/navigation";
import { getCourseBySlug } from "../../data/courses.js";

// Section Components
import CourseHero from "./CourseHero.jsx";
import RoadmapSection from "./RoadmapSection.jsx";
import TrainerSection from "./TrainerSection.jsx";
import ToolsSection from "./ToolsSection.jsx";
import VideoReviews from "./VideoReviews.jsx";
import PlacedStudents from "./PlacedStudents.jsx";
import CourseFaq from "./CourseFaq.jsx";
import StickyCtaBar from "./StickyCtaBar.jsx";

// Plain CSS (all dz- prefixed, mobile-first)
import "./course.css";

// Existing Site Header & Footer
import PublicNavbar from "../../../components/PublicNavbar.jsx";
import Footer from "../../../components/Footer.jsx";

/**
 * Universal CourseDetailPage Template
 * - Reads :slug from props or route params
 * - Loads course data from src/data/courses.js
 * - Injects SEO Title, Meta Description, Course + FAQPage JSON-LD
 * - Renders sections in the exact specified order
 * - Renders accessible 404 state if slug is invalid
 */
export default function CoursePage({ slug: propSlug, params: propParams }) {
  // Determine slug from props, useParams(), or URL pathname
  const routeParams = useParams();
  const pathname = usePathname();

  const resolvedSlug = useMemo(() => {
    if (propSlug) return propSlug;
    if (propParams?.slug) return Array.isArray(propParams.slug) ? propParams.slug[0] : propParams.slug;
    if (routeParams?.slug) return Array.isArray(routeParams.slug) ? routeParams.slug[0] : routeParams.slug;
    if (typeof window !== "undefined" && pathname) {
      const match = pathname.match(/\/courses\/([^/?#]+)/i);
      if (match && match[1]) return match[1];
    }
    return "data-science-analytics"; // Default demo slug
  }, [propSlug, propParams, routeParams, pathname]);

  const course = getCourseBySlug(resolvedSlug);

  // 404 Not Found State
  if (!course) {
    return (
      <>
        <PublicNavbar />
        <div className="dz-course-page">
          <main className="dz-404-wrap" role="main">
            <div className="dz-section-header dz-center">
              <h1 className="dz-404-title">Course Not Found</h1>
              <div className="dz-title-bar" aria-hidden="true" />
              <p className="dz-404-text">
                We couldn&apos;t find a course matching &ldquo;{resolvedSlug}&rdquo;. Please check the URL or
                explore our complete course catalog below.
              </p>
              <a href="/#courses" className="dz-404-btn">
                Explore All Courses
              </a>
            </div>
          </main>
        </div>
        <Footer />
      </>
    );
  }

  // Schema.org Course JSON-LD
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.tagline,
    provider: {
      "@type": "EducationalOrganization",
      name: "DizitalAdda",
      url: "https://www.dizitaladda.com",
    },
    educationalLevel: course.level,
    timeRequired: course.duration,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: course.mode,
      courseWorkload: course.duration,
    },
  };

  return (
    <>
      {/* 1. Page Meta & Schema.org JSON-LD */}
      <title>{`${course.name} Course Training & Certification | DizitalAdda`}</title>
      <meta name="description" content={course.tagline} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* 2. Site Header */}
      <PublicNavbar />

      <div className="dz-course-page">
        <main role="main">
          {/* 1) HERO SECTION */}
          <CourseHero course={course} />

          {/* 2) MODULES & ROADMAP (Signature Section) */}
          <RoadmapSection modules={course.modules} />

          {/* 3) TRAINER SECTION */}
          <TrainerSection trainers={course.trainers} />

          {/* 4) TOOLS YOU WILL MASTER */}
          <ToolsSection tools={course.tools} />

          {/* 5) STUDENT VIDEO REVIEWS */}
          <VideoReviews reviews={course.reviews} />

          {/* 6) PLACED STUDENTS (Photos Only) */}
          <PlacedStudents placed={course.placed} />

          {/* 7) FAQ ACCORDION */}
          <CourseFaq faqs={course.faqs} />
        </main>

        {/* Mobile Sticky CTA Bar */}
        <StickyCtaBar />
      </div>

      {/* 8) Site Footer */}
      <Footer />
    </>
  );
}
