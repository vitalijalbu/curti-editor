import React, { useState } from "react";
import { Modal, Button, List, Radio } from "antd";
import { IconCheckbox } from "@tabler/icons-react";
const fontsData = require("@/data/static.fonts.json");

const PopupPreview = ({ opened, toggle, reload, data, onChange }) => {

  return (
    <Modal
      open={opened}
      onCancel={toggle}
      width={"100%"}
      title="Anteprima stampa"
      centered
      maskClosable={false}
      className="modal-fullscreen full"
      transitionName="ant-modal-slide-up"
      footer={[
        <Button key={0} onClick={toggle}>
          Chiudi
        </Button>
      ]}
    >
    preview doc here
    </Modal>
  );
};

export default PopupPreview;
