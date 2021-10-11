import React, { Component } from 'react';

 
import "./VLAN.scss";  
 

export default class VLAN extends Component {
    

  render() { 

    return (
      <div style={{padding:150, color:"white"}}>
         <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold"}}>VLAN 이란?</div>
         <div style={{ fontSize: 20, marginTop:20}}>
         컴퓨터 네트워크에서 여러 개의 구별되는 브로드캐스트 도메인을 만들기 위해 단일 2계층 네트워크를 분할할 수 있는데, 이렇게 분리되면 패킷들은 하나 이상의 라우터들 사이에서만 이동할 수 있다. 
         이러한 도메인을 가상 랜(영어: Virtual LAN)으로 부르며, 가상 근거리 통신망(영어: Virtual Local Area Network), 가상 LAN(영어: Virtual LAN), 또는 간단히 VLAN으로도 표기한다.
         VLAN은 1~2계층이다. 
        </div>

        <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold", marginTop: 30}}>VLAN과 VPN의 차이점?</div>
        
        <div style={{ fontSize: 20, marginTop:20}}>
        VLAN은 동일한 스위치에 연결된 것처럼 (동일한 도메인에있는 것처럼) 서로 통신하는 호스트 집합으로, 그렇지 않더라도 VPN은 다음을 통해 사설 네트워크에 연결하는 안전한 방법을 제공합니다. 원격 위치의 인터넷과 같이 안전하지 않은 공용 네트워크. VPN을 사용하면 기본 대규모 네트워크의 호스트를 사용하여 더 작은 하위 네트워크를 만들 수 있으며 VLAN은 VPN의 하위 그룹으로 볼 수 있습니다. VPN의 주요 목적은 원격 위치에서 사설 네트워크에 연결하기위한 안전한 방법을 제공하는 것입니다.
        </div>

        <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold", marginTop: 30}}>IEEE 802.1Q에 의한 VLAN 태깅 방식</div>
        
        <div style={{ fontSize: 20, marginTop:20}}>
        총 4 바이트 짜리 VLAN 태그를 이더넷 프레임 내에 삽입하는 방식  <br /><br />

        ㅇ 12 비트 짜리 식별자(VLAN ID) <br /><br />
 
          - 구분 가능한 VLAN 수 : 총 4,096개 중 0과 0xFF를 제외하여 4,094개의 VLAN 구별이 가능<br /><br />
 
          - 구분<br /><br />

          . 일반 범위 VLAN (normal range VLAN)   :  1 ~ 1,005<br /><br />

          . 연장 범위 VLAN (extended range VLAN) :  1005 ~ 4,094  <br /><br />

        </div>

        <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold", marginTop: 30}}>IEEE 802.1Q</div>
        
        <div style={{ fontSize: 20, marginTop:20}}>
        IEEE 802.1Q 는 하나의 이더넷 네트워크에서 가상 랜(VLAN)을 지원하는 네트워크 표준이다. 이 표준은 이더넷 프레임을 위한 VLAN 태그 추가 시스템과 더불어, 이러한 프레임을 관리하는데 동반되는 브리지와 스위치에 쓰이는 절차들을 정의한다.
        </div>

        <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold", marginTop: 30}}>VLAN 의 종류</div>
        
        <div style={{ fontSize: 20, marginTop:20}}>
        <br /> 1) Port-based VLAN<br /><br /> 
          ▶ Port 번호에 의한 VLAN 구분방법<br /> 
          ▶ 많은 단말이 하나의 LAN segment에 놓여있을 경우 개별 단말과 관계없는 다량의 Broadcast traffic으로 인해 Bridged LAN 전체의 대역폭이 불필요하게 낭비될 가능성이 점점 높아진다.<br /> 
          ▶ Port-based VLAN을 설정해 마치 두대 이상의 HUB로 나뉘어진 것과 같은, traffic 유리화가 가능하다.<br /> 
          ▶ 상용장비에서의 Port-based VLAN이란, VLAN tagging을 필요로 하지않는, 오로지 수신포트의 PVID에 의해서만 VLAN을 구분하는 방식을 가리키는 의미로 사용되나, 엄밀히 말하자면 VLAN tagging 하느냐에 관계없이 member port를 설정하는방식으로 VLAN을 정의하는 것이 모두 port-based VLAN이다.<br /> 
          <br /> 2) Protocol-based VLAN<br /><br /> 
          ▶ Ethernet Payload의 내용에 따라 별개의 Forwarding 정책을 적용하고 싶을때 사용함<br />
          <br /> 3) IP-based VLAN<br /><br /> 
          ▶ Source IP address에 의해 VLAN을 구분하는 방법<br />
          <br /> 4) MAC-based VLAN<br /><br /> 
          ▶ VLAN을 구분짓는 여러가지 기준들이 사용되어 왔으며, 이중 IEEE standard로 표준화된 것은 Port-based VLAN(tagged, untagged)과 Protocol-based VLAN(IEEE802.1v-2001)이다.<br />
          ▶ Layer 2 switching에 의한 통신은 VLAN 내에서만 이루어진다.
        </div>


        
      </div>
    );
  }

}
