import { h, defineComponent, ref, computed, watch, inject } from "vue";

export const RouterView = defineComponent({
  name: "RouterView",
  props: {
    name: {
      type: String,
      default: "default",
    },
  },
  setup(props) {
    const injectedRoute = inject("routerViewLocation");
    const routeToDisplay = computed(() => injectedRoute);
    const matchedRouteRef = computed(() =>
      routeToDisplay.value.find((item) => {
        console.log(item.name, props.name);
        item.name === props.name;
      })
    );
    console.log(matchedRouteRef);
    return () => {
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.component;

      const component = h([ViewComponent]);

      return component;
    };
  },
});
