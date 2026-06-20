import "./TabContent.css";

interface TabContentProps {
  active?: boolean;
  children: React.ReactNode;
  className?: string;
};

const TabContent = ({ active = false, children, className = "" }: TabContentProps) => {
  return (
    <div className={`tab-content ${className}`} role="tabpanel" hidden={!active}>
      {children}
    </div>
  );
};

export { TabContent };
