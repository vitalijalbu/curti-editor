import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import React from "react";

const Aside = () => {
  const items = [
    {
      key: "1",
      label: "Testo",
      children: "demo",
    },
    {
      key: "2",
      label: "Colori",
      children: <p>ww</p>,
    },
    {
      key: "3",
      label: "Altro",
      children: <p>ww</p>,
    },
  ];

  return (
    <aside>
      <Collapse
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        ghost
        bordered={false}
        items={items}
        showArrow
        accordion={true}
      />
    </aside>
  );
};

export default Aside;
