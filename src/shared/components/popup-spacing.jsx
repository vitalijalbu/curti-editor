import React from "react";
import { Row, Col, Button, List, Modal, Alert, Typography, InputNumber, Divider, Card } from "antd";
import { IconRulerMeasure } from "@tabler/icons-react";
const { Title, Text } = Typography;
const arrayChars = require("@/data/static.chars.json");

const PopupSpacing = ({ opened, toggle, fontFamily }) => {
  const WORD_DEMO = "Ciao qui";

  // Function to split a word into an array of letters
  const splitWord = (word) => {
    return word.split('').map((letter, i) => ({ letter, spacing: 0 }));
  };

  return (
    <Modal
      visible={opened} // Changed 'open' to 'visible'
      onCancel={toggle}
      width={"60%"}
      title={<><IconRulerMeasure/> Spaziatura caratteri</>}
      centered
      transitionName="ant-modal-slide-up"
      footer={[
        <Button key={0} onClick={toggle}>
          Chiudi
        </Button>,
        <Button key={1} type="primary" onClick={toggle}>
          Salva
        </Button>,
      ]}
    >
      
      <Row gutter={12}>
      <Col span={10}>
      <Alert type="info" message="Imposta spaziatura per ogni singolo carattere" />
        {WORD_DEMO.split(" ").map((word, i) => (
          <>
          <Title level={5}>{word}</Title>
            <List
              key={i}
              dataSource={splitWord(word)} // Split each word into an array of letters
              renderItem={(item, index) => (
                <List.Item key={index}>
                  <div>
                  {item.letter} 
                  </div>
                  <div>
                    <InputNumber defaultValue={1} addonAfter="mm"/> {/* InputNumber for custom spacing */}
                  </div>
                </List.Item>
              )}
            />
         </>
        ))}
         </Col>
        <Col span={14}>
          <Card style={{background: "#fafafa", color: "#111", textAlign: "center"}}>preview</Card></Col>
      </Row>
    </Modal>
  );
};

export default PopupSpacing;
