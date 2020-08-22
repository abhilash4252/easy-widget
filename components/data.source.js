import React from "react";

export const Banner51DataSource = {
  wrapper: { className: "home-page-wrapper banner5" },
  page: { className: "home-page banner5-page" },
  childWrapper: {
    className: "banner5-title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <span>
              <p>Feedback Widget</p>
            </span>
          </span>
        ),
        className: "banner5-title",
      },
      {
        name: "explain",
        className: "banner5-explain",
        children: (
          <span>
            <p>Value your customer by collecting feedback.</p>
          </span>
        ),
      },
    ],
  },
  image: {
    className: "banner5-image",
    children:
      "https://s7.gifyu.com/images/ezgif.com-video-to-gif-2dd715d6cb8053ddb.gif",
  },
};
export const Feature00DataSource = {
  wrapper: { className: "home-page-wrapper content0-wrapper" },
  page: { className: "home-page content0" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <span>
              <p>Features</p>
            </span>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: "content0-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>Easy to embed</p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: "content",
              children: (
                <span>
                  <span>
                    <p>
                      Receive Real-time Emails in your Inbox when a customer
                      submits.
                      <br />
                    </p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: "block1",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>Act on Feedback</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: "content",
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>
                          Most successful product organizations are customer
                          centric, considering customer impacts.
                        </p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: "block2",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>Free forever</p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Footer01DataSource = {
  wrapper: { className: "home-page-wrapper footer0-wrapper" },
  OverPack: { className: "home-page footer0", playScale: 0.05 },
  copyright: {
    className: "copyright",
    children: (
      <span>
        <span>
          ©2020 <a href="https://easy-widget.vercel.app/">widget.easy.xyz</a>
          &nbsp;All Rights Reserved
        </span>
      </span>
    ),
  },
};
