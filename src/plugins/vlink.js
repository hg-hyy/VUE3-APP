import { defineComponent, h, reactive } from "vue";

export const RouterLink = defineComponent({
  name: "RouterLink",
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  setup(props, { slots }) {
    const link = reactive(props);
    return () => {
      return h(
        "a",
        {
          href: link.to,
        },
        slots.default()
      );
    };
  },
});
