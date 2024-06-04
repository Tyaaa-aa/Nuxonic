import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const counter = ref(2)
  const doubleCount = computed(() => counter.value * 2)
  function increment() {
    counter.value++
  }
  function decrement() {
    counter.value--
  }

  return { counter, doubleCount, increment, decrement }
})