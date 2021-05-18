<template>
  <div class="p-2 bg-dark text-white">
    <div class="container-fluid">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <ul
          class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
        >
          <li>
            <a
              href="/"
              class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg class="bi me-2" width="32" height="32">
                <use xlink:href="#home" /></svg
              >主页
            </a>
          </li>
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
          <ul
            class="dropdown-menu dropdown-menu-end p-1 mt-2"
            aria-labelledby="auth"
            style="min-width: 100px"
          >
            <li>
              <a class="dropdown-item" href="javascript:" @click="signout"
                ><svg class="bi me-2" width="20" height="20">
                  <use xlink:href="#exit" /></svg
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
import { computed } from "vue";
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
  
<style scoped>
li > a:hover {
  background-color: blueviolet;
}
</style>
  