import type { Component as ComponentType } from "solid-js";
import createClassName from "./createClassName";
import SuitCssProvider from "./SuitCssProvider";
import getComponentName from "./utils/getComponentName";

const SuitCssConnect = (Component: ComponentType) => {
  const componentName = getComponentName(Component);

  return (props) => {
    const getClassName = () => createClassName(componentName);
    return <Component {...props} getClassName={getClassName()} />;
  };
};

export default SuitCssConnect;
