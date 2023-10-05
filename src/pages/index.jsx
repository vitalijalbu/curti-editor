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
                container={document.body}
                target={moveableRef.current} // Specify the target element
                flushSync={flushSync}
              >
               <div style={{height: "60px"}}> <h1>{form.data.text}</h1></div>
              </Moveable>
              <h1>{form.data.text}</h1>
            </div>
          ))}
        </div>
        <Divider />
      </Card>
    </div>
  );
};

export default Index;
