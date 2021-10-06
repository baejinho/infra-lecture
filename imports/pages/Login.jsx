import React, { Component } from 'react';

import { Menu, Dropdown, Modal, Checkbox, Input } from 'antd';

import "./Login.scss"; 

export default class Login extends Component {
  state = {
    email:"",
    password:""
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
        this.props.history.push("/mypage");
      });
    });
  }
   
  render() {
    return (
      <div style={{width:"100%", padding: 15}}>
       
        <div style={{width:"100%", margin:"40px auto"}}>
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
          placeholderStyle={{color:"#00ff70"}} type="password" />
        </div>
        

        <div onClick={()=>{this.onLogin()}} style={{width:"100%", background:"#e21ba5", color:"#FFFFFF", marginTop: 34, padding: 10, textAlign:"center"}}>
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
    
      </div>
    );
  }
}
