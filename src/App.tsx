import { useState, useMemo, useEffect } from 'react';
import { emapQuestions } from './data/emapQuestions';
import { bearTypes } from './data/bearTypes';
import './App.css';

type Page = 'home' | 'chapter' | 'whisper' | 'result';

interface Scores {
  O: number; I: number; D: number; V: number;
  H: number; R: number; S: number; F: number;
}

function App() {
  const [page, setPage] = useState<Page>('home');
  const [currentChapter, setCurrentChapter] = useState(1);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Scores>({ O: 0, I: 0, D: 0, V: 0, H: 0, R: 0, S: 0, F: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [finalCode, setFinalCode] = useState("");

  const chapterQuestions = useMemo(() => 
    emapQuestions.filter(q => q.chapter === currentChapter),
    [currentChapter]
  );

  const envIndices = useMemo(() => {
    const calc = (a: number, b: number) => {
      const diff = a - b;
      return Math.min(Math.max(((diff + 20) / 40) * 100, 0), 100);
    };
    return {
      oi: calc(scores.O, scores.I),
      dv: calc(scores.D, scores.V),
      hr: calc(scores.H, scores.R),
      sf: calc(scores.S, scores.F)
    };
  }, [scores]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--oi-index', `${envIndices.oi}%`);
    root.style.setProperty('--dv-index', `${envIndices.dv}%`);
    root.style.setProperty('--hr-index', `${envIndices.hr}%`);
    root.style.setProperty('--sf-index', `${envIndices.sf}%`);
  }, [envIndices]);

  const handleAnswer = (value: number) => {
    const category = chapterQuestions[questionIndex].category;
    setScores(prev => ({ ...prev, [category]: prev[category as keyof Scores] + value }));

    if (questionIndex + 1 < chapterQuestions.length) {
      setQuestionIndex(prev => prev + 1);
    } else {
      handleChapterEnd();
    }
  };

  const handleChapterEnd = () => {
    const catA = ['O', 'D', 'H', 'S'][currentChapter-1] as keyof Scores;
    const catB = ['I', 'V', 'R', 'F'][currentChapter-1] as keyof Scores;
    
    if (scores[catA] === scores[catB]) {
      setPage('whisper');
    } else {
      triggerTransition();
    }
  };

  const triggerTransition = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (currentChapter < 4) {
        setCurrentChapter(prev => prev + 1);
        setQuestionIndex(0);
        setPage('chapter');
      } else {
        calculateResult();
      }
      setIsTransitioning(false);
    }, 1500);
  };

  const calculateResult = () => {
    let code = "";
    code += scores.O >= scores.I ? "O" : "I";
    code += scores.D >= scores.V ? "D" : "V";
    code += scores.H >= scores.R ? "H" : "R";
    code += scores.S >= scores.F ? "S" : "F";
    setFinalCode(code);
    setPage('result');
  };

  return (
    <div className={`emap-app chapter-${currentChapter} ${isTransitioning ? 'transitioning' : ''}`}>
      <div className="env-layer fog" />
      <div className="env-layer watercolor-overlay" />
      
      {isTransitioning && (
        <div className="transition-screen">
          <div className="transition-title">Chapter {currentChapter + 1}로 향하는 중...</div>
          <div className="loading-dots"><span>.</span><span>.</span><span>.</span></div>
        </div>
      )}

      <div className="main-content">
        {page === 'home' && (
          <div className="card home-card fade-in">
            <div className="village-icon">🏡</div>
            <h1 className="main-title">EMAP</h1>
            <p className="sub-quote">"당신의 마음이 머무는 자리를 그려냅니다"</p>
            <div className="home-desc">
              이곳은 당신의 고유한 무늬를 긍정하는 감정 마을입니다.<br/>
              네 개의 장소를 여행하며 당신의 아기 곰을 만나보세요.
            </div>
            <button className="start-journey" onClick={() => setPage('chapter')}>마을 입장하기</button>
          </div>
        )}

        {page === 'chapter' && !isTransitioning && (
          <div className="card test-card fade-in">
            <header className="test-header">
              <div className="chapter-label">Chapter {currentChapter}</div>
              <h2 className="chapter-title">{chapterQuestions[0].chapterName}</h2>
              <p className="chapter-desc">{chapterQuestions[0].chapterDesc}</p>
            </header>

            <div className="progress-container">
              <div className="progress-fill" style={{ width: `${(questionIndex / chapterQuestions.length) * 100}%` }} />
            </div>

            <div className="question-box">
              <h3 className="question-text">{chapterQuestions[questionIndex].text}</h3>
            </div>

            <div className="scale-container">
              <button className="btn-scale v-agree" onClick={() => handleAnswer(2)}><span>매우 그렇다</span></button>
              <button className="btn-scale agree" onClick={() => handleAnswer(1)}><span>그렇다</span></button>
              <button className="btn-scale neutral" onClick={() => handleAnswer(0)}><span>모르겠다</span></button>
              <button className="btn-scale disagree" onClick={() => handleAnswer(-1)}><span>아니다</span></button>
              <button className="btn-scale v-disagree" onClick={() => handleAnswer(-2)}><span>매우 아니다</span></button>
            </div>
          </div>
        )}

        {page === 'whisper' && (
          <div className="card whisper-card fade-in">
            <div className="cat-icon">🐱</div>
            <h3>다정 고양이의 속삭임</h3>
            <p className="whisper-text">"두 마음의 무게가 똑같네요...<br/>지금 이 순간, 당신의 발걸음이 더 머무는 곳은 어디인가요?"</p>
            <div className="whisper-btns">
              <button onClick={() => { setScores(p => ({...p, [['O','D','H','S'][currentChapter-1]]: p[['O','D','H','S'][currentChapter-1] as keyof Scores] + 0.1})); triggerTransition(); }}>
                {['활기찬 광장', '세심한 풀꽃', '따뜻한 온기', '정돈된 길'][currentChapter-1]}
              </button>
              <button onClick={() => { setScores(p => ({...p, [['I','V','R','F'][currentChapter-1]]: p[['I','V','R','F'][currentChapter-1] as keyof Scores] + 0.1})); triggerTransition(); }}>
                {['평온한 산책', '넓은 구름', '명확한 지혜', '자유로운 여행'][currentChapter-1]}
              </button>
            </div>
          </div>
        )}

        {page === 'result' && (
          <div className="card result-card fade-in">
            <div className="result-header">
              <span className="result-badge">테스트 결과</span>
              <h1 className="bear-name">{bearTypes[finalCode]?.title}</h1>
              <div className="mbti-tag">{finalCode} 유형 아기 곰</div>
            </div>

            <div className="result-body">
              <div className="quote-box">
                "{bearTypes[finalCode]?.description}"
              </div>
              
              <div className="trait-section">
                <h4>마을에서의 당신의 모습</h4>
                <div className="trait-tags">
                  {bearTypes[finalCode]?.traits.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>

              <div className="letter-section">
                <h4>✨ 다정 고양이가 전하는 축복</h4>
                <div className="letter-paper">
                  안녕, {bearTypes[finalCode]?.title}님! <br/><br/>
                  오늘 당신과 함께 마을을 여행하며 정말 행복했어요. 
                  당신이 {scores.O > scores.I ? '광장의 활기' : '조용한 산책'}를 즐길 때, 
                  마을의 안개가 {envIndices.oi > 50 ? '걷히며 빛이 났답니다' : '포근하게 당신을 감싸 안았어요'}.<br/><br/>
                  {envIndices.dv > 50 ? '세상을 맑고 뚜렷하게 바라보는' : '세상을 몽글몽글한 상상으로 채우는'} 당신의 마음은 
                  이 마을에 꼭 필요한 보물이에요. 어떤 모습이라도 당신은 그 자체로 완벽해요. 
                  언제든 다시 쉬러 오세요!
                </div>
              </div>
            </div>

            <button className="restart-btn" onClick={() => window.location.reload()}>마을 다시 방문하기</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
