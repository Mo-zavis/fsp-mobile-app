import './PoolCard.css';

export default function PoolCard({ title, participants, bgColor = '#1a1a1a', onClick }) {
  return (
    <div className="pool-card" onClick={onClick}>
      <div className="pool-bg" style={{ backgroundColor: bgColor }}></div>
      <div className="pool-info">
        <div className="pool-participants">{participants} PLAYERS</div>
        <div className="utility pool-title">{title}</div>
      </div>
    </div>
  );
}
