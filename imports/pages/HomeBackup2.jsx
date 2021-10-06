import React, { Component } from 'react';

 
import "./Home.scss"; 

export default class Home extends Component {
  state = {
    sounds: []
  }

  componentDidMount() {
    this.fetchReleases();
  }
  fetchReleases = () =>{
   

    
  }
  renderPC(){
    return (
      <div className="homeMainPC">
      {/*  <img
        style={{width:"100%", height: 420, position:"absolute"
        , left:0, top:100, overflow:"hidden", contain:"content"}}
        src="/images/newmain.png"
        />*/}
       
        <div style={{backgroundImage: `url("/images/newmain.png")`  
        ,width:"100%", minWidth:1290, height: 420, left:0,top:100, position:"absolute",
        backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"50%"}}></div>
   

        <div style={{padding : 30,   position:"relative", display:"flex", margin:"420px auto 0px auto"}}>
           <img
              style={{width:"50%", marginRight:12}}
              src="/images/leftbanner.png"
              onClick={()=>{ }}
              /> 
          <img
              style={{width:"50%", marginLeft:12}}
              src="/images/rightbanner.png"
              onClick={()=>{ }}
              /> 
        </div>
        <div style={{padding : 30,   position:"relative", display:"flex", margin:"20px auto"}}>
           <img
              style={{width:"100%"}}
              src="/images/title.png"
              onClick={()=>{this.props.history.push("/title")}}
              /> 
        </div>

        <div style={{backgroundColor:"#161616"
        ,width:"100%", minWidth:1290, height: 707, left:0,top:1300, position:"absolute",
        backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"50%"}}>

            <div style={{padding : 30,   position:"relative", display:"flex", margin:"20px auto", width:1290}}>
              <img
                  style={{width:1290}}
                  src="/images/signal.png"
                  onClick={()=>{this.props.history.push("/signal")}}
                  /> 
            </div>
        </div>
   
        <div style={{padding : 30,   position:"relative", display:"flex", margin:"727px auto 0px auto"}}>
           <img
              style={{width:"100%"}}
              src="/images/bgmopen.png"
              onClick={()=>{ }}
              /> 
        </div>
        <div style={{padding : 30,   position:"relative", display:"flex", margin:"20px auto 0px auto"}}>
           <img
              style={{width:"100%"}}
              src="/images/custom.png"
              onClick={()=>{this.props.history.push("/custom")}}
              /> 
        </div>
        {/* 
        <div  style={{padding : 30,   position:"relative", display:"flex", margin:"420px auto", color:"#00ff70"
        }}>
          <div  
          onClick={()=>{this.props.history.push("/title")}}
            style={{height: 518, width:"33%", border:"3px solid #00ff70", marginRight: 12, padding:"30px 35px", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
            <div style={{fontSize:55, color:"white", fontFamily:"Mark Pro Heavy"}}>
              TITLE
            </div>
            <div  style={{fontSize:30, color:"white", fontFamily:"Noto Sans", fontWeight:"bold"}}>
              합리적인 비용으로 <br />
              당신의 브랜드를<br />
              꾸며주세요.
            </div>
          </div>
          <div 
            onClick={()=>{this.props.history.push("/signal")}}
            style={{height: 518, width:"33%", border:"3px solid #00ff70", marginRight: 12, marginLeft: 12, padding:"30px 35px"
          , display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
            <div  style={{fontSize:55, color:"white", fontFamily:"Mark Pro Heavy"}}>
              SIGNAL
            </div>
            <div  style={{fontSize:30, color:"white", fontFamily:"Noto Sans", fontWeight:"bold"}}>
            브랜드를 대표하는<br />
            멜로디 사운드를<br />
            만들어보세요.
            </div>
          </div>
          <div 
            onClick={()=>{this.props.history.push("/custom")}}
            style={{height: 518, width:"33%", border:"3px solid #00ff70", marginLeft: 12, padding:"30px 35px", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
            <div  style={{fontSize:55, color:"white", fontFamily:"Mark Pro Heavy"}}>
              CUSTOM
            </div>
            <div  style={{fontSize:30, color:"white", fontFamily:"Noto Sans", fontWeight:"bold"}}>
            브랜드에 딱 맞는<br />
            맞춤형 사운드를<br />
            제작해보세요.
            </div>
          </div>
        </div>
        <div  style={{padding : 30,  position:"relative"
        }}>
           <div style={{fontFamily:"Mark Pro Heavy", letterSpacing:5,width:140, height: 46, color:"white", border:"solid 1px #555555", position:"absolute", right:10,   top : 30, fontSize:18, display:"flex", justifyContent:"center", alignItems:"center", background:"#000000", zIndex:1}}
           
          onClick={()=>{this.props.history.push("/works")}}
          >MORE</div>
          
          <div  className="mainTitle" style={{marginBottom:49}}>WORKS</div>

          <div style={{width:"100%", display:"flex"}}>
            <div style={{width:"33%", margin:12}}>
            <img
              style={{width:"100%"}}
              src="/images/picture1.png"
              onClick={()=>{ }}
              />
            </div>
            <div style={{width:"33%", margin:12}}>
            <img
              style={{width:"100%"}}
              src="/images/picture2.png"
              onClick={()=>{ }}
              />
            </div>
            <div style={{width:"33%", margin:12}}>
            <img
              style={{width:"100%"}}
              src="/images/picture3.png"
              onClick={()=>{ }}
              />
            </div>
           
            
          </div>
          <div style={{width:"100%", display:"flex"}}>
            
            <div style={{width:"33%", margin:12}}>
            <img
              style={{width:"100%"}}
              src="/images/picture4.png"
              onClick={()=>{ }}
              />
            </div>
            <div style={{width:"33%", margin:12}}>
            <img
              style={{width:"100%"}}
              src="/images/picture5.png"
              onClick={()=>{ }}
              />
            </div>
            <div style={{width:"33%", margin:12}}>
            <img
              style={{width:"100%"}}
              src="/images/picture6.png"
              onClick={()=>{ }}
              />
            </div>
            
          </div>
       
        </div>
        <div  style={{padding : 30, position:"relative"}}>
           
          <div  className="mainTitle" style={{marginBottom:68}} >PARTNERS</div>

          <div style={{width:"100%", display:"flex"}}>
          <img
          style={{width:"100%"}}
          src="/images/partners.png"
          onClick={()=>{ }}
          />  
          </div>
        </div>
        */}
        
      </div>
    );
  }
  renderMobile(){
    return (
      <div className="homeMobile" >
        <div style={{ color:"#00ff70", fontSize:24,  margin:"32px auto 0px auto", textAlign:"center"}}>
          쉽고 빠르게 만드는<br />
          나만의 프로필 소리
        </div>
        <div style={{ color:"#FFFFFF", fontSize:13, margin:"10px auto 0px auto", textAlign:"center"}}>
          내게 필요한 사운드를 찾아보세요.<br />
          AI가 당신에게 어울는 프로필 소리를 추천해 드립니다.
        </div>

        <div style={{ color:"#FFFFFF", fontSize:13, marginTop:16, textAlign:"center"}}>
          <img
          style={{width:121}}
          src="/images/startbtn.png"
          />

        </div>

        <div style={{ color:"#FFFFFF", width:"calc(100% - 50px)", margin:"42px auto 0px auto", textAlign:"center"}}>
          <img
          style={{width:"100%"}}
          src="/images/mobile-main.png"
          />

        </div>

        <div>

        
        <div  style={{padding : 16,  position:"relative",
        }}>
           <div style={{fontFamily:"Mark Pro Heavy", letterSpacing:5,width:62, height: 24,fonrSize:10, cursor:"pointer", color:"#FFFFFF", border:"solid 1px #555555", position:"absolute", right:14,   top : 14, fontSize:12, display:"flex", justifyContent:"center", alignItems:"center", background:"#000000", zIndex:1}}
            onClick={()=>{this.props.history.push("/works")}}
           >MORE</div>
          <div  className="mainTitle" style={{marginBottom:49}}>WORKS</div>

          <div style={{width:"100%"}}>
            <div style={{width:"100%", padding:8}}>
            <img
              style={{width:"100%"}}
              src="/images/picture1.png"
              onClick={()=>{ }}
              />
            </div>
            <div style={{width:"100%", padding:8}}>
            <img
              style={{width:"100%"}}
              src="/images/picture2.png"
              onClick={()=>{ }}
              />
            </div>
            <div style={{width:"100%", padding:8}}>
            <img
              style={{width:"100%"}}
              src="/images/picture3.png"
              onClick={()=>{ }}
              />
            </div>
            <div style={{width:"100%", padding:8}}>
            <img
              style={{width:"100%"}}
              src="/images/picture4.png"
              onClick={()=>{ }}
              />
            </div>
           
            <div style={{width:"100%", padding:8}}>
            <img
              style={{width:"100%"}}
              src="/images/picture5.png"
              onClick={()=>{ }}
              />
            </div>
           
            <div style={{width:"100%", padding:8}}>
            <img
              style={{width:"100%"}}
              src="/images/picture6.png"
              onClick={()=>{ }}
              />
            </div>
           

           
            
          </div>
       
        </div>
        <div  style={{padding : 16, position:"relative"}}>
          <div style={{fontFamily:"Mark Pro Heavy", letterSpacing:5,width:62, height: 24,fonrSize:10, cursor:"pointer", color:"#FFFFFF", border:"solid 1px #555555", position:"absolute", right:14,   top : 14, fontSize:12, display:"flex", justifyContent:"center", alignItems:"center", background:"#000000", zIndex:1}}
            onClick={()=>{this.props.history.push("/magazine")}}
           >MORE</div>
          <div  className="mainTitle" style={{marginBottom:68}} >PARTNERS</div>

          <div style={{width:"100%"}}>
            <img
            style={{width:"100%"}}
            src="/images/partners.png"
            onClick={()=>{ }}
            />  
          </div>
        </div>
     
        </div>
      </div>);
  }
  render() { 

    return (
      <div>
        {this.renderPC()}
        {this.renderMobile()}
      </div>
    );
  }
}
