import React, { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';

const Header = ({ navigation, currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIssuesDropdownOpen, setIsIssuesDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-16 h-16 mr-4 flex items-center justify-center">
              <img 
                src="/Logo_01.jpg" 
                alt="St. Joseph's College Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                St. Joseph's College
              </h1>
              <p className="text-sm text-gray-600">
                (Autonomous) Tiruchirappalli, Tamil Nadu, India
              </p>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => item.id === 'issues' && setIsIssuesDropdownOpen(true)}
                onMouseLeave={() => item.id === 'issues' && setIsIssuesDropdownOpen(false)}
              >
                <button className="text-gray-700 hover:text-blue-600 trantition">
                  {item.name}
                </button>


                {/*Dropdown for Issues */}
                {item.id === 'issues' && isIssuesDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 z-50">
                    <a
                      href="/issues/current"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      ISSUES
                    </a>
                    <a
                      href="/issues/archive"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Archive
                    </a>
                  </div>
                )}
                          
                <button
                  onClick={() => {
                    if (item.id === 'submissions') {
                      setCurrentPage('guidelines');
                    } else if (!item.dropdown) {
                      setCurrentPage(item.id);
                    }
                  }}
                  className={`text-sm font-semibold flex items-center px-4 py-2 rounded-lg ${
                    currentPage === item.id || (item.dropdown && (currentPage === 'issues' || currentPage === 'archives'))
                      ? 'text-yellow-600 bg-yellow-50'
                      : 'text-gray-700 hover:text-yellow-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown className="ml-1 w-4 h-4" />
                  )}
                </button>
                {/* Dropdown Menu */}
                {item.dropdown && isIssuesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {item.dropdown.map((dropdownItem) => (
                      <button
                        key={dropdownItem.id}
                        onClick={() => {
                          setCurrentPage(dropdownItem.id);
                          setIsIssuesDropdownOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          currentPage === dropdownItem.id
                            ? 'text-yellow-600 bg-yellow-50'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-yellow-600'
                        }`}
                      >
                        {dropdownItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50 hover:bg-gray-100"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 mx-2">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => {
                        if (item.id === 'submissions') {
                            setCurrentPage('guidelines');
                        } else if (!item.dropdown) {
                            setCurrentPage(item.id);
                        }
                        setIsMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm font-semibold rounded-lg ${
                        currentPage === item.id 
                          ? 'text-white bg-yellow-500' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.label}
                    </button>
                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <button
                            key={dropdownItem.id}
                            onClick={() => {
                              setCurrentPage(dropdownItem.id);
                              setIsMenuOpen(false);
                            }}
                            className={`block w-full text-left px-4 py-2 text-sm rounded-lg ${
                              currentPage === dropdownItem.id 
                                ? 'text-white bg-yellow-500' 
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            {dropdownItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;