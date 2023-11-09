// TextForm.jsx
import React, { useEffect, useState } from "react";
import { Row, Col, Space, Button, Form, Input, InputNumber, Radio, Checkbox, Select, Tooltip } from "antd";
import PopupCharacters from "@/shared/components/popup-chars";
import {
  IconAlignCenter,
  IconAlignLeft,
  IconAlignRight,
  IconCodeAsterix,
  IconMinus,
  IconPlus,
  IconRulerMeasure,
} from "@tabler/icons-react";
import SelectFont from "./select-font";
import PopupSpacing from "@/shared/components/popup-spacing";

const TextForm = ({ formId, initialValues, onValuesChange }) => {
  const [form] = Form.useForm();
  const formBody = Form.useWatch([], { form, preserve: true });
  //console.log("👀 useWatch", formBody);
  //states
  const [popup, setPopup] = useState(false);
  const [popupSpacing, setPopupSpacing] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };  
  
  const togglePopupSpacing = () => {
    setPopupSpacing(!popupSpacing);
  };


  useEffect(() => {
    onValuesChange(formBody);
    //console.log('🚀 sending-form-to-parent');
  }, [formBody]);

  
  return (
    <>
      {popup && <PopupCharacters opened={popup} toggle={togglePopup} fontFamily={form.getFieldValue('fontFamily')}/>}
      {popupSpacing && <PopupSpacing opened={popupSpacing} toggle={togglePopupSpacing} fontFamily={form.getFieldValue('letterSpace')}/>}

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
          autoFocus
          rules={[
            {
              required: true,
              message: "Campo richiesto",
            },
          ]}
          help={  <a href="#" onClick={() => togglePopup()}>
          <IconCodeAsterix /> Caratteri speciali
        </a>}
        >
          <Input allowClear autoFocus={true} placeholder="Inserisci il testo qui"/>
          </Form.Item>
      
          
          <Row gutter={12}>
          <Col span={12} md={24} sm={24}>
        <Form.Item label="Carattere" name="fontFamily" initialValue={"3900"}>
          <SelectFont name="fontFamily" onChange={(value) => form.setFieldsValue({"fontFamily": value?.code, "fontSize": value?.fontSize})}/>
        </Form.Item>
        </Col>  
        </Row>
        <Row gutter={12}>
        <Col lg={12} md={24} sm={24}>
        <Form.Item label="Posizione" name="textAlign" initialValue={'center'}>
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="left">
              <IconAlignLeft />
            </Radio.Button>
            <Radio.Button value="center">{<IconAlignCenter />}</Radio.Button>
            <Radio.Button value="right">{<IconAlignRight />}</Radio.Button>
          </Radio.Group>
        </Form.Item>
          </Col>
          <Col lg={12} md={24} sm={24}>
            <Form.Item label="Spaziatura caratteri" name="letterSpacing" initialValue={1}
            help={  <a href="#" onClick={() => togglePopupSpacing()}>
            <IconRulerMeasure /> Avanzate
          </a>}
          >
              <InputNumber
                type="number"
                value={form.getFieldValue("letterSpacing")}
                addonAfter="mm"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default TextForm;
