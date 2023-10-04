import React from 'react';
import _ from "lodash";
import { Button, Collapse, Divider, Typography } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { IconPlus, IconTrash } from '@tabler/icons-react';
import { useRecoilState } from 'recoil';
import { formsState } from '@/store/index'; // Update the path
import TextForm from '@/shared/form-fields/text-form';

const { Title } = Typography;
const { Panel } = Collapse;

const TabMain = () => {
  const [forms, setForms] = useRecoilState(formsState);

  const handleAddRow = () => {
    const newForm = {
      id: _.uniqueId(),
      label: `Testo ${forms.length + 1}`,
      children: <TextForm key={forms.length} />,
    };

    setForms([...forms, newForm]);
  };

  const handleRemoveRow = (id) => {
    const updatedForms = forms.filter((form) => form.id !== id);
    setForms(updatedForms);
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
            {form.children}
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
