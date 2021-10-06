import React, { Component } from 'react';
import {
  Router,
  Route,
  Redirect,
  Switch,
  withRouter,
  Link
} from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

import { createBrowserHistory } from "history";


import HomePage from "../pages/Home";
 
import Service from "../pages/Service";  


import VLAN from "../pages/VLAN";
import VPN from "../pages/VPN";
import NFV from "../pages/NFV";
 
  
 


import LoginPage from "../pages/Login";
import JoinPage from "../pages/Join"; 

 
import { Menu, Dropdown, Modal, Checkbox, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';

 

import 'antd/dist/antd.css';
import "./App.scss"; 

const appHistory = createBrowserHistory();

 


class Header extends Component {
  state = {
    visible: false,
    langtext : "한국어 / KR",
    isLoginModal :false,
    isCartModal: false, 
    email:"",
    password:"",
    menuModal: false,
    left: false,
    cartList:[]
  }

   
 
  handleVisibleChange = flag => {
    this.setState({ visible: flag });
  };

  fetchCartToggle = (soundId) =>{
    let user = Meteor.user();
    if(user!=null){
      Meteor.call("sounds.toggleCart", {userId:user._id, soundId}, (error, result) => {
        if (error) { 
          
          return;
        }

      console.log(result)
      if(result==undefined){
        alert("장바구니에 추가 되었습니다.")
      }

      this.fetchCart();
      })
    }else{
      alert("로그인이 필요합니다.");
    }
  }


  fetchCart = () =>{
    //sounds.cartList
    let user = Meteor.user();
    Meteor.call("sounds.cartList", {cartList:user.profile.cart?user.profile.cart:[]}, (error, cartList) => {
      if (error) { 
        
        return;
      }

     console.log(cartList)


      this.setState({cartList, isCartModal:true});
    })
  }
  onPayment = () =>{
     /* 1. 가맹점 식별하기 */
     const { IMP } = window;
     IMP.init('imp94064867');
     let totalPrice = 0;
     this.state.cartList.map(item=>{
      totalPrice += item.price;
     });
     const user = Meteor.user();

     /* 2. 결제 데이터 정의하기 */
     const data = {
       pg: 'html5_inicis',                           // PG사
       pay_method: 'card',                           // 결제수단
       merchant_uid: `mid_${new Date().getTime()}`,  // 주문번호
       amount: totalPrice,                                 // 결제금액
       name: '아임포트 결제 데이터 분석',                  // 주문명
       buyer_name: user.profile&&user.profile.name,                           // 구매자 이름
       
       buyer_email: (user.emails.length>0)?user.emails[0].address :"test@naver.com"            // 구매자 이메일 
        
     };
 
     /* 4. 결제 창 호출하기 */
     IMP.request_pay(data, this.callback);
  }

  callback = (response) => {
    const {
      success,
      merchant_uid,
      error_msg 
    } = response;

    if (success) {
      alert('결제 성공');
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }
  onLogin = () =>{
    Meteor.loginWithPassword(this.state.email, this.state.password, error => {
      if (error) {
        console.debug(error);
        if (
          error.reason === "Incorrect password" ||
          error.reason === "User not found"
        ) {
          alert("로그인 아이디 및 패스워드를 확인해 주세요.")
        }
        return;
      }
      alert("로그인이 완료 되었습니다.");
      this.setState({isLoginModal:false},()=>{
        
      });
    });
  }

  renderPC(){

    let color = "#FFFFFF";
    let selectedcolor = "#00ff70";

    let totalPrice = 0;
    const menu = (
      <Menu  >
        <Menu.Item key="1">한국어 / KR</Menu.Item> 
      </Menu>
    );
    return ( <div style={{minWidth:1290,width:1290, margin:"0px auto",background:"#000000", display:"flex",justifyContent:"space-between",
  alignItems: "center"}}>
      
      <Modal
       style={{marginTop: 30}} 
       bodyStyle={{background:"#0f0f0f", height:350, border:"1px solid white"}}
       visible={this.state.isLoginModal} 
       footer={null}
       height={450}
       width={640}
       onOk={()=>{}} 
       onCancel={()=>{
        this.setState({isLoginModal:false});}}>
        <div
          style={{
            fontWeight: "bold",
            fontSize: 18,
            position: "relative"
          }}
          onClick={()=>{this.setState({isLoginModal:false})}}
          >
          <div
            style={{ width: 25, position: "absolute", right: 0, top: 0 , color:"white"}}
            
          >
          X
          </div>
        </div>
        <div style={{width:450, margin:"40px auto"}}>
            <div  style={{width:"100%"}}>
            
            <Input value={this.state.email} 
             onChange={e=>{
               
               this.setState({email:e.target.value})
               }}
             className="loginInputStyle" placeholder="이메일" placeholderStyle={{color:"#00ff70"}} type=""/>
            </div>
            <div style={{width:"100%", marginTop: 34}}>
            <Input 
            onChange={e=>{
               
               this.setState({password:e.target.value})
               }}
               value={this.state.password} className="loginInputStyle"   placeholder="패스워드" 
               placeholderStyle={{color:"white"}} type="password" />
            </div>
            

            <div onClick={()=>{this.onLogin()}} style={{width:"100%", background:"white", color:"black", marginTop: 34, padding: 10, textAlign:"center"}}>
              로그인
            </div>
            <div style={{width:"100%", marginTop: 5, display:"flex", justifyContent:"space-between", fontSize:14,
    alignItems: "center"}}>
              
              <div style={{ display:"flex",
    alignItems: "center"}}>
              <Checkbox className="loginCheckbox" />
              <div style={{marginLeft:10, color:"#808080", fontSize:12}}>아이디 저장</div></div>
             
              <div  style={{ display:"flex", color:"#808080", fontSize:12}}>
                <div style={{cursor:"pointer"}}>아이디 찾기 | </div>
                <div style={{cursor:"pointer"}}>비밀번호 찾기 | </div>
                <div style={{cursor:"pointer"}} onClick={()=>{
                  this.props.history.push("/join");
                }}>회원가입</div>
              </div>

            </div>
            

        </div>
        

      </Modal>
      
      

      <Modal
      style={{marginTop: 30}} 
      bodyStyle={{background:"#0f0f0f", height:610, border:"1px solid #00ff70"}}
      visible={this.state.isCartModal} 
      footer={null}
      height={610}
      width={550}
      onOk={()=>{}} 
      onCancel={()=>{
       this.setState({isCartModal:false});}}>
       <div
         style={{
           fontWeight: "bold",
           fontSize: 18,
           position: "relative"
         }}
         onClick={()=>{this.setState({isCartModal:false})}}
         >
         <img
           style={{ width: 25, position: "absolute", right: 69, top: 50, cursor:"pointer" }}
           src="/images/popup_close.png"
         />
       </div>
       <div style={{width:350, margin:"40px auto"}}>
           <div  style={{width:"100%"}}>
           <div style={{color:"#00ff70", fontSize:28}}>프로필 소리</div>
           </div>
           <div style={{width:"100%", marginTop: 34, maxHeight: 300, overflow:"auto",
      scrollbarColor: "#00ff70"}}>
            {this.state.cartList && this.state.cartList.map(item=>{
              totalPrice += item.price;
              return <div style={{height:64, borderBottom:"1px solid #464646", display:"flex",
              flexDirection:"row",  justifyContent:"flex-start", alignItems:"center",
              }}>
                <div style={{width:30}}>
                  <img src="/images/play.png" style={{width: 30 }} />
                </div>
                <div  style={{color:"#00ff70", fontSize:14, marginLeft: 10, width: 145}}>
                  {item.title}
                </div>
                <div style={{color:"#ff0092", fontSize:14, width: 80}}>
                + V O I C E
                </div>
                <div style={{color:"#00ff70", width:80, fontSize:16}}>
                 {`${item.price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                </div> 
                <div style={{width:15, cursor:"pointer"}} onClick={()=>{
                  //this.fetchCartToggle(item._id);
                  this.props.history.push("/cart");
                }}>
                <img src="/images/search-delete.png"  style={{width: 10 }}
                  />
                </div>
            
              </div>
            })}
           </div>

           <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", paddingTop: 30
          , borderTop:"1px solid #00ff70"}}>
              <div style={{color:"#00ff70"}}>
                총 결제예정 금액
              </div>
              <div style={{color:"#ff0092"}}>
               {`${totalPrice}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
              </div>
           </div>

           <div style={{display:"flex", marginTop: 30 }}>
           <div onClick={()=>{this.setState({isCartModal:false})}} style={{width:"100%", border:"1px solid #00ff70", color:"#FFFFFF",  padding: 10, textAlign:"center", marginRight: 5, cursor:"pointer"}}>
              취소
            </div>
            <div onClick={()=>{this.onPayment()}} style={{width:"100%", background:"#e21ba5", color:"#FFFFFF",  padding: 10, textAlign:"center", marginLeft: 5, cursor:"pointer"}}>
            결제 및 구매하기
            </div>
           </div>
           
           

       </div>
       

     </Modal>
          <div
           style={{fontSize:30,width:180, marginTop: 10, marginRight: 5, fontFamily:"Mark Pro Heavy", color:"white"}}
           onClick={()=>{this.props.history.push("/")}}
           >
             Network {"\n"}
             INFRA
           </div> 
        
        
          
        <div style={{display:"flex", width: '50%' , height: 110,  flexDirection:"column",
        alignItems: "flex-end", justifyContent:"flex-start"}}>
    
        
        <div style={{display:"flex", marginTop: 20}}>

          <div style={{width:160, marginTop: 10, color: 
          this.props.location.pathname === "/vlan"?selectedcolor:color, textAlign:"center", fontSize:13, cursor:"pointer", fontFamily:"Mark Pro Heavy", letterSpacing:5}}
            onClick={()=>{this.props.history.push("/vlan")}}>
        
            VLAN
          </div>
          <div style={{width:160, marginTop: 10, color: 
            this.props.location.pathname === "/vpn"?selectedcolor:color, textAlign:"center", fontSize:13, cursor:"pointer", fontFamily:"Mark Pro Heavy", letterSpacing:5}}
              onClick={()=>{this.props.history.push("/vpn")}}>
          
            VPN
          </div>
          <div style={{width:160, marginTop: 10, color: 
            this.props.location.pathname === "/nfv"?selectedcolor:color, textAlign:"center", fontSize:13, cursor:"pointer", fontFamily:"Mark Pro Heavy", letterSpacing:5}}
              onClick={()=>{this.props.history.push("/nfv")}}>
            NFV
          </div>  


         
          <img
          style={{width:24, height:24,  marginTop: 5, marginRight: 14, marginLeft: 14, cursor:'pointer'}}
          src="/images/profile.png"
          onClick={()=>{
            
            
            const user = Meteor.user();
            console.log(user)

            if(user==null){
              console.log(1)

              this.setState({isLoginModal:true}, ()=>
              {
                console.log(this.state.isLoginModal)
              });
              
            }else{
              
            } 
            
          }}
          />
        </div>
       
       

        </div>
  </div>)
     
  } 
  render() { 

    return (
      <div>
      
        <div className="appPC"> {this.renderPC()}</div> 
      </div>
    );
  }
}



class Footer extends Component {
  state = {
  }

  renderPC(){

    return (<div style={{minWidth:1290,width:1290, height: 400, margin:"0px auto",background:"#000000",color:"#FFFFFF", display:"flex", justifyContent:"center",
    alignItems: "center", position:"relative"}}>
          <div
          style={{width:170, marginTop: 10, marginRight: 50, fontSize:25}} 
          onClick={()=>{this.props.history.push("/")}}
          >
          INFRA
          </div>
          <div>
            
            <div  style={{width:1000,display:"flex", marginTop:10, justifyContent:"space-between"}}>
              <div style={{display:"flex"}}>
                <div style={{fontSize:16, color:"#ccc", marginTop:5, fontFamily:"Noto Sans"}}>
              대표번호 000-000-0000&nbsp;&nbsp;&nbsp;<br />
              E-MAIL baeno@nate.com &nbsp;&nbsp;&nbsp;<br /> 
              <span style={{color:"#666666", fontFamily:"Mark Pro Heavy"}}>Copyright by 배진호, All Right Reserved.</span><br />
                </div>
 
               
              </div>
              <div  style={{width:220, display:"flex", flexDirection:"column", alignItems:"flex-end"}}>
                <div style={{width:220, display:"flex", alignItems:"flex-end"}}>
                    
                  <div style={{width:100, color: '#ccc', textAlign:"right", fontSize:16, cursor:"pointer"}}
                   >
                  이용약관
                  
                  </div>

                  <div style={{width:130, color: '#ccc', textAlign:"right", fontSize:16, cursor:"pointer" }}
                   >
                  
                  개인 정보 보호
                        
                  </div>
                </div>

                <div style={{width:161, display: 'flex',marginLeft:10, marginTop:20, justifyContent:"flex-end"}}>
                 
                <img
                style={{width:40, height:40, marginRight: 4}}
                src="/images/insta.png"
                onClick={()=>{this.props.history.push("/")}}
                />
                </div>
              </div>
             

             
            </div>
          </div>
          
            
    </div>)
     
  } 
  render() { 

    return (
      <div>
        <div className="appPC"> {this.renderPC()}</div> 
      </div>
    );
  }
}



 class App extends Component {
  state = { 
    reload:false,
    isPlay:false,
    isPause:false,
  }
  onChange= () =>{
    this.setState({reload:false})
  }
  onPlay = (item) =>{
    this.setState({isPlay:true, data: item}, ()=>{

      const track = document.querySelector('#track'+this.state.data._id._str);
        


      this.waveform = WaveSurfer.create({
        barWidth: 2,
        cursorWidth: 1,
        container: '#waveform'+this.state.data._id._str,
        backend: 'WebAudio',
        height: 20,
        progressColor: '#ff0092',
        responsive: true,
        waveColor: '#00ff70',
        cursorColor: 'transparent',
      });

      this.waveform.load(track);

      track.play();

      this.setState({isPlay:true, data: item});
    })
  }

  onPause = () =>{
    const track = document.querySelector('#track'+this.state.data._id._str);
    track.pause();
    this.setState({isPause:true}, ()=>{
     
    })
  }
  onResume = () =>{
    this.setState({isPause:false}, ()=>{
      const track = document.querySelector('#track'+this.state.data._id._str);
      track.play();
    })
  }
  renderPlay(){
    return  <div>
        <div className="appPC"> {this.renderPlayPC()}</div>
        <div className="appMobile"> {this.renderPlayMobile()}</div>
      </div>
  }
  renderPlayMobile(){
    return <div className="gradientBorder top" style={{position:"fixed",left:0,  bottom:0, height:65,
    width:"100%",  zIndex:10}}>
      <div style={{display:"flex",   height:60, background:"black", width:"100%",
    alignItems: "center"}}>
         {!this.state.isPause?
            <div onClick={()=>this.onPause()}><img
          style={{height: 29, cursor:'pointer', marginRight: 13, marginLeft: 15 }}
          src="/images/stop.png" 
          /></div>:
            <div onClick={()=>this.onResume()}><img
          style={{height: 28, cursor:'pointer', marginRight: 11, marginLeft: 15}}
          src="/images/mainplay.png" 
          /> </div>
          }
          <div style={{width:"100%"}}>
             <div style={{color:"#FFFFFF", fontSize:14, textAlign:'left'}}>
                      {this.state.data.title}
             </div>
             <div style={{color:"#FFFFFF", fontSize:10, marginTop:4}}>
                {this.state.data.option1}{"   "}
                {this.state.data.option2}{"   "}
                {this.state.data.option3}
             </div>
          </div>
          <div   style={{display:"flex",
            justifyContent: "center",
            alignItems: "center", width:100, paddingRight : 15}}><img
                      style={{width:15, margin:5}}
                      src="/images/down.png"
                      onClick={()=>{ }}
                      />
                      <img
                      style={{width:15, margin:5}}
                      src="/images/shop.png"
                      onClick={()=>{ }}
                      />
                      <img
                      style={{width:15, margin:5}}
                      src="/images/heart.png"
                      onClick={()=>{ }}
                      />
                      <img
                      style={{width:15, margin:5}}
                      src="/images/share.png"
                      onClick={()=>{ }}
                      />
                      </div> 
                    

      </div>
    </div>
  }
  renderPlayPC(){
    return <div className="gradientBorder top" style={{position:"fixed",left:0,  bottom:0, height:105,
    width:"100%",  zIndex:10}}>
      <div style={{  height:85,minWidth:1290,width:1290, background:"black",margin:"16px auto",  zIndex:11}}>
       <div  style={{display:"flex", position:"relative"}} >
        <div style={{ position:"relative", padding : 20, width:107}}>

          <div style={{position:"absolute", top:-25}}>
            <img
              style={{width:67}}
              src="/images/soundLogo.png"
               
              />
          </div>
        </div>
        
        <div style={{width:"calc(100% - 107px)"}}>
          
          <div style={{color:"#00ff70" , marginTop: 10}}> NOW PLAYING! </div>
          <div  style={{display:"flex",
            justifyContent: "space-between",
            alignItems: "center", marginTop: 5}}>
                      
                      <div style={{color:"#FFFFFF", fontSize:24, width:180, textAlign:'left'}}>
                      {this.state.data.title}</div>
                      <div style={{display:"flex"}}>
                      <img
                      style={{height: 30, marginTop: 0, cursor:'pointer', marginRight: 10}}
                      src="/images/prev.png" 
                      />
                      {!this.state.isPause?
                        <div onClick={()=>this.onPause()}><img
                      style={{height: 29, cursor:'pointer', marginRight: 13}}
                      src="/images/stop.png" 
                      /></div>:
                        <div onClick={()=>this.onResume()}><img
                      style={{height: 28, cursor:'pointer', marginRight: 11}}
                      src="/images/mainplay.png" 
                      /> </div>
                      }
                      
                      <img
                      style={{height: 30, cursor:'pointer'}}
                      src="/images/next.png" 
                      />

                      </div>
                      <div style={{position:"relative", width:200, marginLeft:20}}>
                        <div id={"waveform"+this.state.data._id._str} />
                        <audio id={"track"+this.state.data._id._str} src={this.state.data.soundUrl} />        
                      </div>
                      <div style={{ color:"#b2b2b2"}}>{this.state.data.soundTime}</div>
                      <div   style={{display:"flex",
            justifyContent: "center",
            alignItems: "center", width:120}}><img
                      style={{width:20, margin:12}}
                      src="/images/down.png"
                      onClick={()=>{ }}
                      />
                      <img
                      style={{width:20, margin:12}}
                      src="/images/shop.png"
                      onClick={()=>{ }}
                      />
                      <img
                      style={{width:20, margin:12}}
                      src="/images/heart.png"
                      onClick={()=>{ }}
                      />
                      <img
                      style={{width:20, margin:12}}
                      src="/images/share.png"
                      onClick={()=>{ }}
                      />
                      </div> 
                    </div>
                    </div>
          </div>
        </div>
    </div>
    
  }
  render() {
    console.log("render", this.props.user);  
    let user = this.props.user;
    return (
       
      <Router history={appHistory}>
          <Route path="/"  
          render={(props) => <Header {...props} onChange={this.onChange}
           />}
            />
        
          <Switch>
            <div className="app">
            {this.state.isPlay?
            this.renderPlay():
            null}
            <Route exact path="/" 
            render={(props) => <HomePage {...props} onPlay={this.onPlay}
            />}
            />
            {/* 
            사운드 기능 임시로 기능 해제

            <Route exact path="/sound" 
            render={(props) => <Sound {...props} onPlay={this.onPlay}
            />}
            />

            매거진 제외
             <Route
              exact
              path="/magazine"
              component={Magazine}
              {...this.props}
            />
            */}

            <Route exact path="/vpn" 
            render={(props) => <VPN {...props}  
            />}
            /> 


            <Route exact path="/vlan" 
            render={(props) => <VLAN {...props}  
            />}
            />  
            <Route exact path="/nfv" 
            render={(props) => <NFV {...props}  
            />}
            />  
 

             
            <Route
              exact
              path="/cart"
              render={(props) => 
                {
                  if(user) return <Cart  {...props} />;
                  if (user && !admin) return <Redirect to={{ pathname: '/', state: { from: props.location }}} />;
                }} 
            />

            <Route
              exact
              path="/service"
              component={Service}
              {...this.props}
            />

             
            <Route
              exact
              path="/login"
              component={LoginPage}
              {...this.props}
            />
            <Route
              exact
              path="/join"
              component={JoinPage}
              {...this.props}
            />
             
 
            </div>
            
            </Switch>
            <Route path="/" component={Footer} {...this.props} />
            {this.state.isPlay?<div style={{height:105}}></div> :null}
      </Router> 
    );
  }
}



export default withTracker(props => { 
  const loggingIn = Meteor.loggingIn();
  const user = Meteor.user();
  return { 
    user: !loggingIn && user 
  };
})(App);
 