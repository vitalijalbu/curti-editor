import React from "react";
import { List, Select, Form, Input, InputNumber, Typography, Divider } from "antd";
const { Title, Text } = Typography;
import materials from "@/data/static.materials.json";
import finish from "@/data/static.finish.json";

const TabDimensions = () => {
  
  const data = [
    {
      id: "marginTop",
      type: "number",
      title: 'Spaziatura sopra',
    },
    {
      id: "marginBottom",
      type: "number",
      title: 'Spaziatura sotto',
    }, 
    {
      id: "marginLeft",
      type: "number",
      title: 'Spaziatura sinistra',
    },
    {
      id: "marginRight",
      type: "number",
      title: 'Spaziatura destra',
    }
  ];

  return (
    <div>
        <Title level={5}>Impostazioni lapide</Title>
      <Divider/>
       <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, i) => (
      <List.Item key={i}>
      <List.Item.Meta
        title={item.title}
        description="Inserisci testo"
      />
      <div className="list-actions">
          <InputNumber allowClear addonAfter="cm"/>
        </div>
    </List.Item>
    )}
  />
    </div>
  );
};

export default TabDimensions;
