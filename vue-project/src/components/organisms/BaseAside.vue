<script setup lang="ts">
import AsideMenu from '@/components/molecuels/AsideMenu.vue'
</script>

<template>
  <aside>
    <div class="mx-8 my-4">
      <AsideMenu class="py-2" text="ホーム" linkPath="/" />
      <AsideMenu text="アニメ" linkPath="/anime" />
      <AsideMenu text="折れ線グラフ" linkPath="/line" />
    </div>
  </aside>
</template>
