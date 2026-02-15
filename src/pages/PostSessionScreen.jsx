import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import './PostSessionScreen.css';

export default function PostSessionScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const score = location.state?.score || 0;

  return (
    <div className="post-session-screen">
      <div className="session-video-bg"></div>

      <div className="post-session-overlay glass-panel">
        <div className="ad-slot glass-panel">
          <div className="caption">SPONSORED</div>
          <div className="utility" style={{ marginTop: '8px' }}>
            Get 15% off Nike gear with code CROSSBAR
          </div>
        </div>

        <div className="score-display">
          <div className="display-text h2">YOUR SCORE</div>
          <div className="final-score">
            🏆 {score} 🏆
          </div>
        </div>

        <div className="post-actions">
          <div className="action-buttons">
            <Button variant="secondary" onClick={() => navigate('/challenge')}>
              Challenge Friend
            </Button>
            <button className="share-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
              </svg>
            </button>
          </div>

          <div className="text-buttons">
            <button className="text-btn">Save</button>
            <span style={{ color: '#666' }}>•</span>
            <button className="text-btn">Replay</button>
          </div>
        </div>

        <div className="post-footer">
          <Button onClick={() => navigate('/play')}>
            NEXT CHALLENGE →
          </Button>
          <button className="back-link" onClick={() => navigate('/home')}>
            ← Home
          </button>
        </div>
      </div>
    </div>
  );
}
