import React, { useEffect, useState, useCallback } from 'react';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import { fabric } from 'fabric';
import { mmToPx, scaleSizeDIV } from 'helpers/scale-sizes';
import { editorState } from '@/store/index';
import { useRecoilValue } from 'recoil';
const texts = [
  {
    id: 1,
    text: 'This is the first text.',
    fontFamily: 'Arial',
    fontSize: 30,
    textAlign: 'left',
    letterSpacing: 1,
  },
  {
    id: 2,
    text: 'This is the second text.',
    fontFamily: 'Times New Roman',
    fontSize: 40,
    textAlign: 'center',
    letterSpacing: 2,
  },
];

const SheetDraw = () => {
  const [loading, setLoading] = useState(false);
  const { editor, onReady } = useFabricJSEditor();

  const displayTexts = useCallback((canvas) => {
    try {
      if (texts.length > 0) {
        texts.forEach((textData, index) => {
          const { text, fontFamily, fontSize, textAlign, letterSpacing } = textData;
          console.log('text-to-canvas', text);

          const fontSizeInPixels = mmToPx(fontSize);

          const textObject = new fabric.Text(text, {
            id: index + 1,
            left: 100,
            top: 100 + index * 100,
            fontFamily: `"${fontFamily}"`,
            fill: '#fff',
            fontSize: fontSizeInPixels,
            charSpacing: letterSpacing,
            editable: false,
            hasRotatingPoint: false,
            lockMovementX: false,
            lockMovementY: false,
          });

          textObject.on('object:moving', function (options) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            console.log('moving', options);

            // Remove the event listener before moving the text object.
            this.off('object:moving');

            // Move the text object.
            this.moveTo(options.left, options.top);

            // Re-add the event listener.
            this.on('object:moving', function (options) {
              context.clearRect(0, 0, canvas.width, canvas.height);
              console.log('moving', options);
            });
          });

          canvas.add(textObject);
        });
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
      canvas.renderAll();
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
