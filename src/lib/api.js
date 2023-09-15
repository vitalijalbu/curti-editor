import axios from "axios";
import { ADMIN } from "./middleware/user-guard";

const getLocalStorage = () =>
  typeof window !== "undefined" ? window?.localStorage : undefined;

const initialState = {
  jwt: getLocalStorage()?.getItem("jwt"),
  user: getLocalStorage()?.getItem("user"),
};

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
      "Content-Type": "application/json"  
    }
});


// Set session
export const setSession = ({ jwt, user }) => {
  if (jwt) {
    getLocalStorage()?.setItem("jwt", jwt);
  }
  if (user) {
    getLocalStorage()?.setItem("user", JSON.stringify(user));
  }
};

// Get session
  export const getSession = () => {
    if (initialState.user && initialState.jwt) {
      return {
        ...initialState,
        ...(initialState.user ? { user: JSON.parse(initialState.user) } : {}),
        userInitials() {
          return this.user
            ? `${this.user.first_name?.[0].toLocaleUpperCase() ?? "?"}${
                this.user.last_name?.[0].toLocaleUpperCase() ?? "?"
              }`
            : `?`;
        }
      };
    } else {
      return;
    }
  };

export const removeSession = () => {
  getLocalStorage()?.removeItem("jwt");
  getLocalStorage()?.removeItem("user");
};

export const renewUser = async (body) => {
  const response = await instance.get("/user");
  setUser(response.data);
};



instance.interceptors.request.use((config) => {
  const jwt = getLocalStorage()?.getItem("jwt");
  if (jwt) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${jwt}`,
    };
  }
  return config;
});

export default instance;
