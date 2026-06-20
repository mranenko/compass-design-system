import "./Tab.css";

interface TabProps {
  active?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Tab = ({ active = false, children, className = "", onClick }: TabProps) => {
  const customClassName = {
    active: active ? "active" : "",
  };

  return (
    <button
      className={`tab ${className} ${customClassName.active}`}
      onClick={onClick}
      role="tab"
      aria-selected={active}
      type="button"
    >
      {children}
    </button>
  );
};

export { Tab };
