import React, { Component } from 'react';

 
import "./NFV.scss";  
 

export default class NFV extends Component {
   
  state = {
    isTitleOver :false,
    isSignalOver:false,
    isCustomOver:false
  }

  render() { 

    return (
      <div style={{padding:150, color:"white"}}>
          <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold"}}>NFV 란?</div>
     
          <div style={{ fontSize: 20, marginTop:20}}>
            Network function virtualization 의 약자로 네트워크 기능 가상화라는 의미를 가진다.
            NFV는 7계층에 해당하는 가상화.
          </div>

          <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold", marginTop:30}}>네트워크 가상화</div>
     
          <div style={{ fontSize: 20, marginTop:20}}>
        엔터프라이즈 네트워킹 관리자에게는 감당하기 어려울 정도로 네트워크 변경 요청이 쏟아진다. 변화에 대한 IT의 응답성을 개선하기 위해서는 네트워크를 자동화할 방법이 필요하다. 보통 이 경우 우리는 하나의 문제, 'VM을 서로 다른 논리적 영역으로 어떻게 옮길 것인가'를 해결하려고 한다. 네트워크 가상화는 말 그대로 흐름 수준에서 논리적으로 네트워크를 분할함으로써 기존 네트워크에 논리적 구역을 만드는 것이다(하드 드라이브에 파티션을 나누는 것과 비슷함).

        네트워크 가상화는 오버레이, 즉 터널이다. 네트워크에 있는 두 도메인을 물리적으로 연결하지 않고 기존 네트워크를 통과하는 터널을 만들어 두 도메인을 연결하는 것이다. 네트워크 가상화의 가치는 특히 가상머신을 위해 관리자가 각각의 새로운 도메인 연결을 물리적으로 배선할 필요가 없다는 데 있다. 관리자가 기존의 방식을 바꿀 필요가 없으므로 편리하다. 인프라스트럭처를 가상화하고 기존 인프라스트럭처 위에서 변경 작업을 수행하는 새로운 방법을 얻게 된다.

        네트워크 가상화는 고성능 x86 플랫폼에서 실행되며, 궁극적인 목표는 기존 인프라스트럭처로부터 독립적으로 VM을 이동하고 네트워크를 재구성할 필요가 없도록 하는 것이다. 또한 가상화 기술을 사용하는 모든 IT 환경을 대상으로 한다. 이 분야의 대표적인 업체는 현재는 VM웨어에 인수된 니시라를 꼽을 수 있다.

        </div>
        <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold", marginTop:30}}>네트워크 기능 가상화</div>
        <div style={{ fontSize: 20, marginTop:20}}>
        네트워크 가상화가 네트워크를 통과하는 터널을 만들고 흐름별 서비스라는 개념을 사용한다면, 다음 단계는 터널에 서비스를 배치하는 것이다. NFV는 방화벽 또는 IDPS와 같은 4/7계층 기능 또는, 로드 밸런싱(애플리케이션 딜리버리 컨트롤러)까지 가상화하는 것이다.

        관리자가 포인트 앤 클릭으로 VM을 설정할 수 있다면, 같은 방법으로 방화벽이나 IDS/IPS를 켜면 좋지 않을까? NFV의 역할이 바로 이것이다. NFV는 다양한 네트워크 요소에 대한 모범 사례를 기본 정책과 구성으로 사용한다. 인프라스트럭처를 통과하는 터널이 있다면 이 터널에 방화벽이나 IDS/IPS를 추가할 수 있다.

        NFV는 고성능 x86 플랫폼에서 실행되며, 사용자가 네트워크의 특정 터널에서 기능을 활성화할 수 있도록 해준다. NFV의 목표는 VM 또는 흐름을 위한 서비스 프로파일을 만들고 x86의 성능을 활용해서 네트워크 위에서 추상화를 구축한 다음(터널) 이 논리적 환경에서 가상 서비스를 구성할 수 있도록 하는 것이다. 제대로 구축된 NFV는 수동 프로비저닝과 교육에 드는 시간을 크게 줄여준다.

        NFV는 오버프로비저닝의 필요성도 줄여준다. 고객은 네트워크 전체를 감당할 수 있는 대형 방화벽 또는 IDS/IPS 시스템을 구매하는 대신 필요한 특정 터널에 대해서만 기능을 구매할 수 있다. 이는 초기 자본 지출도 줄여주지만 진정한 혜택은 운영 측면의 이점이다. NFV는 소수의 시스템이 다수의 가상 서버를 실행하고 포인트 앤 클릭 프로비저닝 시스템이라는 측면에서 VM웨어와 매우 유사하다.

        고객은 NV와 NFV가 다르다는 점을 알고 있지만 동일한 업체를 통해 두 가지 모두 구입하는 편을 선호할 수 있다. VM웨어가 현재 VM웨어 NSX에서 NV와 NFV 보안 기능을 제공하는 이유도 여기에 있다.

        
        </div>

      <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold", marginTop:30}}>소프트웨어 정의 네트워킹</div>
      <div style={{ fontSize: 20, marginTop:20}}> 
      SDN은 미리 준비된 프로세스를 사용해서 네트워크를 프로비저닝한다. 예를 들어 어플라이언스를 사용해서 네트워크 탭을 구성하는 것이 아니라 탭을 구축하고자 할 때 네트워크를 프로그래밍할 수 있어야 한다.
      </div>

      <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold", marginTop:30}}>NFV 아키텍처</div>
      <div style={{ fontSize: 20, marginTop:20}}> 
      NFV는 여러 가지 유연한 NFV 솔루션 배치 옵션이 포함된 개방형 아키텍처를 제공한다. NFV의 일반적인 아키텍처는 다음과 같은 세 가지 층으로 구성된다.

      - 네트워크 기능 가상화 인프라(NFVi) : 네트워크 애플리케이션을 실행하는 데 필요한 하드웨어 및 인프라 소프트웨어 플랫폼.
      - 가상 네트워크 기능(VNF) : 라우팅, 보안, 모바일 코어, IP 멀티미디어 하위 시스템, 비디오 등의 특정 네트워크 기능을 제공하는 소프트웨어 애플리케이션
      - 관리, 자동화 및 네트워크 오케스트레이션(MANO) : NFVi 및 다양한 VNF 관리와 오케스트레이션을 위한 프레임워크
      </div>
     </div>
    );
  }

}
