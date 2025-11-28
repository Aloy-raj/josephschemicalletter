import React from 'react';
import { BookOpen, Award, Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Floating background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/3 w-36 h-36 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        
        {/* Main heading with animation */}
        <div className="text-center mb-20 relative">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-fade-in-up">
            About Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full animate-fade-in-up delay-300"></div>
        </div>
        
        {/* College History */}
        <div className="mb-20 animate-fade-in-up delay-500">
          <div className="flex items-center justify-center mb-10">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 rounded-2xl shadow-lg mr-6 animate-bounce-gentle">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              St. Joseph's College
            </h2>
          </div>

          {/* Flex container for image + text */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* College Photo */}
            <img
              src="/images/college.jpg"
              alt="St. Joseph's College"
              className="w-full md:w-1/2 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            />

            {/* Text */}
            <div className="relative z-10 md:w-1/2">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-blue-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="text-lg leading-relaxed mb-8 text-gray-700 relative z-10">
                St. Joseph’s College, Tiruchirappalli, founded on the motto “For the Good and the True,” has long been a center of excellence in higher education, 
                committed to shaping individuals who embody integrity, compassion, and service. Rooted in Jesuit traditions, the College emphasizes holistic development, 
                preparing students to be intellectually competent, socially responsible, and spiritually enriched. Its emblem — featuring the Tiruchirappalli Rock, College Church, 
                a Palm Tree, Jesuit monogram, crown, and lily — reflects its mission and patronage under St. Joseph, symbolizing purity and royal lineage. 
                Guided by its vision of forming globally competent and compassionate persons, SJC fosters innovation in teaching, research, and service while valuing diversity 
                and inclusivity. Through initiatives like the SHEPHERD Programme and courses in Ethics and Religion, the College instills social justice, moral responsibility, and 
                spiritual values. Blending tradition with modernity, SJC continues to stand as a beacon of education, character, and service to society.
              </p>
            </div>
          </div>
        </div>

        {/* Department History */}
        <div className="mb-20 animate-fade-in-up delay-700">
          <div className="flex items-center justify-center mb-10">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-lg mr-6 animate-bounce-gentle delay-1000">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Department of Chemistry
            </h2>
          </div>

          {/* Flex container for image + text */}
          <div className="flex flex-col md:flex-row items-center gap-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
            {/* Department Photo */}
            <img
              src="/images/Department.jpg"
              alt="Department of Chemistry"
              className="w-full md:w-1/2 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            />

            {/* Text */}
            <div className="relative z-10 md:w-1/2">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="text-lg leading-relaxed mb-8 text-gray-700 relative z-10">
                Founded in 1906 by Rev. Fr. Augustin Hass SJ, the Department of Chemistry excels in education and research. We offer B.Sc., M.Sc. (since 1960), and Ph.D. (since 1965) 
                programs, serving 400 students and over 70 Ph.D. scholars. Ninety scholars have earned doctoral degrees. Our 22 teaching faculty and 8 non-teaching staff operate in 9 advanced 
                laboratories, a DST-FIST-funded Instrumentation Lab with tools like FTIR Spectrometer, UV-VIS Spectrometer, HPLC, and Polarimeters, plus 9 AV-enabled classrooms. Our library houses 
                280 recent titles. We’ve published over 750 research papers and 6 books, and our curriculum fosters employability, entrepreneurial, and analytical skills. For a decade, our CSIR-NET/SET/GATE
                coaching has driven student success. Renovated in 2015, we celebrated our centenary in 2006 and plan to launch a B.Sc. in Food Sciences, continuing our legacy of innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Magazine History */}
        <div className="animate-fade-in-up delay-900 relative">
          <div className="flex items-center justify-center mb-10">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4 rounded-2xl shadow-lg mr-6 animate-bounce-gentle delay-2000">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              JOSEPH'S CHEMICAL LETTER Magazine
            </h2>
          </div>

          {/* Wrapper with logo background */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group overflow-hidden">
            {/* Transparent logo in background */}
            <img
              src="/images/jcllogo.png"
              alt="JCL Logo"
              className="absolute inset-0 w-full h-full object-contain opacity-20 pointer-events-none"
            />

            {/* Gradient overlay for hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Text content */}
            <div className="relative z-10">
              <p className="text-lg leading-relaxed mb-8 text-gray-700">
                Josep Chemical Letter is the bi-annual magazine of the Department of Chemistry, St. Joseph’s College, 
                Tiruchirapalli. Launched in 2020, this magazine serves as a vibrant 
                platform for sharing knowledge, research insights, and creative ideas in the field of chemistry. 
              </p>
              <p className="text-lg leading-relaxed mb-8 text-gray-700">
               It features contributions from both professors and students, encompassing articles, reviews, experimental studies, 
               and thought-provoking perspectives. By bridging academic expertise with student curiosity, Josep Chemical Letter 
               fosters a culture of learning, innovation, and scientific communication within the college community.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                The magazine not only highlights ongoing research and scientific discoveries but also encourages interdisciplinary 
                exploration and critical thinking among its readers. With each issue, Josep Chemical Letter aims to inspire curiosity, 
                foster collaboration, and celebrate the spirit of inquiry that drives the chemistry community at St. Joseph’s College. 
                It is a testament to the department’s commitment to academic excellence,
                innovation, and nurturing the next generation of chemists.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounceGentle {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-bounce-gentle {
          animation: bounceGentle 3s ease-in-out infinite;
        }
        
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-2000 { animation-delay: 2s; }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
