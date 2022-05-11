
<template>
  
    <div class="container">
        <h1 class="p-3 text-center">User interaction Metrics</h1>
      <div id="app">
    <AppMetrics/>
  </div>

      
    </div>    
</template>

<script>
import usersData from "../assets/userData.json";
import AppMetrics from '../components/AppMetrics.vue'

export default {
  components: {
     AppMetrics
    
  },
  data() {
    return {
      users: usersData,
      visitedUsers: 0
    }
  },
  mounted: function () {
    var count = 0;
 this.users.map(function(u) {
          if( u.EventType==="navigate" && u.PageUrl==="https://localhost:4200/dca/#/engage/admin/interactions/04abfe1c-5003-446f-8246-aabb389154fc/details"){
           count++;
          }
        });
        this.visitedUsers =  count;
},
};
</script>

