import { SuitCssContext } from "./SuitCssContext";
import type { Component } from "solid-js";

const SuitCssProvider: Component<{ namespace: string }> = (props) => {
  return (
    <SuitCssContext.Provider
      value={{ namespace: props.namespace }}
      children={props.children}
    />
  );
};

export default SuitCssProvider;
