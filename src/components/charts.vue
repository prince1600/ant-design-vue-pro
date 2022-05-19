<template>
  <div ref="chart"></div>
</template>

<script>
import * as echarts from 'echarts'
import { addListener, removeListener } from 'resize-detector'
import debounce from 'lodash/debounce'

export default {
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  created() {
    this.resize = debounce(this.resize, 300)
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    this.chart = echarts.init(this.$refs.chart)
    addListener(this.$refs.chart, this.resize)

    // 指定图表的配置项和数据
    var option = this.option

    // 使用刚指定的配置项和数据显示图表。
    this.chart.setOption(option)
  },
  beforeDestroy() {
    removeListener(this.$refs.chart, this.resize)
    this.chart.dispose()
    this.chart = null
  },
  watch: {
    option(val) {
      this.chart.setOption(val)
    }
  },
  methods: {
    resize() {
      console.log('resize!')
      this.chart.resize()
    }
  }
}
</script>

<style></style>
