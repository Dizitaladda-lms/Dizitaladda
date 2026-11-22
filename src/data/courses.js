/**
 * ============================================================================
 * DIZITALADDA COURSE DATA CATALOG
 * ============================================================================
 * Centralized courses database. Every course page (/courses/:slug) is rendered
 * dynamically via this catalog.
 */

export const courses = [
  {
    slug: "expert-digital-marketing-course",
    name: "Expert in Digital Marketing",
    tagline: "Master advanced SEO, high-budget paid ads, full-funnel digital strategy, automation & agency scaling on live campaigns.",
    heroImage: "/courses/images/expert-digital-marketing-card-2026.png",
    duration: "12 Months",
    mode: "Live Interactive + Offline Labs",
    level: "Expert",
    modules: [
          {
                "month": 1,
                "title": "Website Architecture, WordPress & SEO Foundations",
                "topics": [
                      "Domain, Hosting & CMS Setup",
                      "Keyword Intent Research & Clustering",
                      "On-Page SEO & Content Optimization",
                      "Technical SEO Crawling with Screaming Frog"
                ]
          },
          {
                "month": 2,
                "title": "Advanced Technical SEO & Link Building Mastery",
                "topics": [
                      "Core Web Vitals & PageSpeed Architecture",
                      "Schema Structured Data Implementation",
                      "High-Authority White-Hat Backlink Campaigns",
                      "Algorithmic Penalty Recovery & Disavow Audits"
                ]
          },
          {
                "month": 3,
                "title": "Google Ads & Paid Search Engine Marketing (SEM)",
                "topics": [
                      "Search Network Campaign Setup & Bidding Strategies",
                      "Quality Score Optimization & Negative Keywords",
                      "Performance Max (PMax) Campaigns",
                      "Display Ads, Discovery & Remarketing Funnels"
                ]
          },
          {
                "month": 4,
                "title": "Meta Ads, Social Media & E-Commerce Growth",
                "topics": [
                      "Facebook & Instagram Conversion Campaigns",
                      "CBO vs ABO Testing & Scaling Strategies",
                      "Custom & Lookalike Audience Modeling",
                      "TikTok / Reels Creative Frameworks & UGC Strategy"
                ]
          },
          {
                "month": 5,
                "title": "Google Analytics 4 (GA4) & Tag Manager (GTM)",
                "topics": [
                      "Custom Event Tracking & DataLayer Variables",
                      "Conversion Measurement & Attribution Models",
                      "Exploration Reports, Funnel Analytics & Cohorts",
                      "Looker Studio Executive Reporting Dashboards"
                ]
          },
          {
                "month": 6,
                "title": "Programmatic Advertising, Media Buying & Agency Scaling",
                "topics": [
                      "DSP / SSP Ecosystem & Real-Time Bidding",
                      "Lead Generation for B2B Enterprise Brands",
                      "Agency Client Onboarding & Proposal Pitching",
                      "Final Capstone Live Brand Campaign Presentation"
                ]
          }
    ],
    trainers: [
          {
                "name": "Gaurav Kumar",
                "designation": "Founder & Chief Marketing Strategist",
                "photo": "/assets/img/trainers/gaurav.webp",
                "experienceYears": 10,
                "teaches": [
                      "Performance Marketing",
                      "Google Ads",
                      "Brand Strategy",
                      "Funnel Growth"
                ],
                "bio": "Serial digital marketer with 10+ years scaling e-commerce brands and agencies across India. Handled ₹15Cr+ in ad spend with exceptional ROAS.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Rohit Verma",
                "designation": "Senior SEO & Web Analytics Specialist",
                "photo": "/assets/img/trainers/rohit.webp",
                "experienceYears": 8,
                "teaches": [
                      "Technical SEO",
                      "GA4",
                      "GTM",
                      "Conversion Rate Optimization"
                ],
                "bio": "Ex-GroupM digital lead who has ranked 400+ competitive commercial keywords on Google Page 1. Specialized in algorithmic search recovery and technical audits.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "Google Ads",
                "logo": "googleads"
          },
          {
                "name": "Meta Ads",
                "logo": "meta"
          },
          {
                "name": "GA4",
                "logo": "ga4"
          },
          {
                "name": "GTM",
                "logo": "gtm"
          },
          {
                "name": "SEMrush",
                "logo": "semrush"
          },
          {
                "name": "Ahrefs",
                "logo": "ahrefs"
          },
          {
                "name": "HubSpot",
                "logo": "hubspot"
          },
          {
                "name": "Shopify",
                "logo": "shopify"
          },
          {
                "name": "Canva",
                "logo": "canva"
          },
          {
                "name": "WordPress",
                "logo": "wordpress"
          },
          {
                "name": "Mailchimp",
                "logo": "mailchimp"
          },
          {
                "name": "Zapier",
                "logo": "zapier"
          }
    ],
    reviews: [
          {
                "studentName": "Aditya Roy",
                "course": "Digital Marketing",
                "company": "Placed at Ogilvy • ₹6.5 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Running live ad campaigns on Google & Meta with real institute budgets gave me real-world agency experience before my first job."
          },
          {
                "studentName": "Megha Sharma",
                "course": "Digital Marketing",
                "company": "Placed at GroupM • ₹7.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The SEO audits and GA4 reporting training helped me stand out in 4 agency interviews. DizitalAdda's placement team is incredible."
          },
          {
                "studentName": "Kunal Bansal",
                "course": "Digital Marketing",
                "company": "Placed at Dentsu • ₹6.8 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "I transitioned from sales to performance marketing within 4 months. Practical guidance from working industry mentors was the key."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Expert in Digital Marketing?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "advanced-digital-marketing-course",
    name: "Advanced Digital Marketing",
    tagline: "Advance your performance marketing, SEO audits, paid ads, and conversion optimization skill set on live brand budgets.",
    heroImage: "/courses/images/advanced-digital-marketing-card-2026.png",
    duration: "6 Months",
    mode: "Live Interactive + Offline Labs",
    level: "Advanced",
    modules: [
          {
                "month": 1,
                "title": "Digital Marketing Fundamentals & SEO Foundations",
                "topics": [
                      "Audience Personas & Digital Strategy",
                      "Keyword Research & Content Strategy",
                      "On-Page & Off-Page Optimization",
                      "Google Search Console & Bing Webmaster"
                ]
          },
          {
                "month": 2,
                "title": "Google Search & Performance Marketing",
                "topics": [
                      "Search Ads Campaign Setup",
                      "Bidding Strategies & Budget Allocation",
                      "Google Shopping & Local Ads",
                      "Remarketing & Audience Targeting"
                ]
          },
          {
                "month": 3,
                "title": "Meta Ads & Social Media Marketing",
                "topics": [
                      "Meta Business Manager Setup",
                      "Ad Creative Formats & Copywriting",
                      "Lead Generation & E-Commerce Ads",
                      "Influencer Marketing & Collaborations"
                ]
          },
          {
                "month": 4,
                "title": "Web Analytics, GA4 & Conversion Tracking",
                "topics": [
                      "Google Tag Manager Tag/Trigger Setup",
                      "GA4 Event Tracking & Conversion Paths",
                      "Data Studio / Looker Studio Dashboards",
                      "Conversion Rate Optimization (CRO)"
                ]
          },
          {
                "month": 5,
                "title": "Email Marketing, Automation & CRM",
                "topics": [
                      "Email Funnel Architecture",
                      "Drip Email Sequences with Mailchimp",
                      "WhatsApp & SMS Marketing Integration",
                      "HubSpot CRM Lead Tracking"
                ]
          },
          {
                "month": 6,
                "title": "Live Capstone Project & Placement Prep",
                "topics": [
                      "Live Budget Brand Ad Campaign",
                      "Client Pitch & ROI Measurement",
                      "Resume Building & Portfolio Review",
                      "Mock Interviews with Agency Leads"
                ]
          }
    ],
    trainers: [
          {
                "name": "Gaurav Kumar",
                "designation": "Founder & Chief Marketing Strategist",
                "photo": "/assets/img/trainers/gaurav.webp",
                "experienceYears": 10,
                "teaches": [
                      "Performance Marketing",
                      "Google Ads",
                      "Brand Strategy",
                      "Funnel Growth"
                ],
                "bio": "Serial digital marketer with 10+ years scaling e-commerce brands and agencies across India. Handled ₹15Cr+ in ad spend with exceptional ROAS.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Rohit Verma",
                "designation": "Senior SEO & Web Analytics Specialist",
                "photo": "/assets/img/trainers/rohit.webp",
                "experienceYears": 8,
                "teaches": [
                      "Technical SEO",
                      "GA4",
                      "GTM",
                      "Conversion Rate Optimization"
                ],
                "bio": "Ex-GroupM digital lead who has ranked 400+ competitive commercial keywords on Google Page 1. Specialized in algorithmic search recovery and technical audits.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "Google Ads",
                "logo": "googleads"
          },
          {
                "name": "Meta Ads",
                "logo": "meta"
          },
          {
                "name": "GA4",
                "logo": "ga4"
          },
          {
                "name": "GTM",
                "logo": "gtm"
          },
          {
                "name": "SEMrush",
                "logo": "semrush"
          },
          {
                "name": "WordPress",
                "logo": "wordpress"
          },
          {
                "name": "Mailchimp",
                "logo": "mailchimp"
          },
          {
                "name": "Canva",
                "logo": "canva"
          }
    ],
    reviews: [
          {
                "studentName": "Aditya Roy",
                "course": "Digital Marketing",
                "company": "Placed at Ogilvy • ₹6.5 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Running live ad campaigns on Google & Meta with real institute budgets gave me real-world agency experience before my first job."
          },
          {
                "studentName": "Megha Sharma",
                "course": "Digital Marketing",
                "company": "Placed at GroupM • ₹7.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The SEO audits and GA4 reporting training helped me stand out in 4 agency interviews. DizitalAdda's placement team is incredible."
          },
          {
                "studentName": "Kunal Bansal",
                "course": "Digital Marketing",
                "company": "Placed at Dentsu • ₹6.8 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "I transitioned from sales to performance marketing within 4 months. Practical guidance from working industry mentors was the key."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Advanced Digital Marketing?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "digital-marketing-for-professional",
    name: "Digital Marketing for Professionals",
    tagline: "Accelerate your career with weekend executive training in growth marketing, AI tools, and ROI-driven digital strategies.",
    heroImage: "/courses/images/Digital-Marketing-for-Professionals-card-2026.png",
    duration: "4 Months",
    mode: "Weekend Executive + Online",
    level: "Professionals",
    modules: [
          {
                "month": 1,
                "title": "Strategic Marketing & Organic Growth Frameworks",
                "topics": [
                      "Modern Marketing Funnels & Brand Positioning",
                      "High-Impact SEO & Content Strategy",
                      "Competitive Benchmarking with SEMrush",
                      "AI Copywriting & Marketing Prompts"
                ]
          },
          {
                "month": 2,
                "title": "Performance Marketing & Paid Customer Acquisition",
                "topics": [
                      "High-ROAS Google Search & Meta Ad Scaling",
                      "Audience Segmentation & Lookalikes",
                      "B2B Marketing & LinkedIn Campaign Strategy",
                      "Budget Allocation & CAC / LTV Optimization"
                ]
          },
          {
                "month": 3,
                "title": "Marketing Analytics, GA4 & Data-Driven Growth",
                "topics": [
                      "GA4 Executive KPI Dashboards",
                      "Attribution Models & ROAS Reporting",
                      "Conversion Rate Optimization Best Practices",
                      "Email Drip Automation & Retention"
                ]
          },
          {
                "month": 4,
                "title": "Leadership, Growth Hacking & Live Project",
                "topics": [
                      "Growth Hacking Frameworks",
                      "Live Campaign Case Studies",
                      "Marketing Budget & Agency Management",
                      "Executive Certification & Alumni Network"
                ]
          }
    ],
    trainers: [
          {
                "name": "Gaurav Kumar",
                "designation": "Founder & Chief Marketing Strategist",
                "photo": "/assets/img/trainers/gaurav.webp",
                "experienceYears": 10,
                "teaches": [
                      "Performance Marketing",
                      "Google Ads",
                      "Brand Strategy",
                      "Funnel Growth"
                ],
                "bio": "Serial digital marketer with 10+ years scaling e-commerce brands and agencies across India. Handled ₹15Cr+ in ad spend with exceptional ROAS.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Rohit Verma",
                "designation": "Senior SEO & Web Analytics Specialist",
                "photo": "/assets/img/trainers/rohit.webp",
                "experienceYears": 8,
                "teaches": [
                      "Technical SEO",
                      "GA4",
                      "GTM",
                      "Conversion Rate Optimization"
                ],
                "bio": "Ex-GroupM digital lead who has ranked 400+ competitive commercial keywords on Google Page 1. Specialized in algorithmic search recovery and technical audits.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "Google Ads",
                "logo": "googleads"
          },
          {
                "name": "Meta Ads",
                "logo": "meta"
          },
          {
                "name": "GA4",
                "logo": "ga4"
          },
          {
                "name": "ChatGPT for Marketing",
                "logo": "chatgpt"
          },
          {
                "name": "SEMrush",
                "logo": "semrush"
          },
          {
                "name": "HubSpot",
                "logo": "hubspot"
          }
    ],
    reviews: [
          {
                "studentName": "Aditya Roy",
                "course": "Digital Marketing",
                "company": "Placed at Ogilvy • ₹6.5 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Running live ad campaigns on Google & Meta with real institute budgets gave me real-world agency experience before my first job."
          },
          {
                "studentName": "Megha Sharma",
                "course": "Digital Marketing",
                "company": "Placed at GroupM • ₹7.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The SEO audits and GA4 reporting training helped me stand out in 4 agency interviews. DizitalAdda's placement team is incredible."
          },
          {
                "studentName": "Kunal Bansal",
                "course": "Digital Marketing",
                "company": "Placed at Dentsu • ₹6.8 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "I transitioned from sales to performance marketing within 4 months. Practical guidance from working industry mentors was the key."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Digital Marketing for Professionals?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "digital-marketing-for-beginners",
    name: "Digital Marketing for Beginners",
    tagline: "Start from absolute scratch with practical foundations in SEO, social media, Google ads, and creative tools.",
    heroImage: "/courses/images/Digital-Marketing-for-Beginners-card-2026.png",
    duration: "3 Months",
    mode: "Live Interactive + Offline Labs",
    level: "Beginner",
    modules: [
          {
                "month": 1,
                "title": "Foundations of Digital Marketing & SEO",
                "topics": [
                      "Introduction to Digital vs Traditional Marketing",
                      "How Search Engines Work",
                      "Keyword Research & On-Page SEO Basics",
                      "WordPress Blog Setup"
                ]
          },
          {
                "month": 2,
                "title": "Social Media & Visual Content Creation",
                "topics": [
                      "Graphic Design with Canva",
                      "Instagram & Facebook Organic Growth",
                      "Content Calendars & Hashtag Strategy",
                      "Basic Meta Ad Boosts"
                ]
          },
          {
                "month": 3,
                "title": "Google Ads Basics, Analytics & Career Launch",
                "topics": [
                      "Google Search Ads Campaign Setup",
                      "Google Analytics Basics",
                      "Email Marketing with Mailchimp",
                      "Freelancing & Job Interview Preparation"
                ]
          }
    ],
    trainers: [
          {
                "name": "Gaurav Kumar",
                "designation": "Founder & Chief Marketing Strategist",
                "photo": "/assets/img/trainers/gaurav.webp",
                "experienceYears": 10,
                "teaches": [
                      "Performance Marketing",
                      "Google Ads",
                      "Brand Strategy",
                      "Funnel Growth"
                ],
                "bio": "Serial digital marketer with 10+ years scaling e-commerce brands and agencies across India. Handled ₹15Cr+ in ad spend with exceptional ROAS.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Rohit Verma",
                "designation": "Senior SEO & Web Analytics Specialist",
                "photo": "/assets/img/trainers/rohit.webp",
                "experienceYears": 8,
                "teaches": [
                      "Technical SEO",
                      "GA4",
                      "GTM",
                      "Conversion Rate Optimization"
                ],
                "bio": "Ex-GroupM digital lead who has ranked 400+ competitive commercial keywords on Google Page 1. Specialized in algorithmic search recovery and technical audits.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "Google Ads",
                "logo": "googleads"
          },
          {
                "name": "Canva",
                "logo": "canva"
          },
          {
                "name": "Meta Business Suite",
                "logo": "meta"
          },
          {
                "name": "WordPress",
                "logo": "wordpress"
          },
          {
                "name": "Mailchimp",
                "logo": "mailchimp"
          }
    ],
    reviews: [
          {
                "studentName": "Aditya Roy",
                "course": "Digital Marketing",
                "company": "Placed at Ogilvy • ₹6.5 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Running live ad campaigns on Google & Meta with real institute budgets gave me real-world agency experience before my first job."
          },
          {
                "studentName": "Megha Sharma",
                "course": "Digital Marketing",
                "company": "Placed at GroupM • ₹7.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The SEO audits and GA4 reporting training helped me stand out in 4 agency interviews. DizitalAdda's placement team is incredible."
          },
          {
                "studentName": "Kunal Bansal",
                "course": "Digital Marketing",
                "company": "Placed at Dentsu • ₹6.8 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "I transitioned from sales to performance marketing within 4 months. Practical guidance from working industry mentors was the key."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Digital Marketing for Beginners?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "graphic-design-and-professional-video-editing-course",
    name: "Graphic Design & Professional Video Editing",
    tagline: "Master Photoshop, Illustrator, Premiere Pro, After Effects, and AI creative tools to build stunning visual portfolios.",
    heroImage: "/courses/images/graphic-design-and-professional-video-editing-course.png",
    duration: "6 Months",
    mode: "Hands-on Studio + Live",
    level: "Beginner to Advanced",
    modules: [
          {
                "month": 1,
                "title": "Graphic Design Principles & Adobe Photoshop",
                "topics": [
                      "Color Theory, Typography & Composition",
                      "Layer Masking, Retouching & Compositing",
                      "Social Media Poster & Banner Design",
                      "AI Tools for Image Generation"
                ]
          },
          {
                "month": 2,
                "title": "Vector Graphics & Adobe Illustrator",
                "topics": [
                      "Pen Tool Mastery & Vector Illustration",
                      "Logo Design & Brand Identity Systems",
                      "Packaging & Print Media Guidelines",
                      "Exporting for Web & Digital Apps"
                ]
          },
          {
                "month": 3,
                "title": "Video Editing Essentials with Premiere Pro",
                "topics": [
                      "Timeline Editing & Cutting Techniques",
                      "Color Grading & Audio Enhancement",
                      "Reels, Shorts & Video Ad Formats",
                      "Transitions, Text Overlays & Subtitles"
                ]
          },
          {
                "month": 4,
                "title": "Motion Graphics & Adobe After Effects",
                "topics": [
                      "Keyframe Animation & Easing",
                      "Kinetic Typography & Lower Thirds",
                      "Logo Animation & Intro/Outro Videos",
                      "VFX Basics & Green Screen Removal"
                ]
          },
          {
                "month": 5,
                "title": "Advanced Commercial Projects & Portfolio",
                "topics": [
                      "Brand Commercial Ad Production",
                      "Social Media Video Marketing Campaigns",
                      "YouTube Video Package Design",
                      "Portfolio Presentation on Behance"
                ]
          },
          {
                "month": 6,
                "title": "Showreel Mastery & Studio Placement",
                "topics": [
                      "Personal Showreel Editing",
                      "Freelancing on Upwork & Fiverr",
                      "Agency Interview Prep & Test Tasks",
                      "Placement Drives & Studio Placement"
                ]
          }
    ],
    trainers: [
          {
                "name": "Gaurav Kumar",
                "designation": "Founder & Chief Marketing Strategist",
                "photo": "/assets/img/trainers/gaurav.webp",
                "experienceYears": 10,
                "teaches": [
                      "Performance Marketing",
                      "Google Ads",
                      "Brand Strategy",
                      "Funnel Growth"
                ],
                "bio": "Serial digital marketer with 10+ years scaling e-commerce brands and agencies across India. Handled ₹15Cr+ in ad spend with exceptional ROAS.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Rohit Verma",
                "designation": "Senior SEO & Web Analytics Specialist",
                "photo": "/assets/img/trainers/rohit.webp",
                "experienceYears": 8,
                "teaches": [
                      "Technical SEO",
                      "GA4",
                      "GTM",
                      "Conversion Rate Optimization"
                ],
                "bio": "Ex-GroupM digital lead who has ranked 400+ competitive commercial keywords on Google Page 1. Specialized in algorithmic search recovery and technical audits.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "Photoshop",
                "logo": "photoshop"
          },
          {
                "name": "Illustrator",
                "logo": "illustrator"
          },
          {
                "name": "Premiere Pro",
                "logo": "premiere"
          },
          {
                "name": "After Effects",
                "logo": "aftereffects"
          },
          {
                "name": "Midjourney",
                "logo": "midjourney"
          },
          {
                "name": "Canva",
                "logo": "canva"
          }
    ],
    reviews: [
          {
                "studentName": "Aditya Roy",
                "course": "Digital Marketing",
                "company": "Placed at Ogilvy • ₹6.5 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Running live ad campaigns on Google & Meta with real institute budgets gave me real-world agency experience before my first job."
          },
          {
                "studentName": "Megha Sharma",
                "course": "Digital Marketing",
                "company": "Placed at GroupM • ₹7.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The SEO audits and GA4 reporting training helped me stand out in 4 agency interviews. DizitalAdda's placement team is incredible."
          },
          {
                "studentName": "Kunal Bansal",
                "course": "Digital Marketing",
                "company": "Placed at Dentsu • ₹6.8 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "I transitioned from sales to performance marketing within 4 months. Practical guidance from working industry mentors was the key."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Graphic Design & Professional Video Editing?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "graphic-design-and-motion-graphics",
    name: "Graphic Design & Motion Graphics",
    tagline: "Elevate your visual storytelling with advanced brand identity design, 2D/3D animation, kinetic typography, and VFX.",
    heroImage: "/courses/images/graphic-design-and-motion-graphics.png",
    duration: "6 Months",
    mode: "Hands-on Studio + Live",
    level: "Advanced",
    modules: [
          {
                "month": 1,
                "title": "Advanced Vector Illustration & Brand Systems",
                "topics": [
                      "Vector Illustration Techniques",
                      "Corporate Brand Guidelines Creation",
                      "Iconography & Design Systems",
                      "Creative Poster Art Direction"
                ]
          },
          {
                "month": 2,
                "title": "Kinetic Typography & 2D Animation",
                "topics": [
                      "Principles of Animation",
                      "Kinetic Typography & Text FX",
                      "Character Rigging Basics with Duik",
                      "Explainer Video Storyboarding"
                ]
          },
          {
                "month": 3,
                "title": "Commercial Motion Graphics with After Effects",
                "topics": [
                      "Product Promotion Animations",
                      "Broadcast Motion Graphics & Infographics",
                      "Dynamic Visual Transitions",
                      "Sound Design Synchronization"
                ]
          },
          {
                "month": 4,
                "title": "3D Elements & Visual Effects Integration",
                "topics": [
                      "3D Layers & Camera Tracking in AE",
                      "Blender 3D Modeling Foundations",
                      "Lighting & Texture Mapping",
                      "Compositing 3D Renders with 2D Elements"
                ]
          },
          {
                "month": 5,
                "title": "Industry Capstone Campaign",
                "topics": [
                      "Complete Brand Motion Identity",
                      "TV Commercial & Social Campaign",
                      "Client Brief Simulation",
                      "Review by Creative Directors"
                ]
          },
          {
                "month": 6,
                "title": "Studio Portfolio & Placement",
                "topics": [
                      "Behance & Dribbble Portfolio Setup",
                      "Motion Reel Production",
                      "Agency Pitch & Mock Interviews",
                      "Creative Placement Assistance"
                ]
          }
    ],
    trainers: [
          {
                "name": "Gaurav Kumar",
                "designation": "Founder & Chief Marketing Strategist",
                "photo": "/assets/img/trainers/gaurav.webp",
                "experienceYears": 10,
                "teaches": [
                      "Performance Marketing",
                      "Google Ads",
                      "Brand Strategy",
                      "Funnel Growth"
                ],
                "bio": "Serial digital marketer with 10+ years scaling e-commerce brands and agencies across India. Handled ₹15Cr+ in ad spend with exceptional ROAS.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Rohit Verma",
                "designation": "Senior SEO & Web Analytics Specialist",
                "photo": "/assets/img/trainers/rohit.webp",
                "experienceYears": 8,
                "teaches": [
                      "Technical SEO",
                      "GA4",
                      "GTM",
                      "Conversion Rate Optimization"
                ],
                "bio": "Ex-GroupM digital lead who has ranked 400+ competitive commercial keywords on Google Page 1. Specialized in algorithmic search recovery and technical audits.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "Illustrator",
                "logo": "illustrator"
          },
          {
                "name": "Photoshop",
                "logo": "photoshop"
          },
          {
                "name": "After Effects",
                "logo": "aftereffects"
          },
          {
                "name": "Cinema 4D Basics",
                "logo": "c4d"
          },
          {
                "name": "Blender Basics",
                "logo": "blender"
          }
    ],
    reviews: [
          {
                "studentName": "Aditya Roy",
                "course": "Digital Marketing",
                "company": "Placed at Ogilvy • ₹6.5 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Running live ad campaigns on Google & Meta with real institute budgets gave me real-world agency experience before my first job."
          },
          {
                "studentName": "Megha Sharma",
                "course": "Digital Marketing",
                "company": "Placed at GroupM • ₹7.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The SEO audits and GA4 reporting training helped me stand out in 4 agency interviews. DizitalAdda's placement team is incredible."
          },
          {
                "studentName": "Kunal Bansal",
                "course": "Digital Marketing",
                "company": "Placed at Dentsu • ₹6.8 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "I transitioned from sales to performance marketing within 4 months. Practical guidance from working industry mentors was the key."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Graphic Design & Motion Graphics?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "ui-ux-design-course",
    name: "UI/UX Design Masterclass",
    tagline: "Master Figma, UX research, wireframing, interactive prototyping, and design systems to create high-converting web and mobile apps.",
    heroImage: "/courses/images/ui-ux-design-course.png",
    duration: "6 Months",
    mode: "Live Interactive + Design Labs",
    level: "Beginner to Advanced",
    modules: [
          {
                "month": 1,
                "title": "UX Research, User Empathy & Information Architecture",
                "topics": [
                      "Design Thinking Methodology",
                      "User Interviews & Persona Mapping",
                      "Journey Mapping & User Flows",
                      "Information Architecture & Site Mapping"
                ]
          },
          {
                "month": 2,
                "title": "Wireframing & Low-Fidelity Prototyping",
                "topics": [
                      "Low-Fi Paper & Digital Wireframes",
                      "UX Copywriting Foundations",
                      "Usability Testing & Feedback Loops",
                      "Card Sorting & Tree Testing"
                ]
          },
          {
                "month": 3,
                "title": "Figma Mastery & UI Design Foundations",
                "topics": [
                      "Figma Auto-Layout & Component Variants",
                      "Typography, Color Scales & Grids",
                      "Designing Responsive Mobile & Web Interfaces",
                      "Micro-Interactions & Smart Animate"
                ]
          },
          {
                "month": 4,
                "title": "Design Systems & Token Architecture",
                "topics": [
                      "Atomic Design Principles",
                      "Building Scalable Design Systems",
                      "Accessibility (WCAG) Compliance",
                      "Developer Handoff with Figma Dev Mode"
                ]
          },
          {
                "month": 5,
                "title": "Mobile App & SaaS Capstone Projects",
                "topics": [
                      "End-to-End iOS / Android Mobile App Design",
                      "Complex SaaS Dashboard UX Design",
                      "Interactive Clickable Prototypes",
                      "Usability Heuristic Evaluations"
                ]
          },
          {
                "month": 6,
                "title": "Portfolio Building & Product Design Hiring",
                "topics": [
                      "Notion & Webflow Case Study Writing",
                      "Behance / Dribbble Showcase",
                      "Whiteboard Design Challenge Practice",
                      "Design Hiring Partner Placement"
                ]
          }
    ],
    trainers: [
          {
                "name": "Gaurav Kumar",
                "designation": "Founder & Chief Marketing Strategist",
                "photo": "/assets/img/trainers/gaurav.webp",
                "experienceYears": 10,
                "teaches": [
                      "Performance Marketing",
                      "Google Ads",
                      "Brand Strategy",
                      "Funnel Growth"
                ],
                "bio": "Serial digital marketer with 10+ years scaling e-commerce brands and agencies across India. Handled ₹15Cr+ in ad spend with exceptional ROAS.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Rohit Verma",
                "designation": "Senior SEO & Web Analytics Specialist",
                "photo": "/assets/img/trainers/rohit.webp",
                "experienceYears": 8,
                "teaches": [
                      "Technical SEO",
                      "GA4",
                      "GTM",
                      "Conversion Rate Optimization"
                ],
                "bio": "Ex-GroupM digital lead who has ranked 400+ competitive commercial keywords on Google Page 1. Specialized in algorithmic search recovery and technical audits.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "Figma",
                "logo": "figma"
          },
          {
                "name": "Adobe XD",
                "logo": "xd"
          },
          {
                "name": "Miro",
                "logo": "miro"
          },
          {
                "name": "Notion",
                "logo": "notion"
          },
          {
                "name": "Zeplin",
                "logo": "zeplin"
          }
    ],
    reviews: [
          {
                "studentName": "Aditya Roy",
                "course": "Digital Marketing",
                "company": "Placed at Ogilvy • ₹6.5 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Running live ad campaigns on Google & Meta with real institute budgets gave me real-world agency experience before my first job."
          },
          {
                "studentName": "Megha Sharma",
                "course": "Digital Marketing",
                "company": "Placed at GroupM • ₹7.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The SEO audits and GA4 reporting training helped me stand out in 4 agency interviews. DizitalAdda's placement team is incredible."
          },
          {
                "studentName": "Kunal Bansal",
                "course": "Digital Marketing",
                "company": "Placed at Dentsu • ₹6.8 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "I transitioned from sales to performance marketing within 4 months. Practical guidance from working industry mentors was the key."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this UI/UX Design Masterclass?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "web-development-course",
    name: "Full Stack Web Development",
    tagline: "Learn HTML5, CSS3, JavaScript, React, Node.js, Express, and MongoDB to build modern, responsive web applications.",
    heroImage: "/courses/images/web-development-course.png",
    duration: "6 Months",
    mode: "Live Interactive + Code Labs",
    level: "Beginner to Advanced",
    modules: [
          {
                "month": 1,
                "title": "Web Foundations: Semantic HTML5 & Modern CSS3",
                "topics": [
                      "Semantic HTML5 Elements & Forms",
                      "CSS Flexbox & CSS Grid Layouts",
                      "Responsive Design & Mobile-First Media Queries",
                      "Tailwind CSS Utility Styling"
                ]
          },
          {
                "month": 2,
                "title": "JavaScript Core to Advanced (ES6+)",
                "topics": [
                      "Variables, Data Types & Control Flow",
                      "DOM Manipulation & Event Listeners",
                      "Asynchronous JS, Promises & Fetch API",
                      "OOPs & Functional Programming Concepts"
                ]
          },
          {
                "month": 3,
                "title": "Frontend Engineering with React.js",
                "topics": [
                      "React JSX, Components & Props",
                      "Hooks: useState, useEffect, useMemo",
                      "State Management & React Router",
                      "Consuming Third-Party REST APIs"
                ]
          },
          {
                "month": 4,
                "title": "Backend Development with Node.js & Express",
                "topics": [
                      "Node.js Runtime & NPM Ecosystem",
                      "Building RESTful APIs with Express",
                      "Middleware, Routing & Error Handling",
                      "JWT Authentication & Security Best Practices"
                ]
          },
          {
                "month": 5,
                "title": "Databases: MongoDB & Database Design",
                "topics": [
                      "NoSQL Concepts with MongoDB & Mongoose",
                      "CRUD Operations & Data Modeling",
                      "Aggregation Pipelines & Indexing",
                      "Cloud Database Deployment on Atlas"
                ]
          },
          {
                "month": 6,
                "title": "Full-Stack Deployment & Placement Prep",
                "topics": [
                      "End-to-End MERN Application Project",
                      "Cloud Deployment on Vercel / Render",
                      "Git Collaboration & GitHub Portfolio",
                      "Technical Coding Mock Interviews"
                ]
          }
    ],
    trainers: [
          {
                "name": "Gaurav Kumar",
                "designation": "Founder & Chief Marketing Strategist",
                "photo": "/assets/img/trainers/gaurav.webp",
                "experienceYears": 10,
                "teaches": [
                      "Performance Marketing",
                      "Google Ads",
                      "Brand Strategy",
                      "Funnel Growth"
                ],
                "bio": "Serial digital marketer with 10+ years scaling e-commerce brands and agencies across India. Handled ₹15Cr+ in ad spend with exceptional ROAS.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Rohit Verma",
                "designation": "Senior SEO & Web Analytics Specialist",
                "photo": "/assets/img/trainers/rohit.webp",
                "experienceYears": 8,
                "teaches": [
                      "Technical SEO",
                      "GA4",
                      "GTM",
                      "Conversion Rate Optimization"
                ],
                "bio": "Ex-GroupM digital lead who has ranked 400+ competitive commercial keywords on Google Page 1. Specialized in algorithmic search recovery and technical audits.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "HTML5/CSS3",
                "logo": "html"
          },
          {
                "name": "JavaScript",
                "logo": "javascript"
          },
          {
                "name": "React",
                "logo": "react"
          },
          {
                "name": "Node.js",
                "logo": "nodejs"
          },
          {
                "name": "Express",
                "logo": "express"
          },
          {
                "name": "MongoDB",
                "logo": "mongodb"
          },
          {
                "name": "Git/GitHub",
                "logo": "git"
          },
          {
                "name": "Tailwind CSS",
                "logo": "tailwind"
          }
    ],
    reviews: [
          {
                "studentName": "Aditya Roy",
                "course": "Digital Marketing",
                "company": "Placed at Ogilvy • ₹6.5 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Running live ad campaigns on Google & Meta with real institute budgets gave me real-world agency experience before my first job."
          },
          {
                "studentName": "Megha Sharma",
                "course": "Digital Marketing",
                "company": "Placed at GroupM • ₹7.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The SEO audits and GA4 reporting training helped me stand out in 4 agency interviews. DizitalAdda's placement team is incredible."
          },
          {
                "studentName": "Kunal Bansal",
                "course": "Digital Marketing",
                "company": "Placed at Dentsu • ₹6.8 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "I transitioned from sales to performance marketing within 4 months. Practical guidance from working industry mentors was the key."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Full Stack Web Development?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "diploma-in-computer-software-and-technology",
    name: "Diploma in Computer Software & Technology",
    tagline: "1-year comprehensive diploma covering Python, Full-Stack Web Development, Databases, Cloud Infrastructure & AI tools.",
    heroImage: "/courses/images/diploma-in-computer-software-and-technology.png",
    duration: "12 Months",
    mode: "Live Interactive + Practical Labs",
    level: "Comprehensive 1 Year",
    modules: [
          {
                "month": 1,
                "title": "Computer Foundations & Programming Logic",
                "topics": [
                      "Computer Architecture & OS Internals",
                      "Flowcharts & Algorithmic Problem Solving",
                      "Terminal & Linux Commands",
                      "Git Version Control"
                ]
          },
          {
                "month": 2,
                "title": "Python Programming Mastery",
                "topics": [
                      "Python Syntax & Data Structures",
                      "Object-Oriented Programming (OOPs)",
                      "File Handling & Error Logging",
                      "Automation Scripts with Python"
                ]
          },
          {
                "month": 3,
                "title": "Frontend Web Development",
                "topics": [
                      "HTML5 & CSS3 Responsive Layouts",
                      "JavaScript DOM & ES6 Standards",
                      "Bootstrap & Tailwind Frameworks",
                      "Interactive Web Pages"
                ]
          },
          {
                "month": 4,
                "title": "Modern Frontend with React.js",
                "topics": [
                      "Component Architecture",
                      "Hooks & State Management",
                      "Routing & API Integration",
                      "Frontend Build Tools (Vite)"
                ]
          },
          {
                "month": 5,
                "title": "Relational Databases & SQL",
                "topics": [
                      "MySQL & PostgreSQL Schema Design",
                      "Complex Queries, Joins & Views",
                      "Stored Procedures & Triggers",
                      "Database Optimization"
                ]
          },
          {
                "month": 6,
                "title": "Backend Development with Node.js",
                "topics": [
                      "Server Architecture with Express.js",
                      "RESTful API Engineering",
                      "Authentication & Session Security",
                      "Database ORMs"
                ]
          },
          {
                "month": 7,
                "title": "NoSQL Databases with MongoDB",
                "topics": [
                      "Document Data Modeling",
                      "Mongoose Schemas & Validation",
                      "Aggregation Framework",
                      "Cloud Atlas Clusters"
                ]
          },
          {
                "month": 8,
                "title": "Cloud Infrastructure & AWS Deployment",
                "topics": [
                      "Cloud Fundamentals & AWS EC2 / S3",
                      "Docker Containerization Basics",
                      "CI/CD Pipeline Fundamentals",
                      "Production Monitoring"
                ]
          },
          {
                "month": 9,
                "title": "Cybersecurity Fundamentals",
                "topics": [
                      "Web Security OWASP Principles",
                      "Secure Coding Practices",
                      "SSL/TLS & Cryptography Basics",
                      "Vulnerability Prevention"
                ]
          },
          {
                "month": 10,
                "title": "Generative AI & Modern Developer Tools",
                "topics": [
                      "AI-Assisted Coding (Copilot/ChatGPT)",
                      "Prompt Engineering for Developers",
                      "Integrating AI APIs into Applications",
                      "Automated Testing"
                ]
          },
          {
                "month": 11,
                "title": "Enterprise Capstone Project",
                "topics": [
                      "Full-Stack Software Architecture",
                      "Agile / Scrum Sprint Delivery",
                      "Code Reviews & Documentation",
                      "Project Deployment"
                ]
          },
          {
                "month": 12,
                "title": "Corporate Career Launch",
                "topics": [
                      "Resume & LinkedIn Coaching",
                      "System Design & Coding Rounds",
                      "HR Mock Interviews",
                      "Guaranteed Placement Drives"
                ]
          }
    ],
    trainers: [
          {
                "name": "Gaurav Kumar",
                "designation": "Founder & Chief Marketing Strategist",
                "photo": "/assets/img/trainers/gaurav.webp",
                "experienceYears": 10,
                "teaches": [
                      "Performance Marketing",
                      "Google Ads",
                      "Brand Strategy",
                      "Funnel Growth"
                ],
                "bio": "Serial digital marketer with 10+ years scaling e-commerce brands and agencies across India. Handled ₹15Cr+ in ad spend with exceptional ROAS.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Rohit Verma",
                "designation": "Senior SEO & Web Analytics Specialist",
                "photo": "/assets/img/trainers/rohit.webp",
                "experienceYears": 8,
                "teaches": [
                      "Technical SEO",
                      "GA4",
                      "GTM",
                      "Conversion Rate Optimization"
                ],
                "bio": "Ex-GroupM digital lead who has ranked 400+ competitive commercial keywords on Google Page 1. Specialized in algorithmic search recovery and technical audits.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "Python",
                "logo": "python"
          },
          {
                "name": "React",
                "logo": "react"
          },
          {
                "name": "Node.js",
                "logo": "nodejs"
          },
          {
                "name": "SQL",
                "logo": "sql"
          },
          {
                "name": "MongoDB",
                "logo": "mongodb"
          },
          {
                "name": "AWS Cloud",
                "logo": "aws"
          }
    ],
    reviews: [
          {
                "studentName": "Aditya Roy",
                "course": "Digital Marketing",
                "company": "Placed at Ogilvy • ₹6.5 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Running live ad campaigns on Google & Meta with real institute budgets gave me real-world agency experience before my first job."
          },
          {
                "studentName": "Megha Sharma",
                "course": "Digital Marketing",
                "company": "Placed at GroupM • ₹7.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The SEO audits and GA4 reporting training helped me stand out in 4 agency interviews. DizitalAdda's placement team is incredible."
          },
          {
                "studentName": "Kunal Bansal",
                "course": "Digital Marketing",
                "company": "Placed at Dentsu • ₹6.8 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "I transitioned from sales to performance marketing within 4 months. Practical guidance from working industry mentors was the key."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Diploma in Computer Software & Technology?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "data-science-analytics",
    name: "Data Science & Analytics",
    tagline: "Master Python, Machine Learning, Power BI, SQL & Cloud AI with 100% Practical Training & Placement Support.",
    heroImage: "/courses/images/data-science-hero.webp",
    duration: "6 Months",
    mode: "Live Interactive + Offline Labs",
    level: "Beginner to Advanced",
    modules: [
          {
                "month": 1,
                "title": "Programming Foundations & Advanced Python",
                "topics": [
                      "Python Syntax, Data Structures & OOPs",
                      "NumPy & Pandas Data Wrangling",
                      "Data Cleaning Pipelines",
                      "Matplotlib & Seaborn Visualizations"
                ]
          },
          {
                "month": 2,
                "title": "Relational Databases, Advanced SQL & Data Warehouses",
                "topics": [
                      "Complex Multi-Table Joins & CTEs",
                      "Window Functions & Optimization",
                      "Schema Design & Indexing",
                      "Python Database Connectors"
                ]
          },
          {
                "month": 3,
                "title": "Business Intelligence, Power BI & Visual Storytelling",
                "topics": [
                      "Interactive Executive Dashboards",
                      "DAX Measures & Modeling",
                      "Real-time KPI Scorecards",
                      "Power BI Cloud Publishing"
                ]
          },
          {
                "month": 4,
                "title": "Applied Statistics, Math & Hypothesis Testing",
                "topics": [
                      "Probability Distributions & Central Limit Theorem",
                      "A/B Testing, T-Tests & Chi-Square",
                      "Correlation & Linear Regression",
                      "Data Bias Mitigation"
                ]
          },
          {
                "month": 5,
                "title": "Machine Learning & Predictive Modeling",
                "topics": [
                      "Supervised ML (Regression, Trees, XGBoost)",
                      "Unsupervised Clustering (K-Means, PCA)",
                      "ROC-AUC & Model Evaluation",
                      "Hyperparameter Tuning with Optuna"
                ]
          },
          {
                "month": 6,
                "title": "Generative AI, MLOps & Capstone Portfolio",
                "topics": [
                      "Prompt Engineering & LangChain",
                      "FastAPI & Docker Model APIs",
                      "AWS Cloud Deployment",
                      "Hiring Capstone Presentation"
                ]
          }
    ],
    trainers: [
          {
                "name": "Dr. Vikramaditya Sen",
                "designation": "Lead AI & Data Science Architect (Ex-Amazon)",
                "photo": "/trainers/vikramaditya.jpg",
                "experienceYears": 12,
                "teaches": [
                      "Python",
                      "Machine Learning",
                      "Deep Learning",
                      "Generative AI"
                ],
                "bio": "Veteran Data Scientist with 12+ years of experience engineering high-throughput machine learning pipelines at Amazon and top fintech startups.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Pooja Malhotra",
                "designation": "Principal BI & Analytics Consultant",
                "photo": "/trainers/pooja.jpg",
                "experienceYears": 8,
                "teaches": [
                      "Power BI",
                      "SQL",
                      "Tableau",
                      "Business Analytics"
                ],
                "bio": "Specialist in large-scale analytics pipelines, executive reporting, and strategic DAX modeling. Former senior consultant at Genpact.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "Python",
                "logo": "python"
          },
          {
                "name": "SQL",
                "logo": "sql"
          },
          {
                "name": "Power BI",
                "logo": "powerbi"
          },
          {
                "name": "Pandas",
                "logo": "pandas"
          },
          {
                "name": "NumPy",
                "logo": "numpy"
          },
          {
                "name": "Tableau",
                "logo": "tableau"
          },
          {
                "name": "TensorFlow",
                "logo": "tensorflow"
          },
          {
                "name": "Scikit-Learn",
                "logo": "scikit"
          },
          {
                "name": "AWS Cloud",
                "logo": "aws"
          }
    ],
    reviews: [
          {
                "studentName": "Aman Singhal",
                "course": "Data Science & Analytics",
                "company": "Placed at Deloitte • ₹8.5 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The hands-on Python & Power BI client projects gave me the practical confidence to crack 3 enterprise data analyst interviews back-to-back."
          },
          {
                "studentName": "Priyanka Roy",
                "course": "Data Science & AI",
                "company": "Placed at Accenture • ₹7.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Transitioning from a non-IT background to Data Analytics seemed tough, but DizitalAdda's step-by-step mentor support made everything intuitive."
          },
          {
                "studentName": "Rohan Kulkarni",
                "course": "Machine Learning & AI",
                "company": "Placed at Genpact • ₹9.0 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Mock interviews, 1-on-1 resume optimization, and weekly placement drives helped me land my dream role within 40 days of graduation."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Data Science & Analytics?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "diploma-in-data-science-and-ai",
    name: "Diploma in Data Science & AI",
    tagline: "1-year master diploma covering Python, Statistics, Machine Learning, Deep Learning, NLP, Computer Vision & MLOps.",
    heroImage: "/courses/images/diploma-in-data-science-and-ai.png",
    duration: "12 Months",
    mode: "Live Interactive + Offline Labs",
    level: "1 Year Master Program",
    modules: [
          {
                "month": 1,
                "title": "Advanced Python & Scientific Computing",
                "topics": [
                      "Python OOPs & Performance Optimization",
                      "NumPy Vectorization",
                      "Pandas Data Wrangling",
                      "Exploratory Data Analysis (EDA)"
                ]
          },
          {
                "month": 2,
                "title": "Advanced SQL & Relational Data Engineering",
                "topics": [
                      "Complex Joins, CTEs & Subqueries",
                      "Window Functions & Indexing",
                      "Database Partitioning",
                      "ETL Pipelines with Python"
                ]
          },
          {
                "month": 3,
                "title": "Mathematics & Applied Statistical Inference",
                "topics": [
                      "Linear Algebra & Matrix Operations",
                      "Calculus for Machine Learning",
                      "Probability & Distributions",
                      "Hypothesis & A/B Testing"
                ]
          },
          {
                "month": 4,
                "title": "Business Intelligence with Power BI & Tableau",
                "topics": [
                      "Advanced DAX Calculations",
                      "Data Modeling (Star Schema)",
                      "Executive Interactive Dashboards",
                      "Cloud KPI Monitoring"
                ]
          },
          {
                "month": 5,
                "title": "Supervised Machine Learning Algorithms",
                "topics": [
                      "Linear & Logistic Regression",
                      "Decision Trees & Random Forests",
                      "Gradient Boosting (XGBoost, LightGBM)",
                      "Cross-Validation & Regularization"
                ]
          },
          {
                "month": 6,
                "title": "Unsupervised Learning & Feature Engineering",
                "topics": [
                      "K-Means, DBSCAN Clustering",
                      "Dimensionality Reduction with PCA",
                      "Feature Encoding & Scaling",
                      "Anomaly Detection Techniques"
                ]
          },
          {
                "month": 7,
                "title": "Deep Learning Foundations with PyTorch & TensorFlow",
                "topics": [
                      "Artificial Neural Networks (ANN)",
                      "Backpropagation & Gradient Descent",
                      "Activation Functions & Optimizers",
                      "Dropout & Batch Normalization"
                ]
          },
          {
                "month": 8,
                "title": "Computer Vision & Image Processing",
                "topics": [
                      "Convolutional Neural Networks (CNN)",
                      "Image Augmentation with OpenCV",
                      "Object Detection with YOLO",
                      "Transfer Learning (ResNet, VGG)"
                ]
          },
          {
                "month": 9,
                "title": "Natural Language Processing (NLP)",
                "topics": [
                      "Text Preprocessing & Tokenization",
                      "Word2Vec, TF-IDF & Embeddings",
                      "Recurrent Neural Networks (RNN & LSTM)",
                      "Transformers & BERT Foundations"
                ]
          },
          {
                "month": 10,
                "title": "Generative AI & Large Language Models (LLMs)",
                "topics": [
                      "Attention Mechanisms & GPT Architecture",
                      "Prompt Engineering & Few-Shot Learning",
                      "Building RAG with LangChain & Pinecone",
                      "Fine-Tuning Open Source LLMs (Llama)"
                ]
          },
          {
                "month": 11,
                "title": "Big Data with PySpark & Cloud MLOps",
                "topics": [
                      "Distributed Computing with PySpark",
                      "Model Packaging with FastAPI & Docker",
                      "CI/CD for ML with MLflow",
                      "AWS SageMaker Deployment"
                ]
          },
          {
                "month": 12,
                "title": "Enterprise Capstone & Placement Drives",
                "topics": [
                      "Industry Capstone Project Defense",
                      "GitHub Research Portfolio Setup",
                      "Mock Technical & Coding Rounds",
                      "Direct Hiring Drives with 60+ Partners"
                ]
          }
    ],
    trainers: [
          {
                "name": "Dr. Vikramaditya Sen",
                "designation": "Lead AI & Data Science Architect (Ex-Amazon)",
                "photo": "/trainers/vikramaditya.jpg",
                "experienceYears": 12,
                "teaches": [
                      "Python",
                      "Machine Learning",
                      "Deep Learning",
                      "Generative AI"
                ],
                "bio": "Veteran Data Scientist with 12+ years of experience engineering high-throughput machine learning pipelines at Amazon and top fintech startups.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Pooja Malhotra",
                "designation": "Principal BI & Analytics Consultant",
                "photo": "/trainers/pooja.jpg",
                "experienceYears": 8,
                "teaches": [
                      "Power BI",
                      "SQL",
                      "Tableau",
                      "Business Analytics"
                ],
                "bio": "Specialist in large-scale analytics pipelines, executive reporting, and strategic DAX modeling. Former senior consultant at Genpact.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "Python",
                "logo": "python"
          },
          {
                "name": "SQL",
                "logo": "sql"
          },
          {
                "name": "Power BI",
                "logo": "powerbi"
          },
          {
                "name": "PyTorch",
                "logo": "pytorch"
          },
          {
                "name": "TensorFlow",
                "logo": "tensorflow"
          },
          {
                "name": "AWS",
                "logo": "aws"
          },
          {
                "name": "Docker",
                "logo": "docker"
          },
          {
                "name": "PySpark",
                "logo": "pyspark"
          }
    ],
    reviews: [
          {
                "studentName": "Aman Singhal",
                "course": "Data Science & Analytics",
                "company": "Placed at Deloitte • ₹8.5 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The hands-on Python & Power BI client projects gave me the practical confidence to crack 3 enterprise data analyst interviews back-to-back."
          },
          {
                "studentName": "Priyanka Roy",
                "course": "Data Science & AI",
                "company": "Placed at Accenture • ₹7.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Transitioning from a non-IT background to Data Analytics seemed tough, but DizitalAdda's step-by-step mentor support made everything intuitive."
          },
          {
                "studentName": "Rohan Kulkarni",
                "course": "Machine Learning & AI",
                "company": "Placed at Genpact • ₹9.0 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Mock interviews, 1-on-1 resume optimization, and weekly placement drives helped me land my dream role within 40 days of graduation."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Diploma in Data Science & AI?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "advanced-certification-in-data-science-and-ai",
    name: "Advanced Certification in Data Science & AI",
    tagline: "Accelerate your data career with predictive analytics, machine learning algorithms, deep learning, and cloud deployment.",
    heroImage: "/courses/images/advanced-certification-in-data-science-and-ai.png",
    duration: "6 Months",
    mode: "Live Interactive + Offline Labs",
    level: "Advanced",
    modules: [
          {
                "month": 1,
                "title": "Python for Data Science & Advanced SQL",
                "topics": [
                      "Pandas & NumPy Data Wrangling",
                      "Advanced SQL Joins & Window Functions",
                      "Exploratory Data Analysis (EDA)",
                      "Data Visualization with Seaborn"
                ]
          },
          {
                "month": 2,
                "title": "Statistical Foundations & Business Analytics",
                "topics": [
                      "Probability & Distributions",
                      "Hypothesis Testing & A/B Experiments",
                      "Feature Engineering Techniques",
                      "Power BI Executive Reports"
                ]
          },
          {
                "month": 3,
                "title": "Machine Learning Algorithms Mastery",
                "topics": [
                      "Regression & Classification Models",
                      "Tree Ensembles & Gradient Boosting",
                      "Model Hyperparameter Tuning",
                      "Cross-Validation Strategies"
                ]
          },
          {
                "month": 4,
                "title": "Unsupervised Learning & Deep Learning Basics",
                "topics": [
                      "Clustering (K-Means & Hierarchical)",
                      "Dimensionality Reduction with PCA",
                      "Neural Networks with TensorFlow/Keras",
                      "Model Performance Metrics"
                ]
          },
          {
                "month": 5,
                "title": "Generative AI & MLOps Pipelines",
                "topics": [
                      "LLMs, Prompt Engineering & LangChain",
                      "FastAPI Microservices",
                      "Docker Containers for Models",
                      "AWS Cloud Deployment"
                ]
          },
          {
                "month": 6,
                "title": "Capstone Project & Placement Rounds",
                "topics": [
                      "Real-World Business Prediction Capstone",
                      "GitHub Portfolio Polish",
                      "Technical Mock Interviews",
                      "Corporate Placement Drives"
                ]
          }
    ],
    trainers: [
          {
                "name": "Dr. Vikramaditya Sen",
                "designation": "Lead AI & Data Science Architect (Ex-Amazon)",
                "photo": "/trainers/vikramaditya.jpg",
                "experienceYears": 12,
                "teaches": [
                      "Python",
                      "Machine Learning",
                      "Deep Learning",
                      "Generative AI"
                ],
                "bio": "Veteran Data Scientist with 12+ years of experience engineering high-throughput machine learning pipelines at Amazon and top fintech startups.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Pooja Malhotra",
                "designation": "Principal BI & Analytics Consultant",
                "photo": "/trainers/pooja.jpg",
                "experienceYears": 8,
                "teaches": [
                      "Power BI",
                      "SQL",
                      "Tableau",
                      "Business Analytics"
                ],
                "bio": "Specialist in large-scale analytics pipelines, executive reporting, and strategic DAX modeling. Former senior consultant at Genpact.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "Python",
                "logo": "python"
          },
          {
                "name": "SQL",
                "logo": "sql"
          },
          {
                "name": "Scikit-Learn",
                "logo": "scikit"
          },
          {
                "name": "TensorFlow",
                "logo": "tensorflow"
          },
          {
                "name": "Power BI",
                "logo": "powerbi"
          },
          {
                "name": "AWS Cloud",
                "logo": "aws"
          }
    ],
    reviews: [
          {
                "studentName": "Aman Singhal",
                "course": "Data Science & Analytics",
                "company": "Placed at Deloitte • ₹8.5 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The hands-on Python & Power BI client projects gave me the practical confidence to crack 3 enterprise data analyst interviews back-to-back."
          },
          {
                "studentName": "Priyanka Roy",
                "course": "Data Science & AI",
                "company": "Placed at Accenture • ₹7.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Transitioning from a non-IT background to Data Analytics seemed tough, but DizitalAdda's step-by-step mentor support made everything intuitive."
          },
          {
                "studentName": "Rohan Kulkarni",
                "course": "Machine Learning & AI",
                "company": "Placed at Genpact • ₹9.0 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Mock interviews, 1-on-1 resume optimization, and weekly placement drives helped me land my dream role within 40 days of graduation."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Advanced Certification in Data Science & AI?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "diploma-in-data-analytics-and-ai",
    name: "Diploma in Data Analytics & AI",
    tagline: "Master Excel, Advanced SQL, Power BI, Tableau, Python, GA4 & AI-powered automated business intelligence.",
    heroImage: "/courses/images/diploma-in-data-analytics-and-ai.png",
    duration: "12 Months",
    mode: "Live Interactive + Offline Labs",
    level: "1 Year Master Program",
    modules: [
          {
                "month": 1,
                "title": "Advanced Microsoft Excel for Analytics",
                "topics": [
                      "Formulas, Index-Match & XLOOKUP",
                      "Dynamic Pivot Tables & Slicers",
                      "What-If Analysis & Goal Seek",
                      "Excel Dashboards & Automation"
                ]
          },
          {
                "month": 2,
                "title": "Relational Database Management & SQL",
                "topics": [
                      "Database Schema & Normalization",
                      "SQL Queries, Filters & Aggregations",
                      "Multi-Table Joins & Subqueries",
                      "Data Cleansing in SQL"
                ]
          },
          {
                "month": 3,
                "title": "Advanced SQL & Google BigQuery",
                "topics": [
                      "Window Functions (RANK, ROW_NUMBER, NTILE)",
                      "Common Table Expressions (CTEs)",
                      "Stored Procedures & Views",
                      "BigQuery Cloud Analytics"
                ]
          },
          {
                "month": 4,
                "title": "Business Intelligence with Power BI",
                "topics": [
                      "Power Query Data Transformation",
                      "Data Modeling & Star Schema",
                      "Advanced DAX Formulas & Measures",
                      "Interactive Dashboard Visualizations"
                ]
          },
          {
                "month": 5,
                "title": "Visual Analytics with Tableau",
                "topics": [
                      "Connecting to Enterprise Data Sources",
                      "Tableau Calculated Fields & LOD Expressions",
                      "Geographic Mapping & Interactive Actions",
                      "Tableau Server & Online Sharing"
                ]
          },
          {
                "month": 6,
                "title": "Python for Data Analysis",
                "topics": [
                      "Python Syntax & Jupyter Notebooks",
                      "NumPy & Pandas Data Manipulation",
                      "Cleaning Missing Data & Duplicates",
                      "Matplotlib & Seaborn Charting"
                ]
          },
          {
                "month": 7,
                "title": "Applied Business Statistics",
                "topics": [
                      "Descriptive & Inferential Statistics",
                      "Confidence Intervals & Margin of Error",
                      "Correlation Analysis",
                      "Business Forecasting Methods"
                ]
          },
          {
                "month": 8,
                "title": "Web & Digital Analytics (GA4)",
                "topics": [
                      "Google Analytics 4 Metric Framework",
                      "Funnel Exploration & Cohort Analysis",
                      "E-Commerce Revenue Analytics",
                      "Looker Studio Cross-Channel Dashboards"
                ]
          },
          {
                "month": 9,
                "title": "Predictive Analytics & Automated ML",
                "topics": [
                      "Linear Regression for Trend Forecasts",
                      "Logistic Regression for Churn Prediction",
                      "Time-Series Forecasting Basics",
                      "AutoML Tools for Business Analysts"
                ]
          },
          {
                "month": 10,
                "title": "AI-Powered BI & GenAI Tools",
                "topics": [
                      "AI in Power BI (Copilot, Q&A, Insights)",
                      "ChatGPT for SQL Query Generation",
                      "Prompt Engineering for Market Research",
                      "Automated Reporting Workflows"
                ]
          },
          {
                "month": 11,
                "title": "Industry Capstone Projects",
                "topics": [
                      "Retail / E-Commerce Sales Analysis",
                      "Healthcare / BFSI Analytics Dashboard",
                      "Executive Business Presentation",
                      "Portfolio Creation"
                ]
          },
          {
                "month": 12,
                "title": "Placement Mastery & Career Launch",
                "topics": [
                      "ATS Resume Building",
                      "Live SQL & Power BI Case Study Rounds",
                      "Behavioral & Technical Mock Interviews",
                      "Direct Hiring Drives with 60+ Partners"
                ]
          }
    ],
    trainers: [
          {
                "name": "Dr. Vikramaditya Sen",
                "designation": "Lead AI & Data Science Architect (Ex-Amazon)",
                "photo": "/trainers/vikramaditya.jpg",
                "experienceYears": 12,
                "teaches": [
                      "Python",
                      "Machine Learning",
                      "Deep Learning",
                      "Generative AI"
                ],
                "bio": "Veteran Data Scientist with 12+ years of experience engineering high-throughput machine learning pipelines at Amazon and top fintech startups.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Pooja Malhotra",
                "designation": "Principal BI & Analytics Consultant",
                "photo": "/trainers/pooja.jpg",
                "experienceYears": 8,
                "teaches": [
                      "Power BI",
                      "SQL",
                      "Tableau",
                      "Business Analytics"
                ],
                "bio": "Specialist in large-scale analytics pipelines, executive reporting, and strategic DAX modeling. Former senior consultant at Genpact.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "Excel",
                "logo": "excel"
          },
          {
                "name": "SQL",
                "logo": "sql"
          },
          {
                "name": "Power BI",
                "logo": "powerbi"
          },
          {
                "name": "Tableau",
                "logo": "tableau"
          },
          {
                "name": "Python",
                "logo": "python"
          },
          {
                "name": "BigQuery",
                "logo": "bigquery"
          },
          {
                "name": "GA4",
                "logo": "ga4"
          }
    ],
    reviews: [
          {
                "studentName": "Aman Singhal",
                "course": "Data Science & Analytics",
                "company": "Placed at Deloitte • ₹8.5 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The hands-on Python & Power BI client projects gave me the practical confidence to crack 3 enterprise data analyst interviews back-to-back."
          },
          {
                "studentName": "Priyanka Roy",
                "course": "Data Science & AI",
                "company": "Placed at Accenture • ₹7.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Transitioning from a non-IT background to Data Analytics seemed tough, but DizitalAdda's step-by-step mentor support made everything intuitive."
          },
          {
                "studentName": "Rohan Kulkarni",
                "course": "Machine Learning & AI",
                "company": "Placed at Genpact • ₹9.0 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Mock interviews, 1-on-1 resume optimization, and weekly placement drives helped me land my dream role within 40 days of graduation."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Diploma in Data Analytics & AI?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "advanced-certification-in-data-analytics-and-ai",
    name: "Advanced Certification in Data Analytics & AI",
    tagline: "Hands-on data analytics training with real enterprise data pipelines, DAX modeling, SQL, Tableau, and Power BI.",
    heroImage: "/courses/images/advanced-certification-in-data-analytics-and-ai.png",
    duration: "6 Months",
    mode: "Live Interactive + Offline Labs",
    level: "Advanced",
    modules: [
          {
                "month": 1,
                "title": "Advanced Excel & Data Visualization",
                "topics": [
                      "Complex Formulas & Nested Logic",
                      "Pivot Tables & Dynamic Slicers",
                      "Executive Dashboard Wireframes",
                      "Macros & Data Cleansing"
                ]
          },
          {
                "month": 2,
                "title": "SQL for Enterprise Business Intelligence",
                "topics": [
                      "Select, Group By, Having & Aggregate Queries",
                      "Joins, Unions & Subqueries",
                      "Window Functions (Rank, Dense_Rank)",
                      "CTEs & Query Optimization"
                ]
          },
          {
                "month": 3,
                "title": "Power BI End-to-End Analytics",
                "topics": [
                      "Power Query ETL Transformation",
                      "Data Modeling & Relationship Management",
                      "DAX Measures (Time Intelligence, CALCULATE)",
                      "Publishing Reports to Power BI Cloud"
                ]
          },
          {
                "month": 4,
                "title": "Visual Storytelling with Tableau",
                "topics": [
                      "Data Blending & Joins",
                      "Calculated Fields & LOD Expressions",
                      "Interactive Storyboards & Dashboards",
                      "Executive Visual Design Guidelines"
                ]
          },
          {
                "month": 5,
                "title": "Python for Analytics & Business Statistics",
                "topics": [
                      "Pandas DataFrames & Series",
                      "Data Cleaning & Transformation",
                      "Descriptive & Inferential Statistics",
                      "Automating Reports with Python"
                ]
          },
          {
                "month": 6,
                "title": "Live Business Project & Career Placement",
                "topics": [
                      "Live E-Commerce / BFSI Capstone Project",
                      "Portfolio Presentation & Defense",
                      "SQL & Power BI Technical Interview Prep",
                      "Placement Drives & Corporate Introductions"
                ]
          }
    ],
    trainers: [
          {
                "name": "Dr. Vikramaditya Sen",
                "designation": "Lead AI & Data Science Architect (Ex-Amazon)",
                "photo": "/trainers/vikramaditya.jpg",
                "experienceYears": 12,
                "teaches": [
                      "Python",
                      "Machine Learning",
                      "Deep Learning",
                      "Generative AI"
                ],
                "bio": "Veteran Data Scientist with 12+ years of experience engineering high-throughput machine learning pipelines at Amazon and top fintech startups.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Pooja Malhotra",
                "designation": "Principal BI & Analytics Consultant",
                "photo": "/trainers/pooja.jpg",
                "experienceYears": 8,
                "teaches": [
                      "Power BI",
                      "SQL",
                      "Tableau",
                      "Business Analytics"
                ],
                "bio": "Specialist in large-scale analytics pipelines, executive reporting, and strategic DAX modeling. Former senior consultant at Genpact.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "Advanced Excel",
                "logo": "excel"
          },
          {
                "name": "SQL",
                "logo": "sql"
          },
          {
                "name": "Power BI",
                "logo": "powerbi"
          },
          {
                "name": "Tableau",
                "logo": "tableau"
          },
          {
                "name": "Python",
                "logo": "python"
          }
    ],
    reviews: [
          {
                "studentName": "Aman Singhal",
                "course": "Data Science & Analytics",
                "company": "Placed at Deloitte • ₹8.5 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The hands-on Python & Power BI client projects gave me the practical confidence to crack 3 enterprise data analyst interviews back-to-back."
          },
          {
                "studentName": "Priyanka Roy",
                "course": "Data Science & AI",
                "company": "Placed at Accenture • ₹7.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Transitioning from a non-IT background to Data Analytics seemed tough, but DizitalAdda's step-by-step mentor support made everything intuitive."
          },
          {
                "studentName": "Rohan Kulkarni",
                "course": "Machine Learning & AI",
                "company": "Placed at Genpact • ₹9.0 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Mock interviews, 1-on-1 resume optimization, and weekly placement drives helped me land my dream role within 40 days of graduation."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Advanced Certification in Data Analytics & AI?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "certification-in-data-analytics-and-ai",
    name: "Certification in Data Analytics & AI",
    tagline: "Fast-track foundation in Business Analytics, Advanced Excel, SQL queries, and Power BI interactive dashboards.",
    heroImage: "/courses/images/certification-in-data-analytics-and-ai.png",
    duration: "3 Months",
    mode: "Live Interactive + Offline Labs",
    level: "Fast-Track",
    modules: [
          {
                "month": 1,
                "title": "Advanced Excel for Business Analytics",
                "topics": [
                      "Formulas, VLOOKUP & XLOOKUP",
                      "Pivot Tables, Filters & Summaries",
                      "Data Cleaning & Formatting",
                      "Interactive Excel Dashboards"
                ]
          },
          {
                "month": 2,
                "title": "SQL Querying & Data Analysis",
                "topics": [
                      "Relational Database Fundamentals",
                      "Filtering, Sorting & Aggregating Data",
                      "Table Joins (Inner, Left, Right)",
                      "Business Scenario Query Drills"
                ]
          },
          {
                "month": 3,
                "title": "Power BI Dashboards & Career Launch",
                "topics": [
                      "Connecting Data to Power BI",
                      "Creating Visualizations & KPI Cards",
                      "Basic DAX Formulas",
                      "Resume Building & Interview Guidance"
                ]
          }
    ],
    trainers: [
          {
                "name": "Dr. Vikramaditya Sen",
                "designation": "Lead AI & Data Science Architect (Ex-Amazon)",
                "photo": "/trainers/vikramaditya.jpg",
                "experienceYears": 12,
                "teaches": [
                      "Python",
                      "Machine Learning",
                      "Deep Learning",
                      "Generative AI"
                ],
                "bio": "Veteran Data Scientist with 12+ years of experience engineering high-throughput machine learning pipelines at Amazon and top fintech startups.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Pooja Malhotra",
                "designation": "Principal BI & Analytics Consultant",
                "photo": "/trainers/pooja.jpg",
                "experienceYears": 8,
                "teaches": [
                      "Power BI",
                      "SQL",
                      "Tableau",
                      "Business Analytics"
                ],
                "bio": "Specialist in large-scale analytics pipelines, executive reporting, and strategic DAX modeling. Former senior consultant at Genpact.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "Excel",
                "logo": "excel"
          },
          {
                "name": "SQL",
                "logo": "sql"
          },
          {
                "name": "Power BI",
                "logo": "powerbi"
          }
    ],
    reviews: [
          {
                "studentName": "Aman Singhal",
                "course": "Data Science & Analytics",
                "company": "Placed at Deloitte • ₹8.5 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The hands-on Python & Power BI client projects gave me the practical confidence to crack 3 enterprise data analyst interviews back-to-back."
          },
          {
                "studentName": "Priyanka Roy",
                "course": "Data Science & AI",
                "company": "Placed at Accenture • ₹7.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Transitioning from a non-IT background to Data Analytics seemed tough, but DizitalAdda's step-by-step mentor support made everything intuitive."
          },
          {
                "studentName": "Rohan Kulkarni",
                "course": "Machine Learning & AI",
                "company": "Placed at Genpact • ₹9.0 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Mock interviews, 1-on-1 resume optimization, and weekly placement drives helped me land my dream role within 40 days of graduation."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Certification in Data Analytics & AI?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "diploma-in-genai-and-prompt-engineering",
    name: "Diploma in GenAI & Prompt Engineering",
    tagline: "Build autonomous AI agents, LangChain apps, fine-tune LLMs, RAG pipelines, and master generative multi-modal media.",
    heroImage: "/courses/images/diploma-in-genai-and-prompt-engineering.png",
    duration: "12 Months",
    mode: "Live Interactive + AI Labs",
    level: "1 Year Master Program",
    modules: [
          {
                "month": 1,
                "title": "Python Foundations for AI & Prompt Principles",
                "topics": [
                      "Python Syntax & OOPs for AI Engineers",
                      "Prompt Engineering Frameworks (Chain-of-Thought, Few-Shot)",
                      "OpenAI Playground & Parameter Tuning",
                      "Structured JSON Outputs from LLMs"
                ]
          },
          {
                "month": 2,
                "title": "OpenAI & Anthropic API Engineering",
                "topics": [
                      "Integrating Chat Completions API",
                      "Function Calling & Tool Use with LLMs",
                      "Token Economics & Rate Limiting",
                      "Building Custom AI Chatbots"
                ]
          },
          {
                "month": 3,
                "title": "Vector Embeddings & Semantic Search",
                "topics": [
                      "Understanding Text Embeddings",
                      "Vector Databases: Pinecone, Chroma & Weaviate",
                      "Similarity Search Metrics (Cosine, Dot Product)",
                      "Semantic Document Search Engines"
                ]
          },
          {
                "month": 4,
                "title": "LangChain Orchestration Framework",
                "topics": [
                      "Chains, Prompts & Output Parsers",
                      "Memory Management in AI Agents",
                      "Document Loaders & Text Splitters",
                      "Building Multi-Step Reasoning Chains"
                ]
          },
          {
                "month": 5,
                "title": "Retrieval-Augmented Generation (RAG) Architecture",
                "topics": [
                      "RAG Architecture Patterns",
                      "Query Routing, Chunking & HyDE",
                      "Evaluating RAG with Ragas Framework",
                      "Production Document Q&A Systems"
                ]
          },
          {
                "month": 6,
                "title": "LlamaIndex for Data-Dense LLM Apps",
                "topics": [
                      "Indexing Tabular & Unstructured Data",
                      "Knowledge Graphs with LLMs",
                      "Router & Sub-Question Query Engines",
                      "Production Query Optimizations"
                ]
          },
          {
                "month": 7,
                "title": "Autonomous AI Agents & Tool Calling",
                "topics": [
                      "ReAct Agent Frameworks",
                      "LangGraph for Stateful Multi-Agent Systems",
                      "CrewAI & AutoGen Workflows",
                      "Automated Web Browsing & Research Agents"
                ]
          },
          {
                "month": 8,
                "title": "Open Source LLMs & Local Inference",
                "topics": [
                      "Hugging Face Transformers Library",
                      "Running Llama, Mistral locally with Ollama / vLLM",
                      "Quantization (GGUF, AWQ, 4-bit/8-bit)",
                      "Local Privacy-Preserving AI Deployments"
                ]
          },
          {
                "month": 9,
                "title": "Fine-Tuning Large Language Models",
                "topics": [
                      "Instruction Fine-Tuning Principles",
                      "LoRA & QLoRA Parameter-Efficient Tuning",
                      "Dataset Preparation & Formatting",
                      "Evaluating Fine-Tuned Models on Benchmarks"
                ]
          },
          {
                "month": 10,
                "title": "Generative Media: Vision, Audio & Video AI",
                "topics": [
                      "Midjourney, Stable Diffusion & ComfyUI",
                      "Whisper Speech-to-Text & ElevenLabs Audio",
                      "Vision-Language Models (GPT-4V, LLaVA)",
                      "Multi-Modal AI Pipeline Integration"
                ]
          },
          {
                "month": 11,
                "title": "AI Security, Guardrails & Production MLOps",
                "topics": [
                      "Prompt Injection & Jailbreak Defense",
                      "NeMo Guardrails & Llama Guard",
                      "FastAPI & Docker Containerization",
                      "AWS / Cloud Serverless Deployment"
                ]
          },
          {
                "month": 12,
                "title": "Enterprise Capstone & Hiring Drives",
                "topics": [
                      "Enterprise GenAI Capstone Defense",
                      "GitHub & Product Demo Showcases",
                      "Technical Architecture Rounds",
                      "Placement Drives with AI Startups & MNCs"
                ]
          }
    ],
    trainers: [
          {
                "name": "Dr. Vikramaditya Sen",
                "designation": "Lead AI & Data Science Architect (Ex-Amazon)",
                "photo": "/trainers/vikramaditya.jpg",
                "experienceYears": 12,
                "teaches": [
                      "Python",
                      "Machine Learning",
                      "Deep Learning",
                      "Generative AI"
                ],
                "bio": "Veteran Data Scientist with 12+ years of experience engineering high-throughput machine learning pipelines at Amazon and top fintech startups.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Pooja Malhotra",
                "designation": "Principal BI & Analytics Consultant",
                "photo": "/trainers/pooja.jpg",
                "experienceYears": 8,
                "teaches": [
                      "Power BI",
                      "SQL",
                      "Tableau",
                      "Business Analytics"
                ],
                "bio": "Specialist in large-scale analytics pipelines, executive reporting, and strategic DAX modeling. Former senior consultant at Genpact.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "OpenAI API",
                "logo": "openai"
          },
          {
                "name": "LangChain",
                "logo": "langchain"
          },
          {
                "name": "LlamaIndex",
                "logo": "llamaindex"
          },
          {
                "name": "Hugging Face",
                "logo": "huggingface"
          },
          {
                "name": "Pinecone",
                "logo": "pinecone"
          },
          {
                "name": "Python",
                "logo": "python"
          },
          {
                "name": "Docker",
                "logo": "docker"
          }
    ],
    reviews: [
          {
                "studentName": "Aman Singhal",
                "course": "Data Science & Analytics",
                "company": "Placed at Deloitte • ₹8.5 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The hands-on Python & Power BI client projects gave me the practical confidence to crack 3 enterprise data analyst interviews back-to-back."
          },
          {
                "studentName": "Priyanka Roy",
                "course": "Data Science & AI",
                "company": "Placed at Accenture • ₹7.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Transitioning from a non-IT background to Data Analytics seemed tough, but DizitalAdda's step-by-step mentor support made everything intuitive."
          },
          {
                "studentName": "Rohan Kulkarni",
                "course": "Machine Learning & AI",
                "company": "Placed at Genpact • ₹9.0 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Mock interviews, 1-on-1 resume optimization, and weekly placement drives helped me land my dream role within 40 days of graduation."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Diploma in GenAI & Prompt Engineering?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "advanced-certification-in-genai-and-prompt-engineering",
    name: "Advanced Certification in GenAI & Prompt Engineering",
    tagline: "Master LLM orchestration, OpenAI APIs, vector databases, prompt engineering patterns, and custom AI chatbots.",
    heroImage: "/courses/images/advanced-certification-in-genai-and-prompt-engineering.png",
    duration: "6 Months",
    mode: "Live Interactive + AI Labs",
    level: "Advanced",
    modules: [
          {
                "month": 1,
                "title": "Prompt Engineering & LLM Architecture",
                "topics": [
                      "LLM Tokenization & Temperature Controls",
                      "Chain-of-Thought & Tree-of-Thought Prompts",
                      "Zero-Shot, One-Shot & Few-Shot Design",
                      "Prompt Leakage Prevention"
                ]
          },
          {
                "month": 2,
                "title": "OpenAI API Integration & Function Calling",
                "topics": [
                      "Python OpenAI SDK Mastery",
                      "Tool Calling & External API Triggers",
                      "Structured JSON Schema Extraction",
                      "Building Interactive Chatbot UI with Streamlit"
                ]
          },
          {
                "month": 3,
                "title": "Vector Databases & Semantic Search",
                "topics": [
                      "Understanding Vector Embeddings",
                      "Pinecone & Chroma Vector Setup",
                      "Semantic Search Algorithms",
                      "Document Ingestion & Chunking"
                ]
          },
          {
                "month": 4,
                "title": "LangChain & Retrieval-Augmented Generation (RAG)",
                "topics": [
                      "LangChain Chains & Output Parsers",
                      "RAG Pipeline from PDF Documents",
                      "Conversation Buffer & Summary Memory",
                      "Evaluating Answer Faithfulness"
                ]
          },
          {
                "month": 5,
                "title": "Autonomous Agents & Multi-Modal AI",
                "topics": [
                      "ReAct Agent Decision Frameworks",
                      "Vision Models (GPT-4o Vision)",
                      "Audio Synthesis with Whisper API",
                      "Building Automated Research Assistants"
                ]
          },
          {
                "month": 6,
                "title": "Capstone Project & AI Job Placement",
                "topics": [
                      "End-to-End Enterprise RAG Application",
                      "Docker Packaging & Cloud Deploy",
                      "Technical AI Architecture Interviews",
                      "Job Placement Assistance"
                ]
          }
    ],
    trainers: [
          {
                "name": "Dr. Vikramaditya Sen",
                "designation": "Lead AI & Data Science Architect (Ex-Amazon)",
                "photo": "/trainers/vikramaditya.jpg",
                "experienceYears": 12,
                "teaches": [
                      "Python",
                      "Machine Learning",
                      "Deep Learning",
                      "Generative AI"
                ],
                "bio": "Veteran Data Scientist with 12+ years of experience engineering high-throughput machine learning pipelines at Amazon and top fintech startups.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Pooja Malhotra",
                "designation": "Principal BI & Analytics Consultant",
                "photo": "/trainers/pooja.jpg",
                "experienceYears": 8,
                "teaches": [
                      "Power BI",
                      "SQL",
                      "Tableau",
                      "Business Analytics"
                ],
                "bio": "Specialist in large-scale analytics pipelines, executive reporting, and strategic DAX modeling. Former senior consultant at Genpact.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "OpenAI API",
                "logo": "openai"
          },
          {
                "name": "LangChain",
                "logo": "langchain"
          },
          {
                "name": "Pinecone",
                "logo": "pinecone"
          },
          {
                "name": "Python",
                "logo": "python"
          },
          {
                "name": "Streamlit",
                "logo": "streamlit"
          }
    ],
    reviews: [
          {
                "studentName": "Aman Singhal",
                "course": "Data Science & Analytics",
                "company": "Placed at Deloitte • ₹8.5 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The hands-on Python & Power BI client projects gave me the practical confidence to crack 3 enterprise data analyst interviews back-to-back."
          },
          {
                "studentName": "Priyanka Roy",
                "course": "Data Science & AI",
                "company": "Placed at Accenture • ₹7.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Transitioning from a non-IT background to Data Analytics seemed tough, but DizitalAdda's step-by-step mentor support made everything intuitive."
          },
          {
                "studentName": "Rohan Kulkarni",
                "course": "Machine Learning & AI",
                "company": "Placed at Genpact • ₹9.0 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Mock interviews, 1-on-1 resume optimization, and weekly placement drives helped me land my dream role within 40 days of graduation."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Advanced Certification in GenAI & Prompt Engineering?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "diploma-in-machine-learning-and-ai",
    name: "Diploma in Machine Learning & AI",
    tagline: "Deep dive into Supervised/Unsupervised ML, Neural Networks, PyTorch, TensorFlow, NLP & MLOps deployment.",
    heroImage: "/courses/images/diploma-in-machine-learning-and-ai.png",
    duration: "12 Months",
    mode: "Live Interactive + AI Labs",
    level: "1 Year Master Program",
    modules: [
          {
                "month": 1,
                "title": "Python Foundations & Scientific Libraries",
                "topics": [
                      "Advanced Python & OOPs Architecture",
                      "Vectorized Array Operations with NumPy",
                      "Data Manipulation with Pandas",
                      "Data Visualization Techniques"
                ]
          },
          {
                "month": 2,
                "title": "Mathematics & Statistics for Machine Learning",
                "topics": [
                      "Linear Algebra & Matrix Decompositions",
                      "Multivariate Calculus & Gradients",
                      "Probability Distributions & Bayes Theorem",
                      "Statistical Significance & Hypothesis Tests"
                ]
          },
          {
                "month": 3,
                "title": "Data Preprocessing & Feature Engineering",
                "topics": [
                      "Handling Outliers & Imputation",
                      "Encoding Categorical Variables",
                      "Feature Scaling & Power Transforms",
                      "Automated Feature Selection Pipelines"
                ]
          },
          {
                "month": 4,
                "title": "Supervised Learning Algorithms",
                "topics": [
                      "Linear & Logistic Regression",
                      "Decision Trees & Random Forests",
                      "Gradient Boosted Trees (XGBoost, CatBoost)",
                      "Support Vector Machines (SVM)"
                ]
          },
          {
                "month": 5,
                "title": "Unsupervised Learning & Clustering",
                "topics": [
                      "K-Means, K-Medoids & DBSCAN",
                      "Hierarchical Clustering Analysis",
                      "Principal Component Analysis (PCA)",
                      "t-SNE & Dimensionality Reduction"
                ]
          },
          {
                "month": 6,
                "title": "Model Evaluation & Hyperparameter Optimization",
                "topics": [
                      "ROC-AUC, Precision, Recall & F1 Scores",
                      "K-Fold Cross-Validation Strategies",
                      "Hyperparameter Search (Grid, Random, Bayesian/Optuna)",
                      "Handling Imbalanced Datasets (SMOTE)"
                ]
          },
          {
                "month": 7,
                "title": "Deep Learning Foundations with PyTorch",
                "topics": [
                      "Tensors & Autograd in PyTorch",
                      "Building Multi-Layer Perceptrons (MLP)",
                      "Loss Functions & Backpropagation",
                      "Optimizers (Adam, AdamW, RMSProp)"
                ]
          },
          {
                "month": 8,
                "title": "Convolutional Neural Networks (CNNs)",
                "topics": [
                      "Convolution, Pooling & Stride Mechanics",
                      "Modern CNNs (ResNet, EfficientNet)",
                      "Data Augmentation Techniques",
                      "Transfer Learning for Computer Vision"
                ]
          },
          {
                "month": 9,
                "title": "Recurrent Networks & Natural Language Processing",
                "topics": [
                      "Sequential Models (RNN, GRU, LSTM)",
                      "Word Embeddings (Word2Vec, GloVe)",
                      "Attention Mechanisms",
                      "Transformers Architecture Overview"
                ]
          },
          {
                "month": 10,
                "title": "Modern Generative AI & Foundation Models",
                "topics": [
                      "Diffusion Models & VAEs Overview",
                      "Transformer Fine-Tuning with Hugging Face",
                      "Prompt Tuning & PEFT / LoRA",
                      "LLM Inference Optimization"
                ]
          },
          {
                "month": 11,
                "title": "MLOps, Model Deployment & Monitoring",
                "topics": [
                      "REST APIs with FastAPI",
                      "Containerization with Docker",
                      "Experiment Tracking with MLflow",
                      "Model Drift Detection in Production"
                ]
          },
          {
                "month": 12,
                "title": "Industry Capstone & Placement Drives",
                "topics": [
                      "Production Machine Learning Capstone",
                      "GitHub Codebase & Paper Implementation",
                      "Technical Coding & Algorithm Interviews",
                      "Direct Placement Drives"
                ]
          }
    ],
    trainers: [
          {
                "name": "Dr. Vikramaditya Sen",
                "designation": "Lead AI & Data Science Architect (Ex-Amazon)",
                "photo": "/trainers/vikramaditya.jpg",
                "experienceYears": 12,
                "teaches": [
                      "Python",
                      "Machine Learning",
                      "Deep Learning",
                      "Generative AI"
                ],
                "bio": "Veteran Data Scientist with 12+ years of experience engineering high-throughput machine learning pipelines at Amazon and top fintech startups.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Pooja Malhotra",
                "designation": "Principal BI & Analytics Consultant",
                "photo": "/trainers/pooja.jpg",
                "experienceYears": 8,
                "teaches": [
                      "Power BI",
                      "SQL",
                      "Tableau",
                      "Business Analytics"
                ],
                "bio": "Specialist in large-scale analytics pipelines, executive reporting, and strategic DAX modeling. Former senior consultant at Genpact.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "Python",
                "logo": "python"
          },
          {
                "name": "PyTorch",
                "logo": "pytorch"
          },
          {
                "name": "TensorFlow",
                "logo": "tensorflow"
          },
          {
                "name": "Scikit-Learn",
                "logo": "scikit"
          },
          {
                "name": "Docker",
                "logo": "docker"
          },
          {
                "name": "MLflow",
                "logo": "mlflow"
          }
    ],
    reviews: [
          {
                "studentName": "Aman Singhal",
                "course": "Data Science & Analytics",
                "company": "Placed at Deloitte • ₹8.5 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The hands-on Python & Power BI client projects gave me the practical confidence to crack 3 enterprise data analyst interviews back-to-back."
          },
          {
                "studentName": "Priyanka Roy",
                "course": "Data Science & AI",
                "company": "Placed at Accenture • ₹7.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Transitioning from a non-IT background to Data Analytics seemed tough, but DizitalAdda's step-by-step mentor support made everything intuitive."
          },
          {
                "studentName": "Rohan Kulkarni",
                "course": "Machine Learning & AI",
                "company": "Placed at Genpact • ₹9.0 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Mock interviews, 1-on-1 resume optimization, and weekly placement drives helped me land my dream role within 40 days of graduation."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Diploma in Machine Learning & AI?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "advanced-certification-in-machine-learning-and-ai",
    name: "Advanced Certification in Machine Learning & AI",
    tagline: "Practical machine learning engineering: algorithm implementation, feature engineering, neural networks, and model serving.",
    heroImage: "/courses/images/advanced-certification-in-machine-learning-and-ai.png",
    duration: "6 Months",
    mode: "Live Interactive + AI Labs",
    level: "Advanced",
    modules: [
          {
                "month": 1,
                "title": "Advanced Python & Exploratory Data Analysis",
                "topics": [
                      "Object-Oriented Python for ML",
                      "Data Wrangling with Pandas & NumPy",
                      "Feature Exploration & Visualization",
                      "Data Pipeline Architecture"
                ]
          },
          {
                "month": 2,
                "title": "Statistical Modeling & Feature Engineering",
                "topics": [
                      "Probability & Distributions",
                      "Feature Scaling & Categorical Encoding",
                      "Handling Missing Data & Outliers",
                      "Hypothesis Testing for Feature Selection"
                ]
          },
          {
                "month": 3,
                "title": "Supervised Learning Models",
                "topics": [
                      "Regression Algorithms & Regularization (Lasso, Ridge)",
                      "Classification with Trees & Random Forests",
                      "Gradient Boosting (XGBoost, LightGBM)",
                      "Hyperparameter Optimization with Optuna"
                ]
          },
          {
                "month": 4,
                "title": "Unsupervised Learning & Clustering",
                "topics": [
                      "K-Means & Density-Based Clustering",
                      "PCA Dimensionality Reduction",
                      "Anomaly Detection Techniques",
                      "Model Evaluation & Cross-Validation"
                ]
          },
          {
                "month": 5,
                "title": "Deep Learning with TensorFlow / Keras",
                "topics": [
                      "Artificial Neural Networks Architecture",
                      "Backpropagation & Optimizers",
                      "Convolutional Neural Networks (CNNs)",
                      "Transfer Learning Implementation"
                ]
          },
          {
                "month": 6,
                "title": "Model Serving, Deployment & Capstone",
                "topics": [
                      "FastAPI Microservice for Predictions",
                      "Docker Container Packaging",
                      "Cloud Deployment on AWS",
                      "Mock Interviews & Placement Support"
                ]
          }
    ],
    trainers: [
          {
                "name": "Dr. Vikramaditya Sen",
                "designation": "Lead AI & Data Science Architect (Ex-Amazon)",
                "photo": "/trainers/vikramaditya.jpg",
                "experienceYears": 12,
                "teaches": [
                      "Python",
                      "Machine Learning",
                      "Deep Learning",
                      "Generative AI"
                ],
                "bio": "Veteran Data Scientist with 12+ years of experience engineering high-throughput machine learning pipelines at Amazon and top fintech startups.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Pooja Malhotra",
                "designation": "Principal BI & Analytics Consultant",
                "photo": "/trainers/pooja.jpg",
                "experienceYears": 8,
                "teaches": [
                      "Power BI",
                      "SQL",
                      "Tableau",
                      "Business Analytics"
                ],
                "bio": "Specialist in large-scale analytics pipelines, executive reporting, and strategic DAX modeling. Former senior consultant at Genpact.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "Python",
                "logo": "python"
          },
          {
                "name": "Scikit-Learn",
                "logo": "scikit"
          },
          {
                "name": "TensorFlow",
                "logo": "tensorflow"
          },
          {
                "name": "FastAPI",
                "logo": "fastapi"
          },
          {
                "name": "Docker",
                "logo": "docker"
          }
    ],
    reviews: [
          {
                "studentName": "Aman Singhal",
                "course": "Data Science & Analytics",
                "company": "Placed at Deloitte • ₹8.5 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The hands-on Python & Power BI client projects gave me the practical confidence to crack 3 enterprise data analyst interviews back-to-back."
          },
          {
                "studentName": "Priyanka Roy",
                "course": "Data Science & AI",
                "company": "Placed at Accenture • ₹7.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Transitioning from a non-IT background to Data Analytics seemed tough, but DizitalAdda's step-by-step mentor support made everything intuitive."
          },
          {
                "studentName": "Rohan Kulkarni",
                "course": "Machine Learning & AI",
                "company": "Placed at Genpact • ₹9.0 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Mock interviews, 1-on-1 resume optimization, and weekly placement drives helped me land my dream role within 40 days of graduation."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Advanced Certification in Machine Learning & AI?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "expert-training-in-cyber-security-and-ethical-hacking",
    name: "Expert Training in Cyber Security & Ethical Hacking",
    tagline: "1-year master program covering Network Security, VAPT, Web/Cloud Penetration Testing, SOC Operations & Forensics.",
    heroImage: "/courses/images/expert-training-in-cyber-security-and-ethical-hacking.png",
    duration: "12 Months",
    mode: "Live Hacking Labs + Campus",
    level: "Expert",
    modules: [
          {
                "month": 1,
                "title": "Networking Protocols & Linux Administration",
                "topics": [
                      "TCP/IP, OSI Layers, DNS & Subnetting",
                      "Kali Linux Terminal & Shell Scripting",
                      "Network Packet Analysis with Wireshark",
                      "Firewalls, IDS/IPS & VPN Architectures"
                ]
          },
          {
                "month": 2,
                "title": "Reconnaissance & Vulnerability Assessment",
                "topics": [
                      "OSINT & Passive Reconnaissance",
                      "Network Port Scanning with Nmap",
                      "Vulnerability Scanning with Nessus & OpenVAS",
                      "Threat Modeling & Attack Surface Mapping"
                ]
          },
          {
                "month": 3,
                "title": "System Hacking & Exploitation",
                "topics": [
                      "Password Cracking (John, Hashcat)",
                      "Privilege Escalation (Linux & Windows)",
                      "Metasploit Framework Exploitation",
                      "Malware Types: Trojans, Backdoors, Keyloggers"
                ]
          },
          {
                "month": 4,
                "title": "Web Application Penetration Testing (VAPT)",
                "topics": [
                      "OWASP Top 10 Vulnerabilities",
                      "SQL Injection (SQLi) Manual & Automated",
                      "Cross-Site Scripting (XSS) Stored & Reflected",
                      "CSRF, SSRF & IDOR Exploitation with Burp Suite"
                ]
          },
          {
                "month": 5,
                "title": "API & Mobile Application Security",
                "topics": [
                      "REST & GraphQL API Security Testing",
                      "Android APK Decompilation & Reverse Engineering",
                      "iOS Jailbreak & Static/Dynamic Analysis",
                      "Securing Mobile App Traffic"
                ]
          },
          {
                "month": 6,
                "title": "Wireless, IoT & Hardware Security",
                "topics": [
                      "Wi-Fi Protocol Security (WPA2/WPA3)",
                      "Deauthentication & Handshake Cracking",
                      "Evil Twin & Rogue Access Points",
                      "IoT Device Protocol Exploitation"
                ]
          },
          {
                "month": 7,
                "title": "Cloud Security (AWS & Azure)",
                "topics": [
                      "AWS IAM Misconfigurations & Privilege Escalation",
                      "S3 Bucket Exposure & Cloud Forensics",
                      "Container Security (Docker, Kubernetes)",
                      "Cloud Infrastructure Auditing Tools"
                ]
          },
          {
                "month": 8,
                "title": "Security Operations Center (SOC) & SIEM",
                "topics": [
                      "SOC Architecture & Incident Response Lifecycle",
                      "Log Ingestion & SIEM with Splunk",
                      "Creating Correlation Rules & Alerts",
                      "Threat Intelligence Feeds & MITRE ATT&CK Framework"
                ]
          },
          {
                "month": 9,
                "title": "Digital Forensics & Incident Response (DFIR)",
                "topics": [
                      "Chain of Custody & Evidence Acquisition",
                      "Disk Imaging (Autopsy, FTK Imager)",
                      "Memory Forensics with Volatility",
                      "Ransomware Triage & Timeline Reconstruction"
                ]
          },
          {
                "month": 10,
                "title": "Malware Analysis & Reverse Engineering",
                "topics": [
                      "Static Malware Analysis with Ghidra / IDA Pro",
                      "Dynamic Sandbox Analysis & API Hooking",
                      "Obfuscation & Packing Techniques",
                      "Signature Creation with YARA Rules"
                ]
          },
          {
                "month": 11,
                "title": "Red Team Ops & Active Directory Attacks",
                "topics": [
                      "Active Directory Architecture & Kerberoasting",
                      "Pass-the-Hash & Golden Ticket Attacks",
                      "C2 Frameworks (Cobalt Strike, Sliver Basics)",
                      "Bypassing Antivirus & EDR Solutions"
                ]
          },
          {
                "month": 12,
                "title": "Certifications Prep & Corporate Hiring",
                "topics": [
                      "CEH v13 / OSCP Methodology Practice",
                      "Live Target CTF Challenges",
                      "Cyber Security Resume & Portfolio",
                      "Direct Placement Drives with Cyber Security Firms"
                ]
          }
    ],
    trainers: [
          {
                "name": "Rishi Kant Sharma",
                "designation": "Chief Information Security Consultant (CEH, OSCP)",
                "photo": "/assets/img/trainers/rishi.webp",
                "experienceYears": 11,
                "teaches": [
                      "Ethical Hacking",
                      "VAPT",
                      "Network Security",
                      "Bug Bounty"
                ],
                "bio": "Certified ethical hacker and cyber defense consultant. Consulted for government institutions, banking infrastructure, and multinational corporate security ops.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Sameer Alam",
                "designation": "Digital Forensics & Incident Response Lead",
                "photo": "/assets/img/trainers/sameer.webp",
                "experienceYears": 7,
                "teaches": [
                      "Digital Forensics",
                      "SOC Analysis",
                      "Malware Analysis",
                      "Cyber Laws"
                ],
                "bio": "Expert forensic investigator assisting law enforcement and enterprise clients in resolving ransomware, memory breaches, and digital data recovery.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "Kali Linux",
                "logo": "kali"
          },
          {
                "name": "Burp Suite",
                "logo": "burp"
          },
          {
                "name": "Wireshark",
                "logo": "wireshark"
          },
          {
                "name": "Metasploit",
                "logo": "metasploit"
          },
          {
                "name": "Nmap",
                "logo": "nmap"
          },
          {
                "name": "Nessus",
                "logo": "nessus"
          },
          {
                "name": "Splunk",
                "logo": "splunk"
          },
          {
                "name": "Ghidra",
                "logo": "ghidra"
          }
    ],
    reviews: [
          {
                "studentName": "Nikhil Joshi",
                "course": "Cyber Security & Ethical Hacking",
                "company": "Placed at EY • ₹7.8 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Real VAPT labs and live CTF challenges gave me real offensive security skills. The trainers helped me clear CEH on my very first attempt."
          },
          {
                "studentName": "Sanya Arora",
                "course": "Cyber Security",
                "company": "Placed at PwC • ₹8.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The hands-on Burp Suite, Wireshark, and network defense modules gave me practical edge during corporate security rounds."
          },
          {
                "studentName": "Harsh Vardhan",
                "course": "Bug Bounty & Pen Testing",
                "company": "Independent Bug Hunter • $12k+ Bounties",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Learning vulnerability discovery from active bug bounty hunters at DizitalAdda helped me find my first critical CVE within 3 months."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Expert Training in Cyber Security & Ethical Hacking?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "advanced-certification-in-cyber-security-and-ethical-hacking",
    name: "Advanced Certification in Cyber Security & Ethical Hacking",
    tagline: "Hands-on VAPT, Metasploit, Kali Linux, Burp Suite, Network Defense & CEH v13 certification preparation.",
    heroImage: "/courses/images/advanced-certification-in-cyber-security-and-ethical-hacking.png",
    duration: "6 Months",
    mode: "Live Hacking Labs + Campus",
    level: "Advanced",
    modules: [
          {
                "month": 1,
                "title": "Networking Fundamentals & Kali Linux",
                "topics": [
                      "TCP/IP, Routing & Port Architectures",
                      "Kali Linux Command-Line Mastery",
                      "Packet Sniffing with Wireshark",
                      "Network Scanning & Mapping with Nmap"
                ]
          },
          {
                "month": 2,
                "title": "Vulnerability Assessment & Information Gathering",
                "topics": [
                      "OSINT Frameworks & Passive Recon",
                      "Automated Vulnerability Scanning (Nessus)",
                      "Enumeration (SMB, SNMP, SSH)",
                      "Threat Assessment Documentation"
                ]
          },
          {
                "month": 3,
                "title": "System Exploitation & Metasploit",
                "topics": [
                      "Payload Generation & Handlers",
                      "Buffer Overflow Concepts",
                      "Privilege Escalation Techniques",
                      "Post-Exploitation & Persistence"
                ]
          },
          {
                "month": 4,
                "title": "Web Application Security & OWASP Top 10",
                "topics": [
                      "Burp Suite Pro Configuration",
                      "SQL Injection & Cross-Site Scripting (XSS)",
                      "Authentication & Session Flaws",
                      "Broken Access Control & IDOR"
                ]
          },
          {
                "month": 5,
                "title": "Wireless Security, Social Engineering & Defensive Ops",
                "topics": [
                      "Wi-Fi Handshake Interception",
                      "Social Engineering Toolkits (SET)",
                      "Firewalls & Endpoint Defense Overview",
                      "Incident Reporting & Remediation"
                ]
          },
          {
                "month": 6,
                "title": "Live VAPT Project, CEH Prep & Placement",
                "topics": [
                      "Full VAPT Audit on Client Sandbox",
                      "Executive Report Writing",
                      "CEH v13 Question Bank Practice",
                      "Corporate Placement Support"
                ]
          }
    ],
    trainers: [
          {
                "name": "Rishi Kant Sharma",
                "designation": "Chief Information Security Consultant (CEH, OSCP)",
                "photo": "/assets/img/trainers/rishi.webp",
                "experienceYears": 11,
                "teaches": [
                      "Ethical Hacking",
                      "VAPT",
                      "Network Security",
                      "Bug Bounty"
                ],
                "bio": "Certified ethical hacker and cyber defense consultant. Consulted for government institutions, banking infrastructure, and multinational corporate security ops.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Sameer Alam",
                "designation": "Digital Forensics & Incident Response Lead",
                "photo": "/assets/img/trainers/sameer.webp",
                "experienceYears": 7,
                "teaches": [
                      "Digital Forensics",
                      "SOC Analysis",
                      "Malware Analysis",
                      "Cyber Laws"
                ],
                "bio": "Expert forensic investigator assisting law enforcement and enterprise clients in resolving ransomware, memory breaches, and digital data recovery.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "Kali Linux",
                "logo": "kali"
          },
          {
                "name": "Burp Suite",
                "logo": "burp"
          },
          {
                "name": "Metasploit",
                "logo": "metasploit"
          },
          {
                "name": "Wireshark",
                "logo": "wireshark"
          },
          {
                "name": "Nmap",
                "logo": "nmap"
          },
          {
                "name": "Nessus",
                "logo": "nessus"
          }
    ],
    reviews: [
          {
                "studentName": "Nikhil Joshi",
                "course": "Cyber Security & Ethical Hacking",
                "company": "Placed at EY • ₹7.8 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Real VAPT labs and live CTF challenges gave me real offensive security skills. The trainers helped me clear CEH on my very first attempt."
          },
          {
                "studentName": "Sanya Arora",
                "course": "Cyber Security",
                "company": "Placed at PwC • ₹8.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The hands-on Burp Suite, Wireshark, and network defense modules gave me practical edge during corporate security rounds."
          },
          {
                "studentName": "Harsh Vardhan",
                "course": "Bug Bounty & Pen Testing",
                "company": "Independent Bug Hunter • $12k+ Bounties",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Learning vulnerability discovery from active bug bounty hunters at DizitalAdda helped me find my first critical CVE within 3 months."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Advanced Certification in Cyber Security & Ethical Hacking?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "foundation-in-cyber-security-and-ethical-hacking",
    name: "Foundation in Cyber Security & Ethical Hacking",
    tagline: "Essential cybersecurity fundamentals, networking protocols, Linux terminal, cryptography & ethical hacking basics.",
    heroImage: "/courses/images/foundation-in-cyber-security-and-ethical-hacking.png",
    duration: "3 Months",
    mode: "Live Interactive + Labs",
    level: "Beginner",
    modules: [
          {
                "month": 1,
                "title": "Computer Networks & Linux Fundamentals",
                "topics": [
                      "OSI & TCP/IP Model Breakdown",
                      "IP Addressing & Subnetting",
                      "Installing Kali Linux in VirtualBox",
                      "Essential Linux Commands"
                ]
          },
          {
                "month": 2,
                "title": "Information Gathering & Network Scanning",
                "topics": [
                      "Passive Reconnaissance with Google Dorks",
                      "Port Scanning with Nmap",
                      "Wireshark Traffic Sniffing",
                      "Vulnerability Concepts"
                ]
          },
          {
                "month": 3,
                "title": "Basics of Ethical Hacking & Cyber Defense",
                "topics": [
                      "Password Security & Cracking Basics",
                      "Common Web Vulnerabilities Introduction",
                      "Protecting Networks & Safe Browsing",
                      "Cyber Career Roadmap & Certification Guidance"
                ]
          }
    ],
    trainers: [
          {
                "name": "Rishi Kant Sharma",
                "designation": "Chief Information Security Consultant (CEH, OSCP)",
                "photo": "/assets/img/trainers/rishi.webp",
                "experienceYears": 11,
                "teaches": [
                      "Ethical Hacking",
                      "VAPT",
                      "Network Security",
                      "Bug Bounty"
                ],
                "bio": "Certified ethical hacker and cyber defense consultant. Consulted for government institutions, banking infrastructure, and multinational corporate security ops.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Sameer Alam",
                "designation": "Digital Forensics & Incident Response Lead",
                "photo": "/assets/img/trainers/sameer.webp",
                "experienceYears": 7,
                "teaches": [
                      "Digital Forensics",
                      "SOC Analysis",
                      "Malware Analysis",
                      "Cyber Laws"
                ],
                "bio": "Expert forensic investigator assisting law enforcement and enterprise clients in resolving ransomware, memory breaches, and digital data recovery.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "Kali Linux",
                "logo": "kali"
          },
          {
                "name": "Wireshark",
                "logo": "wireshark"
          },
          {
                "name": "Nmap",
                "logo": "nmap"
          }
    ],
    reviews: [
          {
                "studentName": "Nikhil Joshi",
                "course": "Cyber Security & Ethical Hacking",
                "company": "Placed at EY • ₹7.8 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Real VAPT labs and live CTF challenges gave me real offensive security skills. The trainers helped me clear CEH on my very first attempt."
          },
          {
                "studentName": "Sanya Arora",
                "course": "Cyber Security",
                "company": "Placed at PwC • ₹8.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The hands-on Burp Suite, Wireshark, and network defense modules gave me practical edge during corporate security rounds."
          },
          {
                "studentName": "Harsh Vardhan",
                "course": "Bug Bounty & Pen Testing",
                "company": "Independent Bug Hunter • $12k+ Bounties",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Learning vulnerability discovery from active bug bounty hunters at DizitalAdda helped me find my first critical CVE within 3 months."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Foundation in Cyber Security & Ethical Hacking?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "certification-in-digital-forensic-and-cyber-investigation",
    name: "Certification in Digital Forensics & Cyber Investigation",
    tagline: "Master digital evidence collection, disk analysis, memory forensics, mobile forensics, and cyber law compliance.",
    heroImage: "/courses/images/certification-in-digital-forensic-and-cyber-investigation.png",
    duration: "4 Months",
    mode: "Live Interactive + Forensic Labs",
    level: "Specialist",
    modules: [
          {
                "month": 1,
                "title": "Digital Forensic Principles & Evidence Acquisition",
                "topics": [
                      "Cyber Crime Classifications & Indian IT Act 2000",
                      "Chain of Custody & Search/Seizure Rules",
                      "Forensic Disk Imaging with FTK Imager",
                      "Write Blockers & Hashing Verification (MD5/SHA256)"
                ]
          },
          {
                "month": 2,
                "title": "File Systems & Disk Forensics",
                "topics": [
                      "NTFS, FAT32 & EXT4 File System Internals",
                      "Recovering Deleted Files & Carving Techniques",
                      "Windows Registry & Event Log Analysis",
                      "Browser Artifacts & Email Header Forensics"
                ]
          },
          {
                "month": 3,
                "title": "Memory & Network Forensics",
                "topics": [
                      "Volatile Memory Acquisition (RAM)",
                      "Analyzing Memory Dumps with Volatility",
                      "Detecting Injected DLLs & Hidden Processes",
                      "Network Packet Reconstruction with Wireshark"
                ]
          },
          {
                "month": 4,
                "title": "Mobile Forensics, Reporting & Court Admissibility",
                "topics": [
                      "Android & iOS Forensics Concepts",
                      "Deepfake & Multimedia Authenticity Verification",
                      "Writing Expert Court Testimony Reports",
                      "Career Placement in Forensic Consultancies"
                ]
          }
    ],
    trainers: [
          {
                "name": "Rishi Kant Sharma",
                "designation": "Chief Information Security Consultant (CEH, OSCP)",
                "photo": "/assets/img/trainers/rishi.webp",
                "experienceYears": 11,
                "teaches": [
                      "Ethical Hacking",
                      "VAPT",
                      "Network Security",
                      "Bug Bounty"
                ],
                "bio": "Certified ethical hacker and cyber defense consultant. Consulted for government institutions, banking infrastructure, and multinational corporate security ops.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Sameer Alam",
                "designation": "Digital Forensics & Incident Response Lead",
                "photo": "/assets/img/trainers/sameer.webp",
                "experienceYears": 7,
                "teaches": [
                      "Digital Forensics",
                      "SOC Analysis",
                      "Malware Analysis",
                      "Cyber Laws"
                ],
                "bio": "Expert forensic investigator assisting law enforcement and enterprise clients in resolving ransomware, memory breaches, and digital data recovery.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "Autopsy",
                "logo": "autopsy"
          },
          {
                "name": "FTK Imager",
                "logo": "ftk"
          },
          {
                "name": "Volatility",
                "logo": "volatility"
          },
          {
                "name": "Wireshark",
                "logo": "wireshark"
          },
          {
                "name": "X-Ways",
                "logo": "xways"
          }
    ],
    reviews: [
          {
                "studentName": "Nikhil Joshi",
                "course": "Cyber Security & Ethical Hacking",
                "company": "Placed at EY • ₹7.8 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Real VAPT labs and live CTF challenges gave me real offensive security skills. The trainers helped me clear CEH on my very first attempt."
          },
          {
                "studentName": "Sanya Arora",
                "course": "Cyber Security",
                "company": "Placed at PwC • ₹8.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The hands-on Burp Suite, Wireshark, and network defense modules gave me practical edge during corporate security rounds."
          },
          {
                "studentName": "Harsh Vardhan",
                "course": "Bug Bounty & Pen Testing",
                "company": "Independent Bug Hunter • $12k+ Bounties",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Learning vulnerability discovery from active bug bounty hunters at DizitalAdda helped me find my first critical CVE within 3 months."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Certification in Digital Forensics & Cyber Investigation?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "expert-training-in-bug-bounty",
    name: "Expert Training in Bug Bounty & Penetration Testing",
    tagline: "Hunt security vulnerabilities on live targets, master OWASP Top 10, API security testing & earn bounties on HackerOne.",
    heroImage: "/courses/images/expert-training-in-bug-bounty.png",
    duration: "4 Months",
    mode: "Live Interactive + Target Labs",
    level: "Specialist",
    modules: [
          {
                "month": 1,
                "title": "Reconnaissance Automation for Bug Hunters",
                "topics": [
                      "Subdomain Enumeration (Amass, Subfinder)",
                      "Port Scanning & Service Fingerprinting at Scale",
                      "JavaScript File Analysis for Leaked Keys",
                      "Building Automated Recon Pipelines with Bash"
                ]
          },
          {
                "month": 2,
                "title": "Web Vulnerability Hunting (OWASP Deep Dive)",
                "topics": [
                      "Bypassing WAFs for Cross-Site Scripting (XSS)",
                      "SQL Injection Advanced Extraction",
                      "Server-Side Request Forgery (SSRF) Exploitation",
                      "Insecure Direct Object References (IDOR) Hunting"
                ]
          },
          {
                "month": 3,
                "title": "Business Logic Flaws & API Penetration Testing",
                "topics": [
                      "Race Conditions & Payment Gateway Bypasses",
                      "Authentication & Password Reset Flaws",
                      "REST API & GraphQL Security Testing",
                      "Automating Tests with Nuclei Templates"
                ]
          },
          {
                "month": 4,
                "title": "Bug Bounty Platforms & Report Writing",
                "topics": [
                      "HackerOne & Bugcrowd Profile Reputation Strategy",
                      "Writing High-Quality VRP Bug Reports",
                      "CVSS Scoring & Severity Negotiation",
                      "Earning Bounties & Finding First CVE"
                ]
          }
    ],
    trainers: [
          {
                "name": "Rishi Kant Sharma",
                "designation": "Chief Information Security Consultant (CEH, OSCP)",
                "photo": "/assets/img/trainers/rishi.webp",
                "experienceYears": 11,
                "teaches": [
                      "Ethical Hacking",
                      "VAPT",
                      "Network Security",
                      "Bug Bounty"
                ],
                "bio": "Certified ethical hacker and cyber defense consultant. Consulted for government institutions, banking infrastructure, and multinational corporate security ops.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Sameer Alam",
                "designation": "Digital Forensics & Incident Response Lead",
                "photo": "/assets/img/trainers/sameer.webp",
                "experienceYears": 7,
                "teaches": [
                      "Digital Forensics",
                      "SOC Analysis",
                      "Malware Analysis",
                      "Cyber Laws"
                ],
                "bio": "Expert forensic investigator assisting law enforcement and enterprise clients in resolving ransomware, memory breaches, and digital data recovery.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "Burp Suite Pro",
                "logo": "burp"
          },
          {
                "name": "Sublist3r",
                "logo": "sublist3r"
          },
          {
                "name": "Amass",
                "logo": "amass"
          },
          {
                "name": "Nuclei",
                "logo": "nuclei"
          },
          {
                "name": "Postman",
                "logo": "postman"
          },
          {
                "name": "Git",
                "logo": "git"
          }
    ],
    reviews: [
          {
                "studentName": "Nikhil Joshi",
                "course": "Cyber Security & Ethical Hacking",
                "company": "Placed at EY • ₹7.8 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Real VAPT labs and live CTF challenges gave me real offensive security skills. The trainers helped me clear CEH on my very first attempt."
          },
          {
                "studentName": "Sanya Arora",
                "course": "Cyber Security",
                "company": "Placed at PwC • ₹8.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The hands-on Burp Suite, Wireshark, and network defense modules gave me practical edge during corporate security rounds."
          },
          {
                "studentName": "Harsh Vardhan",
                "course": "Bug Bounty & Pen Testing",
                "company": "Independent Bug Hunter • $12k+ Bounties",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Learning vulnerability discovery from active bug bounty hunters at DizitalAdda helped me find my first critical CVE within 3 months."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Expert Training in Bug Bounty & Penetration Testing?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
  {
    slug: "ethical-hacking-and-digital-forensics-course",
    name: "Ethical Hacking & Digital Forensics",
    tagline: "Combine defensive security, offensive penetration testing, and digital incident investigation in one intensive program.",
    heroImage: "/courses/images/ethical-hacking-and-digital-forensics-course.png",
    duration: "6 Months",
    mode: "Live Hacking Labs + Campus",
    level: "Advanced",
    modules: [
          {
                "month": 1,
                "title": "Networking & Linux Security Foundations",
                "topics": [
                      "Network Architecture & Threat Models",
                      "Linux Administration & Terminal Mastery",
                      "Packet Analysis with Wireshark",
                      "Network Scanning with Nmap"
                ]
          },
          {
                "month": 2,
                "title": "Vulnerability Assessment & Ethical Hacking",
                "topics": [
                      "OSINT & Reconnaissance",
                      "Scanning with Nessus",
                      "System Exploitation with Metasploit",
                      "Privilege Escalation Techniques"
                ]
          },
          {
                "month": 3,
                "title": "Web Application Security (OWASP Top 10)",
                "topics": [
                      "SQL Injection & XSS Exploits",
                      "Broken Access Control & IDOR",
                      "Burp Suite Proxy Configuration",
                      "Web Application Security Auditing"
                ]
          },
          {
                "month": 4,
                "title": "Digital Forensic Principles & Evidence Seizure",
                "topics": [
                      "Chain of Custody Rules & IT Law",
                      "Forensic Disk Imaging (FTK Imager)",
                      "Hash Verification & Integrity Checks",
                      "Investigative Procedures"
                ]
          },
          {
                "month": 5,
                "title": "Disk & Memory Forensics",
                "topics": [
                      "Autopsy Analysis for Deleted Files",
                      "Windows Registry & Event Log Investigation",
                      "Volatility Memory Dump Analysis",
                      "Malware Incident Triage"
                ]
          },
          {
                "month": 6,
                "title": "Capstone Cyber Incident Case & Career Prep",
                "topics": [
                      "Simulated Enterprise Breach Investigation",
                      "Complete Forensic Report Submission",
                      "CEH / Forensics Certification Practice",
                      "Placement Drives & Mock Interviews"
                ]
          }
    ],
    trainers: [
          {
                "name": "Rishi Kant Sharma",
                "designation": "Chief Information Security Consultant (CEH, OSCP)",
                "photo": "/assets/img/trainers/rishi.webp",
                "experienceYears": 11,
                "teaches": [
                      "Ethical Hacking",
                      "VAPT",
                      "Network Security",
                      "Bug Bounty"
                ],
                "bio": "Certified ethical hacker and cyber defense consultant. Consulted for government institutions, banking infrastructure, and multinational corporate security ops.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          },
          {
                "name": "Sameer Alam",
                "designation": "Digital Forensics & Incident Response Lead",
                "photo": "/assets/img/trainers/sameer.webp",
                "experienceYears": 7,
                "teaches": [
                      "Digital Forensics",
                      "SOC Analysis",
                      "Malware Analysis",
                      "Cyber Laws"
                ],
                "bio": "Expert forensic investigator assisting law enforcement and enterprise clients in resolving ransomware, memory breaches, and digital data recovery.",
                "linkedin": "https://www.linkedin.com/school/dizitaladda"
          }
    ],
    tools: [
          {
                "name": "Kali Linux",
                "logo": "kali"
          },
          {
                "name": "Burp Suite",
                "logo": "burp"
          },
          {
                "name": "Metasploit",
                "logo": "metasploit"
          },
          {
                "name": "Autopsy",
                "logo": "autopsy"
          },
          {
                "name": "Wireshark",
                "logo": "wireshark"
          },
          {
                "name": "FTK Imager",
                "logo": "ftk"
          }
    ],
    reviews: [
          {
                "studentName": "Nikhil Joshi",
                "course": "Cyber Security & Ethical Hacking",
                "company": "Placed at EY • ₹7.8 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Real VAPT labs and live CTF challenges gave me real offensive security skills. The trainers helped me clear CEH on my very first attempt."
          },
          {
                "studentName": "Sanya Arora",
                "course": "Cyber Security",
                "company": "Placed at PwC • ₹8.2 LPA",
                "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "The hands-on Burp Suite, Wireshark, and network defense modules gave me practical edge during corporate security rounds."
          },
          {
                "studentName": "Harsh Vardhan",
                "course": "Bug Bounty & Pen Testing",
                "company": "Independent Bug Hunter • $12k+ Bounties",
                "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
                "youtubeId": "dQw4w9WgXcQ",
                "quote": "Learning vulnerability discovery from active bug bounty hunters at DizitalAdda helped me find my first critical CVE within 3 months."
          }
    ],
    placed: [
          {
                "name": "Aryan Verma",
                "company": "TCS",
                "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Simran Kaur",
                "company": "Wipro",
                "photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Kunal Mehra",
                "company": "Accenture",
                "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Divya Sharma",
                "company": "Deloitte",
                "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Mohit Nair",
                "company": "Amazon",
                "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Neha Gupta",
                "company": "Genpact",
                "photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Rahul Soni",
                "company": "Cognizant",
                "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Ananya Sen",
                "company": "Infosys",
                "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Varun Joshi",
                "company": "Capgemini",
                "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
          },
          {
                "name": "Pooja Hegde",
                "company": "Paytm",
                "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          }
    ],
    faqs: [
          {
                "q": "Who is eligible to enroll in this Ethical Hacking & Digital Forensics?",
                "a": "College students, recent graduates, working professionals, and career changers from any background (Commerce, Arts, Science, Engineering) can enroll. We start with fundamental foundations before advancing to live projects."
          },
          {
                "q": "What is the training mode and batch schedule?",
                "a": "We offer both live interactive online batches and offline classroom training at our South Delhi campus. Flexible timings include weekday morning/evening batches and dedicated weekend executive batches."
          },
          {
                "q": "Does DizitalAdda provide placement support?",
                "a": "Yes! DizitalAdda provides 100% placement assistance with dedicated resume workshops, mock technical interviews, LinkedIn profile optimization, and direct interview drives with 60+ hiring partner companies."
          },
          {
                "q": "Will I work on live client projects during the course?",
                "a": "Absolutely. Our curriculum is 100% practical. You will work on real-world projects, live campaigns, industry datasets, and case studies to build a hiring-ready professional portfolio."
          },
          {
                "q": "What certification will I receive after completion?",
                "a": "You receive an official Industry-Recognized Diploma / Certification from DizitalAdda with verifiable digital verification credentials, project commendation letters, and global certification prep guidance."
          },
          {
                "q": "Can I attend a free demo class before joining?",
                "a": "Yes! You can reserve a free demo session and 1-on-1 career counselling with our senior mentors by filling out the enquiry form on this page."
          }
    ]
  },
];

/**
 * Slug alias mappings for legacy, alternate or misspelled URLs.
 */
const slugAliases = {
  "expert-in-digital-marketing": "expert-digital-marketing-course",
  "advance-digital-marketing-course": "advanced-digital-marketing-course",
  "digital-marketing-for-professionals": "digital-marketing-for-professional",
  "expert-traning-in-bug-bounty": "expert-training-in-bug-bounty",
  "diploma-in-genai-and-prompt-engineering-course": "diploma-in-genai-and-prompt-engineering",
  "diploma-in-machine-learning-and-ai-course": "diploma-in-machine-learning-and-ai",
  "diploma-in-data-science-and-ai-course": "diploma-in-data-science-and-ai",
  "diploma-in-data-analytics-course": "diploma-in-data-analytics-and-ai",
};

/**
 * Utility to find a course by its URL slug.
 * Supports direct match and slug aliases.
 * @param {string} slug 
 * @returns {object|undefined}
 */
export function getCourseBySlug(slug) {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  const canonical = slugAliases[normalized] || normalized;
  return courses.find((course) => course.slug.toLowerCase() === canonical);
}

/**
 * Utility to get all valid course slugs for routing or sitemaps.
 * @returns {string[]}
 */
export function getAllCourseSlugs() {
  return courses.map((course) => course.slug);
}
