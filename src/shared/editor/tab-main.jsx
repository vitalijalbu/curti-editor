import React from "react";
import { Collapse, Form, Input, Typography } from "antd";
const {Title} = Typography;


const { Panel } = Collapse;

const TabMain = () => {
  const data = [
    {
      id: "main",
      type: "text",
      title: "Testo",
      tabs: [
    {
      id: "textEditor",
      type: "text",
      title: "Testo",
      component: <Input.TextArea />
    },
    {
      id: "fontFamily",
      title: "Font",
      component: "demo"
    }
  ]
}, {
      id: "main",
      type: "text",
      title: "Colori",
      tabs: [
    {
      id: "textEditor",
      type: "text",
      title: "Testo",
      component: <Input.TextArea />
    }
  ]
}
  ];

  return (
    <div>
      {data.map((item, i) => (
        <>
        <Title level={3}>{item.title}</Title>
      <Collapse accordion>
        {item.tabs.map((item, i) => (
          <Panel header={item.title} key={i}>
            <Form.Item label={item.title} help="Inserisci testo">
              {item.component}
            </Form.Item>
          </Panel>
        ))}
      </Collapse>
      </>
        ))}
    </div>
  );
};

export default TabMain;
