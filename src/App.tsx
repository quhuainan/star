import React from 'react';
import './App.css';
import LoginView from './login/LoginView';
import ScanCodeView from './login/ScanCodeView';
import RegisterView from './login/RegisteView';


export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { longinWay: "account",account:"" }
  }
  componentDidMount() {
    document.cookie = "udb_oar=3F4C8F6AFF2DDCD908A1998702202487561AF3B983255678815DD4510C5FD84508F48DDD11B3E6CEC462B5028FACBA35A98C6C945AA1B7F2141F32B9C756D3E7872A872959C44786BC8660066200C1DAD2C6A1868968C6367A3ED852DAC0556B95295ED9E2C6BDE2E53402AC27E76B4DE2174142B302E93514CF588635FD0B73906225F33BD64F6723B0794C214F98239B8D77ACF1BA59D777F5CBE2BC61A7A830004A5A88A16A290B4E9AAD87D752659CF21F198A14DD170D67487432AE0A490BE2280B18551A79CDA2CC326608379F26575B4036556A483B830710F2FB141D6E0B50EC5C71DB2D7085BB9ADF6BBF84A25F46634CEB4E977EF1D04F14AC785E58D0873AD5A79B618E135DEC3AD9ADB3F7C79AC2F0F9F8FFA1867C73F9B69420E4DA89A39B7FA327CC448275D7DB8127B5A3A3591436D72B487A4D77E23A8A69;udb_c=AMB3MVBqAAJgAAbX11cBw16TVIgtBV3cgnqsM7lqZi8mH1OeVAYWM528LENUnAeWysaE4Fvi9fnlcaCQIapeeKHSlooUdsW8cyN4LXvS5wSH8Um9KegzlLcRPq4qEWSdCt9ZvPL_yuON_A==;udb_n=066c7e5a748b23e2752db77339cbe58a238f8b577d41f4bd5524676093088ac4c149c30a23ef5b1ce83fc27ba2bcf8a6;udb_l=CwA5NDgzODE4ODV5eY-Iul0CcwAT24YjWb_rMMIFCBDerNNlIwZXEsgzE7AAWDuHrFceaOIe1WbKvYyGZt1BZbN9_3rIL9wehJNAUNguiENygE96RX2hoRHl7FJzPou1exEVn3uphpU-weGfFJiegjopHAhrWohnd-3EF7XwteHLr-1Rbo6VAAAAAAMAAAAAAAAADgAxODAuMTY4LjM0LjE0NgQANTkyNg==;osinfo=5DF56623EDC80226E08BE9ABEF2AA889B8667017;username=948381885yy;hiido_ui=0.7044619717708209;yyuid=982164190;udboauthtmptokensec=5893D79116686F070D5BCA0BDF0E361411C2CD911A6CC5098D96F84D1187EE7DCE27323F424A71B70F78253633DD0AE8;password=541191E7B1EB4926A5993BEDEEAFAA5E04383352"
  }
  render() {
    return (
      <div style={{ marginTop: 100 }}>
        <div className='bg' style={{ flex: 1, display: 'flex' }}>

          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 120 }}  >
            {this.state.longinWay === "account" ?
              <LoginView account ={this.state.account} onSwitch={() => {
                this.setState({ longinWay: "scanCode" })
              }} onRegiste={() => {
                this.setState({ longinWay: "register" })

              }} /> : (this.state.longinWay === "scanCode") ? <ScanCodeView onSwitch={() => {
                this.setState({ longinWay: "account" })
              }} /> : <RegisterView  onLogin={(account:string) => {
                this.setState({ longinWay: "account",account:account })

              }} />}

          </div>
        </div>
      </div>
    )
  }
}
