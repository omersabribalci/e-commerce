const Container = ({ as: Component = "div", children, className = "" }) => {
  return (
    <div className="w-full px-6 lg:px-9">
      <Component className={`mx-auto w-full max-w-site ${className}`}>
        {children}
      </Component>
    </div>
  );
};

export default Container;
