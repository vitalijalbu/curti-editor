// Draggable.jsx
import React, { useRef, useEffect } from "react";
import Moveable from "react-moveable";
import { flushSync } from "react-dom";

const Draggable = ({ form }) => {
  const targetRef = useRef(null);
  const moveableRef = useRef(null);

  useEffect(() => {
    if (moveableRef.current) {
      const moveable = new Moveable();

      moveable.target = targetRef.current;


    }
  }, [form]);

  return (
    <div style={{ position: "relative" }}>
      <div
        className="target"
        ref={targetRef}
        id={`target-${form.id}`}
        key={form.id}
        style={{
          width: "100px",
          height: "100px",
        }}
      >
        <h1>{form.data.text}</h1>
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
