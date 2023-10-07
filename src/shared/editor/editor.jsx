// Editor.jsx
import React, { useRef, useEffect, useState } from "react";
import { Alert, Button, Card, Tag } from "antd";
import Toolbar from "@/shared/components/toolbar";
import { useRecoilValue } from "recoil";
import { formState } from "@/store/index";
import Draggable from "@/shared/editor/draggable";
import { scaleSizeDIV } from "helpers/scale-sizes";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  ReactFlowProps,
  Panel,
} from 'reactflow';

import 'reactflow/dist/style.css';
import EditorDraw from "./editor-draw";
const initialNodes = [
  { 
    id: '1', 
    connectable: false, 
    dragHandle: false, 
    deletable: false,
    selectable: false, 
    className: 'react-flow__node-artboard', 
    position: { x: 10, y: 0 }, 
    data: { label: <div><EditorDraw/></div> } 
  }
];


const Editor = () => {
  const forms = useRecoilValue(formState);
  console.log('✅ all-forms', forms);



  const values = { width: 800, height: 600 };
  const scaledSize = scaleSizeDIV(values);


  return (
    <div style={{ width: '100%', height: '100vh' }}>
    <ReactFlow
      nodes={initialNodes}
      //edges={initialEdges}
    >
      <Controls position="top-right" size="large">
        <Button>50%</Button>
        </Controls>
      <Panel position="top-center">top-center</Panel>
      <Background variant="dots" gap={20} size={1} />
    </ReactFlow>
  </div>
  );
};

export default Editor;
