import { Button, Divider, Tabs } from "antd";
import React from "react";
import TabMain from "@/shared/editor/tab-main";
import TabDimensions from "@/shared/editor/tab-dimensions";
import TabSettings from "@/shared/editor/tab-settings";

const Aside = () => {
  const items = [
    { label: (<Button type="text">Testi</Button>), key: "1", children: <TabMain /> },
    { label: (<Button type="text">Lapide</Button>), key: "2", children: <TabDimensions /> },
    { label: (<Button type="text">Impostazioni</Button>), key: "3", children: <TabSettings /> }
  ];

  return (
    <aside>
      <Tabs defaultActiveKey="1" items={items}/>
    </aside>
  );
};

export default Aside;
