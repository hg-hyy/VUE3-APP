<template>
  <h1>主机监控</h1>
  <div class="b-example-divider"></div>
  <div class="row mt-3">
    <div class="col-9">
      <div class="card">
        <div class="card-header">
          <span>
            <svg class="bi me-2" width="24" height="24">
              <use xlink:href="#cpu" />
            </svg>
            硬件监视</span
          >
        </div>
        <div class="card-body p-4" style="height: 320px">
          <div class="row">
            <div class="col-6">
              <div class="text-center">操作系统：{{ hardware.system }}</div>
            </div>
            <div class="col-6">
              <div class="text-center">开机时间：{{ hardware.setuptime }}</div>
            </div>

            <div class="col-3">
              <div
                id="cpuTemp"
                ref="cpuTemp"
                style="width: 260px; height: 170px"
              ></div>
            </div>
            <div class="col-3">
              <div
                id="cpuUsage"
                ref="cpuUsage"
                style="width: 260px; height: 170px"
              ></div>
            </div>
            <div class="col-3">
              <div
                id="memUsage"
                ref="memUsage"
                style="width: 260px; height: 170px"
              ></div>
            </div>
            <div class="col-3">
              <div
                id="diskUsage"
                ref="diskUsage"
                style="width: 260px; height: 170px"
              ></div>
            </div>

            <div class="col-3 mt-3" v-for="(item, index) in stat" :key="index">
              <div class="stat-info__item">
                <div
                  class="stat-info__icon"
                  :style="{ 'background-color': item.bgColor }"
                >
                  <i :class="item.icon"></i>
                </div>
                <div class="stat-info__detail">
                  <span class="stat-info__total">{{ item.total }}</span>
                  <span class="stat-info__title">{{ item.title }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-3">
      <div class="card">
        <div class="card-header">
          <span>
            <svg class="bi me-2" width="24" height="24">
              <use xlink:href="#alarm" /></svg
            >报警事件（Top5）</span
          >
        </div>
        <div class="card-body" style="height: 320px">
          <div class="row">
            <div class="col-12">
              <div class="btn-group mb-3" role="group">
                <button
                  type="button"
                  class="btn btn-info"
                  @click="initWebSocket"
                >
                  打开
                </button>
                <button type="button" class="btn btn-danger" @click="close">
                  关闭
                </button>
                <button type="button" class="btn btn-warning" @click="clear">
                  清空
                </button>
              </div>

              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="button-addon2"
                  v-model="input"
                />
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  @click="send"
                >
                  send
                </button>
              </div>
              <textarea
                class="form-control"
                id="message"
                rows="7"
                v-model="msg"
              >
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import * as echarts from "echarts";

const store = useStore();
const th = ["ID", "名称", "PID", "CPU(%)", "内存(%)", "启动时间", "操作"];
const path = "ws://192.168.20.130:49101";
const hardware = reactive({
  system: "",
  setuptime: "",
});
const cpuTemp = ref(null);
const cpuUsage = ref(null);
const memUsage = ref(null);
const diskUsage = ref(null);
let TempChart = reactive({});
let CpuChart = reactive({});
let MemChart = reactive({});
let DiskChart = reactive({});
let activities = reactive({});
let timer = ref();
const stat = reactive([]);
let ws = {};
const msg = ref("");
const message = ref("");
const input = ref("");
onMounted(() => {
  initCharts();
  loadData();
  // loadMoniP();
  // if (ws) {
  //   close(); // 关闭websocket连接
  // }
  initWebSocket(); // 初始化weosocket，发起连接
  // 这里使用定时器是为了等待连接后才发送数据，避免错误
  setTimeout(() => {
    // 添加状态判断，当为OPEN时，前端发送消息给后端
    if (ws.readyState === 1) {
      // 把后台需要的参数数据传过去
      const obj = {
        topic: "alarm",
        cycle: 5,
      };
      // 发给后端的数据需要字符串化
      websocketsend(obj);
    }
  }, 500);
  timer.value = setInterval(() => {
    loadData();
    // loadMoniP();
  }, 5000);
});
watch(
  () => msg.length,
  (n) => {
    console.log(n);
  }
);
function initWebSocket() {
  ws = new WebSocket(path);
  ws.onopen = () => {
    console.log("ws连接状态：" + ws.readyState);
    ws.send("连接成功");
  };
  ws.onclose = () => {
    ws = null;
  };
  ws.onmessage = (evt) => {
    const dd = eval("(" + evt.data + ")");
    // const dataJson = JSON.parse(evt.data);
    if (dd.length > 0) {
      const dataArray = dataJson.map((item) => {
        return {
          content: item.content,
          timestamp: parseTime(item.timestamp),
        };
      });
      activities = dataArray.reverse().slice(0, 5);
    } else {
      msg.value = "无" + "\r\n";
    }
  };
  ws.onerror = (evt) => {
    msg.value = "ERROR: " + evt.data;
  };
}
function websocketonmessage(e) {
  const dataJson = JSON.parse(e.data);
  const dataArray = dataJson.map((item) => {
    return {
      content: item.content,
      timestamp: parseTime(item.timestamp),
    };
  });
  activities = dataArray.reverse().slice(0, 5);
}

function send() {
  if (!ws) {
    return false;
  }
  ws.send(input.value);
}

function close() {
  if (!ws) {
    return false;
  }
  ws.close();
}
function clear() {
  msg.value = "";
}

function websocketsend(data) {
  // 数据发送
  ws.send(JSON.stringify(data));
}

function gaugeimg(id, title, min, max, val, unit) {
  const option = {
    title: {
      show: false,
      text: title,
      x: "center",
      y: "90%",
    },
    tooltip: {
      formatter: "{b} : {c}" + unit,
      confine: true,
    },
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true,
        },
        restore: {
          show: true,
        },
        saveAsImage: {
          show: true,
        },
      },
    },
    series: [
      {
        center: ["50%", "50%"],
        number: [0, "50%"],
        // 仪表盘起始角度
        startAngle: 240,
        // 仪表盘结束角度
        endAngle: -60,
        name: title,
        type: "gauge",
        radius: "85%",
        // 坐标轴线
        axisLine: {
          // 属性lineStyle控制线条样式
          lineStyle: {
            color: [
              [0.25, "#ddd"],
              [1, "#ddd"],
            ],
            width: 10,
          },
        },
        // 坐标轴小标记
        axisTick: {
          show: false,
        },
        // 坐标轴文本标签，详见axis.axisLabel
        axisLabel: {
          show: true,
          distance: 1,
        },
        // 分隔线
        splitLine: {
          // 默认显示，属性show控制显示与否
          show: false,
        },
        // 指针粗细
        pointer: {
          width: 5,
        },
        title: {
          // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          fontWeight: "bolder",
          offsetCenter: [0, "-20%"],
          padding: [5, 5],
          fontSize: 12,
        },
        detail: {
          formatter: "{value}" + unit,
          // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          color: "inherit",
          fontWeight: "bolder",
          fontSize: 15,
          offsetCenter: [0, "20%"],
        },
        data: [{}],
      },
    ],
  };
  option.series[0].min = min;
  option.series[0].max = max;
  option.series[0].data[0].value = val;
  option.series[0].data[0].name = title;
  option.series[0].axisLine.lineStyle.color[0][0] = (val - min) / (max - min);
  option.series[0].axisLine.lineStyle.color[0][1] = detectionData(val, id);
  switch (id) {
    case "cpuTemp":
      TempChart.setOption(option);
      break;
    case "cpuUsage":
      CpuChart.setOption(option);
      break;
    case "memUsage":
      MemChart.setOption(option);
      break;
    case "diskUsage":
      DiskChart.setOption(option);
      break;
  }
}

