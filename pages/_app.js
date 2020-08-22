import { EasyWidget } from "react-easy-widget";
import { Layout } from "antd";
import "react-easy-widget/dist/index.css";
import "../assets/common.less";

function WidgetApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <EasyWidget id={"abhilash@beautifulcode.in"} />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default WidgetApp;
