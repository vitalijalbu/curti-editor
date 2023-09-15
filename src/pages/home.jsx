import { Card, Divider, Segmented } from "antd";
import React from "react";
import Toolbar from "shared/components/toolbar";


const Home = () => {

  return (
    <div>
      <Card title={<Toolbar/>}>
      <div className="mx-auto"><Segmented options={['Editor', 'Anteprima']} /></div>
      <Divider/>
      <p>contenuto qui</p>
      </Card>
     
    </div>
  );
};

export default Home;
