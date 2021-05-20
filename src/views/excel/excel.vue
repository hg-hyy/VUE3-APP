<template>
  <button @click="getExcel(userList)">导出表格</button>
  <button @click="outExe">导出模板</button>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      userList: [
        {
          userNum: 100001, //客户编号
          userName: "张琳梵", // 客户名字
          phone: 15878522, // 电话
          job: "餐饮", // 行业
          address: "河南省郑州市中原区xxx号", // 地址
          from: "手动录入", //来源
          salesman: "李明", // 销售人员
          createTime: "2018-09-25", // 入库时间
        },
        {
          userNum: 100005,
          userName: "张琳梵",
          phone: 158458788,
          job: "百货",
          address: "河南省郑州市高新区xxx号",
          from: "手动录入",
          salesman: "李明",
          createTime: "2018-09-25",
        },
      ],
    };
  },
  components: {},
  mounted() {},
  methods: {
    // 导出模板
    outExe() {
      require.ensure([], () => {
        // const { export_json_to_excel } = require("@/vendor/Export2Excel"); //引入文件
        const tHeader = [
          "客户编号",
          "客户名字",
          "电话",
          "行业",
          "地址",
          "来源",
          "销售人员",
          "入库时间",
        ]; //将对应的属性名转换成中文
        const data = [];
        export_json_to_excel(tHeader, data, "模板");
      });
    },
    // 导出表格
    getExcel(res) {
      require.ensure([], () => {
        // const { export_json_to_excel } = require("@/vendor/Export2Excel.js");
        const tHeader = [
          "客户编号",
          "客户名字",
          "电话",
          "行业",
          "地址",
          "来源",
          "销售人员",
          "入库时间",
        ];
        const filterVal = [
          "userNum",
          "userName",
          "phone",
          "job",
          "address",
          "from",
          "salesman",
          "createTime",
        ];
        const list = res;
        const data = this.formatJson(filterVal, list);
        export_json_to_excel(tHeader, data, "导出表格名称");
      });
    },

    formatJson(filterVal, jsonData) {
      return jsonData.map((v) => filterVal.map((j) => v[j]));
    },
  },
};
</script>
