import React, { useState } from "react";
import { Button, Collapse, Divider, Form, Input, Typography } from "antd";
const { Title, Text } = Typography;
import TextForm from "@/shared/form-fields/text-form";
import { CaretRightOutlined } from "@ant-design/icons";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import _ from "lodash";


const { Panel } = Collapse;

const TabMain = () => {
  const [items, setItems] = useState([
    {
      id: "1",
      label: "Testo 1",
      children: <TextForm key={0} />,
    },
    {
      id: "2",
      label: "Testo 2",
      children: <TextForm key={1} />,
    },
  ]);

  const handleAddRow = () => {
    const newItem = {
      id: _.uniqueId(), // Using lodash to generate a unique ID
      label: `Testo ${items.length + 1}`,
      children: <TextForm key={items.length} />,
    };

    setItems([...items, newItem]);
  };

  const handleRemoveRow = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div>
      <Title level={5}>Modifica i testi sulla lapide</Title>
      <Divider/>
      <Collapse
        bordered={false}
        style={{background: "#fff"}}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        defaultActiveKey={["1"]}
      >
        {items.map((item) => (
          <Panel
            key={item.id}
            header={item.label}
            extra={
              <Button
                danger
                type="text"
                icon={<IconTrash/>}
                onClick={() => handleRemoveRow(item.id)}
              >
                Elimina riga
              </Button>
            }
          >
            {item.children}
          </Panel>
        ))}
      </Collapse>
      {/* Add new line */}
      <Divider>o</Divider>
      <Button block type="dashed" icon={<IconPlus />} onClick={handleAddRow}>
        Aggiungi riga
      </Button>
    </div>
  );
};

export default TabMain;
