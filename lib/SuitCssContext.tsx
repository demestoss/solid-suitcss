import { createContext, useContext } from "solid-js";

export const SuitCssContext = createContext({
  namespace: "",
});

export const useSuitCss = () => useContext(SuitCssContext);
