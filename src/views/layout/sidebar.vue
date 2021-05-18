<template>
  <div
    class="col col-md-2 bg-light border-end border-info p-0 bg-light"
    style="height: 912px"
  >
    <a
      href="#"
      class="d-flex pb-3 m-3 link-dark text-decoration-none border-bottom"
    >
      <svg class="bi me-2" width="24" height="24">
        <use xlink:href="#tools" />
      </svg>
      <span class="fs-5 fw-semibold">{{ head }}</span>
    </a>
    <ul class="list-unstyled ps-0 mx-5">
      <slink
        id="network"
        icon="netconf"
        title="网络配置"
        :linkname="netlist"
      ></slink>
      <!-- <slink id="server" title="服务管理" :linkname="serverlist"></slink> -->
      <slink
        id="status"
        icon="speedometer2"
        title="状态监视"
        :linkname="statuslist"
      ></slink>
    </ul>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import slink from "../../components/slink.vue";
defineProps({
  head: String,
});
// const serverlist = { regist: "regist" };
const netlist = { network: "网卡配置" };
const statuslist = { dashboard: "主机监控" };
</script>
<style></style>;
