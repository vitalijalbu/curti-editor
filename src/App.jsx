/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { unitToPx } from "polotno/utils/unit";
import { ElementsSection } from "polotno/side-panel";
import { setGoogleFonts } from "polotno/utils/fonts";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { Toolbar, TextFontFamily } from "polotno/toolbar/toolbar";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { SidePanel } from "polotno/side-panel";
import { Workspace } from "polotno/canvas/workspace";
import { createStore } from "polotno/model/store";
import { addGlobalFont } from 'polotno/config';
// Import your fonts here
import fontsArray from "./fonts";
import "@blueprintjs/core/lib/css/blueprint.css";
import HelpSection from "./shared/section-help";
import CharSection from "./shared/section-char";
import TextSection from "./shared/section-text";
import Topbar from "./shared/topbar";
import TextSpacingButton from "./shared/popup-spacing";


function App() {
  const store = createStore({
    key: "nFA5H9elEytDyPyvKL7T",
    showCredit: true,
  });




  useEffect(() => {
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

  const page = store.addPage({
    width: widthPage,
    height: heightPage,
    fontFamily: "Personal · 3900",
  });


  // Change fonts sizies
  const jsonSTORE = store.toJSON();


  const [selectedFont, setSelectedFont] = useState(null);
  
  

  // Assuming you have access to your Polotno SDK store
  const off = 


    store.on('change', () => {
      const element = store.selectedElements[0];
      console.log('Something changed in the editor');
      console.log('store.selectedElements', store.selectedElements[0]);
   

    if (element) {
      const fontFamily = element?.fontFamily;
      const matchingFont = fontsArray.find(font => font.fontFamily === fontFamily);
      if (matchingFont) {
        const newFontSize = matchingFont.fontSize;
        // Apply the font size to the element or take further actions
        console.log('Applying font size:', newFontSize);
        element.set({fontSize : newFontSize});
      }
    }else{
      console.log('NO SELECETION');
    }
  });
   


  const sections = [TextSection, CharSection, ElementsSection, HelpSection];

  // Remove component here 

  const NULL = () => null;
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
            //TextFontFamily,
            TextSpacingButton,
            //TextFontVariant: NULL, 
            //TextFilters: NULL,
          }}/>
        <Workspace 
        store={store}
        paddingX={50}
        paddingY={50}
        bleedColor="rgba(222, 167, 11, .20)" 
        components={{ PageControls: () => null }}/>
        <ZoomButtons store={store} />
      </WorkspaceWrap>
    </PolotnoContainer>
    </div>
  );
}

export default App;
