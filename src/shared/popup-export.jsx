/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import dayjs from "dayjs";
import { Button, Dialog, DialogBody, DialogFooter, RadioGroup, Radio } from '@blueprintjs/core';

// Help sections
const PopupExport = ({ opened, toggle, store }) => {
  const [loading, setLoading] = useState(false);
  const formattedDate = dayjs().format('DD-MM-YYYY');
  const [format, setFormat] = useState('A3');

  // Save file here
  const saveFile = async ()  => {
    setLoading(true);
    await store.saveAsPDF({ fileName: `CURTI-STAMPA-CARATTERI-${formattedDate}.pdf` });
    setLoading(false);
  }

  //Divide all in 2 pages

  return (
    <Dialog title="Esporta PDF" icon="document" isOpen={opened} onClose={toggle}>
      <DialogBody>
      <RadioGroup label="Seleziona foglio" onChange={(value)=>setFormat(value)} selectedValue={format}>
        <Radio label="Foglio A3" value="A3" />
        <Radio label="Foglio A4" value="A4" />
    </RadioGroup>
      </DialogBody>
      <DialogFooter actions={[
        <Button key={0} text="Chiudi" onClick={toggle} />,
        <Button key={1} intent="primary" text="Salva" loading={loading} onClick={saveFile} />
    ]}/>
    </Dialog>
  );
};

export default PopupExport;
