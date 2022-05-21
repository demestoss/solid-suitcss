import { ArrayLikeOption } from "../types";

const createParseFunction = (prefix: string) => (data: ArrayLikeOption) => {
  if (!data || !data.length) {
    return "";
  }

  const dataArray = typeof data === "string" ? data.split(" ") : data;
  return dataArray.map((util) => `${prefix}${util}`).join(" ");
};

export const parseUtilities = createParseFunction("u-");

export const parseStates = createParseFunction("is-");

export const parseModifiers = (className: string) =>
  createParseFunction(`${className}--`);