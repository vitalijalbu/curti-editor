import React, { useState, useEffect } from 'react';
import { IconMaximize, IconMinus, IconPlus } from '@tabler/icons-react';
import { Space, Button, Row, Col } from 'antd';

const FlowProvider = (props) => {
  const [zoomLevel, setZoomLevel] = useState(75);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  
  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => (prevZoom < 100 ? prevZoom + 5 : prevZoom));
  };
  
  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => (prevZoom > 5 ? prevZoom - 5 : prevZoom));
  };
  
  const handleResetZoom = () => {
    setZoomLevel(75);
  };
  


  useEffect(() => {
    // Set initial zoom level based on screen width
    const initialZoom = window.innerWidth < 768 ? 50 : 75;
    setZoomLevel(initialZoom);
  }, []); // Run this effect only once on mount

  const zoomStyle = {
    transform: `translate(${dragOffset.x}px, ${dragOffset.y}px) scale(${zoomLevel / 100})`,
  };

  return (
    <div
      className="flow__provider"
    >
      <div className='flow__head'>
        <Row>
          <Col span={8} className='flow__left'>
            <Space className="flow__controls">
              <Button icon={<IconPlus />} onClick={handleZoomIn} />
              <Button>{zoomLevel}%</Button>
              <Button icon={<IconMinus />} onClick={handleZoomOut} />
              <Button icon={<IconMaximize />} onClick={handleResetZoom} />
            </Space>
          </Col>
          <Col span={8} className='flow__center'>{props.center}</Col>
          <Col span={8} className='flow__right'>{props.right}</Col>
        </Row>
      </div>
      <div
        className="flow__container"
        style={zoomStyle}
      >
        {props.children}
      </div>
    </div>
  );
};

export default FlowProvider;
