<template>
    <div class="bg-[#2B2F44E5] flex flex-col justify-start gap-8 border-[1px] border-[#A0A8C3] border-solid rounded-[30px] py-10 px-6 md:mx-6">
      <div class="flex gap-4 items-center">
        <component :is="iconComponent" class="size-8"/>
        <h2 class="text-lightGray text-2xl font-bold">
          {{title}}
        </h2>
      </div>
      <div class="flex flex-col items-start gap-6">
        <p class="text-green font-normal">
          Includes 1 year access to:
        </p>
        <div class="flex flex-col items-start gap-4 xl:w-full">
          <CheckBoxLine v-for="item in cardObj" :price-object="item"/>
        </div>
      </div>
      <Promotion v-show="props.cardIndex === 1"/>
      <PriceCard/>
      <div class="flex items-center flex-col gap-6">
        <button-component btn-name="Start Learning"/>
        <p class="text-green font-medium text-center">
          Refer your manager
        </p>
      </div>
    </div>
</template>

<script setup>
import loadSvgComponent from "/utils/loadSvgComponent.js";
const iconComponent = shallowRef(null);
import CheckBoxLine from "~/components/card/CheckBoxLine.vue";
import PriceCard from "~/components/card/PriceCard.vue";
import Promotion from "~/components/card/Promotion.vue";

const props = defineProps({
  cardObj: {
    type: Array
  },
  title: {
    type: String,
    required: true
  },
  iconName: {
    type: String,
    required: true
  },
  cardIndex: {
    type: Number,
    required: true
  }
})

onMounted(async () => {
  iconComponent.value = await loadSvgComponent(props.iconName, 'card');
});

</script>

<style scoped>

</style>
