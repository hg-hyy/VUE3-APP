<template>
  <table
    class="table table-bordered border-info text-center table-hover mt-3 caption-top table-responsive"
  >
    <caption>
      网卡列表
    </caption>
    <thead>
      <tr>
        <th v-for="(v, k) in th" :key="k">{{ v }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(v, k) in data" :key="k">
        <th scope="row">{{ k + 1 }}</th>
        <td>
          {{ v.device }} |
          <span class="text-primary">{{ netconfig[v.device] }}</span>
        </td>
        <td>{{ v.ip }}</td>
        <td>{{ v.netmask }}</td>
        <td>{{ v.gateway }}</td>
        <td>{{ v.dns1 }}</td>
        <td>
          <Vbutton id="net" :netid="k" @alter="alter">配置</Vbutton>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="input-group" style="width: 300px">
    <input
      type="text"
      class="form-control"
      placeholder="ip address"
      v-model="ptip.plat_ip"
    />
    <button class="btn btn-outline-info" type="button" @click="setptip">
      设置平台地址
    </button>
  </div>
  <Vmodal
    id="net"
    head="网卡配置"
    :data="alterdata"
    @confirm="confirm"
  ></Vmodal>
</template>
<script setup>
import { defineProps, toRefs, reactive, ref, defineAsyncComponent } from "vue";
import { useStore } from "vuex";
import { useGetRefST, usePostRefST } from "../utils/index";
import Vbutton from "./Vbutton.vue";
// import Vmodal from "./Vmodal.vue";
// 异步组件
const Vmodal = defineAsyncComponent(() => import("./Vmodal.vue"));
const PostURL = "/d_sysop/v1.0/netConf";
const PTURL = "/d_sysop/v1.0/plat_host";

const props = defineProps({
  data: Array,
  netconfig: Object,
});

const store = useStore();
const alterdata = ref({});
const th = ["序号", "网卡名称", "IP地址", "网关", "子网掩码", "DNS", "操作"];
const { data } = { ...toRefs(props) };

const setptdata = reactive({
  data: {
    plat_ip: "",
  },
});
const ptip = ref({
  plat_ip: "0.0.0.0",
});
const alterid = ref();
useGetRefST({}, PTURL).then((res) => {
  if (res.value.code === 1000) {
    store.dispatch("toast", {
      active: true,
      color: "info",
      title: "获取平台地址：",
      time: new Date().toLocaleString(),
      msg: `获取成功`,
    });
  }
  ptip.value = res.value.data ? res.value.data : ptip.value;
});

function setptip() {
  setptdata.data.plat_ip = ptip.value.plat_ip;
  usePostRefST({}, PTURL, setptdata).then((res) => {
    console.log(res);
    if (res.value.code === 1000) {
      store.dispatch("toast", {
        active: true,
        color: "success",
        title: "平台地址配置：",
        time: new Date().toLocaleString(),
        msg: `配置成功`,
      });
    }
  });
}

function alter(id) {
  const tmp = Object.assign({}, data.value[id]);
  alterdata.value = tmp;
  alterid.value = id;
}
function confirm(obj) {
  usePostRefST("ok", PostURL, { data: obj }).then((res) => {
    if (res.value.code === 1000) {
      data.value[alterid.value] = obj;
      store.dispatch("set_netconf", data);
      store.dispatch("toast", {
        active: true,
        color: "success",
        title: "网卡配置：",
        time: new Date().toLocaleString(),
        msg: `网卡配置成功`,
      });
    } else {
      store.dispatch("toast", {
        active: true,
        color: "success",
        title: "网卡配置：",
        time: new Date().toLocaleString(),
        msg: `网卡配置失败`,
      });
    }
  });
}
</script>
<style scoped>
</style>