// Editor.jsx
import React, { useRef, useEffect, useState } from "react";
import { Alert, Button, Segmented } from "antd";
import { useRecoilValue } from "recoil";
import { formState } from "@/store/index";
import { scaleSizeDIV } from "helpers/scale-sizes";
import ReactFlow, { Controls, Panel, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import EditorDraw from "./editor-draw";
import EditorPrint from "./editor-print";

const Editor = () => {
  const forms = useRecoilValue(formState);
  console.log('✅ all-forms', forms);
  const [preview, setPreview] = useState('Disegna lapide');

  const values = { width: 800, height: 600 };
  const scaledSize = scaleSizeDIV(values);

  const initialNode = [
    {
      id: '1',
      connectable: false,
      dragHandle: false,
      deletable: false,
      showZoom: true,
      selectable: false,
      className: 'react-flow__node-artboard',
      position: { x: 30, y: 30 },
      style: { background: '#323232', height: "60cm", width: "80cm", padding: 0, color: "#fff", border: 0 },
      data: { label: <EditorDraw /> }
    }
  ];

  const printNode = [
    {
      id: '1',
      connectable: false,
      dragHandle: false,
      deletable: false,
      showZoom: true,
      selectable: false,
      className: 'react-flow__node-artboard',
      position: { x: 30, y: 30 },
      style: { background: '#fff', height: "297mm", width: "420mm", padding: 0, color: "#000", border: 0 },
      data: { label: <><Alert message="A3"/><EditorPrint disabled={true} /></> }
    }
  ];

  return (
    <div style={{ width: '100%', height: '80cm' }}>
      <ReactFlow
        nodes={preview === 'Disegna lapide' ? initialNode : printNode }
        panOnDrag={false}
      >
        <Controls position="top-left" size="large" showZoom={true}/>
        <Panel position="top-center">
          <Segmented defaultValue={'Disegna'} options={['Disegna lapide', 'Anteprima stampa A3']} onChange={(value) => setPreview(value)} />
        </Panel>
        <Background variant="dots" gap={20} size={1} />
      </ReactFlow>
    </div>
  );
};

export default Editor;
