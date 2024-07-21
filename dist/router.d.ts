import { JSX } from "preact/jsx-runtime";
import { StateStorage } from "zustand/middleware";
export interface RouterProps {
    children: JSX.Element | JSX.Element[];
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
export declare function createRouterStore(storage: StateStorage): () => RouterState;
export declare function Router({ children, routerStore }: RouterProps): any;
export declare function Route({ path, component }: RouteProps): null;
