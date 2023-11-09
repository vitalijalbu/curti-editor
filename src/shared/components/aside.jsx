import { Button, Tabs } from "antd";
import React from "react";
import TabMain from "@/shared/partials/tab-main";
import TabDimensions from "@/shared/partials/tab-dimensions";
import TabSettings from "@/shared/partials/tab-settings";
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
    <aside style={{paddingBottom: "120px",}}>
      {props?.collapse === false ?
      <Tabs items={items} centered f/>
      : null}
    </aside>
  );
};

export default Aside;
