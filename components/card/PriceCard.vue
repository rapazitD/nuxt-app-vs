<template>
  <div class="flex flex-col bg-[#212435] rounded-3xl pl-4 pt-6">
    <div class="flex items-center gap-2.5">
      <h1 class="text-[40px] text-white font-bold">$50</h1>
      <p class="text-[#A0A8C3]">/ seat / month</p>
    </div>
    <p class="text-white font-bold pt-6 pr-[22px]">How many licenses do you need?</p>
    <div class="pr-[22px] rounded-[20px] mt-3">
      <div class="h-1 w-full bg-green"></div>
      <div class="w-full">
        <Ellipse class="size-3.5 relative bottom-[9px] left-1/2"/>
        <div class="flex justify-between items-start self-stretch text-[14px] text-[#737B98] relative bottom-[14px]">
          <p>5</p>
          <p>20</p>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-5 mb-6">
      <div class="flex items-center gap-2.5 px-3.5 bg-[#0E0E1033] rounded-lg">
        <People class="w-[18px] h-4"/>
        <h2 class="text-[26px] text-white font-bold text-center">12</h2>
        <p class="font-normal text-[#979FAD]">seats</p>
      </div>
      <p class="text-green font-medium">26% discount</p>
    </div>
  </div>
</template>

<script setup>
import Ellipse from '/public/assets/icons/card/ellipse.svg'
import People  from '/public/assets/icons/card/people.svg'
</script>

<style scoped>

</style>
