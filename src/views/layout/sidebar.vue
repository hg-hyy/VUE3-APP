<template>
  <div id="sidebar">
    <div class="text-decoration-none p-3 mt-3">
      <svg class="bi me-2" width="24" height="24">
        <use xlink:href="#tools" />
      </svg>
      <span class="fs-5 fw-semibold">{{ headname }}</span>
    </div>
    <div class="divider"></div>
    <ul class="list-unstyled m-4">
      <template v-for="(v, k) in linkdata" :key="k">
        <slink
          :id="v.id"
          :icon="v.icon"
          :title="v.title"
          :linkname="v.linkname"
        />
      </template>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";
import slink from "../../components/Vlink.vue";
const headname = ref("系统运维工具");
const netlist = { network: "网卡配置" };
const statuslist = { dashboard: "主机监控" };
const showdatalist = { show: "数据展示", excel: "excel", upload: "上传" };
const linkdata = [
  {
    id: "network",
    icon: "netconf",
    title: "网络配置",
    linkname: netlist,
  },
  {
    id: "status",
    icon: "speedometer2",
    title: "状态监视",
    linkname: statuslist,
  },
  {
    id: "showdata",
    icon: "speedometer2",
    title: "数据展示",
    linkname: showdatalist,
  },
];
</script>
<style scoped>
#sidebar {
  /* width: 280px; */
  height: 100vh;
  height: calc(100vh - 60px);
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
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
