import React from 'react';
import './LoginView.css';
import { Input, Button, Icon, Tooltip, Form, notification } from 'antd'

export default class RegisterView extends React.Component<any, any> {
    account = ''
    password = ""
    captcha: any;

    componentDidMount() {
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
            this.setState({ img: res.map.img, token: res.map.cToken })
        })
    }
    render() {
        return (
            <div className="vertical">
                <div style={{ padding: 24, width: "100%" }}>

                    <span className="loginTitle" >账号注册</span>
                    <Form className="loginIuput" style={{ marginTop: 16 }}>
                        <Form.Item className="inputItem" >
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="请输入账号" onChange={(text) => {
                                    this.account = text.target.value
                                }} />
                        </Form.Item>
                        <Form.Item className="inputItem" >
                            <Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="请输入密码" onChange={(text) => {
                                    console.log("输入的密码", text)
                                    this.password = text.target.value
                                }} />
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
                                console.log("注册")
                                const params: any = {
                                    user: {
                                        userNumber: this.account,
                                        userPassword: this.password
                                    },
                                    captcha: {
                                        captcha: this.captcha,
                                        token: this.state.token
                                    }
                                }
                               
                                fetch("http://47.102.128.157:8080/registered", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(params)

                                }).then((res: any) => {
                                    return res.clone().json()
                                }).then(res => {
                                    console.log("请求数据", res)
                                    if(res.code === 200){
                                        this.props.onLogin(this.account)
                                    }else{
                                        notification.info({message:"res.message"})
                                    }
                                    

                                })
                            }}>注册</Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="bootomAction" >
                    <span className="smallGrayText" onClick={this.props.onLogin}>已有账号,去登录</span>
                </div>
            </div>
        )
    }
}