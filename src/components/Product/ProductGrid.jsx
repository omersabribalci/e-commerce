import ProductCard from "./ProductCard";

const ProductGrid = ({ products, view = "grid" }) => {
  return (
    <div
      className={
        view === "list"
          ? "flex w-full flex-col gap-5"
          : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7.5"
      }
    >
      {products.map((product, index) => (
        <ProductCard key={index} product={product} view={view} />
      ))}
    </div>
  );
};

export default ProductGrid;
