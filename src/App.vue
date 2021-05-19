<template>
  <div class="container-fluid p-0 m-0" id="main">
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
import toast from "./components/toast.vue";
</script>
<style>
#main {
  height: 100vh;
  height: -webkit-fill-available;
  max-height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
}
</style>

