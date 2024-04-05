<template>
  <div class="grid md:grid-cols-3 xl:grid-cols-2 gap-8">
    <div v-for="item in menuList" class="flex justify-center md:justify-start">
      <div>
        <h4 class="text-[22px] mb-5 font-medium text-[#737B98] text-center md:text-start">
          {{item.name}}
        </h4>
        <ul class="pb-3.5 last:pb-0" v-for="page in item.pages">
          <li class=""><p class="text-center text-white md:text-start">{{page.name}}</p></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const menuList = [
  {
    name: 'PRODUCTS',
    pages: [
      {name: 'Courses', path: 'products/courses'},
      {name: 'Workshops', path: ''},
      {name: 'Vue Masterclass', path: ''},
      {name: 'Mastering Nuxt', path: ''}
  ]},
  {
    name: 'CORPORATE',
    pages: [
      {name: 'Corporate Training', path: ''},
      {name: 'Developer Recruitment', path: ''},
      {name: 'Course Development', path: ''},
      {name: 'On-site Workshops', path: ''},
      {name: 'Consulting', path: ''},
      {name: 'Affiliate Programs', path: ''}
  ]},
  {
    name: 'CONNECT WITH US',
    pages: [
      {name: 'About Us', path: ''},
      {name: 'Careers', path: ''},
      {name: 'Contact Us', path: ''}
  ]},
  {
    name: 'EVENTS',
    pages: [
      {name: 'Vue.js Nation', path: ''},
      {name: 'Nuxt Nation', path: ''},
      {name: 'Vue.js Forge', path: ''}
  ]},
  {
    name: 'RESOURCES',
    pages: [
      {name: 'Articles', path: ''}
  ]},
  {
    name: 'PRICING',
    pages: [
      {name: 'Plans', path: ''}
  ]}

]
</script>

<style scoped>

</style>
