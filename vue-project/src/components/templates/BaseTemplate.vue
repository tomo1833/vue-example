<script setup lang="ts">
import BaseHeder from '@/components/organisms/BaseHeader.vue'
import BaseAside from '@/components/organisms/BaseAside.vue'
import BaseMain from '@/components/organisms/BaseMain.vue'
import BaseOverlay from '../organisms/BaseOverlay.vue'
</script>

<template>
  <div class="bg-gray-100 h-screen overflow-hidden">
    <BaseOverlay><slot name="oslot"></slot></BaseOverlay>
    <BaseHeder class="bg-blue-500 text-white p-4" />
    <div class="flex h-full">
      <BaseAside class="bg-gray-800 text-white p-4 w-96 hidden md:block overflow-y-auto" />
      <BaseMain class="flex-1 p-4 overflow-y-auto"><slot name="mslot"></slot></BaseMain>
    </div>
  </div>
</template>
