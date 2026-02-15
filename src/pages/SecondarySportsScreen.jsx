import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import InputField from '../components/ui/InputField';
import SportTile from '../components/ui/SportTile';
import './PrimarySportScreen.css';

const SPORTS = [
  { id: 'squash', name: 'Squash', icon: '🎾' },
  { id: 'soccer', name: 'Soccer', icon: '⚽' },
  { id: 'basketball', name: 'Basketball', icon: '🏀' },
  { id: 'cricket', name: 'Cricket', icon: '🏏' },
  { id: 'baseball', name: 'Baseball', icon: '⚾' },
  { id: 'tennis', name: 'Tennis', icon: '🎾' },
  { id: 'football', name: 'Football', icon: '🏈' },
  { id: 'swimming', name: 'Swimming', icon: '🏊' },
  { id: 'golf', name: 'Golf', icon: '⛳' },
];

export default function SecondarySportsScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const primarySport = location.state?.primarySport;

  const [selectedSports, setSelectedSports] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const availableSports = SPORTS.filter(sport => sport.id !== primarySport);
  const filteredSports = availableSports.filter(sport =>
    sport.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSportToggle = (sportId) => {
    if (selectedSports.includes(sportId)) {
      setSelectedSports(selectedSports.filter(id => id !== sportId));
    } else if (selectedSports.length < 4) {
      setSelectedSports([...selectedSports, sportId]);
    }
  };

  const handleContinue = () => {
    navigate('/home');
  };

  return (
    <div className="sport-picker-screen">
      <button className="skip-btn" onClick={() => navigate('/home')}>
        Skip
      </button>

      <div className="sport-picker-header">
        <h1 className="sport-picker-title display-text">Pick Your Other Sports</h1>
        <p className="caption" style={{ marginTop: '8px' }}>Max 4 • Selected: {selectedSports.length}/4</p>
      </div>

      <div className="sport-picker-content">
        <InputField
          placeholder="Search sports..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          icon="🔍"
        />

        <div className="sports-grid">
          {filteredSports.map((sport) => (
            <SportTile
              key={sport.id}
              icon={sport.icon}
              name={sport.name}
              selected={selectedSports.includes(sport.id)}
              onClick={() => handleSportToggle(sport.id)}
            />
          ))}
        </div>
      </div>

      <div className="sport-picker-footer">
        <Button onClick={handleContinue}>
          CONTINUE
        </Button>
      </div>
    </div>
  );
}
