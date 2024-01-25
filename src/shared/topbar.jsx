/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Navbar } from '@blueprintjs/core';

// TopBar
const Topbar = ({store}) => {
   return (
    <Navbar style={{padding: '0px 15px'}}>
      <div style={{padding: '0px 15px'}}>
    <Navbar.Group align="left">
        <img src="/logo.png" style={{height: "24px", width: "auto"}}/>
    </Navbar.Group>
    <Navbar.Group align="right">
      <Button
        icon="print"
        intent="primary"
        onClick={() => {
          store.saveAsPDF({ fileName: 'curti-lapide.pdf' });
        }}
      >
        Stampa
      </Button>
    </Navbar.Group>
  </div>
  </Navbar>
    )
  }
  
  export default Topbar;