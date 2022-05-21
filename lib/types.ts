export type ArrayLikeOption = string | Array<string>;

export type GetClassNameOptions = {
  // props that maybe be needed in some cases
  namespace?: string;
  componentName?: string;

  descendantName?: string;
  modifiers?: ArrayLikeOption;
  states?: ArrayLikeOption;
  utilities?: ArrayLikeOption;
  className?: string;
}

export declare type GetClassNameFunc = (options?: GetClassNameOptions) => string;

export declare interface SuitCssProps {
  getClassName: GetClassNameFunc
}
