// App.jsx
import React from "react";
import theme from "@/assets/theme.json";
import "@/assets/styles/index.scss";
import PageLayout from "@/layouts/page-layout";
import { RecoilRoot } from "recoil";
import { ConfigProvider } from "antd";
import FontStyles from "@/hooks/font-styles"; // Adjust the path

const App = ({ Component, pageProps }) => {
  return (
    <main id="app-layout">
      <RecoilRoot>
        <ConfigProvider theme={theme} locale="it">
          <PageLayout>
            <FontStyles />
            <Component {...pageProps} />
          </PageLayout>
        </ConfigProvider>
      </RecoilRoot>
    </main>
  );
};

export default App;
