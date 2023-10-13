import React, { useState } from "react";
import Dropdown from "../images/Dropdown.png";
import B from "../images/B.svg";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BoldOutlined,
  MessageOutlined,
  UserSwitchOutlined,
  AppstoreOutlined,
  CopyOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";

const { Header, Sider, Content } = Layout;

const LayoutComponent: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ padding: 0, background: colorBgContainer }}
      >
        <div className="demo-logo-vertical" />
        {/* <img src={Dropdown} alt="logoBree" /> */}
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "0",
              icon: (
                <BoldOutlined
                  style={{
                    color: "blue",
                    fontWeight: "900",
                    textShadow: `-4px 4px 3px rgba(0,0,0,0.59)`,
                  }}
                />
              ),
              label: <h3 style={{ color: "dark", fontWeight: 600 }}>Brees</h3>,
            },
            {
              key: "1",
              icon: <AppstoreOutlined />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <CopyOutlined />,
              label: "Projects",
            },
            {
              key: "3",
              icon: <FileTextOutlined />,
              label: "Tasks",
            },
            {
              key: "4",
              icon: <MessageOutlined />,
              label: "Messages",
            },
            {
              key: "5",
              icon: <UserSwitchOutlined />,
              label: "Users",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "1px 1px",
            padding: 24,
            minHeight: 700,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
