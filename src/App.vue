<template>
  <div class="container-fluid p-0 m-0">
    <router-view name="signin" />
    <router-view name="dashboard" />
    <!-- 标题栏 -->
    <router-view name="navbar" />
    <div class="row p-0 m-0">
      <!-- 侧边栏 -->
      <div class="col-md-2 p-0">
        <router-view name="sidebar" />
      </div>
      <!-- 正文 -->
      <div class="col-md-10" p-0 m-0>
        <router-view name="content" />
      </div>
    </div>
  </div>
  <toast />
  <!-- svg图标 -->
  <vsvg></vsvg>
</template>
<script setup>
import toast from "./components/Vtoast.vue";
import vsvg from "./components/Vsvg.vue";
</script>

