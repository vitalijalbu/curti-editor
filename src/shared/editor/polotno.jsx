import React, { useEffect } from "react";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { SidePanel } from "polotno/side-panel";
import { Workspace } from "polotno/canvas/workspace";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { createStore } from "polotno/model/store";
import { Toolbar } from "polotno/toolbar/toolbar";
import {
  TextSection,
  PhotosSection,
  ElementsSection,
  UploadSection,
  BackgroundSection,
  SizeSection,
  SectionTab
} from 'polotno/side-panel';
import { IconHelpCircle } from "@tabler/icons-react";
// Import your fonts here
const fonts = require("@/data/static.fonts.json");

const Editor = () => {
  const store = createStore({
    key: "nFA5H9elEytDyPyvKL7T",
    showCredit: false,
  });

  store.toggleRulers(true);
  store.setUnit({
    unit: 'cm', // mm, cm, in, pt, px
    dpi: 300,
  });
  store.setRole('user');

  const page = store.addPage({
    width: 800,
    height: 600
  });

  store.activePage.set({ bleed: 20 });

  // Load fonts when the component mounts
  useEffect(() => {
    fonts.forEach(font => {
      store.addFont({fontFamily:font.fontFamily, src: `url('/fonts/${font.filename}')`});
    });
  }, []);


  // we will have just two sections
const sections = [TextSection, HelpSection, SizeSection, ];

  return (
    <PolotnoContainer style={{ width: "100vw", height: "100vh" }}>
      <SidePanelWrap>
        <SidePanel store={store} sections={sections}/>
      </SidePanelWrap>
      <WorkspaceWrap>
        <Toolbar store={store} downloadButtonEnabled />
        <Workspace store={store} />
        <ZoomButtons store={store} />
      </WorkspaceWrap>
    </PolotnoContainer>
  );
};

export default Editor;


// Help sections
const HelpSection = {
  name: "custom",
  Tab: (props) => (
    <SectionTab name="Aiuto" {...props}>
      <IconHelpCircle/>
    </SectionTab>
  )
}