import { useState } from 'react';
import { Button } from '../ui/Button';
import { Trophy, Zap, Target } from 'lucide-react';

const PeriodicTableQuiz = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const questions = [
    {
      element: 'H',
      name: 'Hydrogen',
      options: ['Hydrogen', 'Helium', 'Hassium', 'Holmium']
    },
    {
      element: 'Na',
      name: 'Sodium',
      options: ['Nitrogen', 'Sodium', 'Neon', 'Nickel']
    },
    {
      element: 'Fe',
      name: 'Iron',
      options: ['Fermium', 'Fluorine', 'Iron', 'Francium']
    },
    {
      element: 'Au',
      name: 'Gold',
      options: ['Gold', 'Silver', 'Argon', 'Aluminum']
    },
    {
      element: 'Cl',
      name: 'Chlorine',
      options: ['Carbon', 'Calcium', 'Chlorine', 'Chromium']
    },
    {
      element: 'O',
      name: 'Oxygen',
      options: ['Osmium', 'Oxygen', 'Oganesson', 'Oxide']
    },
    {
      element: 'Cu',
      name: 'Copper',
      options: ['Curium', 'Carbon', 'Copper', 'Calcium']
    },
    {
      element: 'Ag',
      name: 'Silver',
      options: ['Silver', 'Gold', 'Argon', 'Aluminum']
    },
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
    
    if (answer === questions[currentQuestion].name) {
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
    if (percentage >= 75) return { text: 'CHEMISTRY PRO! 🧪', color: 'bg-green-400' };
    if (percentage >= 50) return { text: 'GOOD START! 📚', color: 'bg-yellow-400' };
    return { text: 'REVISE PERIODIC TABLE! 📖', color: 'bg-red-400' };
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="inline-block bg-green-400 text-white px-6 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1 mb-4">
          <h3 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-3">
            <Trophy className="w-8 h-8" />
            PERIODIC TABLE QUIZ
          </h3>
        </div>
        <p className="text-base md:text-lg font-bold text-black/80">
          How fast can you recall element symbols? Test your chemistry memory! 🧪
        </p>
      </div>

      {!gameStarted && !gameOver && (
        <div className="space-y-6">
          <div className="bg-blue-300 border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-xl font-black mb-4 uppercase">🎯 CHALLENGE:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="font-black">→</span>
                <span className="font-bold text-sm">8 element symbols to identify</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black">→</span>
                <span className="font-bold text-sm">Match symbol to element name</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black">→</span>
                <span className="font-bold text-sm">Essential for JEE Chemistry!</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Button onClick={startGame} className="text-xl">
              <Zap className="w-6 h-6" />
              START QUIZ
            </Button>
          </div>
        </div>
      )}

      {gameStarted && !gameOver && (
        <div className="space-y-6">
          <div className="bg-purple-300 border-4 border-black p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-black text-xl">ELEMENT {currentQuestion + 1} OF {questions.length}</span>
          </div>

          <div className="bg-yellow-300 border-4 border-black p-16 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-sm font-black mb-6 text-black/60">WHAT ELEMENT IS THIS?</div>
            <div className="text-8xl md:text-9xl font-black">{questions[currentQuestion].element}</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => !showFeedback && handleAnswer(option)}
                disabled={showFeedback}
                className={`p-6 border-4 border-black font-black text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all ${
                  showFeedback
                    ? option === questions[currentQuestion].name
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

          {showFeedback && (
            <div className={`${selectedAnswer === questions[currentQuestion].name ? 'bg-green-400' : 'bg-red-400'} border-4 border-black p-6 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] animate-fade-in`}>
              <span className="font-black text-2xl">
                {selectedAnswer === questions[currentQuestion].name ? '✓ CORRECT!' : '✗ WRONG!'}
              </span>
            </div>
          )}

          <div className="bg-white border-4 border-black p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-black text-xl">SCORE: {score}/{questions.length}</span>
          </div>
        </div>
      )}

      {gameOver && (
        <div className="space-y-6 animate-fade-in">
          <div className={`${getPerformance().color} border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}>
            <Target className="w-16 h-16 mx-auto mb-4" />
            <h4 className="text-3xl font-black mb-4">{getPerformance().text}</h4>
            <div className="text-6xl font-black mb-2">{score}/{questions.length}</div>
          </div>

          <div className="bg-cyan-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-xl font-black mb-4 uppercase">💡 CHEMISTRY TIP:</h4>
            <p className="font-bold text-sm">
              Learn the first 30 elements by heart. Create mnemonics for tricky symbols like Na, K, Au, Ag, Fe. 
              Periodic table mastery = Foundation for JEE Chemistry!
            </p>
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

export default PeriodicTableQuiz;
