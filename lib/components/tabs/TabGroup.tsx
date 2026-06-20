import "./TabGroup.css";

interface TabGroupProps {
  children: React.ReactNode;
  className?: string;
};

const TabGroup = ({ children, className = "" }: TabGroupProps) => {
  return (
    <div className={`tab-group ${className}`} role="tablist">
      {children}
    </div>
  );
};

export { TabGroup };
