import api from "../../services/axiosInstance";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";

export const setCategories = (categories) => {
  return {
    type: SET_CATEGORIES,
    payload: categories,
  };
};

export const setProductList = (productList) => {
  return {
    type: SET_PRODUCT_LIST,
    payload: productList,
  };
};

export const setTotal = (total) => {
  return {
    type: SET_TOTAL,
    payload: total,
  };
};

export const setFetchState = (fetchState) => {
  return {
    type: SET_FETCH_STATE,
    payload: fetchState,
  };
};

export const setLimit = (limit) => {
  return {
    type: SET_LIMIT,
    payload: limit,
  };
};

export const setOffset = (offset) => {
  return {
    type: SET_OFFSET,
    payload: offset,
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};

export const getCategories = () => {
  return async (dispatch) => {
    try {
      const response = await api.get("/categories");
      dispatch(setCategories(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const getProducts = (
  categoryId = "",
  sort = "",
  filter = "",
  limit,
  offset,
) => {
  return async (dispatch) => {
    try {
      dispatch(setFetchState("FETCHING"));

      const params = {};

      if (categoryId) {
        params.category = categoryId;
      }

      if (sort) {
        params.sort = sort;
      }

      if (filter) {
        params.filter = filter;
      }

      if (limit) {
        params.limit = limit;
      }

      if (offset) {
        params.offset = offset;
      }

      const response = await api.get("/products", { params });

      dispatch(setProductList(response.data.products));
      dispatch(setTotal(response.data.total));
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      dispatch(setFetchState("FAILED"));
      console.error(error);
    }
  };
};
