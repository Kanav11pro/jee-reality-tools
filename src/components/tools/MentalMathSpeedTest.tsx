import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Calculator, Timer, Trophy, Zap } from 'lucide-react';

const MentalMathSpeedTest = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [userAnswer, setUserAnswer] = useState('');
  const [questions, setQuestions] = useState<Array<{question: string, answer: number}>>([]);
  const [gameOver, setGameOver] = useState(false);

  const generateQuestions = () => {
    const newQuestions = [];
    for (let i = 0; i < 10; i++) {
      const num1 = Math.floor(Math.random() * 50) + 10;
      const num2 = Math.floor(Math.random() * 50) + 10;
      const operations = ['+', '-', '×'];
      const operation = operations[Math.floor(Math.random() * operations.length)];
      
      let answer = 0;
      let question = '';
      
      if (operation === '+') {
        answer = num1 + num2;
        question = `${num1} + ${num2}`;
      } else if (operation === '-') {
        answer = num1 - num2;
        question = `${num1} - ${num2}`;
      } else {
        const smallNum1 = Math.floor(Math.random() * 15) + 5;
        const smallNum2 = Math.floor(Math.random() * 15) + 5;
        answer = smallNum1 * smallNum2;
        question = `${smallNum1} × ${smallNum2}`;
      }
      
      newQuestions.push({ question, answer });
    }
    setQuestions(newQuestions);
  };

  const startGame = () => {
    generateQuestions();
    setGameStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(60);
    setGameOver(false);
    setUserAnswer('');
  };

  useEffect(() => {
    if (gameStarted && timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && gameStarted) {
      setGameOver(true);
    }
  }, [timeLeft, gameStarted, gameOver]);

  const handleSubmit = () => {
    if (parseInt(userAnswer) === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer('');
    } else {
      setGameOver(true);
    }
  };

  const getPerformance = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return { text: 'EXCELLENT! Topper Level 🏆', color: 'bg-green-400' };
    if (percentage >= 60) return { text: 'GOOD! Keep Practicing 👍', color: 'bg-yellow-400' };
    return { text: 'NEEDS WORK! Practice Daily 💪', color: 'bg-red-400' };
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="inline-block bg-purple-400 text-white px-6 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1 mb-4">
          <h3 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-3">
            <Calculator className="w-8 h-8" />
            MENTAL MATH SPEED TEST
          </h3>
        </div>
        <p className="text-base md:text-lg font-bold text-black/80">
          Solve 10 problems as fast as you can! JEE toppers solve in under 30 seconds ⚡
        </p>
      </div>

      {!gameStarted && !gameOver && (
        <div className="space-y-6">
          <div className="bg-cyan-300 border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-xl font-black mb-4 uppercase">📋 HOW IT WORKS:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="font-black">→</span>
                <span className="font-bold text-sm">10 rapid-fire mental math problems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black">→</span>
                <span className="font-bold text-sm">60 seconds total time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black">→</span>
                <span className="font-bold text-sm">No calculator, no paper - pure mental speed!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black">→</span>
                <span className="font-bold text-sm">Compare yourself to JEE toppers</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Button onClick={startGame} className="text-xl">
              <Zap className="w-6 h-6" />
              START CHALLENGE
            </Button>
          </div>
        </div>
      )}

      {gameStarted && !gameOver && questions.length > 0 && (
        <div className="space-y-6">
          {/* Timer */}
          <div className="bg-red-300 border-4 border-black p-6 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-center gap-3">
              <Timer className="w-8 h-8" />
              <span className="text-4xl font-black">{timeLeft}s</span>
            </div>
          </div>

          {/* Question */}
          <div className="bg-yellow-300 border-4 border-black p-12 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-sm font-black mb-4">QUESTION {currentQuestion + 1} OF {questions.length}</div>
            <div className="text-5xl md:text-7xl font-black mb-8">{questions[currentQuestion].question}</div>
            <input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              className="border-4 border-black p-4 text-3xl font-black text-center w-48 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              autoFocus
              placeholder="?"
            />
          </div>

          <div className="text-center">
            <Button onClick={handleSubmit} disabled={!userAnswer} className="text-xl">
              SUBMIT ANSWER →
            </Button>
          </div>

          {/* Score */}
          <div className="bg-white border-4 border-black p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-black text-xl">SCORE: {score}/{questions.length}</span>
          </div>
        </div>
      )}

      {gameOver && (
        <div className="space-y-6 animate-fade-in">
          <div className={`${getPerformance().color} border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}>
            <Trophy className="w-16 h-16 mx-auto mb-4" />
            <h4 className="text-3xl font-black mb-4">{getPerformance().text}</h4>
            <div className="text-6xl font-black mb-2">{score}/{questions.length}</div>
            <div className="text-xl font-bold">Time Taken: {60 - timeLeft} seconds</div>
          </div>

          <div className="bg-cyan-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-xl font-black mb-4 uppercase">📊 PERFORMANCE ANALYSIS:</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold">Accuracy:</span>
                <span className="font-black text-xl">{((score / questions.length) * 100).toFixed(0)}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">Speed:</span>
                <span className="font-black text-xl">{((60 - timeLeft) / questions.length).toFixed(1)}s per question</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">Topper Average:</span>
                <span className="font-black text-xl">3s per question</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button onClick={startGame} className="text-xl">
              🔄 TRY AGAIN
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentalMathSpeedTest;

