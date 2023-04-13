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
  deleteUser: (name: string) => void;
  handleAddUser: (values: UserType) => void;
};

//domyslna wartosc naszego contextu
const initialState: UsersContextType = {
  users: [],
  setUsers: () => {},
  deleteUser: () => {},
  handleAddUser: () => {},
};

export const UsersContext = createContext<UsersContextType>(initialState);

export const UsersContextProvider = ({ children }: ChildrenType) => {
  const [users, setUsers] = useState(usersData);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const deleteUser = (name: string) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (values: UserType) => {
    const newUser = {
      name: values.name,
      attendance: values.attendance,
      average: values.average,
    };
    setUsers([newUser, ...users]);
    console.log("newUser added:", newUser);
  };

  return (
    <UsersContext.Provider
      value={{ users, setUsers, deleteUser, handleAddUser }}
    >
      {children}
    </UsersContext.Provider>
  );
};
