import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import InputField from '../components/ui/InputField';
import './ChallengeFriendScreen.css';

export default function ChallengeFriendScreen() {
  const navigate = useNavigate();
  const [wagerAmount, setWagerAmount] = useState('20');

  const challengeMessage = `I just scored big in the Crossbar Challenge! Think you can beat my score? Put your money where your mouth is - $${wagerAmount} wager. Accept the challenge in the FSP app! 🏆⚽`;

  return (
    <div className="challenge-screen">
      <button className="back-btn" onClick={() => navigate('/post-session')}>
        ← Back
      </button>

      <div className="challenge-content">
        <h1 className="challenge-title display-text">Challenge Friend</h1>

        <div className="add-friend-section glass-panel">
          <button className="add-friend-btn">
            <div className="add-icon">+</div>
          </button>
          <div className="caption">From your contacts</div>
        </div>

        <div className="wager-section">
          <div className="caption" style={{ marginBottom: '8px' }}>WAGER AMOUNT</div>
          <InputField
            type="number"
            value={wagerAmount}
            onChange={(e) => setWagerAmount(e.target.value)}
            icon="$"
            placeholder="Enter amount"
          />
        </div>

        <div className="apple-pay-section">
          <button className="apple-pay-btn">
            <span>🍎</span>
            <span>Pay with Apple Pay</span>
          </button>
        </div>

        <div className="message-preview glass-panel">
          <div className="caption" style={{ marginBottom: '8px' }}>MESSAGE PREVIEW</div>
          <p className="preview-text">{challengeMessage}</p>
        </div>

        <div className="caption" style={{ textAlign: 'center', color: '#666' }}>
          Funds held in secure escrow until resolved
        </div>

        <div className="challenge-footer">
          <Button onClick={() => navigate('/home')}>
            SEND CHALLENGE
          </Button>
        </div>
      </div>
    </div>
  );
}
