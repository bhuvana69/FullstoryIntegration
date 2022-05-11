<template>
  <div id="app">
    <div class="row" style="margin:10px">
      <div class="col-sm-12 btn btn-info"> Select a User to view the Metrics !! </div>
    </div>
    <div class=" row col-sm-12">
      <div class="col-sm-4"></div>
      <div class="col-sm-4">
        <select class="form-control" @change="changevalue($event)">
          <option value="" selected disabled>Select Value</option>
          <option v-for="data in rowData" :value="data.Id" :key="data.Id">{{ data.Name }}</option>
        </select>
      </div>
      <div class="col-sm-4" ></div>
    </div>
    <br>
    <br>
    <p v-if="seen">
      <span>Selected Value: <b> {{ selectedvalue  }}</b>
      </span>
    </p>
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'DropDownDemo',
  data() {
    return {
      selectedvalue: 'No Value Selected',
      seen: false,
      rowData: [{
        Name: "User 1",
      }, {
        Name: "User 2",
      }, {
        Name: "User 3",
      }, {
        Name: "User 4",
      }, {
        Name: "User 5",
      }, {
        Name: "User 6",
      }, {
        Name: "User 7",
      }, {
        Name: "User 8",
      }]
    }
  },
  methods: {
    changevalue(event) {
      this.selectedvalue = event.target.options[event.target.options.selectedIndex].text
      console.log(this.selectedvalue)
      this.seen = true;
    }
  }
}
</script>