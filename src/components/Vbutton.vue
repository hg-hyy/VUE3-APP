<template>
  <button
    type="button"
    class="btn btn-primary btn-sm"
    data-bs-toggle="modal"
    :data-bs-target="'#' + id"
    @click="emit('alter', netid)"
  >
    <svg class="bi me-2" width="16" height="16">
      <use xlink:href="#edit" />
    </svg>
    <slot></slot>
  </button>
</template>
<script setup>
import { defineProps, defineEmit } from "vue";
defineProps({
  id: String,
  netid: Number,
  row: Object,
});
const emit = defineEmit({
  alter: Number,
});
</script>