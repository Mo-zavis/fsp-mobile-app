import { useNavigate } from 'react-router-dom';
import AppHeader from '../components/layout/AppHeader';
import NavBar from '../components/layout/NavBar';
import Button from '../components/ui/Button';
import './ProfileScreen.css';

export default function ProfileScreen() {
  const navigate = useNavigate();

  const userSports = [
    { id: 'soccer', name: 'Soccer', icon: '⚽', primary: true },
    { id: 'basketball', name: 'Basketball', icon: '🏀' },
    { id: 'tennis', name: 'Tennis', icon: '🎾' },
  ];

  const leaderboards = [
    { rank: 3, name: 'High School', icon: '🏫' },
    { rank: 15, name: 'WBL GLOBAL', icon: '🌍' },
  ];

  return (
    <div className="app-container">
      <AppHeader />

      <div className="content-area">
        <div className="profile-header">
          <div className="profile-avatar">
            <div className="avatar-circle"></div>
            <div className="status-badge caption">(SP) Status: Free</div>
          </div>
          <Button variant="secondary" className="btn-small">
            Upgrade Now →
          </Button>
        </div>

        <div className="profile-stats">
          <div className="stat-item">
            <div className="stat-value utility">$42</div>
            <div className="caption">EARNINGS</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-value utility">4,250</div>
            <div className="caption">SP POINTS</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-value utility">3</div>
            <div className="caption">TICKETS</div>
          </div>
        </div>

        <div className="profile-invite">
          <Button variant="secondary">+ Invite Friends</Button>
        </div>

        <div className="profile-section">
          <div className="section-title-small display-text">MY SPORTS</div>
          <div className="sports-badges">
            {userSports.map((sport) => (
              <div key={sport.id} className={`sport-badge ${sport.primary ? 'primary' : ''}`}>
                <span className="sport-badge-icon">{sport.icon}</span>
                <span className="sport-badge-name utility">{sport.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-section">
          <div className="section-title-small display-text">LEADERBOARD</div>
          <div className="leaderboard-list">
            {leaderboards.map((board, idx) => (
              <div key={idx} className="leaderboard-item glass-panel">
                <span className="leaderboard-icon">{board.icon}</span>
                <span className="leaderboard-name utility">{board.name}</span>
                <span className="leaderboard-rank text-accent">#{board.rank}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-section">
          <div className="section-title-small display-text">MY POOLS</div>
          <Button variant="secondary" onClick={() => navigate('/pools')}>
            View All Pools →
          </Button>
        </div>
      </div>

      <NavBar />
    </div>
  );
}
