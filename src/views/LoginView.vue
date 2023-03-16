<template>
    <div class="start_view">
      <language-panel></language-panel>
      <img class="col-2 col-sm-2 col-md-2 col-lg-1 col-lg-1" src="@/assets/main_logo.png"/>
      <div class="container main_block">
      <h1 class="col-sm">Документооборот</h1>

      <div class="container start_login">
         <div class="">
          <start-input v-focus placeholder="Логин"></start-input>
         </div>
         <div class="start_password">
          <start-input placeholder="Пароль"></start-input>
         </div>
          <start-button class="btn" @click="$router.push('/main')">Войти</start-button>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  export default{
     
  }
  </script>
  
  <style scoped>

  .main_block{
    margin-top: 3vw;
  }
  .btn{
    margin-top: 1vw;
    font-size: 1vw;
    padding: 0.5vw 1vw;
    width:25vw;
    border-radius: 3px;
    
  }
  
  h1{
    font-weight: 700;
    font-size: 4vw;;
  }
  .start_login{
   margin-top: 3vw;
   margin-right: auto;
   margin-left: auto;
  }

  .start_password{
    margin-top: 1vw;
  }
  
  </style>