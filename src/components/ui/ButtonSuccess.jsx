const ButtonSuccess = ({
  children,
  className = "",
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`inline-flex min-h-12 items-center justify-center rounded-sm bg-success px-7 py-3 font-body text-btn font-bold text-text-light transition-colors duration-200 hover:bg-hover cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonSuccess;
