import api from "../../services/axiosInstance";

export const SET_USER = "SET_USER";
export const SET_ADDRESS_LIST = "SET_ADDRESS_LIST";
export const SET_CREDIT_CARDS = "SET_CREDIT_CARDS";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const setAddressList = (addressList) => {
  return {
    type: SET_ADDRESS_LIST,
    payload: addressList,
  };
};

export const setCreditCards = (creditCards) => {
  return {
    type: SET_CREDIT_CARDS,
    payload: creditCards,
  };
};

export const setRoles = (roles) => {
  return {
    type: SET_ROLES,
    payload: roles,
  };
};

export const setTheme = (theme) => {
  return {
    type: SET_THEME,
    payload: theme,
  };
};

export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
};

export const getRoles = () => {
  return async (dispatch) => {
    const response = await api.get("/roles");

    dispatch(setRoles(response.data));
  };
};

export const login = (formData) => {
  return async (dispatch) => {
    const { rememberMe, ...rest } = formData;
    const response = await api.post("/login", rest);

    dispatch(setUser(response.data));

    api.defaults.headers.common.Authorization = response.data.token;

    if (rememberMe) {
      localStorage.setItem("token", response.data.token);
    } else {
      localStorage.removeItem("token");
    }
  };
};

export const verifyToken = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) return;

    api.defaults.headers.common.Authorization = token;

    try {
      const response = await api.get("/verify");
      dispatch(setUser(response.data));
      localStorage.setItem("token", response.data.token);
      api.defaults.headers.common.Authorization = response.data.token;
    } catch (error) {
      localStorage.removeItem("token");
      delete api.defaults.headers.common.Authorization;
      console.error(error);
    }
  };
};

export const getAddressList = () => {
  return async (dispatch) => {
    const response = await api.get("/user/address");
    dispatch(setAddressList(response.data));
  };
};

export const addNewAddress = (formData) => {
  return async (dispatch) => {
    await api.post("/user/address", formData);
    await dispatch(getAddressList());
  };
};

export const updateAddress = (formData) => {
  return async (dispatch) => {
    await api.put("/user/address", formData);
    await dispatch(getAddressList());
  };
};

export const deleteAddress = (id) => {
  return async (dispatch) => {
    await api.delete(`/user/address/${id}`);
    await dispatch(getAddressList());
  };
};

export const getCreditCards = () => {
  return async (dispatch) => {
    const response = await api.get("/user/card");
    // Redux logger should only see the last four digits, not the full card number.
    const cards = response.data.map(({ card_no, ...card }) => ({
      ...card,
      lastFour: String(card_no ?? "").slice(-4),
    }));
    dispatch(setCreditCards(cards));
  };
};

export const addNewCard = (cardData) => {
  return async (dispatch) => {
    await api.post("/user/card", cardData);
    await dispatch(getCreditCards());
  };
};

export const updateCard = (cardData) => {
  return async (dispatch) => {
    await api.put("/user/card", cardData);
    await dispatch(getCreditCards());
  };
};

export const deleteCard = (id) => {
  return async (dispatch) => {
    await api.delete(`/user/card/${id}`);
    await dispatch(getCreditCards());
  };
};
