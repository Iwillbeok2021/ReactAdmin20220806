import React, { Component } from "react";
import style from "./style.less";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import ReactSVG from 'react-svg'
export default class Login extends Component {
  // 得到强大的form实体、有验证、有获取数据等等
  formRef = React.createRef();

  onFinish = (event) => {
    console.log('看看這是啥1',this.formRef.current.validateFields())
　　//验证方法三，也是页面拿到数据后的处理操作，也可以进行检验，新版本返回的是promise
    this.formRef.current.validateFields().then(value => {

        // 验证通过后进入
        console.log('驗證通過后',value);
        }).catch(err => { // 验证不通过时进入
           console.log(err);
        });
    console.log('Received values of form: ', event)
  }

handleSubmit = (event) =>{

}




  render() {
      const form = this.props.form
    return (

      <div className="login">
        <header className="login-header">
        <svg width="40" color="white" xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Storefront</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M448 448V240M64 240v208M382.47 48H129.53c-21.79 0-41.47 12-49.93 30.46L36.3 173c-14.58 31.81 9.63 67.85 47.19 69h2c31.4 0 56.85-25.18 56.85-52.23 0 27 25.46 52.23 56.86 52.23s56.8-23.38 56.8-52.23c0 27 25.45 52.23 56.85 52.23s56.86-23.38 56.86-52.23c0 28.85 25.45 52.23 56.85 52.23h1.95c37.56-1.17 61.77-37.21 47.19-69l-43.3-94.54C423.94 60 404.26 48 382.47 48zM32 464h448M136 288h80a24 24 0 0124 24v88h0-128 0v-88a24 24 0 0124-24zM288 464V312a24 24 0 0124-24h64a24 24 0 0124 24v152"/></svg>
          <h1>正木さんの小屋</h1>
          <h3>————旨在记录分享学习日语、英语、韩语(四十音的水平)  以及IT的资源与经验</h3>
          
        </header>
        <section className="login-content">
          <h2>登录</h2>
          <Form
          ref={this.formRef}
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
                     rules={[
                {
                  type:'string',
                  required: true,
                  message: '请输入用户名!',
                  pattern:/\w+/,
                  whitespace:true,
                  max:12,
                  min:4
                },

              ]}
            >
              <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  type:'string',
                  required: true,
                  message: '请输入密码!',
                  pattern:/\w+/,
                  whitespace:true,
                  max:12,
                  min:4
                },
              ]}
            >
              <Input
                 prefix={<LockOutlined className="site-form-item-icon" />}
              type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox style={{color: "aliceblue"}}>記住我啊~</Checkbox>
              </Form.Item>

              <a className="login-form-forgot"

              href="">
                忘記密碼
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{borderRadius:"10px"}}
              >
                登录
              </Button>

               <a href="" style={{color: "aliceblue"}}> 注冊</a>

               <a href="" style={{color: "aliceblue",margin:"0 70px"}}> 游客访问</a>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}


