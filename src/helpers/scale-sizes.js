// Scale DIV HTML
export const scaleSizeDIV = (values) => {
  if (!values || typeof values !== 'object') {
    throw new Error('Invalid values object provided');
  }

  // Check if window is defined (to handle server-side rendering or other environments)
  const isBrowser = typeof window !== 'undefined';

  const screenWidth = isBrowser ? window.innerWidth : 1920; // Use a default value if window is not available
  const screenHeight = isBrowser ? window.innerHeight : 1080; // Use a default value if window is not available

  if (!values.width || !values.height) {
    throw new Error('Width and height values are required');
  }

  const scaleWidth = (screenWidth / values.width).toFixed(2);
  const scaleHeight = (screenHeight / values.height).toFixed(2);

  // Use the minimum scale factor to ensure that the content fits within the screen
  const scale = Math.min(scaleWidth, scaleHeight);

  const scaledWidth = `${values.width * scale}px`;
  const scaledHeight = `${values.height * scale}px`;

  return {
    width: scaledWidth,
    height: scaledHeight,
  };
};

// Scale font
export const scaleFontSize = (cm, scale) => {
  const fontSizeInPx = (cm / scale) * 37.8; // Assuming 1cm = 37.8 pixels (standard screen DPI)
  return `${fontSizeInPx}px`;
};


