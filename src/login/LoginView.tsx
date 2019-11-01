import React from 'react';
import './LoginView.css';
import { Input, Button, Icon, Tooltip, Form, notification } from 'antd'

export default class LoginView extends React.Component<any, any> {
   
    render() {
        return (
                <div className="vertical">
                    <div style={{ position: "relative", alignSelf: "flex-end", width: 52, height: 52, marginBottom: -52 }} onClick={this.props.onSwitch}>
                        <img src={require("../res/erCode.svg")} style={{ width: 52, height: 52, objectFit: "cover", position: 'relative', top: 0, right: 0 }} alt='' />
                        <div className="caret" />
                    </div>
                    <div style={{ padding: 24, width: "100%" }}>

                        <span className="loginTitle" >密码登录</span>
                        <Form className="loginIuput" style={{ marginTop: 16 }}>
                            <Form.Item className="inputItem" >
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="请输入账号" />
                            </Form.Item>
                            <Form.Item className="inputItem" >
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="请输入密码" />
                            </Form.Item>
                            <Form.Item >
                                <Button block type="primary" size="large">登录</Button>
                            </Form.Item>
                        </Form>
                        <div className="bootomAction" >
                            <span className="smallGrayText" style={{ marginRight: 16 }}>忘记密码</span>
                            <span className="smallGrayText">免费注册</span>
                        </div>

                    </div>
                </div>
        )
    }
}