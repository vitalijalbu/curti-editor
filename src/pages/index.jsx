import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import { fabric } from 'fabric';
import { mmToPx, scaleSizeDIV } from 'helpers/scale-sizes';
import FlowProvider from '@/shared/components/flow-provider';
import { Segmented } from 'antd';

const Index = () => {
  const [preview, setPreview] = useState('Disegna lapide');
  const { editor, onReady } = useFabricJSEditor();

  // Static forms array
  const forms = [
    {
      fontFamily: "Arial",
      letterSpacing: 0,
      text: "demo ciao 2",
      fontSize: 20,
      textAlign: "left",
    },
    {
      fontFamily: "Times New Roman",
      letterSpacing: 0,
      text: "sss s",
      fontSize: 20,
      textAlign: "right",
    }
  ];

  // static sizes calc
  const values = { width: 800, height: 600 };
  const scaledSize = scaleSizeDIV(values);

  useEffect(() => {
    if (editor) {
      const canvas = editor.canvas;

      // Set canvas options
      canvas.allowTouchScrolling = false;
      canvas.backgroundColor = '#333';
      canvas.selection = false;
      canvas.centeredScaling = false;

      // Loop through forms and add text to canvas
      displayTexts(canvas);
    }
  }, [editor, forms]);

  // External async callback to display texts
  const displayTexts = async (canvas) => {
    // Loop through forms and add text to canvas
    forms.forEach((formData, index) => {
      const { text, fontFamily, fontSize, textAlign } = formData;

      // Convert millimeters to pixels
      const fontSizeInPixels = mmToPx(fontSize);

      const textObject = new fabric.Text(text, {
        left: 50,
        top: 50 + index * 30, // Adjust top position for each text
        fontFamily: `"${fontFamily}"`,
        fill: '#fff',
        originX: textAlign,
        fontSize: "20px",
        fontSize: fontSizeInPixels,
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

  };

  return (
    <div style={{ width: '100%', height: '100vh', display: 'block', position: 'relative' }}>
      <FlowProvider
      center={<>
      <Segmented defaultValue={'Disegna lapide'} options={['Disegna lapide', 'Anteprima stampa A3']} onChange={(value) => setPreview(value)} />
      </>}>
      <div style={scaledSize}>
      {preview === 'Disegna lapide' ? <FabricJSCanvas className="f-canvas" onReady={onReady} /> : 'print' } 
      </div>
      </FlowProvider>
    </div>
  );
};

export default Index;
