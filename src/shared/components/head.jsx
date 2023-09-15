import React from "react";
import { Button, Col, Row, Space } from "antd";
import { IconDownload } from "@tabler/icons-react";

const Header = () => {
  return (
    <div className="container">
      <Row justify={"space-between"}>
        <Col>CURTI</Col>
        <Col>
          <Space>
            <Button type="primary" icon={<IconDownload />}>
              Esporta
            </Button>

            <Button>Continua</Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
