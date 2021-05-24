<template>
  <div class="container-fluid g-0">
    <!-- 登录页 -->
    <router-view name="signin" />
    <router-view name="dashboard" />
    <!-- 标题栏 -->
    <router-view name="navbar" />
    <div class="row g-0">
      <!-- 侧边栏 -->
      <div class="col-2">
        <router-view name="sidebar" />
      </div>
      <!-- 正文 -->
      <div class="col-10">
        <router-view name="content" />
      </div>
    </div>
  </div>
  <!-- 通知 -->
  <toast />
  <!-- svg图标 -->
  <Vsvg />
</template>
<script setup>
import toast from "./components/Vtoast.vue";
import Vsvg from "./components/Vsvg.vue";
</script>

