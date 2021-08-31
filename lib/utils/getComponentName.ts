import type { Component } from "solid-js";

const getComponentName = (Component: Component) =>
  Component.name || 'Component';

export default getComponentName;