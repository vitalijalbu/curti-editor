import React, { useState } from 'react';
import { IconMaximize, IconMinus, IconPlus } from '@tabler/icons-react';
import { Space, Button, Row, Col } from 'antd';

const FlowProvider = (props) => {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => prevZoom + 5);
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => (prevZoom > 5 ? prevZoom - 5 : prevZoom));
  };

  const handleResetZoom = () => {
    setZoomLevel(75);
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const offsetX = e.clientX - dragStart.x;
      const offsetY = e.clientY - dragStart.y;
      setDragOffset({ x: offsetX, y: offsetY });
    }
  };

  const handleMouseUp = () => {
    if (dragging) {
      setDragging(false);
      setDragStart({ x: 0, y: 0 });
    }
  };

  const zoomStyle = {
    transform: `translate(${dragOffset.x}px, ${dragOffset.y}px) scale(${zoomLevel / 100})`,
  };

  return (
    <div className="flow__provider"
    //onMouseDown={handleMouseDown}
    //onMouseMove={handleMouseMove}
    //onMouseUp={handleMouseUp}
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
        className="flow__container grabbable"
        style={zoomStyle}
      >
        {props.children}
      </div>
    </div>
  );
};

export default FlowProvider;
