<template>
  <div class="flex flex-col w-[345px] md:w-[570px]">
    <div class="flex flex-row items-center px-4 gap-3 h-[68px] rounded-t-[30px] bg-gradient-to-r from-[#4F08E680] from-5% to-[#FF497580] to-95%">
      <Calendar class="w-[18px] h-5"/>
      <p class="text-lightGray font-medium leading-[normal]">December 14th - 11:00 AM (GMT-3)</p>
    </div>
    <div class="flex flex-col items-start bg-[#2B2F44] px-4 py-[35px] gap-5 rounded-b-[30px] md:p-[35px]">
      <div class="flex items-center gap-[35px]">
        <div class="flex items-center gap-3">
          <PlayGray class="size-5"/>
          <p class="text-[#737B98] text-sm">LIVE Training</p>
        </div>
        <div class="flex items-center gap-2">
          <WatchGray class="size-5"/>
          <p class="text-[#737B98] text-sm">15 Hours</p>
        </div>
      </div>
      <div class="flex flex-col items-start gap-3">
        <h3 class="text-2xl font-medium text-lightGray">Vue.js Fundamentals</h3>
        <p class="text-sm text-[#737B98]">
          A progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally...
        </p>
      </div>
      <div class="gap-3 flex">
        <PictureIcon class="h-6"/>
        <p class="text-sm text-[#737B98]">Steve Popoola</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Calendar from '/public/assets/icons/trainingCard/calendar.svg'
import PlayGray from '/public/assets/icons/trainingCard/play-gray.svg'
import WatchGray from '/public/assets/icons/trainingCard/watch-gray.svg'
import PictureIcon from '/public/assets/icons/trainingCard/pictureIcon.svg'
</script>

<style scoped>

</style>
