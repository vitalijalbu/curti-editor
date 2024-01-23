import React from "react";
import { SectionTab } from 'polotno/side-panel';
  import { IconHelpCircle } from '@tabler/icons-react';

// Help sections
const HelpSection = {
    name: "custom",
    Tab: (props) => (
      <SectionTab name="Aiuto" {...props}>
        <IconHelpCircle/>
      </SectionTab>
    )
  }
  
  export default HelpSection;