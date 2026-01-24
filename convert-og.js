import { readFileSync, writeFileSync } from 'fs';
import { Resvg } from '@resvg/resvg-js';

// Read SVG file
const svg = readFileSync('./public/og-image.svg');

// Convert to PNG
const resvg = new Resvg(svg, {
  fitTo: {
    mode: 'width',
    value: 1200,
  },
});

const pngData = resvg.render();
const pngBuffer = pngData.asPng();

// Write PNG file
writeFileSync('./public/og-image.png', pngBuffer);

console.log('✅ Converted og-image.svg to og-image.png');
