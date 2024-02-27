/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Icon, Button } from "@blueprintjs/core";
import { SectionTab } from 'polotno/side-panel';
import charsArray from "../chars";

// Help sections
const CharSection = {
  name: "chars",
  Tab: (props) => (
    <SectionTab name="Caratt. speciali" {...props}>
      <Icon icon="translate" />
    </SectionTab>
  ),
  // we need observer to update component automatically on any store changes
  Panel: observer(({ store }) => {
    const [yPosition, setYPosition] = useState(0);

    const addText = (char) =>{
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
        text: char,
        fontSize: 71,
        fontFamily: 'Personal · 3900',
        textDecoration: '',
        fill: 'black',
        strokeWidth: 0,
        stroke: 'black',
        width: 100,
        lineHeight: 1.2,
        letterSpacing: 0, // % from font size,
      });
      setYPosition(100 + element.y);
      //console.log(element.y);
    }

    return (
      <div style={{ position: 'relative' }}>
      <h3>Seleziona carattere</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
        {charsArray.map((item, index) => (
          <div key={index}>
            <Button
              style={{ fontFamily: 'Personal · 3900' }}
              onClick={() => addText(item)}
              icon="plus"
              fill
              minimal
              large
            >
              {item}
            </Button>
          </div>
        ))}
      </div>
    </div>
    
    );
  }),
};

export default CharSection;
