// Index.jsx
import React from 'react';
import { Alert, Card, Divider, Form } from 'antd';
import Toolbar from '@/shared/components/toolbar';
import { useRecoilValue } from 'recoil';
import { formsState } from '@/store/index'; // Update the path

const Index = () => {
  const forms = useRecoilValue(formsState);
  console.log('👀 state-forms', forms)

  return (
    <div>
      <Card
        title="Anteprima lapide"
        extra={[
          <Toolbar key="toolbar" />,
        ]}
        actions={[
          <Alert
            key="alert"
            showIcon
            message="SCALA 1:10"
            description="1cm sullo schermo corrisponde a 10cm nella realtà"
            type="warning"
          />,
        ]}
      >
        <div id="headstone">
          {forms.map((form) => (
            <Form key={form.id} layout="vertical" name={`form-${form.id}`}>
              <p><strong>Label:</strong> {form.label}</p>
              {Object.entries(form.values).map(([key, value]) => (
                <p key={key}>
                  <strong>{key}:</strong> {value}
                </p>
              ))}
            </Form>
          ))}
        </div>
        <Divider />
      </Card>
    </div>
  );
};

export default Index;
