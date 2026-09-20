const Container = ({
  as: Component = "div",
  children,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full px-6 lg:px-9">
      <Component
        className={`mx-auto w-full max-w-site ${className}`}
        {...props}
      >
        {children}
      </Component>
    </div>
  );
};

export default Container;
