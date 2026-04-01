export interface ResultType {
  type: string;
  title: string;
  description: string;
  traits: string[];
}

export const results: Record<string, ResultType> = {
  "ISTJ": {
    type: "ISTJ",
    title: "청렴결백한 논리주의자",
    description: "사실에 근거하여 사고하며 이들의 행동이나 결정 사항에 대해 한 치의 의심도 갖지 않는 현실주의자형입니다.",
    traits: ["책임감이 강함", "신중함", "질서 중시", "객관적"]
  },
  "ISFJ": {
    type: "ISFJ",
    title: "용감한 수호자",
    description: "소중한 이들을 보호하고 헌신하는 이들은 조용하면서도 따뜻한 성격을 가졌습니다.",
    traits: ["세심함", "헌신적", "안정 추구", "협조적"]
  },
  "INFJ": {
    type: "INFJ",
    title: "선의의 옹호자",
    description: "가장 흔치 않은 성격 유형으로, 인내심이 많고 통찰력과 직관력이 뛰어납니다.",
    traits: ["이상주의적", "직관력", "강한 신념", "통찰력"]
  },
  "INTJ": {
    type: "INTJ",
    title: "용의주도한 전략가",
    description: "상상력이 풍부하며 철저한 계획을 세우는 전략가형입니다.",
    traits: ["분석적", "전략적", "독립적", "논리적"]
  },
  "ISTP": {
    type: "ISTP",
    title: "만능 재주꾼",
    description: "냉철한 이성주의적 성향과 뜨거운 열정을 가진 이들은 도구를 다루는 데 능숙합니다.",
    traits: ["관찰력", "적응력", "낙천적", "손재주"]
  },
  "ISFP": {
    type: "ISFP",
    title: "호기심 많은 예술가",
    description: "새로운 것을 시도할 준비가 된 항상 매력 넘치는 예술가형입니다.",
    traits: ["감수성", "예술적", "여유로움", "자유로운 영혼"]
  },
  "INFP": {
    type: "INFP",
    title: "열정적인 중재자",
    description: "최악의 상황에서도 긍정적인 면을 찾아내며 더 나은 세상을 만들고자 노력합니다.",
    traits: ["낭만적", "공감 능력", "사색적", "이해심"]
  },
  "INTP": {
    type: "INTP",
    title: "논리적인 사색가",
    description: "끊임없이 새로운 지식을 갈구하는 혁신적인 설계자형입니다.",
    traits: ["분석적", "독창적", "지적 호기심", "창의적"]
  },
  "ESTP": {
    type: "ESTP",
    title: "모험을 즐기는 사업가",
    description: "벼랑 끝의 아슬아슬한 삶을 즐기며 명쾌한 논리로 문제를 해결합니다.",
    traits: ["활동적", "적응력", "자신감", "사교적"]
  },
  "ESFP": {
    type: "ESFP",
    title: "자유로운 영혼의 연예인",
    description: "주위에 있으면 지루할 틈이 없는 에너지가 넘치는 이들입니다.",
    traits: ["사교적", "에너지 넘침", "즉흥적", "친화력"]
  },
  "ENFP": {
    type: "ENFP",
    title: "재기발랄한 활동가",
    description: "창의적이며 자유로운 영혼으로, 어디서든 사람들과 어울리는 것을 즐깁니다.",
    traits: ["열정적", "호기심", "창의력", "사교성"]
  },
  "ENTP": {
    type: "ENTP",
    title: "뜨거운 논쟁을 즐기는 변론가",
    description: "지적인 도전을 즐기며 새로운 아이디어를 끊임없이 제안합니다.",
    traits: ["민첩함", "변론 능력", "자신감", "독창성"]
  },
  "ESTJ": {
    type: "ESTJ",
    title: "엄격한 관리자",
    description: "사물이나 사람을 관리하는 데 타의 추종을 불허하는 뛰어난 실력을 갖췄습니다.",
    traits: ["리더십", "체계적", "현실적", "성실함"]
  },
  "ESFJ": {
    type: "ESFJ",
    title: "사교적인 외교관",
    description: "타인을 돕는 일에 열성적이며 주변 사람들과 잘 어울리는 인기쟁이입니다.",
    traits: ["협력적", "동정심", "책임감", "사교성"]
  },
  "ENFJ": {
    type: "ENFJ",
    title: "정의로운 사회운동가",
    description: "넘치는 카리스마와 열정으로 사람들을 이끄는 리더형입니다.",
    traits: ["카리스마", "열정", "이타적", "설득력"]
  },
  "ENTJ": {
    type: "ENTJ",
    title: "대담한 통솔자",
    description: "넘치는 자신감으로 목표를 향해 나아가며 대담한 리더십을 발휘합니다.",
    traits: ["전략적", "자신감", "결단력", "리더십"]
  }
};
