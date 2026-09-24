import api from "../../services/axiosInstance";

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
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
  return async (dispatch, getState) => {
    const roles = getState().client.roles;

    if (roles.length > 0) {
      return;
    }

    const response = await api.get("/roles");

    dispatch(setRoles(response.data));
  };
};

export const login = (formData) => {
  return async (dispatch) => {
    const { rememberMe, ...rest } = formData;
    const response = await api.post("/login", rest);

    dispatch(setUser(response.data));

    if (rememberMe) {
      localStorage.setItem("token", response.data.token);
    } else {
      localStorage.removeItem("token");
    }
  };
};
