import React from "react";
import { Button, Col, Row, Space, Modal, message, Divider } from "antd";
const { confirm } = Modal;
import { IconDownload, IconPrinter, IconTrash } from "@tabler/icons-react";

const TopToolbar = () => {

    // Delete action
    const handleDeleteSession = () => {
      confirm({
        title: "Eliminare sessione?",
        transitionName: "ant-modal-slide-up",
        content: "Sei sicuro di voler eliminare la sessione? Tutti i dati verranno persi.",
        okText: "Elimina",
        cancelText: "Chiudi",
        async onOk() {
          try {
            const { data, error } = await deleteStdProduct(id);
            if (error) {
              message.error("Error deleting the product");
            } else {
              message.success("Product deleted successfully");
              setReload(reload + 1);
            }
          } catch (error) {
            message.error("An error occurred while deleting the product");
          }
        },
      });
    };  
    

  return (
    <div className="contain">
      <Row justify={"space-between"}>
        <Col style={{display: "flex", alignItems: "center"}}>
          <img src={"/logo.png"} className="site-logo" alt="Logo Curti"/>
        </Col>
        <Col span="16" style={{display: "flex", justifyContent: "end"}}>
          <Space split={<Divider type="vertical" />}>
            <Button danger icon={<IconTrash/>} onClick={handleDeleteSession}>Elimina</Button>
            <Button type="primary" icon={<IconPrinter />}>
              Stampa
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default TopToolbar;
