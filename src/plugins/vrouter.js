import { RouterView } from "./vview";
import { RouterLink } from "./vlink";
export default {
  // attach listener to history to trigger navigations

  install: (app, options) => {
    app.provide("routerViewLocation", options);
    app.component("router-link", RouterLink);
    app.component("router-view", RouterView);
  },
};
