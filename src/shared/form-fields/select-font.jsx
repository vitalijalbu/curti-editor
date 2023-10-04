// SelectFont.jsx
import React, { useEffect, useState } from "react";
import { Select, Typography } from "antd";

const { Option } = Select;
const { Text, Title } = Typography;

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
      } catch (error) {
        console.error("Error fetching font list:", error);
      }
    };

    fetchFontList();
  }, []); // Run only once on component mount

  return (
    <div>
      <p style={{ fontFamily: `"Font 4400" !important` }}>demo text</p>
      <Select listHeight={400} placeholder="Select Font">
        {fontOptions.map((option) => (
          <Option key={option.value} value={option.value} dropdownStyle={{ fontFamily: `"Font 4400" !important` }}>
            {option.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectFont;
