import './InputField.css';

export default function InputField({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  icon,
  ...props
}) {
  return (
    <div className="input-field-wrapper">
      {label && <label className="input-label caption">{label}</label>}
      <div className="input-container glass-panel">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="input-field"
          {...props}
        />
      </div>
    </div>
  );
}
