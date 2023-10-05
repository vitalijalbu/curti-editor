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
            <div key={form.id} style={{position: "relative" }}>
              <div className="target" ref={targetRef}><h1>{form.data.text}</h1></div>

                <Moveable
                    target={targetRef}
                    draggable={true}
                    throttleDrag={1}
                    edgeDraggable={false}
                    resizable={true}
                    startDragRotate={0}
                    throttleDragRotate={0}
                    onDrag={e => {
                        e.target.style.transform = e.transform;
                    }}
                />
           
              

            </div>
          ))}
        </div>
        <Divider />
      </Card>
    </div>
  );
};

export default Index;
