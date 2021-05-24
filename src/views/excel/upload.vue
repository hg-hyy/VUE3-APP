<template>
  <Vtitle head="导入导出" />
  <div class="mx-3 shadow-lg p-3 mb-5 bg-body rounded">
    <div class="row g-5">
      <div class="col-2">
        <input
          class="form-control"
          aria-label="Upload"
          style="width: 260px"
          @change="useImport"
          type="file"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        />
      </div>
      <div class="col">
        <button class="btn btn-danger btn-md" @click="useExport">
          导出报表
        </button>
      </div>
    </div>

    <Vpagenation
      :tablehead="th"
      :data="tabledata"
      :pagesizes="pagesizes"
      :pagenum="pagesize"
      layout="layout"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import XLSX from "xlsx";
import Vtitle from "../../components/Vtitle.vue";
import Vpagenation from "../../components/Vpagenation.vue";
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
    text: "13 条/页",
    value: 13,
  },
];
const pagesize = ref(10);
let tabledata = ref([]);
let th = ref([]);

const data = ["SheetJS".split(""), "1234567".split("")];
const tb = ref();
function useImport(event) {
  if (!event.currentTarget.files.length) {
    return;
  }
  // 拿取文件对象
  var f = event.currentTarget.files[0];
  // 用FileReader来读取
  var reader = new FileReader();
  // 重写FileReader上的readAsBinaryString方法
  FileReader.prototype.readAsBinaryString = function (f) {
    var binary = "";
    var wb; // 读取完成的数据
    var outdata; // 你需要的数据
    var reader = new FileReader();
    reader.readAsArrayBuffer(f);
    reader.onload = function (e) {
      // 读取成Uint8Array，再转换为Unicode编码（Unicode占两个字节）
      var bytes = new Uint8Array(reader.result);
      var length = bytes.byteLength;
      for (var i = 0; i < length; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      // 接下来就是xlsx了，具体可看api
      wb = XLSX.read(binary, {
        type: "binary",
      });
      let tablehead = [];

      outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
      tabledata.value = outdata;
      // 标题
      for (let i = 0; i < outdata.length; i++) {
        for (const j in outdata[i]) {
          let num = 0;
          for (let k = 0; k < tablehead.length; k++) {
            if (tablehead[k] === j) {
              num += 1;
            }
          }
          if (num === 0) {
            tablehead.push(j);
          }
        }
      }
      th.value = tablehead;
      th.value.unshift("ID");
    };
  };
  reader.readAsBinaryString(f);
}

function useExport(evt) {
  /* convert table to workbook */
  // const ws = XLSX.utils.table_to_sheet(tb.value);

  /* convert array of arrays to workbook */
  // const ws = XLSX.utils.aoa_to_sheet(data);

  /* convert json array to workbook */
  const ws = XLSX.utils.json_to_sheet(tabledata.value);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "sheet1");
  /* generate file and send to client */
  XLSX.writeFile(wb, "report.xlsx");
}

// excel读取2018/01/01这种时间格式是会将它转换成数字类似于46254.1545151415 numb是传过来的整数数字，format是之间间隔的符号
function formatDate(numb, format) {
  const time = new Date((numb - 1) * 24 * 3600000 + 1);
  time.setYear(time.getFullYear() - 70);
  const year = time.getFullYear() + "";
  const month = time.getMonth() + 1 + "";
  const date = time.getDate() - 1 + "";
  if (format && format.length === 1) {
    return year + format + month + format + date;
  }
  return (
    year + (month < 10 ? "0" + month : month) + (date < 10 ? "0" + date : date)
  );
}
</script>

  