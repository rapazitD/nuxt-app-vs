<template>
  <div class="flex gap-12 flex-col pt-8 md:pt-12 md:w-[602px] xl:flex-row xl:w-[1224px] xl:pt-0">
    <div class="text-white text-center gap-6 flex flex-col items-center md:gap-10 xl:inline-flex xl:items-start xl:text-left xl:w-[570px] xl:pt-[100px]">
      <h1 class="text-[40px] md:text-[60px] md:w-[567px] font-bold leading-[normal]">
        {{firstWord}}<span class="text-green">{{' ' + coloredText + ' '}}</span>{{lastTextStrig}}
      </h1>
      <p class="font-normal leading-6 md:text-[22px] md:w-[570px] md:leading-[30px] text-center">
        {{heroText}}
      </p>
      <ButtonComponent
          :btn-name="btnText"
      />
    </div>
    <PeopleImage class="md:w-[602px] xl:pt-8"/>
  </div>
</template>

<script setup>
import PeopleImage from '../public/assets/people-image.svg'

const props = defineProps({
  heroText: {
    type: String,
    required: true
  },
  heroTitle: {
    type: String,
    required: true
  },
  btnText: {
    type: String,
    required: true
  }
});

const wordsArray = props.heroTitle.split(' ');
const firstWord = wordsArray[0]
const secondWord = wordsArray[1];
const thirdWord = wordsArray[2];
const coloredText = secondWord + ' ' + thirdWord;
wordsArray.splice(0, 3);
const lastTextStrig = wordsArray.join(' ')
</script>

<style scoped>

</style>
