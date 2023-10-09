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
<div>
           <div style={{ position: "relative", width:"100%", height:"100%",  bottom: 0, left: 0 }}>
          {props?.disabled && <Title>Foglio A3</Title>}
        </div>
    <div id="headstone" className="print">
      <div className={!props?.disabled && "headstone-wrapper"}>
        {/* Drawing Area */}
        {forms.map((form, i) => (
          <Draggable key={i} form={form} disabled={props?.disabled}/>
        ))}
      </div>
    </div> 
    </div> 
  );
};

export default EditorPrint;
