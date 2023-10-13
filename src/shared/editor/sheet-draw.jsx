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
      if (texts.length > 0) {
        texts.forEach((formData, index) => {
          const textData = formData?.data;

          if (textData) {
            const { text, fontFamily, fontSize, textAlign, letterSpacing } = textData;
            console.log('text-to-canvas', text);

            const fontSizeInPixels = mmToPx(fontSize);

            const textObject = new fabric.IText(text, {
              left: 100,
              top: 100 + index * 100,
              fontFamily: `"${fontFamily}"`,
              fill: '#fff',
              fontSize: 30,
              charSpacing: letterSpacing,
              editable: false,
              hasRotatingPoint: false,
              lockMovementX: false,
              lockMovementY: false,
            });

            textObject.on('object:moving', function (options) {
              context.clearRect(0, 0, canvas.width, canvas.height);
            });


            canvas.add(textObject);
          }
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

     
      canvas.allowTouchScrolling = false;
      //canvas.setWidth = '800px';
      //canvas.setHeight = '600px';
      canvas.backgroundColor = '#B6B6B6';
      canvas.cursor = 'grab';
      //canvas.selectionFullyContained = true;
      canvas.selection = false;
      //canvas.preserveObjectStacking = false;
      canvas.renderOnAddRemove = true;

      displayTexts(canvas);
    }
  }, [editor]);


  return (
    <>
      <FabricJSCanvas className="f-canvas" onReady={onReady} />
    </>
  );
};

export default SheetDraw;
