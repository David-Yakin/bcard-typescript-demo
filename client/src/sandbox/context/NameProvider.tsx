import React, {
  useState,
  useEffect,
  useContext,
  ReactNode,
  SetStateAction,
  useMemo,
} from "react";

type ContextArgs = {
  name: string;
  setName: (value: SetStateAction<string>) => void;
};

const NameContext = React.createContext<null | ContextArgs>(null);

type Props = {
  children: ReactNode;
};

export const NameProvider: React.FC<Props> = ({ children }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName("david");
  }, []);

  const value = useMemo(() => {
    return { name, setName };
  }, [name, setName]);

  return <NameContext.Provider value={value}>{children}</NameContext.Provider>;
};

export const useName = () => {
  const context = useContext(NameContext);
  if (!context) throw new Error("useName must be used within a NameProvider");
  return context;
};

export default NameProvider;
