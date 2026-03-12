
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Dna } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cyber-bg-darker/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center space-x-2 group flex-shrink-0"
          >
            <div className="relative h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center">
              <Dna className="h-6 w-6 sm:h-8 sm:w-8 text-cyber-neon-blue group-hover:text-cyber-neon-purple transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full border border-cyber-neon-blue opacity-80 group-hover:border-cyber-neon-purple transition-colors duration-300 animate-pulse-neon"></div>
            </div>
            <div>
              <h1 className="font-cyber text-lg sm:text-xl font-bold text-white leading-none">
                <span className="text-cyber-neon-blue text-glow-blue transition-colors duration-300 group-hover:text-cyber-neon-purple group-hover:text-glow-purple">
                  Genome GPT
                </span>
              </h1>
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="hover:text-cyber-neon-blue transition-colors" target="_blank" rel="noopener noreferrer">AiWebTools.Ai</a>
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <a 
              href="https://chatgpt.com/g/g-JjuJ9E9px-genome-gpt" 
              className="cyber-button text-sm lg:text-base whitespace-nowrap"
              target="_blank" 
              rel="noopener noreferrer"
            >
              USE GENOME GPT NOW
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-cyber-neon-blue transition-colors hover-underline text-sm lg:text-base"
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white hover:text-cyber-neon-blue transition-colors hover-underline text-sm lg:text-base"
            >
              Disclaimer
            </a>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              className="text-white hover:text-cyber-neon-blue transition-colors hover-underline text-sm lg:text-base whitespace-nowrap"
              target="_blank" 
              rel="noopener noreferrer"
            >
              More AI Tools
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:text-cyber-neon-blue transition-colors active:scale-95 touch-manipulation"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[400px] opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-3 pb-3">
            <a 
              href="https://chatgpt.com/g/g-JjuJ9E9px-genome-gpt" 
              className="bg-cyber-neon-blue text-white font-cyber font-bold px-6 py-3 rounded-md text-center shadow-neon-blue active:scale-[0.98] transition-transform touch-manipulation"
              onClick={closeMenu}
              target="_blank" 
              rel="noopener noreferrer"
            >
              USE GENOME GPT NOW
            </a>
            <a 
              href="#faq" 
              className="bg-cyber-bg-darker border border-cyber-neon-blue text-white hover:text-cyber-neon-blue active:text-cyber-neon-blue transition-colors px-4 py-3 rounded-md text-center touch-manipulation"
              onClick={closeMenu}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="bg-cyber-bg-darker border border-cyber-neon-blue text-white hover:text-cyber-neon-blue active:text-cyber-neon-blue transition-colors px-4 py-3 rounded-md text-center touch-manipulation"
              onClick={closeMenu}
            >
              Disclaimer
            </a>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              className="bg-cyber-bg-darker border border-cyber-neon-blue text-white hover:text-cyber-neon-blue active:text-cyber-neon-blue transition-colors px-4 py-3 rounded-md text-center touch-manipulation"
              onClick={closeMenu}
              target="_blank" 
              rel="noopener noreferrer"
            >
              More AI Tools
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
