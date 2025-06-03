
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
      title: "AI Image Generation",
      description: "Generate visual representations of genetic structures using advanced AI web tools for better understanding of complex biological concepts."
    },
    {
      icon: BarChart3,
      title: "Free Data Analysis",
      description: "Process complex genomic datasets with our free AI tools, identifying patterns and correlations in genetic research."
    },
    {
      icon: FileImage,
      title: "AI Image Analysis",
      description: "Extract genetic information from microscopy images and gel electrophoresis results using artificial intelligence."
    },
    {
      icon: Headphones,
      title: "Voice-Enabled AI",
      description: "Interact with genomic data through voice commands using our innovative AI web tools platform."
    },
    {
      icon: FileText,
      title: "AI Document Creation",
      description: "Generate comprehensive genetic analysis reports with our free AI tools for scientific documentation."
    },
    {
      icon: Code,
      title: "Bioinformatics AI",
      description: "Get AI-powered coding assistance for bioinformatics algorithms and genetic data processing workflows."
    },
    {
      icon: Search,
      title: "Research AI Tools",
      description: "Access relevant genetic databases and research papers using our intelligent AI web tools search capabilities."
    },
    {
      icon: Lock,
      title: "Unrestricted AI Analysis",
      description: "Unlimited analytical capabilities with no restrictions - the most comprehensive free AI tools for genetics."
    }
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="cyber-dot-grid absolute inset-0 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={titleRef} className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 rounded-full border border-cyber-neon-pink bg-cyber-bg-darker">
            <p className="text-sm font-medium text-cyber-neon-pink">
              Advanced AI Web Tools Capabilities
            </p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold font-cyber mb-6">
            <span className="text-white">Free AI Tools for</span>
            <span className="text-cyber-neon-pink text-glow-pink"> Genomic Research</span>
          </h2>
          
          <p className="text-gray-300">
            Our comprehensive suite of free AI web tools combines cutting-edge artificial intelligence with deep genetic expertise, 
            providing researchers and scientists with the most advanced AI tools for genomic analysis and scientific discovery.
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
