<template>
  <IonPage>
    <IonContent :fullscreen="true" :scroll-x="false">
      <div class="w-screen overflow-x-hidden mt-5 place-items-center grid">
        <div class="flex flex-col items-center text-center">
          <h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl mb-5">Nuxonic</h1>
          <p class="text-3xl mx-5 mb-5 font-bold">An Ionic Vue 3 Template</p>
          <p class="text-2xl mx-5 mb-5 font-bold">Tailwind CSS, Pinia, and AutoAnimate</p>
          <h2 class="text-2xl m-5 font-bold">Router</h2>
          <IonButton router-link="/about" shape="round" color="light" size="large">/about</IonButton>
          <PiniaCounter />
        </div>
        <h2 class="text-2xl m-5 font-bold">AutoAnimate</h2>
        <IonList class="w-96 mb-5 rounded-lg p-0" lines="full" v-auto-animate>
          <IonItemSliding v-for="pokemon in pokeList" :key="pokemon">
            <IonItem :button="true">
              <IonLabel>{{ pokemon }}</IonLabel>
            </IonItem>
            <IonItemOptions slot="end">
              <IonItemOption color="danger" expandable @click="removePokemon(pokemon)">
                <IonIcon slot="icon-only" :icon="trash"></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>
        <IonButton @click="shufflePokemon" shape="round" color="light" v-if="pokeList.length > 1">
          Shuffle List
        </IonButton>
        <IonButton @click="resetPokeList" shape="round" color="light" v-else>
          Reset List
        </IonButton>
        <ExampleFetch />
        <FooterComponent />
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { trash } from 'ionicons/icons'

const pokeList = ref(['Charmander', 'Bulbasaur', 'Squirtle', 'Pikachu', 'Jigglypuff'])

const resetPokeList = () => pokeList.value = ['Charmander', 'Bulbasaur', 'Squirtle', 'Pikachu', 'Jigglypuff']

const shufflePokemon = () => {
  for (let i = pokeList.value.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = pokeList.value[i]
    pokeList.value[i] = pokeList.value[j]
    pokeList.value[j] = temp
  }
}

const removePokemon = (pokemon: string) => pokeList.value = pokeList.value.filter(p => p !== pokemon)

</script>
