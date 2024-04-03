<template>
  <div class="w-[345px] flex gap-12 flex-col pt-8 md:w-[567px] md:pt-12 xl:flex-row xl:w-[1224px] xl:pt-0">
    <div class="text-white text-center gap-6 flex flex-col items-center md:gap-10 xl:inline-flex xl:items-start xl:text-left xl:w-[570px] xl:pt-[100px]">
      <h1 class="text-[40px] md:text-[60px] font-bold leading-[normal]">
        Complete <span class="text-green">Vue.js training</span> solutions for companies
      </h1>
      <p class="font-normal leading-6 md:font-[22px] md:leading-[30px]">
        Training solutions designed for companies, agencies and organisations with developers using or who are considering using the Vue.js framework
      </p>
      <ButtonComponent
          btn-name="Talk to Sales"
      />
    </div>
    <PeopleImage class="md:w-[602px] xl:pt-8"/>
  </div>
</template>

<script setup>
import PeopleImage from '../public/assets/people-image.svg'
</script>

<style scoped>

</style>
