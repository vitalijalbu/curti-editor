// TextForm.jsx
import React, { useEffect, useState } from "react";
import { Row, Col, Space, Button, Form, Input, InputNumber, Radio, Checkbox, Select } from "antd";
import PopupCharacters from "../components/popup-chars";
import {
  IconAlignCenter,
  IconAlignLeft,
  IconAlignRight,
  IconCodeAsterix,
} from "@tabler/icons-react";
import SelectFont from "./select-font";

const TextForm = ({ formId, initialValues, onValuesChange }) => {
  const [form] = Form.useForm();
  const formBody = Form.useWatch([], { form, preserve: true });
  console.log("👀 useWatch", formBody);
  //states
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  useEffect(() => {
    onValuesChange(formBody);
    console.log('🚀 sending-form-to-parent');
  }, [formBody]);

  return (
    <>
      {popup && <PopupCharacters opened={popup} toggle={togglePopup} fontFamily={form.getFieldValue('fontFamily')}/>}

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
          <Input.TextArea allowClear autoFocus={true} placeholder="Inserisci il testo qui" rows="3" />
        </Form.Item>
        <Button block type="link" onClick={() => togglePopup()} icon={<IconCodeAsterix />}>
            Caratteri speciali
          </Button>
        <Form.Item label="Font" name="fontFamily" initialValue={"3900"}>
          <SelectFont name="fontFamily" onChange={(value) => form.setFieldValue("fontFamily", value)}/>
        </Form.Item>
        <Row gutter="16">
          <Col span="12">
            <Form.Item label="Grandezza caratteri" name="fontSize" initialValue={20}>
              <InputNumber addonAfter="cm" />
            </Form.Item>
          </Col>
          <Col span="12">
            <Form.Item label="Spaziatura caratteri" name="letterSpacing" initialValue={0}>
              <InputNumber addonAfter="cm" />
            </Form.Item>
          </Col>
          <Col span="12">
            <Form.Item label="Allineamento testo" name="textAlign">
              <Radio.Group initialValue="left" size="large">
                <Radio.Button value="left">
                  <IconAlignLeft />
                </Radio.Button>
                <Radio.Button value="center">{<IconAlignCenter />}</Radio.Button>
                <Radio.Button value="right">{<IconAlignRight />}</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default TextForm;
