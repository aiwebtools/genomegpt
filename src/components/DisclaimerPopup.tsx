
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the disclaimer
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    
    if (!hasSeenDisclaimer) {
      // If not, show the disclaimer
      setIsOpen(true);
    }
  }, []);

  const handleAgree = () => {
    // Set the flag in localStorage
    localStorage.setItem('hasSeenDisclaimer', 'true');
    // Close the popup
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4 overflow-hidden animate-fade-in">
        <div className="relative z-10 p-6 rounded-lg shadow-2xl glass-panel border-2 border-cyber-neon-blue/50">
          <button 
            onClick={handleAgree} 
            className="absolute top-3 right-3 text-white/60 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
          
          <div className="mb-4 text-center">
            <h3 className="text-2xl font-cyber font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-purple">
              DISCLAIMER
            </h3>
          </div>
          
          <div className="space-y-3 mb-6 text-sm text-white/80">
            <p>
              <span className="text-cyber-neon-blue font-medium">For informational and research purposes only.</span> Genome GPT is experimental 
              in nature and should be used accordingly.
            </p>
            
            <p>
              All results should be verified by qualified professionals before making any decisions. 
              AI may occasionally generate incorrect information.
            </p>
            
            <p>
              By continuing, you agree to our <a href="#" className="text-cyber-neon-pink hover:underline">Terms of Service</a> and 
              acknowledge our <a href="#" className="text-cyber-neon-pink hover:underline">Privacy Policy</a>.
            </p>
          </div>
          
          <div className="text-center">
            <button 
              onClick={handleAgree}
              className="relative inline-flex overflow-hidden group rounded px-6 py-2 font-cyber font-bold text-white"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyber-neon-blue via-cyber-neon-purple to-cyber-neon-pink opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-base z-10 group-hover:scale-105 transition-transform duration-300">
                I AGREE
              </span>
            </button>
          </div>
        </div>
        
        {/* Background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-neon-blue/20 via-cyber-neon-purple/20 to-cyber-neon-pink/20 blur-2xl -z-10"></div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
