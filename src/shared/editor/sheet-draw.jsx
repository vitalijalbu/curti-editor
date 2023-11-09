// Editor.jsx
import React, { useRef, useEffect, useState } from "react";
import { Alert, Card, Tag, Typography } from "antd";
const { Title } = Typography;
import { useRecoilValue } from "recoil";
import { editorState } from "@/store/index";
import Draggable from "@/shared/editor/draggable";
import { scaleSizeDIV } from "helpers/scale-sizes";



const SheetDraw = (props) => {
  const forms = useRecoilValue(editorState);
  console.log('✅ all-forms', forms);
  const containerRef = useRef(null);
  const [scaledSize, setScaledSize] = useState({ width: '100%', height: '100%' });


  useEffect(() => {
    const calculateSize = () => {
      if (containerRef.current) {
        try {
          const newSize = scaleSizeDIV(containerRef.current);
          setScaledSize(newSize);
        } catch (error) {
          console.error(error.message);
        }
      }
    };

    // Check if window is defined before attaching the event listener
    if (typeof window !== 'undefined') {
      // Call the function on mount
      calculateSize();

      // Call the function whenever the window is resized
      window.addEventListener('resize', calculateSize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', calculateSize);
      };
    }
  }, [containerRef]);

  console.log('scaledSize', scaledSize)

  return (
      <div ref={containerRef} className="headstone" style={{ background: "#aa9883", ...scaledSize }}>
      <div className={!props?.disabled && "headstone-wrapper"}>
        {/* Drawing Area */}
        {forms.map((form, i) => (
          <Draggable key={i} form={form}/>
        ))}
        {/* Drawing Area */}
        <div style={{ position: "absolute", bottom: 0, left: 0 }}>
          {!props?.disabled && <Tag color="red">margini sicuri</Tag>}
        </div>
      </div>
      </div>
  );
};

export default SheetDraw;