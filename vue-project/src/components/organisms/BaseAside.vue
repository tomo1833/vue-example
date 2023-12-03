<script setup lang="ts">
import AsideMenu from '@/components/molecuels/AsideMenu.vue'
</script>

<template>
  <aside>
    <div class="mx-8 my-4">
      <AsideMenu customClass="p-1" text="ホーム" linkPath="/" />
      <AsideMenu text="アニメ" customClass="p-4" linkPath="/anime" />
      <AsideMenu text="折れ線グラフ" customClass="p-4" linkPath="/line" />
      <AsideMenu text="TODO" customClass="p-4" linkPath="/todo" />
      <AsideMenu text="クイズ" customClass="p-4" linkPath="/quize" />
      <AsideMenu text="会議室予約システム" customClass="p-4" linkPath="/mars" />
    </div>
  </aside>
</template>
