import React from "react";
import CoursePage from "../../../src/pages/CoursePage.jsx";
import { getCourseBySlug, getAllCourseSlugs } from "../../../src/data/courses.js";

export const dynamic = "force-static";
export const revalidate = 300;

export async function generateStaticParams() {
  const slugs = getAllCourseSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found | DizitalAdda",
      description: "Explore industry-leading career programs at DizitalAdda.",
    };
  }

  return {
    title: `${course.name} Course Training & Certification | DizitalAdda`,
    description: course.tagline,
    openGraph: {
      title: `${course.name} Course | DizitalAdda`,
      description: course.tagline,
      images: [
        {
          url: course.heroImage || "/logo.png",
          width: 1200,
          height: 630,
          alt: course.name,
        },
      ],
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  return <CoursePage slug={slug} />;
}
