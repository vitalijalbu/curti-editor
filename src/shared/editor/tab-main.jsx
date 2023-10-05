// TabMain.jsx
import React from 'react';
import _ from 'lodash';
import { Button, Collapse, Divider, Typography } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { IconPlus, IconTrash } from '@tabler/icons-react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { formState } from '@/store/index'; // Update the path
import TextForm from '../form-fields/text-form';

const { Title } = Typography;
const { Panel } = Collapse;

const TabMain = () => {
  const forms = useRecoilValue(formState); // useRecoilValue should work with the atom name
  const [formsState, setFormsState] = useRecoilState(formState);

  const handleAddRow = () => {
    const newForm = {
      id: forms.length,
      label: `Testo ${forms.length + 1}`,
      values: {}, // Initialize an empty values object
    };

    setFormsState([...forms, newForm]);
  };

  const handleRemoveRow = (id) => {
    const updatedForms = forms.filter((form) => form.id !== id);
    setFormsState(updatedForms);
  };

  const handleFormValuesChange = (formId, changedValues) => {
    setFormsState((prevForms) =>
      prevForms.map((prevForm) =>
        prevForm.id === formId
          ? { ...prevForm, values: { ...prevForm.values, ...changedValues } }
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
        defaultActiveKey={['1']}
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
              initialValues={form.values}
              onValuesChange={(changedValues) =>
                handleFormValuesChange(form.id, changedValues)
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
