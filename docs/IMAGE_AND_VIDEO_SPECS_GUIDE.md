# DizitalAdda — Image, Video & Cover Page Master Specifications Guide

> **Official Design & Media Reference Guide**  
> Use this document to create, export, and generate images, video covers, and graphics for every section of the DizitalAdda website. Following these exact aspect ratios and resolutions ensures zero cropping, zero stretching, and maximum Google PageSpeed performance (95+ score).

---

## 1. Master Quick Reference Table

| # | Section Name | Asset Type | Aspect Ratio | Exact Dimensions (W × H) | Recommended Format | Destination Folder in `/public` |
|:---:|:---|:---|:---:|:---:|:---:|:---|
| **1** | **Awards & Recognitions** | Stage Ceremony Cards | **4:5** (Portrait) | **1000 × 1250 px** *(or 1200 × 1500)* | `.webp` | `/assets/img/` |
| **2** | **Student Video Testimonials** | Shorts / Reels Video Covers | **9:16** (Vertical) | **1080 × 1920 px** *(Full HD)* | `.webp` / `.jpg` | YouTube / `/public/videos/` |
| **3** | **Student Video Stories** | Video Review Card Posters | **9:14** (Vertical) | **720 × 1120 px** *(or 1080 × 1680)* | `.webp` / `.jpg` | YouTube / `/public/videos/` |
| **4** | **Student Certifications** | Certificate Document Preview | **3:4** / **A4** | **900 × 1170 px** *(or 1200 × 850)* | `.webp` / `.svg` | `/courses/images/certificates/` |
| **5** | **Campus 30s Video Tour** | Campus Tour Video Poster | **16:9** (Widescreen) | **1920 × 1080 px** *(or 1280 × 720)* | `.webp` / `.jpg` | `/images/campus/tour-poster.jpg` |
| **6** | **Campus Bento Gallery (Hero)** | Hero 2×2 Main Photo | **4:3** or **1:1** | **1200 × 900 px** *(or 1200 × 1200)* | `.webp` | `/images/campus/campus1.jpg` |
| **7** | **Campus Bento Gallery (Wide)** | Wide 2×1 Workspace Photo | **16:9** / **2:1** | **1200 × 600 px** *(or 1600 × 800)* | `.webp` | `/images/campus/campus2.jpg` |
| **8** | **Campus Bento Gallery (Normal)** | Square Photos (3 to 4 cards) | **1:1** (Square) | **800 × 800 px** | `.webp` | `/images/campus/campus3..6.jpg` |
| **9** | **Campus CTA Location Card** | Right-side Campus View | **16:10** / **4:3** | **1200 × 800 px** | `.webp` | `/images/campus/` |
| **10** | **Course Categories** | Course Card Thumbnail | **16:9** (Widescreen) | **1280 × 720 px** | `.webp` | `/coursecard/` & `/imagesCards/` |
| **11** | **Industry Trainer Videos** | Trainer Profile Video Cover | **4:5** (Portrait) | **800 × 1000 px** | `.webp` / `.png` | `/courses/images/trainer/` |
| **12** | **Student Project Videos** | Project Session Video Cover | **16:10** (Landscape) | **1280 × 800 px** | `.webp` | `/assets/img/gallery/` |
| **13** | **Placement Showcase** | Placed Student Photo | **4:5** (~4:4.4 Portrait) | **800 × 900 px** *(or 1000 × 1100)* | `.webp` | `/images/placements/` |
| **14** | **Hiring Company Logos** | Corporate Recruiter Logos | **2.4:1** to **3:1** | **240 × 100 px** *(or 300 × 100)* | `.svg` / `.png` *(Transparent)* | `/images/` |
| **15** | **Student Written Reviews** | Student Avatar Photo | **1:1** (Square/Circle) | **200 × 200 px** *(or 400 × 400)* | `.webp` | `/courses/images/Students/` |
| **16** | **Featured In (Media & PR)** | Publication Logos | **Auto / ~4:1** | **240 × 60 px** *(Height 38-42px)* | `.svg` / `.webp` *(Transparent)* | `/assets/img/press/` |
| **17** | **Refer & Earn Section** | Feature Illustration | **1:1** (Square) | **600 × 600 px** | `.svg` / `.webp` | `/static-banner.svg` |
| **18** | **Campus Infrastructure** | Training Rooms / Campus Life | **4:3** (Landscape) | **1200 × 900 px** | `.webp` | `/images/` |
| **19** | **Website Logo** | Primary Header Brand Logo | **~4:1** Horizontal | **500 × 120 px** | `.png` / `.webp` *(Transparent)* | `/logo.png`, `/logo.webp` |

---

## 2. Detailed Section-by-Section Specifications

### Section 1: Awards & Recognitions (`AwardsShowcase`)
- **Card Aspect Ratio**: `4:5` (`aspect-[4/5]`)
- **Recommended Resolution**: `1000 × 1250 px` (or `1200 × 1500 px` for Ultra HD)
- **Framing & Safe Margin**:
  - Top alignment (`object-position: top center`) is used in CSS.
  - **Important**: Position subject faces and heads within the **upper 55%** of the frame.
  - The bottom 45% has a soft dark gradient overlay for the award badge, title, and subtitle.
- **Content**: Dignitaries (e.g., Dr. Kiran Bedi, Ashneer Grover) presenting the trophy/award on stage with the founder.

---

### Section 2: Student Video Testimonials (`StudentTestimonials`)
- **Card Aspect Ratio**: `9:16` (Vertical Full-Portrait)
- **Recommended Resolution**: `1080 × 1920 px`
- **Framing & Safe Margin**:
  - Vertical Reel / Shorts framing.
  - Keep the student's face centered vertically between 25% and 65% from the top.
  - Leave the bottom 15% and top 10% clear of critical text.
