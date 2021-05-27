<template>
  <li class="mb-1">
    <button
      class="btn btn-toggle"
      data-bs-toggle="collapse"
      :data-bs-target="'#' + id"
      aria-expanded="false"
      :style="{ 'background-color': bg }"
      @click="btn($event)"
    >
      {{ title }}
    </button>
    <div class="collapse" :id="id">
      <ul class="btn-toggle-nav list-unstyled fw-normal small">
        <li v-for="(value, key) in linkdata" :key="key" class="my-2">
          <router-link :to="'/v1/' + key" class="link-dark">
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
import { defineProps, toRefs, ref } from "vue";
const props = defineProps({
  id: String,
  icon: String,
  title: String,
  linkdata: Object,
});
const bg = ref("");
const { title } = { ...toRefs(props) };
function btn(e) {
  if (e.target.innerText === title.value) {
    bg.value = "#0dcaf0";
  } else {
    bg.value = "";
  }
}
</script>
<style scoped>
.router-link-active {
  color: rgba(0, 0, 0, 0.85);
  background-color: #5f9e8b;
  border-radius: 1em;
}
.my-2 {
  border-radius: 1em;
}
</style>