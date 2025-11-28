import React from 'react';
import { Calendar, BookOpen } from 'lucide-react';

// Since you provided the PDF details, I've created a mock for this constant.
const CURRENT_ISSUES = [
  {
    title: "Joseph Chemical Letters",
    date: "February-2025",
    volume: "Volume-2/Issue-3",
    articles: [
      "Toxic communication",
      "Evolution of Atmospheric composition of planet",
      "The Chemistry of chocolates",
      "Chemistry in everyday life and in future",
      "Solve it",
      "The Chemistry of Tears",
      "Oncology in present and Future Advancement",
      "Mpox viral Chemistry",
      "Quantum mechanics",
      "Breaking a century: Old Chemistry Rule",
      "Noble prize for Chemistry 2024",
      "Find me",
      "Universe's first molecule",
      "Synthesis of Amino Acids",
      "Chemistry in famous Mystery fiction",
      "Bioluminesence Unveiled",
      "Facts to Know",
      "Chem puzzle",
    ],
    pdfUrl: "/JCL Vol 2 issue- 3.pdf" // This path is a placeholder. You would need to make this file accessible.
  },
];

const IssuesPage = () => {
  const currentIssues = CURRENT_ISSUES;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Floating background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/3 w-36 h-36 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1500"></div>
        
        {/* Main heading with animation */}
        <div className="text-center mb-20 relative">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-fade-in-up">
            Current Issue
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full animate-fade-in-up delay-300"></div>
          <p className="text-lg text-gray-600 mt-6 animate-fade-in-up delay-500">
            Discover the latest research and insights in chemistry
          </p>
        </div>
        
        {/* Current Issues */}
        {currentIssues.map((issue, index) => (
          <div 
            key={index} 
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden mb-16 border border-white/20 hover:shadow-3xl transition-all duration-500 group animate-fade-in-up relative"
            style={{ animationDelay: `${(index + 1) * 200}ms` }}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-blue-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="md:flex relative z-10">
              {/* Magazine Cover Section */}
              <div className="md:w-1/3 h-80 md:h-auto bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-blue-400/10 group-hover:from-yellow-400/20 group-hover:to-blue-400/20 transition-all duration-500"></div>
                
                {/* Magazine icon with enhanced styling */}
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-3xl shadow-2xl group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <BookOpen className="w-16 h-16 text-white" />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-50 group-hover:scale-125 transition-transform duration-700"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full opacity-30 group-hover:scale-125 transition-transform duration-700 delay-100"></div>
                
                {/* Volume indicator */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg">
                  <span className="text-sm font-bold text-gray-700">{issue.volume}</span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="md:w-2/3 p-10">
                {/* Date badge */}
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-3 rounded-2xl shadow-lg mr-4 animate-bounce-gentle">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-yellow-600 font-bold text-lg bg-yellow-50 px-6 py-3 rounded-full shadow-md">
                    {issue.date}
                  </span>
                </div>
                
                {/* Title */}
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:scale-[1.02] transition-transform duration-300">
                  {issue.title}
                </h2>
                
                {/* Articles Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent flex items-center">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full mr-4"></div>
                    Featured Articles
                  </h3>
                  
                  {/* Articles grid */}
                  <div className="grid md:grid-cols-2 gap-3 max-h-64 overflow-y-auto custom-scrollbar bg-gray-50/70 rounded-2xl p-6">
                    {issue.articles.map((article, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center group/article p-3 rounded-xl hover:bg-white/70 transition-all duration-200"
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mr-4 group-hover/article:scale-125 transition-transform duration-200 flex-shrink-0"></div>
                        <span className="text-gray-700 group-hover/article:text-gray-900 transition-colors duration-200 text-sm leading-relaxed">
                          {article}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="flex space-x-4">
                  <a 
                    href={issue.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-110 hover:shadow-xl shadow-lg group/btn flex items-center"
                  >
                    <span className="group-hover/btn:scale-105 transition-transform duration-200">
                      Read Online
                    </span>
                  </a>
                  <a 
                    href={issue.pdfUrl}
                    download
                    className="border-2 border-yellow-500 text-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 hover:text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-110 hover:shadow-xl shadow-lg group/btn flex items-center"
                  >
                    <span className="group-hover/btn:scale-105 transition-transform duration-200">
                      Download PDF
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Empty state when no current issues */}
        {(!currentIssues || currentIssues.length === 0) && (
          <div className="text-center py-20 animate-fade-in-up delay-700">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/20 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-gray-400 to-gray-600 p-6 rounded-2xl shadow-lg mx-auto w-fit mb-6">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">No Current Issues Available</h3>
              <p className="text-gray-600 text-lg">
                The latest issue will be displayed here once it becomes available.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS for animations and scrollbar */}
      <style jsx>{`
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
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
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
        .delay-1000 { animation-delay: 1s; }
        .delay-1500 { animation-delay: 1.5s; }
        .delay-2000 { animation-delay: 2s; }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.15);
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #fbbf24, #f59e0b);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #f59e0b, #d97706);
        }
      `}</style>
    </div>
  );
};

export default IssuesPage;