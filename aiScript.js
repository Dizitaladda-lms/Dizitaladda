const pinnedSection = document.getElementById("pinnedSection");
const endTrigger = document.getElementById("endTrigger");
const featuredCourse = document.getElementById("featuredCourse");
const courseCards = document.querySelectorAll('.course-card-small');

// Course data for featured display
const courseData = {
  'machine-learning': {
    badge: '8 Weeks',
    title: 'Machine Learning Fundamentals',
    description: 'Master the core concepts of ML algorithms and implementation. Learn supervised and unsupervised learning, feature engineering, and model evaluation techniques.',
    highlights: [
      'Linear & Logistic Regression',
      'Decision Trees & Random Forests',
      'SVM & Neural Networks',
      'Model Evaluation & Validation',
      '10+ hands-on projects'
    ],
    originalPrice: '$399',
    currentPrice: '$299',
    savings: 'Save $100',
    level: 'Beginner',
    icon: `<path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="currentColor"/>
           <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="2"/>
           <circle cx="9" cy="9" r="1" fill="currentColor"/>
           <circle cx="15" cy="9" r="1" fill="currentColor"/>`
  },
  'deep-learning': {
    badge: '12 Weeks',
    title: 'Deep Learning Mastery',
    description: 'Dive deep into neural networks, CNNs, RNNs, and advanced architectures. Build and deploy state-of-the-art deep learning models.',
    highlights: [
      'Neural Network Architectures',
      'CNNs for Computer Vision',
      'RNNs & LSTMs for Sequences',
      'Transfer Learning',
      'PyTorch & TensorFlow'
    ],
    originalPrice: '$599',
    currentPrice: '$499',
    savings: 'Save $100',
    level: 'Advanced',
    icon: `<path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
           <circle cx="12" cy="8" r="1" fill="white"/>
           <circle cx="12" cy="16" r="1" fill="white"/>`
  },
  'computer-vision': {
    badge: '10 Weeks',
    title: 'Computer Vision',
    description: 'Learn image processing, object detection, and visual recognition. Build applications that can see and understand the visual world.',
    highlights: [
      'Image Processing Fundamentals',
      'Object Detection & Recognition',
      'Facial Recognition Systems',
      'OpenCV & Computer Vision APIs',
      'Real-world CV applications'
    ],
    originalPrice: '$499',
    currentPrice: '$399',
    savings: 'Save $100',
    level: 'Intermediate',
    icon: `<rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" stroke-width="2"/>
           <circle cx="9" cy="9" r="1" fill="currentColor"/>
           <circle cx="15" cy="9" r="1" fill="currentColor"/>
           <path d="M7 8L10 11L17 8" stroke="currentColor" stroke-width="2"/>`
  },
  'nlp': {
    badge: '9 Weeks',
    title: 'Natural Language Processing',
    description: 'Master text analysis, sentiment analysis, and language models. Build chatbots and language understanding systems.',
    highlights: [
      'Text Preprocessing & Analysis',
      'Sentiment Analysis',
      'Language Models & Transformers',
      'Chatbot Development',
      'BERT & GPT implementations'
    ],
    originalPrice: '$449',
    currentPrice: '$349',
    savings: 'Save $100',
    level: 'Intermediate',
    icon: `<path d="M21 15H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" stroke-width="2"/>
           <path d="M8 9L16 9M8 13L14 13" stroke="currentColor" stroke-width="2"/>`
  },
  'data-science': {
    badge: '6 Weeks',
    title: 'Data Science with Python',
    description: 'Learn data analysis, visualization, and statistical modeling. Master the complete data science workflow from collection to insights.',
    highlights: [
      'Python for Data Science',
      'Data Visualization with Matplotlib',
      'Statistical Analysis & Modeling',
      'Pandas & NumPy Mastery',
      'Real-world data projects'
    ],
    originalPrice: '$349',
    currentPrice: '$249',
    savings: 'Save $100',
    level: 'Beginner',
    icon: `<path d="M3 3V21L21 12L3 3Z" fill="currentColor"/>
           <circle cx="8" cy="8" r="1" fill="white"/>
           <circle cx="8" cy="16" r="1" fill="white"/>`
  },
  'reinforcement-learning': {
    badge: '14 Weeks',
    title: 'Reinforcement Learning',
    description: 'Master agent-based learning, Q-learning, and policy optimization. Build intelligent agents that learn from experience.',
    highlights: [
      'Q-Learning & Policy Gradients',
      'Deep Reinforcement Learning',
      'Multi-Agent Systems',
      'Game AI Development',
      'Real-world RL applications'
    ],
    originalPrice: '$649',
    currentPrice: '$549',
    savings: 'Save $100',
    level: 'Advanced',
    icon: `<circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2"/>
           <path d="M12 8V12L16 14" stroke="currentColor" stroke-width="2"/>
           <circle cx="12" cy="12" r="2" fill="currentColor"/>`
  },
  'ai-ethics': {
    badge: '4 Weeks',
    title: 'AI Ethics & Governance',
    description: 'Learn responsible AI development and ethical considerations. Understand bias, fairness, and governance in AI systems.',
    highlights: [
      'AI Bias & Fairness',
      'Ethical AI Development',
      'AI Governance & Policy',
      'Responsible AI Practices',
      'Case studies & frameworks'
    ],
    originalPrice: '$249',
    currentPrice: '$199',
    savings: 'Save $50',
    level: 'All Levels',
    icon: `<path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
           <circle cx="12" cy="12" r="2" stroke="white" stroke-width="1"/>`
  },
  'generative-ai': {
    badge: '11 Weeks',
    title: 'Generative AI & LLMs',
    description: 'Master GPT models, text generation, and creative AI applications. Build sophisticated generative AI systems.',
    highlights: [
      'Large Language Models',
      'Text & Image Generation',
      'Fine-tuning Techniques',
      'Prompt Engineering',
      'Creative AI applications'
    ],
    originalPrice: '$699',
    currentPrice: '$599',
    savings: 'Save $100',
    level: 'Advanced',
    icon: `<path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2Z" stroke="currentColor" stroke-width="2"/>
           <path d="M8 12L12 8L16 12L12 16L8 12Z" fill="currentColor"/>`
  },
  'ai-deployment': {
    badge: '8 Weeks',
    title: 'AI Model Deployment',
    description: 'Learn production deployment, scaling, and MLOps practices. Take your models from development to production.',
    highlights: [
      'Model Deployment Strategies',
      'MLOps & CI/CD Pipelines',
      'Cloud AI Services',
      'Model Monitoring & Maintenance',
      'Production-ready systems'
    ],
    originalPrice: '$549',
    currentPrice: '$449',
    savings: 'Save $100',
    level: 'Advanced',
    icon: `<rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
           <path d="M6 8L18 8M6 12L18 12M6 16L12 16" stroke="currentColor" stroke-width="1"/>
           <circle cx="16" cy="16" r="2" fill="currentColor"/>`
  }
};

