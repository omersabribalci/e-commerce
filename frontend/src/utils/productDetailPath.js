import { slugify } from "./slugify";

export const getProductDetailPath = (product, categories) => {
  const category = categories.find((item) => item.id === product.category_id);
  if (!category?.code || !product.name) return null;

  const gender = category.code.startsWith("k") ? "kadin" : "erkek";
  const categoryName = category.code.split(":")[1];

  return `/shop/${gender}/${categoryName}/${product.category_id}/${slugify(product.name)}/${product.id}`;
};
