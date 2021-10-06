import React, { Component } from 'react';


import "./Privacy.scss"; 

export default class Privacy extends Component {
   

  constructor(props) {
    super(props);
    this.state = {
       type: "1" 
    }; 
  } 


  componentDidMount() {
    this.fetchPrivacy();
  }

  render() { 

    return (
      <div>
        {this.renderPC()}
        {this.renderMobile()}
      </div>
    );
  }

  fetchPrivacy= () =>{

    Meteor.call("setting.list", {settingName:"privacy"}, (error, data) => {
      if (error) { 
        
        return;
      }
      console.log(data);

      this.setState({koValue:data.koValue});

    }); 
  }

  renderMobile(){
    return (
      <div className="privacyMobile" style={{background:"black", width:"100%", height: "100%", padding: 15}}>
         <div style={{width:'100%', height: 450, border : "1px solid #00ff70", margin:"25px auto"
          , paddingTop: 65, paddingLeft: 30, paddingBottom : 65, paddingRight: 30,
          position:"relative"}}>
            <img src="/images/popup_close.png" 
            onClick={()=>{this.props.history.push("/")}}
            style={{width: 25, position: 'absolute', right: 25, top: 25}}></img>

            <div style={{color:"#00ff70", fontSize: 22}}>
            개인정보처리방침
            </div>

            <div style={{color:"white", fontSize:14, marginTop: 20, overflowY:"auto", height: 250}}>
              <div dangerouslySetInnerHTML={ {__html: this.state.koValue} }>
              </div> 
            </div>
         </div>
        
      </div>
    );
  }
  renderPC() {

    return (
      <div  className="privacyPC" style={{background:"black", width:"100%", height: "100%"}}>
         <div style={{width:985 , margin:"75px auto"
        , paddingTop: 39, paddingLeft: 82, paddingBottom : 39, paddingRight: 82,
        position:"relative"}}>
          
          <div style={{color:"white", fontSize: 40, fontFamily:"Noto Sans"}}>
          개인정보처리방침
          </div>
          <div style={{color:"white", fontFamily:"Noto Sans", display:"flex", marginTop:30}}>
            <div 
              onClick={()=>{
                this.props.history.push('/terms')
              }}
              style={{cursor:"pointer",fontSize: 20, width:236, height:60,border:"1px #808080 solid",color:"#ccc", display:"flex", justifyContent:"center", alignItems:"center"}}>
              이용약관
            </div>
            <div  
              onClick={()=>{
                this.props.history.push('/privacy')
              }}
              style={{cursor:"pointer",fontSize: 20, width:236, height:60,border:"3px #00ff70 solid",marginLeft:13, color:"#ccc", display:"flex", justifyContent:"center", alignItems:"center"}}>
              개인정보처리방침
            </div>
          
          </div>
          <div style={{color:"white", fontSize:14, marginTop: 20  }}>
            <div dangerouslySetInnerHTML={ {__html: this.state.koValue} }>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}
