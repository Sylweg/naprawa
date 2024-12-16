<template>
    <ion-page id="main-content">
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Blank</ion-title>
          </ion-toolbar>
        </ion-header>
  
        <div id="container">
          <h1 class="font" id="main-title">Kliknij by zobaczyć kotki</h1>
          <ion-button @click="openModal">Kliknij mnie!</ion-button>
        </div>
  
        <ion-modal :is-open="isModalOpen" @didDismiss="closeModal" >
          <div style="padding: 20px; text-align: center;">
            <p>Oto wspaniałe kotki!</p>
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <img class="gallery-img" src="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" alt="nope">
                    </ion-col>
                    <ion-col >
                        <img class="gallery-img" src="https://media.tenor.com/aJeIvS0AuHcAAAAe/cat1.png" alt="nope">
                    </ion-col>
                    <ion-col >
                        <img class="gallery-img" src="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" alt="nope">
                    </ion-col>
                    <ion-col >
                        <img class="gallery-img" src="https://i.ytimg.com/vi/rvX8cS-v2XM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCF0zNNCUpNmTYhJxWG7VWjmvmybA" alt="nope">
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <img class="gallery-img" src="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" alt="nope">
                    </ion-col>
                    <ion-col >
                        <img class="gallery-img" src="https://media.tenor.com/aJeIvS0AuHcAAAAe/cat1.png" alt="nope">
                    </ion-col>
                    <ion-col >
                        <img class="gallery-img" src="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" alt="nope">
                    </ion-col>
                    <ion-col >
                        <img class="gallery-img" src="https://i.ytimg.com/vi/rvX8cS-v2XM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCF0zNNCUpNmTYhJxWG7VWjmvmybA" alt="nope">
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <img class="gallery-img" src="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" alt="nope">
                    </ion-col>
                    <ion-col >
                        <img class="gallery-img" src="https://media.tenor.com/aJeIvS0AuHcAAAAe/cat1.png" alt="nope">
                    </ion-col>
                    <ion-col >
                        <img class="gallery-img" src="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg" alt="nope">
                    </ion-col>
                    <ion-col >
                        <img class="gallery-img" src="https://i.ytimg.com/vi/rvX8cS-v2XM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCF0zNNCUpNmTYhJxWG7VWjmvmybA" alt="nope">
                    </ion-col>
                </ion-row>
            </ion-grid>
            <ion-button @click="closeModal">Zamknij</ion-button>
          </div>

        </ion-modal>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const isModalOpen = ref(false);
  
  const openModal = () => {
    isModalOpen.value = true;
  };
  
  const closeModal = () => {
    isModalOpen.value = false;
  };
  </script>
  
  <style scoped>

  .gallery-img {
    width: 100%;
    height: 100px;
    border-radius: 5px;
  }
  #main-title {
    font-size: 100px;
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
  