import React, { useState } from 'react';

interface ModalProps {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex justify-center items-center p-4 transition-all duration-300">
      <div className="glass-panel rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-300 border border-gray-700/50">
        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-gray-900/40 rounded-t-2xl sticky top-0 backdrop-blur-md z-10">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <div className="p-6 md:p-10 overflow-y-auto text-gray-300 leading-relaxed custom-scrollbar text-base md:text-lg">
          {content}
        </div>
        <div className="p-6 border-t border-white/10 flex justify-end bg-gray-900/40 rounded-b-2xl">
            <button onClick={onClose} className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg transition-all shadow-lg font-semibold">Close</button>
        </div>
      </div>
    </div>
  );
};


const ThemeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const policyStyle = "space-y-6 text-sm md:text-base";
  const headingStyle = "text-xl font-bold text-white mt-6 mb-2 flex items-center gap-2";

  const modalContent: { [key: string]: { title: string, content: React.ReactNode } } = {
    'About': { 
        title: 'About Doodax', 
        content: (
            <div className="space-y-6">
                <p className="text-lg"><strong>Doodax</strong> is an advanced, AI-powered color palette generator designed for professional developers, designers, and digital artists. We combine aesthetic theory with algorithmic precision to create harmonious color schemes.</p>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <h3 className="text-cyan-400 font-bold mb-2">For Designers</h3>
                        <p>Discover new color combinations, test accessibility contrast on the fly, and export palettes for Figma or Adobe XD.</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <h3 className="text-purple-400 font-bold mb-2">For Developers</h3>
                        <p>Get ready-to-use CSS, Tailwind classes, and JSON data. Built with React and TypeScript for performance.</p>
                    </div>
                </div>
            </div>
        ) 
    },
    'Contact': { 
        title: 'Contact Information', 
        content: (
            <div className="space-y-6">
                <p>We are dedicated to providing the best user experience. If you have questions, suggestions, or require support, please reach out.</p>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 shadow-inner">
                    <div className="grid gap-6">
                        <div className="flex items-center gap-4">
                             <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                             </div>
                             <div>
                                 <p className="text-sm text-gray-400">Email Support</p>
                                 <a href="mailto:hsini.web@gmail.com" className="text-lg text-white font-medium hover:text-cyan-400 transition-colors">hsini.web@gmail.com</a>
                             </div>
                        </div>
                        <div className="flex items-center gap-4">
                             <div className="p-3 bg-purple-500/10 rounded-full text-purple-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                             </div>
                             <div>
                                 <p className="text-sm text-gray-400">Official Website</p>
                                 <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-lg text-white font-medium hover:text-purple-400 transition-colors">doodax.com</a>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    },
    'Guide': { 
        title: 'How to Use Doodax', 
        content: (
            <div className="space-y-6">
                <div className="prose prose-invert max-w-none">
                    <p>Doodax is designed to be intuitive. Follow these steps to generate the perfect palette:</p>
                    <ol>
                        <li><strong>Input Base Color:</strong> Use the color picker or type a Hex code (e.g., #FF5733).</li>
                        <li><strong>Select Harmony Rule:</strong>
                            <ul>
                                <li><em>Monochromatic:</em> Variations in lightness/darkness.</li>
                                <li><em>Analogous:</em> Neighbors on the color wheel.</li>
                                <li><em>Complementary:</em> High contrast opposites.</li>
                                <li><em>Triadic:</em> Balanced triangular selection.</li>
                            </ul>
                        </li>
                        <li><strong>Adjust Count:</strong> Select 3, 5, or 7 colors for your palette.</li>
                        <li><strong>Export:</strong> Click on any color card to copy the Hex code to your clipboard.</li>
                    </ol>
                </div>
            </div>
        ) 
    },
    'Privacy Policy': { 
        title: 'Privacy Policy', 
        content: (
            <div className={policyStyle}>
                 <div className="bg-amber-900/30 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg">
                    <h4 className="text-amber-400 font-bold flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                        IMPORTANT NOTICE REGARDING DATA
                    </h4>
                    <p className="text-amber-100 mt-2">Doodax.com is committed to strict compliance with international data protection regulations, including GDPR and CCPA. We prioritize your anonymity.</p>
                </div>

                <p>At Doodax, accessible from https://doodax.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Doodax and how we use it.</p>

                <h4 className={headingStyle}>Log Files</h4>
                <p>Doodax follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.</p>

                <h4 className={headingStyle}>Cookies and Web Beacons</h4>
                <p>Like any other website, Doodax uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

                <h4 className={headingStyle}>Google DoubleClick DART Cookie</h4>
                <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" className="text-cyan-400 underline">https://policies.google.com/technologies/ads</a></p>

                <h4 className={headingStyle}>GDPR Data Protection Rights</h4>
                <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: The right to access, The right to rectification, The right to erasure, The right to restrict processing, The right to object to processing, and The right to data portability.</p>

                <h4 className={headingStyle}>CCPA Privacy Rights (Do Not Sell My Personal Information)</h4>
                <p>Under the CCPA, among other rights, California consumers have the right to request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>
            </div>
        ) 
    },
    'Terms of Service': { 
        title: 'Terms of Service', 
        content: (
            <div className={policyStyle}>
                <div className="bg-blue-900/30 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                    <p className="text-blue-100"><strong>Effective Date:</strong> October 2023</p>
                    <p className="text-blue-100">By using Doodax.com, you agree to these terms completely. Please read carefully.</p>
                </div>

                <h4 className={headingStyle}>1. Terms</h4>
                <p>By accessing this Website, accessible from https://doodax.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws.</p>

                <h4 className={headingStyle}>2. Use License</h4>
                <p>Permission is granted to temporarily download one copy of the materials on Doodax's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>modify or copy the materials;</li>
                    <li>use the materials for any commercial purpose or for any public display;</li>
                    <li>attempt to reverse engineer any software contained on Doodax's Website;</li>
                    <li>remove any copyright or other proprietary notations from the materials;</li>
                </ul>

                <h4 className={headingStyle}>3. Disclaimer</h4>
                <p>All the materials on Doodax's Website are provided "as is". Doodax makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Doodax does not make any representations concerning the accuracy or likely reliability of the use of the materials on its Website or otherwise relating to such materials or on any sites linked to this Website.</p>
            </div>
        ) 
    },
    'DMCA': { 
        title: 'DMCA Copyright Policy', 
        content: (
            <div className="space-y-6">
                <p>Doodax respects the intellectual property rights of others. We comply with the Digital Millennium Copyright Act (DMCA).</p>
                <div className="p-4 bg-gray-800 rounded-lg">
                    <h4 className="text-white font-bold mb-2">Reporting Infringement</h4>
                    <p className="mb-4">If you believe that your work has been copied in a way that constitutes copyright infringement, please provide our Copyright Agent the following information:</p>
                    <ul className="list-disc pl-5 text-gray-400 space-y-1">
                        <li>An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest.</li>
                        <li>A description of the copyrighted work that you claim has been infringed.</li>
                        <li>A description of where the material that you claim is infringing is located on the site.</li>
                        <li>Your address, telephone number, and email address.</li>
                    </ul>
                </div>
                <p>Contact Email for DMCA notices: <a href="mailto:hsini.web@gmail.com" className="text-cyan-400 font-bold">hsini.web@gmail.com</a></p>
            </div>
        ) 
    },
  };

  const navLinks = ['About', 'Contact', 'Guide', 'Privacy Policy', 'Terms of Service', 'DMCA'];

  return (
    <div className="galaxy-background min-h-screen text-white font-sans selection:bg-cyan-500 selection:text-black">
      <div className="nebula-layer"></div>
      <div className="stars"></div>
      <div className="stars-2"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="bg-black/20 backdrop-blur-md border-b border-white/5 sticky top-0 z-40 transition-all duration-300">
          <nav className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 group cursor-pointer select-none" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_15px_rgba(34,211,238,0.5)] flex items-center justify-center font-bold text-xl text-white transform group-hover:rotate-12 transition-transform duration-300">
                    D
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Doodax<span className="text-cyan-400/80 font-light">.com</span>
                </h1>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks.map(link => (
                <button 
                  key={link} 
                  onClick={() => setActiveModal(link)} 
                  className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-all hover:scale-105 active:scale-95 py-1 px-2 rounded hover:bg-white/5"
                >
                  {link}
                </button>
              ))}
            </div>
          </nav>
        </header>
        
        {children}

        <footer className="bg-black/60 backdrop-blur-lg border-t border-white/10 mt-auto relative z-40">
          <div className="container mx-auto px-6 py-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-gray-500 text-sm flex flex-col items-center md:items-start gap-1">
                    <span>&copy; {new Date().getFullYear()} Doodax. All rights reserved.</span>
                    <span className="text-xs text-gray-600">Designed for creators.</span>
                </div>
                
                <div className="flex flex-col items-center md:items-end gap-3">
                    <p className="text-sm font-medium text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-amber-500/50 transition-colors">
                        Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors font-bold tracking-wide ml-1">HSINI MOHAMED</a>
                    </p>
                    <div className="flex items-center gap-6 text-xs text-gray-500">
                         <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">doodax.com</a>
                         <span className="text-gray-700">•</span>
                         <a href="mailto:hsini.web@gmail.com" className="hover:text-cyan-400 transition-colors">hsini.web@gmail.com</a>
                    </div>
                </div>
            </div>
          </div>
        </footer>

        {activeModal && modalContent[activeModal] && (
          <Modal 
            title={modalContent[activeModal].title}
            content={modalContent[activeModal].content}
            onClose={() => setActiveModal(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ThemeLayout;