import React, { useState } from 'react';
import { IconMaximize, IconMinus, IconPlus } from '@tabler/icons-react';
import { Space, Button, Row , Col, Segmented} from 'antd';


const FlowProvider = (props) => {
  const [zoomLevel, setZoomLevel] = useState(100);

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => prevZoom + 5);
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => (prevZoom > 5 ? prevZoom - 5 : prevZoom));
  };

  const handleResetZoom = () => {
    setZoomLevel(67);
  };

  const zoomStyle = {
    transform: `scale(${zoomLevel / 100})`,
  };

  return (
    <div>
        <Row justify={"space-between"}>
        <Col>
      <Space className="flow__controls">
        <Button icon={<IconPlus />} onClick={handleZoomIn} />
        <Button>{zoomLevel}%</Button>
        <Button icon={<IconMinus />} onClick={handleZoomOut} />
        <Button icon={<IconMaximize />} onClick={handleResetZoom} />
      </Space> 
      </Col>
        <Col>
            {props.head}
        </Col>
      </Row>
      <div className="flow__container">
        <div className="flow__pane grabbable" style={zoomStyle}>
          {/* Your content goes here */}
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default FlowProvider;
