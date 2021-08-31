import { ArrayedOption, GetClassNameOptions } from "../types";

const getBaseComponentName = (
  options: GetClassNameOptions,
  namespace: string,
  componentName: string
) => {
  const _namespace = typeof options.namespace === 'string' ? options.namespace : namespace;
  const _componentName = options.componentName || componentName;

  return _namespace ? `${_namespace}-${_componentName}` : _componentName;
};

const applyDescendantName = (
  descendantName: string = "",
  baseComponentName
) =>
  descendantName ? `${baseComponentName}-${descendantName}` : baseComponentName;

export const getConfiguredClassName = (
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

const getClassTypeFactory = (prefix: string) => (data: ArrayedOption) => {
  if (!data || !data.length) {
    return "";
  }

  const dataArray = typeof data === "string" ? data.split(" ") : data;
  return dataArray.map((util) => `${prefix}${util}`).join(" ");
};

export const getUtilities = getClassTypeFactory("u-");
export const getStates = getClassTypeFactory("is-");
export const getModifiers = (className: string, modifiers: ArrayedOption) =>
  getClassTypeFactory(`${className}--`)(modifiers);
