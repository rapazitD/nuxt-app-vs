<template>
  <div class="justify-center">
    <h1> Welcome to {{pageName}} page ! </h1>
  </div>
</template>

<script setup>
  let pageName = useRoute().name

  pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1)
</script>

<style scoped>

</style>
