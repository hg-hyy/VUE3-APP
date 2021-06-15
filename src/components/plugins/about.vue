<template>
  <div>{{ userGeolocation }}</div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const userGeolocation = inject("routes");
    return {
      userGeolocation,
    };
  },
};
</script>
