const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`custom-button custom-button-${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;