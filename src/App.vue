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
