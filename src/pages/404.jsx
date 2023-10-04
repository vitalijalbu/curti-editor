import React from "react";
import Link from "next/link";
import { Button, Result } from "antd";
import { IconAlertCircle, IconArrowLeft } from "@tabler/icons-react";


const NotFoundPage = () => {
  return (
    <div className="page">
      <Result
        icon={<IconAlertCircle/>}
        title="Pagina non trovata"
        subTitle="Pagina non trovata"
        extra={<Link href="/"><Button type="primary" icon={<IconArrowLeft/>}>Torna alla homepage</Button></Link>}
      />
    </div>
  );
};

export default NotFoundPage;
