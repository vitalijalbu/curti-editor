// Konva.js
import React, { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { mmToPx, scaleSizeDIV } from 'helpers/scale-sizes';
import { editorState } from '@/store/index';
import { useRecoilValue } from 'recoil';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

const KonvaComponent = () => {
  const texts = useRecoilValue(editorState);

  const displayTexts = useCallback((layer) => {
    if (Konva && texts.length > 0 && layer) {
      //layer.destroyChildren();
  
      try {
        texts.forEach((formData, index) => {
          const textData = formData?.data;
  
          if (textData) {
            const { text, fontFamily, fontSize, textAlign, letterSpacing } = textData;
            console.log('text-to-layer', text);
  
            const fontSizeInPixels = mmToPx(fontSize);
  
            const textObject = (
              <Text
                key={index}
                x={100}
                y={100 + index * 100}
                fontFamily={fontFamily}
                fill=""
                fontSize={30}
                letterSpacing={letterSpacing}
                text={text}
                width={300} // adjust as needed
                align={textAlign}
                draggable
              />
            );
  
            layer.add(textObject);
          }
        });
  
        layer.batchDraw();
      } catch (e) {
        console.error('Issues rendering texts:', e);
      }
    }
  }, [Konva, texts]);

  // static sizes calc
  const values = { width: 800, height: 600 };
  const scaledSize = scaleSizeDIV(values);

  return (
    <>

        <Stage width={scaledSize.width} height={scaledSize.height}>
          <Layer ref={displayTexts} />
        </Stage>

    </>
  );
};

export default KonvaComponent;
