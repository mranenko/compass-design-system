import "./Notification.css";

interface NotificationProps {
  children: React.ReactNode;
  className?: string;
  status?: "danger" | "success" | "info";
  title?: string;
};

const Notification = ({ children, className = "", status, title }: NotificationProps) => {
  const customClassName = {
    status: status ? `status-${status}` : "",
  };

  return (
    <div className={`notification ${className} ${customClassName.status}`}>
      {title && <span className="notification-title">{title}</span>}
      <span className="notification-message">{children}</span>
    </div>
  );
};

export { Notification };
