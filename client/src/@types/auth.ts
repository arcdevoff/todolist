import type { AccessToken } from "./user";

export type RegisterFormValues = {
  email: string;
  username: string;
  password: string;
};

export type RegisterResponse = {
  accessToken: AccessToken;
};

export type LoginFormValues = {
  username: string;
  password: string;
};

export type LoginResponse = {
  accessToken: AccessToken;
};
