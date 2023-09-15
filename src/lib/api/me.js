import instance, { setSession, removeSession, getSession } from "../api";

//define storeage instance
 const Storage = () => {
  if (typeof window !== "undefined") {
    return window.sessionStorage;
  }
  return undefined;
};

/* Login API Action */
export const loginAction = (body) => {
  return instance
    .post("/api/auth/local", body)
    .then(async (response) => {
    
      setSession({ jwt: response.data.jwt});
      //
        // Get full user info
        const user = await getProfile();
      setSession({ user });
      return response;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

/* Reset Password API Action */
export const resetPasswordAction = (body) => {
  return instance.post("/api/auth/reset-password", body);
};

export const updatePasswordAction = (body) => {
  return instance.post("/api/auth/reset-password", body);
};

export const updateProfile = (id, body) => {
  return instance.put(`/api/users/${id}`, body);
};

/* Reset Password API Action */
export const getProfile = async () => {
  return instance
    .get("/api/users/me?populate=*")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      //dispatch({ type: USER_ERROR });
      return Promise.reject(err);
    });
};

/* Forgot Password API Action */
export const forgotPasswordAction = (body) => {
  return instance.post("/api/auth/forgot-password", body);
};

export const logoutAction = () => {
  removeSession();
  window.location.pathname = "/login";
};