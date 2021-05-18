<template>
  <h1>注册申请</h1>
  <div class="b-example-divider"></div>
  <div class="row mx-5 mt-3 shadow-lg p-3 mb-5 bg-body rounded">
    <div class="col col-5">
      <form>
        <div class="row mb-3">
          <label for="ip" class="col-sm-3 col-form-label">SN</label>
          <div class="col-sm-6">
            <input
              type="ip"
              class="form-control"
              id="ip"
              v-model="registdata.sn"
              autocomplete="off"
            />
          </div>
          <div class="col-sm-3">
            <button
              type="ip"
              class="btn btn-info form-control"
              @click.prevent="getsn"
            >
              点击获取
            </button>
          </div>
        </div>
        <div class="row mb-3">
          <label for="netmask" class="col-sm-3 col-form-label">name</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="netmask"
              v-model="registdata.name"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="gateway" class="col-sm-3 col-form-label">ip</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="gateway"
              v-model="registdata.ip"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="dns" class="col-sm-3 col-form-label">desc</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="dns"
              v-model="registdata.desc"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="dns" class="col-sm-3 col-form-label"></label>
          <div class="col-sm-9">
            <button
              type="ip"
              class="btn btn-info btn-lg form-control"
              @click.prevent="regist"
            >
              注册
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { useGetRef, usePostRef } from "../../utils/index";
import registtable from "../../components/registtable.vue";

const NETURL = "/d_sysop/v1.0/netConf";
const FINGERURL = "/d_sysop/v1.0/finger";

const th = ["序号", "SN", "名称", "IP", "desc", "新增"];
const registdata = reactive({ sn: "", name: "", ip: "", desc: "" });

const finger = useGetRef("", FINGERURL);
function getsn() {
  registdata.sn = finger.value.sn;
}

function regist() {
  const netdata2 = usePostRef({}, NETURL, registdata);
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