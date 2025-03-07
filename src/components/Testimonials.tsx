
import React, { useRef, useEffect } from 'react';
import { Star, MessageSquare, UserCheck, Brain, FlaskConical } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (testimonialsRef.current) {
            const testimonials = testimonialsRef.current.children;
            Array.from(testimonials).forEach((testimonial, i) => {
              // Remove opacity-0 class immediately to ensure testimonials are visible even without animation
              (testimonial as HTMLElement).classList.remove('opacity-0');
              setTimeout(() => {
                (testimonial as HTMLElement).classList.add('animate-fade-in');
              }, i * 150);
            });
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Ensure testimonials are visible even if intersection observer doesn't trigger
    setTimeout(() => {
      if (testimonialsRef.current) {
        const testimonials = testimonialsRef.current.children;
        Array.from(testimonials).forEach((testimonial) => {
          (testimonial as HTMLElement).classList.remove('opacity-0');
        });
      }
    }, 500);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Genetics Researcher, Stanford University",
      quote: "Genome GPT has revolutionized my research workflow. The deep analysis capabilities and document generation features have saved me countless hours of manual work.",
      stars: 5,
      icon: FlaskConical
    },
    {
      name: "Prof. Michael Chen",
      role: "Bioinformatics Lead, MIT",
      quote: "The accuracy of Genome GPT's analysis is impressive. It identified patterns in our cannabis genomics study that we had overlooked with traditional methods.",
      stars: 5,
      icon: Brain
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Pharmaceutical Research, Johnson & Johnson",
      quote: "The ability to toggle between simple explanations and deeply technical analyses makes Genome GPT invaluable for cross-functional team communication.",
      stars: 4,
      icon: MessageSquare
    },
    {
      name: "James Wilson",
      role: "PhD Candidate, UC Berkeley",
      quote: "As a student researcher, Genome GPT has been an incredible educational tool. It helps me understand complex genetic concepts and accelerates my learning process.",
      stars: 5,
      icon: UserCheck
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="testimonials"
      className="py-20 relative overflow-hidden bg-cyber-bg-darker border-t border-b border-cyber-neon-blue/20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-neon-blue/5 to-cyber-neon-purple/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 rounded-full border border-cyber-neon-green bg-cyber-bg-darker">
            <p className="text-sm font-medium text-cyber-neon-green">
              User Experiences
            </p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold font-cyber mb-6">
            <span className="text-white">What Researchers</span>
            <span className="text-cyber-neon-green"> Are Saying</span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover how Genome GPT is transforming genetic research and analysis for scientists and researchers around the world.
          </p>
        </div>
        
        <div 
          ref={testimonialsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
        >
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;
            return (
              <div 
                key={index} 
                className="glass-card p-8 transition-all duration-300 hover:border-cyber-neon-green group hover:bg-white/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.stars ? 'text-cyber-neon-yellow fill-cyber-neon-yellow' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                  <Icon className="w-8 h-8 text-cyber-neon-blue group-hover:text-cyber-neon-green transition-colors" />
                </div>
                
                <p className="text-gray-300 italic mb-6 text-lg">"{testimonial.quote}"</p>
                
                <div className="border-t border-white/10 pt-4">
                  <h4 className="text-white font-bold font-cyber">{testimonial.name}</h4>
                  <p className="text-cyber-neon-blue text-sm">{testimonial.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
