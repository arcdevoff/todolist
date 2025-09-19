import {
  setAccessToken,
  setUserData,
  setUserDataRefresh,
} from "@/redux/reducers/user/slice";
import { useNavigate } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { AuthService } from "@/api/services/auth.service";
import { UserService } from "@/api/services/user.service";

const useUser = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { data, userDataRefresh } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const getProfile = useCallback(() => {
    setIsLoading(true);

    UserService.findMe()
      .then((data) => {
        dispatch(setUserData(data));
        dispatch(setUserDataRefresh(false));
      })
      .catch(() => {
        dispatch(setAccessToken(""));
        dispatch(setUserData(null));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  const logout = useCallback(async () => {
    const res = await AuthService.logout();

    if (res.status === 200) {
      dispatch(setAccessToken(""));
      dispatch(setUserData(null));
      navigate("/auth/login");
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  useEffect(() => {
    if (userDataRefresh) {
      getProfile();
    }
  }, [userDataRefresh, getProfile]);

  return { user: data, isLoading, logout };
};

export default useUser;
