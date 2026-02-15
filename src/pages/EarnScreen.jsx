import { useNavigate } from 'react-router-dom';
import NavBar from '../components/layout/NavBar';
import Button from '../components/ui/Button';
import './EarnScreen.css';

export default function EarnScreen() {
  const navigate = useNavigate();

  const deals = [
    { brand: 'Nike', offer: '20% OFF', icon: '👟' },
    { brand: 'Adidas', offer: 'B2G1 FREE', icon: '⚽' },
  ];

  const travel = [
    { name: 'Flight Deals', icon: '✈️' },
    { name: 'Hotel Packages', icon: '🏨' },
    { name: 'Experiences', icon: '🎿' },
  ];

  return (
    <div className="app-container">
      <div className="earn-header">
        <h1 className="display-text h2">FI Earn</h1>
        <div className="earn-icons">
          <button className="header-icon-btn">ℹ️</button>
          <button className="header-icon-btn">⚙️</button>
        </div>
      </div>

      <div className="content-area">
        <div className="earn-cards">
          <div className="earn-card glass-panel">
            <div className="earn-card-icon">🎫</div>
            <div className="earn-card-value">+1</div>
            <div className="caption">Total: 3 Golden Tickets</div>
          </div>

          <div className="earn-card glass-panel">
            <div className="earn-card-label caption">FSP SCORE</div>
            <div className="earn-card-value" style={{ fontSize: '40px' }}>88</div>
            <a href="#" className="text-accent" style={{ fontSize: '12px' }}>
              Increase Score →
            </a>
          </div>
        </div>

        <div className="action-grid">
          <div className="action-card glass-panel">
            <div className="action-icon">📷</div>
            <div className="utility">Scan Receipt</div>
          </div>
          <div className="action-card glass-panel">
            <div className="action-icon">📸</div>
            <div className="utility">Show Your Gear</div>
          </div>
        </div>

        <div className="earn-section">
          <div className="section-title-small display-text">SPECIAL DEALS</div>
          <div className="deals-carousel hide-scrollbar">
            {deals.map((deal, idx) => (
              <div key={idx} className="deal-card-horizontal glass-panel">
                <div className="deal-icon-large">{deal.icon}</div>
                <div>
                  <div className="caption text-accent">{deal.offer}</div>
                  <div className="utility" style={{ fontSize: '16px', marginTop: '4px' }}>
                    {deal.brand}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="earn-section">
          <div className="section-title-small display-text">DISCOUNTED TRAVEL</div>
          <div className="travel-grid">
            {travel.map((item, idx) => (
              <div key={idx} className="travel-card glass-panel">
                <div className="travel-icon">{item.icon}</div>
                <div className="utility" style={{ fontSize: '12px' }}>
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="earn-footer">
          <Button>More Deals →</Button>
        </div>
      </div>

      <NavBar />
    </div>
  );
}
