// Editor.jsx
import React, { useRef, useEffect, useState } from "react";
import { Alert, Button, Segmented } from "antd";
import { useRecoilValue } from "recoil";
import { formState } from "@/store/index";
import { scaleSizeDIV } from "helpers/scale-sizes";
import ReactFlow, { Controls, Panel, Background } from 'reactflow';
import 'reactflow/dist/base.css';
import EditorDraw from "./editor-draw";
import EditorPrint from "./editor-print";

const Editor = () => {
  const forms = useRecoilValue(formState);
  console.log('✅ all-forms', forms);
  const [preview, setPreview] = useState('Disegna lapide');

  const values = { width: 800, height: 600 };
  const scaledSize = scaleSizeDIV(values);

  const nodes = [
    {
      id: 'A',
      type: 'group',
      data: { label: null },
      position: { x: 0, y: 0 },
      style: {
        width: 170,
        height: 140,
      },
    },
    {
      id: 'B',
      type: 'input',
      data: { label: 'child node 1' },
      position: { x: 10, y: 10 },
      parentNode: 'A',
      extent: 'parent',
    },
    {
      id: 'C',
      data: { label: 'child node 2' },
      position: { x: 10, y: 90 },
      parentNode: 'A',
      extent: 'parent',
    },
  ];

  const printNode = [
    {
      id: '2',
      connectable: false,
      dragHandle: false,
      deletable: false,
      showZoom: true,
      selectable: false,
      className: 'react-flow__node-artboard',
      position: { x: 0, y: 20 },
      style: { zIndex: 999, background: '#fff', height: "29.7cm", width: "42cm", padding: 0, color: "#000", border: 0 },
      data: { label: <div style={{position: "relative"}}><EditorPrint disabled={true} /></div>}
    }
  ];

  return (
    <div style={{ width: '100%', height: '100vh', display: 'block', position: 'relative' }}>
      <ReactFlow
        nodes={nodes}
        //nodesDraggable={false}
        zoomOnScroll={false}  // Disable zoom on scroll if it causes issues
        zoomOnPinch={false}   // Disable zoom on pinch if it causes issues
        //dragHandle={false}
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