function detectionData(str, id) {
  if (id === "cpuTemp") {
    var color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [
      {
        offset: 0,
        color: "#32cd32",
      },
      {
        offset: 1,
        color: "#32cd32",
      },
    ]);
    if (str >= 60 && str <= 80) {
      color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        {
          offset: 0,
          color: "#ff8c00",
        },
        {
          offset: 1,
          color: "#ff8c00",
        },
      ]);
    }
    if (str > 80) {
      color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        {
          offset: 0,
          color: "#ff0000",
        },
        {
          offset: 1,
          color: "#ff0000",
        },
      ]);
    }
    return color;
  }
  if (id === "cpuUsage") {
    color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [
      {
        offset: 0,
        color: "#32cd32",
      },
      {
        offset: 1,
        color: "#32cd32",
      },
    ]);
    if (str >= 70 && str <= 90) {
      color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        {
          offset: 0,
          color: "#ff8c00",
        },
        {
          offset: 1,
          color: "#ff8c00",
        },
      ]);
    }
    if (str > 90) {
      color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        {
          offset: 0,
          color: "#ff0000",
        },
        {
          offset: 1,
          color: "#ff0000",
        },
      ]);
    }
    return color;
  }
  if (id === "memUsage") {
    color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [
      {
        offset: 0,
        color: "#32cd32",
      },
      {
        offset: 1,
        color: "#32cd32",
      },
    ]);
    if (str >= 70 && str <= 90) {
      color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        {
          offset: 0,
          color: "#ff8c00",
        },
        {
          offset: 1,
          color: "#ff8c00",
        },
      ]);
    }
    if (str > 90) {
      color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        {
          offset: 0,
          color: "#ff0000",
        },
        {
          offset: 1,
          color: "#ff0000",
        },
      ]);
    }
    return color;
  }
  if (id === "diskUsage") {
    color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [
      {
        offset: 0,
        color: "#32cd32",
      },
      {
        offset: 1,
        color: "#32cd32",
      },
    ]);
    if (str >= 70 && str <= 95) {
      color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        {
          offset: 0,
          color: "#ff8c00",
        },
        {
          offset: 1,
          color: "#ff8c00",
        },
      ]);
    }
    if (str > 95) {
      color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        {
          offset: 0,
          color: "#ff0000",
        },
        {
          offset: 1,
          color: "#ff0000",
        },
      ]);
    }
    return color;
  }
}

