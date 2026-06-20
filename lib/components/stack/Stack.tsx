import "./Stack.css";

interface StackProps {
  align?: "start" | "center" | "end" | "space-between" | "stretch";
  children: React.ReactNode;
  className?: string;
  direction?: "column" | "row";
  gap?: string;
  justify?: "start" | "center" | "end" | "space-between" | "stretch";
  width?: "full";
};

const Stack = ({ align, children, className = "", direction, gap, justify, width }: StackProps) => {
  const customClassName = {
    align: align ? `align-${align}` : "",
    direction: direction ? `flex-${direction}` : "",
    gap: gap ? `gap-${gap}` : "",
    justify: justify ? `justify-${justify}` : "",
    width: width ? `width-${width}` : "",
  };

  return (
    <div className={`stack ${className} ${customClassName.align} ${customClassName.direction} ${customClassName.gap} ${customClassName.justify} ${customClassName.width}`}>
      {children}
    </div>
  );
};

export { Stack };
