import { Button, Divider, Tabs } from "antd";
import React from "react";
import Tab1 from "shared/editor/tab-main";
import Tab2 from "shared/editor/tab-materials";

const Aside = () => {
  const items = [
    { label: (<Button type="text">Testo</Button>), key: "1", children: <Tab1 /> },
    { label: (<Button type="text">Materiale e finiture</Button>), key: "2", children: <Tab2 /> }
  ];

  return (
    <aside>
      <Tabs defaultActiveKey="1" items={items}/>
    </aside>
  );
};

export default Aside;
