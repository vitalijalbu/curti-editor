import React, { useState } from "react";
import html2canvas from 'html2canvas';
import dayjs from 'dayjs';
import jsPDF from 'jspdf';
import { Button, Col, Row, Space, Modal, message, Divider, Spin, Alert } from "antd";
const { confirm } = Modal;
import { IconDownload, IconEyeShare, IconPrinter, IconTrash } from "@tabler/icons-react";
import { formState } from '@/store/index'; // Update the path
import { useRecoilState } from "recoil";
import PopupPreview from "./popup-preview";

const TopToolbar = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForms] = useRecoilState(formState);
  const [popup, setPopup] = useState(false);
  
  const togglePopup = () => {
    setPopup(!popup);
  };



    // Delete action
    const handleDeleteSession = () => {
      confirm({
        title: "Eliminare sessione?",
        transitionName: "ant-modal-slide-up",
        content: "Sei sicuro di voler eliminare la sessione? Tutti i dati verranno persi.",
        okText: "Elimina",
        okType: "danger",
        cancelText: "Chiudi",
        async onOk() {
          try {
              setForms([]);
              message.success("Progetto pulito");
              setLoading(false);
              //setReload(reload + 1);
          } catch (error) {
            message.error("An error occurred while deleting the product");
          }
        },
      });
    };  
    
    // Print Function
    const printToPdf = async () => {
      const pdf = new jsPDF({
        format: 'a3',
        orientation: 'landscape',
      });
    
      const contentDiv = document.getElementById('sheet-print');
    
      if (contentDiv) {
        setLoading(true);
    
        try {
          // Use html2canvas to capture the content as an image
          const canvas = await html2canvas(contentDiv, {
            scale: 2, // You can adjust the scale to improve the quality of the image
          });
    
          // Convert the canvas image to a data URL
          const imgData = canvas.toDataURL('image/png');
    
          // Add the image to the PDF
          pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
    
          // Format the date as YYYYMMDD-HHMMSS
          const formattedDate = dayjs().format('DD-MM-YYYY');
    
          // Save or open the PDF
          pdf.save(`CURTI-STAMPA-CARATTERI-${formattedDate}.pdf`);
        } catch (error) {
          console.error('Error capturing content as an image:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
        console.error('Div not found');
      }
    };
    

  return (
    <>
     {popup && <PopupPreview opened={popup} toggle={togglePopup} />}
    <div className="contain">
      <Row justify={"space-between"} align={"middle"}>
        <Col>
          <img src={"/logo.png"} className="site-logo" alt="Logo Curti"/>
        </Col>        
        <Col>
          <Alert message="Scala 1:10" showIcon/>
        </Col>
        <Col style={{justifyContent: "end"}}>
          <Space split={<Divider type="vertical" />}>
            <Button key={0} type="link" icon={<IconTrash/>} onClick={handleDeleteSession}>Ricomincia</Button>
            <Button key={2} type="primary" icon={<IconPrinter />} onClick={() => printToPdf()} disabled={form.length <= 0} loading={loading}>
              Stampa
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
    </>
  );
};

export default TopToolbar;
