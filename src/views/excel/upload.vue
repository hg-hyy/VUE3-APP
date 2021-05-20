<template>
  <div class="upload-excels">
    <h4>①js方式，写在子组件中，引入本页。</h4>
    <excel1 v-on:getResult="updateExcel"></excel1>
  </div>
</template>

<script>
import excel1 from "../../components/upload-excel.vue";
export default {
  name: "",
  data() {
    return {};
  },
  components: { excel1 },
  mounted() {},
  methods: {
    // 导入表格--start
    updateExcel(e) {
      console.log(e); // 打印出的为导入Excel表格的json数据
    },
    // 导入表格--end
  },
};
</script>
