import "./ScreenMainHeader.css";

interface ScreenMainHeaderProps {
  children: React.ReactNode
  className?: string
};

const ScreenMainHeader = ({ children, className = "" }: ScreenMainHeaderProps) => {
  return (
    <div className={`screen-main-header ${className}`}>
      {children}
    </div>
  );
};

export { ScreenMainHeader };
