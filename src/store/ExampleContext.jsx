import { createContext, useReducer } from "react";
import ExampleReducer from "./ExampleReducer";

export const ExampleContext = createContext();

export const ExampleProvider = ({ children }) => {

  const [exampleItems, dispatch] = useReducer(ExampleReducer, []);

  const addExampleItem = (id, exampleText) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id,
        exampleText
      }
    });
  };

  return (
    <ExampleContext.Provider value={{ exampleItems, addExampleItem }}>
      {children}
    </ExampleContext.Provider>
  );
};
