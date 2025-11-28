import React from 'react';
import { Calendar } from 'lucide-react';

// Assuming you have a file at this path, e.g., 'frontend/src/data/constants.js'
// and it contains a constant like ARCHIVE_ISSUES.
// Since you provided the PDF details, I've created a mock for this constant.
const ARCHIVE_ISSUES = [
  {
    title: "JOSEPH CHEMICAL LETTERS Vol. I, Issue 1",
    date: "November 2020",
    volume: "Volume I, Issue 1",
    pdfUrl: "JCL Vol 1 Issues 1.pdf" // This path is a placeholder. You would need to make this file accessible.
  },
  // You can add more issues here
  // {
  //   title: "Another Issue Title",
  //   date: "Month Year",
  //   volume: "Volume X, Issue Y",
  //   pdfUrl: "path/to/another_issue.pdf"
  // },
];

const ArchivesPage = () => {
  const archiveIssues = ARCHIVE_ISSUES;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Floating background elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-32 left-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        
        {/* Main heading with animation */}
        <div className="text-center mb-20 relative">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-fade-in-up">
            Archives
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full animate-fade-in-up delay-300"></div>
          <p className="text-lg text-gray-600 mt-6 animate-fade-in-up delay-500">
            Explore our collection of published research and academic journals
          </p>
        </div>
        
        {/* Archive Issues Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {archiveIssues.map((issue, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-[1.05] group animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-blue-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Date badge */}
              <div className="flex items-center mb-6 relative z-10">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-3 rounded-2xl shadow-lg mr-4 animate-bounce-gentle">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <span className="text-yellow-600 font-bold text-lg bg-yellow-50 px-4 py-2 rounded-full">
                  {issue.date}
                </span>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent leading-tight">
                  {issue.title}
                </h3>
                <p className="text-gray-600 mb-8 text-lg font-medium bg-gray-100 inline-block px-4 py-2 rounded-full">
                  {issue.volume}
                </p>
                
                {/* Action buttons */}
                <div className="flex space-x-4">
                  <a 
                    href={issue.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300 text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center min-w-[100px] group/btn"
                  >
                    <span className="group-hover/btn:scale-110 transition-transform duration-200">
                      View
                    </span>
                  </a>
                  <a 
                    href={issue.pdfUrl}
                    download
                    className="border-2 border-yellow-500 text-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 hover:text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300 text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center min-w-[120px] group/btn"
                  >
                    <span className="group-hover/btn:scale-110 transition-transform duration-200">
                      Download
                    </span>
                  </a>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-50 group-hover:scale-125 transition-transform duration-700"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full opacity-30 group-hover:scale-125 transition-transform duration-700 delay-100"></div>
            </div>
          ))}
        </div>
        
        {/* Empty state message when no issues */}
        {archiveIssues.length === 0 && (
          <div className="text-center py-20 animate-fade-in-up delay-700">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/20 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-gray-400 to-gray-600 p-6 rounded-2xl shadow-lg mx-auto w-fit mb-6">
                <Calendar className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">No Archives Available</h3>
              <p className="text-gray-600 text-lg">
                Archive issues will be displayed here once they become available.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS for animations */}
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
        .delay-2000 { animation-delay: 2s; }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
};

export default ArchivesPage;