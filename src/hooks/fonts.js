// fonts.js
import fontsData from "@/data/static.fonts.json";

const head = document.head || document.getElementsByTagName("head")[0];
const style = document.createElement("style");
style.type = "text/css";

fontsData.forEach(({ filename, fontFamily }) => {
  const fontFace = `@font-face {
    font-family: '${fontFamily}';
    src: url('/fonts/${filename}') format('truetype');
  }`;
  style.appendChild(document.createTextNode(fontFace));
});

head.appendChild(style);
