<template>
  <router-view />
</template>
<script setup>
import { defineProps, reactive, computed, watch, onMounted } from "vue";
import { useStore } from "vuex";
defineProps({
  toast: {
    active: Boolean,
    title: String,
    time: Date,
    msg: String,
  },
});
const store = useStore();
const t = computed(() => store.state.toast);
</script>
<style></style>;
