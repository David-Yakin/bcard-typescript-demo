import JwtDecode from "jwt-decode";
import { TokenType } from "../models/types/userType";

const TOKEN = "token";

export const setTokenInLocalStorage = (encryptedToken: string) => {
  return localStorage.setItem(TOKEN, encryptedToken);
};

export const getUser = () => {
  const token = localStorage.getItem(TOKEN);
  if (!token) return null;
  const user: TokenType = JwtDecode(token);
  return user;
};

export const removeToken = () => localStorage.removeItem(TOKEN);

export const getToken = () => localStorage.getItem(TOKEN);
