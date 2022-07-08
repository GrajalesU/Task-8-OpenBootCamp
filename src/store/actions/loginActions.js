export const API_CALL_REQUEST = "API_CALL_REQUEST";
export const API_CALL_SUCCESS = "API_CALL_SUCCESS";
export const API_CALL_FAILURE = "API_CALL_FAILURE";

export const login = (email, password) => {
  return {
    type: API_CALL_REQUEST,
    payload: {
      request: {
        method: "post",
        url: "https://reqres.in/api/login",
        data: {
          email,
          password,
        },
      },
      okAction: API_CALL_SUCCESS,
      failAction: API_CALL_FAILURE,
    },
  };
};

export const logout = () => {
  return {
    type: API_CALL_FAILURE,
    payload: {
      error: "Logout",
    },
  };
};
