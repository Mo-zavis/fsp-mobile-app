import { useNavigate } from 'react-router-dom';
import AppHeader from '../components/layout/AppHeader';
import NavBar from '../components/layout/NavBar';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import PoolCard from '../components/ui/PoolCard';
import './HomeScreen.css';

export default function HomeScreen() {
  const navigate = useNavigate();

  const stories = [
    { id: 1, label: 'LIVE NOW', isLive: true },
    { id: 2, label: '@josh_lax' },
    { id: 3, label: '@sarahfit' },
    { id: 4, label: '@team_usa' },
    { id: 5, label: '@dunk_king' },
  ];

  const trendingPools = [
    { title: 'NIKE\nRUN CLUB', participants: '2.4K', bgColor: '#2a1a1a' },
    { title: 'PLL\nSHOOTOUT', participants: '850', bgColor: '#1a2a1a' },
    { title: 'CURRY\n3-POINT', participants: '12K', bgColor: '#1a1a2a' },
  ];

  return (
    <div className="app-container">
      <AppHeader />

      <div className="content-area">
        {/* Highlights Row */}
        <div className="highlights-row hide-scrollbar">
          {stories.map((story) => (
            <div key={story.id} className="story-item">
              <div className={`story-ring ${story.isLive ? 'live' : ''}`}>
                <div className="story-img"></div>
              </div>
              <span className={`story-label ${story.isLive ? 'utility' : ''}`}>
                {story.label}
              </span>
            </div>
          ))}
        </div>

        {/* Hero Section */}
        <div className="hero-section">
          <div className="caption" style={{ marginBottom: '8px', color: 'var(--color-accent)' }}>
            Daily Global Challenge
          </div>
          <div className="hero-card" onClick={() => navigate('/play')}>
            <div className="hero-bg"></div>
            <div className="hero-slash"></div>
            <div className="live-tag">Ends in 2h 15m</div>

            <div className="hero-content">
              <div className="display-text hero-title">
                CROSSBAR<br />
                <span className="text-accent">CHALLENGE</span>
              </div>

              <div className="hero-meta utility">
                <span className="text-red">ENTRY: 50 SP</span>
                <span>•</span>
                <span>PRIZE: $500 POOL</span>
              </div>

              <Button>
                PROVE IT <span style={{ fontSize: '12px', verticalAlign: 'middle' }}>▶</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Wager Strip */}
        <div className="wager-strip glass-panel">
          <div className="wager-left">
            <div className="avatar-stack">
              <div className="avatar"></div>
              <div className="avatar"></div>
            </div>
            <div>
              <div className="utility" style={{ fontSize: '12px' }}>Mike vs. Dave</div>
              <div className="caption text-accent">100M SPRINT • $20 WAGER</div>
            </div>
          </div>
          <button className="wager-btn">WATCH</button>
        </div>

        {/* Trending Pools */}
        <SectionHeader title="TRENDING POOLS" onAction={() => navigate('/pools')} />
        <div className="scroll-row hide-scrollbar">
          {trendingPools.map((pool, idx) => (
            <PoolCard
              key={idx}
              title={pool.title}
              participants={pool.participants}
              bgColor={pool.bgColor}
              onClick={() => navigate('/pools')}
            />
          ))}
        </div>

        {/* Brand Deals */}
        <SectionHeader title="BRAND DEALS" accentColor="red" onAction={() => navigate('/earn')} />
        <div className="scroll-row hide-scrollbar">
          <div className="deal-card glass-panel" onClick={() => navigate('/earn')}>
            <div className="deal-icon"></div>
            <div>
              <div className="caption text-accent">UNLOCK WITH 5 GOLDEN TICKETS</div>
              <div className="utility" style={{ fontSize: '16px', marginTop: '4px' }}>
                20% OFF GAIT LACROSSE
              </div>
            </div>
          </div>
        </div>
      </div>

      <NavBar />
    </div>
  );
}
