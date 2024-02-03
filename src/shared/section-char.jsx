/* eslint-disable no-unused-vars */
import React from "react";
import { observer } from "mobx-react-lite";
import { Icon } from "@blueprintjs/core";
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
    return (
      <div>
        <h3>Seleziona carattere</h3>
        {charsArray.map((item, index) => (
                <li key={index}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ marginRight: '10px' }}>{item}</div>
                   
                  </div>
                </li>
              ))}
      </div>
    );
  }),
};

export default CharSection;
