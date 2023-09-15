import { Card } from "antd";
import React from "react";
import Toolbar from "shared/components/toolbar";


const Home = () => {

  return (
    <div>
      <Card title={<Toolbar/>}>
       
      <p>Home</p>
      </Card>
     
    </div>
  );
};

export default Home;
