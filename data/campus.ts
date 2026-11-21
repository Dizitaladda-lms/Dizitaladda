/**
 * DIZITALADDA - CAMPUS SECTION DATA CONFIGURATION
 * ==============================================================
 * Is file se aap campus section ki saari photos, captions, facts,
 * video tour aur CTA links aasani se badal sakte hain.
 */

export interface CampusFact {
  id: string;
  label: string;
  iconName: "Users" | "Wifi" | "Snowflake" | "Coffee" | "Briefcase" | "Sparkles";
}

export interface CampusPhoto {
  id: string;
  caption: string;
  /**
   * Public-folder path for an image or video.
   * Examples: '/images/campus/classroom.jpg', '/images/campus/tour.mp4'
   */
  image: string;
  alt: string;
  span: "hero" | "tall" | "wide" | "normal";
}

export interface CampusVideoTour {
  badgeText: string;
  title: string;
  subtitle: string;
  posterImage: string;
  /**
   * YouTube embed URL (e.g. 'https://www.youtube.com/embed/VIDEO_ID?autoplay=1')
   * ya local video file path (e.g. '/videos/campus-tour.mp4')
   */
  videoUrl: string;
  durationLabel: string;
}

export interface CampusCTABenefit {
  id: string;
  iconName: "MapPin" | "User" | "Calendar" | "Sparkles";
  text: string;
}

export interface CampusCTA {
  eyebrow: string;
  heading: {
    prefix: string;
    highlight: string;
  };
  benefits: CampusCTABenefit[];
  primaryButton: {
    label: string;
    href: string;
  };
  whatsappButton: {
    label: string;
    phoneNumber: string; // e.g. "918810606010"
    prefilledMessage: string;
  };
  campusImage: {
    src: string;
    alt: string;
    badge: string;
  };
  location: {
    title: string;
    address: string;
    landmark: string;
    timing: string;
    mapUrl: string;
    mapButtonLabel: string;
  };
}

export interface CampusSectionData {
  header: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    title: string;
    subtitle: string;
  };
  facts: CampusFact[];
  videoTour: CampusVideoTour;
  photos: CampusPhoto[];
  cta: CampusCTA;
}

// Low-resolution placeholder shimmer data URL (Zero CLS layout shift)
export const BLUR_SHIMMER_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWUxYjNhIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==";

export const campusData: CampusSectionData = {
  header: {
    badge: "INSIDE DIZITALADDA",
    titlePrefix: "Explore ",
    titleHighlight: "Our Campus",
    title: "Explore Our Campus",
    subtitle:
      "Classrooms, workspaces aur learning spaces jahan students apni skills build karte hain.",
  },

  // 1. Facts Strip Pills (Mobile pe smooth horizontal scroll)
  facts: [
    { id: "seats", label: "50+ Seats", iconName: "Users" },
    { id: "wifi", label: "High-Speed WiFi", iconName: "Wifi" },
    { id: "ac", label: "AC Classrooms", iconName: "Snowflake" },
    { id: "coffee", label: "Free Coffee", iconName: "Coffee" },
    { id: "placement", label: "Placement Support", iconName: "Briefcase" },
  ],

  // 2. 30-Second Video Tour Card
  videoTour: {
    badgeText: "30 sec Campus Tour dekho",
    title: "Experience the Vibe Before You Visit",
    subtitle: "Air-conditioned labs, live breakout desks aur interactive demo zones.",
    posterImage: "/images/campus/tour-poster.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1",
    durationLabel: "0:30",
  },

  // 3. Bento Gallery Images (replace these URLs with campus photos)
  photos: [
    {
      id: "classroom",
      caption: "Smart classroom",
      image: "/images/campus/classromm photo.jpeg",
      alt: "DizitalAdda smart classroom with students and learning equipment",
      span: "hero", // 2x2 grid cell on desktop
    },
    {
      id: "workspace",
      caption: "Workspace",
      image: "/images/campus/working-area.jpeg",
      alt: "DizitalAdda students working together on computers in the campus workspace",
      span: "normal",
    },
    {
      id: "learning-lab",
      caption: "Learning lab",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80",
      alt: "Students learning together in a bright training room",
      span: "tall",
    },
    {
      id: "discussion-zone",
      caption: "Discussion zone",
      image:
        "/images/campus/disscusion.jpeg",
      alt: "Team collaborating around a table during a discussion",
      span: "normal",
    },
    {
      id: "Cafateria",
      caption: "Cafateria Area",
      image:
        "/images/campus/cafeataria.jpeg",
      alt: "Comfortable lounge seating for students to relax between classes",
      span: "wide",
    },
    {
      id: "Doubt sessions",
      caption: "Doubt sessions cabin",
      image:
        "/images/campus/DOUBT.jpeg",
      alt: "Quiet library shelves and a study table",
      span: "normal",
    },
    {
      id: "reception",
      caption: "Reception",
      image: "/images/campus/reception.jpg",
      alt: "Welcoming reception area with a modern desk and seating",
      span: "normal",
    },
  ],

  // 4. Two-Column Campus Experience CTA & Location Card
  cta: {
    eyebrow: "Talk to us in-person",
    heading: {
      prefix: "Get the DizitalAdda ",
      highlight: "Campus Experience",
    },
    benefits: [
      {
        id: "walkin",
        iconName: "MapPin",
        text: "Walk into our Delhi-NCR Campus for a free 1:1 session",
      },
      {
        id: "chat",
        iconName: "User",
        text: "Chat with an expert mentor about your career in digital & AI",
      },
      {
        id: "experience",
        iconName: "Calendar",
        text: "Experience the campus vibe & infrastructure before you commit",
      },
    ],
    primaryButton: {
      label: "Book Free Campus Visit",
      href: "#bookDemo",
    },
    whatsappButton: {
      label: "Chat on WhatsApp",
      phoneNumber: "918810606010",
      prefilledMessage:
        "Hi DizitalAdda, I would like to schedule a free in-person campus visit and career counselling session.",
    },
    campusImage: {
      src: "/images/campus/one.jpeg",
      alt: "DizitalAdda Delhi-NCR Campus Modern Infrastructure",
      badge: "Delhi-NCR Campus",
    },
    location: {
      title: "DizitalAdda Learning Campus",
      address:
        "2nd Floor, Spacetime Management Pvt Ltd Design House, behind Savitri Cinema Complex, Greater Kailash II, Chittaranjan Park, New Delhi, Delhi 110048",
      landmark: "Near Savitri Cinema · Metro: Greater Kailash",
      timing: "Mon – Sat: 9:00 AM – 7:00 PM",
      mapUrl: "https://maps.app.goo.gl/yaZeHLJBfKYHdMPJ7",
      mapButtonLabel: "View on Google Maps",
    },
  },
};
