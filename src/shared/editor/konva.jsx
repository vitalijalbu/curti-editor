'use client';
import React from "react";
import { render } from "react-dom";
import { Stage, Layer, Rect, Transformer, Text } from "react-konva";

const Rectangle = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Rect
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(50, node.width() * scaleX),
            height: Math.max(node.height() * scaleY)
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

const TheText = ({ textProps, isSelected, onSelect, onChange }) => {
  const textRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([textRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Text
        onClick={onSelect}
        onTap={onSelect}
        ref={textRef}
        {...textProps}
        // dragBoundFunc ={(pos)=>{
        //   // important pos - is absolute position of the node
        //   // you should return absolute position too
        //   return {
        //     x: this.absolutePosition().x,
        //     y: pos.y,
        //   };
        // }}
        // verticalAlign='center'
        // fillPatternImage= 'https://i.pinimg.com/564x/eb/68/86/eb68862a2eae8f1648599653cdb740b7.jpg'
        draggable
        onDragEnd={(e) => {
          onChange({
            ...textProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = textRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...textProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(5, node.height() * scaleY)
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};


const initialTexts = [
  {
    text: "text here",
    x: 120,
    y: 20,
    fontSize: 50,
    draggable: true,
    width: 400,
    fontStyle: "normal",
    align: "center",
    id: 0,
    textDecoration: "line-through ",
    fontVariant: "small-caps",
    wrap: "word"
  },
  {
    text: "all draggble and resizable",
    x: 50,
    y: 250,
    fontSize: 40,
    draggable: true,
    width: 400,
    // height:50,
    // fillPatternImage:'star.svg',
    ellipsis: true,
    fontFamily: "changa",
    stroke: "blue",
    align: "center",
    id: 1
  },
  {
    text: "hello world",
    x: 10,
    y: 120,
    fontSize: 120,
    draggable: true,
    width: 600,
    fontStyle: "normal",
    align: "left",
    id: 2,
    lineHeight: 1,
    fill: "#f84852",
    stroke: "purple",
    strokeWidth: 4
  }
];

export default Konva = () => {
  const [texts, setTexts] = React.useState(initialTexts);
  const [selectedId, selectShape] = React.useState(null);

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
    >
      <Layer>
        {texts.map((txt, i) => {
          return (
            <TheText
              key={i}
              textProps={txt}
              isSelected={txt.id === selectedId}
              onSelect={() => {
                selectShape(txt.id);
              }}
              onChange={(newAttrs) => {
                const txts = texts.slice();
                txts[i] = newAttrs;
                setTexts(txts);
              }}
            />
          );
        })}

      
      </Layer>
    </Stage>
  );
};

