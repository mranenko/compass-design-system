import "./CodeBlock.css";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
};

const CodeBlock = ({ children, className = "" }: CodeBlockProps) => {
  return (
    <pre className={`code-block ${className}`}>
      <code>{children}</code>
    </pre>
  );
};

export { CodeBlock };
