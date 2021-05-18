<template>
  <nettable :data="nc" :netconfig="netconfig"></nettable>
  <networkmodal id="net" head="网卡配置" :data="nc"></networkmodal>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import networkmodal from "../../components/networkmodal.vue";
import nettable from "../../components/nettable.vue";
import { useGetRef } from "../../utils/index";
import { netconfig } from "../../../netalias.json";
const store = useStore();
const nc = computed(() => store.state.netconf);
const NETURL = "/d_sysop/v1.0/netConf";
const netdata = useGetRef(
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
);
store.dispatch("set_netconf", netdata);
</script>