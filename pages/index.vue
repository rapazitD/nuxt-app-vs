<template>
  <div class="w-[345px] md:w-[688px] xl:w-[1170px] flex flex-col items-center">
    <HeroComponent/>
    <InfoSection/>
    <Google class="max-xl:hidden"/>
    <Statistics/>
    <div class="w-[345px] flex items-center mt-[120px] md:mt-[140px] md:w-[688px] xl:w-[752px] xl:mt-[200px]">
      <h1 class="text-white font-bold text-[40px] leading-[normal] text-center md:text-[60px]">
        Discounted <span class="text-transparent bg-clip-text bg-gradient-to-r from-green to-[#00F0FF]">Corporate Training</span> Bundles
      </h1>
    </div>
    <div class="flex flex-col items-start gap-6 self-stretch mt-[56px] md:mt-[72px] xl:mt-[120px] xl:flex-row">
      <Card v-for="(item, key) in cardObj"
            :title="item.title"
            :icon-name="item.icon"
            :card-obj="item.options"
            :card-index="key"
      />
    </div>
    <TrainingCard/>
    <div class="h-40"></div>
  </div>
</template>

<script setup>
const cardObj = [
  {
    title: 'Basic',
    icon: 'leaf',
    options: [
      {checkbox: true, title: 'All Video Courses', textBold: false},
      {checkbox: true, title: 'Vue.Js Master class', textBold: false},
      {checkbox: true, title: 'Developer assist Slack channel', textBold: false},
      {checkbox: false, title: 'Live Weekly QnA', textBold: false},
      {checkbox: false, title: '1 x ws ticket per license', textBold: false}
    ]
  },
  {
    title: 'Professional',
    icon: 'rocket',
    options: [
      {checkbox: true, title: 'All Video Courses', textBold: false},
      {checkbox: true, title: 'Vue.Js Master class', textBold: false},
      {checkbox: true, title: 'Developer assist Slack channel', textBold: false},
      {checkbox: false, title: 'Live Weekly QnA', textBold: true},
      {checkbox: false, title: '1 x ws ticket per license', textBold: true}
    ]
  },
  {
    title: 'Basic',
    icon: 'bolt',
    options: [
      {checkbox: true, title: 'All Video Courses', textBold: false},
      {checkbox: true, title: 'Vue.Js Master class', textBold: false},
      {checkbox: true, title: 'Developer assist Slack channel', textBold: false},
      {checkbox: false, title: 'Live Weekly QnA', textBold: false},
      {checkbox: false, title: '4 x Virtual Workshop of your choice', textBold: true}
    ]
  },
];
</script>

<style>

</style>
