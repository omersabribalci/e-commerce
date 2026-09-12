const ButtonMd = ({
  variant = "solid",
  color = "info",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "w-33 h-13 cursor-pointer rounded-md font-bold flex items-center justify-center transition-all border-2 text-btn";

  const styles = {
    info: {
      solid: "bg-primary text-text-light border-transparent hover:bg-hover",
      outlined: "bg-transparent text-primary border-primary hover:bg-blue-50",
    },
    success: {
      solid: "bg-success text-text-light border-transparent hover:bg-green-600",
      outlined: "bg-transparent text-success border-success hover:bg-green-50",
    },
  };

  return (
    <button
      className={`${baseStyles} ${styles[color][variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonMd;
