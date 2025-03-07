
import React, { useEffect, useRef } from 'react';
import { LucideGlobe, LucideDna, LucideBrain, LucideFlaskConical, LucideSearch, AlertTriangle } from 'lucide-react';
import DNAAnimation from './DNAAnimation';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    // Apply animations with slight delays for each element
    if (title) {
      title.style.opacity = '0';
      title.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, 300);
    }

    if (subtitle) {
      subtitle.style.opacity = '0';
      subtitle.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        subtitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 500);
    }

    if (cta) {
      cta.style.opacity = '0';
      cta.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        cta.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        cta.style.opacity = '1';
        cta.style.transform = 'translateY(0)';
      }, 700);
    }
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden">
      <DNAAnimation />
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 max-w-2xl">
            <div className="inline-block px-4 py-1 mb-6 rounded-full border border-cyber-neon-blue bg-cyber-bg-darker">
              <p className="text-sm font-medium text-cyber-neon-blue">
                Next-Gen Genomic Analysis
              </p>
            </div>
            
            <h1 
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-cyber mb-6 leading-tight"
            >
              <span className="text-white">Unlock the Secrets of</span>
              <span className="block text-cyber-neon-blue text-glow-blue"> Genetic Code</span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-lg text-gray-300 mb-8"
            >
              Genome GPT combines artificial intelligence with genetics expertise to analyze genomic data, 
              providing comprehensive scientific insights and discoveries with unprecedented accuracy and depth.
            </p>
            
            <div 
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="https://chatgpt.com/g/g-JjuJ9E9px-genome-gpt" 
                className="cyber-button text-center"
                target="_blank" 
                rel="noopener noreferrer"
              >
                USE GENOME GPT NOW
              </a>
              
              <a 
                href="#features" 
                className="cyber-button-alt text-center"
              >
                EXPLORE FEATURES
              </a>
            </div>
          </div>
          
          <div className="flex-1 relative max-w-md w-full h-[400px] glass-panel overflow-hidden neon-border">
            <img 
              src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-conceptual-image-of-a-dna-double-helix-with-.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true" 
              alt="DNA Double Helix" 
              className="object-cover w-full h-full object-center transform transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg-darker to-transparent opacity-40"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-3 py-2 text-xs text-gray-400 flex items-center gap-1">
              <AlertTriangle className="h-3 w-3 text-cyber-neon-yellow" />
              <span>For informational and research purposes only. Results may vary and should be verified by qualified professionals.</span>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: LucideDna, title: "Genome Analysis", desc: "Detailed analysis of genetic sequences" },
            { icon: LucideBrain, title: "AI-Powered Insights", desc: "Advanced AI interpretation of genetic data" },
            { icon: LucideFlaskConical, title: "Scientific Discoveries", desc: "Identify patterns for research breakthroughs" },
            { icon: LucideSearch, title: "Cannabis Genetics", desc: "Specialized insights into cannabis genomics" },
          ].map((item, index) => (
            <div key={index} className="glass-card p-6 transition-all duration-300 hover:border-cyber-neon-blue group">
              <div className="mb-4 bg-cyber-neon-blue/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-cyber-neon-blue/20 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-cyber-neon-blue" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
