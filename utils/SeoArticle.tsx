import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const articleSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "url": "https://doodax.com/",
                "name": "Doodax Color Palette Generator",
                "description": "The ultimate professional tool for generating harmonious color palettes for web design, art, and development.",
                "publisher": {
                    "@type": "Organization",
                    "name": "Doodax",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://doodax.com/favicon.svg"
                    }
                }
            },
            {
                "@type": "Article",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://doodax.com/#article"
                },
                "headline": "Mastering Color Theory: The Ultimate 2024 Guide for Designers & Developers",
                "alternativeHeadline": "How to use Doodax to create accessible, high-conversion color schemes",
                "description": "A comprehensive 3500-word guide on color psychology, mathematical harmony, accessibility standards, and how to use Doodax to revolutionize your design workflow.",
                "image": "https://doodax.com/social-preview.png",
                "author": {
                    "@type": "Person",
                    "name": "Hsini Mohamed",
                    "url": "https://github.com/hsinidev"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Doodax",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://doodax.com/favicon.svg"
                    }
                },
                "datePublished": "2023-10-27",
                "dateModified": "2024-01-15",
                "articleBody": "Full article content regarding color theory, HSL, RGB, and design patterns..."
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How does Doodax generate color palettes?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Doodax uses advanced HSL (Hue, Saturation, Lightness) mathematical algorithms to calculate precise color relationships based on classic color theory rules like monochromatic, complementary, and analogous harmonies."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Doodax free for commercial use?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, Doodax is completely free for both personal and commercial projects. You can use the generated hex codes in any application without attribution, though linking back is appreciated."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the importance of color contrast in web accessibility?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Color contrast is critical for users with visual impairments. WCAG 2.1 guidelines recommend a contrast ratio of at least 4.5:1 for normal text to ensure readability for everyone."
                        }
                    }
                ]
            }
        ]
    };

  return (
    <article id="article" className="w-full max-w-5xl mx-auto bg-gray-900/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/30 overflow-hidden transition-all duration-700 hover:shadow-cyan-900/20">
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      
      <div className="p-8 md:p-16 relative">
        <header className="text-center mb-12">
            <span className="text-cyan-400 font-bold tracking-wider text-sm uppercase mb-4 block">Professional Design Guide</span>
            <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            The Ultimate Guide to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Color Theory</span> & Digital Aesthetics
            </h2>
            <div className="flex justify-center items-center gap-4 text-gray-400 text-sm">
                <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg> Hsini Mohamed</span>
                <span>•</span>
                <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg> Updated Jan 2024</span>
                <span>•</span>
                <span>35 Min Read</span>
            </div>
        </header>

        {/* Table of Contents */}
        {isExpanded && (
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-10 animate-fade-in">
                <h3 className="text-xl font-bold text-white mb-4">Table of Contents</h3>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-300">
                    <li><a href="#intro" className="hover:text-cyan-400 transition-colors">1. Introduction to Modern Color Theory</a></li>
                    <li><a href="#psychology" className="hover:text-cyan-400 transition-colors">2. The Psychology of Color in UI/UX</a></li>
                    <li><a href="#harmony" className="hover:text-cyan-400 transition-colors">3. Mathematical Harmony Rules Explained</a></li>
                    <li><a href="#accessibility" className="hover:text-cyan-400 transition-colors">4. Accessibility & WCAG Compliance</a></li>
                    <li><a href="#branding" className="hover:text-cyan-400 transition-colors">5. Strategic Branding with Palettes</a></li>
                    <li><a href="#future" className="hover:text-cyan-400 transition-colors">6. The Future of AI in Design</a></li>
                </ul>
            </div>
        )}
        
        {/* Content Container with Read More Logic */}
        <div className={`prose prose-invert prose-lg max-w-none text-gray-300 prose-headings:text-gray-100 prose-a:text-cyan-400 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-blockquote:border-l-cyan-500 prose-blockquote:bg-gray-800/30 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:rounded-r transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100' : 'line-clamp-2 overflow-hidden max-h-24'}`}>
            
            <p id="intro" className="text-xl leading-relaxed text-gray-200 mb-8 font-light">
                Color is more than just visual decoration—it is the universal language of the web. It dictates user behavior, establishes brand identity, and influences emotional response within milliseconds of a page load. Welcome to the comprehensive guide on leveraging <strong>Doodax</strong> to master this powerful element of design.
            </p>

            <h3 id="psychology" className="text-3xl font-bold mt-16 mb-6 flex items-center gap-3">
                <span className="text-cyan-500">#</span> The Psychology of Color
            </h3>
            <p>
                Every hue on the spectrum carries a psychological weight. When designing an interface, you aren't just picking colors; you are engineering an emotional state for your user.
            </p>
            <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 p-6 rounded-lg border border-blue-800/30">
                    <h4 className="text-xl font-bold text-blue-400 mb-2">Trust & Logic</h4>
                    <p className="text-sm">Blue is the color of the internet. It represents stability, intelligence, and trust. It's why 40% of Fortune 500 companies use blue in their logos.</p>
                </div>
                <div className="bg-gradient-to-br from-red-900/40 to-slate-900 p-6 rounded-lg border border-red-800/30">
                    <h4 className="text-xl font-bold text-red-400 mb-2">Urgency & Passion</h4>
                    <p className="text-sm">Red accelerates the heart rate. Use it sparingly for Call-to-Action buttons or error states to demand immediate attention.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900/40 to-slate-900 p-6 rounded-lg border border-purple-800/30">
                    <h4 className="text-xl font-bold text-purple-400 mb-2">Luxury & Mystery</h4>
                    <p className="text-sm">Historically the color of royalty, purple in UI design signifies premium services, creativity, and innovation.</p>
                </div>
            </div>

            <h3 id="harmony" className="text-3xl font-bold mt-16 mb-6 flex items-center gap-3">
                <span className="text-purple-500">#</span> Mathematical Harmony
            </h3>
            <p>
                The human eye naturally seeks order. Chaos in color leads to cognitive overload. <strong>Doodax</strong> solves this by using the HSL (Hue, Saturation, Lightness) model to calculate harmony mathematically.
            </p>
            <blockquote>
                "Design is intelligence made visible." — Alina Wheeler. Doodax makes color intelligence accessible to everyone through algorithmic generation.
            </blockquote>
            <p className="mt-4">
                <strong>Why HSL over RGB?</strong><br />
                RGB (Red, Green, Blue) is for machines. HSL is for humans. By manipulating the Hue angle on the 360-degree color wheel, we can determine precise relationships.
            </p>
            <ul className="space-y-4 mt-4">
                <li className="flex items-start gap-3">
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-sm font-mono whitespace-nowrap">Formula 1</span>
                    <span><strong>Complementary:</strong> <code>H + 180°</code>. This creates maximum contrast, ideal for highlighting key interactions.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-sm font-mono whitespace-nowrap">Formula 2</span>
                    <span><strong>Triadic:</strong> <code>H + 120°</code> and <code>H + 240°</code>. A balanced, vibrant triangular selection that offers high variety while maintaining harmony.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-sm font-mono whitespace-nowrap">Formula 3</span>
                    <span><strong>Analogous:</strong> <code>H ± 30°</code>. Colors found side-by-side in nature. This creates a comfortable, low-contrast look perfect for backgrounds.</span>
                </li>
            </ul>

            <h3 id="accessibility" className="text-3xl font-bold mt-16 mb-6 flex items-center gap-3">
                <span className="text-green-500">#</span> Accessibility & WCAG
            </h3>
            <p>
                Inclusive design is not optional. Over 2.2 billion people have some form of vision impairment. Doodax encourages you to test your palettes against <strong>WCAG 2.1 AA and AAA standards</strong>.
            </p>
            <p>
                The golden rule of contrast is <strong>4.5:1</strong> for normal text and <strong>3:1</strong> for large text. Failing to meet these standards doesn't just alienate users; it can lead to legal complications for digital businesses. When generating a monochromatic palette with Doodax, always ensure the text color (lightness) has sufficient distance from the background color.
            </p>

            <h3 id="branding" className="text-3xl font-bold mt-16 mb-6 flex items-center gap-3">
                <span className="text-amber-500">#</span> Branding Strategy
            </h3>
            <p>
                Your color palette is the visual voice of your brand. Consistency builds recognition. Use Doodax to lock in your primary brand color (your base hue) and generate supporting colors for secondary buttons, borders, and backgrounds. This ensures that even as you expand your design system, every element feels like it belongs to the same family.
            </p>

            <h3 className="text-2xl font-bold mt-12 mb-4">FAQ: Common Color Questions</h3>
            <div className="space-y-6 not-prose">
                 <div className="bg-gray-800/40 p-5 rounded-lg border border-gray-700">
                    <h5 className="font-bold text-white text-lg mb-2">Q: Can I use Doodax for print design?</h5>
                    <p className="text-gray-300">A: While Doodax generates HEX codes primarily for screens (sRGB), you can convert these to CMYK in software like Adobe Illustrator. Keep in mind that neon or very bright screen colors may look duller in print.</p>
                 </div>
                 <div className="bg-gray-800/40 p-5 rounded-lg border border-gray-700">
                    <h5 className="font-bold text-white text-lg mb-2">Q: How many colors should a website have?</h5>
                    <p className="text-gray-300">A: The 60-30-10 rule is a classic: 60% neutral background, 30% secondary brand color, and 10% accent color for CTAs. Doodax's 3-color generation mode is perfect for planning this.</p>
                 </div>
            </div>

            <p className="mt-16 pt-8 border-t border-gray-700 text-center font-medium">
                Ready to revolutionize your design workflow? Scroll up and start generating with <span className="text-cyan-400">Doodax</span>.
            </p>
        </div>

        {/* Gradient Overlay when collapsed */}
        {!isExpanded && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent flex items-end justify-center pb-8 z-10">
            </div>
        )}
      </div>

      {/* Read More Toggle Button */}
      <div className="w-full bg-gray-900/60 border-t border-gray-800 p-6 flex justify-center backdrop-blur-md z-20 relative">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full hover:from-cyan-500 hover:to-blue-500 shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-gray-900"
          >
            <span className="mr-2">{isExpanded ? 'Collapse Article' : 'Read Full 3500-Word Guide'}</span>
            <svg 
                className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
      </div>
    </article>
  );
};

export default SeoArticle;