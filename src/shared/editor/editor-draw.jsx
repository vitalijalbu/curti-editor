import React, { useRef, useEffect, useState } from "react";
import { Tag } from "antd";
import Draggable from "@/shared/editor/draggable";
import { scaleSizeDIV } from "helpers/scale-sizes";
import Ruler from "@scena/ruler";
import { useRecoilValue } from "recoil";
import { editorState } from "@/store/index";

const EditorDraw = (props) => {
  const forms = useRecoilValue(editorState);
  const rulerRef = useRef(null);

  const values = { width: 800, height: 600 };
  const scaledSize = scaleSizeDIV(values);




  return (
    <div className="headstone" style={{ background: "#333", ...scaledSize }}>
      <div className={!props?.disabled && "headstone-wrapper"}>
        {/* Drawing Area */}
        {forms.map((form, i) => (
          <Draggable key={i} form={form} />
        ))}
        {/* Drawing Area */}
        <div style={{ position: "absolute", bottom: 0, left: 0 }}>
          {!props?.disabled && <Tag color="red">margini sicuri</Tag>}
        </div>
      </div>
      <div ref={rulerRef} style={{ position: "absolute", top: 0, left: 0 }} />
    </div>
  );
};

export default EditorDraw;
