<template>
  <div class="container-fluid p-0 m-0">
    <router-view name="signin" />
    <router-view name="dashboard" />
    <router-view name="navbar" />

    <div class="row p-0 m-0">
      <router-view name="sidebar" head="系统运维工具" />

      <div class="col col-md-10 mt-3">
        <router-view name="content" />
      </div>
    </div>
  </div>
  <toast />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-house"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
    />
    <path
      fill-rule="evenodd"
      d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
    />
  </svg>
</template>

<script setup>
import { defineProps, reactive } from "vue";
import toast from "./components/toast.vue";
defineProps({
  title: String,
});

const aa = reactive({
  name: "fhh",
});
</script>

<style>
</style>
