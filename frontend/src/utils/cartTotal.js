export const getSelectedProductsTotal = (cart) =>
  cart.reduce(
    (total, item) =>
      item.checked ? total + item.product.price * item.count : total,
    0,
  );
