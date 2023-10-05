// Import necessary libraries and components
import React, { useRef, useEffect } from "react";
import { Alert, Card, Divider } from "antd";
import Toolbar from "@/shared/components/toolbar";
import { useRecoilValue } from "recoil";
import { formState } from "@/store/index";
import Draggable from "@/shared/components/draggable";

const Editor = () => {
  const forms = useRecoilValue(formState);
  console.log('✅ all-forms', forms);


  return (

        <div id="headstone">
          {/* A3 text will be replaced by the embedded PDF */}
          {forms.map((form, i) => (
            <Draggable key={i} form={form}/>
          ))}
        </div>
       
  );
};

export default Editor;
