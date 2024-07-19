import { UniversalJSXElement, isValidElement } from "./jsx-types";
import { create } from "zustand";
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";
import {
  RouterContext,
  useRouterStore as useRouterStoreContext,
} from "./router-context";

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

// Factory function to create the store
export function createRouterStore(storage: StateStorage): () => RouterState {
  // @ts-ignore
  return create(
    persist(
      (set) => ({
        location: "/", // Default route
        navigate: (route: string) => set({ location: route }),
      }),
      {
        name: "router-storage", // Name of the item in chrome.storage.local
        storage: createJSONStorage(() => storage),
      }
    )
  );
}

export function Route(props: RouteProps) {
  return null;
}

export function Router({
  children,
  storage,
  emptyRoute = null,
}: RouterProps): UniversalJSXElement {
  const useRouterStore = createRouterStore(storage);
  const { location } = useRouterStore();

  // Filter children to get Route components
  const routes = Array.isArray(children) ? children : [children];
  const routeElements = routes.filter(
    (child) => isValidElement(child) && (child as any).type === Route
  );

  // Find the component that matches the current route
  const currentRoute = routeElements.find((route) => {
    const routeProps = (route as any).props as RouteProps;
    return routeProps.path === location;
  });

  // Render the matching component or a default message
  if (currentRoute) {
    const routeProps = (currentRoute as any).props as RouteProps;
    return (
      // @ts-ignore
      <RouterContext.Provider value={useRouterStoreContext}>
        {routeProps.component}
      </RouterContext.Provider>
    );
  } else {
    return emptyRoute;
  }
}
