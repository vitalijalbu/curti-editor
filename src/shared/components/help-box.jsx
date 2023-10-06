import React from "react";
import Link from "next/link";
import { List, Select, Form, Input, InputNumber, Typography, Divider, Alert, Avatar } from "antd";
import { IconEyeShare, IconMail, IconPhoneCall, IconWorldWww } from "@tabler/icons-react";

const HelpBox = () => {
  return (
    <div>
    
<Divider>Hai bisogno di aiuto?</Divider>
<List
key={1}
    itemLayout="horizontal"
    >
      <List.Item key={0}>
      <List.Item.Meta
        title="Scrivici"
        avatar={<Avatar shape="square" icon={<IconMail color="#0B7542"/>}/>}
      />
      <div className="list-actions">
          <Link href="mailto:info@ellepisrl.org" target="_blank">info@ellepisrl.org</Link>
        </div>
    </List.Item>  
    <List.Item key={1}>
      <List.Item.Meta
        avatar={<Avatar shape="square" icon={<IconPhoneCall color="#0B7542"/>}/>}
        title="Chiamaci"
      />
      <div className="list-actions">
          <Link href="tel:+390365895824 " target="_blank">info@ellepisrl.org</Link>
        </div>
    </List.Item> 
    <List.Item key={2}>
      <List.Item.Meta
        avatar={<Avatar shape="square" icon={<IconWorldWww color="#0B7542"/>}/>}
        title="Visita il nostro sito web"
      />
      <div className="list-actions">
          <Link href="https://www.ellepisrl.org/" target="_blank">ellepisrl.org</Link>
        </div>
    </List.Item>
    </List>
    </div>
  );
};

export default HelpBox;
