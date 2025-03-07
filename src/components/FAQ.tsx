
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-cyber-neon-blue" />
          ) : (
            <ChevronDown className="w-5 h-5 text-cyber-neon-blue" />
          )}
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-gray-400">{answer}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is Genome GPT?",
      answer: (
        <>
          Genome GPT is an advanced AI genetics researcher designed to analyze genomic data, 
          make scientific discoveries, and provide comprehensive scientific analysis. It specializes 
          in both general genetics and cannabis genomics, offering insights through various formats 
          including documents, images, and data analysis.
        </>
      )
    },
    {
      question: "What types of data can I analyze with Genome GPT?",
      answer: (
        <>
          You can upload and analyze various types of genomic data including DNA sequences, 
          RNA expressions, protein structures, genetic markers, and other biological data formats. 
          Genome GPT supports multiple file formats and can process several data points simultaneously.
        </>
      )
    },
    {
      question: "How accurate are Genome GPT's analyses?",
      answer: (
        <>
          Genome GPT provides high-quality analyses based on cutting-edge AI technology and current 
          scientific knowledge. However, all results should be validated through traditional scientific 
          methods. The tool is designed to assist researchers rather than replace laboratory verification.
        </>
      )
    },
    {
      question: "Can I download the reports and analyses?",
      answer: (
        <>
          Yes, Genome GPT compiles data into downloadable documents. These reports can include 
          text analysis, visual representations, and organized data that you can save for future 
          reference or include in your research documentation.
        </>
      )
    },
    {
      question: "Is Genome GPT suitable for academic research?",
      answer: (
        <>
          Genome GPT is an excellent tool for academic researchers to generate hypotheses, explore genetic 
          data, and gain preliminary insights. While it provides valuable analysis, results should still 
          follow the scientific method of peer review and experimental validation before publication.
        </>
      )
    },
    {
      question: "How does the technical complexity adjustment work?",
      answer: (
        <>
          When responding to queries, Genome GPT will ask if you prefer a simple explanation or an 
          extremely technical answer. Based on your preference, it will adapt its response to match your 
          level of expertise, from beginner-friendly explanations to highly detailed technical analyses.
        </>
      )
    }
  ];

  return (
    <section id="faq" className="py-20 bg-cyber-bg-darker">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 mb-4 rounded-full border border-cyber-neon-blue bg-cyber-bg-dark">
              <p className="text-sm font-medium text-cyber-neon-blue">
                Common Questions
              </p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-cyber mb-6">
              <span className="text-white">Frequently Asked</span>
              <span className="text-cyber-neon-blue text-glow-blue"> Questions</span>
            </h2>
            
            <p className="text-gray-300">
              Find answers to common questions about Genome GPT and how it can enhance your genetic research.
            </p>
          </div>
          
          <div className="glass-panel p-6">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-400 mb-4">
              Still have questions about how Genome GPT can help with your research?
            </p>
            <a 
              href="mailto:Contact@ai-webtools.com" 
              className="cyber-button"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
