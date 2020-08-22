import React from "react";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import { getChildrenToRender } from "./utils";
import Link from "next/link";
import { useUser } from "../utils/auth/useUser";
import { Button } from "antd";
function Banner(props) {
  const { ...tagProps } = props;
  const { dataSource } = tagProps;
  delete tagProps.dataSource;
  delete tagProps.isMobile;
  const animType = {
    queue: "bottom",
    one: {
      y: "+=30",
      opacity: 0,
      type: "from",
      ease: "easeOutQuad",
    },
  };
  const { user } = useUser();
  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <div {...dataSource.page}>
        <QueueAnim
          key="text"
          type={animType.queue}
          leaveReverse
          ease={["easeOutQuad", "easeInQuad"]}
          {...dataSource.childWrapper}
          componentProps={{
            md: dataSource.childWrapper.md,
            xs: dataSource.childWrapper.xs,
          }}
        >
          {dataSource.childWrapper.children.map(getChildrenToRender)}
          <div className="banner5-button-wrapper">
            {user && (
              <Link href="/app">
                <a className=" ant-btn banner5-button ant-btn-primary">
                  <p>Go to Dashboard</p>
                </a>
              </Link>
            )}
            {!user && (
              <Link href="/auth">
                <a className=" ant-btn banner5-button ant-btn-primary">
                  <p>Get Started</p>
                </a>
              </Link>
            )}
          </div>
        </QueueAnim>
        <TweenOne animation={animType.one} key="title" {...dataSource.image}>
          <img src={dataSource.image.children} width="100%" alt="img" />
        </TweenOne>
      </div>
    </div>
  );
}
export default Banner;
