<template>
  <li class="mb-1">
    <button
      class="btn btn-toggle align-items-center rounded collapsed"
      data-bs-toggle="collapse"
      :data-bs-target="'#' + id"
      aria-expanded="false"
    >
      {{ title }}
    </button>
    <div class="collapse" :id="id">
      <ul class="btn-toggle-nav list-unstyled fw-normal pb-2 small">
        <li
          :linkname="linkname"
          v-for="(value, key) in linkname"
          :key="key"
          class="align-center mt-2"
        >
          <router-link :to="'/v1/' + key" class="link-dark rounded my-0 ml-3">
            <svg class="bi me-2" width="24" height="24">
              <use :xlink:href="'#' + icon" />
            </svg>
            <span class="fs-6">{{ value }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </li>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  id: String,
  icon: String,
  title: String,
  linkname: Object,
});
</script>
<style>
</style>