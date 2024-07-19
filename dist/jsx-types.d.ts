import * as React from "react";
import * as Preact from "preact";
export type UniversalJSXElement = React.ReactElement | Preact.JSX.Element;
export declare const isValidElement: (element: any) => element is any;
export declare const createContext: any;
export declare const useContext: any;
