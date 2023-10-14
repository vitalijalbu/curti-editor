// Demo.js
import React from 'react';
import dynamic from 'next/dynamic';

const Konva = dynamic(() => import('@/shared/editor/konva'), { ssr: false });

const Demo = () => {
  return (
    <>
      <Konva />
    </>
  );
};

export default Demo;
