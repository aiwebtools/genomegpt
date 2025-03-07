
import React, { useEffect, useRef } from 'react';

const DNAAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const numberOfParticles = 80;
    const strand = document.createElement('div');
    strand.className = 'dna-strand';
    
    // Create DNA particles and connectors
    for (let i = 0; i < numberOfParticles; i++) {
      const angle = (i / numberOfParticles) * Math.PI * 4;
      const x = 50 + Math.sin(angle) * 20;
      const y = (i / numberOfParticles) * 100;
      const z = Math.cos(angle) * 20;
      
      // Create the particle
      const particle = document.createElement('div');
      particle.className = 'dna-particle';
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.transform = `translateZ(${z}px)`;
      strand.appendChild(particle);
      
      // Create the connector (except for the last particle)
      if (i < numberOfParticles - 1) {
        const nextAngle = ((i + 1) / numberOfParticles) * Math.PI * 4;
        const nextX = 50 + Math.sin(nextAngle) * 20;
        const nextY = ((i + 1) / numberOfParticles) * 100;
        
        const connectorLength = Math.sqrt(Math.pow(nextX - x, 2) + Math.pow(nextY - y, 2));
        const connectorAngle = Math.atan2(nextY - y, nextX - x) * (180 / Math.PI);
        
        const connector = document.createElement('div');
        connector.className = 'dna-connector';
        connector.style.left = `${x}%`;
        connector.style.top = `${y}%`;
        connector.style.width = `${connectorLength}%`;
        connector.style.transform = `rotate(${connectorAngle}deg)`;
        strand.appendChild(connector);
      }
    }
    
    const helix = document.createElement('div');
    helix.className = 'dna-helix';
    helix.appendChild(strand);
    
    container.appendChild(helix);
    
    return () => {
      if (container && helix) {
        container.removeChild(helix);
      }
    };
  }, []);
  
  return <div ref={containerRef} className="dna-bg"></div>;
};

export default DNAAnimation;
