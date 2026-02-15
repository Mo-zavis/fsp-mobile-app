import './SportTile.css';

export default function SportTile({ icon, name, selected, onClick }) {
  return (
    <div
      className={`sport-tile glass-panel ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className="sport-icon">{icon}</div>
      <div className="sport-name utility">{name}</div>
      {selected && (
        <div className="sport-checkmark">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </div>
      )}
    </div>
  );
}
