import React, { useState } from "react";
import { Modal, Button, List, Radio } from "antd";
import { IconCheckbox } from "@tabler/icons-react";
const fontsData = require("@/data/static.fonts.json");

const PopupFonts = ({ opened, toggle, reload, data, onChange }) => {
  const [selectedFont, setSelectedFont] = useState("3900");

  console.log('selectedFont', selectedFont);
  
  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  };

  const handleSelect = () => {
    if (selectedFont) {
      onChange(selectedFont);
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
      maskClosable={false}
      className="modal-fullscreen"
      transitionName="ant-modal-slide-up"
      footer={[
        <Button key={0} onClick={toggle}>
          Chiudi
        </Button>,
        <Button key={1} type="primary" onClick={handleSelect} icon={<IconCheckbox />}>
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
              checked={selectedFont === font.code}
            >
              <h1 style={{ fontFamily: `"${font?.code}"`, }} className="has-font">{font.fontFamily}</h1>
            </Radio>
          </List.Item>
        )}
      />
    </Modal>
  );
};

export default PopupFonts;
