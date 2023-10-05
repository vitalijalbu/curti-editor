import React, { useRef, useEffect } from "react";
import { Alert, Card, Divider } from "antd";

import Toolbar from "@/shared/components/toolbar";
import { useRecoilValue } from "recoil";
import { formState } from "@/store/index";
import Draggable from "@/shared/components/draggable";

const Index = () => {
  const forms = useRecoilValue(formState);

  return (
    <div>
      <Card
        title="Anteprima lapide"
        extra={[<Toolbar key="toolbar" />]}
        actions={[
          <Alert
            showIcon
            message="SCALA 1:10"
            description="1cm sullo schermo corrisponde a 10cm nella realtà"
            type="warning"
            key="alert"
          />,
        ]}
      >
        <div id="headstone">
          {forms.map((form) => (
            <div key={form.id} style={{ position: "relative" }}>
         
              <Draggable form={form}/>
              
            </div>
          ))}
        </div>
        <Divider />
      </Card>
    </div>
  );
};

export default Index;
