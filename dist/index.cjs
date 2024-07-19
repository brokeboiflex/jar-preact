var e=require("react"),t=require("preact"),r=require("preact/hooks"),n=require("zustand"),o=require("zustand/middleware");function u(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,t}var i=/*#__PURE__*/u(e),a=/*#__PURE__*/u(t),c=/*#__PURE__*/u(r),s=("function"==typeof c.useContext?c:i).useContext,f=("function"==typeof a.createContext?a.createContext:i.createContext)(null),l=function(){var e=s(f);if(!e)throw new Error("useRouterStore must be used within a RouterProvider");return e};function p(e){return n.create(o.persist(function(e){return{location:"/",navigate:function(t){return e({location:t})}}},{name:"router-storage",storage:o.createJSONStorage(function(){return e})}))}function d(e){return null}exports.Route=d,exports.Router=function(e){var t=e.children,r=e.emptyRoute,n=void 0===r?null:r,o=p(e.storage)().location,u=(Array.isArray(t)?t:[t]).filter(function(e){return(i.isValidElement(t=e)||a.isValidElement(t))&&e.type===d;var t}).find(function(e){return e.props.path===o});return u?h(f.Provider,{value:l},u.props.component):n},exports.RouterContext=f,exports.createRouterStore=p,exports.useRouterStore=l;
//# sourceMappingURL=index.cjs.map