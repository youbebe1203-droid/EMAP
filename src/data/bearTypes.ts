export interface BearType {
  code: string;
  title: string;
  description: string;
  traits: string[];
}

export const bearTypes: Record<string, BearType> = {
  "ODHS": {
    code: "ODHS",
    title: "마을 축제 위원장",
    description: "책임감 있는 리더로서, 마을의 모든 활기를 책임지는 든든한 존재입니다.",
    traits: ["강한 추진력", "현실적 감각", "사교적 리더십", "체계적 관리"]
  },
  "ODHR": {
    code: "ODHR",
    title: "다정한 보안관",
    description: "정의롭고 따뜻한 수호자로, 마을의 평화와 안정을 세심하게 살핍니다.",
    traits: ["봉사 정신", "규칙 준수", "온화한 카리스마", "성실함"]
  },
  "ODRS": {
    code: "ODRS",
    title: "성실한 건축가",
    description: "정확하고 신뢰받는 전문가로서, 마을의 단단한 기반을 설계합니다.",
    traits: ["분석적 사고", "꼼꼼한 완벽주의", "실질적 해결사", "정직함"]
  },
  "ODRF": {
    code: "ODRF",
    title: "에너지 넘치는 탐험가",
    description: "적응력 빠른 활동가로서, 마을 곳곳의 새로운 발견을 주도합니다.",
    traits: ["즉흥적 에너지", "다재다능", "긍정적 행동력", "친화력"]
  },
  "OVHS": {
    code: "OVHS",
    title: "희망의 등대지기",
    description: "꿈을 전파하는 긍정 리더로서, 마을 사람들에게 미래의 빛을 선사합니다.",
    traits: ["이상주의적 비전", "언변의 마술사", "따뜻한 공감", "열정적 리더십"]
  },
  "OVHF": {
    code: "OVHF",
    title: "무지개빛 예술가",
    description: "세상을 색칠하는 창의적 영혼으로서, 마을에 예술적 영감을 불어넣습니다.",
    traits: ["독창적 표현", "풍부한 감수성", "자유로운 상상", "열린 마음"]
  },
  "OVRS": {
    code: "OVRS",
    title: "스마트한 전략가",
    description: "큰 그림을 그리는 지성인으로서, 마을의 먼 미래를 지혜롭게 계획합니다.",
    traits: ["통찰력", "전략적 기획", "논리적 판단", "지적 호기심"]
  },
  "OVRF": {
    code: "OVRF",
    title: "반짝이는 발명가",
    description: "끊임없이 도전하는 호기심 대장으로서, 마을을 더 즐겁게 만들 아이디어를 냅니다.",
    traits: ["발상의 전환", "유연한 사고", "다양한 시도", "빠른 실행력"]
  },
  "IDHS": {
    code: "IDHS",
    title: "포근한 수호자",
    description: "묵묵히 자리를 지키는 세심한 친구로서, 가장 가까운 곳에서 평화를 지킵니다.",
    traits: ["신중함", "한결같은 마음", "세심한 배려", "책임감"]
  },
  "IDHF": {
    code: "IDHF",
    title: "마을 마음 정원사",
    description: "누구나 편히 쉬어가는 쉼터가 되어주는, 따스한 마음의 소유자입니다.",
    traits: ["부드러운 공감", "예술적 감각", "겸손함", "평화주의자"]
  },
  "IDRS": {
    code: "IDRS",
    title: "현명한 기록가",
    description: "역사와 지식을 정리하는 지혜로운 이로서, 마을의 소중한 기록을 보존합니다.",
    traits: ["정확성", "깊은 집중력", "객관적 관찰", "성실한 탐구"]
  },
  "IDRF": {
    code: "IDRF",
    title: "묵묵한 장인",
    description: "말보다 행동으로 보여주는 실천가로서, 마을의 실제적인 도구와 물건을 다룹니다.",
    traits: ["냉철한 분석", "실용적 기술", "민첩한 해결", "관찰력"]
  },
  "IVHS": {
    code: "IVHS",
    title: "꿈꾸는 예언자",
    description: "마음의 눈으로 진심을 읽는 치유자로서, 사람들의 내면을 따뜻하게 어루만집니다.",
    traits: ["깊은 통찰", "강한 신념", "이타심", "예술적 영감"]
  },
  "IVHF": {
    code: "IVHF",
    title: "낭만적인 시인",
    description: "상상의 구름을 타는 자유로운 여행자로서, 아름다운 글과 마음을 공유합니다.",
    traits: ["풍부한 상상력", "가치 중심적", "유연함", "부드러운 위로"]
  },
  "IVRS": {
    code: "IVRS",
    title: "깊은 밤의 철학자",
    description: "본질을 탐구하는 신중한 사고가로서, 마을의 진리를 묵묵히 탐구합니다.",
    traits: ["독창적 논리", "지적 독립성", "객관성", "심층적 탐구"]
  },
  "IVRF": {
    code: "IVRF",
    title: "별을 찾는 탐구자",
    description: "혼자만의 세계를 즐기는 신비로운 존재로서, 밤하늘의 무수한 가능성을 읽습니다.",
    traits: ["추상적 사고", "직관적 통찰", "조용한 카리스마", "상상력"]
  }
};
