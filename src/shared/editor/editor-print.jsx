// Editor.jsx
import React, { useRef, useEffect, useState } from "react";
import { Alert, Card, Tag, Typography } from "antd";
const { Title } = Typography;
import { useRecoilValue } from "recoil";
import { formState } from "@/store/index";
import Draggable from "@/shared/editor/draggable";
import { scaleSizeDIV } from "helpers/scale-sizes";



const EditorPrint = (props) => {
  const forms = useRecoilValue(formState);
  console.log('✅ all-forms', forms);



  const values = { width: 800, height: 600 };
  const scaledSize = scaleSizeDIV(values);


  return (
    <div className="headstone print" id="sheet-print">
    <div style={{ position: "absolute",  bottom: 0, left: 0 }}>
          <Title>Foglio A3</Title>
        </div>
      <div className={!props?.disabled && "headstone-wrapper"}>
        {/* Drawing Area */}
        {forms.map((form, i) => (
          <Draggable key={i} form={form} disabled={props?.disabled}/>
        ))}
      </div>
    </div> 
  );
};

export default EditorPrint;
