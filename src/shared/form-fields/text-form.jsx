// TextForm.jsx
import React, { useEffect } from 'react';
import { Row, Col, Space, Button, Form, Input, InputNumber, Radio, Checkbox, Select } from 'antd';

const TextForm = ({ formId, initialValues, onValuesChange }) => {
  const [form] = Form.useForm();
  const formBody = Form.useWatch([], { form, preserve: true });

  //console.log("👀 useWatch", formBody);

  return (
    <Form
      form={form}
      layout="vertical"
      name="form-text"
      initialValues={initialValues}
      onValuesChange={() => onValuesChange(formBody)}
    >
      <Form.Item
        label="Testo"
        name="text"
        rules={[
          {
            required: true,
            message: 'Please input your text!',
          },
        ]}
      >
        <Input />
      </Form.Item>
<Row gutter="16">
<Col span="12">
<Form.Item label="Spaziatura lettere" name="letterSpacing">
        <InputNumber addonAfter="cm" />
      </Form.Item>
  </Col>
<Col span="12">
      <Form.Item label="Grandezza testo" name="fontSize" initialValue={25}>
        <InputNumber addonAfter="cm" />
      </Form.Item>
      </Col>
      </Row>
      <Form.Item label="Allineamento testo" name="textAlign">
      <Radio.Group defaultValue="left">
      <Radio.Button value="left">Sinistra</Radio.Button>
      <Radio.Button value="center">Centro</Radio.Button>
      <Radio.Button value="right">Destra</Radio.Button>
    </Radio.Group>
      </Form.Item> 
     
    </Form>
  );
};

export default TextForm;
