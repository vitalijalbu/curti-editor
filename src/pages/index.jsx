import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { mmToPx, scaleSizeDIV } from 'helpers/scale-sizes';
import FlowProvider from '@/shared/components/flow-provider';
import { Segmented } from 'antd';
import SheetDraw from '@/shared/editor/sheet-draw';
import SheetPrint from '@/shared/editor/sheet-print';

const Index = () => {
  const [preview, setPreview] = useState('Disegna lapide');



  // static sizes calc
  const values = { width: 800, height: 600 };
  const scaledSize = scaleSizeDIV(values);


  return (
    <div style={{ width: '100%', height: '100vh', display: 'block', position: 'relative' }}>
      <FlowProvider
      center={<>
      <Segmented defaultValue={'Disegna lapide'} options={['Disegna lapide', 'Anteprima stampa A3']} onChange={(value) => setPreview(value)} />
      </>}>
      <div style={scaledSize}>
      {preview === 'Disegna lapide' ? <SheetDraw/> : <SheetPrint/> } 
      </div>
      </FlowProvider>
    </div>
  );
};

export default Index;
