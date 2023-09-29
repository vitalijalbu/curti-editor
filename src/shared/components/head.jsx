import React from "react";
import { Button, Col, Row, Space, Popconfirm, message, Divider } from "antd";
import { IconDownload, IconPrinter, IconTrash } from "@tabler/icons-react";
import img from "assets/images/logo.png"

const Header = () => {
  const confirm = (e) => {
    console.log(e);
    message.success('Click on Yes');
  };
  const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
  };

  return (
    <div className="contain">
      <Row justify={"space-between"}>
        <Col style={{display: "flex", alignItems: "center"}}>
          <img src={img} className="site-logo" alt="Logo Curti"/>
        </Col>
        <Col span="16" style={{display: "flex", justifyContent: "end"}}>
          <Space split={<Divider type="vertical" />}>
            <Popconfirm
              title="Eliminare sessione?"
              description="Sei sicuro di voler eliminare la sessione? Tutti i dati verranno persi."
              onConfirm={confirm}
              onCancel={cancel}
              okType="danger"
              okText="Elimina"
              cancelText="Chiudi"
            >
            <Button danger icon={<IconTrash/>}>Elimina</Button>
            </Popconfirm>
            <Button type="primary" icon={<IconPrinter />}>
              Stampa
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
