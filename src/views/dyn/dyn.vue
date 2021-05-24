<template>
  <div class="min-vh-100">
    <div class="w-25 p-3 .bg-success.bg-gradient">Width 25%</div>
    <div class="w-50 p-3" style="background-color: #eee">Width 50%</div>
    <div class="w-75 p-3" style="background-color: #eee">Width 75%</div>
    <div class="w-100 p-3" style="background-color: #eee">Width 100%</div>
    <div class="w-auto p-3" style="background-color: #eee">Width auto</div>

    <div
      class="w-50 p-3"
      style="height: 100px; background-color: rgba(255, 0, 0, 0.1)"
    >
      <div
        class="h-25 d-inline-block"
        style="width: 120px; background-color: rgba(0, 0, 255, 0.1)"
      >
        Height 25%
      </div>
      <div
        class="h-50 d-inline-block"
        style="width: 120px; background-color: rgba(0, 0, 255, 0.1)"
      >
        Height 50%
      </div>
      <div
        class="h-75 d-inline-block"
        style="width: 120px; background-color: rgba(0, 0, 255, 0.1)"
      >
        Height 75%
      </div>
      <div
        class="h-100 d-inline-block"
        style="width: 120px; background-color: rgba(0, 0, 255, 0.1)"
      >
        Height 100%
      </div>
      <div
        class="h-auto d-inline-block"
        style="width: 120px; background-color: rgba(0, 0, 255, 0.1)"
      >
        Height auto
      </div>
    </div>

    <!-- <div class="vh-100">Height 100vh</div> -->
    <div id="dynamic-component-demo" class="demo">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['btn mb-3 g-1', { 'btn-info': currentTab === tab }]"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>
      <keep-alive>
        <component :is="currentTabComponent" class="tab" />
      </keep-alive>
    </div>
  </div>
</template>
<script setup>
import { computed, ref, reactive } from "vue";
import tabhome from "../../components/dyn/tabhome.vue";
import tabposts from "../../components/dyn/tabposts.vue";
import tabarchive from "../../components/dyn/tabarchive.vue";
const currentTab = ref("tabhome");
const tabs = reactive(["tabhome", "tabposts", "tabarchive"]);
const tabComponents = {
  tabhome: tabhome,
  tabposts: tabposts,
  tabarchive: tabarchive,
};
const currentTabComponent = computed(() => tabComponents[currentTab.value]);
</script>
<style scoped>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.demo-tab {
  padding: 10px;
}
</style>
