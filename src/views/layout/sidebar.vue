<template>
  <div id="sidebar">
    <div class="p-3 ms-5">
      <svg class="bi me-2" width="24" height="24">
        <use xlink:href="#tools" />
      </svg>
      <span class="fs-5 fw-semibold">{{ headname }}</span>
    </div>
    <div class="divider"></div>
    <ul class="list-unstyled m-4 ps-5">
      <template v-for="(v, k) in linkdata" :key="k">
        <Vlink :id="v.id" :title="v.title" :linkdata="v.linkdata" />
      </template>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Vlink from "../../components/Vlink.vue";
const headname = ref("系统运维工具");
const netlist = { network: { name: "网卡配置", icon: "netconf" } };
const statuslist = { dash: { name: "主机监控", icon: "speedometer2" } };
const showdatalist = {
  excel: { name: "导出", icon: "edit" },
  upload: { name: "导入导出", icon: "download" },
  report: { name: "报表", icon: "clipboard" },
  dyn: { name: "动态组件", icon: "calendar3" },
};
const linkdata = [
  {
    id: "network",
    title: "网络配置",
    linkdata: netlist,
  },
  {
    id: "status",
    title: "状态监视",
    linkdata: statuslist,
  },
  {
    id: "showdata",
    title: "数据展示",
    linkdata: showdatalist,
  },
];
</script>
<style scoped>
#sidebar {
  /* width: 280px; */
  height: 100vh;
  height: calc(100vh - 60px);
  background-image: url("../../static/pic/pat.jpg");
  background-size: cover;
}
.divider {
  height: 0.2rem;
  width: 100%;
  background-color: rgba(4, 40, 247, 0.432);
  border: solid rgba(207, 14, 143, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}
.router-link-active {
  background-color: darksalmon;
  background: #000;
}
</style>;
