<template>
    <ion-menu content-id="main-content" class="ion-padding">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu Content</ion-title>
        </ion-toolbar>
      </ion-header>

    </ion-menu>
  
    <ion-page id="main-content">

  
      <ion-content style=" margin-top: 56px;" :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Blank</ion-title>
          </ion-toolbar>
        </ion-header>
  
        <div id="container">
            <div v-if="isClicked">
                <div>Idą święta!!!</div>
                <embed name="GoodEnough" src="src\music\Mariah Carey - All I Want for Christmas Is You (Make My Wish Come True Edition).mp3" loop="false" hidden="true" autostart="true">
            <img src="https://media.tenor.com/adIZleFPj8UAAAAM/jumping-cat.gif" alt="">
        </div>
        <div v-else >
            <ion-button @click="check">???</ion-button>
        </div>
      </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import {ref} from 'vue';
  const isClicked = ref(false);
  
  const check = () => {
    isClicked.value = true;
  };
  

  </script>
  
  <style scoped>
  .main-text{
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 20px;
    font-size: large;
  }
  #container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  
  #container strong {
    font-size: 20px;
    line-height: 26px;
  }
  
  #container p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
  }
  
  #container a {
    text-decoration: none;
  }
  </style>
  