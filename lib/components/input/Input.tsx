import "./Input.css";

interface InputProps {
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  value?: string;
};

const Input = ({
  className = "",
  defaultValue,
  disabled,
  onChange,
  placeholder,
  type = "text",
  value,
}: InputProps) => {
  return (
    <input
      className={`input ${className}`}
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};

export { Input };
