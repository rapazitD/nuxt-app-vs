<template>
  <button class="h-[59px]" :class="firstClass" role="button">
    <div :class="firstDiv">
      <div :class="secondDiv">
        <p class="text-center text-base font-medium font-['Rubik']">
          {{btnName}}
        </p>
      </div>
    </div>
  </button>
</template>

<script setup>
const props = defineProps({
  btnName: {
    type: String,
    required: true
  },
  borderBtn: Boolean
})

const firstClass = props.borderBtn ? 'borderBtn' : 'filledBtn';
const firstDiv = props.borderBtn ? 'firstDiv' : '';
const secondDiv = props.borderBtn ? 'secondDiv' : '';

</script>

<style scoped>
.filledBtn {
  @apply rounded-xl items-center justify-center inline-flex px-10 py-5 bg-[#0BD88F] text-[#212435];
}
.filledBtn:hover {
  @apply bg-gradient-to-b from-[#0BD88F] from-10% to-[#00C2FF];
}
.borderBtn {
  @apply h-[59px] flex items-center justify-center  text-[#0BD88F];
}

.borderBtn:hover {
  @apply text-[#212435];
}

.firstDiv:hover {
  @apply bg-gradient-to-b from-[#0BD88F] from-10% to-[#00C2FF];
}

.secondDiv:hover {
  @apply bg-gradient-to-b from-[#0BD88F] from-10% to-[#00C2FF];
}

.firstDiv {
  @apply h-[59px] w-full rounded-xl bg-gradient-to-r from-[#0BD88F] to-[#00C2FF] to-90% p-[2px];
}

.secondDiv {
  @apply flex h-full w-full items-center justify-center bg-[#212435] rounded-xl py-5 px-10;
}
</style>
