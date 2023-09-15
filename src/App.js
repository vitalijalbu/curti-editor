import React from 'react';
import { Button, Card, ConfigProvider } from 'antd';
import PageLayout from "layouts/page-layout";
import theme from "./theme.json"
import Home from 'pages/home';

function App() {
  return (
    <ConfigProvider theme={theme} locale="it">
      <PageLayout>
          <Home/>
      </PageLayout>
    </ConfigProvider>
  );
}

export default App;
