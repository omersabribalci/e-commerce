import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const CartDropdown = ({ icon }) => {
  const cart = useSelector((state) => state.shoppingCart.cart);
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
        aria-label={`Sepetim, ${itemCount} ürün`}
        aria-expanded={isOpen}
        aria-controls="cart-dropdown"
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
          id="cart-dropdown"
          className="absolute left-1/2 top-full z-50 mt-3 w-80 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-md border border-gray-light-2 bg-bg-light text-text shadow-accentued xl:right-0 xl:left-auto xl:translate-x-0 sm:w-96"
        >
          <h2 className="border-b border-gray-light-2 px-5 py-4 text-h6 font-bold">
            Sepetim ({itemCount} Ürün)
          </h2>

          {cart.length === 0 ? (
            <p className="px-5 py-8 text-center text-paragraph font-normal text-text-secondary">
              Sepetiniz boş.
            </p>
          ) : (
            <ul className="max-h-80 overflow-y-auto">
              {cart.map(({ product, count }) => {
                const imageUrl = product.images?.[0]?.url ?? product.photo;
                const price = (Number(product.price) * count).toLocaleString(
                  "tr-TR",
                  { minimumFractionDigits: 2, maximumFractionDigits: 2 },
                );

                return (
                  <li
                    key={product.id}
                    className="flex gap-4 border-b border-gray-light-2 px-5 py-4 last:border-b-0"
                  >
                    {imageUrl && (
                      <img
                        src={imageUrl}
                        alt={product.name}
                        className="h-24 w-20 shrink-0 rounded-md border border-gray-light-2 object-contain"
                      />
                    )}
                    <div className="min-w-0 font-normal">
                      <p className="line-clamp-2 text-paragraph font-semibold">
                        {product.name}
                      </p>
                      <p className="mt-1 text-small text-text-secondary">
                        Adet: {count}
                      </p>
                      <p className="mt-2 text-paragraph font-bold text-primary">
                        {price} TL
                      </p>
                    </div>
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
