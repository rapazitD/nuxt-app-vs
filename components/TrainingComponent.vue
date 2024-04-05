<template>
  <div class="w-full flex flex-col items-center mt-[120px] md:mt-[140px] xl:mt-[160px]">
    <div class="xl:flex">
      <h1 class="text-[40px] font-bold text-white text-center xl:text-6xl xl:text-start">Available Workshops</h1>
      <div class="hidden xl:block xl:ml-[279px]">
        <ButtonComponent
            btn-name="See all the workshops"
        />
      </div>
    </div>
    <Slider class="mt-14 md:mt-[72px]"/>
    <div class="xl:hidden">
      <ButtonComponent
          class="mt-[40px] md:mt-14"
          btn-name="See all the workshops"
      />
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>
