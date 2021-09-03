export type ArrayedOption = string | Array<string>;

export type GetClassNameOptions = {
  // props that are declared but still maybe needed
  namespace?: string;
  componentName?: string;

  descendantName?: string;
  modifiers?: ArrayedOption;
  states?: ArrayedOption;
  utilities?: ArrayedOption;
  className?: string;
}

export declare type GetClassNameFunc = (options?: GetClassNameOptions) => string;

export declare type SuitCssProps = { getClassName: GetClassNameFunc };
