import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import './PlayScreen.css';

const SPORTS = [
  { id: 'soccer', icon: '⚽' },
  { id: 'basketball', icon: '🏀' },
  { id: 'tennis', icon: '🎾' },
  { id: 'baseball', icon: '⚾' },
  { id: 'football', icon: '🏈' },
];

const RULES = [
  "Hit the crossbar from 30 yards out",
  "You have 5 attempts to score",
  "Record your full-body shot including the goal",
  "Video must be continuous - no cuts or edits"
];

export default function PlayScreen() {
  const navigate = useNavigate();
  const [selectedSport, setSelectedSport] = useState(null);
  const [showRules, setShowRules] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(t => t - 1);
        // Simulate score increases
        if (Math.random() > 0.8) {
          setScore(s => s + Math.floor(Math.random() * 10));
        }
      }, 1000);

      return () => clearInterval(timer);
    } else if (isPlaying && timeLeft === 0) {
      navigate('/post-session', { state: { score } });
    }
  }, [isPlaying, timeLeft, navigate, score]);

  const handleStart = () => {
    if (selectedSport && !isPlaying) {
      setShowRules(true);
    }
  };

  const handleBeginChallenge = () => {
    setShowRules(false);
    setIsPlaying(true);
  };

  return (
    <div className="play-screen">
      <div className="play-header">
        <button className="back-btn" onClick={() => navigate('/home')}>
          ← Back
        </button>
        <div className="play-score">
          <div className="caption">SCORE</div>
          <div className="display-text h2">{score}</div>
        </div>
        <button className="info-btn" onClick={() => setShowRules(true)}>
          ℹ️
        </button>
      </div>

      {isPlaying && (
        <div className="timer-bar">
          <div className="timer-fill" style={{ width: `${(timeLeft / 60) * 100}%` }}></div>
          <div className="timer-text">{timeLeft}s</div>
        </div>
      )}

      <div className="camera-area">
        <div className="camera-placeholder">
          <svg viewBox="0 0 24 24" fill="currentColor" width="80" height="80">
            <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
          </svg>
          <div className="caption" style={{ marginTop: '16px' }}>CAMERA FEED</div>
        </div>
        <div className="sponsor-tag caption">By: Nike</div>
      </div>

      {!isPlaying && (
        <>
          <div className="sport-selector">
            <div className="caption" style={{ marginBottom: '12px' }}>SELECT SPORT</div>
            <div className="sport-circles">
              {SPORTS.map((sport) => (
                <div
                  key={sport.id}
                  className={`sport-circle ${selectedSport === sport.id ? 'selected' : ''}`}
                  onClick={() => setSelectedSport(sport.id)}
                >
                  {sport.icon}
                </div>
              ))}
            </div>
          </div>

          <div className="play-footer">
            <Button onClick={handleStart} disabled={!selectedSport}>
              ▶ START
            </Button>
          </div>
        </>
      )}

      {showRules && (
        <div className="rules-overlay" onClick={() => setShowRules(false)}>
          <div className="rules-modal glass-panel" onClick={(e) => e.stopPropagation()}>
            <h2 className="display-text h2" style={{ marginBottom: '16px' }}>CHALLENGE RULES</h2>
            <ol className="rules-list">
              {RULES.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ol>
            <Button onClick={handleBeginChallenge} style={{ marginTop: '24px' }}>
              GOT IT
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
