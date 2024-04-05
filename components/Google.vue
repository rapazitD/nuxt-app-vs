<template>
  <div class="flex justify-between w-[1170px]">
    <div v-for="item in nrComponents" class="py-2.5 w-[169px] flex justify-center mt-16">
      <GoogleLogo class="w-[118.6px] h-10"/>
    </div>
  </div>
</template>

<script setup>
import GoogleLogo from '/public/assets/logo/google-logo.svg'
const nrComponents = ref(6);
</script>

<style scoped>

</style>
