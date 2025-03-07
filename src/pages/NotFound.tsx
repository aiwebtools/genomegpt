
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-bg-dark">
      <div className="glass-panel p-12 max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center mb-6 w-20 h-20 rounded-full bg-cyber-neon-pink/10 border border-cyber-neon-pink">
          <h1 className="text-4xl font-bold font-cyber text-cyber-neon-pink text-glow-pink">404</h1>
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-white">Page Not Found</h2>
        
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          to="/" 
          className="cyber-button inline-flex items-center space-x-2 justify-center"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
