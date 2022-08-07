import React, { Component } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel, Input } from "antd";
import style from "./home.less";

const { Search } = Input;
const contentStyle = {
  height: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#000",
};

export default class home extends Component {
  onSearch = (value) => console.log(value);
  render() {
    return (
      <div className="home">
        <div style={{height:"80px",width:"100%"}}>
        <div className="home-header">
          <img src={require("./images/kongmao.png")} alt="" />
          <h1>正木さんの小屋</h1>
          <ul className="h-nav">
            <li className="fst">
              <span>
                <a href="">日语学习</a>
              </span>
            </li>
            <li className="fst">
              <span>
                <a href="">英语学习</a>
              </span>
            </li>
            <li className="fst">
              <span>
                <a href="">韩语学习</a>
              </span>
            </li>
            <li className="fst">
              <span>
                <a href="">IT学习</a>
              </span>
            </li>
          </ul>
          <Search
            placeholder="搜点什么..."
            onSearch={this.onSearch}
            style={{ width: 200, padding: "0 20px", borderRadius: "20px" }}
          />
           <img src={require("./images/kedaya (1).png")} alt="" />
           <img src={require("./images/mumu.png")} alt="" />
        </div>
        </div>
        {/*  走馬燈*/}
        <div className="home-body">
          <div className=" home-banner">
            <Carousel
              autoplay
              arrows={true}
              prevArrow={
                <LeftOutlined
                  type="left"
                  style={{ fontSize: "150%", color: "#08c" }}
                />
              }
              nextArrow={<RightOutlined type="right" />}
              style={{ height: "300px" }}
            >
              <div>
                <h3 style={contentStyle}>
                  <a href="">
                    <img src={require("./images/kuuga.jpg")} alt="" />
                  </a>
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <a href="">
                    <img src={require("./images/agito.jpg")} alt="" />
                  </a>
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <a href="">
                    <img src={require("./images/faize.jpg")} alt="" />
                  </a>
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <a href="">
                    <img src={require("./images/liuki.jpg")} alt="" />
                  </a>
                </h3>
              </div>
            </Carousel>
          </div>
        </div>
        {/* 推薦 */}
        <div className="home-content">
          <div className="home-content-left">
            <ul className="content-ul">
              <li>
                <div className="u-cover">
                  <img src={ require("./images/angsong.jpg")} alt="" />
                </div>
                <p className="dec">
                  <a href="">這是一首歌這是一首歌</a>
                </p>
              </li>


              <li>
                <div className="u-cover">
                  <img src={ require("./images/dd.jpg")} alt="" />
                </div>
                <p className="dec">
                  <a href="">這是一首歌這是一首歌</a>
                </p>
              </li>

              <li>
                <div className="u-cover">
                  <img src={ require("./images/mei.jpg")} alt="" />
                </div>
                <p className="dec">
                  <a href="">這是一首歌這是一首歌</a>
                </p>
              </li>

              <li>
                <div className="u-cover">
                  <img src={ require("./images/jiantian1.jpg")} alt="" />
                </div>
                <p className="dec">
                  <a href="">這是一首歌這是一首歌</a>
                </p>
              </li>

              <li>
                <div className="u-cover">
                  <img src={ require("./images/hermen.jpg")} alt="" />
                </div>
                <p className="dec">
                  <a href="">這是一首歌這是一首歌</a>
                </p>
              </li>

              <li>
                <div className="u-cover">
                  <img src={ require("./images/mei.jpg")} alt="" />
                </div>
                <p className="dec">
                  <a href="">這是一首歌這是一首歌</a>
                </p>
              </li>

              <li>
                <div className="u-cover">
                  <img src={ require("./images/jiantian1.jpg")} alt="" />
                </div>
                <p className="dec">
                  <a href="">這是一首歌這是一首歌</a>
                </p>
              </li>

              <li>
                <div className="u-cover">
                  <img src={ require("./images/QIMU.JPG")} alt="" />
                </div>
                <p className="dec">
                  <a href="">這是一首歌這是一首歌</a>
                </p>
              </li>




            </ul>
          </div>


          {/* 排行榜 */}
          <div className="home-content-right">
              <div className="right-top">热门博客</div>
              <div className="right-blog">
                <ul>
                  <li>B站快速记忆韩语四十音</li>
                  <li>安宁老师《日语新思维》</li>
                  <li>N1-N5红蓝绿宝书</li>
                  <li>遇到的CSS问题总结</li>
                  <li>中日英语翻译练习(1)</li>
                  <li>中日英语翻译练习(2)</li>
                  <li>中日英语翻译练习(3)</li>

                  <li>一个博客</li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
