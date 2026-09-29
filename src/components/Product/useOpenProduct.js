import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { slugify } from "../../utils/slugify";

const useOpenProduct = () => {
  const history = useHistory();
  const categories = useSelector((state) => state.product.categories);

  return (product) => {
    const category = categories.find((item) => item.id === product.category_id);
    if (!category?.code || !product.name) return;

    const gender = category.code.startsWith("k") ? "kadin" : "erkek";
    const categoryName = category.code.split(":")[1];

    history.push(
      `/shop/${gender}/${categoryName}/${product.category_id}/${slugify(product.name)}/${product.id}`,
    );
  };
};

export default useOpenProduct;
