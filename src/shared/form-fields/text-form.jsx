// TextForm.jsx
import React from 'react';
import { Form, Input, InputNumber } from 'antd';

const TextForm = ({ formId, initialValues, onValuesChange }) => {
  const [form] = Form.useForm();

  // Set initial values when the component mounts
  React.useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [form, initialValues]);

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{text: "esempio", fontSize: 25}}
      onValuesChange={(changedValues) => onValuesChange(formId, changedValues)}
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

      <Form.Item label="Grandezza testo" name="fontSize">
        <InputNumber addonAfter="mm" />
      </Form.Item>

      <Form.Item label="Spaziatura lettere" name="letterSpacing">
        <InputNumber addonAfter="mm" />
      </Form.Item>
    </Form>
  );
};

export default TextForm;
