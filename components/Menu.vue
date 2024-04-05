<template>
  <div class="w-full h-[99px] px-12 py-5 sm:justify-between items-center inline-flex">
    <div class="w-[26px] h-[24px] mr-6 md:hidden">
      <HamburgerMenu />
    </div>
    <nav class="w-[170px] h-14 relative">
      <NuxtLink class="w-[170px]" to="/" aria-label="Vue school logo">
        <Logo />
      </NuxtLink>
    </nav>
    <div class="justify-start items-start gap-5 hidden xl:flex">
      <div class="justify-center items-center gap-1 flex" v-for="item in menuList">
        <div class="justify-start items-start gap-2.5 flex">
          <div class="text-violet-50 text-base font-normal font-['sans'] leading-normal">
            <NuxtLink :to="item.path">
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
        <div class="w-5 h-5 flex-col justify-center items-center gap-2.5" v-show="item.dropdown">
          <DropdownIcon />
        </div>
      </div>
    </div>
    <div class="justify-start items-center gap-[30px] hidden sm:flex">
      <div class="text-center text-white text-base font-normal font-['Rubik']">
        Log in
      </div>
      <ButtonComponent
          btn-name="Sing up"
          :borderBtn="true"
      />
    </div>
  </div>
</template>

<script setup>
  import Logo from "../public/assets/Logo.svg"
  import HamburgerMenu from "public/assets/icons/hamburger-menu.svg";
  import DropdownIcon from "public/assets/icons/dropdown-icon.svg";

  const menuList = [
    {name: 'Courses', path: '/courses', dropdown: true},
    {name: 'Plans', path: '/plans', dropdown: false},
    {name: 'Business Service', path: '/businessService', dropdown: true},
    {name: 'Learning Paths', path: '/learningPaths', dropdown: false},
    {name: 'Hiring', path: '/hiring', dropdown: false},
    {name: 'Articles', path: '/articles', dropdown: false},
    {name: 'Events', path: '/events', dropdown: true},
    {name: 'Articles', path: '/articles', dropdown: false},
    {name: 'Get Certified', path: '/getCertified', dropdown: false},
  ]
</script>

<style scoped>

</style>
