import React, { useState } from "react";
import Head from "next/head";
import Aside from "@/shared/components/aside";
import { Button, Layout } from "antd";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import TopToolbar from "@/shared/components/top-toolbar";
import FontStyles from "@/hooks/font-styles";

const { Content, Sider, Header } = Layout;

const PageLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);

    return (
      <>
        <Head>
						<title>Crea la tua Epigrafe</title>
					</Head>

        <Layout className="main-layout">
          <Header
            theme="light"
            style={{
              background: "#fff",
              height: "50px",
              lineHeight: "50px",
              padding: "0 30px",
              position: "fixed",
              top: 0,
              zIndex: 100,
              width: "100%",
              borderBottom: "1px solid rgba(0, 0, 0, 0.15)"
            }}
          >
            <TopToolbar />
          </Header>
          <Layout>
            <Sider
              style={{
                height: "100%",
                position: "fixed",
                left: 0,
                top: "50px",
                bottom: "50px",
                paddingBottom: "50px",
                padding: "0px 10px 50px 10px",
                background: "#fff",
                overflowY: "auto"
              }}
              breakpoint="md"
              width={"500px"}
              theme="light"
              collapsible
              reverseArrow={true}
              collapsed={collapsed}
              trigger={<Button
                titl="Chiudi"
                shape="circle"
                size="small"
                onClick={() => setCollapsed(!collapsed)} // Assuming props.collapse is a function that toggles the collapse state
                icon={collapsed === true ? <IconChevronRight /> : <IconChevronLeft />}
              />}
              onCollapse={() => setCollapsed(!collapsed)}
              collapsedWidth={50}
            >
              <Aside collapse={collapsed}/>
            </Sider>
            <Layout
              className="site-layout"
              style={{
                marginLeft: collapsed ? 50 : 500,
                marginTop: "50px",
                position: "relative",
                overflow: "unset",
                transition: "margin-left 0.2s",
              }}
            >
              <Content
                style={{
                  maxWidth: "100%",
                  overflow: "initial",
                  paddingBottom: "30px",
                  background: "#E8E8E8"
                }}
              >
                <div className="main-container">
                  <FontStyles/>
                  {props.children}
                  </div>
              </Content>
            </Layout>
          </Layout>
        </Layout>
        </>
      );
}
export default PageLayout;
