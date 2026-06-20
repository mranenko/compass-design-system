import "./CardImage.css";

interface CardImageProps {
  children: React.ReactNode;
  className?: string;
};

const CardImage = ({ children, className = "" }: CardImageProps) => {
  return (
    <div className={`card-image ${className}`}>
      {children}
    </div>
  );
};

export { CardImage };
