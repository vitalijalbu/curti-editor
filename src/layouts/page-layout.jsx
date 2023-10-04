import React, { useState } from "react";
import Head from "@/shared/components/head";
import Aside from "@/shared/components/aside";
import { Button, Layout } from "antd";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const { Content, Sider, Header } = Layout;

const PageLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout className="main-layout" 
        style={{
          backgroundImage: "radial-gradient(#ccc 1px, transparent 0)",
          backgroundSize: "10mm 10mm",
          backgroundPosition: "0 0"
        }}>
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
                height: "100%",
                position: "fixed",
                left: 0,
                top: "50px",
                bottom: "50px",
                padding: "10px",
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
                shape="circle"
                size="small"
                onClick={() => setCollapsed(!collapsed)} // Assuming props.collapse is a function that toggles the collapse state
                icon={<IconChevronRight />}
              />}
              onCollapse={() => setCollapsed(!collapsed)}
              collapsedWidth={40}
            >
              <Aside collapse={collapsed}/>
            </Sider>
            <Layout
              className="site-layout"
              style={{
                marginLeft: collapsed ? 40 : 500,
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
                  background: "#F8F8F8"
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
