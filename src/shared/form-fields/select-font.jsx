// SelectFont.jsx
import React, { useState } from "react";
import { Button, Divider, Flex, Select } from "antd";
import { IconListCheck } from "@tabler/icons-react";
import PopupFonts from "../components/popup-fonts";
const fontsData = require("@/data/static.fonts.json");

const SelectFont = (props) => {
  const [selectedFont, setSelectedFont] = useState(null);
  const [popupFonts, setPopupFonts] = useState(false);

  const handleFontChange = (value) => {
    const font = fontsData.find((font) => font.code === value);
    setSelectedFont(font);
    if (props.onChange) {
      props.onChange(font);
    }
    console.log('font-selected', font)
  };

  return (
    <>
      {popupFonts && (
        <PopupFonts
          opened={popupFonts}
          toggle={() => setPopupFonts(!popupFonts)}
          onChange={(value) => handleFontChange(value)}
        />
      )}

      <Select
        name={props?.name}
        value={selectedFont ? selectedFont.code : null}
        onChange={(value) => handleFontChange(value)}
        listHeight={400}
        options={fontsData.map((item) => ({
          label: (
            <Flex justify="space-between"><span style={{ fontFamily: `"${item?.code}"` }} className="has-font">
              {item?.fontFamily}
            </span>
            <span>({item?.fontSize})</span></Flex>
          ),
          value: item?.code,
        }))}
        placeholder="Seleziona font"
        dropdownRender={(menu) => (
          <>
            {menu}
            <Divider
              style={{
                margin: '8px 0',
              }}
            />
            <Button
              style={{ fontFamily: "Font 4402" }}
              onClick={() => setPopupFonts(!popupFonts)}
              icon={<IconListCheck />}
              block
            >
              Vedi tutto
            </Button>
          </>
        )}
      />
    </>
  );
};

export default SelectFont;
