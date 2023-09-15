import { Button, Divider, Tabs } from "antd";
import React from "react";
import TabMain from "shared/editor/tab-main";

const Aside = () => {
  const items = [
    {
      key: "1",
      label: "Generale",
      children: <TabMain/>,
    }
  ];

  return (
    <aside>
      <Tabs defaultActiveKey="1" items={items}/>
     
    </aside>
  );
};

export default Aside;
