import React, { useEffect } from "react";
import { pxToUnitRounded, unitToPx, pxToUnit } from 'polotno/utils/unit';
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { SidePanel } from "polotno/side-panel";
import { Workspace } from "polotno/canvas/workspace";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { createStore } from "polotno/model/store";
import { Toolbar } from "polotno/toolbar/toolbar";
import { runInAction } from 'mobx';
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
import { setGoogleFonts } from "polotno/utils/fonts";
// Import your fonts here
const fonts = require("@/data/static.fonts.json");


// Help sections
const HelpSection = {
  name: "custom",
  Tab: (props) => (
    <SectionTab name="Aiuto" {...props}>
      <IconHelpCircle/>
    </SectionTab>
  )
}


const Editor = () => {
  const store = createStore({
    key: "nFA5H9elEytDyPyvKL7T",
    showCredit: false,
  });

  store.toggleRulers(true);
  store.setElementsPixelRatio(2);
  store.setUnit({
    unit: 'cm', // mm, cm, in, pt, px
    dpi: 300,
  });
  store.setRole('admin');


  var widthPage = unitToPx({
    unit: 'cm',
    dpi: 300,
    unitVal: 42,
  });

  var heightPage = unitToPx({
    unit: 'cm',
    dpi: 300,
    unitVal: 29.7,
  });  
  
  


  const page = store.addPage({
    width: widthPage,
    height: heightPage,
    fontFamily: '3900'
  });


// Load fonts when the component mounts
useEffect(() => {
  
  // Remove all existing fonts
    setGoogleFonts([]);

    // Add your custom fonts
    fonts.forEach(font => {
      store.addFont({
        fontFamily: font.fontFamily,
        styles: [
          {
            src: `url('/fonts/${font.filename}')`,
            fontStyle: 'normal',
            fontSize: `${font.fontSize}`,
          },
        ],
      });
    });

          // Disable resizing for all existing elements
          store.pages.forEach(page => {
            page?.elements?.forEach(element => {
              element.set({ resizable: false });
            });
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


