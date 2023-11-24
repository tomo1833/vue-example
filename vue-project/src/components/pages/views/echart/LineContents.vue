<script setup lang="ts">
import axios from 'axios'
import { useLineStore } from '@/stores/line'
import { useScreenStore } from '@/stores/screen'

import { ref, onMounted } from 'vue'
import LineFunction from '@/components/organisms/echart/LineFunction.vue'
import BaseTemplate from '@/components/templates/BaseTemplate.vue'
import ErrorDialog from '@/components/organisms/ErrorDialog.vue'

const lineStore = useLineStore()
const screenStore = useScreenStore()

const apiUrl = 'http://localhost:8000/line/?format=json&projectid=123'

const dataLoaded = ref(false)

const fetchData = async () => {
  try {
    const response = await axios.get(apiUrl)
    lineStore.setLineData(response.data)
  } catch (e) {
    screenStore.handleFetchError(e)
  } finally {
    dataLoaded.value = true
  }
}

onMounted(fetchData)
</script>

<template>
  <BaseTemplate>
    <template v-slot:oslot>
      <div class="fixed top-1/2 left-1/2 bg-white">
        <ErrorDialog />
      </div>
    </template>
    <template v-slot:mslot>
      <div v-if="dataLoaded && !screenStore.errorInfo.errorFlag">
        <LineFunction />
      </div>
      <div v-else-if="!dataLoaded && !screenStore.errorInfo.errorFlag">Loading...</div>
    </template>
  </BaseTemplate>
</template>
