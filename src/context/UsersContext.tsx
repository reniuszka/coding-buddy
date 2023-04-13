import { createContext, useState, useEffect, ReactNode } from "react";
import { users as usersData } from "../data/users";

export type UserType = {
  name: string;
  attendance?: string;
  average: string;
};

export type UsersType = UserType[];

export type ChildrenType = {
  children: ReactNode;
};

export type UsersContextType = {
  users: UsersType;
  setUsers: React.Dispatch<React.SetStateAction<UsersType>>;
};
const initialState: UsersContextType = {
  users: usersData,
  setUsers: ({}) => {},
};

export const UsersContext = createContext<UsersContextType>(initialState);

export const UsersContextProvider = ({ children }: ChildrenType) => {
  const [users, setUsers] = useState(usersData);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
