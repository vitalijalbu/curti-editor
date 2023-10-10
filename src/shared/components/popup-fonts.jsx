import React, { useState } from "react";
import { Modal, Button, List, Radio } from "antd";
import { IconCheckbox } from "@tabler/icons-react";
const fontsData = require("@/data/static.fonts.json");

const PopupFonts = ({ opened, toggle, data, onChange }) => {
  const [selected, setSelectedFont] = useState(null);

  console.log('selected', selected);
  
  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  };

  const handleSelect = () => {
    if (selected) {
      onChange(selected);
      toggle();
    }
  };

  return (
    <Modal
      open={opened}
      onCancel={toggle}
      width={"90%"}
      title="Seleziona Font"
      centered
      className="modal-fullscreen"
      transitionName="ant-modal-slide-up"
      footer={[
        <Button key={0} onClick={toggle}>
          Chiudi
        </Button>,
        <Button key={1} type="primary" onClick={handleSelect} icon={<IconCheckbox />} disabled={!selected}>
          Seleziona
        </Button>,
      ]}
    >
      <List
        grid={{
          gutter: 16,
          column: 3,
        }}
        itemLayout="horizontal"
        dataSource={fontsData}
        renderItem={(font, i) => (
          <List.Item key={i}>
            <Radio
              onChange={handleFontChange}
              value={font.code}
              checked={selected === font.code}
            >
              <h1 style={{ fontFamily: `"${font?.code}"`}} className="has-font">{font.fontFamily}</h1>
            </Radio>
          </List.Item>
        )}
      />
    </Modal>
  );
};

export default PopupFonts;
