// Index.jsx
import React from 'react';
import _ from "lodash";
import { Alert, Card, Divider, Form } from 'antd';
import Toolbar from '@/shared/components/toolbar';
import { useRecoilValue } from 'recoil';
import { formsState, formValuesState } from '@/store/index'; // Update the path

const Index = () => {
  const forms = useRecoilValue(formsState);
  const formValues = useRecoilValue(formValuesState);

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
            <div key={form.id} layout="vertical" name={`form-${form.id}`}>
              <p>{formValues[form.id]?.text}</p>
              {/* Display other form values as needed */}
            </div>
          ))}
        </div>
        <Divider />
      </Card>
    </div>
  );
};

export default Index;
