import React, { useEffect, useState, useCallback } from 'react';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import { fabric } from 'fabric';
import { mmToPx, scaleSizeDIV } from 'helpers/scale-sizes';
import { editorState } from '@/store/index';
import { useRecoilValue } from 'recoil';

const SheetDraw = () => {
  const [loading, setLoading] = useState(false);
  const { editor, onReady } = useFabricJSEditor();
  const texts = useRecoilValue(editorState);

  const displayTexts = useCallback((canvas) => {
    try {
      // Clear all objects on the canvas
      //canvas.clear();

      if (texts.length > 0) {
        texts.forEach((formData, index) => {
          const { text, fontFamily, fontSize, textAlign } = formData?.data;
          console.log('canvas-to-text-', text);

          const fontSizeInPixels = mmToPx(fontSize);

          const textObject = new fabric.Text(text, {
            left: 100,
            top: 100 + index * 10,
            fontFamily: `"${fontFamily}"`,
            fill: '#fff',
            fontSize: 30,
            borderColor: '#004bb3',
            lockUniScaling: true,
            editable: false,
            hasRotatingPoint: false,
            lockRotation: true,
            lockScalingFlip: true,
            lockScaling: true,
            //originX: 'center',
            //originY: 'center',
          });

          /*textObject.on('object:moving', function (options) {
            const obj = options.target;
            const copy = new fabric.Text(obj.text, {
              left: obj.left,
              top: obj.top,
              fontFamily: obj.fontFamily,
              fill: obj.fill,
              fontSize: obj.fontSize,
              borderColor: obj.borderColor,
              lockUniScaling: obj.lockUniScaling,
              editable: false,
              hasRotatingPoint: false,
              lockRotation: true,
              lockScalingFlip: true,
              lockScaling: true,
              originX: obj.originX,
              originY: obj.originY,
            });
            canvas.add(copy);
          });*/

          canvas.add(textObject);
        });
        canvas.requestRenderAll();
      }
    } catch (e) {
      console.error('Issues rendering texts:', e);
    }
  }, [texts]);

  useEffect(() => {
    if (editor) {
      const canvas = editor.canvas;

      canvas.clear(); // Clear all objects before adding new ones
      canvas.allowTouchScrolling = false;
      canvas.backgroundColor = '#B6B6B6';
      canvas.selection = false;

      displayTexts(canvas);
    }
  }, [editor, texts]);

  // static sizes calc
  const values = { width: 800, height: 600 };
  const scaledSize = scaleSizeDIV(values);

  return (
    <>
      <FabricJSCanvas className="f-canvas" onReady={onReady} />
    </>
  );
};

export default SheetDraw;
