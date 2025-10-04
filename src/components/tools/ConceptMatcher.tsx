import { useState } from 'react';
import { Button } from '../ui/Button';
import { Target, Brain, CheckCircle2 } from 'lucide-react';

const ConceptMatcher = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [gameOver, setGameOver] = useState(false);

  const pairs = [
    { concept: 'Kinematics', application: 'Motion in a straight line' },
    { concept: 'Thermodynamics', application: 'Heat engine efficiency' },
    { concept: 'Electrostatics', application: "Coulomb's law" },
    { concept: 'Optics', application: 'Lens formula' },
    { concept: 'Modern Physics', application: 'Photoelectric effect' },
  ];

  const concepts = pairs.map(p => p.concept);
  const applications = [...pairs.map(p => p.application)].sort(() => Math.random() - 0.5);

  const startGame = () => {
    setGameStarted(true);
    setMatches({});
    setGameOver(false);
  };

  const handleMatch = (concept: string, application: string) => {
    setMatches({ ...matches, [concept]: application });
  };

  const checkAnswers = () => {
    setGameOver(true);
  };

  const getScore = () => {
    let correct = 0;
    pairs.forEach(pair => {
      if (matches[pair.concept] === pair.application) correct++;
    });
    return correct;
  };

  const isCorrect = (concept: string) => {
    const correctAnswer = pairs.find(p => p.concept === concept)?.application;
    return matches[concept] === correctAnswer;
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="inline-block bg-pink-400 text-white px-6 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mb-4">
          <h3 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-3">
            <Target className="w-8 h-8" />
            CONCEPT MATCHER
          </h3>
        </div>
        <p className="text-base md:text-lg font-bold text-black/80">
          Match physics concepts to their real-world applications! 🎯
        </p>
      </div>

      {!gameStarted && (
        <div className="space-y-6">
          <div className="bg-orange-300 border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-xl font-black mb-4 uppercase">🎮 HOW TO PLAY:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="font-black">→</span>
                <span className="font-bold text-sm">Match each concept to its application</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black">→</span>
                <span className="font-bold text-sm">Select from dropdown for each concept</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black">→</span>
                <span className="font-bold text-sm">Check your understanding of theory vs practice!</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Button onClick={startGame} className="text-xl">
              <Brain className="w-6 h-6" />
              START MATCHING
            </Button>
          </div>
        </div>
      )}

      {gameStarted && !gameOver && (
        <div className="space-y-6">
          <div className="bg-yellow-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-xl font-black mb-6 uppercase text-center">MATCH THE PAIRS:</h4>
            <div className="space-y-4">
              {concepts.map((concept, idx) => (
                <div key={idx} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="flex-1">
                      <span className="font-black text-lg">{concept}</span>
                    </div>
                    <div className="flex-1">
                      <select
                        value={matches[concept] || ''}
                        onChange={(e) => handleMatch(concept, e.target.value)}
                        className="w-full border-4 border-black p-3 font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                      >
                        <option value="">-- Select Application --</option>
                        {applications.map((app, i) => (
                          <option key={i} value={app}>{app}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={checkAnswers} 
              disabled={Object.keys(matches).length !== concepts.length}
              className="text-xl"
            >
              ✓ CHECK ANSWERS
            </Button>
          </div>
        </div>
      )}

      {gameOver && (
        <div className="space-y-6 animate-fade-in">
          <div className={`${getScore() >= 4 ? 'bg-green-400' : getScore() >= 3 ? 'bg-yellow-400' : 'bg-red-400'} border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}>
            <CheckCircle2 className="w-16 h-16 mx-auto mb-4" />
            <h4 className="text-3xl font-black mb-4">
              {getScore() >= 4 ? 'EXCELLENT! 🎉' : getScore() >= 3 ? 'GOOD JOB! 👍' : 'NEEDS WORK! 📚'}
            </h4>
            <div className="text-6xl font-black mb-2">{getScore()}/{concepts.length}</div>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-xl font-black mb-4 uppercase">YOUR ANSWERS:</h4>
            <div className="space-y-3">
              {concepts.map((concept, idx) => (
                <div key={idx} className={`p-4 border-4 border-black ${isCorrect(concept) ? 'bg-green-200' : 'bg-red-200'}`}>
                  <div className="font-black text-sm mb-2">{concept}</div>
                  <div className="text-xs font-bold">
                    Your answer: {matches[concept]}
                  </div>
                  {!isCorrect(concept) && (
                    <div className="text-xs font-bold mt-1 text-red-700">
                      Correct: {pairs.find(p => p.concept === concept)?.application}
                    </div>
                  )}
                </div>
              ))}
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

export default ConceptMatcher;
