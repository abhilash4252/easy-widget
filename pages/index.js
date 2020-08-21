import useSWR from "swr";
import Link from "next/link";
import { useUser } from "../utils/auth/useUser";
import { Layout, Menu, Row, Col, Dropdown, Button, Avatar } from "antd";
import { DownOutlined } from "@ant-design/icons";
const { Header, Content } = Layout;

const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  }).then((res) => res.json());

const Index = () => {
  const { user, logout } = useUser();
  const { data, error } = useSWR(
    user ? ["/api/getFood", user.token] : null,
    fetcher
  );

  if (!user) {
    return (
      <>
        <p>Hi there!</p>
        <p>
          You are not signed in.{" "}
          <Link href={"/auth"}>
            <a>Sign in</a>
          </Link>
        </p>
      </>
    );
  }

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a onClick={logout}>Log Out</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Layout className="layout">
      <Header style={{ background: "#fff" }}>
        <Row>
          <Col span={3}>
            <div className="logo" />
          </Col>
          <Col span={8}>
            <Menu mode="horizontal" defaultSelectedKeys={[]}>
              <Menu.Item key="1">
                {" "}
                <Link href={"/example"}>
                  <a>Nav 1</a>
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={4} offset={9}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a>
                <Avatar src={user.profilePicUrl} />

                {user.name}
                <DownOutlined />
              </a>
            </Dropdown>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">Content</div>
      </Content>
    </Layout>
  );
};

export default Index;
