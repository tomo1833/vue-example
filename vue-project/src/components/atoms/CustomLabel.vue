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
  <span :class="['base-text', props.customClass]">{{ props.text }}</span>
</template>
