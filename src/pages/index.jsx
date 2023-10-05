import React, { useRef, useEffect } from 'react';
import { Alert, Card, Divider } from 'antd';
import Moveable from 'react-moveable';
import { flushSync } from "react-dom";
import Toolbar from '@/shared/components/toolbar';
import { useRecoilValue } from 'recoil';
import { formState } from '@/store/index';

const Index = () => {
  const forms = useRecoilValue(formState);

  const targetRef = React.useRef(null);

  /*useEffect(() => {
    if (targetRef.current) {
      const moveable = new Moveable();

      moveable.target = targetRef.current; // Set the target element

      targetRef.current.addEventListener('click', (e) => {
        moveable.target = e.target;
      });

    }
  }, []);*/

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
            <div key={form.id} ref={targetRef} style={{position: "relative" }}>
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
              target={targetRef} // Specify the target element
                flushSync={flushSync}
              />
              <div className="target" ref={targetRef}><h1>{form.data.text}</h1></div>


            </div>
          ))}
        </div>
        <Divider />
      </Card>
    </div>
  );
};

export default Index;
