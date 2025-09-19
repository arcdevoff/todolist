export interface CurrentUser {
  id: number;
  username: string;
  email: string;
  createdAt: Date;
}

export type AccessToken = string | null;

export type CurrentUserState = {
  accessToken: AccessToken;
  data: CurrentUser | null;
  userDataRefresh: boolean;
};
