import { createContext, useState, useReducer, ReactNode } from "react";
import { users as usersData } from "../data/users";

//typ usera
export type UserType = {
  name: string;
  attendance?: string;
  average: string;
};
//typ listy userow
export type UsersType = UserType[];

//typy dzieci
export type ChildrenType = {
  children: ReactNode;
};

//typy dla poczatkowego contextu
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

//wartosc poczatkowa dla danych w formie w inpucie
const initialValueInputs: UserType = {
  name: "",
  attendance: "",
  average: "",
};
// actions dla reducera
const REDUCER_ACTION_TYPE = {
  ADD: "ADD USER",
  REMOVE: "REMOVE USER",
};
// It returns the type of the REDUCER_ACTION_TYPE
export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

type InputValueAction = { type: "field"; fieldName: string; payload: string };
//action type
export type ReducerAction = {
  type: string;
  payload?: UserType | InputValueAction;
};
// export const reducer = (state: UserType, action: ReducerAction) => {
//   console.log("state:", state, "action:", action);
//   const { type } = action;
//   console.log(type, "type");
//   switch (action.type) {
//     case REDUCER_ACTION_TYPE.ADD: {
//       return state;
//     }
//     case REDUCER_ACTION_TYPE.REMOVE: {
//       return state;
//     }
//     case REDUCER_ACTION_TYPE.INPUTCHANGE: {
//       return { ...state, [action.payload?.field]: action.payload?.value };
//     }
//     default:
//       return state;
//   }
// };

export const UsersContext = createContext<UsersContextType>(initialState);

export const UsersContextProvider = ({ children }: ChildrenType) => {
  const [users, setUsers] = useState(usersData);
  // const [isInputValue, dispatch] = useReducer(reducer, initialValueInputs);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [value, dispatch] = useReducer(reducer, initialState);
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
