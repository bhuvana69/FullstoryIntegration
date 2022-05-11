<template>
  <div id="app">
    <div class="row" style="margin:10px">
      <div class="col-sm-12 btn btn-info"> Select a User to view the Metrics !! </div>
    </div>
    <div class=" row col-sm-12">
      <div class="col-sm-4"></div>
      <div class="col-sm-4">
        <select class="form-control" @change="changevalue($event)">
          <option value="" selected disabled>Please Select a User </option>
          <option v-for="data in userData" :value="data.id" :key="data.id">{{ data.name }}</option>
        </select>
      </div>
      <div class="col-sm-4" ></div>
    </div>
    <br>
    <br>
    <p v-if="seen">
      <span>Showing Results For: <b> {{ selectedvalue  }}</b>
      </span>
    </p>
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import appMetricsData from "@/appMetricsData";
export default {
  name: 'DropDownDemo',
  data() {
    return {
      seen: false,
      appMetricsData: appMetricsData,
      visible: true,
      userData: [],
      selectedvalue: null,
      eventsData:null,
      sessionData:null
    }
  },
  methods: {
    async getData(userId) {
      let url = "https://export.fullstory.com/api/v1/export/userEvents?uid=" + userId;
      try {
        let response = await fetch(url, {
          method: 'GET',
          mode: "cors",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic by0xQTdSRVYtbmExL2pheWFzaHJlZS5zZXR0dUBnZW5lc3lzLmNvbTpC2CZ+TTicYlayLWKscPNXGVwgaDq75goz1fin6c3D1C4u/TK96N7G',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'Access-Control-Allow-Credentials': true,
          }
        });
        this.eventsData = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
    async getSessionUrl(userId) {
      let url = "https://api.fullstory.com/sessions/v2?uid=" + userId;
      try {
        let response = await fetch(url, {
          method: 'GET',
          mode: "cors",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic by0xQTdSRVYtbmExL2pheWFzaHJlZS5zZXR0dUBnZW5lc3lzLmNvbTpC2CZ+TTicYlayLWKscPNXGVwgaDq75goz1fin6c3D1C4u/TK96N7G',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'Access-Control-Allow-Credentials': true,
          }
        });
        this.sessionData = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
    constructJson(searchQuery) {
      let queryArray = [];
      let firstquery = {
        "type": "EXACT",
        "fields": [
          "state"
        ],
        "values": [
          "active",
          "inactive"
        ]
      };
      queryArray.push(firstquery);
      if (searchQuery) {
        let query2 = {
          "type": "QUERY_STRING",
          "fields": [
            "name",
            "email",
            "title",
            "department"
          ],
          "value": searchQuery
        }
        queryArray.push(query2);
      }
      let json = {
        "pageSize": 25,
        "pageNumber": 1,
        "query": queryArray,
        "sortOrder": "ASC",
        "sortBy": "name",
        "expand": [
          "images",
          "authorization",
          "team"
        ],
        "enforcePermissions": true
      }
      return json;
    },
    async getUserData(searchQuery) {
      try {
        let response = await fetch("https://apps.inindca.com/platform/api/v2/users/search", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer X7fk4eUy8xbWB7RxYGbHxTld_s8v_mOB--pCeBpdXD1FL7cvg-XksosXlj_nniUgNIsVcm3J0hJgOWcb2C21nQ',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'Access-Control-Allow-Credentials': true,
          },
          body: JSON.stringify(this.constructJson(searchQuery))
        });
        this.response = await response.json();
        this.userData = JSON.parse(JSON.stringify(this.response.results));
      } catch (error) {
        console.log("Error", error);
      }
    },
    changevalue(event) {
      this.seen = true;
      this.selectedvalue = event.target.options[event.target.options.selectedIndex].text
      const id = event.target.value;
      this.getData(id);
      this.getSessionUrl(id);
    }
  },
    created() {
      this.getUserData("");
    }
  }
</script>