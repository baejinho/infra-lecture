import React, { Component } from 'react';


import "./Service.scss"; 


export default class Service extends Component {
  

  render() { 

    return (
      <div>
        {this.renderPC()}
        {this.renderMobile()}
      </div>
    );
  }

  renderMobile(){
    
  }
  renderPC() {
    return (
      <div style={{background:"black", width:"100%", height: "100%"}}>
        <div>
        <img
              style={{width:"100%"}}
              src="/images/servicecapture.png"
              onClick={()=>{ }}
              />
        </div>
      </div>
    );
  }
}
