<template>
  <div class="grid grid-cols-1 mt-[100px] gap-12 xl:grid-cols-2 md:gap-16 md:mt-[140px] xl:mt-[200px]">
    <div class="flex flex-col items-center gap-[32px] md:gap-[40px] xl:items-start xl:gap-0">
      <FooterLogo class="w-[268px] h-[88px]"/>
      <div>
        <p class="text-white text-center leading-6 xl:text-start">Thanks to fine people like you, Vue School can proudly sponsor Evan and the future of Vue.js by being a Platinum Patreon</p>
      </div>
      <div class="flex flex-col gap-6 md:gap-[32px]">
        <h3 class="text-[#737B98] text-center font-medium text-[22px] xl:text-start">FOLLOW US IN SOCIAL MEDIA</h3>
        <MediaComponent/>
      </div>
    </div>
    <div>
      <FooterMenu/>
    </div>
  </div>
</template>

<script setup>
import FooterLogo from "/public/assets/FooterLogo.svg";
import MediaComponent from "~/components/footer/MediaComponent.vue";
import FooterMenu from "~/components/footer/FooterMenu.vue";
</script>

<style scoped>

</style>
