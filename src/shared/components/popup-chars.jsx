import React, { useState, useEffect, useCallback } from "react";
import {
  Tag,
  Divider,
  Button,
  Row,
  Col,
  Form,
  Modal,
  Spin,
  Input,
  message,
} from "antd";
const { confirm } = Modal;
import {
  IconEye,
  IconPencil,
  IconTrash,
  IconAlertCircle,
  IconTriangleSquareCircle,
  IconPlus,
  IconCheckbox,
} from "@tabler/icons-react";

const PopupCharacters = ({ opened, toggle, reload, data }) => {


  return (
    <Modal
      open={opened}
      onCancel={toggle}
      size={"large"}
      title="Caratteri speciali"
      centered
      maskClosable={false}
      transitionName="ant-modal-slide-up"
      footer={[
        <Button key={0} onClick={toggle}>
          Chiudi
        </Button>
      ]}
    >

    </Modal>
  );
};

export default PopupCharacters;