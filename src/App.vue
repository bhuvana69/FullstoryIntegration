<template>
  <ion-header style="margin-bottom: 10px;">
    <DropDownDemo />
    <div style="padding-bottom: 10px">
      <ion-button> <router-link to="/home" style="text-decoration: none; color:#fff">User Trends</router-link> </ion-button>
      <ion-button> <router-link to="/about" style="text-decoration: none; color:#fff">Session Replay</router-link></ion-button>
     <!--<ion-button><router-link :to="{ name: 'Cart', params: { payment_method: 'cod' } }">test</router-link></ion-button>-->
    </div>
    </ion-header>
  <router-view/>
</template>

<script>
import {  IonButton, IonHeader } from '@ionic/vue';
import DropDownDemo from './components/dropdown.vue'

export default {
  name: 'App',
  components: {
     IonButton, IonHeader,DropDownDemo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>



<!--
<template>
  <div id="app">
    <AppMetrics/>
    <DropDownDemo />
  </div>
</template>

<script>
import AppMetrics from './components/AppMetrics.vue'
import DropDownDemo from './components/dropdown.vue'

export default {
  name: 'App',
  components: {
    AppMetrics,DropDownDemo
  }
}
</script>
-->
