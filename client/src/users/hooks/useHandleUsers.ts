import { useState, useCallback, useMemo } from "react";
import useAxios from "../../hooks/useAxios";
import { login, signup } from "../service/userApi";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../service/localStorage";
import { useUser } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "./../../routes/routesModel";
import { Login, RegistrationForm, TokenType } from "../models/types/userType";
import normalizeUser from "../helpers/normalization/normalizeUser";

const useHandleUsers = () => {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setLoading] = useState(false);

  useAxios();
  const navigate = useNavigate();
  const { user, setUser, setToken } = useUser();

  const requestStatus = useCallback(
    (
      loading: boolean,
      errorMessage: string | null,
      user: null | TokenType = null
    ) => {
      setLoading(loading);
      setError(errorMessage);
      setUser(user);
    },
    [setUser]
  );

  const handleLogin = useCallback(
    async (user: Login) => {
      try {
        setLoading(true);
        const token = await login(user);
        setTokenInLocalStorage(token);
        setToken(token);
        const userFromLocalStorage = getUser();
        requestStatus(false, null, userFromLocalStorage);
        navigate(ROUTES.CARDS);
      } catch (error) {
        if (typeof error === "string") requestStatus(false, error, null);
      }
    },
    [navigate, requestStatus, setToken]
  );

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
  }, [setUser]);

  const handleSignup = useCallback(
    async (user: RegistrationForm) => {
      try {
        setLoading(true);
        const normalizedUser = normalizeUser(user);
        await signup(normalizedUser);
        await handleLogin({
          email: user.email,
          password: user.password,
        });
      } catch (error) {
        if (typeof error === "string") requestStatus(false, error, null);
      }
    },
    [handleLogin, requestStatus]
  );

  const value = useMemo(() => {
    return { isLoading, error, user };
  }, [isLoading, error, user]);

  return {
    value,
    handleLogin,
    handleLogout,
    handleSignup,
  };
};

export default useHandleUsers;
