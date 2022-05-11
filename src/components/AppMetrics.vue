<template>
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
        appMetricsData: appMetricsData
      }
    },
    mounted() {
        const ctx = document.getElementById('ApplicationMetrics')
        new Chart(ctx, this.appMetricsData);
      }
}
</script>