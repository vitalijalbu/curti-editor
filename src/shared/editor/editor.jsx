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
      type: 'div',
      connectable: false,
      dragHandle: false,
      deletable: false,
      showZoom: true,
      selectable: false,
      className: 'react-flow__node-artboard',
      position: { x: 0, y: 20 },
      style: { background: '#323232', padding: "2cm", height: "30cm", width: "40cm", color: "#fff", border: 0 },
      data: { label: <EditorDraw /> }
    }
  ];

  const printNode = [
    {
      id: '2',
      type: 'div',
      connectable: false,
      dragHandle: false,
      deletable: false,
      showZoom: true,
      selectable: false,
      className: 'react-flow__node-artboard',
      position: { x: 0, y: 20 },
      style: { background: '#fff', height: "29.7cm", width: "42cm", padding: 0, color: "#000", border: 0 },
      data: { label: <EditorPrint disabled={true} />}
    }
  ];

  return (
    <div style={{ width: '100%', height: '100vh', display: 'block', position: 'relative' }}>
      <ReactFlow
        nodes={preview === 'Disegna lapide' ? initialNode : printNode }
        style={{ height: "100%", width: "100%"}}
        nodesDraggable={false}
        dragHandle={false}
        fitBounds
        fitView
        attributionPosition="bottom-left"
      >
        <Panel position="top-center">
          <Segmented defaultValue={'Disegna lapide'} options={['Disegna lapide', 'Anteprima stampa A3']} onChange={(value) => setPreview(value)} />
        </Panel>
        <Background variant="dots" gap={20} size={1} />
        <Controls position="top-left" size="large" showZoom={true}/>
      </ReactFlow>
    </div>
  );
};

export default Editor;
