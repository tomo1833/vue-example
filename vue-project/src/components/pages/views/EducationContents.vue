<script setup lang="ts">
import BaseTemplate from '@/components/templates/BaseTemplate.vue'
import { ref, computed } from 'vue'

const currentQuestionIndex = ref<number>(0)

const selectedAnswer = ref<number>(-1)

const correctAnswers = ref<number>(0)

const questionsList = [
  {
    question: 'バージョン管理ツールに関するスキル',
    answers: ['Vue.js', 'Git', 'Python', 'MySQL'],
    correctAnswer: 1
  },
  {
    question: 'プログラミング言語で使用されるデータベースのクエリ言語',
    answers: ['HTML', 'CSS', 'SQL', 'Java'],
    correctAnswer: 2
  },
  {
    question: 'クラウドサービスプロバイダーの一つ',
    answers: ['Docker', 'AWS', 'jQuery', 'Ruby'],
    correctAnswer: 1
  },
  {
    question: 'システムのモジュールやコンポーネントのテストを自動化するためのツール',
    answers: ['Jira', 'Jenkins', 'Selenium', 'Angular'],
    correctAnswer: 2
  },
  {
    question: 'インフラストラクチャのコード化のツール',
    answers: ['Chef', 'React', 'TypeScript', 'PHP'],
    correctAnswer: 0
  }
]

const currentQuestion = computed(() => {
  return questionsList[currentQuestionIndex.value]
})

const selectAnswer = (index: number) => {
  selectedAnswer.value = index;
}

const checkAnswer = () => {
  if (selectedAnswer.value !== null) {
    if (selectedAnswer.value === currentQuestion.value.correctAnswer) {
      correctAnswers.value++
    }
  }
  selectedAnswer.value = -1
  currentQuestionIndex.value++

  if (currentQuestionIndex.value === questionsList.length) {
    // テスト終了
    currentQuestionIndex.value = -1
  }
}
</script>

<template>
  <BaseTemplate>
    <template v-slot:oslot>
      <div class="fixed top-1/2 left-1/2 bg-white">
        <ErrorDialog />
      </div>
    </template>
    <template v-slot:mslot>
      <div v-if="currentQuestion" class="grid w-full text-center">
        <div class="py-8">
          <p class="text-4xl">{{ currentQuestion.question }}</p>
        </div>
        <div>
          <div class="grid grid-cols-2 gap-4">
            <button
              v-for="(answer, index) in currentQuestion.answers"
              :key="index"
              :class="{ 'bg-green-400': selectedAnswer === index, 'bg-green-200': selectedAnswer !== index }"  
               class="w-full text-lg py-2 shadow-lg"
              @click="selectAnswer(index)"
            >
              {{ answer }}
            </button>
          </div>
        </div>
        <div class="py-8">
          <button class="w-full text-2xl bg-cyan-400 py-4 shadow-lg" @click="checkAnswer">次の質問</button>
        </div>
      </div>
      <div v-else class="grid w-full text-center">
        <div class="py-8">
          <p class="text-4xl">テスト終了</p>
        </div>
        <div class="py-8">
          <p class="text-4xl">正解数: {{ correctAnswers }}</p>
        </div>
      </div>
    </template>
  </BaseTemplate>
</template>


