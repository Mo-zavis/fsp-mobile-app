import './SectionHeader.css';

export default function SectionHeader({ title, actionText = "VIEW ALL", onAction, accentColor = 'blue' }) {
  return (
    <div className="section-header">
      <div className={`section-title display-text accent-${accentColor}`}>
        {title}
      </div>
      {actionText && (
        <div className="see-all" onClick={onAction}>
          {actionText}
        </div>
      )}
    </div>
  );
}
