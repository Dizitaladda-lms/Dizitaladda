import PublicNavbar from "../../../components/PublicNavbar.jsx";
import LegacyPageContent from "../../../components/LegacyPageContent.jsx";

export const pageMetadata = {"title":"Digital Marketing Course - DizitalAdda","description":""};

export default function LegacyPage_Companies_digital_marketing_courses() {
  return (
    <>
      <PublicNavbar />
      <LegacyPageContent>
        
    
<meta charSet="UTF-8" />

    
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

    

    
<script src="https://cdn.tailwindcss.com" />

    
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

    
<script dangerouslySetInnerHTML={{__html:"\r\n        tailwind.config = {\r\n            theme: {\r\n                extend: {\r\n                    colors: {\r\n                        primary: '#2563eb',\r\n                        secondary: '#0ea5e9',\r\n                        accent: '#f59e0b',\r\n                        dark: '#1f2937',\r\n                        light: '#f8fafc'\r\n                    },\r\n                    fontFamily: {\r\n                        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif']\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    "}} />

    
<style dangerouslySetInnerHTML={{__html:"\r\n        .hero-section {\r\n            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');\r\n            background-size: cover;\r\n            background-position: center;\r\n        }\r\n        @media (max-width: 768px) {\r\n            .hero-section {\r\n                background-position: 70% center;\r\n            }\r\n        }\r\n        \r\n        .feature-card {\r\n            transition: all 0.3s ease;\r\n            border-left: 4px solid;\r\n        }\r\n        \r\n        .feature-card:hover {\r\n            transform: translateY(-5px);\r\n            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\r\n        }\r\n        \r\n        @media (min-width: 1024px) {\r\n            .float-layout {\r\n                display: grid;\r\n                grid-template-columns: 0.4fr 0.6fr;\r\n                gap: 2rem;\r\n                align-items: start;\r\n            }\r\n            \r\n            .float-image {\r\n                position: sticky;\r\n                top: 2rem;\r\n            }\r\n        }\r\n        \r\n        /* Lead Form Styles */\r\n        .lead-form-section {\r\n            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n        }\r\n        \r\n        .lead-form-container {\r\n            background: white;\r\n            border-radius: 16px;\r\n            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\r\n        }\r\n        \r\n        .cta-button {\r\n            background: linear-gradient(135deg, #f59e0b, #d97706);\r\n            transition: all 0.3s ease;\r\n        }\r\n        \r\n        .cta-button:hover {\r\n            transform: translateY(-3px);\r\n            box-shadow: 0 10px 25px -5px rgba(245, 158, 11, 0.4);\r\n        }\r\n        \r\n        .floating-cta {\r\n            position: fixed;\r\n            bottom: 20px;\r\n            right: 20px;\r\n            z-index: 100;\r\n            animation: pulse 2s infinite;\r\n        }\r\n                .hero-section {\r\n            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');\r\n            background-size: cover;\r\n            background-position: center;\r\n        }\r\n        /* Location Marquee Styles */\r\n        .marquee-container {\r\n            width: 100%;\r\n            overflow: hidden;\r\n            background: white;\r\n            border-radius: 12px;\r\n            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\r\n            padding: 20px 0;\r\n            margin: 40px 0;\r\n        }\r\n        \r\n        .marquee {\r\n            display: flex;\r\n            animation: marquee 30s linear infinite;\r\n            white-space: nowrap;\r\n        }\r\n        \r\n        .location-item {\r\n            display: flex;\r\n            align-items: center;\r\n            margin: 0 25px;\r\n        }\r\n        \r\n        .flower-dot {\r\n            display: inline-block;\r\n            margin-right: 12px;\r\n            position: relative;\r\n            width: 16px;\r\n            height: 16px;\r\n            animation: bloom 4s infinite;\r\n        }\r\n        \r\n        .flower-dot::before {\r\n            content: '';\r\n            position: absolute;\r\n            width: 100%;\r\n            height: 100%;\r\n            background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);\r\n            border-radius: 50%;\r\n            transform: scale(0.8);\r\n            animation: pulse 2s infinite;\r\n        }\r\n        \r\n        .flower-dot::after {\r\n            content: '';\r\n            position: absolute;\r\n            top: 50%;\r\n            left: 50%;\r\n            transform: translate(-50%, -50%);\r\n            width: 6px;\r\n            height: 6px;\r\n            background: #ff6b6b;\r\n            border-radius: 50%;\r\n        }\r\n        \r\n        .location-text {\r\n            font-family: var(--font-family-base);\r\n            font-weight: 500;\r\n            font-size: 18px;\r\n            color: #4a5568;\r\n            text-transform: uppercase;\r\n            letter-spacing: 0.5px;\r\n        }\r\n        \r\n        .location-header {\r\n            text-align: center;\r\n            margin-bottom: 25px;\r\n            color: #2d3748;\r\n            font-weight: 600;\r\n            font-size: 22px;\r\n            position: relative;\r\n            display: inline-block;\r\n            left: 50%;\r\n            transform: translateX(-50%);\r\n        }\r\n        \r\n        .location-header::after {\r\n            content: '';\r\n            position: absolute;\r\n            bottom: -8px;\r\n            left: 0;\r\n            width: 100%;\r\n            height: 3px;\r\n            background: linear-gradient(to right, #ff9a9e, #fad0c4, #a1c4fd);\r\n            border-radius: 3px;\r\n        }\r\n        \r\n        @keyframes marquee {\r\n            0% {\r\n                transform: translateX(0);\r\n            }\r\n            100% {\r\n                transform: translateX(-50%);\r\n            }\r\n        }\r\n        \r\n        @keyframes bloom {\r\n            0%, 100% {\r\n                transform: rotate(0deg);\r\n            }\r\n            50% {\r\n                transform: rotate(180deg);\r\n            }\r\n        }\r\n        \r\n        @keyframes pulse {\r\n            0%, 100% {\r\n                transform: scale(0.8);\r\n                opacity: 0.8;\r\n            }\r\n            50% {\r\n                transform: scale(1.1);\r\n                opacity: 1;\r\n            }\r\n        }\r\n        \r\n        @media (max-width: 768px) {\r\n            .location-text {\r\n                font-size: 16px;\r\n            }\r\n            \r\n            .location-header {\r\n                font-size: 20px;\r\n            }\r\n        }\r\n    "}} />



    
{/*  Navigation  */}



    
{/*  Lead Form Section  */}

       
<section className="hero-section pt-10 pb-10 px-4 text-white">
        <div className="container mx-auto max-w-4xl">
            <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">Expert in Digital Marketing Course in GK II, South Delhi</h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-accent">Become a Certified Digital Marketer and Land Your Dream Job in 12 months</h2>
                <p className="text-lg md:text-xl mb-8 text-gray-200">Master the in-demand skills of modern marketing with DizitalAdda's Expert Digital Marketing Course. This comprehensive program provides hands-on training in SEO, Social Media, Google Ads, and Analytics. Guided by industry experts, you'll gain the practical, real-world experience needed to launch a successful career.</p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="https://wa.me/918810606010?text=Hi%2C+I+want+to+enquire+about+the+Digital+Marketing+Courses" className="px-8 py-4 bg-accent text-white rounded-lg text-center font-bold hover:bg-yellow-600 transition">Enroll Now</a>
                    <a href="./digital-marketing.pdf" className="px-8 py-4 border border-white text-white rounded-lg text-center hover:bg-white/10 transition" download="">Download Brochure</a>
                </div>
            </div>
        </div>
    </section>


    
{/*  Hero Section  */}

    
<section className="pt-20 pb-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Expert Digital Marketing Course in South Delhi</h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">Become a Certified Digital Marketer and Land Your Dream Job in 12 months with our comprehensive training program</p>
            <a href="#lead-form" className="cta-button inline-block px-8 py-4 text-white rounded-lg font-bold text-lg">Get Details &amp; Grab Your Discount Now!</a>
        </div>
    </section>


    
{/*  Course Highlights Section  */}

    
<section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">Why Choose Our Digital Marketing Course?</h2>
            
            <div className="float-layout">
                {/*  Left side - Image  */}
                <div className="float-image mb-8 lg:mb-0">
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="Students learning digital marketing" className="rounded-2xl shadow-2xl w-full" />
                        <div className="absolute -bottom-5 -right-5 bg-white p-6 rounded-2xl shadow-xl">
                            <div className="text-center">
                                <div className="flex justify-center items-center text-yellow-400 text-2xl mb-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <p className="font-bold text-lg">4.9/5 Rating</p>
                                <p className="text-gray-600 text-sm">from 1,043 students</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/*  Right side - Content Cards  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/*  Card 1  */}
                    <div className="feature-card bg-white p-6 rounded-xl shadow-md border-l-4 border-primary">
                        <div className="flex items-start mb-4">
                            <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                <i className="fas fa-brain text-primary text-xl"></i>
                            </div>
                            <h3 className="font-bold text-lg">AI-Integrated Curriculum</h3>
                        </div>
                        <p className="text-gray-600">30+ Modules, 160+ Practical Skills, &amp; Get 7+ Certifications.</p>
                    </div>
                    
                    {/*  Card 2  */}
                    <div className="feature-card bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary">
                        <div className="flex items-start mb-4">
                            <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                <i className="fas fa-calendar-alt text-secondary text-xl"></i>
                            </div>
                            <h3 className="font-bold text-lg">Flexible Learning</h3>
                        </div>
                        <p className="text-gray-600">12 Month, 240+ hours, Hybrid Course with Offline &amp; Online Classes.</p>
                    </div>
                    
                    {/*  Card 3  */}
                    <div className="feature-card bg-white p-6 rounded-xl shadow-md border-l-4 border-accent">
                        <div className="flex items-start mb-4">
                            <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                <i className="fas fa-chalkboard-teacher text-accent text-xl"></i>
                            </div>
                            <h3 className="font-bold text-lg">Industry Expert Faculty</h3>
                        </div>
                        <p className="text-gray-600">Learn from top industry practitioners with real-world experience.</p>
                    </div>
                    
                    {/*  Card 4  */}
                    <div className="feature-card bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                        <div className="flex items-start mb-4">
                            <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                <i className="fas fa-building text-green-500 text-xl"></i>
                            </div>
                            <h3 className="font-bold text-lg">World Class Infrastructure</h3>
                        </div>
                        <p className="text-gray-600">Corporate Style Campus in GK II, South Delhi with modern amenities.</p>
                    </div>
                    
                    {/*  Card 5  */}
                    <div className="feature-card bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
                        <div className="flex items-start mb-4">
                            <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                <i className="fas fa-briefcase text-purple-500 text-xl"></i>
                            </div>
                            <h3 className="font-bold text-lg">Real-World Experience</h3>
                        </div>
                        <p className="text-gray-600">Work with Real Brands: Practical Training, Internship &amp; Projects.</p>
                    </div>
                    
                    {/*  Card 6  */}
                    <div className="feature-card bg-white p-6 rounded-xl shadow-md border-l-4 border-pink-500">
                        <div className="flex items-start mb-4">
                            <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                <i className="fas fa-handshake-angle text-pink-500 text-xl"></i>
                            </div>
                            <h3 className="font-bold text-lg">100% Placement Support</h3>
                        </div>
                        <p className="text-gray-600">Job-Ready with Portfolio &amp; Interview Skills development.</p>
                    </div>
                </div>
            </div>
            
            {/*  CTA Button  */}
            <div className="text-center mt-16">
                <a href="#lead-form" className="cta-button inline-block px-8 py-4 text-white rounded-lg font-bold text-lg">Get Details &amp; Grab Your Discount Now!</a>
            </div>
        </div>
    </section>

    
{/*  Location Marquee Section  */}

    
<section className="py-12 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
            <h2 className="location-header">Locations Near You</h2>
            <div className="marquee-container">
                <div className="marquee">
                    {/*  Locations will be duplicated to create seamless loop  */}
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Greater Kailash II</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Saket</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Malviya Nagar</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Hauz Khas</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">South Ex</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Lajpat Nagar</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Vasant Vihar</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Moti Bagh</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">R.K. Puram</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Munirka</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Sarijini Nagar</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Defence Colony</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">New Friends Colony</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Kalkaji</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Nehru Place</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Sanjay Colony</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Okhla Phase III</span>
                    </div>
                    
                    {/*  Duplicate for seamless looping  */}
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Greater Kailash II</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Saket</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Malviya Nagar</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Hauz Khas</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">South Ex</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Lajpat Nagar</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Vasant Vihar</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Moti Bagh</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">R.K. Puram</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Munirka</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Sarijini Nagar</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Defence Colony</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">New Friends Colony</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Kalkaji</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Nehru Place</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Sanjay Colony</span>
                    </div>
                    <div className="location-item">
                        <span className="flower-dot"></span>
                        <span className="location-text">Okhla Phase III</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
{/*  Features Section  */}

    
<section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Learn</h2>
                <p className="text-gray-600">Our comprehensive curriculum covers all aspects of digital marketing</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="w-14 h-14 bg-blue-100 text-primary rounded-lg flex items-center justify-center mb-6">
                        <i className="fas fa-search text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Search Engine Optimization</h3>
                    <p className="text-gray-600">Master keyword research, on-page optimization, and technical SEO to rank websites higher.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="w-14 h-14 bg-blue-100 text-primary rounded-lg flex items-center justify-center mb-6">
                        <i className="fab fa-google text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Google Ads</h3>
                    <p className="text-gray-600">Learn to create and manage effective PPC campaigns across Google's advertising network.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="w-14 h-14 bg-blue-100 text-primary rounded-lg flex items-center justify-center mb-6">
                        <i className="fas fa-chart-line text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Analytics</h3>
                    <p className="text-gray-600">Measure and analyze campaign performance with Google Analytics and other tools.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="w-14 h-14 bg-blue-100 text-primary rounded-lg flex items-center justify-center mb-6">
                        <i className="fas fa-share-alt text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Social Media Marketing</h3>
                    <p className="text-gray-600">Develop strategies for Facebook, Instagram, LinkedIn, and other social platforms.</p>
                </div>
            </div>
            
            {/*  CTA Button  */}
            <div className="text-center mt-16">
                <a href="#lead-form" className="cta-button inline-block px-8 py-4 text-white rounded-lg font-bold text-lg">Get Details &amp; Grab Your Discount Now!</a>
            </div>
        </div>
    </section>


    
{/*  Key Skills Section  */}

    
<section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Skills You'll Master</h2>
                <p className="text-gray-600">Comprehensive skill development that makes you industry-ready</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/*  SEO Skills  */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary group">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i className="fas fa-search text-3xl text-primary"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4">SEO Mastery</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                            Keyword Research &amp; Analysis
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                            On-Page &amp; Technical SEO
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                            Link Building Strategies
                        </li>
                    </ul>
                </div>

                {/*  Social Media Skills  */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-secondary group">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i className="fas fa-share-nodes text-3xl text-secondary"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Social Media Marketing</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                            Content Strategy &amp; Planning
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                            Paid Social Advertising
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                            Community Management
                        </li>
                    </ul>
                </div>

                {/*  PPC Skills  */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-accent group">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i className="fab fa-google text-3xl text-accent"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Google Ads &amp; PPC</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                            Campaign Setup &amp; Optimization
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                            Conversion Tracking
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                            Budget Management
                        </li>
                    </ul>
                </div>

                {/*  Content Marketing  */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-green-500 group">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i className="fas fa-pen-fancy text-3xl text-green-500"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Content Marketing</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                            Content Strategy Development
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                            Blog &amp; Article Writing
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                            Content Distribution
                        </li>
                    </ul>
                </div>

                {/*  Analytics  */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500 group">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i className="fas fa-chart-line text-3xl text-purple-500"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Analytics &amp; Reporting</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                            Data Analysis &amp; Interpretation
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                            Performance Tracking
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                            ROI Measurement
                        </li>
                    </ul>
                </div>

                {/*  Email Marketing  */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-pink-500 group">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i className="fas fa-envelope text-3xl text-pink-500"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Email Marketing</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                            Email Campaign Creation
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                            List Management
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                            A/B Testing
                        </li>
                    </ul>
                </div>
            </div>
            
            {/*  CTA Button  */}
            <div className="text-center mt-16">
                <a href="#lead-form" className="cta-button inline-block px-8 py-4 text-white rounded-lg font-bold text-lg">Start Your Digital Marketing Journey Today!</a>
            </div>
        </div>
    </section>


    
{/*  Placements and Tools Section  */}

    
<section className="py-10 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
            {/*  Placements Section  */}
            <div className="text-center mb-8">
                <p className="text-primary font-semibold text-lg mb-1">Secure Your Career With DizitalAdda</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">100% Placement Support for Learners</h2>
                
                {/*  Company Carousel  */}
                <div className="overflow-hidden relative mb-10">
                    <div className="company-carousel">
                        <div className="flex animate-scroll space-x-8">
                            <div className="company-logo"><img src="./Companies/,nsa,mns.PNG" alt="Sunhill logo" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./Companies/ALkjak.PNG" alt="avishkaar Logo" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./Companies/Capture.PNG" alt="Brainwork Logo" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./Companies/jkjk.PNG" alt="Morks Logo" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./Companies/jslakjs.PNG" alt="I global solutions Logo" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./Companies/kjsak.PNG" alt="Accenture Logo" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./Companies/kjsakjs.PNG" alt="Company Logo" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./Companies/lava.PNG" alt="LAVA Logo" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./Companies/m,anM.PNG" alt="The Souled Store Logo" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./Companies/MNAm.PNG" alt="Technovia Logo" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./Companies/nsamna.PNG" alt="Fact Education Logo" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./Companies/skja.PNG" alt="Getzkick Logo" className="h-16 object-contain" /></div>
                            
                            {/*  Duplicate for seamless loop  */}
                            <div className="company-logo"><img src="./Companies/,nsa,mns.PNG" alt="Sunhill logo" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./Companies/ALkjak.PNG" alt="avishkaar Logo" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./Companies/Capture.PNG" alt="Brainwork Logo" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./Companies/jkjk.PNG" alt="Morks Logo" className="h-16 object-contain" /></div>
                        </div>
                    </div>
                </div>

                {/*  AI Tools Section  */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6">50+ AI Tools</h2>
                <div className="overflow-hidden relative">
                    <div className="ai-tools-carousel">
                        <div className="flex animate-scroll-reverse space-x-8">
                            <div className="company-logo"><img src="./AI TOOLS/download (3).jpeg" alt="Company Logo 3" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./AI TOOLS/download (7).jpeg" alt="Company Logo 7" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./AI TOOLS/download (8).jpeg" alt="Company Logo 8" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./AI TOOLS/download (9).jpeg" alt="Company Logo 9" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./AI TOOLS/download (10).jpeg" alt="Company Logo 10" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./AI TOOLS/download (11).jpeg" alt="Company Logo 11" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./AI TOOLS/download (12).jpeg" alt="Company Logo 12" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./AI TOOLS/download (51).png" alt="Company Logo 51" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./AI TOOLS/download (52).png" alt="Company Logo 52" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./AI TOOLS/download (53).png" alt="Company Logo 53" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./AI TOOLS/download (54).png" alt="Company Logo 54" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./AI TOOLS/download (55).png" alt="Company Logo 55" className="h-16 object-contain" /></div>
                            
                            {/*  Duplicate for seamless loop  */}
                            <div className="company-logo"><img src="./AI TOOLS/download (3).jpeg" alt="Company Logo 3" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./AI TOOLS/download (7).jpeg" alt="Company Logo 7" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./AI TOOLS/download (8).jpeg" alt="Company Logo 8" className="h-16 object-contain" /></div>
                            <div className="company-logo"><img src="./AI TOOLS/download (9).jpeg" alt="Company Logo 9" className="h-16 object-contain" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style dangerouslySetInnerHTML={{__html:"\r\n            @keyframes scroll {\r\n                0% {\r\n                    transform: translateX(0);\r\n                }\r\n                100% {\r\n                    transform: translateX(calc(-250px * 7));\r\n                }\r\n            }\r\n            \r\n            @keyframes scroll-reverse {\r\n                0% {\r\n                    transform: translateX(calc(-250px * 7));\r\n                }\r\n                100% {\r\n                    transform: translateX(0);\r\n                }\r\n            }\r\n            \r\n            .animate-scroll {\r\n                animation: scroll 40s linear infinite;\r\n            }\r\n            \r\n            .animate-scroll-reverse {\r\n                animation: scroll-reverse 40s linear infinite;\r\n            }\r\n            \r\n            .company-logo {\r\n                flex: 0 0 auto;\r\n                width: 200px;\r\n                height: 100px;\r\n                display: flex;\r\n                align-items: center;\r\n                justify-content: center;\r\n                background: white;\r\n                margin: 0 1rem;\r\n                padding: 1rem;\r\n                border-radius: 8px;\r\n                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n                transition: transform 0.3s ease;\r\n            }\r\n            \r\n            .company-logo:hover {\r\n                transform: scale(1.05);\r\n            }\r\n            \r\n            .company-logo img {\r\n                max-width: 100%;\r\n                max-height: 100%;\r\n                object-fit: contain;\r\n            }\r\n            \r\n            .company-carousel, .ai-tools-carousel {\r\n                overflow: hidden;\r\n                position: relative;\r\n                padding: 1rem 0;\r\n            }\r\n            \r\n            .company-carousel::before,\r\n            .company-carousel::after,\r\n            .ai-tools-carousel::before,\r\n            .ai-tools-carousel::after {\r\n                content: '';\r\n                position: absolute;\r\n                top: 0;\r\n                width: 200px;\r\n                height: 100%;\r\n                z-index: 2;\r\n            }\r\n            \r\n            .company-carousel::before,\r\n            .ai-tools-carousel::before {\r\n                left: 0;\r\n                background: linear-gradient(to right, white 0%, transparent 100%);\r\n            }\r\n            \r\n            .company-carousel::after,\r\n            .ai-tools-carousel::after {\r\n                right: 0;\r\n                background: linear-gradient(to left, white 0%, transparent 100%);\r\n            }\r\n        "}} />
    </section>


    
{/*  Live Projects & Internship Section  */}

    
<section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Projects &amp; Internship</h2>
                <p className="text-gray-600 text-lg">Real-world experience through hands-on projects</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/*  E-commerce Project  */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                    <div className="relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="E-commerce Project" className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                            E-commerce
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">Fashion E-commerce Growth Strategy</h3>
                        <p className="text-gray-600 mb-4">Increased online sales by 150% through integrated digital marketing campaign</p>
                        <div className="space-y-2">
                            <div className="flex items-center text-sm text-gray-600">
                                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                                SEO optimization &amp; content strategy
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                                Social media campaign management
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                                Email marketing automation
                            </div>
                        </div>
                    </div>
                </div>

                {/*  SaaS Project  */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                    <div className="relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80" alt="SaaS Project" className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                            SaaS
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">B2B SaaS Lead Generation</h3>
                        <p className="text-gray-600 mb-4">Generated 200+ qualified B2B leads through targeted campaigns</p>
                        <div className="space-y-2">
                            <div className="flex items-center text-sm text-gray-600">
                                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                                LinkedIn advertising campaign
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                                Content marketing &amp; lead magnets
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                                Marketing automation setup
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Local Business Project  */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                    <div className="relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1638742385167-96fc60e12f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt="Local Business Project" className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Local Business
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">Restaurant Digital Presence</h3>
                        <p className="text-gray-600 mb-4">Boosted restaurant bookings by 80% through local SEO &amp; social media</p>
                        <div className="space-y-2">
                            <div className="flex items-center text-sm text-gray-600">
                                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                                Google My Business optimization
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                                Instagram content strategy
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                                Local SEO implementation
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Key Benefits  */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-laptop-code text-2xl text-primary"></i>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Hands-on Experience</h3>
                    <p className="text-gray-600">Work on real client projects during your internship period</p>
                </div>

                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-certificate text-2xl text-primary"></i>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Industry Recognition</h3>
                    <p className="text-gray-600">Add real projects to your portfolio for better job prospects</p>
                </div>

                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-users text-2xl text-primary"></i>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Expert Mentorship</h3>
                    <p className="text-gray-600">Get guidance from industry experts throughout your projects</p>
                </div>
            </div>

            {/*  CTA Button  */}
            <div className="text-center mt-12">
                <a href="#lead-form" className="cta-button inline-block px-8 py-4 text-white rounded-lg font-bold text-lg">Start Your Journey with Real Projects</a>
            </div>
        </div>
    </section>


    
{/*  FAQ Section  */}



    
{/*  Testimonials Section  */}

    
<section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
                <p className="text-gray-600">Hear from our successful students who transformed their careers with our digital marketing course.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                    <div className="flex text-yellow-400 mb-4">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p className="text-gray-600 mb-6">"The hands-on training I received at DizitalAdda helped me secure a job as a Digital Marketing Executive at a leading e-commerce company."</p>
                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80" alt="Rahul Sharma" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h4 className="font-bold">Rahul Sharma</h4>
                            <p className="text-gray-500">Digital Marketing Executive</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                    <div className="flex text-yellow-400 mb-4">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p className="text-gray-600 mb-6">"I started my own digital marketing agency after completing this course. The practical knowledge helped me build confidence and connect with clients."</p>
                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&h=100&q=80" alt="Priya Singh" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h4 className="font-bold">Priya Singh</h4>
                            <p className="text-gray-500">Agency Owner</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                    <div className="flex text-yellow-400 mb-4">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <p className="text-gray-600 mb-6">"The course curriculum is comprehensive and covers all aspects of digital marketing. The trainers provide personalized attention."</p>
                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1621592484082-2d05b1290d7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=100&h=100&q=80" alt="Amit Verma" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h4 className="font-bold">Amit Verma</h4>
                            <p className="text-gray-500">SEO Specialist</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/*  CTA Button  */}
            <div className="text-center mt-16">
                <a href="#lead-form" className="cta-button inline-block px-8 py-4 text-white rounded-lg font-bold text-lg">Get Details &amp; Grab Your Discount Now!</a>
            </div>
        </div>
    </section>

    
<section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-600">Everything you need to know about our Digital Marketing Course</p>
            </div>

            <div className="faq-container space-y-4">
                <details className="faq-item group" open={true}>
                    <summary className="flex items-center justify-between p-6 bg-white rounded-xl cursor-pointer hover:shadow-md transition-all duration-300">
                        <h3 className="text-lg font-semibold pr-4">Who is this digital marketing course for?</h3>
                        <span className="transform group-open:rotate-180 transition-transform duration-300">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                    </summary>
                    <div className="p-6 bg-white rounded-b-xl">
                        <p><span className="text-primary font-semibold">Answer:</span> Anyone who wants to either build a career in this field or wants to promote his/her business or services can Enrol for the digital marketing course and upskill themselves. This course is ideal for students, job seekers, entrepreneurs, freelancers, and marketing professionals who want to build their digital marketing careers.</p>
                    </div>
                </details>

                <details className="faq-item group">
                    <summary className="flex items-center justify-between p-6 bg-white rounded-xl cursor-pointer hover:shadow-md transition-all duration-300">
                        <h3 className="text-lg font-semibold pr-4">Which Digital Marketing Course is Best?</h3>
                        <span className="transform group-open:rotate-180 transition-transform duration-300">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                    </summary>
                    <div className="p-6 bg-white rounded-b-xl">
                        <p><span className="text-primary font-semibold">Answer:</span> When we talk about the best, so honestly, there is nothing like that because what seems best to you might not be the best for others. So, the best is different for every individual. It majorly depends on your skill level, like if you have some prior knowledge about the digital marketing field then you can go for the advanced digital marketing course and skip the foundation education but if you don't know anything, even about the basics of digital marketing then the best for you would be "digital marketing course for beginners".</p>
                    </div>
                </details>

                <details className="faq-item group">
                    <summary className="flex items-center justify-between p-6 bg-white rounded-xl cursor-pointer hover:shadow-md transition-all duration-300">
                        <h3 className="text-lg font-semibold pr-4">What is the Salary of the Expert in Digital Marketing Course?</h3>
                        <span className="transform group-open:rotate-180 transition-transform duration-300">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                    </summary>
                    <div className="p-6 bg-white rounded-b-xl">
                        <p><span className="text-primary font-semibold">Answer:</span> After completing an Expert in Digital Marketing Course, salaries range from ₹4,00,000 to ₹12,00,000 per year, depending on the role and experience.</p>
                    </div>
                </details>

                <details className="faq-item group">
                    <summary className="flex items-center justify-between p-6 bg-white rounded-xl cursor-pointer hover:shadow-md transition-all duration-300">
                        <h3 className="text-lg font-semibold pr-4">What are the 4 Types of Digital Marketing?</h3>
                        <span className="transform group-open:rotate-180 transition-transform duration-300">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                    </summary>
                    <div className="p-6 bg-white rounded-b-xl">
                        <p><span className="text-primary font-semibold">Answer:</span> The four major types of digital marketing are SEO (Search Engine Optimization), SEM (Search Engine Marketing), Social Media Marketing, and Content Marketing.</p>
                    </div>
                </details>

                <details className="faq-item group">
                    <summary className="flex items-center justify-between p-6 bg-white rounded-xl cursor-pointer hover:shadow-md transition-all duration-300">
                        <h3 className="text-lg font-semibold pr-4">What skills will I gain from this digital marketing course?</h3>
                        <span className="transform group-open:rotate-180 transition-transform duration-300">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                    </summary>
                    <div className="p-6 bg-white rounded-b-xl">
                        <p><span className="text-primary font-semibold">Answer:</span> You'll learn SEO, Google Ads, Meta Ads, content marketing, social media strategy, web analytics (GA4), email &amp; WhatsApp marketing, influencer marketing, and more.</p>
                    </div>
                </details>

                <details className="faq-item group">
                    <summary className="flex items-center justify-between p-6 bg-white rounded-xl cursor-pointer hover:shadow-md transition-all duration-300">
                        <h3 className="text-lg font-semibold pr-4">Do you offer a job placement assistance?</h3>
                        <span className="transform group-open:rotate-180 transition-transform duration-300">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                    </summary>
                    <div className="p-6 bg-white rounded-b-xl">
                        <p><span className="text-primary font-semibold">Answer:</span> Yes, we offer a dedicated placement assistance with resume building, interview prep, portfolio reviews, and job placement guidance.</p>
                    </div>
                </details>

                <details className="faq-item group">
                    <summary className="flex items-center justify-between p-6 bg-white rounded-xl cursor-pointer hover:shadow-md transition-all duration-300">
                        <h3 className="text-lg font-semibold pr-4">What tools will I use during the course?</h3>
                        <span className="transform group-open:rotate-180 transition-transform duration-300">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                    </summary>
                    <div className="p-6 bg-white rounded-b-xl">
                        <p><span className="text-primary font-semibold">Answer:</span> You'll work with tools like Google Analytics (GA4), WordPress, Meta Ads Manager, Google Ads, Canva, Photoshop, Mailchimp, HubSpot, and more.</p>
                    </div>
                </details>
            </div>
        </div>

        <style dangerouslySetInnerHTML={{__html:"\r\n            .faq-item {\r\n                opacity: 0;\r\n                transform: translateY(20px);\r\n                animation: slideUp 0.6s ease forwards;\r\n            }\r\n            \r\n            .faq-item:nth-child(1) { animation-delay: 0.1s; }\r\n            .faq-item:nth-child(2) { animation-delay: 0.2s; }\r\n            .faq-item:nth-child(3) { animation-delay: 0.3s; }\r\n            .faq-item:nth-child(4) { animation-delay: 0.4s; }\r\n            .faq-item:nth-child(5) { animation-delay: 0.5s; }\r\n            .faq-item:nth-child(6) { animation-delay: 0.6s; }\r\n            .faq-item:nth-child(7) { animation-delay: 0.7s; }\r\n            .faq-item:nth-child(8) { animation-delay: 0.8s; }\r\n\r\n            @keyframes slideUp {\r\n                from {\r\n                    opacity: 0;\r\n                    transform: translateY(20px);\r\n                }\r\n                to {\r\n                    opacity: 1;\r\n                    transform: translateY(0);\r\n                }\r\n            }\r\n\r\n            .faq-item summary::-webkit-details-marker {\r\n                display: none;\r\n            }\r\n\r\n            .faq-item {\r\n                border: 1px solid rgba(0, 0, 0, 0.1);\r\n                border-radius: 12px;\r\n                transition: all 0.3s ease;\r\n            }\r\n\r\n            .faq-item[open] {\r\n                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\r\n            }\r\n\r\n            .faq-item:hover {\r\n                border-color: rgba(37, 99, 235, 0.2);\r\n            }\r\n        "}} />
    </section>

    
{/*  Floating CTA Button (for mobile)  */}

    
<div className="floating-cta md:hidden">
        <a href="#lead-form" className="cta-button inline-block px-6 py-3 text-white rounded-full font-bold shadow-lg">
            <span className="flex items-center">
                <i className="fas fa-gift mr-2"></i>
                Get Discount
            </span>
        </a>
    </div>


    
<style dangerouslySetInnerHTML={{__html:"\r\n        .popup {\r\n            position: fixed;\r\n            top: 0;\r\n            left: 0;\r\n            width: 100%;\r\n            height: 100%;\r\n            background: rgba(10, 10, 20, 0.9);\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            z-index: 99999999;\r\n            opacity: 0;\r\n            visibility: hidden;\r\n            transition: opacity 0.3s ease, visibility 0.3s ease;\r\n        }\r\n\r\n        .popup.show {\r\n            opacity: 1;\r\n            visibility: visible;\r\n        }\r\n\r\n        /* Popup container */\r\n        .popup-content {\r\n            display: flex;\r\n            height: fit-content;\r\n            max-width: 900px;\r\n            height: 450px;\r\n            background: #111827;\r\n            border-radius: 12px;\r\n            overflow: hidden;\r\n            box-shadow: 0 8px 30px rgba(0,0,0,0.6);\r\n            color: #fff;\r\n            position: relative;\r\n            transform: scale(0.95);\r\n            transition: transform 0.3s ease;\r\n        }\r\n\r\n        .popup.show .popup-content {\r\n            transform: scale(1);\r\n        }\r\n\r\n        /* Left image */\r\n        .popup-image {\r\n            background: #1f2937;\r\n        }\r\n\r\n        .popup-image img {\r\n            width: 100%;\r\n            height: 500px;\r\n            object-fit: cover;\r\n        }\r\n\r\n        /* Right form */\r\n        .popup-form {\r\n            width: 400px;\r\n            padding: 30px;\r\n            display: flex;\r\n            flex-direction: column;\r\n        }\r\n\r\n        .popup-form h2 {\r\n            font-size: 28px;\r\n            margin-bottom: 10px;\r\n            color: #a855f7;\r\n        }\r\n\r\n        .popup-form p {\r\n            margin-bottom: 20px;\r\n            color: #d1d5db;\r\n        }\r\n\r\n        .popup-form form {\r\n            display: flex;\r\n            flex-direction: column;\r\n            gap: 15px;\r\n            justify-content: center;\r\n            width: 100%;\r\n        }\r\n\r\n        .popup-form input,\r\n        .popup-form select {\r\n            width: 100%;\r\n            padding: 12px;\r\n            border: 1px solid #374151;\r\n            border-radius: 8px;\r\n            background: #1f2937;\r\n            color: #fff;\r\n            transition: border-color 0.3s ease;\r\n        }\r\n\r\n        .popup-form input:focus,\r\n        .popup-form select:focus {\r\n            border-color: #a855f7;\r\n            outline: none;\r\n        }\r\n\r\n        .popup-form input::placeholder {\r\n            color: #9ca3af;\r\n        }\r\n\r\n        .popup-form button {\r\n            padding: 12px;\r\n            background: linear-gradient(135deg, #7e22ce, #9333ea);\r\n            border: none;\r\n            border-radius: 8px;\r\n            color: #fff;\r\n            font-weight: 600;\r\n            cursor: pointer;\r\n            transition: transform 0.2s, background 0.3s;\r\n        }\r\n\r\n        .popup-form button:hover {\r\n            transform: scale(1.05);\r\n            background: linear-gradient(135deg, #9333ea, #a855f7);\r\n        }\r\n\r\n        /* Close button */\r\n        .close {\r\n            position: absolute;\r\n            top: 20px;\r\n            right: 20px;\r\n            font-size: 32px;\r\n            color: #fff;\r\n            cursor: pointer;\r\n            transition: transform 0.2s ease;\r\n        }\r\n\r\n        .close:hover {\r\n            transform: rotate(90deg);\r\n        }\r\n\r\n        /* Responsive */\r\n        @media (max-width: 768px) {\r\n            .popup-content {\r\n                flex-direction: column;\r\n                width: 90%;\r\n                max-width: 400px;\r\n                height: auto;\r\n            }\r\n\r\n            .popup-image {\r\n                display: none;\r\n            }\r\n\r\n            .popup-form {\r\n                width: 100%;\r\n                padding: 20px;\r\n            }\r\n        }\r\n    "}} />


    
{/*  Popup Form  */}

    
<div id="popup" className="popup">
        <div className="popup-content">
            {/*  Left: Image  */}
            <div className="popup-image">
                <img src="https://dizitaladda.com/pexels-rdne-7821934.jpg" alt="Course Promo" />
            </div>

            {/*  Right: Form  */}
            <div className="popup-form">
                <span id="closePopup" className="close">×</span>
                <h2>Get Course Information</h2>
                <p>Fill out the form to receive our brochure and details.</p>

                <form method="POST" id="enquiryForm">
                    <input type="text" name="Name" placeholder="Enter Your Name..." autoComplete="name" required={true} />
                    <input type="tel" name="Number" placeholder="Enter Your Number..." autoComplete="tel" required={true} />
                    <input type="email" name="Email" placeholder="Enter Your Email..." autoComplete="email" required={true} />
                    <input type="hidden" name="Course" value="Digital Marketing" />
                    <button type="submit">Enquire Now</button>
                </form>
            </div>
        </div>
    </div>


    
<script dangerouslySetInnerHTML={{__html:"\r\n        document.addEventListener('DOMContentLoaded', () => {\r\n            const popup = document.getElementById('popup');\r\n            const enquiryForm = document.getElementById('enquiryForm');\r\n            const scriptURL = 'https://script.google.com/macros/s/AKfycbwOdAHH3XiErN1UdBcnsB2f1jA0X49Gw-cDOhqD6jf2BAt7PJaKRGunb9BYGMZc9AGeew/exec';\r\n\r\n            // Show popup when any CTA button is clicked\r\n            document.querySelectorAll('a[href=\"#lead-form\"]').forEach(cta => {\r\n                cta.addEventListener('click', (e) => {\r\n                    e.preventDefault();\r\n                    popup.classList.add('show');\r\n                });\r\n            });\r\n\r\n            // Auto-show popup after 8 seconds if not shown before\r\n            if (!sessionStorage.getItem('popupShown')) {\r\n                setTimeout(() => {\r\n                    popup.classList.add('show');\r\n                    sessionStorage.setItem('popupShown', 'true');\r\n                }, 8000);\r\n            }\r\n\r\n            // Handle form submission\r\n            enquiryForm.addEventListener('submit', function(e) {\r\n                e.preventDefault();\r\n                const submitButton = this.querySelector('button[type=\"submit\"]');\r\n                submitButton.disabled = true;\r\n                submitButton.innerHTML = 'Submitting...';\r\n\r\n                const form = new FormData(this);\r\n\r\n                fetch(scriptURL, {\r\n                    method: 'POST',\r\n                    body: form\r\n                })\r\n                .then(response => response.text())\r\n                .then(() => {\r\n                    alert(\"Thanks! We'll send you the brochure.\");\r\n                    enquiryForm.reset();\r\n                    popup.classList.remove('show');\r\n                })\r\n                .catch(error => {\r\n                    console.error(\"Submission failed:\", error);\r\n                    alert(\"Error submitting form\");\r\n                })\r\n                .finally(() => {\r\n                    submitButton.disabled = false;\r\n                    submitButton.innerHTML = 'Enquire Now';\r\n                });\r\n            });\r\n\r\n            // Close popup handlers\r\n            document.getElementById('closePopup').addEventListener('click', () => {\r\n                popup.classList.remove('show');\r\n            });\r\n\r\n            // Close popup when clicking outside\r\n            popup.addEventListener('click', (e) => {\r\n                if (e.target === popup) {\r\n                    popup.classList.remove('show');\r\n                }\r\n            });\r\n\r\n            // Close popup with Escape key\r\n            document.addEventListener('keydown', (e) => {\r\n                if (e.key === 'Escape' && popup.classList.contains('show')) {\r\n                    popup.classList.remove('show');\r\n                }\r\n            });\r\n        });\r\n    "}} />


<script src="/common-lead-form.js" defer="" />


      </LegacyPageContent>
    </>
  );
}
