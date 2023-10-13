// TabMain.jsx
import React from 'react';
import { Alert, Button, Collapse, Divider, Typography } from 'antd';
const { Title } = Typography;
const { Panel } = Collapse;
import { CaretRightOutlined } from '@ant-design/icons';
import { IconPlus, IconTrash } from '@tabler/icons-react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { editorState } from '@/store/index'; // Update the path
import TextForm from '../form-fields/text-form';


const TabMain = () => {
  const forms = useRecoilValue(editorState);
  const [formState, setFormState] = useRecoilState(editorState);
  const [activeKeys, setActiveKeys] = React.useState(1);
  //console
  console.log(JSON.stringify(forms))

  const handleAddRow = () => {
    const newForm = {
      id: forms.length,
      label: `Testo ${forms.length + 1}`,
      data: {}, // Initialize an empty values object
    };
     // Close all existing panels and open the new one
      setActiveKeys(newForm.id);
      setFormState([...forms, newForm]);
  };

  const handleRemoveRow = (id) => {
    const updatedForms = forms.filter((form) => form.id !== id);
    setFormState(updatedForms);
  };

  // Set forms Data State
  const handleFormValuesChange = (values, formId) => {
    //console.log('parent-component-form-changed', values);

    setFormState((prevForms) =>
      prevForms.map((prevForm) =>
        prevForm.id === formId
          ? { ...prevForm, data: values }
          : prevForm
      )
    );
  };


    // Add this function to check if any form has empty data{text:}
    const isAnyFormEmpty = () => {
      return forms.some((form) => !form.data || !form.data.text);
    };


  return (
    <div>
      <Alert showIcon message="Modifica i testi sulla lapide"  type="warning"/>
      <Divider />
      <Collapse
        bordered={false}
        style={{ background: '#fff' }}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        onChange={(key) => setActiveKeys(key)}
        onClick={(key) => setActiveKeys(key)}
        activeKey={activeKeys}
      >
        {forms.map((form) => (
          <Panel
            key={form.id}
            header={form.label}
            extra={
              <Button
                danger
                type="text"
                icon={<IconTrash />}
                onClick={() => handleRemoveRow(form.id)}
              >
                Rimuovi
              </Button>
            }
          >
            <TextForm
              formId={form.id}
              initialValues={form.data}
              onValuesChange={(values) =>
                handleFormValuesChange(values, form.id)
              }
            />
          </Panel>
        ))}
      </Collapse>
      {/* Add new line */}
      <Divider />
      <Button block type="dashed" icon={<IconPlus />} onClick={handleAddRow} disabled={isAnyFormEmpty()}>
        Aggiungi riga
      </Button>
    </div>
  );
};

export default TabMain;
