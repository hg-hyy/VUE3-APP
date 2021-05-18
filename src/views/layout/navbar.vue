<template>
  <div class="p-2 bg-dark text-white">
    <div class="container-fluid">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <a
          href="/"
          class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        >
          <svg class="bi me-2" width="40" height="32">
            <use xlink:href="#bootstrap" />
          </svg>
        </a>

        <ul
          class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
        >
          <li><a href="/v1/home" class="nav-link px-2 text-white">主页</a></li>
        </ul>

        <span class="navbar-text"> </span>
        <div class="dropdown">
          <button
            class="btn btn-outline-primary dropdown-toggle"
            type="button"
            id="auth"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="../../assets/logo.png"
              class="rounded-pills mx-2"
              alt="..."
              style="height: 24px; width: 24px"
            />{{ authdata.username ? authdata.username : user }}
          </button>
          <ul class="dropdown-menu" aria-labelledby="auth">
            <li>
              <a class="dropdown-item" href="javascript:" @click="signout"
                >退出</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import {
  defineProps,
  reactive,
  computed,
  watch,
  onMounted,
  toRefs,
  ref,
} from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();
const authdata = computed(() => store.state.authdata);

const user = localStorage.getItem("username");
function signout() {
  store.dispatch("signout", { username: "", isAuthenticated: 0 });
  store.dispatch("toast", {
    active: true,
    color: "primary",
    title: "退出登录：",
    time: new Date().toLocaleString(),
    msg: "退出登陆成功！",
  });
  router.push("/signin");
}
</script>
  
  <style>
</style>
  