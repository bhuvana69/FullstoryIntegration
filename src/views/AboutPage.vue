<template>
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
</template>



<script>
import sessionData from "../assets/sessionData.json";
import moment from 'moment'
export default {
  data() {
    return {
      sessions: sessionData.sessions,
    };
  },
  methods: {
    dateTime(value) {
    return moment.unix(value).format('dddd, MMMM Do, YYYY h:mm:ss A');
    },
  },
};
</script>
<style>
  @import '../assets/mystyle.css';
</style>
