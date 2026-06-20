import "./Chip.css";

interface ChipProps {
  children: React.ReactNode;
  className?: string;
  color?: "primary" | "secondary" | "danger" | "success" | "info";
};

const Chip = ({ children, className = "", color }: ChipProps) => {
  const customClassName = {
    color: color ? `color-${color}` : "",
  };

  return (
    <span className={`chip ${className} ${customClassName.color}`}>
      {children}
    </span>
  );
};

export { Chip };
