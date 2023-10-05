import React, { useRef, useEffect } from 'react';
import { Alert, Card, Divider, Form } from 'antd';
import Moveable from 'react-moveable';
import Toolbar from '@/shared/components/toolbar';
import { useRecoilValue } from 'recoil';
import { formState } from '@/store/index';

const Index = () => {
  const forms = useRecoilValue(formState);

  const moveableRef = useRef(null);


  useEffect(() => {
    if (moveableRef.current) {
      const moveable = new Moveable();

      moveableRef.current.addEventListener('click', (e) => {
        moveable.target = e.target;
      });

      return () => {
        moveable.destroy();
      };
    }
  }, []);

  return (
    <div>
      <Card
        title="Anteprima lapide"
        extra={[
          <Toolbar />,
        ]}
        actions={[
          <Alert
            showIcon
            message="SCALA 1:10"
            description="1cm sullo schermo corrisponde a 10cm nella realtà"
            type="warning"
          />,
        ]}
      >
        <div id="headstone">
          {forms.map((form) => (
            <div key={form.id}>
<div ref={moveableRef} style={{ position: 'relative', display: 'inline-block' }}>
                <h1>{form.data.text}</h1>
              </div>
              {Object.entries(form.data).map(([field, value], i) => (
                <p key={i}>
                  <strong>{field}:</strong> {value}
                </p>
              ))}
            </div>
          ))}
        </div>
        <Divider />
      </Card>
    </div>
  );
};

export default Index;
