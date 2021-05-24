<template>
  <Vtitle head="excel导出" />
  <div class="excel mx-3 shadow-lg p-3 mb-5 bg-body rounded">
    <table
      class="table table-bordered border-info text-center table-hover mt-3 caption-top table-responsive"
    >
      <caption>
        设备信息表
      </caption>
      <thead>
        <tr>
          <th v-for="(v, k) in th" :key="k">{{ v }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(v, k) in userList" :key="k">
          <td v-for="(v1, k1) in v" :key="k1">
            {{ v1 }}
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-info btn-md" @click="getExcel(userList)">
      导出报表
    </button>
    <button class="btn btn-primary btn-md" @click="outExe">导出模板</button>
  </div>
</template>
<script setup>
import Vtitle from "../../components/Vtitle.vue";

import { export_json_to_excel } from "../../vendor/Export2Excel"; //引入文件
const th = [
  "客户编号",
  "客户名字",
  "电话",
  "行业",
  "地址",
  "来源",
  "销售人员",
  "入库时间",
];
const userList = [
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
];

function outExe() {
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
}
// 导出表格
function getExcel(res) {
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
}
function formatJson(filterVal, jsonData) {
  return jsonData.map((v) => filterVal.map((j) => v[j]));
}
</script>
