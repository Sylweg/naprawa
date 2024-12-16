<template>

    <ion-menu content-id="main-content" class="ion-padding">
      <ion-header>
        <ion-toolbar>
          <ion-title>Przejdź do</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row>
          <ion-button style="width: 100%;" href="/home">Strona powitalna</ion-button>
        </ion-row>
        <ion-row>
          <ion-button style="width: 100%;" href="/page-two">Historia kotów</ion-button>
        </ion-row>
        <ion-row>
          <ion-button style="width: 100%;" href="/page-three">???</ion-button>
        </ion-row>
        <ion-row>
          <ion-button style="width: 100%;" href="/page-four">Więcej kotów!</ion-button>
        </ion-row>
      </ion-grid>
    </ion-menu>

      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Świat Kotów</ion-title>
        </ion-toolbar>
      </ion-header>
    <ion-app>
      <ion-router-outlet />
    </ion-app>


</template>

<script setup lang="ts">
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonMenu,
  IonGrid,
  IonRow,
  IonButton,
  IonRouterOutlet
} from '@ionic/vue';
</script>

<style>

</style>
