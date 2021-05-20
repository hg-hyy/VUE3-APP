<template>
  <div id="app">
    <hr />
    <h2>Fetch Example</h2>
    <downloadexcel
      class="btn"
      :fetch="fetchData"
      :fields="json_fields"
      :before-generate="startDownload"
      :before-finish="finishDownload"
    >
      Download Excel
    </downloadexcel>
  </div>
</template>
  
  <script>
import downloadexcel from "vue-json-excel";
import axios from "axios";

export default {
  name: "App",
  components: {
    downloadexcel,
  },
  data() {
    return {
      json_fields: {
        "Complete name": "name",
        Date: "date",
      },
    };
  }, //data
  methods: {
    async fetchData() {
      const response = await axios.get(
        "https://holidayapi.com/v1/holidays?key=a4b2083b-1577-4acd-9408-6e529996b129&country=US&year=2017&month=09"
      );
      console.log(response);
      return response.data.holidays;
    },
    startDownload() {
      alert("show loading");
    },
    finishDownload() {
      alert("hide loading");
    },
  },
};
</script>
  
  