<script>
//Importing Line class from the vue-chartjs wrapper
import { Line } from 'vue-chartjs'

//Exporting this so it can be used in other components
export default {
  extends: Line,
  data () {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: ['06-03-2020', '06-04-2020', '06-05-2020', '06-06-2020', '06-07-2020'],
        datasets: [
          {
            label: 'Funds Usage',
            backgroundColor: '#2CC45E',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            //Data to be represented on y-axis
            data: [0, 401, 0, 1904, 0]
          },
        ]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        tooltips: {
          callbacks: {
            label: function(tooltipItem) {
                return tooltipItem.label + ': $' + Number(tooltipItem.yLabel)
            }
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              callback: function(value) {
                return '$' + value;
              },
              display: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    //renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options)
  }
}
</script>
