import { GetClassNameOptions } from "../types";

const getBaseComponentName = (
  options: GetClassNameOptions,
  namespace: string,
  componentName: string
) => {
  return [options.namespace || namespace, options.componentName || componentName].filter(Boolean).join('-')
};

const applyDescendantName = (
  descendantName: string,
  baseComponentName: string
) =>
  [baseComponentName, descendantName].filter(Boolean).join('-')

const getConfiguredClassName = (
  options: GetClassNameOptions,
  namespace: string,
  componentName: string
) => {
  const baseComponentName = getBaseComponentName(
    options,
    namespace,
    componentName
  );

  return applyDescendantName(options.descendantName, baseComponentName);
};

export default getConfiguredClassName