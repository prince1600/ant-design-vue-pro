<template>
  <div style="width: 50%; height: 300px">
    <Chart style="width: 100%; height: 100%" :option="chartOption" />
  </div>
</template>

<script>
import Chart from '@/components/charts.vue'
import random from 'lodash/random'
export default {
  components: { Chart },
  data() {
    return {
      chartOption: {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    }
  },
  created() {
    this.interval = setInterval(() => {
      this.chartOption.series[0].data = this.chartOption.series[0].data.map(n => random(100))
      this.chartOption = { ...this.chartOption } // 触发子组件watch: chartOption
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
    this.interval = null
  }
}
</script>

<style lang="less" scoped></style>
