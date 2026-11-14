"use client";

import { useEffect, useState } from "react";

const courseCategories = [
  { id: "all", label: "All Courses" },
  { id: "digital-marketing", label: "Digital Marketing" },
  { id: "ai-data-science", label: "AI & Data Science" },
  { id: "cyber-security", label: "Cyber Security" },
];

export default function CourseCategoryFilters() {
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const sections = document.querySelectorAll("#courses .category-section[data-course-category]");
    sections.forEach((section) => {
      section.hidden = activeCategory !== "all" && section.dataset.courseCategory !== activeCategory;
    });

    // Let the existing Swiper instances recalculate after a section becomes visible.
    window.dispatchEvent(new Event("resize"));
  }, [activeCategory]);

  return (
    <div className="course-category-filters" role="group" aria-label="Filter courses by category">
      {courseCategories.map((category) => (
        <button
          key={category.id}
          type="button"
          aria-pressed={activeCategory === category.id}
          className={activeCategory === category.id ? "is-active" : ""}
          onClick={() => setActiveCategory(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
