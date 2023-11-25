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
  linkPath: { type: String, required: true, default: '/' },

  /**
   * divタグのclass.
   */
  customClass: { type: String, required: false }
})
</script>

<template>
  <div :class="['py-1', props.customClass]">
    <RouterLink :to="props.linkPath">
      <CustomLabel class="text-2xl" :text="props.text" />
    </RouterLink>
  </div>
</template>
