// SelectFont.jsx
import React, { useEffect, useState } from "react";
import { Button, Divider, Select, Typography } from "antd";
import { IconListCheck } from "@tabler/icons-react";
import PopupFonts from "../components/popup-fonts";
const fontsData = require("@/data/static.fonts.json");


const SelectFont = (props) => {
  const [popupFonts, setPopupFonts] = useState(false);


  return (
    <>
     {popupFonts && <PopupFonts
      opened={popupFonts} 
      toggle={()=> setPopupFonts(!popupFonts)} 
      onChange={(value)=> props?.onChange(value)}/>}

      <Select 
      name={props?.name}
      value={props?.value}
      onChange={props?.onChange}
      listHeight={400} 
      options={fontsData.map((item) => ({
        label: (<span style={{ fontFamily: `"${item?.code}"`}} className="has-font">{item?.fontFamily}</span>),
        value: item?.code,
      }))}
      defaultValue={0}
      placeholder="Seleziona font" 
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
           
          />
    </>
  );
};

export default SelectFont;
