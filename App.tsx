import React from 'react';
import ThemeLayout from './components/ThemeLayout';
import ColorPaletteGenerator from './components/ColorPaletteGenerator';
import SeoArticle from './utils/SeoArticle';

const App: React.FC = () => {
  return (
    <ThemeLayout>
      <main className="relative z-10 container mx-auto px-4 py-8 md:py-16 flex flex-col items-center min-h-screen">
        <div className="w-full max-w-6xl flex flex-col gap-12">
          {/* Hero Section & Tool */}
          <div className="flex flex-col items-center">
            <ColorPaletteGenerator />
          </div>

          {/* SEO Content Section - Always rendered, handles its own collapse state */}
          <div className="w-full flex justify-center pb-12">
            <SeoArticle />
          </div>
        </div>
      </main>
    </ThemeLayout>
  );
};

export default App;