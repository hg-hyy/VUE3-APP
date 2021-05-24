<template>
  <Vtitle head="动态组件" />
  <div class="min-vh-80 mx-3 shadow-lg p-3 mb-5 bg-body rounded">
    <!-- <div class="vh-100">Height 100vh</div> -->
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      :class="['btn mb-3 g-1', { 'btn-info': currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <keep-alive>
      <component :is="currentTabComponent" />
    </keep-alive>
  </div>
</template>
<script setup>
import { computed, ref, reactive } from "vue";
import tabhome from "../../components/dyn/tabhome.vue";
import tabposts from "../../components/dyn/tabposts.vue";
import tabarchive from "../../components/dyn/tabarchive.vue";
import Vtitle from "../../components/Vtitle.vue";
const currentTab = ref("tabhome");
const tabs = reactive(["tabhome", "tabposts", "tabarchive"]);
const tabComponents = {
  tabhome: tabhome,
  tabposts: tabposts,
  tabarchive: tabarchive,
};
const currentTabComponent = computed(() => tabComponents[currentTab.value]);
</script>
