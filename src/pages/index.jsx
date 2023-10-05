import React, { useRef, useEffect } from 'react';
import { Alert, Card, Divider } from 'antd';
import Moveable from 'react-moveable';
import { flushSync } from "react-dom";
import Toolbar from '@/shared/components/toolbar';
import { useRecoilValue } from 'recoil';
import { formState } from '@/store/index';

const Index = () => {
  const forms = useRecoilValue(formState);

  const moveableRef = useRef(null);

  useEffect(() => {
    if (moveableRef.current) {
      const moveable = new Moveable();

      moveable.target = moveableRef.current; // Set the target element

      moveableRef.current.addEventListener('click', (e) => {
        moveable.target = e.target;
      });

    }
  }, []);

  return (
    <div>
      <Card
        title="Anteprima lapide"
        extra={[
          <Toolbar key="toolbar" />,
        ]}
        actions={[
          <Alert
            showIcon
            message="SCALA 1:10"
            description="1cm sullo schermo corrisponde a 10cm nella realtà"
            type="warning"
            key="alert"
          />,
        ]}
      >
        <div id="headstone">
          {forms.map((form) => (
            <div key={form.id} ref={moveableRef} style={{position: "relative" }}>
              <Moveable
                resizable={true}
                moveable={true}
                container={null}
                origin={true}
                throttleDrag={0}
                keepRatio={true}
                throttleResize={0}
                scalable={true}
                throttleScale={0}
                onResizeStart={({ target , clientX, clientY}) => {
                    console.log("onResizeStart", target);
                }}
                onDragStart={({ target, clientX, clientY }) => {
                  console.log("onDragStart", target);
              }}
                target={moveableRef.current} // Specify the target element
                flushSync={flushSync}
              >
               <div> {form.data.text}</div>
              </Moveable>

            </div>
          ))}
        </div>
        <Divider />
      </Card>
    </div>
  );
};

export default Index;
