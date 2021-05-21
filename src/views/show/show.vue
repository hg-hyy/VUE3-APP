<template>
  <Vtitle head="数据展示"></Vtitle>
  <div class="mx-3 shadow-lg p-3 mb-5 bg-body rounded">
    <Vpagenation :data="data" :pagesizes="pagesizes" :pagenum="pagesize" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import Vpagenation from "../../components/Vpagenation.vue";
import Vtitle from "../../components/Vtitle.vue";
const data = [];

for (let i = 0; i < 100; i++) {
  let tmp = {
    name: "zs" + (i + 1),
    age: 1 + i,
  };
  data.push(tmp);
}
const pagesizes = [
  {
    text: "3 条/页",
    value: 3,
  },
  {
    text: "5 条/页",
    value: 5,
  },
  {
    text: "10 条/页",
    value: 10,
  },
  {
    text: "15 条/页",
    value: 15,
  },
  {
    text: "18 条/页",
    value: 18,
  },
];
const pagesize = ref(10);
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