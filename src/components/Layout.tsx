import React, { useState } from "react";
import Navbar from "./Navbar";
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
import Todo from "./todo";

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
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "0",
              icon: (
                <BoldOutlined
                  className="fs-4 fw-bolder"
                  style={{
                    color: "blue",
                    fontWeight: "900",
                    textShadow: `-4px 4px 3px rgba(0,0,0,0.59)`,
                  }}
                />
              ),
              label: (
                <h5
                  style={{ color: "dark", position: "absolute", top: "8px" }}
                  className="fw-semibold"
                >
                  Brees
                </h5>
              ),
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
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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
          <Navbar />
        </Header>
        <Content
          style={{
            margin: "1px 1px",
            padding: 10,
            height: 700,
            background: colorBgContainer,
            overflowY: "scroll",
          }}
        >
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            commodi rem numquam recusandae itaque velit sit animi inventore
            repellendus debitis, sunt modi sapiente, non incidunt beatae
            cupiditate dignissimos suscipit facere. Asperiores aperiam veniam
            eligendi nihil repellat, necessitatibus laboriosam iure sapiente.
            Aperiam dolor voluptatum quasi repellat sed minus architecto itaque
            modi fugiat deleniti perferendis id, deserunt temporibus quod
            possimus beatae eos tempore, accusamus laudantium dolorum eligendi
            dolorem animi saepe. Ipsam esse sapiente aut! Asperiores quidem
            voluptatem adipisci dolorum sed laudantium, ut ab. Labore vel minus
            eum alias. Delectus libero qui ipsa quaerat laudantium cum, vero
            cumque animi ut inventore. Quos, dicta?
          </p>

          <Todo name="In progress" />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
