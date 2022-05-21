import type { Component as ComponentType } from "solid-js";
import createClassName from "./createClassName";
import getComponentName from "./utils/getComponentName";
import { SuitCssProps } from "./types";

function withSuitCss<T extends SuitCssProps = SuitCssProps>(Component: ComponentType<T>, namespace?: string) {
  const componentName = getComponentName(Component);

  return (props?: Omit<T, keyof SuitCssProps>) => {
    const getClassName = () => createClassName(componentName, namespace);
    return <Component {...(props as T)} getClassName={getClassName()} />;
  };
}

export default withSuitCss;
