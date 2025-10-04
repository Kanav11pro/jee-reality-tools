import { useState } from 'react';
import { Button } from '../ui/Button';
import { Flame, Brain, Zap } from 'lucide-react';


const PhysicsFormulaGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const questions = [
    {
      formula: 'F = ma',
      concept: "Newton's Second Law",
      options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"]
    },
    {
      formula: 'v² = u² + 2as',
      concept: 'Third Equation of Motion',
      options: ['First Equation of Motion', 'Second Equation of Motion', 'Third Equation of Motion', 'Law of Conservation']
    },
    {
      formula: 'PV = nRT',
      concept: 'Ideal Gas Equation',
      options: ['Boyle\'s Law', 'Charles Law', 'Ideal Gas Equation', 'Dalton\'s Law']
    },
    {
      formula: 'E = mc²',
      concept: 'Mass-Energy Equivalence',
      options: ['Kinetic Energy', 'Potential Energy', 'Mass-Energy Equivalence', 'Nuclear Energy']
    },
    {
      formula: 'v = fλ',
      concept: 'Wave Equation',
      options: ['Doppler Effect', 'Wave Equation', 'Resonance', 'Interference']
    }
  ];

  const startGame = () => {
    setGameStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setGameOver(false);
    setSelectedAnswer('');
    setShowFeedback(false);
  };

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
    
    if (answer === questions[currentQuestion].concept) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer('');
        setShowFeedback(false);
      } else {
        setGameOver(true);
      }
    }, 1500);
  };

  const getPerformance = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return { text: 'MASTER LEVEL! 🎓', color: 'bg-green-400' };
    if (percentage >= 60) return { text: 'GOOD RECALL! 📚', color: 'bg-yellow-400' };
    return { text: 'REVISE FORMULAS! 📖', color: 'bg-red-400' };
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="inline-block bg-orange-400 text-white px-6 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mb-4">
          <h3 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-3">
            <Flame className="w-8 h-8" />
            PHYSICS FORMULA MEMORY GAME
          </h3>
        </div>
        <p className="text-base md:text-lg font-bold text-black/80">
          Match formulas to their concepts - JEE Physics essential! 🔥
        </p>
      </div>

      {!gameStarted && !gameOver && (
        <div className="space-y-6">
          <div className="bg-pink-300 border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-xl font-black mb-4 uppercase">⚡ CHALLENGE:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="font-black">→</span>
                <span className="font-bold text-sm">5 essential JEE Physics formulas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black">→</span>
                <span className="font-bold text-sm">Match each formula to its concept</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black">→</span>
                <span className="font-bold text-sm">Test your formula memory instantly!</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Button onClick={startGame} className="text-xl">
              <Zap className="w-6 h-6" />
              START GAME
            </Button>
          </div>
        </div>
      )}

      {gameStarted && !gameOver && (
        <div className="space-y-6">
          {/* Progress */}
          <div className="bg-blue-300 border-4 border-black p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-black text-xl">QUESTION {currentQuestion + 1} OF {questions.length}</span>
          </div>

          {/* Formula Display */}
          <div className="bg-yellow-300 border-4 border-black p-12 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-sm font-black mb-6 text-black/60">WHAT IS THIS FORMULA?</div>
            <div className="text-5xl md:text-7xl font-black mb-4">{questions[currentQuestion].formula}</div>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => !showFeedback && handleAnswer(option)}
                disabled={showFeedback}
                className={`p-6 border-4 border-black font-black text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all ${
                  showFeedback
                    ? option === questions[currentQuestion].concept
                      ? 'bg-green-400'
                      : option === selectedAnswer
                      ? 'bg-red-400'
                      : 'bg-gray-300'
                    : 'bg-white'
                } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div className={`${selectedAnswer === questions[currentQuestion].concept ? 'bg-green-400' : 'bg-red-400'} border-4 border-black p-6 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] animate-fade-in`}>
              <span className="font-black text-2xl">
                {selectedAnswer === questions[currentQuestion].concept ? '✓ CORRECT!' : '✗ WRONG!'}
              </span>
            </div>
          )}

          {/* Score */}
          <div className="bg-white border-4 border-black p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-black text-xl">SCORE: {score}/{questions.length}</span>
          </div>
        </div>
      )}

      {gameOver && (
        <div className="space-y-6 animate-fade-in">
          <div className={`${getPerformance().color} border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}>
            <Brain className="w-16 h-16 mx-auto mb-4" />
            <h4 className="text-3xl font-black mb-4">{getPerformance().text}</h4>
            <div className="text-6xl font-black mb-2">{score}/{questions.length}</div>
          </div>

          <div className="bg-cyan-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-xl font-black mb-4 uppercase">💡 PRO TIP:</h4>
            <p className="font-bold text-sm">
              Revise formulas daily using flashcards. Write each formula 10 times with its derivation. 
              Formula mastery = 30% of JEE Physics solved!
            </p>
          </div>

          <div className="text-center">
            <Button onClick={startGame} className="text-xl">
              🔄 PLAY AGAIN
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhysicsFormulaGame;
