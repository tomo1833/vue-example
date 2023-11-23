<script setup lang="ts">
import LineEchart from '@/components/molecuels/echart/LineEchart.vue'
import { useLineStore } from '@/stores/line'

const lineStore = useLineStore()
</script>

<template>
  <LineEchart
    titleText="折れ線グラフ"
    :paramLegend="['凡例1']"
    :paramXAxis="lineStore.getXAxis()"
    :paramDate="lineStore.getLineData()"
  />
</template>
