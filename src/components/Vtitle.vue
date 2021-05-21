<template>
  <div class="text-decoration-none py-3 m-3">
    <span class="fs-5 fw-semibold">{{ head }}</span>
    <div class="divider mt-3"></div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  head: String,
});
</script>
<style scoped>
.divider {
  height: 0.2rem;
  width: 100%;
  background-color: rgba(116, 30, 214, 0.432);
  border: solid rgba(207, 14, 143, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}
</style>