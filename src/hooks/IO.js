import { useContext } from "react";
import { IOContext } from "contexts";
import IO from "io";

/**
 * @returns {IO}
 */
export const useIO = () => {
  return useContext(IOContext);
};
