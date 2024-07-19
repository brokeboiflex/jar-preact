import { createContext, useContext } from "./jsx-types";
import { StoreApi } from "zustand";
import { RouterState } from "./router";

// Define the RouterContext with the appropriate type
export const RouterContext = createContext(null);

export const useRouterStore = (): StoreApi<RouterState> => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouterStore must be used within a RouterProvider");
  }
  // @ts-ignore
  return context;
};
