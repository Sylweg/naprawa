<template>


  <ion-page id="main-content">


    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
       <h1 class="font" id="main-title">Świat kotów</h1>
       <img src="https://i.pinimg.com/originals/e1/a9/dc/e1a9dc761e7cdb6e99b88a2326e50b29.gif">
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import 'vue';

</script>

<style scoped>
#main-title{
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
