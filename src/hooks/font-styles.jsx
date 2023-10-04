// FontStyles.jsx
import React from "react";
import fontsData from "@/data/static.fonts.json";

const FontStyles = () => {
  return (
    <>
      {fontsData.map(({ filename, fontFamily }) => (
        <style
          key={filename}
          jsx
          global
        >{`
          @font-face {
            font-family: '${fontFamily}';
            src: url('/fonts/${filename}') format('truetype');
          }
        `}</style>
      ))}
    </>
  );
};

export default FontStyles;