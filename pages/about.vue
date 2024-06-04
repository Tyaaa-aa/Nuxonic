<template>
  <IonPage>
    <IonContent :fullscreen="true">
      <div class="w-screen mt-5 place-items-center grid">
        <div class="flex flex-col items-center text-center">
          <PiniaCounter />
        </div>
        <IonButton router-link="/" shape="round" color="light" size="large" class="mt-5">Back Home</IonButton>
      </div>
    </IonContent>
    <FooterComponent />
  </IonPage>
</template>
