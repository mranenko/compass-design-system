import "./TextGroup.scss";

interface TextGroupProps {
  children: React.ReactNode
  className?: string
};

const TextGroup = ({ children, className = "" }: TextGroupProps) => {
  return (
    <div className={`text-group ${className}`}>
      {children}
    </div>
  )
};

export { TextGroup };
