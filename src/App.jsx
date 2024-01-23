import React, { useEffect } from "react";
import { unitToPx } from "polotno/utils/unit";
import { TextSection } from "polotno/side-panel";
import { setGoogleFonts } from "polotno/utils/fonts";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { Toolbar } from "polotno/toolbar/toolbar";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { SidePanel } from "polotno/side-panel";
import { Workspace } from "polotno/canvas/workspace";
import { createStore } from "polotno/model/store";
// Import your fonts here
import fontsArray from "./fonts";
import "@blueprintjs/core/lib/css/blueprint.css";

function App() {
  const store = createStore({
    key: "nFA5H9elEytDyPyvKL7T",
    showCredit: true,
  });

  store.toggleRulers(true);
  store.openSidePanel("text");
  store.setUnit({
    unit: "cm", // mm, cm, in, pt, px
    dpi: 300,
  });
  store.setRole("admin");
  store.setScale(2);
  
  var widthPage = unitToPx({
    unit: "cm",
    dpi: 300,
    unitVal: 42,
  });

  var heightPage = unitToPx({
    unit: "cm",
    dpi: 300,
    unitVal: 29.7,
  });
  const page = store.addPage({
    width: widthPage,
    height: heightPage,
    fontFamily: "3900",
  });
  store.activePage.set({ bleed: 20 }); // set bleed in pixels

  // Load fonts when the component mounts
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

    // Disable resizing for all existing elements
    store.pages.forEach((page) => {
      page?.elements?.forEach((element) => {
        element.set({ resizable: false });
      });
    });
  }, []);

  // we will have just two sections
  const sections = [TextSection];

  return (
    <PolotnoContainer style={{ width: "100vw", height: "100vh" }}>
      <SidePanelWrap>
        <SidePanel store={store} sections={sections} defaultSection="text" />
      </SidePanelWrap>
      <WorkspaceWrap>
        <Toolbar store={store} downloadButtonEnabled />
        <Workspace store={store} />
        <ZoomButtons store={store} />
      </WorkspaceWrap>
    </PolotnoContainer>
  );
}

export default App;
