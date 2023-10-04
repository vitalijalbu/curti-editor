import React from "react";
import { Collapse, Form, Input, Typography } from "antd";
import TextForm from "@/shared/form-fields/text-form";
import { CaretRightOutlined } from "@ant-design/icons";
const {Title} = Typography;


const { Panel } = Collapse;

const TabMain = () => {
  const items = [
    
    {
      id: "1",
      label: "Testo 1",
      children: <TextForm key={0}/>
    },
      {
        id: "2",
        label: "Testo 2",
        children: <TextForm key={1}/>
      }
  ];

  return (
    <div>
      <Collapse ghost bordered={false} expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />} defaultActiveKey={['1']} items={items}/>
    </div>
  );
};

export default TabMain;
