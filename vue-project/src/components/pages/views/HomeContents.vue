<script setup lang="ts">
import BaseTemplate from '@/components/templates/BaseTemplate.vue'
</script>

<template>
  <BaseTemplate>
    <template v-slot:oslot><div>aaa</div></template>
    <template v-slot:mslot>
      <div>HOME</div>
    </template>
  </BaseTemplate>
</template>
