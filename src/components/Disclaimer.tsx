
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-3 gap-2">
              <AlertTriangle className="h-5 w-5 text-cyber-neon-yellow" />
              <h2 className="text-2xl font-bold font-cyber text-white">
                Legal <span className="text-cyber-neon-yellow">Disclaimer</span>
              </h2>
            </div>
            
            <p className="text-gray-300 text-sm">
              Important information about the use of Genome GPT and limitations of our service.
            </p>
          </div>
          
          <div className="glass-panel p-6 space-y-4 text-sm">
            <div className="border-l-4 border-cyber-neon-yellow p-3 bg-black/30 mb-4">
              <h3 className="text-base font-bold text-white mb-1">Experimental Technology Notice</h3>
              <p className="text-gray-300 text-sm">
                <strong>For informational and research purposes only.</strong> Genome GPT is experimental in nature. 
                Always verify findings, as AI may generate incorrect answers and experience hallucinations 
                occasionally. This technology is powered by GPT-4o and shares its limitations.
              </p>
            </div>
            
            <div>
              <h3 className="text-base font-bold text-white mb-1">For Research Purposes Only</h3>
              <p className="text-gray-400 text-sm">
                Genome GPT is provided for research and educational purposes only. The analyses, insights, and information 
                provided by the AI should not be used for clinical diagnosis, patient treatment decisions, or as a substitute 
                for professional medical advice.
              </p>
            </div>
            
            <div>
              <h3 className="text-base font-bold text-white mb-1">No Medical Advice</h3>
              <p className="text-gray-400 text-sm">
                The information provided by Genome GPT does not constitute medical advice. Users should consult with qualified 
                healthcare professionals regarding any medical conditions, diagnoses, or treatment options.
              </p>
            </div>
            
            <div>
              <h3 className="text-base font-bold text-white mb-1">Accuracy Limitations</h3>
              <p className="text-gray-400 text-sm">
                While we strive for accuracy, Genome GPT operates based on machine learning algorithms and existing scientific 
                knowledge. Results should be validated through traditional scientific methods before being used in any critical 
                research or publications.
              </p>
            </div>
            
            <div>
              <h3 className="text-base font-bold text-white mb-1">Data Privacy</h3>
              <p className="text-gray-400 text-sm">
                Users are responsible for ensuring they have appropriate rights to upload and analyze any genomic data submitted 
                to the service. We recommend not uploading sensitive personal genetic information or protected health information.
                For more information, please review our <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-cyber-neon-blue hover:underline">Privacy Policy</a>.
              </p>
            </div>
            
            <div>
              <h3 className="text-base font-bold text-white mb-1">No Warranty</h3>
              <p className="text-gray-400 text-sm">
                Genome GPT is provided "as is" without warranties of any kind, either express or implied, including but not limited 
                to warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </div>
            
            <div>
              <h3 className="text-base font-bold text-white mb-1">Limitation of Liability</h3>
              <p className="text-gray-400 text-sm">
                AI Web Tools LLC, its affiliates, partners, and contributors shall not be liable for any direct, indirect, incidental, 
                special, exemplary, or consequential damages resulting from the use or inability to use Genome GPT or related services.
              </p>
            </div>
            
            <div>
              <h3 className="text-base font-bold text-white mb-1">Terms of Service</h3>
              <p className="text-gray-400 text-sm">
                By using Genome GPT, you agree to abide by our 
                <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="text-cyber-neon-blue hover:underline"> Terms of Service</a>. 
                Please review them carefully before using the service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
