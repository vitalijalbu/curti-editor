import React from "react";
import { List, Select, Form } from "antd";
import materials from "data/static.materials.json";
import finish from "data/static.finish.json";

const SelectFont = () => {
  
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
          title="Materiale"
          description="Seleziona materiale"
        />
        <div className="list-actions">
          <Select options={materials}/>
          </div>
      </List.Item>  
      <List.Item>
        <List.Item.Meta
          title="Finitura"
          description="Seleziona finitura"
        />
        <div className="list-actions">
          <Form.Item name="material"><Select options={finish}/></Form.Item>
          </div>
      </List.Item>
    </List>
    </div>
  );
};

export default SelectFont;
