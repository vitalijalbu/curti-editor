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



  return (
    <>
           <div style={{ position: "absolute", width:"100%", height:"100%",  bottom: 0, left: 0 }}>
          {props?.disabled && <Title>Foglio A3</Title>}
        </div>
    <div id="headstone">
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
    </>
  );
};

export default EditorDraw;