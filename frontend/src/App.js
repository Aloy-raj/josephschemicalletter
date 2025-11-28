import React, { useState, useEffect } from 'react';

// Import all page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EditorialPage from './pages/EditorialPage';
import IssuesPage from './pages/IssuesPage';
import ArchivesPage from './pages/ArchivesPage';
import GuidelinesPage from './pages/GuidelinesPage';
import ContactPage from './pages/ContactPage';
import SubscriptionModal from './components/SubscriptionModal';

// Import shared components
import Header from './components/Header';
import Footer from './components/Footer';

// The navigation data structure now excludes Podcast and Feedback
const NAVIGATION = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'issues', label: 'ISSUES', dropdown: [
    { id: 'issues', label: 'CURRENT ISSUE' },
    { id: 'archives', label: 'ARCHIVES' },
  ]},
  { id: 'editorial', label: 'EDITORIAL BOARD' },
  { id: 'contact', label: 'CONTACT' },
  { id: 'guidelines', label: 'GUIDELINES' },
];

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const navigation = NAVIGATION;

  useEffect(() => {
    const subscriptionStatus = localStorage.getItem('isSubscribed');
    if (subscriptionStatus === 'true') {
      setIsSubscribed(true);
    } else {
      setShowSubscriptionModal(true);
    }
  }, []);

  const handleSubscribeSuccess = () => {
    setIsSubscribed(true);
    localStorage.setItem('isSubscribed', 'true');
    setShowSubscriptionModal(false);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'editorial': return <EditorialPage />;
      case 'issues': return <IssuesPage />;
      case 'archives': return <ArchivesPage />;
      case 'guidelines': return <GuidelinesPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {isSubscribed && (
        <Header 
          navigation={navigation} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
        />
      )}
      
      <main>
        {isSubscribed ? renderPage() : <div className="p-8 text-center text-gray-400">Please subscribe to view the content.</div>}
      </main>

      {isSubscribed && (
        <Footer setCurrentPage={setCurrentPage} />
      )}

      <SubscriptionModal
        isVisible={showSubscriptionModal}
        onClose={() => setShowSubscriptionModal(false)}
        onSubscribeSuccess={handleSubscribeSuccess}
      />
    </div>
  );
};

export default App;
