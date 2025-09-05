import "./EyebrowTitle.scss";

interface EyebrowTitleProps {
  className?: string
  eyebrow: string
  title: string
};

const EyebrowTitle = ({ className = "", eyebrow, title }: EyebrowTitleProps) => {
  return (
    <div className={`eyebrow-title ${className}`}>
      <h6 className="eyebrow">{eyebrow}</h6>
      <h2>{title}</h2>
    </div>
  )
};

export { EyebrowTitle };
