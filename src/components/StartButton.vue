<template>
  <button class="start_btn">
     <slot></slot>
  </button>
</template>

<script>
export default{
    name:"start-button"
}
</script>

<style scoped>
.start_btn{
background: linear-gradient(180deg, #FFFFFF 41.67%, #E2DFDF 100%);
border: 1.5px solid #0C0B0B;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px; 
align-self: center;
padding: 20px 25px;
font-family: 'Montserrat', sans-serif;
font-weight: 600;
}
</style>