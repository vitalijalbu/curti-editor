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
       <Select
       options={[]}/>
    </div>
  );
};

export default SelectFont;
