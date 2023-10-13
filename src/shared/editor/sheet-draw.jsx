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
      // canvas.clear();

      if (texts.length > 0) {
        texts.forEach((formData, index) => {
          const { text, fontFamily, fontSize, textAlign, letterSpacing } = formData?.data;
          console.log('text-to-canvas', text);

          const fontSizeInPixels = mmToPx(fontSize);

          const textObject = new fabric.IText(text, {
            //left: 100,
            top: 100 + index * 100,
            fontFamily: `"${fontFamily}"`,
            fill: '#fff',
            fontSize: 30,
            //borderColor: '#004bb3',
            charSpacing: letterSpacing,
            //originX: 'center',
            //originY: 'center',
            editable: false,
            hasRotatingPoint: false
          });

         /* textObject.on('object:modified', function (options) {
            // Do nothing for now or handle additional logic if needed
          });*/

          canvas.add(textObject);
        });
        
      }
      canvas.requestRenderAll();
    } catch (e) {
      console.error('Issues rendering texts:', e);
    }
  }, [texts]);

  useEffect(() => {
    if (editor) {
      const canvas = editor.canvas;

      canvas.clear(); // Clear all objects before adding new ones
      canvas.allowTouchScrolling = false;
      //canvas.setWidth = '800px';
      //canvas.setHeight = '600px';
      canvas.backgroundColor = '#B6B6B6';
      canvas.cursor = 'grab';
      //canvas.selectionFullyContained = true;
      canvas.selection = false;

      displayTexts(canvas);
    }
  }, [editor, texts]);


  return (
    <>
      <FabricJSCanvas className="f-canvas" onReady={onReady} />
    </>
  );
};

export default SheetDraw;
