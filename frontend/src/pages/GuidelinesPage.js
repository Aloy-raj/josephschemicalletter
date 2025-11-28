import React from 'react';

const GuidelinesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Floating background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/3 w-36 h-36 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1500"></div>
        
        {/* Main heading with animation */}
        <div className="text-center mb-20 relative">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-fade-in-up">
            Submission Guidelines
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full animate-fade-in-up delay-300"></div>
          <p className="text-lg text-gray-600 mt-6 animate-fade-in-up delay-500">
            Your pathway to publishing cutting-edge chemistry research
          </p>
        </div>
        
        {/* Main content card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/20 hover:shadow-3xl transition-all duration-500 group relative overflow-hidden animate-fade-in-up delay-700">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-20 group-hover:scale-125 transition-transform duration-700"></div>
          <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full opacity-30 group-hover:scale-125 transition-transform duration-700 delay-200"></div>
          
          <div className="space-y-12 relative z-10">
            {/* Manuscript Submission Section */}
            <div className="animate-fade-in-up delay-900">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 rounded-2xl shadow-lg mr-6">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  </div>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  Manuscript Submission
                </h2>
              </div>
              <div className="bg-yellow-50/70 rounded-2xl p-8 border-l-4 border-yellow-400">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start group/item">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full mr-4 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                    <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors duration-200">
                      Manuscripts should be original contribution of the author, review papers, or educational content related to chemistry, artworks, poems, Chem puzzles.
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full mr-4 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                    <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors duration-200">
                      Word count should be between 3,000-8,000 words including references
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full mr-4 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                    <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors duration-200">
                      Submit manuscripts in Microsoft Word format (.docx)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Formatting Requirements Section */}
            <div className="animate-fade-in-up delay-1100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-lg mr-6">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  </div>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Formatting Requirements
                </h2>
              </div>
              <div className="bg-blue-50/70 rounded-2xl p-8 border-l-4 border-blue-400">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start group/item">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-4 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                    <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors duration-200">
                      Use Times New Roman, 12pt font for body, Single-spaced between Words
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-4 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                    <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors duration-200">
                      Use Times New Roman, !6pt font for Heading, 14pt for subheadings
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-4 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                    <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors duration-200">
                      Follow ACS (American Chemical Society), RSC (Royal Society Of Chemistry) citation style
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Review Process Section */}
            <div className="animate-fade-in-up delay-1300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4 rounded-2xl shadow-lg mr-6">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  </div>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Review Process
                </h2>
              </div>
              <div className="bg-purple-50/70 rounded-2xl p-8 border-l-4 border-purple-400">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start group/item">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mr-4 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                    <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors duration-200">
                      All submissions undergo double-blind peer review
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mr-4 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                    <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors duration-200">
                      Review process typically takes 6-8 weeks
                    </span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mr-4 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                    <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors duration-200">
                      Authors will receive detailed feedback regardless of decision
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-16 relative z-10 animate-fade-in-up delay-1500">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg group/btn">
              <span className="group-hover/btn:scale-105 transition-transform duration-200 inline-block">
                Submit Your Manuscript
              </span>
            </button>
          </div>
        </div>
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
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1100 { animation-delay: 1.1s; }
        .delay-1300 { animation-delay: 1.3s; }
        .delay-1500 { animation-delay: 1.5s; }
        .delay-2000 { animation-delay: 2s; }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
};

export default GuidelinesPage;