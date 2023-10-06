// TextForm.jsx
import React, { useEffect, useState } from "react";
import { Row, Col, Space, Button, Form, Input, InputNumber, Radio, Checkbox, Select } from "antd";
import PopupCharacters from "../components/popup-chars";
import { IconAbc, IconAlignCenter, IconAlignLeft, IconAlignRight, IconEyeShare } from "@tabler/icons-react";
import PopupFonts from "../components/popup-fonts";

const TextForm = ({ formId, initialValues, onValuesChange }) => {
  const [form] = Form.useForm();
  const [popup, setPopup] = useState(false);
  const [popupFonts, setPopupFonts] = useState(false);
  const formBody = Form.useWatch([], { form, preserve: true });

  const togglePopup = () => {
    setPopup(!popup);
  };

  console.log("👀 useWatch", formBody);

  return (
    <>
      {popup && <PopupCharacters opened={popup} toggle={togglePopup} />}
      {popupFonts && <PopupFonts 
      opened={popupFonts} 
      toggle={()=> setPopupFonts(!popupFonts)} 
      onChange={(value)=> form.setFieldValue('fontFamily', value)}/>}
      
      <Form
        form={form}
        layout="vertical"
        name="form-text"
        initialValues={initialValues}
        onValuesChange={() => onValuesChange(formBody)}
      >
        <Form.Item
          label="Testo"
          name="text"
          rules={[
            {
              required: true,
              message: "Campo richiesto",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Row gutter="16">
          <Col span="12">
            <Form.Item label="Spaziatura lettere" name="letterSpacing" initialValue={0}>
              <InputNumber addonAfter="cm" />
            </Form.Item>
          </Col>
          <Col span="12">
            <Form.Item label="Grandezza testo" name="fontSize" initialValue={25}>
              <InputNumber addonAfter="cm" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter="16">
          <Col span="12">
            <Form.Item label="Carattere" name="letterSpacing">
            <Button style={{ fontFamily: "Font 4402"}} onClick={()=> setPopupFonts(!popupFonts)} icon={<IconAbc />} block>
                Seleziona
              </Button> 
            </Form.Item>
          </Col>
          <Col span="12">
            <Form.Item label="Caratteri speciali">
              <Button onClick={() => togglePopup()} icon={<IconEyeShare />} block>
                Vedi
              </Button>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Allineamento testo" name="textAlign">
          <Radio.Group defaultValue="left">
            <Radio.Button value="left"><IconAlignLeft/></Radio.Button>
            <Radio.Button value="center">{<IconAlignCenter/>}</Radio.Button>
            <Radio.Button value="right">{<IconAlignRight/>}</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
    </>
  );
};

export default TextForm;
