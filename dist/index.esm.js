import{jsx as r}from"preact/jsx-runtime";import{persist as n,createJSONStorage as t}from"zustand/middleware";import{create as o}from"zustand";import{isValidElement as i}from"preact";function e(n){return function(t){var o=t.to,i=t.children,e=n().navigate;return r("a",{href:"",onClick:function(r){r.preventDefault(),e(o)},children:i})}}function u(r,i){return o(n(function(r){return{history:["/"],location:"/",navigate:function(n){return r(function(r){return{history:[].concat(r.history,[n]),location:n}})},goBack:function(){return r(function(r){return{location:r.history[r.history.length-1],history:[].concat(r.history).slice(0,-1)}})}}},{name:"router-storage"+(i?"-"+i:""),storage:t(function(){return r})}))}function c(r){var n=r.children,t=(0,r.routerStore)().location;console.log(t);var o=(Array.isArray(n)?n:[n]).filter(function(r){return i(r)&&r.type===a}).find(function(r){return r.props.path===t});return o?o.props.component:null}function a(r){return null}export{a as Route,c as Router,e as createLink,u as createRouterStore};
//# sourceMappingURL=index.esm.js.map
