import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import './SplashScreen.css';

export default function SplashScreen() {
  const navigate = useNavigate();

  return (
    <div className="splash-screen">
      <div className="splash-slash"></div>

      <div className="splash-content">
        <div className="splash-logo">
          <span className="splash-logo-text">FSP</span>
          <span className="splash-logo-dot">.</span>
        </div>
        <p className="splash-tagline">Future of Sports</p>
      </div>

      <div className="splash-cta">
        <Button onClick={() => navigate('/login')}>
          LOGIN / SIGNUP
        </Button>
      </div>
    </div>
  );
}
