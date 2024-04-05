<template>
  <div :class="disableLine()" class="flex items-center gap-4 w-[297px] md:w-[592px] xl:w-full">
    <Check v-if="enabled" class="size-[18px]"/>
    <Uncheck v-else class="size-[18px]"/>
    <div class="flex items-center justify-between w-full">
      <p class="text-sm text-lightGray">{{ props.priceObject.title }}</p>
      <Info v-show="enabled" class="size-3.5"/>
    </div>
  </div>
</template>

<script setup>
import Info from "public/assets/icons/card/info.svg";
import Check from "public/assets/icons/card/check.svg";
import Uncheck from "public/assets/icons/card/uncheck.svg";

const props = defineProps({
  priceObject: {
    type: Object,
    required: true
  }
})
const enabled = props.priceObject.checkbox;

function disableLine() {
  return props.priceObject.checkbox ? '' : 'opacity-25';
}
</script>

<style scoped>

</style>
