import React from "react";
import { Collapse, Form, Input, Typography } from "antd";
import TextForm from "@/shared/form-fields/text-form";
const {Title} = Typography;


const { Panel } = Collapse;

const TabMain = () => {
  const data = [
    
    {
      id: "textEditor",
      type: "text",
      title: "Testo 1",
      component: <TextForm key={0}/>
    },
      {
        id: "textEditor",
        type: "text",
        title: "Testo 2",
        component: <TextForm  key={1}/>
      }
  ];

  return (
    <div>
      {data.map((item, i) => (
      <Collapse ghost defaultActiveKey={['1']}>
          <Panel header={item.title} key={i}>
            <Form.Item label={item.title} help="Inserisci testo">
              {item.component}
            </Form.Item>
          </Panel>
      </Collapse>
        ))}
    </div>
  );
};

export default TabMain;
