// Editor.jsx
import React, { useRef, useEffect, useState } from "react";
import { Alert, Card, Tag, Typography } from "antd";
const { Title } = Typography;
import { useRecoilValue } from "recoil";
import { editorState } from "@/store/index";
import Draggable from "@/shared/editor/draggable";
import { scaleSizeDIV } from "helpers/scale-sizes";



const EditorPrint = (props) => {
  const forms = useRecoilValue(editorState);
  console.log('✅ all-forms', forms);

  const values = { width: 420, height: 297 };
  const scaledSize = scaleSizeDIV(values);


  return (
    <div className="headstone print" id="sheet-print" style={{ background: "#fff", ...scaledSize }}>
    <div style={{ position: "absolute",  bottom: 0, left: 0 }}>
          <Title>Foglio A3</Title>
        </div>
      <div>
        {/* Drawing Area */}
        {forms.map((form, i) => (
          <Draggable key={i} form={form} disabled={props?.disabled}/>
        ))}
      </div>
    </div> 
  );
};

export default EditorPrint;
