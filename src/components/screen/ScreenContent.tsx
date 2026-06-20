import "./ScreenContent.css";

interface ScreenContentProps {
  children: React.ReactNode;
  className?: string;
  gap?: string;
};

const ScreenContent = ({ children, className = "", gap }: ScreenContentProps) => {
  const customClassName = {
    gap: gap ? `gap-${gap}` : "",
  };

  return (
    <div className={`screen-content ${className} ${customClassName.gap}`}>
      {children}
    </div>
  );
};

export { ScreenContent };
