/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Dialog, DialogBody, DialogFooter, NumericInput } from '@blueprintjs/core';

// Help sections
const Popup = ({ opened, toggle }) => {
  const WORD_DEMO = "Ciao qui";

  // Function to split a word into an array of letters
  const splitWord = (word) => {
    return word.split('').map((letter, i) => ({ letter, spacing: 0 }));
  };

  return (
    <Dialog title="Spaziatura caratteri" icon="horizontal-inbetween" isOpen={opened} onClose={toggle}>
      <DialogBody>
        {WORD_DEMO.split(" ").map((word, i) => (
          <div key={i}>
            <h3>{word}</h3>
            <ul>
              {splitWord(word).map((item, index) => (
                <li key={index}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ marginRight: '10px' }}>{item.letter}</div>
                    <NumericInput defaultValue={1} minorStepSize={0.1} stepSize={1} min={0} max={10} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </DialogBody>
      <DialogFooter actions={[
        <Button key={0} text="Chiudi" onClick={toggle} />,
        <Button key={1} intent="primary" text="Salva" onClick={toggle} />
    ]}/>
    </Dialog>
  );
};

export default Popup;
