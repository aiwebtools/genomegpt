
import React from 'react';
import { Mail, Phone, Dna, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-bg-darker pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative h-10 w-10 flex items-center justify-center">
                <Dna className="h-8 w-8 text-cyber-neon-blue" />
                <div className="absolute inset-0 rounded-full border border-cyber-neon-blue opacity-80 animate-pulse-neon"></div>
              </div>
              <div>
                <h1 className="font-cyber text-xl font-bold text-white leading-none">
                  <span className="text-cyber-neon-blue text-glow-blue">
                    Genome GPT
                  </span>
                </h1>
                <p className="text-xs text-muted-foreground">
                  Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="hover:text-cyber-neon-blue transition-colors" target="_blank" rel="noopener noreferrer">AiWebTools.Ai</a>
                </p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-4">
              Advanced AI genetics researcher providing comprehensive genomic analysis and scientific discoveries.
            </p>
            
            <a 
              href="https://chatgpt.com/g/g-JjuJ9E9px-genome-gpt" 
              className="cyber-button inline-flex items-center space-x-2"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span>USE GENOME GPT NOW</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-cyber font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-cyber-neon-blue transition-colors hover-underline">Features</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-cyber-neon-blue transition-colors hover-underline">FAQ</a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-400 hover:text-cyber-neon-blue transition-colors hover-underline">Disclaimer</a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors hover-underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Legal */}
          <div>
            <h3 className="text-lg font-cyber font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors hover-underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors hover-underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-cyber font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+14758008096" 
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>(475) 800-8096</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact@ai-webtools.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section with more AI tools button and copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              className="hover:text-cyber-neon-blue transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              © 2025 AI WEB TOOLS LLC
            </a> All rights reserved.
          </p>
          
          <a 
            href="https://www.aiwebtools.ai"
            className="bg-cyber-neon-purple/10 hover:bg-cyber-neon-purple/20 text-cyber-neon-purple border border-cyber-neon-purple/50 rounded-full px-6 py-2 flex items-center space-x-2 transition-all duration-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span>More AI Tools</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
