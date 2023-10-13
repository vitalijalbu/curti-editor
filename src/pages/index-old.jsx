// Import necessary libraries and components
import React, { useRef, useEffect } from "react";
import { Row, Col, Alert, Button, Card, Typography, Divider } from "antd";
const { Title } = Typography;
import Toolbar from "@/shared/components/toolbar";
import { useRecoilValue } from "recoil";
import { editorState } from "@/store/index";



import Editor from "@/shared/editor/editor";

const Index = () => {
  
  
  return (
    <div className="page-flow">

          <Editor/>
    
    </div>
  );
};

export default Index;
