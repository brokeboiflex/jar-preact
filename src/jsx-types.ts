// jsx-types.d.ts
import * as React from "react";
import * as Preact from "preact";
import * as PreactHooks from "preact/hooks";
// Define a universal JSX type
export type UniversalJSXElement = React.ReactElement | Preact.JSX.Element;

// Use this to handle JSX elements for both React and Preact
export const isValidElement = (element: any): element is UniversalJSXElement =>
  React.isValidElement(element) || Preact.isValidElement(element);

// Dynamically choose between React and Preact
const hooks =
  typeof PreactHooks.useContext === "function" ? PreactHooks : React;

export const createContext =
  typeof Preact.createContext === "function"
    ? Preact.createContext
    : React.createContext;

export const { useContext } = hooks;