- **Content**: Real student speaking about their placement, salary package, or course experience.

---

### Section 3: Student Video Stories — "Hamare students ki apni kahani" (`StudentVideoReviews`)
- **Card Aspect Ratio**: `9:14` (Tall Portrait)
- **Recommended Resolution**: `720 × 1120 px` (or `1080 × 1680 px`)
- **Framing & Safe Margin**:
  - Top-left 80px has a frosted glass pill badge ("Student review").
  - Bottom 80px has a frosted glass bar with the play button ("Watch story" & duration).
  - Subject face should be centered with breathing room above and below.
- **Content**: Student video interview still / high-contrast portrait.

---

### Section 4: Student Certifications Showcase (`CertificatesMarquee`)
- **Card Aspect Ratio**: `3:4` or `3:3.9` (Dual Layered Pair) or standard `1.414:1` (A4 Landscape)
- **Recommended Resolution**:
  - **Portrait (Layered Pair)**: `900 × 1170 px`
  - **Landscape (Standard Certificate)**: `1200 × 850 px`
- **Framing & Safe Margin**:
  - 20px safe margin around certificate border.
  - Gold or purple accreditation seals placed at bottom-right or bottom-left.
- **Content**: Official DizitalAdda, Google, Meta Blueprint, HubSpot, or Semrush certificate document.

---

### Section 5: Inside DizitalAdda — Explore Our Campus (`CampusSection`)

#### A. 30-Second Video Tour Card (`VideoTour`)
- **Aspect Ratio**: `16:9` (Widescreen Landscape)
- **Recommended Resolution**: `1920 × 1080 px` (or `1280 × 720 px`)
- **Framing**: Wide shot of modern classroom, smart interactive screens, or active students. Center of the image holds a pulsing white circular play button.

#### B. Bento Photo Gallery (`BentoGallery`)
- **Hero Photo (2×2 cell)**:
  - **Ratio**: `4:3` or `1:1`
  - **Resolution**: `1200 × 900 px` (Smart air-conditioned classroom with instructor and interactive screen)
- **Wide Photo (2×1 cell)**:
  - **Ratio**: `16:9` or `2:1`
  - **Resolution**: `1200 × 600 px` (Collaborative student IT workstation desks)
- **Normal Photos (1×1 cells, 3 to 4 cards)**:
  - **Ratio**: `1:1` (Square)
  - **Resolution**: `800 × 800 px` (Campus lounge, 1:1 mentor doubt desk, demo room, library corner)

#### C. Campus Experience Visit CTA Card (`CampusCTA`)
- **Aspect Ratio**: `16:10` or `4:3`
- **Recommended Resolution**: `1200 × 800 px`
- **Content**: Greater Kailash II / Savitri Cinema Complex campus entrance or modern reception interior with purple lighting.

---

### Section 6: Course Categories & Course Cards (`CourseCategoryFilters`)
- **Card Aspect Ratio**: `16:9` (Landscape)
- **Recommended Resolution**: `1280 × 720 px`
- **Framing & Safe Margin**:
  - Text and domain icons on left/center.
  - Background in brand gradients (purple, magenta, dark navy).
- **Content**: "Expert in Digital Marketing", "Diploma in GenAI & Prompt Engineering", "Cyber Security", "Data Science & AI".

---

### Section 7: Industry Trainer Videos (`IndustryTrainerVideos`)
- **Card Poster Aspect Ratio**: `4:5` (Portrait)
- **Recommended Resolution**: `800 × 1000 px`
- **Modal Video Player Ratio**: `16:9` (`1920 × 1080 px`)
- **Framing**: Trainer headshot with upper chest, professional posture, subtle solid/gradient backdrop.

---

### Section 8: Student Real-Time Project Videos (`StudentProjectVideos`)
- **Card Poster Aspect Ratio**: `16:10` (Landscape)
- **Recommended Resolution**: `1280 × 800 px`
- **Content**: Students actively working in groups on laptops, live ad campaign analytics dashboards, or code editors.

---

### Section 9: Placed Students Showcase (`PlacementShowcase`)
- **Student Photo Ratio**: `4:5` (~4:4.4 Portrait)
- **Recommended Resolution**: `800 × 900 px` (or `1000 × 1100 px`)
- **Hiring Company Logo Box**:
  - **Ratio**: `2.4:1`
  - **Resolution**: `240 × 100 px` (display size 96×40px)
  - **Format**: Transparent SVG or PNG
- **Content**: High-contrast, friendly smiling student headshot.

---

### Section 10: Featured In — Media & PR Coverage (`FeaturedInPR`)
- **Card Type**: Mac-style white browser window inside navy container
- **Publication Logo Box**:
  - **Height**: `38 px to 44 px`
  - **Max Width**: `180 px`
  - **Format**: Clean vector SVG or Transparent PNG
- **Content**: Lokmat Times, The Himalayan, TechBullion, Business Standard, ANI, India Today, Zee News logos.

---

## 3. Golden Rules for Exporting & Generating Media

1. **File Format**: Always save and export web photos as **`.webp`** at 82–88% quality. It reduces file weight by 60–75% compared to JPG/PNG with zero visual loss.
2. **Logos Must Be Transparent**: Company recruiter logos and accreditation badges must always have a 100% transparent background (`.svg` or `.png`).
3. **Safe Top Margins for Portraits**: For all vertical cards (`4:5`, `9:14`, `9:16`), ensure the subject's face is positioned with at least **8–10% breathing room from the top edge** so heads are never cut off on smaller responsive viewports.
4. **Naming Convention**: Keep filenames lowercase with hyphens (e.g. `kiran-bedi-award.webp`, `campus-classroom-1.webp`, `trainer-gulshan-kumar.webp`).
