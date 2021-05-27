<template>
  <nav class="navbar navbar-expand-lg bg-dark" style="height: 60px">
    <div class="container-fluid ms-5">
      <a class="navbar-brand text-white" href="/">
        <svg class="bi" width="24" height="24">
          <use xlink:href="#home" /></svg
        >Home
      </a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 bg-dark">
          <li class="nav-item">
            <a class="nav-link text-white" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-white"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-offset="20,20"
            >
              报警管理
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li>
                <router-link
                  to="/v1/warnManage/currentwarn"
                  class="link-dark dropdown-item"
                >
                  <svg class="bi me-2" width="16" height="16">
                    <use xlink:href="#bell" />
                  </svg>
                  <span class="fs-6">当前报警</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/v1/warnManage/unHandlewarn"
                  class="link-dark dropdown-item"
                >
                  <svg class="bi me-2" width="16" height="16">
                    <use xlink:href="#bell" />
                  </svg>
                  <span class="fs-6">未处理报警</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/v1/warnManage/handledwarn"
                  class="link-dark dropdown-item"
                >
                  <svg class="bi me-2" width="16" height="16">
                    <use xlink:href="#bell" />
                  </svg>
                  <span class="fs-6">已处理报警</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>

        <form class="d-flex mx-1">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>

        <div class="dropdown me-1">
          <button
            type="button"
            class="btn btn-outline-primary position-relative me-1"
          >
            Mails
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info"
              >+66 <span class="visually-hidden">unread messages</span></span
            >
          </button>

          <button
            class="btn btn-outline-primary dropdown-toggle"
            type="button"
            id="auth"
            data-bs-offset="0,20"
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
            class="dropdown-menu dropdown-menu-end p-1"
            style="min-width: 100px"
          >
            <li id="logout">
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
  </nav>
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
#logout a:hover {
  background-color: blueviolet;
}
a {
  color: cadetblue;
}
</style>
  