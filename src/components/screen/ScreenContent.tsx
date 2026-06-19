import "./ScreenContent.css";

interface ScreenContentProps {
  children: React.ReactNode
  className?: string
};

const ScreenContent = ({ children, className = "" }: ScreenContentProps) => {
  return (
    <div className={`screen-content ${className}`}>
      {children}
    </div>
  );
};

export { ScreenContent };
