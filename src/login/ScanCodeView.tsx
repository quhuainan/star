import React from "react";

import './ScanCodeView.css';

export default class ScanCodeView extends React.Component<any, any> {


    render() {
        return (
                <div className="vertical">
                    <div style={{ position: "relative", alignSelf: "flex-end", width: 52, height: 52, marginBottom: -52 }} onClick={this.props.onSwitch}>
                        <img src={require("../res/accountLogin.svg")} style={{ width: 52, height: 52, objectFit: "cover", position: 'relative', top: 0, right: 0 }} alt='' />
                        <div className="caret" />
                    </div>
                    <div style={{ padding: 24, display: "flex", flex: 1, width: "100%", justifyContent: 'center', alignItems: "center", flexDirection: "column" }}>
                        <span className="loginTitle" style={{marginBottom:16}}>手机扫码,安全登录 </span>

                        <div style={{ display: "flex", flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <img src={require("../res/code.png")} style={{ width: 140, height: 140 }} />
                        </div>
                        <div style={{ marginTop:12,flexDirection:'row',flex:"1",display:"flex" }} >
                            <img src={require("../res/scan.svg")} style={{ width: 24, height: 24 }} />
                            <div style={{ display: 'flex', marginLeft: 8, flexDirection: "column", justifyContent: "space-betwwen" }}>
                                <span style={{ fontSize: 12 }}>打开<span style={{ color: "#FF4400" }}>手机浏览器</span></span>
                                <span style={{ fontSize: 12 }}>扫一扫登录</span>
                            </div>

                        </div>
                        <div style={{ alignSelf: 'flex-end' }}>
                            <span className="smallGrayText" style={{ marginRight: 16 }}>忘记密码</span>
                            <span className="smallGrayText">免费注册</span>
                        </div>

                    </div>

                </div>
        )
    }
}