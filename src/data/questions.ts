export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    type: string; // 'E', 'I', 'N', 'S', 'T', 'F', 'J', 'P'
    value: number;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "주말에 친구가 갑자기 놀러 가자고 하면?",
    options: [
      { text: "너무 좋아! 바로 준비한다.", type: "E", value: 1 },
      { text: "좋긴 한데... 조금 부담스럽다.", type: "I", value: 1 }
    ]
  },
  {
    id: 2,
    text: "새로운 사람을 만났을 때 당신은?",
    options: [
      { text: "먼저 말을 걸며 분위기를 주도한다.", type: "E", value: 1 },
      { text: "상대방이 말을 걸 때까지 기다린다.", type: "I", value: 1 }
    ]
  },
  {
    id: 3,
    text: "영화나 소설을 볼 때 당신은?",
    options: [
      { text: "숨겨진 의미나 미래의 상황을 상상한다.", type: "N", value: 1 },
      { text: "현재 일어나는 사건과 사실에 집중한다.", type: "S", value: 1 }
    ]
  },
  {
    id: 4,
    text: "일을 할 때 당신은?",
    options: [
      { text: "전체적인 숲을 보고 아이디어를 낸다.", type: "N", value: 1 },
      { text: "구체적인 세부 사항을 꼼꼼히 챙긴다.", type: "S", value: 1 }
    ]
  },
  {
    id: 5,
    text: "친구가 고민을 털어놓을 때 당신은?",
    options: [
      { text: "현실적인 해결책을 제시해준다.", type: "T", value: 1 },
      { text: "적극적으로 공감하며 위로해준다.", type: "F", value: 1 }
    ]
  },
  {
    id: 6,
    text: "의견 차이가 생겼을 때 당신은?",
    options: [
      { text: "논리적으로 무엇이 옳은지 따진다.", type: "T", value: 1 },
      { text: "서로의 기분이 상하지 않는 선에서 타협한다.", type: "F", value: 1 }
    ]
  },
  {
    id: 7,
    text: "여행 계획을 세울 때 당신은?",
    options: [
      { text: "시간별로 상세한 일정을 짠다.", type: "J", value: 1 },
      { text: "큰 틀만 잡고 상황에 맞춰 움직인다.", type: "P", value: 1 }
    ]
  },
  {
    id: 8,
    text: "과제를 제출해야 한다면 당신은?",
    options: [
      { text: "미리미리 준비해서 여유 있게 끝낸다.", type: "J", value: 1 },
      { text: "마감 직전의 스릴을 즐기며 몰아서 한다.", type: "P", value: 1 }
    ]
  }
];
