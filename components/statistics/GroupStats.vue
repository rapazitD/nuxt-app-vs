<template>
  <div class="flex gap-[11px] flex-col items-center">
    <h1 class="text-6xl bg-gradient-to-r from-green to-[#00F0FF] text-transparent bg-clip-text font-medium text-center md:text-[90px]">
      {{ number }}
    </h1>
    <div class="flex items-center gap-2.5 ">
      <component :is="iconComponent" class="size-[18px]"/>
      <p class="text-sm text-lightGray font-normal leading-[normal]">
        {{text}}
      </p>
    </div>
  </div>
</template>

<script setup>
import loadSvgComponent from "~/utils/loadSvgComponent.js";
const iconComponent = shallowRef(null);

const props = defineProps({
  number: {
    type: [String, Number],
    required: true
  },
  text: {
    type: [String, Number],
    required: true
  },
  iconName: {
    type: String,
    required: true,
  }
})

onMounted(async () => {
  iconComponent.value = await loadSvgComponent(props.iconName, 'statistics');
});
</script>

<style scoped>

</style>
