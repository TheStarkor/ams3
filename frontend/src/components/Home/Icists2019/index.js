import React, { Component } from 'react'
import topicimg from '../../../assets/img/topicimg.png'
import poster from '../../../assets/img/poster.png'

export class Icists2019 extends Component {
  render() {
    return (
      <div id="icists-2019">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <h2 className="text-uppercase font-weight-bold">About ICISTS 2019</h2>
            <img src={poster} className="poster" alt=""/>
            <h2 className="text-uppercase font-weight-bold">The Art of Science: Expression</h2>
            <img src={topicimg} alt=""/>
            <h4>[씨 뿌리는 사람, 왼쪽부터 밀레, 고흐]</h4>
            <div className="topic">
            <p>고흐는 짧은 생애 동안 밀레의 ‘씨 뿌리는 사람’을 10번도 넘게 다시 그렸습니다. 같은 구도로 같은 대상을 나타내었지만 고흐는 자신만의 대담한 표현으로 대중들에게 밀레의 작품과는 다른 느낌과 감동을 주었습니다. 과학계에서도 이러한 예를 찾아볼 수 있습니다. 과학이 딱딱하고 멀게 느껴지는 이유는 주로 실험이나 논문 등의 매체로 표현되기 때문입니다. 하지만 고흐가 밀레의 작품을 재탄생시킨 것처럼 과학도 표현법에 따라 더 쉽고 조화롭게 나타낼 수 있습니다. ICISTS 2019에서는 과학의 이미지를 보다 풍성하고 아름답게 그리는 다양한 표현에 대해 알아볼 것입니다.</p>
            <p>어려운 전문서적과 논문을 통해서만 과학을 접하는 사람들은 거부감을 가지기 마련입니다. 머릿속의 추상적인 아이디어를 시각적인 이미지로 표현하기 위해서는 캔버스가 필요하듯이, 전문적 영역의 과학을 대중들에게 전달하기 위해서는 다른 매개체가 필요합니다. 과학의 대중화를 표방하는 모든 작가, 강연자, 크리에이터에게서 그 답을 찾을 수 있습니다. 이들은 자신만의 언어와 행동으로 새로운 궁금증과 관심을 자아내고, 과학 문화 확산에 기여하고 있습니다.</p>
            <p>과학과 예술은 모두 창의성을 바탕으로 하는 창조적 영역이지만, 주관성 개입의 유무에 따라 대척점에 있는 분야로 인식되어 왔습니다. 하지만 현시대의 많은 과학자들과 예술가들은 협업을 시도하고 있습니다. 현미경에 포착된 신비로운 과학 현상이 미술작품이 되기도 하고, 아름답지만 구축이 불가능했던 상상 속의 조형물이 새로운 과학기술에 의해 탄생하기도 합니다. 전혀 다른 두 색이 팔레트에서 섞여 새로운 색이 탄생하는 것처럼, 동떨어져 보이는 과학과 예술 사이의 조화 속에서 색다른 작품이 창조되고 있습니다.</p>
            <p>ICISTS 2019에서는 실험실과 논문 너머로 과학을 표현하는 이들을 만나 과학의 이미지를 새로이 그려보고자 합니다.</p>
            </div>
          </div>
          <div className="col-auto"></div>
        </div>
      </div>
    )
  }
}

export default Icists2019
