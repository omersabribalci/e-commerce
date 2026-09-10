const Button = ({ children, className = "", type = "button", ...props }) => {
  return (
    <button
      type={type}
      className={`inline-flex min-h-12 items-center justify-center rounded-sm bg-success px-7 py-3 font-body text-btn font-bold text-text-light transition-colors duration-200 hover:bg-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-light disabled:cursor-not-allowed disabled:bg-disabled ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
