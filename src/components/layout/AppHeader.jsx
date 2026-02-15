import { useNavigate } from 'react-router-dom';
import './AppHeader.css';

export default function AppHeader() {
  const navigate = useNavigate();

  return (
    <header className="app-header">
      <div className="brand" onClick={() => navigate('/home')}>
        <div className="logo">
          <span className="logo-text">FSP</span>
          <span className="logo-dot">.</span>
        </div>
      </div>

      <div className="header-icons">
        <button className="header-icon-btn" aria-label="View map">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </button>
        <button className="header-icon-btn" onClick={() => navigate('/profile')} aria-label="Profile">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
