<template> 
  <span style="text-align:'center'" v-if="sessions.length==0">
            <h2> No Session Found </h2>
  </span>
 <span style="text-align:'center'" v-if="sessions.length!=0">
  <h1>User Session Replay</h1>
 <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Created Time</th>
                    <th>Session Url</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="session in sessions" :key="session">
                    <td>{{dateTime(session.createdTime) }}</td>
                    <td><a :href="session.fsUrl">{{session.fsUrl}}</a></td>
                   
                </tr>
                
            </tbody>
        </table>
         </span>
</template>



<script>
// import sessionData from "../assets/sessionData.json";
import moment from 'moment'
export default {
  data() {
    return {
      sessions: [],
    };
  },
  mounted(){
    let url = "https://api.fullstory.com/sessions/v2?uid=" + this.userId;
     fetch(url, {
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
        }).then(res =>{
          if(!res.ok){
              // create error instance with HTTP status text
        const error = new Error(res.statusText);
        error.json = res.json();
        throw error;
          }
          return res.json();
        }).then(json=>{
        this.sessions = json.sessions});
  },
  methods: {
    dateTime(value) {
    return moment.unix(value).format('dddd, MMMM Do, YYYY h:mm:ss A');
    },
  },
   created(){
      //  console.log('state', this.$store);
      this.userId=this.$store.getters.userId;
    }
};
</script>
<style>
  @import '../assets/mystyle.css';
</style>
