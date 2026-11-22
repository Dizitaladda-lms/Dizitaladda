import React from "react";
import PublicNavbar from "../../components/PublicNavbar.jsx";
import Footer from "../../components/Footer.jsx";
import CourseCategoryFilters from "../../components/CourseCategoryFilters.jsx";
import SectionHeader from "../../components/SectionHeader";

export const metadata = {
  title: "All Courses & Professional Certifications | DizitalAdda",
  description: "Explore career-focused courses in Digital Marketing, AI, Data Science, and Cyber Security with 100% practical training and placement support.",
};

export default function CoursesCatalogPage() {
  return (
    <>
      <PublicNavbar />
      <main style={{ minHeight: "80vh", padding: "40px 16px 80px", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ marginBottom: "36px" }}>
          <SectionHeader
            align="center"
            label="Programs & Certifications"
            title={<>Explore <span className="highlight">Our Courses</span></>}
            description="Industry-recognized, job-ready certification programs designed and delivered by senior domain experts."
          />
        </div>
        <CourseCategoryFilters />
      </main>
      <Footer />
    </>
  );
}
