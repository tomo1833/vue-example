<script setup lang="ts">
// `defineProps` を使用してコンポーネントのプロパティを定義
const props = defineProps({
  /**
   * テキスト.
   */
  text: { type: String, required: true },

  /**
   * ボタンタグのclass.
   */
  customClass: { type: String, required: false }
})

/**
 * クリックイベント.
 */
const emit = defineEmits(['click'])

// クリックイベントハンドラ
const clickEvent = (event?: any) => {
  emit('click', event)
}
</script>

<template>
  <button
    type="button"
    :class="[
      'bg-blue-500',
      'hover:bg-blue-700',
      'text-white',
      'font-bold',
      'py-1',
      'px-1',
      'border',
      'border-blue-700',
      'rounded',
      props.customClass
    ]"
    @click="clickEvent"
  >
    {{ props.text }}
  </button>
</template>
