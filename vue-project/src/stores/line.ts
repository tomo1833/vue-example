import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLineStore = defineStore('line', () => {
  const lineDatas = ref<object>()

  function setLineData(data: object) {
    lineDatas.value = data
  }

  function getXAxis() {
    return lineDatas.value.map((obj) => Object.keys(obj)[0])
  }

  function getLineData() {
    const paramValues = lineDatas.value.map((obj) => Object.values(obj)[0])
    return [{ name: '折れ線データ', type: 'line', data: paramValues }]
  }

  return { lineDatas, setLineData, getXAxis, getLineData }
})
