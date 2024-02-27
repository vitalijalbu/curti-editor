/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Icon, Button } from "@blueprintjs/core";
import { SectionTab } from 'polotno/side-panel';


// Help sections
const TextSection = {
  name: "text",
  Tab: (props) => (
    <SectionTab name="Righe" {...props}>
      <Icon icon="bold" />
    </SectionTab>
  ),


  // we need observer to update component automatically on any store changes
  Panel: observer(({ store }) => {
    const [yPosition, setYPosition] = useState(100);

const addText = () =>{
  const element = store.activePage.addElement({
    type: 'text',
    name: 'row',
    x: 250,
    y: yPosition,
    innerWidth: '100%',
    rotable: false,
    align: 'center',
    resizable: false,
    alwaysOnTop: true,
    selectable: true,
    text: 'RIGA ESEMPIO',
    fontSize: 71,
    fontFamily: 'Personal · 3900',
    textDecoration: '',
    fill: 'black',
    strokeWidth: 0,
    stroke: 'black',
    width: 700,
    lineHeight: 1.2,
    letterSpacing: 0, // % from font size,
  });
  setYPosition(100 + element.y);
  //console.log(element.y);
}

    return (
      <div>
        <h3>Inserisci un testo</h3>
        <Button onClick={()=> addText()} icon="plus" fill minimal large>CREA UN TESTO</Button>
      </div>
    );
  }),
};

export default TextSection;
