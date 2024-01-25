/* eslint-disable no-unused-vars */
import React from "react";
import { observer } from "mobx-react-lite";
import { Icon } from "@blueprintjs/core";
import { SectionTab } from 'polotno/side-panel';

// Help sections
const HelpSection = {
  name: "help",
  Tab: (props) => (
    <SectionTab name="Aiuto ?" {...props}>
      <Icon icon="help" />
    </SectionTab>
  ),
  // we need observer to update component automatically on any store changes
  Panel: observer(({ store }) => {
    return (
      <div>
        <h3>Hai bisogno di aiuto?</h3>
       <a href="mailto:info@ellepisrl.org" target="_blank" rel="noreferrer"><Icon icon="envelope"/> Contattaci</a>
      </div>
    );
  }),
};

export default HelpSection;
