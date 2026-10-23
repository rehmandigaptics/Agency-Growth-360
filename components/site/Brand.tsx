export function Brand({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a className={`navbar-brand ${className}`.trim()} href="/" onClick={onClick}>
      <span className="brand-icon">
        <i className="bi bi-graph-up-arrow" />
      </span>
      <span>
        Agency Growth <span>360</span>
      </span>
    </a>
  );
}
