import React from "react";
import { List, Select, Form, Input, InputNumber } from "antd";
import materials from "@/data/static.materials.json";
import finish from "@/data/static.finish.json";
import SelectFont from "./select-font";

const TextForm = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form} layout="vertical">

<Form.Item
      label="Testo"
      name="text"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Grandezza testo"
      name="text"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <InputNumber />
    </Form.Item>
    
    <Form.Item name="fontFamily" label="Seleziona carattere">
       <SelectFont/>
       </Form.Item>
    </Form>
  );
};

export default TextForm;
