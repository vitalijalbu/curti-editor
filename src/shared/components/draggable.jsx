// Draggable.jsx
import React, { useRef, useEffect, useState } from "react";
import Moveable from "react-moveable";

const Draggable = ({ form }) => {
  const targetRef = useRef(null);
  const moveableRef = useRef(null);
  const [fontSize, setFontSize] = useState(25);

  useEffect(() => {
    if (moveableRef.current) {
      const moveable = new Moveable();

      moveable.target = targetRef.current;
  
    }
    setFontSize(form?.data?.fontSize);
  }, [form]);



  return (
    <div style={{ position: "relative" }}>
      <div
        className="target"
        ref={targetRef}
        id={`target-${form.id}`}
        key={form.id}
      >
        <span 
          style={{
            fontFamily: form?.data?.fontFamily,
            fontSize: `${fontSize/10}cm`,
          }}
        >
          {form.data.text}
        </span>
      </div>
      <Moveable
        ref={moveableRef}
        target={`#target-${form.id}`}
        draggable={true}
        resizable={true}
        rotatable={true}
        throttleDrag={1}
        edgeDraggable={false}
        throttleScale={0}
        startDragRotate={0}
        throttleDragRotate={0}
        onDrag={(e) => {
          e.target.style.transform = e.transform;
        }}
        onRotate={(e) => {
          e.target.style.transform = e.drag.transform;
        }}
        renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
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
