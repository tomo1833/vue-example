<script setup lang="ts">
import BaseTemplate from '@/components/templates/BaseTemplate.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'

import { useScreenStore } from '@/stores/screen'
import ErrorDialog from '@/components/organisms/ErrorDialog.vue'

const screenStore = useScreenStore()

const apiUrl = 'http://localhost:8000/anime/?format=json'

const responseData = ref(null)
const loadingFlag = ref<boolean>(false)

const dataLoaded = ref(false)

const fetchData = async () => {
  try {
    const response = await axios.get(apiUrl)
    responseData.value = response.data
  } catch (e) {
    screenStore.handleFetchError(e)
  } finally {
    dataLoaded.value = true
  }
}

onMounted(() => {
  fetchData()
})

const getAnimeTitle = (metadata) => {
  // metadata オブジェクトがあり、"schema:name" プロパティが存在するか確認
  if (metadata && metadata['schema:name'] && metadata['schema:name'][0]) {
    return metadata['schema:name'][0]
  }

  return 'タイトルなし'
}

const getActor = (metadata) => {
  // metadata オブジェクトがあり、"schema:name" プロパティが存在するか確認
  if (metadata && metadata['schema:actor'] && metadata['schema:actor'][0]) {
    return metadata['schema:actor'][0]
  }

  return 'なし'
}
</script>

<template>
  <BaseTemplate>
    <template v-slot:oslot>
      <div class="fixed top-1/2 left-1/2 bg-white">
        <ErrorDialog />
      </div>
    </template>
    <template v-slot:mslot>
      <div v-if="loadingFlag">
        <!-- responseData がオブジェクトであり、recor プロパティがあることを確認 -->
        <div class="p-4" v-for="(item, index) in responseData?.record || []" :key="index">
          <!-- metadata オブジェクトがあり、"schema:name" プロパティがあることを確認 -->

          <div class="w-full">
            <div
              class="border border-gray-400 lg:rounded-r p-4 flex flex-col justify-between leading-normal"
            >
              <div class="mb-8">
                <div class="text-gray-900 font-bold text-xl mb-2">
                  {{ getAnimeTitle(item.metadata) }}
                </div>
                <p class="text-gray-700 text-base">
                  {{ getActor(item.metadata) }}
                </p>
              </div>
              <div class="flex items-center"></div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <!-- ローディングメッセージやスピナーなどを表示することができます -->
        Loading...
      </div>
    </template>
  </BaseTemplate>
</template>
