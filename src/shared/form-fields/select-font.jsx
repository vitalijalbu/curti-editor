// SelectFont.jsx
import React, { useEffect, useState } from "react";
import { Button, Divider, Select, Typography } from "antd";
import { IconListCheck } from "@tabler/icons-react";
import PopupFonts from "../components/popup-fonts";
const { Option } = Select;
const { Text, Title } = Typography;
const fontsData = require("@/data/static.fonts.json");


const SelectFont = () => {
  const [fontOptions, setFontOptions] = useState([]);
  const [popupFonts, setPopupFonts] = useState(false);


  return (
    <>
     {popupFonts && <PopupFonts
      opened={popupFonts} 
      toggle={()=> setPopupFonts(!popupFonts)} 
      onChange={(value)=> form.setFieldValue('fontFamily', value)}/>}

      <Select 
      listHeight={400} 
      placeholder="Select Font" 
      defaultActiveFirstOption
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider
            style={{
              margin: '8px 0',
            }}
          />
        <Button style={{ fontFamily: "Font 4402"}} onClick={()=> setPopupFonts(!popupFonts)} icon={<IconListCheck />} block>
                Vedi tutto
              </Button>
              </>
              )}
            options={fontsData.map((item) => ({
              label: item?.fontFamily,
              value: item?.code,
            }))}
          />
    </>
  );
};

export default SelectFont;
