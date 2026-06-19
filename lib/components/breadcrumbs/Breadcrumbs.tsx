import { Link } from "react-router-dom";
import "./Breadcrumbs.css";

interface BreadcrumbsItem {
  href?: string;
  label: string;
};

interface BreadcrumbsProps {
  className?: string;
  items: BreadcrumbsItem[];
};

const Breadcrumbs = ({ className = "", items }: BreadcrumbsProps) => {
  return (
    <nav className={`breadcrumbs ${className}`} aria-label="Breadcrumb">
      <ol className="breadcrumbs-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li className="breadcrumbs-item" key={item.label}>
              {isLast ? (
                <span className="breadcrumbs-current" aria-current="page">
                  {item.label}
                </span>
              ) : item.href ? (
                <Link className="breadcrumbs-link" to={item.href}>
                  {item.label}
                </Link>
              ) : (
                <span className="breadcrumbs-label">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export { Breadcrumbs };
