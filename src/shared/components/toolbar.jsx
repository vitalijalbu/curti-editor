import React from "react";
import { Button, Col, Popconfirm, Row, Space, Upload } from "antd";

const Toolbar = () => {
  return (
    <div>
      <Row justify={"space-between"}>
        <Col>
          <Space.Compact>
            <Button type="primary">Button</Button>

            <Button>Click to Upload</Button>

            <Button>Confirm</Button>
          </Space.Compact>
        </Col>
        <Col>
          <Space.Compact>
            <Button type="primary">Button</Button>

            <Button>Click to Upload</Button>

            <Button>Confirm</Button>
          </Space.Compact>
        </Col>
      </Row>
    </div>
  );
};

export default Toolbar;
