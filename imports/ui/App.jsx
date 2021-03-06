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
import VLAN from "../pages/VLAN";
import VPN from "../pages/VPN";
import NFV from "../pages/NFV";
   

import 'antd/dist/antd.css';
import "./App.scss"; 

const appHistory = createBrowserHistory();
 
class Header extends Component {
  state = {
    visible: false,
    langtext : "한국어 / KR", 
    email:"",
    password:"", 
    left: false 
  }
 
  renderPC(){

    let color = "#FFFFFF";
    let selectedcolor = "#00ff70";
 
    return ( <div style={{minWidth:1290,width:1290, margin:"0px auto",background:"#000000", display:"flex",justifyContent:"space-between",
  alignItems: "center"}}>
      
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
            onClick={()=>{
              console.log("VLAN");
              this.props.history.push("/vlan")
              }}>
        
            VLAN
          </div>
          <div style={{width:160, marginTop: 10, color: 
            this.props.location.pathname === "/vpn"?selectedcolor:color, textAlign:"center", fontSize:13, cursor:"pointer", fontFamily:"Mark Pro Heavy", letterSpacing:5}}
              onClick={()=>{
                console.log("VPN");
                this.props.history.push("/vpn")
                }}>
          
            VPN
          </div>
          <div style={{width:160, marginTop: 10, color: 
            this.props.location.pathname === "/nfv"?selectedcolor:color, textAlign:"center", fontSize:13, cursor:"pointer", fontFamily:"Mark Pro Heavy", letterSpacing:5}}
              onClick={()=>{
                console.log("NFV");
                this.props.history.push("/nfv")
                }}>
            NFV
          </div>  


         
          <img
          style={{width:24, height:24,  marginTop: 5, marginRight: 14, marginLeft: 14, cursor:'pointer'}}
          src="/images/profile.png"
          onClick={()=>{
            
          
            
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
  }  
  render() {
    console.log("render", this.props.user);  
    let user = this.props.user;
    return ( 
      <Router history={appHistory}>
          <Route path="/"  
          render={(props) => <Header {...props} 
           />}
            /> 
          <Switch>
            <div className="app"> 
            <Route exact path="/" 
            render={(props) => <HomePage {...props} 
            />}
            /> 

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
 
            </div>
            
            </Switch>
            <Route path="/" component={Footer} {...this.props} /> 
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
 