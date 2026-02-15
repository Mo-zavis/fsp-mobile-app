import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

export default function PrimarySportScreen() {
  const navigate = useNavigate();
  const [selectedSport, setSelectedSport] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSports = SPORTS.filter(sport =>
    sport.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContinue = () => {
    if (selectedSport) {
      navigate('/onboarding/secondary', { state: { primarySport: selectedSport } });
    }
  };

  return (
    <div className="sport-picker-screen">
      <div className="sport-picker-header">
        <h1 className="sport-picker-title display-text">Pick Your Primary Sport</h1>
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
              selected={selectedSport === sport.id}
              onClick={() => setSelectedSport(sport.id)}
            />
          ))}
        </div>
      </div>

      <div className="sport-picker-footer">
        <Button onClick={handleContinue} disabled={!selectedSport}>
          CONTINUE
        </Button>
      </div>
    </div>
  );
}
