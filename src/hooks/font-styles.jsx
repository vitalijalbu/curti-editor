// FontStyles.jsx
import React from "react";
import fontsData from "@/data/static.fonts.json";

const FontStyles = () => {
  //console.log('fonts-loading', fontsData);
  return (
    <>
      {fontsData.map(({ filename, i, code, fontFamily }) => (
        <style
          key={i}
          jsx
          global
        >{`
          @font-face {
            font-family: '${code}';
            font-weight: normal;
            src: url("/fonts/${filename}") format('truetype');
          }
        `}</style>
      ))}
    </>
  );
};

export default FontStyles;
