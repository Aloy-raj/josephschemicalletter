// frontend/src/components/SubscriptionModal.js
import React, { useState } from 'react';
import { X } from 'lucide-react';

const SubscriptionModal = ({ isVisible, onClose, onSubscribeSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;

    if (!name || !email) {
      setMessage('Please enter your name and email.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('Subscribing...');

    try {
      const response = await fetch('https://josephschemicalletter-1.onrender.com/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (response.ok) {
        // Successful subscription
        setStatus('success');
        setMessage(data.message);
      } else {
        // Treat "already subscribed" as success
        if (data.message && data.message.toLowerCase().includes('already subscribed')) {
          setStatus('success');
          setMessage('You are already subscribed!');
        } else {
          setStatus('error');
          setMessage(data.message || 'Something went wrong. Please try again.');
        }
      }

      setName('');
      setEmail('');
      setTimeout(() => {
        onSubscribeSuccess();
      }, 1000);

    } catch (error) {
      console.error("Error saving subscription:", error);
      setStatus('error');
      setMessage('Connection error. Please check your network and try again.');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
       <button
         onClick={onClose}
         className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
         <X size={20} />
        </button>
 
       <h2 className="text-2xl font-bold text-gray-800 mb-3">Subscribe to Our Magazine</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <button
            type="submit"
            className={`w-full px-4 py-3 text-white font-semibold rounded-lg ${
              status === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600'
            }`}
            disabled={status === 'loading'}
          >
           {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
       </form>

       {message && (
        <div className={`mt-4 text-sm text-center ${
          status === 'success' ? 'text-green-600' : 'text-red-600'
        }`}>
          {message}
        </div>
       )}
      </div>
    </div>
  );
};

export default SubscriptionModal;
