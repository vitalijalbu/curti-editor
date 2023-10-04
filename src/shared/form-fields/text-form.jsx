import React from "react";
import { Form, Input, InputNumber } from "antd";
import _ from "lodash";
import SelectFont from "./select-font";
import { useRecoilState } from 'recoil';
import { formValuesState } from '@/store/index'; // Update the path

const TextForm = (props) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useRecoilState(formValuesState);

  const saveRecoilState = (changedValues) => {
    setFormValues({ ...formValues, ...changedValues });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onValuesChange={(changedValues) => saveRecoilState(changedValues)}
    >
      <Form.Item
        label="Testo"
        name="text"
        rules={[
          {
            required: true,
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

      <Form.Item name="fontFamily" label="Seleziona carattere">
        <SelectFont />
      </Form.Item>
    </Form>
  );
};

export default TextForm;
