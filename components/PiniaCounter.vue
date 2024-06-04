<template>
  <div>
    <h2 class="text-2xl m-5 font-bold">Pinia</h2>
    <div class="flex gap-2 mb-2">
      <ion-button shape="round" color="light" @click="store.increment">
        <span>
          Increment
        </span>
      </ion-button>
      <ion-button shape="round" color="light" fill="outline" @click="store.decrement">
        <span class="text-white">
          Decrement
        </span>
      </ion-button>
    </div>
    <div class="flex flex-col">
      <span class="text-2xl">Count: {{ store.counter }}</span>
      <span class="text-2xl">Double: {{ store.doubleCount }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useMainStore()
</script>
