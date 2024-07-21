import { JSX } from "preact/jsx-runtime";
import { StateStorage } from "zustand/middleware";
import { ComponentChildren } from "preact";
export interface RouterProps {
    children: ComponentChildren;
    routerStore: () => RouterState;
}
export interface RouteProps {
    path: string;
    component: JSX.Element;
}
export interface RouterState {
    location: string;
    navigate: (route: string) => void;
}
export interface LinkProps {
    to: string;
    children: ComponentChildren;
}
export declare function createLink(routerStore: () => RouterState): ({ to, children }: LinkProps) => JSX.Element;
export declare function createRouterStore(storage: StateStorage): () => RouterState;
export declare function Router({ children, routerStore }: RouterProps): any;
export declare function Route({ path, component }: RouteProps): null;
