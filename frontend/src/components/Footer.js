import React from 'react';
import API_BASE_URL from "../config";

const Footer = ({ setCurrentPage }) => {
  {/* React Hooks */}
   {(() => {
      const [email, setEmail] = React.useState("");
      const [status, setStatus] = React.useState("idle"); // idle, loading, success, error
      const [message, setMessage] = React.useState("");

      const handleNewsletterSubmit = async (e) => {
         e.preventDefault();
         if (!email) return;

         setStatus("loading");
         setMessage("Subscribing...");

         try {
           const response = await fetch("${API_BASE_URL}/api/subscribe", {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify({ name: "Newsletter User", email }),
           });

            const data = await response.json();
 
            if (response.ok) {
              setStatus("success");
              setMessage("You are subscribed!");
              setEmail("");
            } else {
            if (data.message && data.message.toLowerCase().includes("already subscribed")) {
              setStatus("success");
              setMessage("You are already subscribed!");
            } else {
              setStatus("error");
              setMessage(data.message || "Something went wrong. Please try again.");
            }
          }
         } catch (err) {
           console.error("Error:", err);
           setStatus("error");
           setMessage("Network error. Try again.");
         }
         };

         return (
           <>
             <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-3">
               <input
                 type="email"
                 required
                 placeholder="Your email address"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none"
               />

               <button
                 type="submit"
                 className={`px-4 py-2 text-gray-900 font-semibold rounded-lg transition-transform transform hover:scale-105 ${
                   status === "loading"
                     ? "bg-gray-500 cursor-not-allowed"
                     : "bg-yellow-500 hover:bg-yellow-600"
                  }`}
                  disabled={status === "loading"}
                 >
                   {status === "loading" ? "Submitting..." : "Subscribe"}
                </button>
             </form>
 
             {message && (
               <p
                 className={`mt-3 text-sm ${
                 status === "success" ? "text-green-400" : "text-red-400"
                 }`}
                >
                 {message}
               </p>
              )}
            </>
           );
         })()}
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-2000"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">  

          {/* JCL Section */}
          <div className="animate-fade-in-up">
            <div className="group mb-6">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                JCL
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>
            <p className="text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-300">
              A premier chemistry journal from St. Joseph's College, fostering scientific research and academic excellence.
            </p>
          </div>
          
          {/* Quick Links Section */}
          <div className="animate-fade-in-up delay-200">
            <div className="group mb-6">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                Quick Links
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li>
                <button 
                  onClick={() => setCurrentPage('about')} 
                  className="hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 hover:translate-x-2 flex items-center group"
                >
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('issues')} 
                  className="hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 hover:translate-x-2 flex items-center group"
                >
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                  Current Issue
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('archives')} 
                  className="hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 hover:translate-x-2 flex items-center group"
                >
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                  Archives
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('guidelines')} 
                  className="hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 hover:translate-x-2 flex items-center group"
                >
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                  Guidelines
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info Section */}
          <div className="animate-fade-in-up delay-400">
            <div className="group mb-6">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                Contact Info
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>
            <div className="space-y-2 text-gray-300">
              <p className="hover:text-gray-200 transition-colors duration-300 flex items-center group">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                Department of Chemistry
              </p>
              <p className="hover:text-gray-200 transition-colors duration-300 flex items-center group">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                St. Joseph's College
              </p>
              <p className="hover:text-gray-200 transition-colors duration-300 flex items-center group">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                Tiruchirappalli - 620 002
              </p>
              <p className="hover:text-gray-200 transition-colors duration-300 flex items-center group">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                <a href="mailto:jcl@sjctni.edu" className="hover:text-yellow-400">
                  jcl@sjctni.edu
                </a>
              </p>
            </div>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="animate-fade-in-up delay-600">
         <div className="group mb-6">
           <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
             Stay Updated
           </h3>
           <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
         </div>

         <p className="text-gray-300 mb-4">
           Subscribe to receive updates about new issues and announcements.
         </p>

         {/* ✔ FIXED NEWSLETTER FORM */}
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-3">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none"
              />

              <button
                type="submit"
                className={`px-4 py-2 text-gray-900 font-semibold rounded-lg transition-transform transform hover:scale-105 ${
                  status === "loading"
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-yellow-500 hover:bg-yellow-600"
                }`}
                disabled={status === "loading"}
              >
                {status === "adding you to our community.." ? "Submitting..." : "Subscribe"}
              </button>
            </form>

            {message && (
              <p
                className={`mt-3 text-sm ${
                  status === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>

         
       

        {/* Enhanced Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 animate-fade-in-up delay-600">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl py-4 px-6 inline-block">
            <p className="hover:text-gray-300 transition-colors duration-300">
              &copy; 2025 St. Joseph's College. All rights reserved.
            </p>
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
        
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
    </footer>
  );
};

export default Footer;