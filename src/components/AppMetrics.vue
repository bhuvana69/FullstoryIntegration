<template>
  <div style="height:60vh; width:80vw;margin: 0 auto;top: 200px;">
      <canvas id="ApplicationMetrics"></canvas>
    </div>
</template>

<script>
import usersData from "../userData.json";
import Chart from 'chart.js'

export default {
  data() {
    return {
      users: usersData,
      detailsTab: 0,
      timelineTab: 0,
      qualitySummaryTab: 0,
      transcript: 0,
      audit: 0,
      newEvaluation: 0,
      completedEvaluation: 0,
      screenRecording: 0,
      chartData:[],
      loadTimechartData:[],

      detailsTabLoadCount: 0,
      detailsTabTotalLoadTime: 0,
      detailsTabAvgLoadTime: 0,
      timelineTabLoadCount: 0,
      timelineTabTotalLoadTime: 0,
      timelineTabAvgLoadTime: 0,
      qsTabLoadCount: 0,
      qsTabTotalLoadTime: 0,
      qsTabAvgLoadTime: 0,
      transcriptTabLoadCount: 0,
      transcriptTabTotalLoadTime: 0,
      transcriptTabAvgLoadTime: 0,
      auditTabLoadCount: 0,
      auditTabTotalLoadTime: 0,
      auditTabAvgLoadTime: 0,
      newEvalTabLoadCount: 0,
      newEvalTabTotalLoadTime: 0,
      newEvalTabAvgLoadTime: 0,
      compEvalTabLoadCount: 0,
      compEvalTabTotalLoadTime: 0,
      compEvalTabAvgLoadTime: 0,
      screenTabLoadCount: 0,
      screenTabTotalLoadTime: 0,
      screenTabAvgLoadTime: 0,
    };
  },
  mounted: function () {
      var detailsTab = 0;
      var timelineTab = 0;
      var qualitySummaryTab = 0;
      var transcript = 0;
      var audit = 0;
      var newEvaluation = 0;
      var completedEvaluation = 0;
      var screenRecording = 0;

      var detailsTabLoadCount = 0;
      var detailsTabTotalLoadTime = 0;
      // var detailsTabAvgLoadTime = 0;
      var timelineTabLoadCount = 0;
      var timelineTabTotalLoadTime = 0;
      // var timelineTabAvgLoadTime = 0;
      var qsTabLoadCount = 0;
      var qsTabTotalLoadTime = 0;
      // var qsTabAvgLoadTime = 0;
      var transcriptTabLoadCount = 0;
      var transcriptTabTotalLoadTime = 0;
      // var transcriptTabAvgLoadTime = 0;
      var auditTabLoadCount = 0;
      var auditTabTotalLoadTime = 0;
      // var auditTabAvgLoadTime = 0;
      var newEvalTabLoadCount = 0;
      var newEvalTabTotalLoadTime = 0;
      // var newEvalTabAvgLoadTime = 0;
      var compEvalTabLoadCount = 0;
      var compEvalTabTotalLoadTime = 0;
      // var compEvalTabAvgLoadTime = 0;
      var screenTabLoadCount = 0;
      var screenTabTotalLoadTime = 0;
      // var screenTabAvgLoadTime = 0;

    this.users.map(function(u) {
        if(u.EventType==="navigate" && u.PageUrl.includes("details")){
          console.log(detailsTab++);
        }

        if(u.EventType==="load" && u.PageUrl.includes("details")){
          console.log(detailsTabLoadCount++);
          detailsTabTotalLoadTime = detailsTabTotalLoadTime + u.LoadEventTime;
        }

        if(u.EventType==="navigate" && u.PageUrl.includes("timeline")){
          console.log(timelineTab++);
        }

        if(u.EventType==="load" && u.PageUrl.includes("timeline")){
          console.log(timelineTabLoadCount++);
          timelineTabTotalLoadTime = timelineTabTotalLoadTime + u.LoadEventTime;
        }

        if(u.EventType==="navigate" && u.PageUrl.includes("qualitySummary")){
          console.log(qualitySummaryTab++);
        }

        if(u.EventType==="load" && u.PageUrl.includes("qualitySummary")){
          console.log(qsTabLoadCount++);
          qsTabTotalLoadTime = qsTabTotalLoadTime + u.LoadEventTime;
        }

        if(u.EventType==="navigate" && u.PageUrl.includes("transcript")){
          console.log(transcript++);
        }

        if(u.EventType==="load" && u.PageUrl.includes("transcript")){
          console.log(transcriptTabLoadCount++);
          transcriptTabTotalLoadTime = transcriptTabTotalLoadTime + u.LoadEventTime;
        }

        if(u.EventType==="navigate" && u.PageUrl.includes("audit")){
          console.log(audit++);
        }

        if(u.EventType==="load" && u.PageUrl.includes("audit")){
          console.log(auditTabLoadCount++);
          auditTabTotalLoadTime = auditTabTotalLoadTime + u.LoadEventTime;
        }

        if(u.EventType==="navigate" && u.PageUrl.includes("qualitySummary/evaluation/new")){
          console.log(newEvaluation++);
        }

        if(u.EventType==="load" && u.PageUrl.includes("qualitySummary/evaluation/new")){
          console.log(newEvalTabLoadCount++);
          newEvalTabTotalLoadTime = newEvalTabTotalLoadTime + u.LoadEventTime;
        }

        if(u.EventType==="navigate" && u.PageUrl.includes("?evaluationId")){
          console.log(completedEvaluation++);
        }

        if(u.EventType==="load" && u.PageUrl.includes("?evaluationId")){
          console.log(compEvalTabLoadCount++);
          compEvalTabTotalLoadTime = compEvalTabTotalLoadTime + u.LoadEventTime;
        }

        if(u.EventType==="navigate" && (u.PageUrl.includes("screen-recordings") || u.PageUrl.includes("screenrecordings"))){
          console.log(screenRecording++);
        }

        if(u.EventType==="load" && (u.PageUrl.includes("screen-recordings") || u.PageUrl.includes("screenrecordings"))){
          console.log(screenTabLoadCount++);
          screenTabTotalLoadTime = screenTabTotalLoadTime + u.LoadEventTime;
        }
      });
      this.detailsTab =  detailsTab;
      this.timelineTab =  timelineTab;
      this.qualitySummaryTab =  qualitySummaryTab;
      this.transcript =  transcript;
      this.audit =  audit;
      this.newEvaluation =  newEvaluation;
      this.completedEvaluation =  completedEvaluation;
      this.screenRecording =  screenRecording;

      
      this.chartData.push(detailsTab, timelineTab, qualitySummaryTab, transcript, audit, newEvaluation, completedEvaluation, screenRecording)
      console.log(this.chartData)
      
      this.detailsTabLoadCount = detailsTabLoadCount;
      this.detailsTabTotalLoadTime = detailsTabTotalLoadTime;
      if (detailsTabLoadCount != 0) {
        this.detailsTabAvgLoadTime = ((detailsTabTotalLoadTime / detailsTabLoadCount) / 1000).toFixed(0);
      } else {
        this.detailsTabAvgLoadTime = detailsTabLoadCount;
      }
      this.timelineTabLoadCount = timelineTabLoadCount;
      this.timelineTabTotalLoadTime = timelineTabTotalLoadTime;
      if (timelineTabLoadCount != 0) {
        this.timelineTabAvgLoadTime = ((timelineTabTotalLoadTime / timelineTabLoadCount) / 1000).toFixed(0);
      } else {
        this.timelineTabAvgLoadTime = timelineTabLoadCount;
      }
      this.qsTabLoadCount = qsTabLoadCount;
      this.qsTabTotalLoadTime = qsTabTotalLoadTime;
      if (qsTabLoadCount != 0) {
        this.qsTabAvgLoadTime = ((qsTabTotalLoadTime / qsTabLoadCount) / 1000).toFixed(0);
      } else {
        this.qsTabAvgLoadTime = qsTabLoadCount;
      }
      this.transcriptTabLoadCount = transcriptTabLoadCount;
      this.transcriptTabTotalLoadTime = transcriptTabTotalLoadTime;
      if (transcriptTabLoadCount != 0) {
        this.transcriptTabLoadCount = ((transcriptTabTotalLoadTime / transcriptTabLoadCount) / 1000).toFixed(0);
      } else {
        this.transcriptTabLoadCount = transcriptTabLoadCount;
      }
      this.auditTabLoadCount = auditTabLoadCount;
      this.auditTabTotalLoadTime = auditTabTotalLoadTime;
      if (auditTabLoadCount != 0) {
        this.auditTabAvgLoadTime = ((auditTabTotalLoadTime / auditTabLoadCount) / 1000).toFixed(0);
      } else {
        this.auditTabAvgLoadTime = auditTabLoadCount;
      }
      this.newEvalTabLoadCount = newEvalTabLoadCount;
      this.newEvalTabTotalLoadTime = newEvalTabTotalLoadTime;
      if (newEvalTabLoadCount != 0) {
        this.newEvalTabAvgLoadTime = ((newEvalTabTotalLoadTime / newEvalTabLoadCount) / 1000).toFixed(0);
      } else {
        this.newEvalTabAvgLoadTime = newEvalTabLoadCount;
      }
      this.compEvalTabLoadCount = compEvalTabLoadCount;
      this.compEvalTabTotalLoadTime = compEvalTabTotalLoadTime;
      if (compEvalTabLoadCount != 0) {
        this.compEvalTabAvgLoadTime = ((compEvalTabTotalLoadTime / compEvalTabLoadCount) / 1000).toFixed(0);
      } else {
        this.compEvalTabAvgLoadTime = compEvalTabLoadCount;
      }
      this.screenTabLoadCount = screenTabLoadCount;
      this.screenTabTotalLoadTime = screenTabTotalLoadTime;
      if (screenTabLoadCount != 0) {
        this.screenTabAvgLoadTime = ((screenTabTotalLoadTime / screenTabLoadCount) / 1000).toFixed(0);
      } else {
        this.screenTabAvgLoadTime = screenTabLoadCount;
      }

      this.loadTimechartData.push(this.detailsTabAvgLoadTime, this.timelineTabAvgLoadTime, this.qsTabAvgLoadTime, this.transcriptTabAvgLoadTime, this.auditTabAvgLoadTime, this.newEvalTabAvgLoadTime, this.compEvalTabAvgLoadTime, this.screenTabAvgLoadTime)
      console.log(this.loadTimechartData)

      const ctx = document.getElementById('ApplicationMetrics')
      new Chart(ctx, {
          type: "line",
          data: {
              labels: ["Details Tab", "Timeline Tab","Quality Summary Tab", "Transcript Tab", "Audit Tab", "New Evaluation", "Completed Evaluation", "Screen Recording Page"],
              datasets: [
                  {
                      label: "Number of Visits to URL",
                      data: this.chartData,
                      backgroundColor: "rgba(54,73,93,.5)",
                      borderColor: "#36495d",
                      borderWidth: 3
                  },
                  {
                      label: "Average load time per page",
                      data: this.loadTimechartData,
                      backgroundColor: "rgba(71, 183,132,.5)",
                      borderColor: "#47b784",
                      borderWidth: 3
                  }
              ]
          },
          options: {
              responsive: true,
              maintainAspectRatio: false,
              lineTension: 1,
              scales: {
                  yAxes: [
                      {
                          ticks: {
                              beginAtZero: false,
                              padding: 25
                          }
                      }
                  ]
              }
          }
      });
    },
};
</script>