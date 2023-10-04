import React, { useState, useEffect } from "react";
import { Alert, Card, Divider, Form, Segmented } from "antd";
import Toolbar from "@/shared//components/toolbar";

const Index = () => {
  const [form] = Form.useForm();
  const formBody = Form.useWatch([], { form, preserve: true });
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(0);
  const [isFormChanged, setIsFormChanged] = useState(false);
  console.log("👀 useWatch", formBody);

  return (
    <div>
      <Card title="Anteprima lapide" extra={[<Toolbar />]}>
        <div id="headstone">
          <Form
            layout="vertical"
            name="form-bp"
            form={form}
            onValuesChange={() => setIsFormChanged(true)}
          >
            <p>contenuto qui</p>
          </Form>
        </div>
        <Divider />
        <Alert showIcon message="SCALA 2:1" type="warning" />
      </Card>
    </div>
  );
};

export default Index;