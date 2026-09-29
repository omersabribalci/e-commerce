import { Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../store/actions/shoppingCartActions";

const CartProduct = ({ cartProduct }) => {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

  const handleSelect = () => {
    const updatedCart = cart.map((item) =>
      item.product.id === cartProduct.product.id
        ? { ...item, checked: !item.checked }
        : item,
    );

    dispatch(setCart(updatedCart));
  };

  const handleCount = (action) => {
    if (cartProduct.count === 1 && action === "remove") return;
    if (action === "add" && cartProduct.count >= cartProduct.product.stock) return;

    const updatedCart = cart.map((item) =>
      item.product.id === cartProduct.product.id
        ? { ...item, count: action === "add" ? item.count + 1 : item.count - 1 }
        : item,
    );
    dispatch(setCart(updatedCart));
  };

  const handleDelete = () => {
    const updatedCart = cart.filter(
      (item) => item.product.id !== cartProduct.product.id,
    );
    dispatch(setCart(updatedCart));
  };
  return (
    <div className="flex flex-col gap-5 rounded-md border border-gray-light-2 bg-bg-light p-4 shadow-light sm:p-6 lg:flex-row lg:items-center">
      <div className="flex min-w-0 flex-1 flex-row items-center gap-4">
        <input
          onChange={handleSelect}
          type="checkbox"
          checked={cartProduct?.checked}
          aria-label={`${cartProduct.product.name} ürününü seç`}
          className="h-4 w-4 shrink-0 cursor-pointer accent-primary"
        />
        <img
          src={cartProduct?.product.images?.[0]?.url}
          alt={cartProduct.product.name}
          className="h-24 w-20 shrink-0 rounded-md border border-gray-light-2 object-contain"
        />
        <div className="min-w-0">
          <h2 className="text-h6 font-bold text-text">
            {cartProduct?.product.name}
          </h2>
          <p className="mt-1 line-clamp-2 text-small text-text-secondary">
            {cartProduct?.product.description}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 lg:justify-end">
        <div className="flex items-center rounded-md border border-gray-light-2">
          <button
            type="button"
            onClick={() => handleCount("remove")}
            disabled={cartProduct.count === 1}
            aria-label={`${cartProduct.product.name} adedini azalt`}
            className="h-9 w-9 cursor-pointer text-primary hover:bg-gray-light-1 disabled:cursor-not-allowed disabled:text-muted"
          >
            −
          </button>
          <span className="min-w-7 text-center text-h6 font-bold text-text">
            {cartProduct.count}
          </span>
          <button
            type="button"
            onClick={() => handleCount("add")}
            disabled={cartProduct.count >= cartProduct.product.stock}
            aria-label={`${cartProduct.product.name} adedini artır`}
            className="h-9 w-9 cursor-pointer text-primary hover:bg-gray-light-1 disabled:cursor-not-allowed disabled:text-muted"
          >
            +
          </button>
        </div>
        <strong className="whitespace-nowrap text-right text-h6 text-text">
          {(cartProduct.product.price * cartProduct.count).toLocaleString(
            "tr-TR",
            { minimumFractionDigits: 2, maximumFractionDigits: 2 },
          )} TL
        </strong>
        <button
          type="button"
          onClick={handleDelete}
          aria-label={`${cartProduct.product.name} ürününü sepetten sil`}
          className="rounded-md p-2 text-text-secondary cursor-pointer transition-colors hover:bg-gray-light-1 hover:text-danger"
        >
          <Trash size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
