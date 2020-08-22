/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";

import Banner from "../components/Banner";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Point from "../components/Point";
import {
  Banner51DataSource,
  Feature00DataSource,
  Footer01DataSource,
} from "../components/data.source";
import "../assets/less/antMotionStyle.less";

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== "undefined" ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port,
    };
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });

    if (location.port) {
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  }

  render() {
    const children = [
      <Banner
        id="Banner5_1"
        key="Banner5_1"
        dataSource={Banner51DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature
        id="Feature0_0"
        key="Feature0_0"
        dataSource={Feature00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer
        id="Footer0_1"
        key="Footer0_1"
        dataSource={Footer01DataSource}
        isMobile={this.state.isMobile}
      />,
      <Point key="list" data={["Banner5_1", "Feature0_0", "Footer0_1"]} />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {this.state.show && children}
      </div>
    );
  }
}
