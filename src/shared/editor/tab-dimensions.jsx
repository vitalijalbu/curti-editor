import React from "react";
import { List, Select, Form, Input, InputNumber, Typography, Divider, Alert } from "antd";
const { Title, Text } = Typography;
import materials from "@/data/static.materials.json";
import finish from "@/data/static.finish.json";
import Link from "next/link";
import HelpBox from "@/shared/components/help-box";

const TabDimensions = () => {
  
  const data = [
    {
      id: "lenght",
      type: "number",
      title: 'Larghezza lapide',
    },
    {
      id: "width",
      type: "number",
      title: 'Lunghezza lapide',
    }
  ];

  return (
    <div>
       <Alert message="Impostazioni e dimensioni lapide"/>
      <Divider/>
       <List
       key={0}
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

<HelpBox/>
    </div>
  );
};

export default TabDimensions;
