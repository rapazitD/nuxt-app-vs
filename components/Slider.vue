<template>
  <div class="flex w-[375px] overflow-x-scroll scrollbar md:w-[765px] xl:w-[1440px]">
    <div class="flex gap-2 ml-[15px] md:ml-10 md:gap-[30px]">
      <TrainingCard/>
      <TrainingCard/>
      <TrainingCard/>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

  .scrollbar::-webkit-scrollbar {
    display: none;
  }

  .scrollbar::-webkit-scrollbar-track {
    display: none;
  }

  .scrollbar::-webkit-scrollbar-thumb {
    display: none;
  }
</style>
