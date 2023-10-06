import React from "react";
import { List, Select, Form, Input, Divider, Typography, Alert } from "antd";
const { Title, Text } = Typography;
import materials from "@/data/static.materials.json";
import finish from "@/data/static.finish.json";
import HelpBox from "@/shared/components/help-box";


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
            <Alert message="Impostazioni area di lavoro"/>
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
         cm
          </div>
      </List.Item>
    </List>
    <HelpBox/>
    </div>
  );
};

export default TabSettings;
