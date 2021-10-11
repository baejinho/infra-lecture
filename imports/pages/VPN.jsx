import React, { Component } from 'react';

 
import "./VPN.scss";  
 

export default class VPN extends Component {
    

  render() { 

    return (
      <div style={{padding:150, color:"white"}}>
        <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold" }}>VPN 이란</div>


        <div style={{ fontSize: 20, marginTop:20}}>
        VPN은 인터넷과 같이 안전하지 않은 공용 네트워크를 통해 사설 네트워크에 연결하는 안전한 방법을 제공합니다. 비보안 공용 네트워크를 통해 전송되는 데이터는 보안을 유지하기 위해 암호화됩니다. VPN은 인증 된 사용자 만 액세스 할 수 있도록 허용하며 이는 인증을 통해 수행됩니다. VPN은 사용자 인증을 위해 암호, 생체 인식 등을 사용합니다. VPN은 조직에서 원격 위치에있는 작업자와 데이터 및 기타 네트워크 리소스를 공유하기 위해 널리 사용됩니다. VPN을 사용하면 조직의 네트워크를 원격 위치에있는 사무실과 연결하기 위해 전용 회선이 필요하지 않으므로 조직의 네트워크 비용을 줄일 수 있습니다. VPN은 트래픽을 전송하는 데 사용하는 프로토콜, 보안 조항, VPN이 사이트 간 또는 원격 액세스를 제공하는지 여부 등과 같은 요인에 따라 달라질 수 있습니다.
        VPN은 2~7계층!
        </div>

        <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold",marginTop:30}}>VPN의 종류</div>


        <div style={{ fontSize: 20, marginTop:20}}>
        <br /> 1) IPsec VPN<br /><br /> 
          ▶ IPsec VPN은 VPN 게이트웨이(서버) 장비 2개를 서로 연결함으로써 네트워크와 네트워크를 연결하는 VPN입니다.
 <br /> 
           <br /> 2) SSL VPN<br /><br /> 
          ▶ SSL VPN은 VPN 게이트웨이(서버) 장비1개와 VPN클라이언트를 인터넷 웹브라우저를 통해 연결하는 VPN입니다.
 <br />
          
        </div>

        <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold",marginTop:30}}>IPSec VPN의 장점</div>


          ​
          <div style={{ fontSize: 20, marginTop:20}}>
          지점(현장) VPN 장비의 규모에 따른 모든 트래픽 처리가 가능합니다.<br /> 

          통합관리서버를 통해 지점(현장)의 장비를 통합 관리가 용이하며, 같은 형태의 구성 환경을 통해 S/W 방식보다 안정적인 운용을 할 수 있습니다.<br /> 

          보안 수준과 암호화 기능이 뛰어나며 높은 보안 수준이 유지가 가능합니다.<br /> 

          다양한 환경에 적용, 고객의 어플리케이션과 독립적으로 운영하여 투명성을 제공합니다.<br /> 

          다양한 인터넷 접속 기술을 활용할 수 있습니다.<br /> 

          고객사 고유 정책을 반영하여 통신망 구축이 가능합니다.<br /> 
          </div>


      <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold",marginTop:30}}>IPSec VPN의 단점</div>
 

      ​
      <div style={{ fontSize: 20, marginTop:20}}>

      높은 초기 도입 비용이 발생합니다. (각 지점마다의 VPN 장비가 필요)<br /> 

      지속적인 관리 비용이 발생하며, 대규모 원격 접속 환경에는 다소 부족함이 있습니다.<br /> 
      </div>

      <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold",marginTop:30}}>SSL VPN의 장점</div>
 

      ​
      <div style={{ fontSize: 20, marginTop:20}}>
      별도 지점(현장)에 장비의 설치 없이 웹 브라우저 또는 클라이언트 애플리케이션으로 VPN 구현이 가능합니다.<br /> 

      뛰어난 사용성 및 관리의 편의성을 제공합니다.<br /> 

      별도 지점(현장)에 장비의 설치가 없다 보니 초기 구축 비용이 비교적 저렴합니다.<br /> 
      </div>
      
      <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold",marginTop:30}}>SSL VPN의 단점</div>
      ​
      <div style={{ fontSize: 20, marginTop:20}}>
      적용 가능한 애플리케이션이 제한적입니다. (예, UDP 사용 제한)<br /> 

      SSL 자체의 부하가 심합니다. 쓰리핸드쉐이킹 지연과 암호화/복호화 지연으로 인해 센터 서버 측 및 클라이언트 환경의 요구 스펙 사항이 상승합니다.<br /> 

      여전히 구식 SSLv3 프로토콜을 사용하는 방식이 많으며, 이는 외부 침입으로부터 결코 안전하다고 보기 어렵습니다.<br /> 

      SSL VPN 중 약 75%는 신뢰할 수 없는 SSL 인증서를 사용하여, 잠재적인 외부 침입에 대한 길을 열어줍니다.<br /> 

      유사한 74%의 인증서에 안전하지 않은 SHA-1 서명이 있는 반면, 5%가량은 이전 MD5 기술을 사용하여 노후화된 기술이 잠재적인 공격을 견딜 수 있을 만큼 강력하지 않습니다.<br /> 

      OpenSSL을 사용하거나 의존하는 모든 제품에 영향을 미쳐, 외부 침입자가 시스템의 메모리에서 암호화 키 등과 같은 민감한 데이터를 추출할 수 있는 직접적인 방법이 생성 가능합니다. 이는 치명적인 침입을 발생시킬 수 있습니다.<br /> 
      </div>
    </div>


    );
  }

}
