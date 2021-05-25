<template>
  <div class="form-signin" id="signin">
    <form>
      <img
        class="img-thumbnail rounded-pill rounded-0"
        src="../../static/pic/logo.jpg"
        alt=""
        style="width: 128px"
      />
      <!-- <h1 class="h3 mb-3 fw-normal">系统运维工具</h1> -->

      <div class="form-floating mt-3">
        <input
          type="text"
          class="form-control"
          v-model="formdata.data.username"
          placeholder="name@example.com"
          autocomplete="off"
        />
        <label for="floatingInput">用户名：</label>
      </div>
      <div class="form-floating mt-2">
        <input
          type="password"
          class="form-control"
          v-model="formdata.data.password"
          placeholder="Password"
          autocomplete="off"
        />
        <label for="floatingPassword">密 码：</label>
      </div>

      <div class="checkbox mb-3">
        <label> <input type="checkbox" value="remember-me" /> 记住密码 </label>
      </div>
      <button
        class="w-100 btn btn-lg btn-primary"
        type="button"
        @click="signin"
      >
        登录
      </button>
      <p class="mt-5 mb-3 text-muted">&copy; 2021–2025</p>
    </form>
  </div>
</template>
<script setup>
import { defineProps, reactive, computed, watch, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { usePostRef } from "../../utils/index";
import { login } from "../../api/api";
defineProps({
  data: {
    username: String,
    password: String,
  },
});
const router = useRouter();
const route = useRoute();
const store = useStore();
const authdata = computed(() => store.state.authdata);
const formdata = reactive({ data: { username: "", password: "" } });
const AUTHURL = "/d_sysop/v1.0/login ";
const toast = ref();
function signin() {
  if (localStorage.getItem("username") || authdata.value.isAuthenticated) {
    router.push("/v1/home");
  }
  if (formdata.data.username === "") {
    store.dispatch("toast", {
      active: true,
      color: "danger",
      title: "登录：",
      time: new Date().toLocaleString(),
      msg: "用户名不能为空！",
    });
    return false;
  } else if (formdata.data.password === "") {
    store.dispatch("toast", {
      active: true,
      color: "danger",
      title: "登录：",
      time: new Date().toLocaleString(),
      msg: "密码不能为空！",
    });
    return false;
  }

  usePostRef({}, AUTHURL, formdata).then((res) => {
    if (!res.value.isAuthenticated) {
      store.dispatch("toast", {
        active: true,
        color: "success",
        title: "登录：",
        time: new Date().toLocaleString(),
        msg: `登陆失败！`,
      });
    } else {
      store.dispatch("signin", res);
      store.dispatch("toast", {
        active: true,
        color: "success",
        title: "登录：",
        time: new Date().toLocaleString(),
        msg: `welcome ${res.value.username}`,
      });
    }
  });
}

watch(
  () => authdata.value.isAuthenticated,
  (auth) => {
    if (auth) {
      localStorage.setItem("username", authdata.value.username);
      localStorage.setItem("authtoken", authdata.value.authtoken);
      router.push("/v1/home");
    }
  }
);

function showtoast() {
  toast.value = !toast.value;
}

onMounted(() => {
  if (
    localStorage.getItem("username") === "admin" ||
    authdata.value.isAuthenticated
  ) {
    router.push("/v1/home");
  }
});

// if (localStorage.getItem("username") && authdata.value.isAuthenticated) {
//   router.push("/v1/dashboard");
// }
</script>
<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  text-align: center;
  margin-top: 254px;
}
</style>
