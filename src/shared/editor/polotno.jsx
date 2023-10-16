import React, { useEffect } from "react";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { SidePanel } from "polotno/side-panel";
import { Workspace } from "polotno/canvas/workspace";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { createStore } from "polotno/model/store";
import { Toolbar } from "polotno/toolbar/toolbar";
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

  // Load fonts when the component mounts
  useEffect(() => {
    fonts.forEach(font => {
      store.addFont({fontFamily:font.fontFamily, src: `url('/fonts/${font.filename}')`});
    });
  }, []);

  return (
    <PolotnoContainer style={{ width: "100vw", height: "100vh" }}>
      <SidePanelWrap>
        <SidePanel store={store} />
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
