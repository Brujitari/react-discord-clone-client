import { createContext, useContext } from "react";

const Context = createContext(null);

export const useGetter = () => useContext(Context);

export default Context;
