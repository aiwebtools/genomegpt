
import React, { useState, useEffect } from 'react';
import { Menu, X, Dna } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cyber-bg-darker/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="relative h-10 w-10 flex items-center justify-center">
              <Dna className="h-8 w-8 text-cyber-neon-blue group-hover:text-cyber-neon-purple transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full border border-cyber-neon-blue opacity-80 group-hover:border-cyber-neon-purple transition-colors duration-300 animate-pulse-neon"></div>
            </div>
            <div>
              <h1 className="font-cyber text-xl font-bold text-white leading-none">
                <span className="text-cyber-neon-blue text-glow-blue transition-colors duration-300 group-hover:text-cyber-neon-purple group-hover:text-glow-purple">
                  Genome GPT
                </span>
              </h1>
              <p className="text-xs text-muted-foreground">
                Presented by <a href="https://www.aiwebtools.ai" className="hover:text-cyber-neon-blue transition-colors">AiWebTools.Ai</a>
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-6">
              <a 
                href="https://chatgpt.com/g/g-JjuJ9E9px-genome-gpt" 
                className="cyber-button"
                target="_blank" 
                rel="noopener noreferrer"
              >
                USE GENOME GPT NOW
              </a>
              <a 
                href="#faq" 
                className="text-white hover:text-cyber-neon-blue transition-colors hover-underline"
              >
                FAQ
              </a>
              <a 
                href="#disclaimer" 
                className="text-white hover:text-cyber-neon-blue transition-colors hover-underline"
              >
                Disclaimer
              </a>
              <a 
                href="https://www.aiwebtools.ai" 
                className="text-white hover:text-cyber-neon-blue transition-colors hover-underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                More AI Tools
              </a>
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:text-cyber-neon-blue transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobile && isOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4 animate-fade-in">
            <a 
              href="https://chatgpt.com/g/g-JjuJ9E9px-genome-gpt" 
              className="bg-cyber-neon-blue text-white font-cyber font-bold px-6 py-2 rounded-md text-center shadow-neon-blue"
              onClick={() => setIsOpen(false)}
              target="_blank" 
              rel="noopener noreferrer"
            >
              USE GENOME GPT NOW
            </a>
            <a 
              href="#faq" 
              className="bg-cyber-bg-darker border border-cyber-neon-blue text-white hover:text-cyber-neon-blue transition-colors px-4 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="bg-cyber-bg-darker border border-cyber-neon-blue text-white hover:text-cyber-neon-blue transition-colors px-4 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Disclaimer
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              className="bg-cyber-bg-darker border border-cyber-neon-blue text-white hover:text-cyber-neon-blue transition-colors px-4 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
              target="_blank" 
              rel="noopener noreferrer"
            >
              More AI Tools
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
