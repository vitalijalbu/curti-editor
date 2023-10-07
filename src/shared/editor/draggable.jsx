// Draggable.jsx
import { scaleFontSize } from "helpers/scale-sizes";
import React, { useRef, useEffect, useState } from "react";
import Moveable from "react-moveable";

const Draggable = ({ form }) => {
  const targetRef = useRef(null);
  const moveableRef = useRef(null);

  useEffect(() => {
    if (moveableRef.current) {
      const moveable = new Moveable();

      moveable.target = targetRef.current;
  
    }
  }, [form]);

  console.log('font-family', form?.data?.fontFamily);


  return (
    <div style={{ position: "relative" }}>
      <div
        className="target"
        ref={targetRef}
        id={`target-${form.id}`}
        key={form.id}
        style={{
          minWidth: scaleFontSize(form?.data?.fontSize, 10),
          width: scaleFontSize(form?.data?.fontSize, 1)
        }}
      >
        <span 
          className="has-font"
          style={{
            fontFamily: `"${form?.data?.fontFamily}"`,
            fontSize: scaleFontSize(form?.data?.fontSize, 10),
            letterSpacing: scaleFontSize(form?.data?.letterSpacing, 10),
            lineHeight: scaleFontSize(form?.data?.fontSize, 10)+1,
          }}
        >
          {form?.data?.text}
        </span>
      </div>
      <Moveable
        ref={moveableRef}
        target={`#target-${form.id}`}
        individualGroupable={true}
        draggable={true}
        resizable={true}
        rotatable={true}
        throttleScale={0}
        startDragRotate={0}
        throttleDragRotate={0}
        onClick={(e) => console.log('clicked-target', e.target.id)}
        snappable={true}
        padding={{
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
          }}
        onDrag={(e) => {
          e.target.style.transform = e.transform;
        }}
        onResize={(e) => {
          e.target.style.width = `${e.width}px`;
          e.target.style.height = `${e.height}px`;
          e.target.style.transform = e.drag.transform;
        }}
      />
    </div>
  );
};

export default Draggable;
