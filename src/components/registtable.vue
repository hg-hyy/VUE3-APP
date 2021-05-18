<template>
  <h1>注册申请</h1>
  <table class="table table-bordered border-info text-center table-hover">
    <thead>
      <tr>
        <th v-for="(v, k) in th" :key="k">{{ v }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(v, k) in data" :key="k">
        <th scope="row">
          <span v-if="!isedit">{{ k + 1 }}</span
          ><input class="form-control" v-if="isedit" v-model="data" />
        </th>
        <td v-for="(value, key) in v" :key="key">{{ value }}</td>
        <td>
          <button id="network1" :accountid="k" @click="edit">注册</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
import { defineProps, reactive, ref } from "vue";
import modalbtn from "./modalbtn.vue";

const props = defineProps({
  id: String,
  data: Array | Object,
});
const th = ["序号", "SN", "名称", "IP", "desc", "新增"];
const isedit = ref(false);

function edit() {
  isedit.value = !isedit.value;
}
</script>
<style>
</style>