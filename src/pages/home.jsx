import { Alert, Card, Divider, Segmented } from "antd";
import React from "react";
import Toolbar from "shared/components/toolbar";


const Home = () => {

  return (
    <div>
      <Card title="Contenuto" extra={[<Toolbar/>]}>
      <div id="headstone">
      <p>contenuto qui</p>
      </div>
      <Divider/>
      <Alert showIcon message="SCALA 1:1" type="warning"/>
      </Card>
     
    </div>
  );
};

export default Home;
