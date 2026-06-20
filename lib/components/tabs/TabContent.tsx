import "./TabContent.css";

interface TabContentProps {
  active?: boolean;
  children: React.ReactNode;
  className?: string;
  padding?: string;
};

const TabContent = ({ active = false, children, className = "", padding }: TabContentProps) => {
  const customClassName = {
    padding: padding ? `padding-${padding}` : "",
  };

  return (
    <div className={`tab-content ${className} ${customClassName.padding}`} role="tabpanel" hidden={!active}>
      {children}
    </div>
  );
};

export { TabContent };
