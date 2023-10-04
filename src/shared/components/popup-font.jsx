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

const PopupFonts = ({ opened, toggle, reload, data }) => {


  return (
    <Modal
      open={opened}
      onCancel={toggle}
      width={"40%"}
      title={data?.id ? (
        <>
          Update the city - <mark>{data.name}</mark>
        </>
      ) : ("Add new city")}
      centered
      maskClosable={false}
      transitionName="ant-modal-slide-up"
      footer={[
        <Button key={0} onClick={toggle}>
          Close
        </Button>,
        <Button
          disabled={!formChanged}
          key={1}
          type="primary"
          htmlType="submit"
          form="form-city"

        >
          Save
        </Button>,
      ]}
    >
PopupFontsPopupFonts
    </Modal>
  );
};

export default PopupFonts;