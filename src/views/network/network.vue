<template>
  <nettable :data="nc" :netconfig="netconfig"></nettable>
  <networkmodal id="net" head="网卡配置" :data="nc"></networkmodal>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useGetRefST } from "../../utils/index";
import networkmodal from "../../components/networkmodal.vue";
import nettable from "../../components/nettable.vue";
import { netconfig } from "../../../netalias.json";
const store = useStore();
const nc = computed(() => store.state.netconf);
const NETURL = "/d_sysop/v1.0/netConf";
useGetRefST(
  [
    {
      device: "",
      ip: "",
      netmask: "",
      gateway: "",
      dns1: "",
    },
  ],
  NETURL,
  { device: "all" }
).then((res) => {
  if (res.value.code === 1000) {
    store.dispatch("toast", {
      active: true,
      color: "info",
      title: "获取网卡信息：",
      time: new Date().toLocaleString(),
      msg: `获取成功`,
    });
    store.dispatch("set_netconf", res.value.data);
  } else {
    store.dispatch("toast", {
      active: true,
      color: "danger",
      title: "获取网卡信息：",
      time: new Date().toLocaleString(),
      msg: `获取失败`,
    });
  }
});
</script>