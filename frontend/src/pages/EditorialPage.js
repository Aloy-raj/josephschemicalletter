import React from 'react';
import { User, Mail } from 'lucide-react';
import { EDITORIAL_BOARD } from '../data/constants';

const EditorialPage = () => {
  const editorialBoard = EDITORIAL_BOARD;

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
            Editorial Board
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full animate-fade-in-up delay-300"></div>
          <p className="text-lg text-gray-600 mt-6 animate-fade-in-up delay-500">
            Meet the distinguished scholars leading our academic excellence
          </p>
        </div>
        
        {/* Editorial Board Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {editorialBoard.map((member, index) => (
            <a
              key={index}
              href={member.cvLink}
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-[1.05] group animate-fade-in-up relative"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-indigo-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              {/* Profile Image Section */}
              <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-blue-400/10 group-hover:from-yellow-400/20 group-hover:to-blue-400/20 transition-all duration-500"></div>
                <div className="p-[4px] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:scale-110 transition-transform duration-500 relative z-10 shadow-lg">
                  <img
                  src={member.image}          // ✅ pulls from constants.js
                  alt={member.name}
                  className="w-48 h-56 object-cover rounded-2x1 border-4 border-white shadow-md relative z-10" 
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-50 group-hover:scale-125 transition-transform duration-700"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full opacity-30 group-hover:scale-125 transition-transform duration-700 delay-100"></div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  {member.name}
                </h3>
                <p className="text-yellow-600 font-bold mb-3 text-lg bg-yellow-50 inline-block px-4 py-2 rounded-full">
                  {member.position}
                </p>
                <p className="text-gray-600 mb-3 font-medium">{member.department}</p>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed bg-gray-50 p-3 rounded-2xl">
                  {member.specialization}
                </p>
                
                {/* Email Contact */}
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-xl shadow-lg mr-3">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium text-sm group-hover:scale-105 transition-transform duration-300"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Student Contributors Section */}
        <div className="animate-fade-in-up delay-1000">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Student Contributors
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/20 hover:shadow-3xl transition-all duration-500 group relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-30 group-hover:scale-125 transition-transform duration-700"></div>
            <div className="absolute bottom-8 left-8 w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-20 group-hover:scale-125 transition-transform duration-700 delay-200"></div>
            
            <div className="relative z-10">
              <p className="text-xl leading-relaxed text-center mb-10 text-gray-700">
                MERGEN welcomes contributions from undergraduate and graduate students who are passionate about chemistry research. 
                Our student contributors bring fresh perspectives and innovative ideas to the scientific community.
              </p>
              <div className="text-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-10 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg group/btn">
                  <span className="group-hover/btn:scale-105 transition-transform duration-200 inline-block">
                    Become a Contributor
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Empty state for no editorial board members */}
        {(!editorialBoard || editorialBoard.length === 0) && (
          <div className="text-center py-20 animate-fade-in-up delay-700">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/20 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-gray-400 to-gray-600 p-6 rounded-2xl shadow-lg mx-auto w-fit mb-6">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">Editorial Board Coming Soon</h3>
              <p className="text-gray-600 text-lg">
                Our distinguished editorial board members will be featured here once the information becomes available.
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
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
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
      `}</style>
    </div>
  );
};

export default EditorialPage;