// Function to update featured course
function updateFeaturedCourse(courseKey) {
  const course = courseData[courseKey];
  if (!course) return;

  // Remove active class from all cards
  courseCards.forEach(card => card.classList.remove('active'));
  
  // Add active class to clicked card
  document.querySelector(`[data-course="${courseKey}"]`).classList.add('active');

  // Update featured course content with animation
  featuredCourse.style.opacity = '0';
  featuredCourse.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    // Update badge
    featuredCourse.querySelector('.course-badge').textContent = course.badge;
    
    // Update icon
    featuredCourse.querySelector('.featured-icon svg').innerHTML = course.icon;
    
    // Update title
    featuredCourse.querySelector('.featured-title').textContent = course.title;
    
    // Update description
    featuredCourse.querySelector('.featured-description').textContent = course.description;
    
    // Update highlights
    const highlightsContainer = featuredCourse.querySelector('.featured-highlights');
    highlightsContainer.innerHTML = course.highlights.map(highlight => `
      <div class="highlight-item">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>${highlight}</span>
      </div>
    `).join('');
    
    // Update pricing
    featuredCourse.querySelector('.original-price').textContent = course.originalPrice;
    featuredCourse.querySelector('.current-price').textContent = course.currentPrice;
    featuredCourse.querySelector('.savings').textContent = course.savings;
    
    // Update CTA button
    featuredCourse.querySelector('.featured-cta span').textContent = `Enroll in ${course.title}`;
    
    // Animate back in
    featuredCourse.style.opacity = '1';
    featuredCourse.style.transform = 'translateY(0)';
  }, 200);
}

// Add click listeners to course cards
courseCards.forEach(card => {
  card.addEventListener('click', () => {
    const courseKey = card.getAttribute('data-course');
    updateFeaturedCourse(courseKey);
  });
});

// Sticky section observer
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        pinnedSection.classList.remove("pinned");
      } else {
        pinnedSection.classList.add("pinned");
      }
    });
  },
  {
    root: document.getElementById("leftContent"),
    threshold: 1.0
  }
);

observer.observe(endTrigger);

// FAQ Functionality
document.addEventListener('DOMContentLoaded', function() {
  // FAQ Category switching
  const categoryBtns = document.querySelectorAll('.category-btn');
  const faqCategories = document.querySelectorAll('.faq-category');
  
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCategory = btn.getAttribute('data-category');
      
      // Remove active class from all buttons and categories
      categoryBtns.forEach(b => b.classList.remove('active'));
      faqCategories.forEach(cat => cat.classList.remove('active'));
      
      // Add active class to clicked button and corresponding category
      btn.classList.add('active');
      document.querySelector(`[data-category="${targetCategory}"].faq-category`).classList.add('active');
    });
  });
  
  // FAQ Item toggle functionality
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other FAQ items in the same category
      const currentCategory = item.closest('.faq-category');
      const categoryItems = currentCategory.querySelectorAll('.faq-item');
      categoryItems.forEach(catItem => catItem.classList.remove('active'));
      
      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});