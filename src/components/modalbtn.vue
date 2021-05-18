<template>
  <button
    type="button"
    class="btn btn-outline-info btn-sm"
    data-bs-toggle="modal"
    :data-bs-target="'#' + id"
    @click="setid"
  >
    <slot></slot>
  </button>
</template>
<script setup>
import { defineProps } from "vue";
import { useStore } from "vuex";
const props = defineProps({
  id: String,
  accountid: String | Number,
});

const store = useStore();
const { accountid } = { ...props };
function setid() {
  store.dispatch("setensid", accountid);
}
</script>