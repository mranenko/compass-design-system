import "./Chip.css";

interface ChipProps {
  children: React.ReactNode;
  className?: string;
};

const Chip = ({ children, className = "" }: ChipProps) => {
  return (
    <span className={`chip ${className}`}>
      {children}
    </span>
  );
};

export { Chip };
