/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Navbar } from '@blueprintjs/core';
import dayjs from "dayjs";

// TopBar
const Topbar = ({store}) => {
  const [loading, setLoading] = useState(false);
  const formattedDate = dayjs().format('DD-MM-YYYY');

  const saveFile = async ()  => {
    setLoading(true);
    await store.saveAsPDF({ fileName: `CURTI-STAMPA-CARATTERI-${formattedDate}.pdf` });
    setLoading(false);
  }
   return (
    <Navbar style={{padding: '0px 15px'}}>
      <div style={{padding: '0px 15px'}}>
    <Navbar.Group align="left">
        <img src="/logo.png" style={{height: "24px", width: "auto"}}/>
    </Navbar.Group>
    <Navbar.Group align="right">
      <Button
        icon="download"
        intent="primary"
        loading={loading}
        onClick={saveFile}>
        Salva PDF
      </Button>
    </Navbar.Group>
  </div>
  </Navbar>
    )
  }
  
  export default Topbar;