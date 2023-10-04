import React from "react";
import { List, Select, Form, Input, Divider, Typography } from "antd";
const { Title, Text } = Typography;
import materials from "@/data/static.materials.json";
import finish from "@/data/static.finish.json";

const TabSettings = () => {
  
  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];
  return (
    <div>
            <Title level={5}>Impostazioni area di lavoro</Title>
      <Divider/>
       <List
    itemLayout="horizontal"
    dataSource={data}
    > 
      <List.Item>
        <List.Item.Meta
          title="Unità di misura"
        />
        <div className="list-actions">
         mm
          </div>
      </List.Item>
    </List>
    </div>
  );
};

export default TabSettings;
