<template>
  <table class="table table-bordered border-info">
    <thead>
      <tr>
        <th scope="col">序号</th>
        <th scope="col">姓名</th>
        <th scope="col">年龄</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(v, k) in tabledata" :key="k">
        <th scope="row">{{ k + 1 + pagesize * (currentPage - 1) }}</th>
        <td v-for="(v1, k1) in v" :key="k1">{{ v1 }}</td>
      </tr>
    </tbody>
  </table>
  <nav>
    <ul class="pagination d-flex justify-content-end">
      <li class="page-item">
        <span class="page-link">共 {{ pagenums }} 页</span>
      </li>
      <li class="page-item" v-if="layout">
        <select
          v-model="pagesize"
          class="form-select form-select-md text-primary"
        >
          <option v-for="(v, k) in pagesizes" :value="v.value" :key="k">
            {{ v.text }}
          </option>
        </select>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          href="#"
          @click="currentPage -= 1"
          v-if="currentPage > 1"
          >上一页</a
        >
      </li>
      <li
        class="page-item"
        :class="currentPage == v ? 'active' : ''"
        v-for="v in pagearray"
        :key="v"
        @click="pagechange(v)"
      >
        <a class="page-link" href="#">
          {{ v }}
        </a>
      </li>

      <li class="page-item">
        <a
          class="page-link"
          href="#"
          @click="currentPage += 1"
          v-if="currentPage < pagenums"
          >下一页</a
        >
      </li>
      <template v-if="layout">
        <li class="page-item">
          <span class="page-link">前往</span>
        </li>
        <li class="page-item">
          <input
            class="form-control text-primary"
            style="width: 50px"
            v-model.lazy.number="currentPage"
          />
        </li>
        <li class="page-item">
          <span class="page-link">页</span>
        </li>
      </template>
    </ul>
  </nav>
</template>
<script setup>
import { defineProps, ref, computed, toRefs, watch, reactive } from "vue";

const props = defineProps({
  pagenum: Number, //每页条数
  pagesizes: Array, //每页条数选项
  data: Array, //总条数
  layout: String, //布局
});
const { data, pagenum, layout } = { ...toRefs(props) };
const layout_style = layout.value.split(",");
const currentPage = ref(1);
const pagesize = ref(3);
pagesize.value = pagenum.value;
const tabledata = computed(() =>
  data.value.slice(
    (currentPage.value - 1) * pagesize.value,
    currentPage.value * pagesize.value
  )
);
const pagenums = computed(() => Math.ceil(data.value.length / pagesize.value));
const maxpagenum = ref(7);

const aa = computed(() => {
  if (pagenums.value > maxpagenum.value) {
    if (
      currentPage.value >= maxpagenum.value - 2 &&
      pagenums.value - currentPage.value > 3
    ) {
      return [
        1,
        "<<",
        currentPage.value - 2,
        currentPage.value - 1,
        currentPage.value,
        currentPage.value + 1,
        currentPage.value + 2,
        ">>",
        pagenums.value,
      ];
    } else if (pagenums.value - currentPage.value <= 3) {
      return [
        1,
        "<<",
        pagenums.value - 5,
        pagenums.value - 4,
        pagenums.value - 3,
        pagenums.value - 2,
        pagenums.value - 1,
        pagenums.value,
      ];
    } else {
      return [1, 2, 3, 4, 5, 6, ">>", pagenums.value];
    }
  } else {
    return pagenums.value;
  }
});
function pagechange(v) {
  if (v == ">>") {
    currentPage.value += 1;
  } else if (v == "<<") {
    currentPage.value -= 1;
  } else {
    currentPage.value = v;
  }
}

const pagearray = computed(() => {
  const halfPagerCount = (maxpagenum.value - 1) / 2;
  let showPrevMore = false;
  let showNextMore = false;

  if (pagenums.value > maxpagenum.value) {
    if (currentPage.value > maxpagenum.value - halfPagerCount) {
      showPrevMore = true;
    }

    if (currentPage.value < pagenums.value - halfPagerCount) {
      showNextMore = true;
    }
  }
  let array = [];
  if (showPrevMore && !showNextMore) {
    array = [
      1,
      "<<",
      pagenums.value - 5,
      pagenums.value - 4,
      pagenums.value - 3,
      pagenums.value - 2,
      pagenums.value - 1,
      pagenums.value,
    ];
  } else if (!showPrevMore && showNextMore) {
    array = [1, 2, 3, 4, 5, 6, ">>", pagenums.value];
  } else if (showPrevMore && showNextMore) {
    array = [
      1,
      "<<",
      currentPage.value - 2,
      currentPage.value - 1,
      currentPage.value,
      currentPage.value + 1,
      currentPage.value + 2,
      ">>",
      pagenums.value,
    ];
  } else {
    for (let i = 2; i < pagenums.value; i++) {
      array = pagenums.value;
    }
  }
  return array;
});

watch([currentPage, pagesize], ([foo, bar], [prevFoo, prevBar]) => {
  if (currentPage.value < 1) {
    currentPage.value = 1;
  }

  if (foo > pagenums.value) {
    // currentPage.value = 1;
    currentPage.value = Math.ceil((prevBar * prevFoo) / bar);
  }
});
</script>