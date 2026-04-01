export interface EMAPQuestion {
  id: number;
  chapter: 1 | 2 | 3 | 4;
  chapterName: string;
  chapterDesc: string;
  text: string;
  category: 'O' | 'I' | 'D' | 'V' | 'H' | 'R' | 'S' | 'F';
}

export const emapQuestions: EMAPQuestion[] = [
  // Chapter 1: 광장 (O vs I) - 16문항
  { id: 1, chapter: 1, chapterName: "광장", chapterDesc: "에너지의 방향을 찾는 곳", text: "축제의 왁자지껄한 소리가 들리면 나도 모르게 발걸음이 빨라진다.", category: 'O' },
  { id: 2, chapter: 1, chapterName: "광장", chapterDesc: "에너지의 방향을 찾는 곳", text: "사람들이 많은 곳보다는 조용한 벤치에서 축제를 구경하는 게 더 편하다.", category: 'I' },
  { id: 3, chapter: 1, chapterName: "광장", chapterDesc: "에너지의 방향을 찾는 곳", text: "처음 본 사람에게 먼저 인사를 건네는 것이 어렵지 않다.", category: 'O' },
  { id: 4, chapter: 1, chapterName: "광장", chapterDesc: "에너지의 방향을 찾는 곳", text: "혼자만의 시간을 가질 때 비로소 에너지가 충전되는 기분이다.", category: 'I' },
  { id: 5, chapter: 1, chapterName: "광장", chapterDesc: "에너지의 방향을 찾는 곳", text: "주말에는 집에 있기보다 밖으로 나가 새로운 경험을 하고 싶다.", category: 'O' },
  { id: 6, chapter: 1, chapterName: "광장", chapterDesc: "에너지의 방향을 찾는 곳", text: "생각이 많아질 때는 누군가와 대화하기보다 혼자 정리하는 편이다.", category: 'I' },
  { id: 7, chapter: 1, chapterName: "광장", chapterDesc: "에너지의 방향을 찾는 곳", text: "모임에서 대화를 주도하기보다 주로 듣는 역할을 선호한다.", category: 'I' },
  { id: 8, chapter: 1, chapterName: "광장", chapterDesc: "에너지의 방향을 찾는 곳", text: "여러 친구들과 시끌벅적하게 노는 것이 가장 큰 즐거움이다.", category: 'O' },

  // Chapter 2: 언덕 (D vs V) - 16문항
  { id: 17, chapter: 2, chapterName: "언덕", chapterDesc: "인식의 방식을 정하는 곳", text: "발밑에 핀 작은 풀꽃의 잎맥 하나하나를 세밀하게 관찰하는 것을 즐긴다.", category: 'D' },
  { id: 18, chapter: 2, chapterName: "언덕", chapterDesc: "인식의 방식을 정하는 곳", text: "언덕 너머 구름의 모양을 보며 저 너머에 무엇이 있을지 상상하곤 한다.", category: 'V' },
  { id: 19, chapter: 2, chapterName: "언덕", chapterDesc: "인식의 방식을 정하는 곳", text: "눈앞의 사실보다는 그 이면에 숨겨진 의미나 비유가 더 궁금하다.", category: 'V' },
  { id: 20, chapter: 2, chapterName: "언덕", chapterDesc: "인식의 방식을 정하는 곳", text: "구체적인 수치나 검증된 사실이 주어질 때 비로소 신뢰감을 느낀다.", category: 'D' },
  { id: 21, chapter: 2, chapterName: "언덕", chapterDesc: "인식의 방식을 정하는 곳", text: "현실적인 문제 해결보다는 미래에 대한 아이디어를 내는 것이 더 흥미롭다.", category: 'V' },
  { id: 22, chapter: 2, chapterName: "언덕", chapterDesc: "인식의 방식을 정하는 곳", text: "전체적인 흐름보다는 세부적인 디테일을 놓치지 않는 것이 중요하다.", category: 'D' },
  { id: 23, chapter: 2, chapterName: "언덕", chapterDesc: "인식의 방식을 정하는 곳", text: "상상력이 풍부하다는 말을 자주 듣는 편이다.", category: 'V' },
  { id: 24, chapter: 2, chapterName: "언덕", chapterDesc: "인식의 방식을 정하는 곳", text: "경험해본 적 없는 일보다 익숙하고 증명된 방식을 선호한다.", category: 'D' },

  // Chapter 3: 찻집 (H vs R) - 16문항
  { id: 33, chapter: 3, chapterName: "찻집", chapterDesc: "판단의 근거를 내리는 곳", text: "친구가 힘들어할 때, 논리적인 해결책보다는 따뜻한 위로가 먼저 나간다.", category: 'H' },
  { id: 34, chapter: 3, chapterName: "찻집", chapterDesc: "판단의 근거를 내리는 곳", text: "어떤 결정을 내릴 때 내 감정보다는 객관적인 원칙을 중시한다.", category: 'R' },
  { id: 35, chapter: 3, chapterName: "찻집", chapterDesc: "판단의 근거를 내리는 곳", text: "주변 사람들의 기분이 어떤지 금방 눈치채고 공감하는 편이다.", category: 'H' },
  { id: 36, chapter: 3, chapterName: "찻집", chapterDesc: "판단의 근거를 내리는 곳", text: "잘못된 점이 있다면 상대방의 기분보다 사실을 정확히 짚어주는 게 낫다.", category: 'R' },
  { id: 37, chapter: 3, chapterName: "찻집", chapterDesc: "판단의 근거를 내리는 곳", text: "사람들 사이의 조화와 화합을 깨뜨리는 상황이 매우 불편하다.", category: 'H' },
  { id: 38, chapter: 3, chapterName: "찻집", chapterDesc: "판단의 근거를 내리는 곳", text: "이성적으로 판단했을 때 옳다면, 조금 차갑게 보일지라도 밀어붙인다.", category: 'R' },
  { id: 39, chapter: 3, chapterName: "찻집", chapterDesc: "판단의 근거를 내리는 곳", text: "정의로운 사회보다 모두가 행복하고 따뜻한 사회를 더 꿈꾼다.", category: 'H' },
  { id: 40, chapter: 3, chapterName: "찻집", chapterDesc: "판단의 근거를 내리는 곳", text: "감정에 치우치지 않고 공정하게 평가받는 것을 중요하게 생각한다.", category: 'R' },

  // Chapter 4: 기차역 (S vs F) - 16문항
  { id: 49, chapter: 4, chapterName: "기차역", chapterDesc: "생활의 양식을 결정하는 곳", text: "여행을 떠나기 전, 시간별로 상세한 일정을 짜야 마음이 놓인다.", category: 'S' },
  { id: 50, chapter: 4, chapterName: "기차역", chapterDesc: "생활의 양식을 결정하는 곳", text: "정해진 계획보다는 그때그때 발길 닿는 대로 움직이는 여행이 즐겁다.", category: 'F' },
  { id: 51, chapter: 4, chapterName: "기차역", chapterDesc: "생활의 양식을 결정하는 곳", text: "내 방이나 책상은 항상 정해진 규칙대로 정리되어 있어야 한다.", category: 'S' },
  { id: 52, chapter: 4, chapterName: "기차역", chapterDesc: "생활의 양식을 결정하는 곳", text: "마감 기한이 닥쳐올 때 오히려 집중력이 더 발휘되는 것 같다.", category: 'F' },
  { id: 53, chapter: 4, chapterName: "기차역", chapterDesc: "생활의 양식을 결정하는 곳", text: "결정하기 전에 모든 정보를 수집하고 신중하게 검토하는 편이다.", category: 'S' },
  { id: 54, chapter: 4, chapterName: "기차역", chapterDesc: "생활의 양식을 결정하는 곳", text: "미리 약속을 잡기보다 즉흥적으로 만나 노는 것을 더 좋아한다.", category: 'F' },
  { id: 55, chapter: 4, chapterName: "기차역", chapterDesc: "생활의 양식을 결정하는 곳", text: "일을 끝내지 못한 상태로 잠드는 것이 매우 찜찜하다.", category: 'S' },
  { id: 56, chapter: 4, chapterName: "기차역", chapterDesc: "생활의 양식을 결정하는 곳", text: "계획에 없던 일이 생겨도 당황하지 않고 즐겁게 받아들인다.", category: 'F' },
];
