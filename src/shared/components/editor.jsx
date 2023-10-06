// Editor.jsx
import React, { useRef, useEffect, useState } from "react";
import { Alert, Card, Tag } from "antd";
import Toolbar from "@/shared/components/toolbar";
import { useRecoilValue } from "recoil";
import { formState } from "@/store/index";
import Draggable from "@/shared/components/draggable";
import { scaleSizeDIV } from "helpers/scale-sizes";

const Editor = () => {
  const forms = useRecoilValue(formState);
  console.log('✅ all-forms', forms);



  const values = { width: 800, height: 600 };
  const scaledSize = scaleSizeDIV(values);
  console.log(scaledSize);

  return (
    <div id="headstone"  style={scaledSize}>
      <div className="headstone-wrapper">
        {/* Drawing Area */}
        {forms.map((form, i) => (
          <Draggable key={i} form={form} />
        ))}
        {/* Drawing Area */}
        <div style={{ position: "absolute", bottom: 0, left: 0 }}>
          <Tag color="red">margini sicuri</Tag>
        </div>
      </div>
    </div>
  );
};

export default Editor;
