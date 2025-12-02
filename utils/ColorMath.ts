
type RGB = { r: number; g: number; b: number };
type HSL = { h: number; s: number; l: number };

function hexToRgb(hex: string): RGB | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToHex(r: number, g: number, b: number): string {
    const toHex = (c: number) => ('0' + Math.round(c).toString(16)).slice(-2);
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function rgbToHsl({ r, g, b }: RGB): HSL {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToRgb({ h, s, l }: HSL): RGB {
    s /= 100; l /= 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
    return { r: 255 * f(0), g: 255 * f(8), b: 255 * f(4) };
}

export function generatePalette(baseColorHex: string, rule: string, count: number): string[] {
    const baseRgb = hexToRgb(baseColorHex);
    if (!baseRgb) return Array(count).fill('#000000');
    const baseHsl = rgbToHsl(baseRgb);

    const paletteHsl: HSL[] = [];

    switch (rule) {
        case 'monochromatic':
            const lightnessStep = 80 / (count - 1);
            for (let i = 0; i < count; i++) {
                paletteHsl.push({
                    h: baseHsl.h,
                    s: baseHsl.s,
                    l: 10 + (i * lightnessStep)
                });
            }
            break;

        case 'analogous':
            const step = 30;
            const startHue = baseHsl.h - step * Math.floor(count / 2);
            for (let i = 0; i < count; i++) {
                paletteHsl.push({
                    h: (startHue + i * step + 360) % 360,
                    s: baseHsl.s,
                    l: baseHsl.l
                });
            }
            break;

        case 'complementary':
            paletteHsl.push(baseHsl);
            const complementHue = (baseHsl.h + 180) % 360;
            const baseVariations = count > 2 ? Math.floor((count - 1) / 2) : 0;
            const complementVariations = count > 2 ? Math.ceil((count - 1) / 2) : count - 1;

            for(let i=1; i <= baseVariations; i++) {
                 paletteHsl.push({ h: baseHsl.h, s: Math.max(0, baseHsl.s - i*15), l: Math.min(100, baseHsl.l + i*15) });
            }
            for(let i=0; i < complementVariations; i++) {
                 paletteHsl.push({ h: complementHue, s: baseHsl.s - i*10, l: baseHsl.l - i*5 });
            }
            break;

        case 'triadic':
            const firstTriad = (baseHsl.h + 120) % 360;
            const secondTriad = (baseHsl.h + 240) % 360;
            const hues = [baseHsl.h, firstTriad, secondTriad];
            for (let i = 0; i < count; i++) {
                const hueIndex = i % 3;
                const lightnessAdjust = Math.floor(i / 3) * 15 * (hueIndex % 2 === 0 ? 1 : -1);
                paletteHsl.push({
                    h: hues[hueIndex],
                    s: baseHsl.s,
                    l: Math.max(10, Math.min(90, baseHsl.l + lightnessAdjust))
                });
            }
            break;

        default:
            return Array(count).fill(baseColorHex);
    }
    
    // Ensure the original color is present in the final palette if possible
    const finalPalette = paletteHsl.map(hsl => rgbToHex(hslToRgb(hsl).r, hslToRgb(hsl).g, hslToRgb(hsl).b));
    if(!finalPalette.includes(baseColorHex.toUpperCase())) {
        finalPalette[Math.floor(count/2)] = baseColorHex.toUpperCase();
    }

    return finalPalette.slice(0, count);
}
