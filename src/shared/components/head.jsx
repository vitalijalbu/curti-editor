import React from "react";
import { Button, Col, Row, Space, Popconfirm, message } from "antd";
import { IconDownload, IconTrash } from "@tabler/icons-react";
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
    <div className="container">
      <Row justify={"space-between"}>
        <Col style={{display: "flex", alignItems: "center"}}>
          <img src={img} className="site-logo" alt="Logo Curti"/>
        </Col>
        <Col span="16" style={{display: "flex", justifyContent: "end"}}>
          <Space>
            <Button type="primary" icon={<IconDownload />}>
              Esporta
            </Button>

            <Button>Continua</Button>
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={confirm}
              onCancel={cancel}
              okType="danger"
              okText="Sì"
              cancelText="No"
            >
            <Button danger icon={<IconTrash/>}>Elimina</Button>
            </Popconfirm>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
