import React, { useState, useCallback, useEffect } from 'react';
import { generatePalette } from '../utils/ColorMath';

type Rule = 'monochromatic' | 'analogous' | 'complementary' | 'triadic';

const ColorPaletteGenerator: React.FC = () => {
    const [baseColor, setBaseColor] = useState<string>('#3b82f6');
    const [rule, setRule] = useState<Rule>('monochromatic');
    const [count, setCount] = useState<number>(5);
    const [palette, setPalette] = useState<string[]>([]);
    const [copiedColor, setCopiedColor] = useState<string | null>(null);

    const handleGenerate = useCallback(() => {
        const newPalette = generatePalette(baseColor, rule, count);
        setPalette(newPalette);
    }, [baseColor, rule, count]);
    
    useEffect(() => {
        handleGenerate();
    }, [handleGenerate]);

    const handleCopy = (color: string) => {
        navigator.clipboard.writeText(color);
        setCopiedColor(color);
        setTimeout(() => setCopiedColor(null), 2000);
    };
    
    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBaseColor(e.target.value.toUpperCase());
    }

    return (
        <section id="palette-tool" className="flex flex-col items-center">
            <div className="w-full max-w-4xl bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-xl shadow-2xl p-6 md:p-8 border border-gray-700">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Create Your Perfect Color Palette
                    </h2>
                    <p className="text-gray-300">Instantly generate beautiful color schemes from a single color.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end mb-6">
                    {/* Color Picker */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="baseColor" className="text-sm font-medium text-gray-300">Base Color</label>
                        <div className="flex items-center gap-3 bg-gray-700 rounded-md border border-gray-600 focus-within:ring-2 focus-within:ring-cyan-500 transition-all">
                           <div className="relative w-12 h-10">
                                <input 
                                    type="color" 
                                    id="color-picker"
                                    value={baseColor}
                                    onChange={handleColorChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                                <div className="w-full h-full rounded-l-md border-r border-gray-600" style={{ backgroundColor: baseColor }}></div>
                           </div>
                           <input 
                                type="text"
                                id="baseColor"
                                value={baseColor}
                                onChange={handleColorChange}
                                className="w-full bg-transparent text-white font-mono focus:outline-none pr-3"
                                maxLength={7}
                            />
                        </div>
                    </div>
                    
                    {/* Rule Selector */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="rule" className="text-sm font-medium text-gray-300">Harmony Rule</label>
                        <select
                            id="rule"
                            value={rule}
                            onChange={(e) => setRule(e.target.value as Rule)}
                            className="bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                        >
                            <option value="monochromatic">Monochromatic</option>
                            <option value="analogous">Analogous</option>
                            <option value="complementary">Complementary</option>
                            <option value="triadic">Triadic</option>
                        </select>
                    </div>

                    {/* Color Count */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="count" className="text-sm font-medium text-gray-300">Number of Colors</label>
                        <select
                            id="count"
                            value={count}
                            onChange={(e) => setCount(parseInt(e.target.value))}
                            className="bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                        >
                            <option value="3">3</option>
                            <option value="5">5</option>
                            <option value="7">7</option>
                        </select>
                    </div>

                    {/* Generate Button */}
                    <button
                        onClick={handleGenerate}
                        className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-0.5"
                    >
                        Generate Palette
                    </button>
                </div>
                
                <div className="mt-8">
                     <h3 className="text-xl font-semibold text-center text-white mb-4">Your Generated Palette</h3>
                    {/* Palette Display */}
                    <div className="flex flex-col md:flex-row rounded-lg overflow-hidden h-[300px] md:h-80 shadow-inner bg-gray-900/50">
                        {palette.map((color, index) => (
                            <div
                                key={`${color}-${index}`}
                                className="flex-1 flex flex-col justify-end items-center p-4 text-white transition-all duration-500 ease-in-out animate-fade-in"
                                style={{ 
                                  backgroundColor: color,
                                  animation: `fadeIn 0.5s ${index * 0.1}s ease forwards`
                                }}
                            >
                                <button
                                    onClick={() => handleCopy(color)}
                                    className="font-mono text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full backdrop-blur-sm hover:bg-opacity-70 transition-all"
                                >
                                    {copiedColor === color ? 'Copied!' : color}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fade-in {
                opacity: 0;
              }
            `}</style>
        </section>
    );
};

export default ColorPaletteGenerator;