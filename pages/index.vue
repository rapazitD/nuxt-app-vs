<template>
  <div class="w-[345px] md:w-[688px] xl:w-[1170px] flex flex-col items-center">
    <HeroComponent
        :hero-title="data[0].heroTitle"
        :hero-text="data[0].heroText"
        :btn-text="data[0].btnText"
    />
    <InfoSection/>
    <Google class="max-xl:hidden"/>
    <Statistics
        :videos="data[0].videoLessons"
        :courses="data[0].courses"
        :hours="data[0].hours"
    />
    <div class="w-[345px] flex items-center mt-[120px] md:mt-[140px] md:w-[688px] xl:w-[752px] xl:mt-[200px]">
      <h1 class="text-white font-bold text-[40px] leading-[normal] text-center md:text-[60px]">
        Discounted <span class="text-transparent bg-clip-text bg-gradient-to-r from-green to-[#00F0FF]">Corporate Training</span> Bundles
      </h1>
    </div>
    <div class="flex flex-col items-start gap-6 self-stretch mt-[56px] md:mt-[72px] xl:mt-[120px] xl:flex-row">
      <Card v-for="(item, key) in data[0].cards"
            :title="item.title"
            :icon-name="item.icon"
            :card-obj="item.options"
            :card-index="key"
      />
    </div>
    <TrainingComponent/>
    <FooterComponent/>
  </div>
</template>

<script setup>
import TrainingComponent from "~/components/TrainingComponent.vue";

const query = groq`*[_type == 'home']{
heroTitle,
courses,
cards[]{
  icon,
  title,
  options[]{
    checkbox,
    title,
    textBold
  }
},
videoLessons,
hours,
btnText,
heroText
}`

const sanity = useSanity()
const { data } = await useAsyncData('cards', () => sanity.fetch(query))

console.log(data)
</script>

<style>

</style>
