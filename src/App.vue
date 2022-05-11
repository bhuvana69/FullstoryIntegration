<template>
  <div id="app">
    <AppMetrics/>
    <DropDownDemo />
  </div>
</template>

<script>
import AppMetrics from './components/AppMetrics.vue'
import DropDownDemo from './components/dropdown.vue'
import DropDownDemo from './components/TileInformation.vue'

export default {
  name: 'App',
  components: {
    AppMetrics,DropDownDemo
  }
}
</script>
