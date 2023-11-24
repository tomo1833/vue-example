<script setup lang="ts">
import { useScreenStore } from '@/stores/screen'

const screenStore = useScreenStore()
</script>

<template>
  <div
    v-show="screenStore.errorInfo.errorFlag"
    class="absolute top-0 left-0 w-full h-full bg-slate-600 opacity-75"
  >
    <slot></slot>
  </div>
</template>
