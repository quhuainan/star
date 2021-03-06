import React from 'react';
import './LoginView.css';
import { Input, Button, Icon, Tooltip, Form, notification } from 'antd'

export default class LoginView extends React.Component<any, any> {
    account = ''
    password = ""
    captcha: any;
    token: any;

    constructor(props: any) {
        super(props)
        this.account = this.props.account
    }
    componentDidMount(){
        this.getCode()
    }
    getCode = () => {
        fetch("http://47.102.128.157:8080/captcha", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then((res: any) => {
            return res.clone().json()
        }).then(res => {
            console.log("请求数据", res.map)
            if(res.code === 200){
                this.token= res.map.cToken
                this.setState({ img: res.map.img })
            }else{
                notification.info({message:res.message})
            }
           
        })
    }
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
                            <Input defaultValue={this.props.account} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="请输入账号" onChange={(text) => {
                                    console.log("输入的密码", text)
                                    this.account = text.target.value
                                }} />
                        </Form.Item>
                        <Form.Item className="inputItem" >
                            <Input.Password onChange={(text) => {
                                console.log("输入的密码", text)
                                this.password = text.target.value
                            }} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="请输入密码" />
                        </Form.Item>
                        <div style={{ display: 'flex', height: 24, flexDirection: 'row', flexWrap: 'nowrap', marginBottom: 12, marginTop: 12 }}  >
                            {this.state && this.state.img && <img onClick={() => {
                                this.getCode()
                            }} src={`data:image/png;base64,${this.state.img}`} style={{ width: 100, height: 24, objectFit: "cover", position: 'relative', top: 0, right: 0 }} alt='' />}
                            <input
                                placeholder="验证码" onChange={(text: any) => {
                                    this.captcha = text.target.value
                                }} />
                        </div>
                        <Form.Item >
                            <Button block type="primary" size="large" onClick={() => {
                                const params: any = {
                                    user: {
                                        userNumber: this.account,
                                        userPassword: this.password
                                    },
                                    captcha: {
                                        captcha: this.captcha,
                                        token: this.token
                                    }
                                }

                                fetch("http://47.102.128.157:8080/login", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(params)

                                }).then((res: any) => {
                                    return res.clone().json()
                                }).then(res => {
                                    console.log("请求数据", res)
                                    notification.info({message:res.message})
                                   // res.code === 200 && this.props.onLogin(this.account)

                                })
                            }}>登录</Button>
                        </Form.Item>
                    </Form>
                    <div className="bootomAction" >
                        <span className="smallGrayText" style={{ marginRight: 16 }}>忘记密码</span>
                        <span className="smallGrayText" onClick={this.props.onRegiste}>免费注册</span>
                    </div>

                </div>
            </div>
        )
    }
}