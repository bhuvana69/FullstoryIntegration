<template>
  <select v-model="selectedValue" @change="onChange($event)">
    <option disabled value="">Please select one</option>
    <option v-for="item in userData" :key="item.id" :value="item.id">{{item.name}}</option>
  </select>
  <div class="position-absolute top-50 start-50 translate-middle" style="float:right; height:20vh; width:50vw">
      <canvas id="ApplicationMetrics"></canvas>
    </div>
</template>



<script>
import Chart from 'chart.js'
import appMetricsData from '../appMetricsData.js'

export default {
  name: 'AppMetrics',
  data() {
      return {
        appMetricsData: appMetricsData,
        visible: true,
        userData: [],
        selectedValue: null,
        eventsData:null,
        sessionData:null
      }
    },
    mounted() {
        const ctx = document.getElementById('ApplicationMetrics')
        new Chart(ctx, this.appMetricsData);
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
        console.log(this.eventsData);
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
        console.log(this.sessionData);
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
        console.log(this.userData);
      } catch (error) {
        console.log("Error", error);
      }
    },
    onChange(event) {
      const id= event.target.value;
      console.log(id)
      this.getData(id);
      this.getSessionUrl(id);
    }
  },
  created() {
    this.getUserData("");
  }
}
</script>