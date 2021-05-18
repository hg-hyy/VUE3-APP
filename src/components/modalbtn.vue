<template>
  <button
    type="button"
    class="btn btn-primary btn-sm"
    data-bs-toggle="modal"
    :data-bs-target="'#' + id"
    @click="setid"
  >
    <svg class="bi me-2" width="16" height="16">
      <use xlink:href="#edit" />
    </svg>
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