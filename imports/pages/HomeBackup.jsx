import React, { Component } from 'react';


import WaveSurfer from 'wavesurfer.js';
import "./Home.scss"; 

export default class HomeBack extends Component {
  state = {
    sounds: []
  }

  componentDidMount() {
    this.fetchReleases();
  }
  fetchReleases = () =>{
   

    Meteor.call("main.releases", {}, (error, soundList) => {
      if (error) { 
        
        return;
      }

      
      this.setState({sounds:soundList}, ()=>{

            
        soundList.map(item=>{
          const track = document.querySelector('#track'+item._id._str);
        


            this.waveform = WaveSurfer.create({
              barWidth: 1,
              cursorWidth: 1,
              container: '#waveform'+item._id._str,
              backend: 'WebAudio',
              height: 15,
              progressColor: '#ff0092',
              responsive: true,
              waveColor: '#00ff70',
              cursorColor: 'transparent',
            });
      
            this.waveform.load(track);
 
        })

        this.setState({sounds:soundList});
       
      })
 
    })
  }
  renderPC(){
    return (
      <div className="homePC">
        <img
        style={{width:"100%"}}
        src="/images/main.png"
        />

        
        <div  style={{padding : 30,  position:"relative",
        }}>
          {/* 
           */}
           <div style={{width:94, height: 36,cursor:"pointer", color:"#00ff70", border:"solid 1px #00ff70", position:"absolute", right:10,   top : 30, fontSize:12, display:"flex", justifyContent:"center", alignItems:"center", background:"#000000", zIndex:1}}
            onClick={()=>{this.props.history.push("/sound")}}
           >M O R E</div>
          <div className="mainTitle" style={{marginBottom:40}} >NEW RELEASES</div>

          
          {this.state.sounds&&this.state.sounds.length>0?this.state.sounds.map(item=>{
              return (<div  style={{display:"flex",
    justifyContent: "space-between",
    alignItems: "center", marginTop: 15}}>
              
              <div style={{display:"flex",color:"#00ff70", fontSize:14, width:180, textAlign:'left', alignItems:"center"}}><img
              style={{width:30, marginLeft:15, marginRight: 15, cursor:"pointer"
              }}
              src="/images/play.png"
              onClick={()=>{ this.props.onPlay(item) }}
              />{item.title}</div>
              <div style={{color:"#b2b2b2", fontSize:11, width:60}}>{item.option1}</div>
              <div style={{color:"#b2b2b2", fontSize:11, width:60}}>{item.option2}</div>
              <div style={{color:"#b2b2b2", fontSize:11, width:60}}>{item.option3}</div>
              <div style={{position:"relative", width:100, marginLeft:20}}>
              
                <div>   
                  <div id={"waveform"+item._id._str} />
                  <audio id={"track"+item._id._str} src={item.soundUrl} />
                </div> 
              </div>
              <div style={{ color:"#b2b2b2"}}>{item.soundTime}</div>
              <div   style={{display:"flex",
    justifyContent: "center",
    alignItems: "center", width:120, marginLeft:10}}><img
              style={{width:20, margin:12, cursor:"pointer"}}
              src="/images/down.png"
              onClick={()=>{ }}
              />
              <img
              style={{width:20, margin:12, cursor:"pointer"}}
              src="/images/shop.png"
              onClick={()=>{ this.fetchCartToggle(item._id) }}
              />
             
              {item.liked?
                <img
              style={{width:20, margin:12, cursor:"pointer"}}
              src="/images/heart_on.png"
              onClick={()=>{this.fetchLikeToggle(item._id)  }}
              />: 
               <img
              style={{width:20, margin:12, cursor:"pointer"}}
              src="/images/heart.png"
              onClick={()=>{this.fetchLikeToggle(item._id)  }}
              />
              }
             
              <img
              style={{width:20, margin:12, cursor:"pointer"}}
              src="/images/share.png"
              onClick={()=>{ }}
              />
              </div> 
            </div>)
            }):null}
           
        </div>
        <div  style={{padding : 30,  position:"relative",
        }}>
           <div style={{width:94, height: 36, color:"#00ff70", border:"solid 1px #00ff70", position:"absolute", right:10,   top : 30, fontSize:12, display:"flex", justifyContent:"center", alignItems:"center", background:"#000000", zIndex:1}}
           
          onClick={()=>{this.props.history.push("/works")}}
          >M O R E</div>
          
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
          <div style={{width:94, height: 36, color:"#00ff70", border:"solid 1px #00ff70", position:"absolute", right:10,   top : 30, fontSize:12, display:"flex", justifyContent:"center", alignItems:"center", background:"#000000", zIndex:1}}
          
          onClick={()=>{this.props.history.push("/service")}}
          >M O R E</div>
          <div  className="mainTitle" style={{marginBottom:68}} >MAGAZINE</div>

          <div style={{width:"100%", display:"flex"}}>
            <div style={{width:"50%", margin:12}}>
              <img
                style={{width:"100%"}}
                src="/images/magazine1.png"
                onClick={()=>{ }}
                />

                <div  style={{width:"100%", marginTop:12, color:"#FFFFFF", fontSize:17}}>슬로우 스테디 클럽이 매출을 100% 증대시킬 수 있었던 이유</div>
                <div style={{width:"100%", marginTop:10, color:"#b2b2b2", fontSize:11}}>팔판동 플래그십에 이어 2018년 성수동에 두 번째 매장을 개점한 슬로우 스테디 클럽.
매출 부진으로 고심하던 마케팅팀이 매출을 획기적으로 늘릴 수 있었던 이유에 대해 알아보세요.</div>
            </div>

            <div style={{width:"50%"}}>
              <div style={{width:"100%", display:"flex"}}>
                <div style={{width:"50%", margin:12}}>
                    <img
                  style={{width:"100%"}}
                  src="/images/magazine2.png"
                  onClick={()=>{ }}
                  />
                  <div  style={{width:"100%", marginTop:12, color:"#FFFFFF", fontSize:17}}>아이유와 함께한 일주일</div>
                <div style={{width:"100%", marginTop:5, color:"#b2b2b2", fontSize:11}}>팔판동 플래그십에 이어 2018년 성수동에 두 번째 매장을 개점한 슬로우 스테디 클럽.
매출 부진으로 고심하던 마케팅팀이 매출을 획기적으로 늘릴 수 있었던 이유에 대해 알아보세요.</div>
                </div>
                <div style={{width:"50%", margin:12}}>
                    <img
                  style={{width:"100%"}}
                  src="/images/magazine3.png"
                  onClick={()=>{ }}
                  />
                  <div  style={{width:"100%", marginTop:12, color:"#FFFFFF", fontSize:17}}>넷플릭스가 한다구? 그럼 우리도 하지!</div>
                <div style={{width:"100%", marginTop:5, color:"#b2b2b2", fontSize:11}}>팔판동 플래그십에 이어 2018년 성수동에 두 번째 매장을 개점한 슬로우 스테디 클럽.
매출 부진으로 고심하던 마케팅팀이 매출을 획기적으로 늘릴 수 있었던 이유에 대해 알아보세요.</div>
                </div>
              </div>

              <div style={{width:"100%", display:"flex"}}>
                <div style={{width:"50%", margin:12}}>
                    <img
                  style={{width:"100%"}}
                  src="/images/magazine4.png"
                  onClick={()=>{ }}
                  />
                  <div  style={{width:"100%", marginTop:12, color:"#FFFFFF", fontSize:17}}>오디오 해상도와 밸런스에 대한 이야기</div>
                <div style={{width:"100%", marginTop:5, color:"#b2b2b2", fontSize:11}}>팔판동 플래그십에 이어 2018년 성수동에 두 번째 매장을 개점한 슬로우 스테디 클럽.
매출 부진으로 고심하던 마케팅팀이 매출을 획기적으로 늘릴 수 있었던 이유에 대해 알아보세요.</div>
                </div>
                <div style={{width:"50%", margin:12}}>
                    <img
                  style={{width:"100%"}}
                  src="/images/magazine5.png"
                  onClick={()=>{ }}
                  />
                  <div  style={{width:"100%", marginTop:12, color:"#FFFFFF", fontSize:17}}>Alexander 23의 히든트랙</div>
                <div style={{width:"100%", marginTop:5, color:"#b2b2b2", fontSize:11}}>팔판동 플래그십에 이어 2018년 성수동에 두 번째 매장을 개점한 슬로우 스테디 클럽.
매출 부진으로 고심하던 마케팅팀이 매출을 획기적으로 늘릴 수 있었던 이유에 대해 알아보세요.</div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
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
          {/* 
           */}
           <div style={{width:62, height: 24,fonrSize:10, cursor:"pointer", color:"#00ff70", border:"solid 1px #00ff70", position:"absolute", right:14,   top : 14, fontSize:12, display:"flex", justifyContent:"center", alignItems:"center", background:"#000000", zIndex:1}}
            onClick={()=>{this.props.history.push("/sound")}}
           >M O R E</div>
          <div className="mainTitle" style={{marginBottom:18}} >NEW RELEASES</div>

          {this.state.sounds&&this.state.sounds.length>0?this.state.sounds.map(item=>{
              return (<div  style={{display:"flex",
    justifyContent: "space-between",
    alignItems: "center", marginTop: 15}}>
              
              <div style={{color:"#00ff70",marginRight: 15, fontSize:14, width:25, textAlign:'left'}}><img
              style={{width:25,  cursor:"pointer"}}
              src="/images/play.png"
              onClick={()=>{ this.props.onPlay(item)}}
              /></div>
              <div style={{width:"100%"}}>
                <div  style={{color:"#00ff70"}}>{item.title}</div>
                <div  style={{display:"flex"}}> 
                  <div style={{color:"#b2b2b2", fontSize:10, marginRight:10}}>{item.option1}</div>
                  <div style={{color:"#b2b2b2", fontSize:10, marginRight:10}}>{item.option2}</div>
                  <div style={{color:"#b2b2b2", fontSize:10, marginRight:10}}>{item.option3}</div>
                </div>
              </div>
             
              <div   style={{display:"flex",
    justifyContent: "center",
    alignItems: "center", width:100}}><img
              style={{width:16, margin:6, cursor:"pointer"}}
              src="/images/down.png"
              onClick={()=>{ }}
              />
              <img
              style={{width:16, margin:6, cursor:"pointer"}}
              src="/images/shop.png"
              onClick={()=>{ }}
              />
              <img
              style={{width:16, margin:6, cursor:"pointer"}}
              src="/images/heart.png"
              onClick={()=>{ }}
              />
              <img
              style={{width:16, margin:6, cursor:"pointer"}}
              src="/images/share.png"
              onClick={()=>{ }}
              />
              </div> 
            </div>
         
              )})
              :null}
           
        </div>
        <div  style={{padding : 16,  position:"relative",
        }}>
           <div style={{width:62, height: 24,fonrSize:10, cursor:"pointer", color:"#00ff70", border:"solid 1px #00ff70", position:"absolute", right:14,   top : 14, fontSize:12, display:"flex", justifyContent:"center", alignItems:"center", background:"#000000", zIndex:1}}
            onClick={()=>{this.props.history.push("/works")}}
           >M O R E</div>
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
          <div style={{width:62, height: 24,fonrSize:10, cursor:"pointer", color:"#00ff70", border:"solid 1px #00ff70", position:"absolute", right:14,   top : 14, fontSize:12, display:"flex", justifyContent:"center", alignItems:"center", background:"#000000", zIndex:1}}
            onClick={()=>{this.props.history.push("/magazine")}}
           >M O R E</div>
          <div  className="mainTitle" style={{marginBottom:68}} >MAGAZINE</div>

          <div style={{width:"100%"}}>
            <div style={{width:"100%"}}>
              <img
                style={{width:"100%"}}
                src="/images/magazine1.png"
                onClick={()=>{ }}
                />

                <div  style={{width:"100%", marginTop:12, color:"#FFFFFF", fontSize:14}}>슬로우 스테디 클럽이 매출을 100% 증대시킬 수 있었던 이유</div>
                <div style={{width:"100%", marginTop:10, color:"#b2b2b2", fontSize:11}}>팔판동 플래그십에 이어 2018년 성수동에 두 번째 매장을 개점한 슬로우 스테디 클럽.
매출 부진으로 고심하던 마케팅팀이 매출을 획기적으로 늘릴 수 있었던 이유에 대해 알아보세요.</div>
            </div>

            <div style={{width:"100%"}}>
              <div style={{width:"100%", display:"flex"}}>
                <div style={{width:"50%", marginRight:5}}>
                    <img
                  style={{width:"100%"}}
                  src="/images/magazine2.png"
                  onClick={()=>{ }}
                  />
                  <div  style={{width:"100%", marginTop:12, color:"#FFFFFF", fontSize:14}}>아이유와 함께한 일주일</div>
                <div style={{width:"100%", marginTop:5, color:"#b2b2b2", fontSize:11}}>팔판동 플래그십에 이어 2018년 성수동에 두 번째 매장을 개점한 슬로우 스테디 클럽.
매출 부진으로 고심하던 마케팅팀이 매출을 획기적으로 늘릴 수 있었던 이유에 대해 알아보세요.</div>
                </div>
                <div style={{width:"50%", marginLeft:5}}>
                    <img
                  style={{width:"100%"}}
                  src="/images/magazine3.png"
                  onClick={()=>{ }}
                  />
                  <div  style={{width:"100%", marginTop:12, color:"#FFFFFF", fontSize:14}}>넷플릭스가 한다구? 그럼 우리도 하지!</div>
                <div style={{width:"100%", marginTop:5, color:"#b2b2b2", fontSize:11}}>팔판동 플래그십에 이어 2018년 성수동에 두 번째 매장을 개점한 슬로우 스테디 클럽.
매출 부진으로 고심하던 마케팅팀이 매출을 획기적으로 늘릴 수 있었던 이유에 대해 알아보세요.</div>
                </div>
              </div>

              <div style={{width:"100%", display:"flex"}}>
                <div style={{width:"50%", marginRight:5}}>
                    <img
                  style={{width:"100%"}}
                  src="/images/magazine4.png"
                  onClick={()=>{ }}
                  />
                  <div  style={{width:"100%", marginTop:12, color:"#FFFFFF", fontSize:14}}>오디오 해상도와 밸런스에 대한 이야기</div>
                <div style={{width:"100%", marginTop:5, color:"#b2b2b2", fontSize:11}}>팔판동 플래그십에 이어 2018년 성수동에 두 번째 매장을 개점한 슬로우 스테디 클럽.
매출 부진으로 고심하던 마케팅팀이 매출을 획기적으로 늘릴 수 있었던 이유에 대해 알아보세요.</div>
                </div>
                <div style={{width:"50%", marginLeft:5}}>
                    <img
                  style={{width:"100%"}}
                  src="/images/magazine5.png"
                  onClick={()=>{ }}
                  />
                  <div  style={{width:"100%", marginTop:12, color:"#FFFFFF", fontSize:14}}>Alexander 23의 히든트랙</div>
                <div style={{width:"100%", marginTop:5, color:"#b2b2b2", fontSize:11}}>팔판동 플래그십에 이어 2018년 성수동에 두 번째 매장을 개점한 슬로우 스테디 클럽.
매출 부진으로 고심하던 마케팅팀이 매출을 획기적으로 늘릴 수 있었던 이유에 대해 알아보세요.</div>
                </div>
              </div>
             
            </div>
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
