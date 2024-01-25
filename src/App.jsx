/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { unitToPx } from "polotno/utils/unit";
import { ElementsSection, TextSection } from "polotno/side-panel";
import { setGoogleFonts } from "polotno/utils/fonts";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { Toolbar } from "polotno/toolbar/toolbar";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { SidePanel } from "polotno/side-panel";
import { Workspace } from "polotno/canvas/workspace";
import { createStore } from "polotno/model/store";
import { addGlobalFont } from 'polotno/config';
// Import your fonts here
import fontsArray from "./fonts";
import "@blueprintjs/core/lib/css/blueprint.css";
import HelpSection from "./shared/section-help";
import Topbar from "./shared/topbar";
import TextAlertButton from "./shared/popup-spacing";

function App() {

  const [fontSize, setFontSize ] = useState('72');

  const store = createStore({
    key: "nFA5H9elEytDyPyvKL7T",
    showCredit: true,
  });

  store.toggleRulers(true);
  store.openSidePanel("text");
  // show bleed

  store.setUnit({
    unit: "cm", // mm, cm, in, pt, px
    dpi: 72,
  });
  store.setRole("admin");
  store.setScale(1);

  var widthPage = unitToPx({
    unit: "cm",
    dpi: 72,
    unitVal: 42,
  });

  var heightPage = unitToPx({
    unit: "cm",
    dpi: 72,
    unitVal: 29.7,
  });
  store.addPage({
    width: widthPage,
    height: heightPage,
    fontFamily: "Personal · 3900",
    bleed: 20,
  });
  store.toggleBleed();

  // Remove all existing fonts
  setGoogleFonts([]);

  // Add your custom fonts
  fontsArray.forEach((font) => {
    store.addFont({
      fontFamily: font.fontFamily,
      styles: [
        {
          src: `url('${font.filename}')`,
          fontStyle: "normal",
          fontSize: `${font.fontSize}`,
        },
      ],
    });
  });

  addGlobalFont({
    fontFamily: 'Personal · 3900',
  });

  // Disable resizing for all existing elements
  store.pages.forEach((page) => {
    page?.elements?.forEach((element) => {
      element.set({ resizable: false });
    });
  });

  // we will have just two sections
  const jsonSTORE = store.toJSON();
  console.log("OPTIONS", JSON.stringify(jsonSTORE));

  const sections = [TextSection, ElementsSection, HelpSection];

  return (
    <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Topbar store={store} />
    <PolotnoContainer>
      <SidePanelWrap>
        <SidePanel store={store} sections={sections} defaultSection="text" />
      </SidePanelWrap>
      <WorkspaceWrap>
        <Toolbar 
          store={store}
          downloadButtonEnabled={false}
          components={{
            TextAlertButton
          }}/>
        <Workspace store={store} components={{ PageControls: () => null }}/>
        <ZoomButtons store={store} />
      </WorkspaceWrap>
    </PolotnoContainer>
    </div>
  );
}

export default App;
