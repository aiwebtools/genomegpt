
import React, { useRef, useEffect } from 'react';
import { Upload, Brain, Download, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Ensure all steps are initially visible with a slight delay for animation
    stepsRef.current.forEach((step, i) => {
      if (step) {
        // Remove the initial opacity setting that was hiding content
        step.style.opacity = '1';
        step.classList.add('transition-all', 'duration-500');
        
        // Set a slight delay for a nice cascading effect
        setTimeout(() => {
          observer.observe(step);
        }, i * 200);
      }
    });

    return () => {
      stepsRef.current.forEach(step => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  // Add steps to the ref
  const addToStepsRef = (el: HTMLDivElement | null, index: number) => {
    stepsRef.current[index] = el;
  };

  const steps = [
    {
      icon: Upload,
      title: "Upload Your Data",
      description: "Submit your genetic sequences, genomic data files, or research questions through the interface.",
      color: "cyber-neon-blue"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Genome GPT processes your data using advanced machine learning algorithms specialized in genetic analysis.",
      color: "cyber-neon-purple"
    },
    {
      icon: Download,
      title: "Receive Insights",
      description: "Get comprehensive reports, visualizations, and actionable insights based on your genomic data.",
      color: "cyber-neon-pink"
    }
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="py-20 bg-cyber-bg-darker relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 rounded-full border border-cyber-neon-purple bg-cyber-bg-dark">
            <p className="text-sm font-medium text-cyber-neon-purple">
              Simple Process
            </p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold font-cyber mb-6">
            <span className="text-white">How Genome GPT</span>
            <span className="text-cyber-neon-purple text-glow-purple"> Works</span>
          </h2>
          
          <p className="text-gray-300">
            Unlocking genetic insights has never been easier. Follow these simple steps to harness the power of AI for your genomic research.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-cyber-neon-blue via-cyber-neon-purple to-cyber-neon-pink hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  ref={(el) => addToStepsRef(el, index)}
                  className="glass-panel p-8 relative transition-all duration-300 hover:shadow-neon-blue animate-fade-in"
                >
                  <div className={`mb-6 bg-${step.color}/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mb-12 relative z-10`}>
                    <step.icon className={`w-8 h-8 text-${step.color}`} />
                    
                    {/* Step number */}
                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-${step.color} text-white flex items-center justify-center text-sm font-bold`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-white text-center">{step.title}</h3>
                  <p className="text-gray-400 text-center">{step.description}</p>
                  
                  {/* Arrow for the steps (except the last one) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-4 top-24 z-20">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://chatgpt.com/g/g-JjuJ9E9px-genome-gpt" 
              className="cyber-button"
              target="_blank" 
              rel="noopener noreferrer"
            >
              START ANALYZING NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
