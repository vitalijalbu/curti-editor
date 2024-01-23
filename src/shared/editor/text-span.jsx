'use client';
import { scaleFontSize } from "helpers/scale-sizes";
import React from "react";
import { render } from "react-dom";

const TextSpan = ({ data }) => {
 
console.log('TextSpan', data);
  return (
    <span 
          className="has-font"
          style={{
            fontFamily: `"${data?.fontFamily}"`,
            fontSize: scaleFontSize(data?.fontSize),
            letterSpacing: scaleFontSize(data?.letterSpacing),
            lineHeight: scaleFontSize(data?.fontSize, 10)+1,
            textAlign: `"${data?.textAlign}"`,
            marginRight: `"${data?.marginRight}"`
          }}
        >
          {data?.text}
        </span>
  );
};

export default TextSpan;