
import React, { useRef, useEffect } from 'react';
import { 
  Image, FileText, BarChart3, Headphones, 
  Code, Search, FileImage, Lock
} from 'lucide-react';

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          titleObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const featureObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          featureObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (titleRef.current) {
      titleRef.current.classList.add('opacity-0');
      titleObserver.observe(titleRef.current);
    }

    if (featuresRef.current) {
      const features = featuresRef.current.children;
      Array.from(features).forEach((feature, i) => {
        (feature as HTMLElement).style.opacity = '0';
        (feature as HTMLElement).style.transform = 'translateX(-50px)';
        setTimeout(() => {
          featureObserver.observe(feature);
        }, i * 100);
      });
    }

    return () => {
      if (titleRef.current) titleObserver.unobserve(titleRef.current);
      if (featuresRef.current) {
        Array.from(featuresRef.current.children).forEach(feature => {
          featureObserver.unobserve(feature);
        });
      }
    };
  }, []);

  const features = [
    {
      icon: Image,
      title: "Image Generation",
      description: "Create visual representations of genetic structures and sequences to better understand complex biological concepts."
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Process and analyze complex genomic datasets, identifying patterns and correlations that may not be immediately apparent."
    },
    {
      icon: FileImage,
      title: "Image Analysis",
      description: "Extract information from microscopy images, gel electrophoresis results, and other visual genetic data."
    },
    {
      icon: Headphones,
      title: "Voice Features",
      description: "Interact with genomic data through voice commands and receive audio explanations of complex genetic concepts."
    },
    {
      icon: FileText,
      title: "Document Creation",
      description: "Generate comprehensive reports and documentation of your genetic analysis with downloadable formats."
    },
    {
      icon: Code,
      title: "Coding Assistance",
      description: "Get help with bioinformatics code and algorithms for processing genetic data more efficiently."
    },
    {
      icon: Search,
      title: "Web Searching",
      description: "Find relevant research papers, genetic databases, and other online resources to support your genomic investigations."
    },
    {
      icon: Lock,
      title: "Uncensored Analysis",
      description: "Access limitless analytical capabilities with no restrictions on the types of genetic questions you can explore."
    }
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="cyber-dot-grid absolute inset-0 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={titleRef} className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 rounded-full border border-cyber-neon-pink bg-cyber-bg-darker">
            <p className="text-sm font-medium text-cyber-neon-pink">
              Advanced Capabilities
            </p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold font-cyber mb-6">
            <span className="text-white">Powerful</span>
            <span className="text-cyber-neon-pink text-glow-pink"> Genomic Tools</span>
          </h2>
          
          <p className="text-gray-300">
            Genome GPT combines cutting-edge AI technology with deep genetic expertise to provide a comprehensive suite of tools for genomic research and analysis.
          </p>
        </div>
        
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 transition-all duration-300 hover:border-cyber-neon-pink group"
            >
              <div className="mb-4 bg-cyber-neon-pink/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-cyber-neon-pink/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-cyber-neon-pink" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
