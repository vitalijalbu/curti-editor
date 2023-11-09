import React from "react";
import { List, Select, Form, Input, InputNumber, Typography, Divider, Alert } from "antd";
const { Title, Text } = Typography;
import materials from "@/data/static.materials.json";
import finish from "@/data/static.finish.json";
import Link from "next/link";
import HelpBox from "@/shared/components/help-box";

const TabDimensions = () => {
  const [form] = Form.useForm();
  const formBody = Form.useWatch([], { form, preserve: true });
  console.log("👀 dimensions", formBody);


  const data = [
    {
      id: "lenght",
      type: "number",
      default: 80,
      title: 'Larghezza lapide',
    },
    {
      id: "width",
      type: "number",
      default: 60,
      title: 'Altezza lapide',
    }
  ];

  return (
    <div>
       <Alert showIcon message="Impostazioni e dimensioni lapide" type="warning"/>
      <Divider/>
      <Form form={form} name="form-dimensions">
       <List
       key={0}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, i) => (
      <List.Item key={i}>
      <List.Item.Meta
        title={item.title}
      />
      <div className="list-actions">
          <Form.Item name={item.id} initialValue={item.default}>
            <InputNumber min={0} max={100000} type="number" allowClear addonAfter="cm" disabled={item?.disabled || false}/>
          </Form.Item>
        </div>
    </List.Item>
    )}
  />
</Form>
<HelpBox/>
    </div>
  );
};

export default TabDimensions;
