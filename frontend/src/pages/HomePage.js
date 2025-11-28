import { WrapText } from 'lucide-react';
import React from 'react';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen font-inter">
      {/* Hero Section */}
      <div 
        className="h-screen relative flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.45)), url('/Image_05.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Floating background elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-20 w-28 h-28 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1500"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-float delay-1000 opacity-80"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-float delay-2000 opacity-70"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-float delay-3000 opacity-60"></div>
        </div>

        <div className="text-white max-w-4xl px-6 relative z-10">
          {/* Journal Logo */}
          <div
           className="logo"
           style={{
           backgroundColor: "rgba(255, 255, 255, 0.37)",
           
           }}
          >
          <img 
            src="/images/jcllogo.png" 
            alt="JCL Logo" 
            className="mx-auto mb-1 w-29 h-32 object-contain"
          />
          </div>
           {/* journal Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-extrabold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg mb-6 animate-fade-in-up">
            JOSEPH'S CHEMICAL LETTER
          </h1>
          <p className="text-xl md:text-2xl mb-6 font-light animate-fade-in-up delay-500 text-gray-200">
           A Bi-annual Online Magazine
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-700 text-gray-300">
            “A symphony of student voices and faculty wisdom in science.”
          </p>
          <p className="text-md mb-6 text-gray-400 italic animate-fade-in-up delay-600">
             ISSN: 2456-XXXX
          </p>
          <button 
            onClick={() => setCurrentPage('about')}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-10 py-5 text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl animate-fade-in-up delay-1000 shadow-lg group"
          >
            <span className="group-hover:scale-105 transition-transform duration-200 inline-block">
              Explore Our Journey
            </span>
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full">
            <div className="w-1 h-3 bg-white/70 -rounded full mx-auto mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900 text-white py-24 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              Our Impact
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full animate-fade-in-up delay-300"></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group animate-fade-in-up delay-500">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-yellow-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  5
                </div>
                <div className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                  Years Publishing
                </div>
              </div>
            </div>
            
            <div className="group animate-fade-in-up delay-700">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  10+
                </div>
                <div className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                  Reviewed Articles
                </div>
              </div>
            </div>
            
            <div className="group animate-fade-in-up delay-900">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  10+
                </div>
                <div className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                  Contributing Authors
                </div>
              </div>
            </div>
            
            <div className="group animate-fade-in-up delay-1100">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-green-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                  Issues Published
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1100 { animation-delay: 1.1s; }
        .delay-1500 { animation-delay: 1.5s; }
        .delay-2000 { animation-delay: 2s; }
        .delay-3000 { animation-delay: 3s; }
      `}</style>
    </div>
  );
};

export default HomePage;