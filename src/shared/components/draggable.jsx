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

  console.log('font-family', form?.data?.fontFamily);


  return (
    <div style={{ position: "relative" }}>
      <div
        className="target"
        ref={targetRef}
        id={`target-${form.id}`}
        key={form.id}
      >
        <span 
          className="has-font"
          style={{
            fontFamily: `"4500"`,
            fontSize: `${fontSize/10}cm`,
          }}
        >
          {form.data.text}
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
        snappable={true}
        isDisplaySnapDigit={true}
        isDisplayInnerSnapDigit={false}
        snapGap={true}
        snapDirections={{"top":true,"left":true,"bottom":true,"right":true,"center":true,"middle":true}}
        elementSnapDirections={{"top":true,"left":true,"bottom":true,"right":true,"center":true,"middle":true}}
        snapThreshold={5}
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
