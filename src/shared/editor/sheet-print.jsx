import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import { fabric } from 'fabric';
import { mmToPx, scaleSizeDIV } from 'helpers/scale-sizes';
import { editorState } from '@/store/index';
import { useRecoilValue } from 'recoil';

const SheetPrint = () => {
  const [preview, setPreview] = useState('Disegna lapide');
  const { editor, onReady } = useFabricJSEditor();
  const forms = useRecoilValue(editorState);

 // External async callback to display texts
 const displayTexts = useCallback((canvas) => {
  if(!forms.length > 0){
  // Loop through forms and add text to canvas
  forms.forEach((formData, index) => {
    const { text, fontFamily, fontSize, textAlign } = formData?.data;

    // Convert millimeters to pixels
    const fontSizeInPixels = mmToPx(fontSize);

    const textObject = new fabric.Text(text, {
      left: 100,
      top: 100 + index * 10, // Adjust top position for each text
      fontFamily: `"${fontFamily}"`,
      fill: '#fff',
      originX: textAlign,
      fontSize: "20px",
      editable: false,
      hasRotatingPoint: false,
      lockRotation: false,
      lockScalingFlip: false,
      lockScaling: false
    });

    /* Clone the text object before adding it to the canvas
    const clonedObject = fabric.util.object.clone(textObject);*/
    canvas.add(textObject);
  });
  canvas.requestRenderAll();
}else{
  console.log('Issues rendering forms')
}

}, [forms]);

  // static sizes calc
  const values = { width: 800, height: 600 };
  const scaledSize = scaleSizeDIV(values);

  useEffect(() => {
    if (editor) {
      const canvas = editor.canvas;

      // Set canvas options
      canvas.allowTouchScrolling = false;
      canvas.backgroundColor = '#fff';
      canvas.selection = false;
      canvas.centeredScaling = false;

      
      // Loop through forms and add text to canvas
      displayTexts(canvas);
    }
  }, [editor]);

 

  return (
    <>
      <FabricJSCanvas className="f-canvas2" onReady={onReady} />
    </>
  );
};

export default SheetPrint;
