import React, { useRef, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Stage, Layer, Text, Transformer } from 'react-konva';
import { editorState } from '@/store/index';

const KonvaComponent = () => {
  const [selectedId, setSelectedId] = useState(null);
  const texts = useRecoilValue(editorState);
  const trRef = useRef();
  const textNodeRef = useRef();

  const handleTextClick = (e) => {
    setSelectedId(e.target.id());
  };

  const handleStageClick = () => {
    setSelectedId(null);
  };

  useEffect(() => {
    // we need to attach transformer manually
    if (selectedId) {
      trRef.current.nodes([textNodeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [selectedId]);

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onClick={handleStageClick}
      style={{ background: 'red' }}
    >
      <Layer>
        {texts.map((text) => (
          <React.Fragment key={text.id}>
            <Text
              id={text.id}
              text={text.label}
              x={text.data.x || 0}
              y={text.data.y || 0}
              draggable
              fontSize={40}
              onClick={handleTextClick}
              onDragEnd={(e) => {
                const newProps = {
                  x: e.target.x(),
                  y: e.target.y(),
                };
                // Update the position of the text in the state or your Recoil state
                // You might need to implement this part based on your application structure
                // setNewPosition(text.id, newProps);
              }}
              ref={textNodeRef}
            />
          </React.Fragment>
        ))}
        {selectedId && textNodeRef.current && (
          <Transformer
            ref={trRef}
            boundBoxFunc={(oldBox, newBox) => {
              // Limit the transformer to stay within the stage boundaries
              if (
                newBox.x < 0 ||
                newBox.y < 0 ||
                newBox.x + newBox.width > window.innerWidth ||
                newBox.y + newBox.height > window.innerHeight
              ) {
                return oldBox;
              }
              return newBox;
            }}
            enabledAnchors={['left', 'right', "top", "bottom"]} // Adjust as needed
            anchorCornerRadius={5}
            borderStrokeWidth={1}
            keepRatio={false}
            rotateEnabled={false}
            ignoreStroke
            rotateAnchorOffset={20}
            resizeEnabled={true}
            borderStroke="#1890ff"
            anchorFill="#1890ff"
            anchorSize={8}
          />
        )}
      </Layer>
    </Stage>
  );
};

export default KonvaComponent;
