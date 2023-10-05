// TabMain.jsx
import React from 'react';
import { Button, Collapse, Divider, Typography } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { IconPlus, IconTrash } from '@tabler/icons-react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { formState } from '@/store/index'; // Update the path
import TextForm from '../form-fields/text-form';

const { Title } = Typography;
const { Panel } = Collapse;

const TabMain = () => {
  const forms = useRecoilValue(formState);
  const [formsState, setFormsState] = useRecoilState(formState);
  const [activeKeys, setActiveKeys] = React.useState([1]);

  console.log('activeKeys', activeKeys);

  const handleAddRow = () => {
    const newForm = {
      id: forms.length,
      label: `Testo ${forms.length + 1}`,
      data: {}, // Initialize an empty values object
    };
     // Close all existing panels and open the new one
     setActiveKeys([newForm.id]);
      setFormsState([...forms, newForm]);
  };

  const handleRemoveRow = (id) => {
    const updatedForms = forms.filter((form) => form.id !== id);
    setFormsState(updatedForms);
  };

  // Set forms Data State
  const handleFormValuesChange = (values, formId) => {
    //console.log('parent-component-form-changed', values);

    setFormsState((prevForms) =>
      prevForms.map((prevForm) =>
        prevForm.id === formId
          ? { ...prevForm, data: values }
          : prevForm
      )
    );
  };

  return (
    <div>
      <Title level={5}>Modifica i testi sulla lapide</Title>
      <Divider />
      <Collapse
        bordered={false}
        style={{ background: '#fff' }}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        activeKey={activeKeys}
        //onChange={(keys) => setActiveKeys(keys)}
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
                Elimina riga
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
      <Button block type="dashed" icon={<IconPlus />} onClick={handleAddRow}>
        Aggiungi riga
      </Button>
    </div>
  );
};

export default TabMain;
