<template>
  <nav class="navbar navbar-expand-lg bg-dark text-white" style="height: 60px">
    <div class="container-fluid">
      <a class="navbar-brand text-white" href="/"
        ><svg class="bi" width="24" height="24">
          <use xlink:href="#home" /></svg
        >Home</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navlink"
        aria-controls="navlink"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navlink">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
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
          <button type="button" class="btn btn-primary position-relative">
            Mails
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"
              >+99 <span class="visually-hidden">unread messages</span></span
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
  