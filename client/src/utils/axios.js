import axios from "axios";

export const baseURL = process.env.REACT_APP_API_HOST || "//localhost:3232/api";

const justAxios = () => {
  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return instance;
};

const axiosWithAuth = () => {
  const token = localStorage.getItem("reel_dreams_jwt");

  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });

  return instance;
};

export { justAxios, axiosWithAuth };
