<template>
  <div class="start_view">
    <language-panel></language-panel>
    <img class="col-2 col-sm-2 col-md-2 col-lg-1 col-lg-1" src="@/assets/main_logo.png"/>
    <div class="container main_block">
    <h1 class="col-sm">Документооборот</h1>
    <start-button class="col-sm btn" @click="$router.push('/login')">Добро пожаловать!</start-button>
    </div>
  </div>
</template>

<script>
export default{
   
}
</script>

<style scoped>
.main_block{
  margin-top: 5vw;
}
.btn{
  margin-top: 4vw;
  height: 5vw;
  font-size: 1.3vw;
  border-radius: 20px;
  padding: 1vw 2vw;
}

h1{
  font-weight: 700;
  font-size: 4vw;;
}
</style>