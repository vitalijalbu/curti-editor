import React from "react";
import { List, Select, Form, Input } from "antd";
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
       <List
    itemLayout="horizontal"
    dataSource={data}
    > 
      <List.Item>
        <List.Item.Meta
          title="Testo"
          description="Inserisci testo"
        />
        <div className="list-actions">
         demo
          </div>
      </List.Item>
    </List>
    </div>
  );
};

export default TabSettings;
