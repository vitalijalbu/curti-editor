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

  console.log('collapse', props?.collapse);

  return (
    <aside>
      {props?.collapse === false ?
      <Tabs items={items} />
      : null}
    </aside>
  );
};

export default Aside;
