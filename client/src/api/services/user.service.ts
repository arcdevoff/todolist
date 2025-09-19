import type { CurrentUser } from "@/@types/user";
import axios from "../axios";

export const UserService = {
  async findMe(): Promise<CurrentUser> {
    const { data } = await axios.get<CurrentUser>("/users/me:authorized");
    return data;
  },
};
