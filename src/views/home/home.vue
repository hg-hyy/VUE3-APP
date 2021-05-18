<template>
  <h1>主页</h1>

  <div class="b-example-divider"></div>
  <div
    class="container py-3 shadow-lg p-3 mb-5 bg-body rounded"
    id="hanging-icons"
  >
    <div class="shadow-lg p-3 mb-5 bg-body rounded">
      <h2 class="pb-2">欢迎 {{ user.username }} ！</h2>
    </div>
    <div class="row g-5 py-5">
      <div class="col-md-3 d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em">
            <use xlink:href="#toggles2" />
          </svg>
        </div>
        <div>
          <h2>网络配置</h2>
          <p>配置网卡信息，设置参数</p>
          <a href="/v1/network" class="btn btn-primary"> 网卡配置 </a>
        </div>
      </div>
      <div class="col-md-3 d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em">
            <use xlink:href="#tools" />
          </svg>
        </div>
        <div>
          <h2>状态监视</h2>
          <p>监控设备运行状态</p>
          <a href="/v1/dashboard" class="btn btn-primary"> 主机监控 </a>
        </div>
      </div>
    </div>
  </div>
</template>
  <script setup>
import { reactive } from "vue";

const user = reactive({ username: "" });
user.username = localStorage.getItem("username");
</script>
<style scoped>
.b-example-divider {
  height: 0.2rem;
  width: 100%;
  background-color: rgba(116, 30, 214, 0.432);
  border: solid rgba(207, 14, 143, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}
</style>