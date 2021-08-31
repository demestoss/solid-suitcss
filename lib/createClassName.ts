import { useSuitCss } from "./SuitCssContext";
import { GetClassNameOptions } from "./types";
import {
  getConfiguredClassName,
  getModifiers,
  getStates,
  getUtilities,
} from "./utils/utils";

const createClassName = (componentName: string, componentNamespace: string | null = null) => {
  const { namespace } = useSuitCss();

  const configuredNamespace =
    typeof componentNamespace === "string" ? componentNamespace : namespace;

  return (options: GetClassNameOptions = {}) => {
    const configuredClassName = getConfiguredClassName(
      options,
      configuredNamespace,
      componentName
    );

    return [
      configuredClassName,
      getModifiers(configuredClassName, options.modifiers),
      getStates(options.states),
      getUtilities(options.utilities),
      options.className,
    ]
      .filter((el) => !!el)
      .join(" ");
  };
};

export default createClassName;
