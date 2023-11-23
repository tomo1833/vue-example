<script setup lang="ts">
import VueEvchart from '@/components/atoms/VueEchart.vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  LegendComponent,
  DatasetComponent,
  GridComponent
} from 'echarts/components'

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  LegendComponent,
  DatasetComponent,
  GridComponent
])

const props = defineProps({
  /**
   * v-chartタグのclass.
   */
  customClass: { type: String, required: false },

  /**
   * グラフタイトル
   */
  titleText: { type: String, required: false, default: 'タイトル' },

  /**
   * 凡例
   */
  paramLegend: { type: Array, required: false, default: () => ['凡例'] as string[] },

  /**
   * 横軸
   */
  paramXAxis: { type: Array, required: false, default: () => ['データ1', 'データ2'] as string[] },

  /**
   * データ
   */
  paramDate: {
    type: Array,
    required: false,
    default: () => [{ name: 'データ', type: 'line', data: [1, 2] }] as object[]
  }
})

const option = {
  title: {
    text: props.titleText
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: props.paramLegend
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  calculable: true,
  xAxis: [
    {
      data: props.paramXAxis
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        formatter: '{value}'
      }
    }
  ],
  series: props.paramDate
}
</script>

<template>
  <VueEvchart :class="props.customClass" :option="option" />
</template>
