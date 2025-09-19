import axios from "../axios";
import { setAccessToken, setUserData } from "@/redux/reducers/user/slice";
import { store } from "@/redux/store";
import type {
  LoginFormValues,
  LoginResponse,
  RegisterFormValues,
  RegisterResponse,
} from "@/@types/auth";
import type { AxiosResponse } from "axios";

export const AuthService = {
  async login(values: LoginFormValues): Promise<AxiosResponse<LoginResponse>> {
    const res = await axios.post("/auth/login", { ...values });
    return res;
  },

  async signup(
    values: RegisterFormValues
  ): Promise<AxiosResponse<RegisterResponse>> {
    const res = await axios.post<RegisterResponse>("/auth/register", values);
    return res;
  },

  async refreshToken() {
    const res = await axios.get("/auth/refresh");
    return res;
  },

  async logout() {
    const res = await axios.post("/auth/logout");
    store.dispatch(setAccessToken(null));
    store.dispatch(setUserData(null));
    return res;
  },
};
