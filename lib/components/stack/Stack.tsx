import "./Stack.css";

interface StackProps {
  align?: "start" | "center" | "end" | "space-between" | "stretch";
  children: React.ReactNode;
  className?: string;
  direction?: "column" | "row";
  gap?: string;
  justify?: "start" | "center" | "end" | "space-between" | "stretch";
};

const Stack = ({ align, children, className = "", direction, gap, justify }: StackProps) => {
  const customClassName = {
    align: align ? `align-${align}` : "",
    direction: direction ? `flex-${direction}` : "",
    gap: gap ? `gap-${gap}` : "",
    justify: justify ? `justify-${justify}` : "",
  };

  return (
    <div className={`stack ${className} ${customClassName.direction} ${customClassName.gap}`}>
      {children}
    </div>
  );
};

export { Stack };
