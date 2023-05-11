import React, {
  useState,
  useContext,
  useEffect,
  useMemo,
  FC,
  ReactNode,
  SetStateAction,
} from "react";
import { getToken, getUser } from "../service/localStorage";
import { TokenType } from "../models/types/userType";

type ContextArgs = {
  user: null | TokenType;
  setUser: (value: SetStateAction<null | TokenType>) => void;
  token: string | null;
  setToken: (value: SetStateAction<string | null>) => void;
};

const UserContext = React.createContext<null | ContextArgs>(null);

type Props = {
  children: ReactNode;
};

export const UserProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<null | TokenType>(null);
  const [token, setToken] = useState(getToken);

  useEffect(() => {
    if (!user) {
      const userFromLocalStorage = getUser();
      setUser(userFromLocalStorage);
    }
  }, [user]);

  const value = useMemo(() => {
    return { user, setUser, token, setToken };
  }, [user, token]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
