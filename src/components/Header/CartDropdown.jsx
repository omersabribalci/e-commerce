import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductDetailPath } from "../../utils/productDetailPath";

const CartDropdown = ({ icon }) => {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const categories = useSelector((state) => state.product.categories);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const itemCount = cart.reduce((total, item) => total + item.count, 0);

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event) => {
      if (!menuRef.current?.contains(event.target)) setIsOpen(false);
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="relative flex items-center gap-1 cursor-pointer transition-colors hover:text-hover"
      >
        {icon}
        {itemCount > 0 && (
          <span className="flex min-w-5 h-5 items-center justify-center rounded-full bg-primary px-1 text-small text-text-light">
            {itemCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div
          className="absolute left-1/2 top-full z-50 mt-3 w-80 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-md border border-gray-light-2 bg-bg-light text-text shadow-accentued xl:right-0 xl:left-auto xl:translate-x-0 sm:w-96"
        >
          <div className="flex flex-row items-center justify-between px-5 py-4 border-b border-gray-light-2">
            <h2 className="text-h6 font-bold text-text">
              My Cart ({itemCount} Items)
            </h2>
            <Link
              to="/cart"
              className="text-link text-text cursor-pointer hover:text-hover hover:scale-105 transition-transform"
            >
              View Cart
            </Link>
          </div>

          {cart.length === 0 ? (
            <p className="px-5 py-8 text-center text-paragraph font-normal text-text-secondary">
              Your cart is empty.
            </p>
          ) : (
            <ul className="max-h-80 overflow-y-auto">
              {cart.map(({ product, count }) => {
                const detailPath = getProductDetailPath(product, categories);
                const imageUrl = product.images?.[0]?.url ?? product.photo;
                const price = (Number(product.price) * count).toLocaleString(
                  "tr-TR",
                  { minimumFractionDigits: 2, maximumFractionDigits: 2 },
                );

                return (
                  <li
                    key={product.id}
                    className="border-b border-gray-light-2 last:border-b-0"
                  >
                    <Link
                      to={detailPath ?? "/cart"}
                      onClick={(event) => {
                        if (!detailPath) {
                          event.preventDefault();
                          return;
                        }
                        setIsOpen(false);
                      }}
                      className="group flex w-full cursor-pointer gap-4 px-5 py-4 text-left hover:bg-gray-light-1"
                    >
                      {imageUrl && (
                        <img
                          src={imageUrl}
                          alt={product.name}
                          className="h-24 w-20 shrink-0 rounded-md border border-gray-light-2 object-contain"
                        />
                      )}
                      <div className="min-w-0 font-normal">
                        <p className="line-clamp-2 text-paragraph font-semibold group-hover:text-primary">
                          {product.name}
                        </p>
                        <p className="mt-1 text-small text-text-secondary">
                          Quantity: {count}
                        </p>
                        <p className="mt-2 text-paragraph font-bold text-primary">
                          ₺{price}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
