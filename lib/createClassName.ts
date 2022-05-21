import { useSuitCss } from "./SuitCssContext";
import { GetClassNameOptions } from "./types";
import getConfiguredClassName from "./utils/getConfiguredClassName";
import { parseModifiers, parseStates, parseUtilities } from "./utils/parseOptions";


const createClassName = (componentName: string, componentNamespace?: string) => {
  const { namespace } = useSuitCss();

  const configuredNamespace = componentNamespace || namespace;

  return (options: GetClassNameOptions = {}) => {
    const configuredClassName = getConfiguredClassName(
      options,
      configuredNamespace,
      componentName
    );

    return [
      configuredClassName,
      parseModifiers(configuredClassName)(options.modifiers),
      parseStates(options.states),
      parseUtilities(options.utilities),
      options.className,
    ]
      .filter(Boolean)
      .join(" ");
  };
};

export default createClassName;
