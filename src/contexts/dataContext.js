import {
  usecontext,
  createContext,
  useEffect,
  useState,
  useReducer,
} from "react";

import { dataReduder } from "../reducer/dataReducer";
import { authReducer } from "../reducer/authReducer";
export const dataContext = createContext();

export const dataProvider = ({ children }) => {
  return (
    <>
      <dataContext.Provider value={{}}>{children}</dataContext.Provider>
    </>
  );
};
