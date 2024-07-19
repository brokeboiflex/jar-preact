import { UniversalJSXElement } from "./jsx-types";
import { StateStorage } from "zustand/middleware";
export interface RouterProps {
    children: UniversalJSXElement;
    storage: StateStorage;
    emptyRoute?: UniversalJSXElement;
}
export interface RouteProps {
    path: string;
    component: UniversalJSXElement;
}
export interface RouterState {
    location: string;
    navigate: (route: string) => void;
}
export declare function createRouterStore(storage: StateStorage): () => RouterState;
export declare function Route(props: RouteProps): any;
export declare function Router({ children, storage, emptyRoute, }: RouterProps): UniversalJSXElement;
