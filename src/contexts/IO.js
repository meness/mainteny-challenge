import IO from "io";
import { createContext } from "react";

export const IOContext = createContext(null);

export const IOProvider = ({ children }) => {
  return <IOContext.Provider value={new IO()}>{children}</IOContext.Provider>;
};
