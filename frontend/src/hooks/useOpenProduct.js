import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getProductDetailPath } from "../utils/productDetailPath";

const useOpenProduct = () => {
  const history = useHistory();
  const categories = useSelector((state) => state.product.categories);

  return (product) => {
    const path = getProductDetailPath(product, categories);
    if (path) history.push(path);
  };
};

export default useOpenProduct;
