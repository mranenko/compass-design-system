import "./Button.css";

interface ButtonProps {
  background?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
};

const Button = ({ background, children, className = "" }: ButtonProps) => {
  const customClassName = {
    background: background ? `background-${background}` : "",
  };

  return (
    <button className={`button ${className} ${customClassName.background}`}>
      {children}
    </button>
  );
};

export { Button };
