// Editor.jsx
import React, { useRef, useEffect, useState } from "react";
import { Alert, Button, Segmented } from "antd";
import { useRecoilValue } from "recoil";
import { editorState } from "@/store/index";
import { scaleSizeDIV } from "helpers/scale-sizes";
import EditorDraw from "./editor-draw";
import EditorPrint from "./editor-print";
import FlowProvider from "@/shared/components/flow-provider";

const Editor = () => {
  const forms = useRecoilValue(editorState);
  console.log('✅ all-forms', forms);
  const [preview, setPreview] = useState('Disegna lapide');


  return (
    <div style={{ width: '100%', height: '100vh', display: 'block', position: 'relative' }}>
     
      <FlowProvider
      center={<>
      <Segmented defaultValue={'Disegna lapide'} options={['Disegna lapide', 'Anteprima stampa A3']} onChange={(value) => setPreview(value)} />
      </>}>
      {preview === 'Disegna lapide' ? <EditorDraw/> : <EditorPrint/> } 
          </FlowProvider>
    </div>
  );
};

export default Editor;
