<template>
  <div class="flex flex-col items-center gap-8 leading-[normal] w-[345px] mt-[120px] md:w-[570px] md:gap-[29px] md:mt-[140px] xl:w-[1165px] xl:justify-between xl:flex-row xl:gap-[auto] xl:mt-[180px]">
    <div class="flex flex-col items-center gap-[13px] text-center xl:text-left xl:items-start xl:w-[570px]">
      <p class="font-medium bg-gradient-to-r from-green to-[#00F0FF] text-transparent bg-clip-text md:text-2xl xl:text-left">
        YOUR #1 SOURCE OF VUE.JS COURSES
      </p>
      <h1 class="text-lightGray text-[40px] font-bold md:text-[60px]">
        Full Stack <span class="bg-gradient-to-r from-[#0CD890] from-0% to-[#01F0FD] to-39.47% bg-clip-text text-transparent">Vue Training</span> Solutions
      </h1>
    </div>
    <div class="flex justify-start items-start content-start gap-6 flex-wrap md:gap-[61px] xl:content-start xl:flex-none xl:w-[516px]">
      <GroupStats icon-name="play-icon" text="Video lessons" number="763"/>
      <GroupStats icon-name="book-icon" text="Courses" number="40"/>
      <GroupStats icon-name="watch-icon" text="15 Hours" number="64"/>
    </div>
  </div>
</template>

<script setup>
import GroupStats from "~/components/statistics/GroupStats.vue";
</script>

<style scoped>

</style>
