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
      <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
        <li :linkname="linkname" v-for="(value, key) in linkname" :key="key">
          <router-link :to="'/v1/' + key" class="link-dark rounded">
            {{ value }}
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
  title: String,
  linkname: Object,
});
</script>
<style>
</style>