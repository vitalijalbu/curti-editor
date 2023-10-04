import { Button, Tabs } from "antd";
import React from "react";
import TabMain from "@/shared/editor/tab-main";
import TabDimensions from "@/shared/editor/tab-dimensions";
import TabSettings from "@/shared/editor/tab-settings";
import {
  IconAlphabetLatin,
  IconAspectRatio,
  IconChevronLeft,
  IconChevronRight,
  IconSettings,
  IconSortAZ,
} from "@tabler/icons-react";

const Aside = (props) => {
  const items = [
    {
      key: "1",
      label: (
        <Button type="text" icon={<IconSortAZ />}>
          Testi
        </Button>
      ),
      children: <TabMain />,
    },
    {
      key: "2",
      label: (
        <Button type="text" icon={<IconAspectRatio />}>
          Lapide
        </Button>
      ),
      children: <TabDimensions />,
    },
    {
      key: "3",
      label: (
        <Button type="text" icon={<IconSettings />}>
          Impostazioni
        </Button>
      ),
      children: <TabSettings />,
    },
  ];

  return (
    <aside>
      <div
        style={{
          position: "absolute",
          right: -10,
          top: 0,
          zIndex: 1000,
          background: "#fff",
        }}
      >
        <Button
          shape="circle"
          size="small"
          onClick={props.collapse} // Assuming props.collapse is a function that toggles the collapse state
          icon={props.collapse ? <IconChevronLeft /> : <IconChevronRight />}
        />
      </div>
      <Tabs items={items} />
    </aside>
  );
};

export default Aside;
