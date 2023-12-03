<script setup lang="ts">
import BaseTemplate from '@/components/templates/BaseTemplate.vue'
</script>

<template>
  <BaseTemplate>
    <template v-slot:oslot><div>aaa</div></template>
    <template v-slot:mslot>
      <div id="reserv-list" class="relative box-border border-2 border-black">
  
        <div id="reserve-list-row" class="grid">

          <!-- 24時間表記 -->
          <div class="grid grid-cols-[150px_1fr] border-b-2 border-black">
            <div></div>
            <div class="grid grid-cols-[repeat(24,_minmax(0,_1fr))]">
              <template v-for="index in 24" :key="index">
                <span class="py-4 font-bold text-center self-center">{{ index }}</span>
              </template>
            </div>
          </div>

          <!-- 縦線 -->
          <div class="grid grid-cols-[150px_1fr] absolute w-full h-full bg-transparent">
            <div></div>
            <div class="grid grid-cols-[repeat(24,_minmax(0,_1fr))]">
              <template v-for="index in 24" :key="index">
                <span class="border-l-2 border-black border-dashed"></span>
              </template>
            </div>
          </div>

          <!-- 会議室1 -->
          <div class="grid grid-cols-[150px_1fr] border-t-2 border-black">
            <div class="flex items-center justify-center"><p>会議室</p></div>
            <ul class="grid grid-cols-[repeat(24,_minmax(0,_1fr))] text-center m-0 py-4">
              <li :class="['col-[10_/12]', 'bg-cyan-400', 'rounded-full', 'shadow-xl', 'py-1', 'z-10']">ユーザ</li>
            </ul>
          </div>

          <!-- 会議室2 -->
          <div class="grid grid-cols-[150px_1fr] border-t-2 border-black">
            <div class="flex items-center justify-center"><p>会議室</p></div>
            <ul class="grid grid-cols-[repeat(24,_minmax(0,_1fr))] text-center m-0 py-4">
              <li :class="['col-[10_/12]', 'bg-cyan-400', 'rounded-full', 'shadow-xl', 'py-1', 'z-10']">ユーザ</li>
              <li :class="['col-[15_/18]', 'bg-cyan-400', 'rounded-full', 'shadow-xl', 'py-1', 'z-10']">ユーザ</li>
              <li :class="['col-[20_/22]', 'bg-cyan-400', 'rounded-full', 'shadow-xl', 'py-1', 'z-10']">ユーザ</li>
            </ul>
          </div>

        </div>

      </div>
    </template>

  </BaseTemplate>
</template>
