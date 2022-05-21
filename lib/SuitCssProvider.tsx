import { SuitCssContext } from "./SuitCssContext";
import type { ParentComponent } from "solid-js";

const SuitCssProvider: ParentComponent<{ namespace?: string }> = (props) => {
  return (
    <SuitCssContext.Provider
      value={{ namespace: props.namespace || '' }}
      children={props.children}
    />
  );
};

export default SuitCssProvider;
