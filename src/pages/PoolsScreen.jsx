import { useNavigate } from 'react-router-dom';
import NavBar from '../components/layout/NavBar';
import Button from '../components/ui/Button';
import './PoolsScreen.css';

export default function PoolsScreen() {
  const navigate = useNavigate();

  const trendingPools = [
    { name: 'LA Lakers', icon: '🏀', prize: '$2,500 Pool', members: '2.4K' },
    { name: 'Mookie Betts', icon: '⚾', prize: '$1,000 Pool', members: '850' },
    { name: 'Federer Fans', icon: '🎾', prize: '$3,200 Pool', members: '1.2K' },
  ];

  const myPools = ['WPS', 'LAK', 'FED'];

  return (
    <div className="app-container">
      <div className="pools-header">
        <button className="back-btn" onClick={() => navigate('/home')}>
          ←
        </button>
        <h1 className="display-text h2">Pools</h1>
        <div style={{ width: '44px' }}></div>
      </div>

      <div className="content-area">
        <div className="pools-section">
          <div className="section-title-small display-text">TRENDING POOLS</div>
          <div className="trending-pools-list">
            {trendingPools.map((pool, idx) => (
              <div key={idx} className="pool-item glass-panel">
                <div className="pool-icon-large">{pool.icon}</div>
                <div className="pool-details">
                  <div className="pool-name utility">{pool.name}</div>
                  <div className="caption text-accent">{pool.prize}</div>
                  <div className="caption">{pool.members} Members</div>
                </div>
                <Button variant="secondary" className="btn-small">
                  Join
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="pools-section">
          <div className="section-title-small display-text">MY POOLS</div>
          <div className="my-pools-grid">
            {myPools.map((pool, idx) => (
              <div key={idx} className="my-pool-badge glass-panel">
                <div className="utility">{pool}</div>
              </div>
            ))}
            <div className="my-pool-badge glass-panel add-pool">
              <div className="utility">+</div>
            </div>
          </div>
        </div>
      </div>

      <NavBar />
    </div>
  );
}
