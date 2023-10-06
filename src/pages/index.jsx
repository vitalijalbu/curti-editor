// Import necessary libraries and components
import React, { useRef, useEffect } from "react";
import { Row, Col, Alert, Button, Card, Typography, Divider } from "antd";
const { Title } = Typography;
import Toolbar from "@/shared/components/toolbar";
import { useRecoilValue } from "recoil";
import { formState } from "@/store/index";



import Editor from "@/shared/components/editor";

const Index = () => {
  const indexRef = useRef(null);

  const handlePrintButtonClick = () => {
    if (indexRef.current && indexRef.current.captureHeadstoneHTML) {
      indexRef.current.captureHeadstoneHTML();
    } else {
      console.error("The captureHeadstoneHTML function is not available.");
    }
  };

  // Ensure that the ref is updated after the Index component mounts
  useEffect(() => {
    indexRef.current = indexRef.current; // This triggers a re-render and updates the ref
  }, []);


  return (
    <div>
      

         <Title level={3}>Anteprima lapide</Title>
          <Editor/>
       
        <Divider />
        <Row>
          <Col span="24">
        <Alert
            showIcon
            message="SCALA 1:10"
            description="1cm sullo schermo corrisponde a 10cm nella realtà"
            type="warning"
            key="alert"
          />
          </Col>
        </Row>
    </div>
  );
};

export default Index;
