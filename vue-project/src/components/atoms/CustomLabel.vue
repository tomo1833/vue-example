<script setup lang="ts">
const props = defineProps({
  /**
   * テキスト.
   */
  text: { type: String, required: true },

  /**
   * spanタグのclass.
   */
  customClass: { type: String, required: false }
})
</script>

<template>
  <span :class="props.customClass" class="base-text">{{ props.text }}</span>
</template>
