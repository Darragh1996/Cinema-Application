import axios from "axios";

export const baseURL = process.env.REACT_APP_API_HOST || "//localhost:3232/api";

export const justAxios = () => {
  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return instance;
};
