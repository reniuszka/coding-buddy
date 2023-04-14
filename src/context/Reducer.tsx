//poszczegolny user
export type UserType = {
  name: string;
  attendance?: string;
  average: string;
};

//lista userow typ dla stanu
export type UsersType = UserType[];

// actions dla reducera
const REDUCER_ACTION_TYPE = {
  ADD: "ADD USER",
  REMOVE: "REMOVE USER",
  INPUTCHANGE: "INPUT CHANGE",
};
// It returns the type of the REDUCER_ACTION_TYPE
export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

//action type
export type ReducerAction = {
  type: string;
  payload?: UserType;
};
export const reducer = (state: UsersType, action: ReducerAction) => {
  console.log("state:", state, "action:", action);
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      return state;
    }
    case REDUCER_ACTION_TYPE.REMOVE: {
      return state;
    }
    // case REDUCER_ACTION_TYPE.INPUTCHANGE: {
    //   return { ...state, [action.field]: action.value };
    // }
    default:
      return state;
  }
};
//reducer zmienia stan (musi go zwrocic)i jest wywolywany przez metode dispatch przekazuja action.type a state jest automatycznie przekazywany przez useReducer
