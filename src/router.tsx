import { JSX } from "preact/jsx-runtime";
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";
import { create } from "zustand";
import { ComponentChildren, isValidElement } from "preact";
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

export function createLink(routerStore: () => RouterState) {
  return function Link({ to, children }: LinkProps) {
    const { navigate } = routerStore();
    return (
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          navigate(to);
        }}
      >
        {children}
      </a>
    );
  };
}
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
export function Router({ children, routerStore }: RouterProps) {
  const { location } = routerStore();
  console.log(location);

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

  return currentRoute ? (currentRoute as any).props.component : null;
}

// Route component
// @ts-ignore
export function Route({ path, component }: RouteProps) {
  return null;
}
