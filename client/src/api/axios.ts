import axios from "axios";
import { store } from "@/redux/store";
import { AuthService } from "./services/auth.service";
import getAccessToken from "./utils/getAccessToken";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

instance.interceptors.request.use(async (config) => {
  let url = config.url;

  if (url && url.includes(":authorized")) {
    url = url.replace(":authorized", "");
    const accessToken = await getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }

  config.url = url;
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const accessToken = !!store.getState().user.accessToken;

    console.log(error.config.url);

    if (
      error.response?.status === 401 &&
      error.config.url !== "/auth/logout" &&
      accessToken
    ) {
      AuthService.logout();
      window.location.href = "/";
    }
    throw error;
  }
);

export default instance;
