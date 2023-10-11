// Editor.jsx
import React, { useRef, useEffect, useState } from "react";
import { Alert, Card, Tag, Typography } from "antd";
const { Title } = Typography;
import { useRecoilValue } from "recoil";
import { formState } from "@/store/index";
import Draggable from "@/shared/editor/draggable";
import { scaleSizeDIV } from "helpers/scale-sizes";



const EditorDraw = (props) => {
  const forms = useRecoilValue(formState);
  console.log('✅ all-forms', forms);

  const values = { width: 800, height: 600 };
  const scaledSize = scaleSizeDIV(values);

  return (
    <div className="headstone" style={{ background: "#333", ...scaledSize }}>
      <div className={!props?.disabled && "headstone-wrapper"}>
        {/* Drawing Area */}
        {forms.map((form, i) => (
          <Draggable key={i} form={form}/>
        ))}
        {/* Drawing Area */}
        <div style={{ position: "absolute", bottom: 0, left: 0 }}>
          {!props?.disabled && <Tag color="red">margini sicuri</Tag>}
        </div>
      </div>
    </div> 
  );
};

export default EditorDraw;
