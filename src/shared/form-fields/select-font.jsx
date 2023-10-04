
        import React, { useEffect, useState } from "react";
        import { Select } from "antd";
        
        const { Option } = Select;
        
        const SelectFont = () => {
          const [fontOptions, setFontOptions] = useState([]);
        
          useEffect(() => {
            const fetchFontList = async () => {
              try {
                const fontsData = require("@/data/static.fonts.json");
                const fontList = fontsData.map(({ filename, fontFamily }) => ({
                  value: filename,
                  label: fontFamily,
                }));
                setFontOptions(fontList);
        
                // Dynamically create and apply @font-face styles
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
              } catch (error) {
                console.error("Error fetching font list:", error);
              }
            };
        
            fetchFontList();
          }, []); // Run only once on component mount
        
          return (
            <div>
              <p style={{ fontFamily: `"Font 4903" !important` }}>demo text</p>
              <Select style={{ width: "100%" }} listHeight={400} placeholder="Select Font">
                {fontOptions.map((option) => (
                  <Option
                    key={option.value}
                    value={option.value}
                    style={{ fontFamily: `"Font 4903" !important` }}
                  >
                    {option.label}
                  </Option>
                ))}
              </Select>
            </div>
          );
        };
        
        export default SelectFont;
        