<script setup lang="ts">
import VChart, { THEME_KEY } from 'vue-echarts'
import { provide, onBeforeMount } from 'vue'

const props = defineProps({
  /**
   * v-chartタグのclass.
   */
  customClass: { type: String, required: false },

  /**
   * v-chartタグのオプション.
   */
  paramOption: { type: Object, required: false, default: () => ({}) }
})

onBeforeMount(() => {
  provide(THEME_KEY, 'dark')
})
</script>

<template>
  <v-chart class="h-[800px]" :class="props.customClass" :option="paramOption" />
</template>
