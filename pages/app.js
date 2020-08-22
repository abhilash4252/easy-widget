import Link from "next/link";
import FirebaseAuth from "../components/FirebaseAuth";
import { useUser } from "../utils/auth/useUser";
import { Layout, Menu, Row, Col, Dropdown, Avatar, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ReactMarkdown from "react-markdown";

const { Header, Content } = Layout;

const App = () => {
  const { user, logout } = useUser();

  const markdown = "";
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a onClick={logout}>Log Out</a>
      </Menu.Item>
    </Menu>
  );

  if (user) {
    return (
      <>
        <Header style={{ background: "#fff" }}>
          <Row>
            <Col span={4}>
              <Link href="/">
                <div className="logo">Widget.Easy</div>
              </Link>
            </Col>
            <Col span={4} offset={16} style={{ textAlign: "right" }}>
              <Dropdown overlay={menu} trigger={["click"]}>
                <a>
                  <Avatar src={user.profilePicUrl} />
                  <DownOutlined style={{ marginLeft: "10px" }} />
                </a>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content" style={{ margin: "16px 0" }}>
            <h3>Integration for React App</h3>
            <pre>
              <code>
                <strong>Install:</strong> <br />
                npm install --save react-easy-widget <br />
                or
                <br />
                yarn add react-easy-widget <br />
                <br />
                <strong>Usage:</strong> <br />
                import React from 'react' <br />
                <br />
                import {"{"} EasyWidget{"}"} from 'react-easy-widget' <br />
                import 'react-easy-widget/dist/index.css' <br /> <br />
                const Example = () => {"{"} <br />
                {"  "}
                return ( <br />
                {"    <EasyWidget id={" + user.email + "} />"}
                <br /> )<br />
                {"}"}
              </code>
            </pre>
          </div>
        </Content>
      </>
    );
  }

  return <div>Loading</div>;
};

export default App;
