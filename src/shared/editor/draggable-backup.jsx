// Draggable.jsx
import { scaleFontSize } from "helpers/scale-sizes";
import React, { useRef, useEffect, useState } from "react";
import Moveable from "react-moveable";

const Draggable = (props) => {
  const targetRef = useRef(null);
  const moveableRef = useRef(null);

  useEffect(() => {
    if (moveableRef.current) {
      const moveable = new Moveable();

      moveable.target = targetRef.current;
  
    }
  }, [props?.form]);

  console.log('font-family', props?.form?.data?.fontFamily);
  console.log('props?.disabled', props?.disabled);


  return (
    <div style={{ position: "relative" }}>
      <div
        className="target"
        ref={targetRef}
        id={`target-${props?.form.id}`}
        key={props?.form.id}
        style={{
          minWidth: scaleFontSize(props?.form?.data?.fontSize, 10),
          width: scaleFontSize(props?.form?.data?.fontSize, 1)
        }}
      >
        <span 
          className="has-font"
          style={{
            fontFamily: `"${props?.form?.data?.fontFamily}"`,
            fontSize: scaleFontSize(props?.form?.data?.fontSize),
            letterSpacing: scaleFontSize(props?.form?.data?.letterSpacing),
            lineHeight: scaleFontSize(props?.form?.data?.fontSize, 10)+1,
          }}
        >
          {props?.form?.data?.text}
        </span>
      </div>
      <Moveable
        ref={moveableRef}
        target={`#target-${props?.form.id}`}
        individualGroupable={true}
        resizable={true}
        draggable={true}
        padding={{
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
          }}
        onDrag={(e) => {
          e.target.style.transform = e.transform;
        }}
        keepRatio={false}
        throttleResize={1}
        renderDirections={["nw","n","ne","w","e","sw","s","se"]}
        onResize={e => {
          e.target.style.width = `${e.width}px`;
          e.target.style.height = `${e.height}px`;
          e.target.style.transform = e.drag.transform;
        }}
      />
    </div>
  );
};

export default Draggable;
