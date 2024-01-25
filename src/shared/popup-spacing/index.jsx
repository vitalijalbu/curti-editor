// TextAlertButton.js
import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button } from '@blueprintjs/core';
import Popup from './popup';

const TextAlertButton = observer(({ store, element, elements }) => {
    const [popup, setPopup] = useState(false);
  return (
    <>
    {popup && <Popup opened={popup} toggle={()=>setPopup(!popup)}/>}
    <Button icon="horizontal-inbetween" onClick={()=>setPopup(!popup)}>
      Spaziatura caratteri
    </Button>
    </>
  );
});

export default TextAlertButton;
