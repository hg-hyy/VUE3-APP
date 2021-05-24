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
          v-for="(value, key) in linkdata"
          :key="key"
          class="align-center my-2"
        >
          <router-link :to="'/v1/' + key" class="link-dark ms-4">
            <svg class="bi me-2" width="24" height="24">
              <use :xlink:href="'#' + value.icon" />
            </svg>
            <span class="fs-6">{{ value.name }}</span>
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
  linkdata: Object,
});
</script>
<style>
.router-link-active {
  color: rgba(0, 0, 0, 0.85);
  background-color: #5f9e8b;
}
</style>