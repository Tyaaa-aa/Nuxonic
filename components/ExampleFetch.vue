<template>
  <div class="w-screen min-h-[450px] overflow-x-hidden" v-auto-animate>
    <IonListHeader class="mx-2 mt-5 rounded-lg">
      <IonLabel>
        <h1 class="text-2xl m-5 font-bold">Example API</h1>
      </IonLabel>
    </IonListHeader>
    <div v-if="pending" class="flex justify-center items-center h-[350px]">
      <IonSpinner name="crescent" class="m-5" />
    </div>
    <div v-else-if="error">
      <h2 class="text-2xl mx-5">Something went wrong</h2>
    </div>
    <div v-else>
      <IonList lines="full" class="mx-5 rounded-lg">
        <IonItem v-for="user in data?.data" :key="user.id">
          <IonAvatar slot="start">
            <img :src="user.avatar" />
          </IonAvatar>
          <IonLabel>
            <h2>{{ user.first_name }} {{ user.last_name }}</h2>
            <p>{{ user.email }}</p>
          </IonLabel>
        </IonItem>
      </IonList>
    </div>
  </div>
  <div class="w-screen overflow-x-hidden flex justify-center">
    <IonButton @click="refresh" shape="round" color="light" class="mt-5 px-5">Refresh</IonButton>
  </div>
</template>

<script lang="ts" setup>
interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

interface ApiResponse {
    data: User[];
}

const { data, pending, error, refresh } = await useFetch<ApiResponse>("https://reqres.in/api/users?delay=1")

</script>
