import React, { Component } from 'react';


import "./Join.scss"; 

export default class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mysignalAgree : false,
      payAgree:false, 
      personalAgree: false, 
      thirdAgree:false,
      promotionAgree:false,
      allAgree:false,
      email:"",
      password:"",
      confirmpassword:"",
      name:"",
      phone:""
    }; 
  }  

  Join = () =>{
    
    if(this.state.mysignalAgree==true&&
      this.state.payAgree==true&&
      this.state.personalAgree==true){
       
        
      if(this.state.email==null|| this.state.email==""){
        alert("이메일 정보는 필수 정보 입니다.");
        return ;
      }


      if(this.state.name==null|| this.state.name==""){
        alert("이름은 필수 정보 입니다.");
        return ;
      }


      if(this.state.phone==null|| this.state.phone==""){
        alert("전화번호는 필수 정보 입니다.");
        return ;
      }



      if(this.state.password==null|| this.state.password==""){
        alert("패스워드를 입력해주세요.");
        return ;
      }


      if(this.state.confirmpassword==null|| this.state.confirmpassword==""){
        alert("패스워드를 확인해주세요!");
        return ;
      }

      if(this.state.password!=  this.state.confirmpassword){
        alert("패스워드 정보가 맞지 않습니다. 확인해주세요.");
        return ;
      }

      const values = {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        phone: this.state.phone,
        mysignalAgree: this.state.mysignalAgree, 
        payAgree:this.state.payAgree, 
        personalAgree:this.state.personalAgree, 
        thirdAgree:this.state.thirdAgree,  
        promotionAgree:this.state.promotionAgree
      };
      Meteor.call("user.createAccount", values, (error, result) => {
        if (error) { 
          
          return;
        }

       
        Meteor.loginWithPassword(values.email, values.password, error => {
          if (error) {
            console.debug(error);
            alert(error.reason);
            return;
          }

          alert("회원가입이 완료되었습니다. ");
          
        });
       
      });

    }else{
      alert("필수 정보에 동의를 해야 합니다.");
    }
  }
  render() {
    return (
      <div style={{marginTop:61, background:"black", width:"100%", height: "100%", paddingLeft:100, paddingRight: 100}}>
        <div style={{display:"flex", height: 820}}>
          <div style={{width:"30%", color:"#00ff70"}}>
             
          </div>
          <div style={{width:"35%"}}>
            <div style={{display:"flex", paddingTop:10}}>
              <div style={{width:80, paddingRight:10, textAlign:'right', color:"#FFFFFF", fontSize:14, marginTop:15}}>
                이메일
              </div>
              <div style={{width:"calc(100% - 80px)"}}>
                <input type="email" className="join-input" onChange={ e => {
        this.setState({
          email: e.target.value
        });
      }}/>
                <div style={{color:"#b2b2b2", fontSize:12, marginTop:5}}>이메일은 결제내역 받기, 비밀번호 찾기 등에 사용되므로 정확
하게 입력해 주세요. </div>
              </div>
            </div>
            <div style={{display:"flex"}}>
              <div  
              style={{width:80, paddingRight:10, textAlign:'right', color:"#FFFFFF", fontSize:14, marginTop:15}}>
                 비밀번호
              </div>
              <div style={{width:"calc(100% - 80px)"}}>
                <input onChange={ e => {
        this.setState({
          password: e.target.value
        });
      }} type="password" placeholder="비밀번호 입력"  className="join-input"/>
                <div style={{color:"#b2b2b2", fontSize:12, marginTop:5}}>6 ~ 20자 영문 대소문자, 숫자, 특수문자 중 2가지 이상 조합</div>
                <input onChange={ e => {
        this.setState({
          confirmpassword: e.target.value
        });
      }} type="password" placeholder="비밀번호 다시 입력"  className="join-input"/>
              </div>
            </div>
            <div style={{display:"flex"}}>
              <div style={{width:80, paddingRight:10, textAlign:'right', color:"#FFFFFF", fontSize:14, marginTop:15}}>
                이름
              </div>
              <div style={{width:"calc(100% - 80px)"}}>
                <input  onChange={ e => {
        this.setState({
          name: e.target.value
        });
      }}  className="join-input" />
              </div>
            </div>
            <div style={{display:"flex"}}>
              <div style={{width:80, paddingRight:10, textAlign:'right', color:"#FFFFFF", fontSize:14, marginTop:15}}>
                전화번호
              </div>
              <div style={{width:"calc(100% - 80px)"}}>
                <input  onChange={ e => {
        this.setState({
          phone: e.target.value
        });
      }}   className="join-input"/>
              </div>
            </div>

            <div style={{display:"flex", marginTop:40, marginBottom:10, borderBottom:"1px solid #363636", paddingBottom:10}}>
              <div style={{width:80, paddingRight:10, textAlign:'right'}}>
                {this.state.allAgree?
                  <img
                  style={{ width: 18, height: 18, cursor: "pointer" }}
                  onClick={()=>{
                    this.setState({allAgree:false, mysignalAgree:false, payAgree:false, personalAgree:false, thirdAgree:false, promotionAgree:false})
                  }}
                  src="/images/check_on.png"
                />:<img
                  style={{ width: 18, height: 18, cursor: "pointer" }}
                  onClick={()=>{
                    this.setState({allAgree:true, mysignalAgree:true, payAgree:true, personalAgree:true, thirdAgree:true, promotionAgree:true})
                  }}
                  src="/images/check_off.png"
                />
                }
              </div>
              <div style={{width:"calc(100% - 80px)", color:"#FFFFFF", fontSize:14}}>
                아래 내용에 모두 동의합니다.
              </div>
            </div> 

            <div style={{display:"flex", marginTop:10}}>
              <div style={{width:80, paddingRight:10, textAlign:'right'}}>
              {this.state.payAgree?
                  <img
                  style={{ width: 18, height: 18, cursor: "pointer" }}
                  onClick={()=>{
                    this.setState({payAgree:false})
                  }}
                  src="/images/check_on.png"
                />:<img
                  style={{ width: 18, height: 18, cursor: "pointer" }}
                  onClick={()=>{
                    this.setState({payAgree:true})
                  }}
                  src="/images/check_off.png"
                />
                }
              </div>
              <div style={{width:"calc(100% - 80px)", color:"#FFFFFF", fontSize:14}}>
                전자금융서비스 이용약관
              </div>
            </div>

            <div style={{display:"flex", marginTop:10}}>
              <div style={{width:80, paddingRight:10, textAlign:'right'}}>
              {this.state.personalAgree?
                  <img
                  style={{ width: 18, height: 18, cursor: "pointer" }}
                  onClick={()=>{
                    this.setState({personalAgree:false})
                  }}
                  src="/images/check_on.png"
                />:<img
                  style={{ width: 18, height: 18, cursor: "pointer" }}
                  onClick={()=>{
                    this.setState({personalAgree:true})
                  }}
                  src="/images/check_off.png"
                />
                }
              </div>
              <div style={{width:"calc(100% - 80px)", color:"#FFFFFF", fontSize:14}}>
                개인정보 수집 및 이용
              </div>
            </div>


            <div style={{display:"flex", marginTop:10}}>
              <div style={{width:80, paddingRight:10, textAlign:'right'}}>
              {this.state.thirdAgree?
                  <img
                  style={{ width: 18, height: 18, cursor: "pointer" }}
                  onClick={()=>{
                    this.setState({thirdAgree:false})
                  }}
                  src="/images/check_on.png"
                />:<img
                  style={{ width: 18, height: 18, cursor: "pointer" }}
                  onClick={()=>{
                    this.setState({thirdAgree:true})
                  }}
                  src="/images/check_off.png"
                />
                }
              </div>
              <div style={{width:"calc(100% - 80px)", color:"#FFFFFF", fontSize:14}}>
               (선택) 개인정보 제3자 제공동의
              </div>
            </div>
            

            <div style={{display:"flex", marginTop:10}}>
              <div style={{width:80, paddingRight:10, textAlign:'right'}}>
              {this.state.promotionAgree?
                  <img
                  style={{ width: 18, height: 18, cursor: "pointer" }}
                  onClick={()=>{
                    this.setState({promotionAgree:false})
                  }}
                  src="/images/check_on.png"
                />:<img
                  style={{ width: 18, height: 18, cursor: "pointer" }}
                  onClick={()=>{
                    this.setState({promotionAgree:true})
                  }}
                  src="/images/check_off.png"
                />
                }
              </div>
              <div style={{width:"calc(100% - 80px)", color:"#FFFFFF", fontSize:14}}>
                (선택) 프로모션 정보 수신동의
              </div>
            </div>

            <div onClick={()=>{this.Join()}}style={{cursor:"pointer",marginTop:50, color:"black", background:"white", fontSize:16, textAlign:"center", height: 40, padding:8}}>
              회원가입
            </div>
          </div>
          <div style={{width:"30%"}}></div>
        </div>
      </div>
    );
  }
}
