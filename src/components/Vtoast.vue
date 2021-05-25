<template>
  <div class="position-fixed p-2 top-0 end-0" ref="toasts">
    <template v-for="(v, k) in t" :key="k">
      <div v-if="v.active" class="mt-3" @mouseenter="mlook">
        <div class="d-flex bg-warning">
          <div class="p-2 flex-fill bd-highlight">
            <img
              src="../assets/logo.png"
              class="rounded me-2"
              alt="..."
              style="width: 24px; height: 24px"
            />
          </div>
          <div class="p-2 flex-fill">
            <strong class="me-auto">{{ v.title }}</strong>
          </div>
          <div class="p-2 flex-fill">
            <small>{{ v.time }}</small>
          </div>
          <div class="p-2 flex-fill">
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              @click="close(k)"
            ></button>
          </div>
        </div>
        <div :class="'d-flex bg-' + v.color">
          <div class="p-2 flex-fill text-center" style="font-size: 1.5rem">
            {{ v.msg }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const t = computed(() => store.state.toast);
const toasts = ref(null);
function close(id) {
  //   t.value.shift(id);
  t.value.splice(id, 1);
}
const id = ref();
watch(
  () => t.value.length,
  () => {
    clearTimeout(id.value);
    id.value = setTimeout(() => {
      t.value.pop();
    }, 2000);
  }
);
onMounted(() => {
  // DOM元素将在初始渲染后分配给ref
  //   console.log(toasts.value); // <div>这是根元素</div>
});

function mlook() {
  clearTimeout(id.value);
}
</script>