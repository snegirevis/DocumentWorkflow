<template>
<div class="navbar">
 <div class="row nav_languages">
    <p class="col-1">RU</p>
    <p class="col-1 offset-1">KZ</p>
    <p class="col-1 offset-1">ENG</p>
 </div>
 </div>
</template>

<script>
export default{
    name:"language-panel"
}
</script>

<style scoped>
.navbar{
    display: flex;
    align-items: center;
    padding:50px 30px;
    
}
.nav_languages{
   margin-left: auto;
}
</style>