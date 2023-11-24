<script setup lang="ts">
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
        <button type="button" @click="clickAddEvent">登録</button>
        <ul>
          <li v-for="(todo, index) in todoList" :key="index">
            <input type="checkbox" v-model="todo.isDone" />
            <span :class="{ done: todo.isDone }">{{ todo.title }}</span>
            <button type="button" @click="clickDeleteEvent(index)">削除</button>
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