function loadMoniP() {
  axios({
    url: "http://192.168.20.130:9081/manager/v1.0/process",
    method: "get",
    params: {
      token: localStorage.getItem("Admin-Token"),
    },
  }).then((res) => {
    if (res.code === 1000) {
      this.processData = res.data;
    }
  });
}

function loadData() {
  store.dispatch("getDashboards");
  hardware.system = store.getters.hardware.server_version;
  hardware.setuptime = store.getters.hardware.system_time;
  stat.length = 0;
  stat.push(
    {
      icon: "el-icon-upload2",
      title: "上行流量",
      total: store.getters.flows.total_flow_out_s + "Kbps",
      bgColor: "#ebcc6f",
    },
    {
      icon: "el-icon-download",
      title: "下行流量",
      total: store.getters.flows.total_flow_in_x + "Kbps",
      bgColor: "#3acaa9",
    },
    {
      icon: "el-icon-s-unfold",
      title: "发送总流量",
      total: store.getters.flows.total_bytes_sent,
      bgColor: "#67c4ed",
    },
    {
      icon: "el-icon-s-fold",
      title: "接收总流量",
      total: store.getters.flows.total_bytes_recv,
      bgColor: "#67c4ed",
    }
  );
  gaugeimg(
    "cpuTemp",
    "CPU温度",
    0,
    100,
    store.getters.charts.cpuTemp || 0,
    "℃"
  );
  gaugeimg(
    "cpuUsage",
    "CPU使用率",
    0,
    100,
    store.getters.charts.cpuUsage || 0,
    "%"
  );
  gaugeimg(
    "memUsage",
    "内存使用率",
    0,
    100,
    store.getters.charts.memUsage || 0,
    "%"
  );
  gaugeimg(
    "diskUsage",
    "磁盘使用率",
    0,
    100,
    store.getters.charts.diskUsage || 0,
    "%"
  );
}

function initCharts() {
  TempChart = echarts.init(cpuTemp.value);
  CpuChart = echarts.init(cpuUsage.value);
  MemChart = echarts.init(memUsage.value);
  DiskChart = echarts.init(diskUsage.value);
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
.stat-info__item {
  display: flex;
  height: 50px;
  box-shadow: 2px 2px 5px #ccc;
}
.stat-info__icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  color: white;
}
.stat-info__detail {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.stat-info__total {
  color: #0085d0;
  font-size: 18px;
  font-weight: bold;
}
.stat-info__title {
  color: #666;
  font-size: 12px;
  padding-top: 8px;
}
</style>