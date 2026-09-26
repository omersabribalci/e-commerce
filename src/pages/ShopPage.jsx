import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BrandSection from "../components/Shop/BrandSection";
import Categories from "../components/Shop/Categories";
import PageHeader from "../components/Shop/PageHeader";
import Products from "../components/Shop/Products";
import ShopToolbar from "../components/Shop/ShopToolbar";
import PageContent from "../layouts/PageContent";
import { getProducts, setOffset } from "../store/actions/productActions";

const ShopPage = () => {
  const { filter, limit, offset } = useSelector((state) => state.product);
  const { categoryId } = useParams();
  const [sort, setSort] = useState("");
  const dispatch = useDispatch();
  const previousCriteria = useRef(null);

  useEffect(() => {
    const criteria = JSON.stringify([categoryId, sort, filter]);
    const criteriaChanged = previousCriteria.current !== criteria;

    previousCriteria.current = criteria;

    if (criteriaChanged && offset !== 0) {
      dispatch(setOffset(0));
      return;
    }

    dispatch(getProducts(categoryId, sort, filter, limit, offset));
  }, [dispatch, categoryId, sort, filter, limit, offset]);

  return (
    <PageContent>
      <PageHeader />
      <Categories />
      <ShopToolbar sort={sort} setSort={setSort} />
      <Products />
      <BrandSection />
    </PageContent>
  );
};

export default ShopPage;
