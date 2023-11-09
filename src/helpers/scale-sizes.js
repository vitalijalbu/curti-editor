import convert from 'convert-units';

// Scale DIV HTML
export const scaleSizeDIV = (containerElement) => {
  if (typeof window === 'undefined') {
    // Skip if running on the server (during SSR)
    return { width: '100%', height: '100%' }; // or return an appropriate default size
  }

  if (!containerElement || !(containerElement instanceof Element)) {
    console.error('Invalid container element provided');
    return { width: '100%', height: '100%' }; // or return an appropriate default size
  }

  const containerWidth = containerElement.offsetWidth;
  const containerHeight = containerElement.offsetHeight;

  // A3 dimensions in millimeters
  const a3WidthMm = 420;
  const a3HeightMm = 297;

  // Convert millimeters to pixels based on assumed pixel density (e.g., 96 pixels per inch)
  const pixelsPerInch = 96;
  const mmToInch = 1 / 25.4;
  const a3WidthPixels = a3WidthMm * mmToInch * pixelsPerInch;
  const a3HeightPixels = a3HeightMm * mmToInch * pixelsPerInch;

  // Calculate the scale factors based on the container dimensions and A3 dimensions in pixels
  const scaleWidth = containerWidth / a3WidthPixels;
  const scaleHeight = containerHeight / a3HeightPixels;

  // Use the minimum scale factor to ensure that the content fits within the container
  const scale = Math.min(scaleWidth, scaleHeight);

  // Calculate scaled dimensions in pixels
  const scaledWidthPixels = a3WidthPixels * scale;
  const scaledHeightPixels = a3HeightPixels * scale;

  return {
    width: `${scaledWidthPixels}px`,
    height: `${scaledHeightPixels}px`,
  };
};



// Scale font
export const scaleFontSize = (cm) => {
  if (typeof window === 'undefined') {
    // Skip if running on the server (during SSR)
    return `${cm}cm`; // or return an appropriate default size
  }

  // Assuming standard pixel density of 96 pixels per inch
  const pixelsPerInch = 96;
  const cmToInch = 1 / 2.54; // 1 inch = 2.54 cm
  const fontSizeInPx = cm * cmToInch * pixelsPerInch;

  return `${fontSizeInPx}px`;
};



export const mmToPx = (mm) => {
  const dpi = 96;
  return (mm / 25.4) * dpi;
};