/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Navbar } from '@blueprintjs/core';
import PopupExport from "./popup-export";

// TopBar
const Topbar = ({store}) => {
  const [popup, setPopup] = useState(false);

   return (
    <>
     {popup && <PopupExport opened={popup} toggle={()=>setPopup(!popup)} store={store}/>}
    <Navbar style={{padding: '0px 15px'}}>
      <div style={{padding: '0px 15px'}}>
    <Navbar.Group align="left">
        <img src="/logo.png" style={{height: "24px", width: "auto"}}/>
    </Navbar.Group>
    <Navbar.Group align="right">
      <Button
        icon="download"
        intent="primary"
        //onClick={saveFile}
        onClick={()=>setPopup(!popup)}>
        Salva PDF
      </Button>
    </Navbar.Group>
  </div>
  </Navbar>
  </>
    )
  }
  
  export default Topbar;