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
      <Text style={{ fontFamily: '"Font 4903" !important' }}>demo text</Text>
      <Select
        style={{ width: "100%", fontFamily: '"Font 4903" !important' }}
        listHeight={400}
        placeholder="Select Font"
      >
        {fontOptions.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectFont;
