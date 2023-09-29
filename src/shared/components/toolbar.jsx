import React from "react";
import { Button, Col, Popconfirm, Row, Space, Upload } from "antd";
import { IconEyeShare } from "@tabler/icons-react";

const Toolbar = () => {
  return (
    <div>
      <Row justify={"space-between"}>
        <Col>
          
        </Col>
        <Col>
          <Space.Compact>
            <Button icon={<IconEyeShare/>}>Anteprima</Button>
          </Space.Compact>
        </Col>
      </Row>
    </div>
  );
};

export default Toolbar;
