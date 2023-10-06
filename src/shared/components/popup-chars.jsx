import React from "react";
import { Button, List, Modal, Alert, Typography } from "antd";
const { Title, Text } = Typography;
const arrayChars = require("@/data/static.chars.json");

const PopupCharacters = ({ opened, toggle, fontFamily }) => {

  console.log('chars--font-family', fontFamily);

  return (
    <Modal
      open={opened}
      onCancel={toggle}
      width={"60%"}
      title="Caratteri speciali"
      centered
      maskClosable={false}
      transitionName="ant-modal-slide-up"
      footer={[
        <Button key={0} onClick={toggle}>
          Chiudi
        </Button>,
      ]}
    >
      <Alert showIcon type="info" message="Clicca per copiare un carattere speciale da inserere nei tuoi testi" />
      <List
        grid={{
          gutter: 16,
          column: 6,
        }}
        itemLayout="horizontal"
        dataSource={arrayChars}
        renderItem={(option, i) => (
          <List.Item key={i}>
            <Title copyable 
          className="has-font"
          style={{
            fontFamily: `"${fontFamily}" !important`
          }}
        >
              {option}
            </Title>
          </List.Item>
        )}
      />
    </Modal>
  );
};

export default PopupCharacters;
