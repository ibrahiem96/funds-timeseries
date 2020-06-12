<template>
  <section class="container">
    <h1>Donation Goal Status</h1>
    <div class="columns">
      <!-- <div class="column">
        <h3>Line Chart</h3>
        <line-chart></line-chart>
      </div> -->
      <div class="column">
        <h3>Goal: $7,000</h3>
        <bar-chart></bar-chart>
      </div>
    </div>
    <!-- <div class="columns">
      <div class="column">
        <h3>Bubble Chart</h3>
        <bubble-chart></bubble-chart>
      </div>
      <div class="column">
        <h3>Reactivity - Live update upon change in datasets</h3>
        <reactive :chart-data="datacollection"></reactive>
        <button class="button is-primary" @click="fillData()">Randomize</button>
      </div>
    </div> -->
  </section>
</template>

<script>
// import LineChart from "@/components/UsageChart";
import BarChart from "@/components/GoalChart";
// import BubbleChart from "@/components/BubbleChart";
// import Reactive from "@/components/Reactive";

export default {
  name: "FundsGoal",
  components: {
    // LineChart
    BarChart
    // BubbleChart,
    // Reactive
  },
  data() {
    return {
      // instantiating datacollection with null
      datacollection: null,
    };
  },
  created() {
    //anytime the vue instance is created, call the fillData() function.
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        // Data for the y-axis of the chart
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            // Data for the x-axis of the chart
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
            ],
          },
        ],
      }
    },
    getRandomInt() {
      // JS function to generate numbers to be used for the chart
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
  },
}
</script>
