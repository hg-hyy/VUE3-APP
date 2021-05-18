<template>
  <div
    class="modal fade"
    :id="net"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticmodal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticmodal">{{ head }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row mb-3">
              <label for="device" class="col-sm-3 col-form-label"
                >网卡名称</label
              >
              <div class="col-sm-9">
                <input
                  type="ip"
                  class="form-control"
                  id="device"
                  v-model="formdata.device"
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="ip" class="col-sm-3 col-form-label">IP地址</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="ip"
                  v-model="formdata.ip"
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="netmask" class="col-sm-3 col-form-label"
                >子网掩码</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="netmask"
                  v-model="formdata.netmask"
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="gateway" class="col-sm-3 col-form-label">网关</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="gateway"
                  v-model="formdata.gateway"
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="dns" class="col-sm-3 col-form-label">DNS</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="dns"
                  v-model="formdata.dns1"
                  autocomplete="off"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="confirm()"
          >
            确定
          </button>
          <button
            type="button"
            class="btn btn-danger"
            data-bs-dismiss="modal"
            @click="cancle"
          >
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, defineProps, computed, watch } from "vue";
import { useStore } from "vuex";
import { usePostRef } from "../utils/index";
const props = defineProps({
  net: String,
  head: String,
  // data: Object,
});

const PostURL = "/d_sysop/v1.0/netConf";
// let { data } = { ...toRefs(props) };
const store = useStore();
const ensid = computed(() => store.state.ensid);
const nc = computed(() => store.state.netconf);
const formdata = reactive({
  device: "",
  ip: "",
  netmask: "",
  gateway: "",
  dns1: "",
});

function confirm() {
  const res = usePostRef("ok", PostURL, { data: formdata });
  setTimeout(() => {
    if (res.value === "ok") {
      store.dispatch("toast", {
        active: true,
        color: "success",
        title: "网卡配置：",
        time: new Date().toLocaleString(),
        msg: `网卡配置失败`,
      });
    } else {
      nc.value[ensid.value].device = formdata.device;
      nc.value[ensid.value].ip = formdata.ip;
      nc.value[ensid.value].netmask = formdata.netmask;
      nc.value[ensid.value].gateway = formdata.gateway;
      nc.value[ensid.value].dns1 = formdata.dns1;
      store.dispatch("set_netconf", nc.value);
      store.dispatch("toast", {
        active: true,
        color: "success",
        title: "网卡配置：",
        time: new Date().toLocaleString(),
        msg: `网卡配置成功`,
      });
    }
  }, 1500);
}
function cancle() {
  formdata.device = nc.value[ensid.value].device;
  formdata.ip = nc.value[ensid.value].ip;
  formdata.netmask = nc.value[ensid.value].netmask;
  formdata.gateway = nc.value[ensid.value].gateway;
  formdata.dns1 = nc.value[ensid.value].dns1;
}
watch(
  () => nc.value,
  () => {
    formdata.device = nc.value[ensid.value].device;
    formdata.ip = nc.value[ensid.value].ip;
    formdata.netmask = nc.value[ensid.value].netmask;
    formdata.gateway = nc.value[ensid.value].gateway;
    formdata.dns1 = nc.value[ensid.value].dns1;
  }
);
watch(
  () => ensid.value,
  (n) => {
    formdata.device = nc.value[n].device;
    formdata.ip = nc.value[n].ip;
    formdata.netmask = nc.value[n].netmask;
    formdata.gateway = nc.value[n].gateway;
    formdata.dns1 = nc.value[n].dns1;
  }
);
</script>