<template>
  <div class="start_view">
    <language-panel></language-panel>
    <img class="col-md-2 col-lg-1" src="@/assets/main_logo.png"/>
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
  margin-top: 150px;
}
.btn{
  margin-top: 60px;
}

h1{
  font-weight: 700;
}
</style>