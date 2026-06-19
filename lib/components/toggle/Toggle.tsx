import "./Toggle.css";

interface ToggleProps {
  checked?: boolean;
  className?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Toggle = ({
  checked,
  className = "",
  defaultChecked,
  disabled,
  label,
  onChange,
}: ToggleProps) => {
  return (
    <label className={`toggle ${className}`}>
      <input
        className="toggle-input"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
        type="checkbox"
      />
      <span className="toggle-track" aria-hidden>
        <span className="toggle-thumb" />
      </span>
      {label && <span className="toggle-label">{label}</span>}
    </label>
  );
};

export { Toggle };
