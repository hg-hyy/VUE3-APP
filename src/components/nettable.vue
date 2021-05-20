<template>
  <h1>网卡配置</h1>
  <div class="b-example-divider"></div>
  <div class="mx-5 mt-3 shadow-lg p-3 mb-5 bg-body rounded">
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
            <modalbtn id="net" :accountid="k">配置</modalbtn>
            <!-- <button
              class="btn btn-outline-primary btn-sm"
              @click="serviceNet(k)"
            >
              设为主要
            </button> -->
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
  </div>
</template>
<script setup>
import { defineProps, toRefs, reactive, ref } from "vue";
import { useStore } from "vuex";
import { useGetRefST, usePostRef, usePostRefST } from "../utils/index";
import modalbtn from "./modalbtn.vue";
const props = defineProps({
  data: Array,
  netconfig: Object,
});
const store = useStore();
const serviceNetURL = "/d_sysop/v1.0/serviceNet ";

const th = ["序号", "网卡名称", "IP地址", "网关", "子网掩码", "DNS", "操作"];
const { data } = { ...toRefs(props) };
// function serviceNet(id) {
//   const serviceNetdata = {
//     data: {
//       device: data.value[id].device,
//       ip: data.value[id].ip,
//     },
//   };
//   if (data.value[id].ip) {
//     usePostRef({}, serviceNetURL, serviceNetdata);
//   } else {
//     store.dispatch("toast", {
//       active: true,
//       color: "danger",
//       title: "登录：",
//       time: new Date().toLocaleString(),
//       msg: "ip 地址不能为空！",
//     });
//   }
// }

const PTURL = "/d_sysop/v1.0/plat_host";

const setptdata = reactive({
  data: {
    plat_ip: "",
  },
});

const ptip = ref({
  plat_ip: "",
});
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
  ptip.value = res.value.data;
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