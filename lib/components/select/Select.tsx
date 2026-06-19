import { CaretDown } from "@phosphor-icons/react";
import "./Select.css";

interface SelectProps {
  children: React.ReactNode;
  className?: string;
  defaultValue?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
};

const Select = ({
  children,
  className = "",
  defaultValue,
  label,
  onChange,
  value,
}: SelectProps) => {
  return (
    <div className={`select ${className}`}>
      <select
        className="select-input"
        aria-label={label}
        defaultValue={defaultValue}
        onChange={onChange}
        value={value}
      >
        {children}
      </select>
      <CaretDown className="select-caret" weight="bold" aria-hidden />
    </div>
  );
};

export { Select };
