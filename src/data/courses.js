/**
 * ============================================================================
 * DIZITALADDA COURSE DATA CATALOG
 * ============================================================================
 * To add a new course, simply append a new course object to this array.
 * The CoursePage template dynamically renders any course via route: /courses/:slug
 */

export const courses = [
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
        month: 1,
        title: "Programming Foundations & Advanced Python",
        topics: [
          "Python Syntax, Advanced Data Structures & OOPs",
          "NumPy & Pandas for High-Speed Data Wrangling",
          "Data Cleaning & Feature Transformation Pipelines",
          "Exploratory Visualization with Matplotlib & Seaborn"
        ]
      },
      {
        month: 2,
        title: "Relational Databases, Advanced SQL & Data Warehouses",
        topics: [
          "Complex Multi-Table Joins, Subqueries & CTEs",
          "Window Functions & Query Optimization Techniques",
          "Database Normalization, Schema Design & Indexes",
          "Automated Python & SQL Database Connectors"
        ]
      },
      {
        month: 3,
        title: "Business Intelligence, Power BI & Visual Storytelling",
        topics: [
          "Interactive Executive Dashboard Design & UX",
          "Advanced DAX Measures, Time-Intelligence & Modeling",
          "Real-time Data Streaming & KPI Scorecard Alerts",
          "Publishing Reports to Power BI Cloud & Access Control"
        ]
      },
      {
        month: 4,
        title: "Applied Statistics, Math & Hypothesis Testing",
        topics: [
          "Probability Distributions & Central Limit Theorem",
          "A/B Testing, Chi-Square, ANOVA & T-Tests",
          "Correlation, Covariance & Regression Foundations",
          "Detecting Outliers & Data Bias Mitigation"
        ]
      },
      {
        month: 5,
        title: "Machine Learning & Predictive Modeling",
        topics: [
          "Supervised Learning: Linear/Logistic, Trees, XGBoost",
          "Unsupervised Clustering (K-Means, PCA, Hierarchical)",
          "Model Evaluation: ROC-AUC, Precision, Recall & F1-Score",
          "Hyperparameter Tuning with GridSearch & Optuna"
        ]
      },
      {
        month: 6,
        title: "Generative AI, MLOps & Capstone Portfolio",
        topics: [
          "Prompt Engineering, LangChain & OpenAI API Integration",
          "Model Packaging & REST APIs using FastAPI & Docker",
          "Cloud Deployment on AWS Elastic Beanstalk / S3",
          "End-to-End Capstone Project Presentation for Hiring"
        ]
      }
    ],
    trainers: [
      {
        name: "Dr. Vikramaditya Sen",
        designation: "Lead AI & Data Science Architect (Ex-Amazon)",
        photo: "/trainers/vikramaditya.jpg",
        experienceYears: 12,
        teaches: ["Python", "Machine Learning", "Deep Learning", "Generative AI"],
        bio: "Veteran Data Scientist with 12+ years of experience engineering high-throughput machine learning pipelines at Amazon and top fintech startups. Mentored over 3,500+ students into enterprise data roles.",
        linkedin: "https://www.linkedin.com/school/dizitaladda"
      },
      {
        name: "Pooja Malhotra",
        designation: "Principal BI & Analytics Consultant",
        photo: "/trainers/pooja.jpg",
        experienceYears: 8,
        teaches: ["Power BI", "SQL", "Tableau", "Business Analytics"],
        bio: "Specialist in large-scale analytics pipelines, executive reporting, and strategic DAX modeling. Former senior consultant at Genpact, passionate about practical, scenario-based teaching.",
        linkedin: "https://www.linkedin.com/school/dizitaladda"
      }
    ],
    tools: [
      { name: "Python", logo: "python" },
      { name: "SQL", logo: "sql" },
      { name: "Power BI", logo: "powerbi" },
      { name: "Pandas", logo: "pandas" },
      { name: "NumPy", logo: "numpy" },
      { name: "Tableau", logo: "tableau" },
      { name: "TensorFlow", logo: "tensorflow" },
      { name: "Scikit-Learn", logo: "scikit" },
      { name: "AWS Cloud", logo: "aws" },
      { name: "Advanced Excel", logo: "excel" },
      { name: "Git & GitHub", logo: "git" },
      { name: "Jupyter", logo: "jupyter" }
    ],
    reviews: [
      {
        studentName: "Aman Singhal",
        course: "Data Science & Analytics",
        company: "Placed at Deloitte • ₹8.5 LPA",
        thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=80",
        youtubeId: "dQw4w9WgXcQ",
        quote: "The hands-on Python & Power BI client projects gave me the practical confidence to crack 3 enterprise data analyst interviews back-to-back."
      },
      {
        studentName: "Priyanka Roy",
        course: "Data Science & Analytics",
        company: "Placed at Accenture • ₹7.2 LPA",
        thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
        youtubeId: "dQw4w9WgXcQ",
        quote: "Transitioning from a non-IT background to Data Analytics seemed tough, but DizitalAdda's step-by-step mentor support made everything intuitive."
      },
      {
        studentName: "Rohan Kulkarni",
        course: "Data Science & Analytics",
        company: "Placed at Genpact • ₹9.0 LPA",
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&q=80",
        youtubeId: "dQw4w9WgXcQ",
        quote: "Mock interviews, 1-on-1 resume optimization, and weekly placement drives helped me land my dream role within 40 days of graduation."
      }
    ],
    placed: [
      { name: "Aryan Verma", company: "TCS", photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80" },
      { name: "Simran Kaur", company: "Wipro", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80" },
      { name: "Kunal Mehra", company: "Accenture", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" },
      { name: "Divya Sharma", company: "Deloitte", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80" },
      { name: "Mohit Nair", company: "Amazon", photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80" },
      { name: "Neha Gupta", company: "Genpact", photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80" },
      { name: "Rahul Soni", company: "Cognizant", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80" },
      { name: "Ananya Sen", company: "Infosys", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80" },
      { name: "Varun Joshi", company: "Capgemini", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80" },
      { name: "Pooja Hegde", company: "Paytm", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" }
    ],
    faqs: [
      {
        q: "Who is eligible for this Data Science & Analytics program?",
        a: "Graduates, college students, and working professionals from any educational background (B.Com, BBA, BCA, B.Tech, B.Sc, etc.) can enroll. No prior programming knowledge is required; we teach Python and math from absolute scratch."
      },
      {
        q: "What is the schedule and batch timing?",
        a: "We offer morning and evening weekday batches (2 hours/day) as well as dedicated weekend executive batches (4 hours/day) for working professionals. You can choose live interactive online classes or learn offline at our Delhi campus."
      },
      {
        q: "Do you offer guaranteed placement assistance?",
        a: "Yes! DizitalAdda provides 100% placement support with access to 60+ partner hiring networks, personalized resume building, GitHub portfolio coaching, and unlimited technical mock interview sessions until you secure your job."
      },
      {
        q: "Will I build real-world client and capstone projects?",
        a: "Yes. You will complete 10+ hands-on projects, including customer churn prediction, e-commerce sales forecasting dashboards in Power BI, an automated ETL pipeline with SQL, and an end-to-end Machine Learning web application deployed to AWS."
      },
      {
        q: "What certifications will I receive upon completing the course?",
        a: "You receive an official Industry-Recognized Diploma from DizitalAdda with verified digital credentials, a commendation letter, and official prep support for Microsoft PL-300 Power BI Data Analyst and AWS Cloud certifications."
      },
      {
        q: "Can I attend a free demo session before enrolling?",
        a: "Yes, absolutely! You can register for a free 1-on-1 career counselling session and attend a live demo class with our senior industry mentors by filling out the form on this page."
      }
    ]
  }
];

/**
 * Utility to find a course by its URL slug.
 * @param {string} slug 
 * @returns {object|undefined}
 */
export function getCourseBySlug(slug) {
  if (!slug) return undefined;
  return courses.find((course) => course.slug.toLowerCase() === slug.toLowerCase());
}

/**
 * Utility to get all valid course slugs for routing or sitemaps.
 * @returns {string[]}
 */
export function getAllCourseSlugs() {
  return courses.map((course) => course.slug);
}
