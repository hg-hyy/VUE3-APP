<template>
  <div
    class="modal fade"
    :id="net"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticmodal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticmodal">{{ head }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row mb-3">
              <label for="device" class="col-sm-3 col-form-label"
                >网卡名称</label
              >
              <div class="col-sm-9">
                <input
                  type="ip"
                  class="form-control"
                  id="device"
                  v-model="data.device"
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="ip" class="col-sm-3 col-form-label">IP地址</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="ip"
                  v-model="data.ip"
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="netmask" class="col-sm-3 col-form-label"
                >子网掩码</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="netmask"
                  v-model="data.netmask"
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="gateway" class="col-sm-3 col-form-label">网关</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="gateway"
                  v-model="data.gateway"
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="dns" class="col-sm-3 col-form-label">DNS</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="dns"
                  v-model="data.dns1"
                  autocomplete="off"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="emit('confirm', data)"
          >
            确定
          </button>
          <button
            type="button"
            class="btn btn-danger"
            data-bs-dismiss="modal"
            @click="cancle"
          >
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmit } from "vue";

const props = defineProps({
  net: String,
  head: String,
  data: Object,
});

const emit = defineEmit({
  confirm: Object,
});
</script>