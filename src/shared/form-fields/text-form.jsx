// TextForm.jsx
import React, { useEffect } from 'react';
import { Form, Input, InputNumber } from 'antd';

const TextForm = ({ formId, initialValues, onValuesChange }) => {
  const [form] = Form.useForm();
  const formBody = Form.useWatch([], { form, preserve: true });

  console.log("👀 useWatch", formBody);

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

      <Form.Item label="Grandezza testo" name="fontSize" initialValue={25}>
        <InputNumber addonAfter="mm" />
      </Form.Item>

      <Form.Item label="Spaziatura lettere" name="letterSpacing">
        <InputNumber addonAfter="mm" />
      </Form.Item>
    </Form>
  );
};

export default TextForm;
