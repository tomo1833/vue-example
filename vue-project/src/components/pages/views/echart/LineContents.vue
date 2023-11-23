<script setup lang="ts">
import axios from 'axios'
import { useLineStore } from '@/stores/line'
import { ref, onMounted } from 'vue'
import LineFunction from '@/components/organisms/echart/LineFunction.vue'

const lineStore = useLineStore()

const apiUrl = 'http://localhost:8000/line/?format=json&projectid=123'

const loadingFlag = ref(false)
const errorFlag = ref(false)
const errorMessage = ref('')

const fetchData = async () => {
  try {
    const response = await axios.get(apiUrl)
    lineStore.setLineData(response.data)
  } catch (e) {
    handleFetchError(e)
  } finally {
    loadingFlag.value = true
  }
}

const handleFetchError = (e) => {
  if (e.response) {
    handleResponseError(e.response.status)
  } else {
    errorMessage.value = 'ネットワークエラー'
    console.error('データの取得エラー:', e)
    errorFlag.value = true
  }
}

const handleResponseError = (status) => {
  switch (status) {
    case 403:
      errorMessage.value = '認証エラー'
      break
    case 400:
      errorMessage.value = 'パラメータエラー'
      break
    default:
      errorMessage.value = 'システムエラー'
  }
  console.error('データの取得エラー:', status)
  errorFlag.value = true
}

onMounted(fetchData)
</script>

<template>
  <div v-if="loadingFlag && !errorFlag">
    <LineFunction />
  </div>
  <div v-else-if="!loadingFlag && !errorFlag">Loading...</div>
  <div v-if="errorFlag">
    {{ errorMessage }}
  </div>
</template>
