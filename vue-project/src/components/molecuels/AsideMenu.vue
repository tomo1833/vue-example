<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CustomLabel from '@/components/atoms/CustomLabel.vue'
const props = defineProps({
  /**
   * テキスト.
   */
  text: { type: String, required: true },

  /**
   * リンクパス.
   */
  linkPath: { type: String, required: true },

  /**
   * divタグのclass.
   */
  customClass: { type: String, required: false }
})
</script>

<template>
  <div :class:="props.customClass" class="py-4">
    <RouterLink :to="props.linkPath">
      <CustomLabel class="text-2xl" :text="props.text" />
    </RouterLink>
  </div>
</template>
