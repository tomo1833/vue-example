<script setup lang="ts">
import CustomButton from '@/components/atoms/CustomButton.vue'
import BaseTemplate from '@/components/templates/BaseTemplate.vue'

import { ref } from 'vue'

const inputValue = ref<string>('') // 初期値は空にしておく
const todoList = ref<object[]>([]) // todoListの型を指定する

const clickAddEvent = () => {
  if (inputValue.value.trim() !== '') {
    // 入力値が空でない場合のみ追加する
    let todo: object = {
      title: inputValue.value,
      isDone: false
    }
    todoList.value.push(todo)
    inputValue.value = '' // 入力値をクリアする
  }
}

const clickDeleteEvent = (index: number) => {
  todoList.value.splice(index, 1)
}
</script>

<template>
  <BaseTemplate>
    <template v-slot:oslot></template>
    <template v-slot:mslot>
      <section>
        <input v-model="inputValue" type="text" placeholder="値を入力" />
        <CustomButton text="登 録" customClass="py-2 px-2" @click="clickAddEvent" />
        <ul>
          <li v-for="(todo, index) in todoList" :key="index">
            <input type="checkbox" v-model="todo.isDone" />
            <span :class="{ done: todo.isDone }">{{ todo.title }}</span>
            <CustomButton text="削 除" customClass="px-2" @click="clickDeleteEvent(index)" />
          </li>
        </ul>
      </section>
    </template>
  </BaseTemplate>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
