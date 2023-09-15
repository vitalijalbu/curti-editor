import React, { useState } from "react";
import Head from "shared/components/head";
import Aside from "shared/components/aside";
import { Layout } from "antd";

const { Content, Sider, Header } = Layout;

const PageLayout = (props) => {
    return (
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
            <Head />
          </Header>
          <Layout>
            <Sider
              style={{
                overflow: "auto",
                height: "100vh",
                position: "fixed",
                left: 0,
                top: "50px",
                bottom: "50px",
                padding: "10px",
                background: "#fff",

              }}
              breakpoint="md"
              width={"600px"}
              theme="light"
              //collapsible
              //collapsed={collapsed}
              //onCollapse={onCollapse}
              //collapsedWidth={0}
            >
              <Aside />
            </Sider>
            <Layout
              className="site-layout"
              style={{
                marginLeft: 600,
                marginTop: "30px",
                transition: "margin-left 0.2s",
              }}
            >
              <Content
                style={{
                  padding: "30px",
                  maxWidth: "100%",
                  overflow: "initial",
                  paddingBottom: "30px",
                  background: "#F2F3F3"
                }}
              >
                <div className="main-container">{props.children}</div>
              </Content>
            </Layout>
          </Layout>
        </Layout>
    
      );
}
export default PageLayout;
